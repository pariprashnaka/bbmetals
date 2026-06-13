import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

/* ── CHART COMPONENTS ── */

function BarChart({ data, title, unit, color = 'var(--accent)' }) {
  const max = Math.max(...data.map(d => d.value));
  return (
    <div style={{ background: 'var(--light)', border: '1px solid var(--rule-lt)', padding: 24, borderRadius: 2, margin: '28px 0' }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-mid)', marginBottom: 20 }}>{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {data.map((d, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 120, fontSize: 12, color: 'var(--text-mid)', flexShrink: 0, textAlign: 'right' }}>{d.label}</div>
            <div style={{ flex: 1, background: '#e8e4dc', borderRadius: 2, height: 28, position: 'relative', overflow: 'hidden' }}>
              <div style={{ width: `${(d.value / max) * 100}%`, background: color, height: '100%', borderRadius: 2, transition: 'width 0.6s ease', display: 'flex', alignItems: 'center', paddingLeft: 8 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#fff', whiteSpace: 'nowrap' }}>{d.value}{unit}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 14, fontStyle: 'italic' }}>Source: IMARC Group, Ministry of Steel India, OFBusiness</div>
    </div>
  );
}

function LineChart({ data, title, unit }) {
  const max = Math.max(...data.map(d => d.value));
  const min = Math.min(...data.map(d => d.value));
  const range = max - min;
  const w = 500, h = 160, padX = 40, padY = 20;
  const points = data.map((d, i) => ({
    x: padX + (i / (data.length - 1)) * (w - padX * 2),
    y: padY + (1 - (d.value - min) / range) * (h - padY * 2),
    ...d,
  }));
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaD = `${pathD} L ${points[points.length - 1].x} ${h - padY} L ${points[0].x} ${h - padY} Z`;

  return (
    <div style={{ background: 'var(--light)', border: '1px solid var(--rule-lt)', padding: 24, borderRadius: 2, margin: '28px 0' }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-mid)', marginBottom: 16 }}>{title}</div>
      <div style={{ overflowX: 'auto' }}>
        <svg viewBox={`0 0 ${w} ${h + 30}`} style={{ width: '100%', minWidth: 280 }}>
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <path d={areaD} fill="url(#areaGrad)" />
          <path d={pathD} fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {points.map((p, i) => (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r="4" fill="var(--accent)" stroke="#fff" strokeWidth="2" />
              <text x={p.x} y={h + 16} textAnchor="middle" fontSize="10" fill="var(--text-mid)">{p.label}</text>
              <text x={p.x} y={p.y - 10} textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--accent)">{p.value}{unit}</text>
            </g>
          ))}
        </svg>
      </div>
      <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 8, fontStyle: 'italic' }}>Source: IMARC Group, TechSci Research, Ministry of Steel India</div>
    </div>
  );
}

function CompareTable({ rows, cols, title }) {
  return (
    <div style={{ margin: '28px 0', overflowX: 'auto' }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-mid)', marginBottom: 12 }}>{title}</div>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead>
          <tr>
            {cols.map((c, i) => (
              <th key={i} style={{ background: 'var(--navy)', color: i === 0 ? 'var(--sand)' : '#fff', padding: '10px 14px', textAlign: i === 0 ? 'left' : 'center', fontFamily: 'Barlow Condensed', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', borderRight: '1px solid rgba(255,255,255,0.08)' }}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : 'var(--light)' }}>
              {row.map((cell, j) => (
                <td key={j} style={{ padding: '10px 14px', borderBottom: '1px solid var(--rule-lt)', borderRight: '1px solid var(--rule-lt)', textAlign: j === 0 ? 'left' : 'center', fontWeight: j === 0 ? 600 : 400, color: cell === '✓' ? '#2E7D32' : cell === '✗' ? '#C62828' : cell === '★★★' ? 'var(--accent)' : 'var(--navy)' }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 8, fontStyle: 'italic' }}>Source: Jindal Stainless, OFBusiness, BIS Standards</div>
    </div>
  );
}

/* ── ARTICLE CONTENT ── */

function Article1() {
  return (
    <div className="article-body">
      <p className="article-lead">If you've ever picked up a steel plate and wondered what "SS 304" or "202" stamped on the base actually means — you're not alone. Most buyers in India have no idea what these numbers signify. They just know steel is steel. But the grade you buy determines how long it lasts, how safe it is for food, and whether it starts looking dull or rusty within a year.</p>

      <p>Here's a straightforward guide to the three grades you'll encounter most often in Indian kitchenware — 202, 304, and 316.</p>

      <h3>Why grades exist at all</h3>
      <p>Stainless steel is not a single material. It's an alloy — iron mixed with chromium, nickel, manganese, and other elements in different proportions. Change the proportions, and you change the properties. A steel with more nickel resists rust better but costs more. A steel that substitutes manganese for nickel is cheaper but less durable in wet or acidic conditions. The grade number is just a standardised shorthand for the composition.</p>

      <CompareTable
        title="Grade comparison — composition and key properties"
        cols={['Property', 'SS 202', 'SS 304', 'SS 316']}
        rows={[
          ['Chromium content', '17–19%', '18–20%', '16–18%'],
          ['Nickel content', '4–6%', '8–10.5%', '10–14%'],
          ['Manganese', 'High (7.5–10%)', 'Low (2% max)', 'Low (2% max)'],
          ['Molybdenum', 'None', 'None', '2–3%'],
          ['Price (approx.)', '₹140–170/kg', '₹180–220/kg', '₹280–350/kg'],
          ['Corrosion resistance', 'Moderate', 'Good', 'Excellent'],
          ['Food safe (BIS/FDA)', '✓', '✓', '✓'],
          ['Best for', 'Dry indoor use', 'Daily kitchen use', 'Coastal/commercial'],
        ]}
      />

      <h3>SS 202 — the affordable workhorse</h3>
      <p>SS 202 is part of the 200 series, developed as a lower-cost alternative to the 300 series by replacing some nickel with manganese and nitrogen. In India, it is widely used for plates, bowls, glasses, and other kitchenware because it keeps costs accessible without compromising basic functionality.</p>
      <p>The honest trade-off: 202 is less corrosion-resistant than 304 in wet and acidic environments. If you're storing pickle, keeping utensils in humid conditions for long periods, or washing with harsh chemicals, 202 may show surface staining faster than 304. For everyday home use — regular meals, normal washing, indoor storage — it performs well and lasts years without issue.</p>
      <p>At ₹140–170 per kg, it is roughly 20–25% cheaper than SS 304, which is why it dominates the mass market.</p>

      <h3>SS 304 — the global standard for kitchenware</h3>
      <p>SS 304 is the most widely used stainless steel grade in the world, and for good reason. With 18% chromium and 8–10% nickel, it forms a stable passive oxide layer that resists corrosion from most common kitchen conditions — including acidic foods like tomatoes, tamarind, and lemon, which are a constant feature of Indian cooking.</p>
      <p>You'll often see it labelled as "18/8" on imported products — that's just the chromium/nickel shorthand. The BIS standard equivalent is IS 6911. It has FDA approval for direct food contact globally.</p>
      <p>For most Indian households, 304 is the sweet spot: durable enough for daily cooking and washing, safe for food, and available at a price that makes sense for quality kitchenware.</p>

      <BarChart
        title="Approximate price per kg — India market (2024–25)"
        unit="/kg ₹"
        data={[
          { label: 'SS 202', value: 155 },
          { label: 'SS 304', value: 200 },
          { label: 'SS 316', value: 315 },
        ]}
      />

      <h3>SS 316 — for demanding environments</h3>
      <p>SS 316 adds molybdenum to the mix, giving it significantly better resistance to chloride-induced corrosion. This matters if you live in a coastal city where salt in the air attacks metal surfaces, if you run a large commercial kitchen where equipment is under heavy, continuous use, or if you're regularly cooking highly acidic dishes in large quantities.</p>
      <p>At ₹280–350 per kg, it is considerably more expensive. For most homes, it is overkill. For coastal homes, hotels, hospital kitchens, and industrial food processing — it earns its price.</p>

      <h3>The magnet test — a quick buyer's check</h3>
      <p>A simple field test you can do: hold a magnet to the steel. Genuine SS 304 is weakly magnetic or non-magnetic. SS 202 tends to be more magnetic. A strong magnetic pull suggests a lower-grade material or possible substitution. This isn't a perfect test — work-hardening during manufacturing can increase magnetism in 304 — but it is a useful first filter when buying from unfamiliar sources.</p>

      <h3>What this means when you're buying</h3>
      <p>For a home buying plates, bowls, and glasses for everyday use: SS 202 is perfectly fine if budget is the priority. SS 304 is the better long-term investment if you want something that keeps looking good and handles more demanding conditions.</p>
      <p>For a restaurant, hotel, or canteen: SS 304 is the minimum recommendation. The higher throughput, industrial washing, and acidic food contact justify the extra cost per piece.</p>
      <p>For a coastal home or commercial kitchen near the sea: SS 316 deserves consideration, particularly for items that will be stored wet or exposed to salty air regularly.</p>

      <div style={{ background: 'var(--navy)', padding: '24px 28px', marginTop: 32, borderLeft: '4px solid var(--sand)' }}>
        <p style={{ color: 'rgba(255,255,255,0.7)', margin: 0, fontSize: 14, fontStyle: 'italic' }}>"At Bishwambhar Bharat Metals, we manufacture in SS 202 and SS 304. For most of our buyers — homes, small restaurants, and trade distributors — these two grades cover every practical requirement. We'll always tell you which grade a product is made from, and why."</p>
      </div>
    </div>
  );
}

function Article2() {
  return (
    <div className="article-body">
      <p className="article-lead">A stainless steel plate looks simple. Flat, smooth, shiny. But getting from a raw coil of steel to that finished plate involves six to eight distinct manufacturing stages, each with its own quality risks. Understanding the process helps you understand why some products cost more, last longer, and look better than others.</p>

      <p>Here is what actually happens inside a stainless steel utensil manufacturing facility — explained plainly, without the jargon.</p>

      <h3>Stage 1 — Raw material: the coil</h3>
      <p>Everything starts with a coil of cold-rolled stainless steel sheet. These coils — typically 1–1.5 metres wide and weighing several tonnes — come from steel mills like Jindal Stainless, SAIL's Salem Steel Plant, or imported sources. The grade (202, 304, 316) is fixed at this stage. A manufacturer worth trusting will have grade mill certificates for every coil they use.</p>
      <p>The coil is unrolled and fed into the first machine — the blanking press.</p>

      <BarChart
        title="India stainless steel production — finished steel (million tonnes)"
        unit="MT"
        color="var(--navy)"
        data={[
          { label: 'FY 2021', value: 96 },
          { label: 'FY 2022', value: 121 },
          { label: 'FY 2023', value: 130 },
          { label: 'FY 2024', value: 138 },
          { label: 'FY 2025', value: 147 },
        ]}
      />

      <h3>Stage 2 — Blanking</h3>
      <p>The blanking press cuts circular discs — called blanks — from the steel sheet. The diameter of the blank determines the size of the finished product: a larger blank becomes a larger plate. Scrap from around the blanks is collected and recycled back to the steel mill — stainless steel is 100% recyclable, which is one of the reasons it remains economically viable at scale.</p>
      <p>At this stage, the blank is just a flat disc. It has no form yet.</p>

      <h3>Stage 3 — Deep drawing and forming</h3>
      <p>This is the most technically demanding stage. The blank is placed in a hydraulic press with a matched set of male and female dies. The press pushes the blank into the die at high force, stretching and shaping it into the required form — the curved bowl of a katori, the raised rim of a thali, the cylindrical shape of a glass.</p>
      <p>The metal actually flows during this process. Steel that is too hard cracks. Steel that is too soft deforms unevenly. Getting the right material thickness, die clearance, and press speed is what separates a product with uniform walls from one that is thin in the middle and thick at the edges.</p>
      <p>Complex shapes may require multiple drawing passes, with annealing (heat treatment to soften the steel) between passes to prevent cracking.</p>

      <h3>Stage 4 — Trimming and edge finishing</h3>
      <p>After forming, the rim of the piece is irregular — the metal has flowed unevenly during drawing. A trimming lathe or press cuts the rim to the correct height and diameter. The cut edge is then rolled or polished to remove sharpness. A well-finished edge should be smooth to touch with no burrs or sharp points — something worth checking when you buy.</p>

      <h3>Stage 5 — Polishing</h3>
      <p>This is where the characteristic shine comes from. Polishing happens in multiple stages using progressively finer abrasive belts or wheels — coarse to medium to fine. A mirror finish (called a No. 8 finish in the industry) requires the most passes and the finest abrasives.</p>
      <p>The outside and inside are polished separately. Inside finishing is more difficult on deep bowls and glasses because access is limited. A product with a uniformly bright interior has been finished properly. Dull patches, scratches, or uneven sheen inside a bowl indicate inadequate finishing.</p>

      <h3>Stage 6 — Quality inspection</h3>
      <p>Before packaging, each piece should be checked for dimensional accuracy, surface quality, and finish consistency. In a disciplined production environment, this happens both in-process (at key stages) and as a final inspection before goods are packed. Dimensional checks use vernier calipers and gauges. Surface checks are visual under good lighting.</p>
      <p>Pieces with visible scratches, uneven rim, pitting, or incorrect dimensions should be rejected. In reality, the rigour of this stage varies enormously between manufacturers — and is one of the main reasons quality differs despite similar-looking products.</p>

      <h3>Stage 7 — Packaging and dispatch</h3>
      <p>Finished pieces are wrapped individually or stacked with interleaving paper to prevent surface contact during transit. Packaging type varies by buyer requirement — retail packaging for consumer markets, bulk stacking for trade supply. A good manufacturer links each dispatch to its production batch for traceability.</p>

      <div style={{ background: 'var(--light)', border: '1px solid var(--rule-lt)', padding: '20px 24px', margin: '28px 0', borderLeft: '4px solid var(--accent)' }}>
        <h4 style={{ marginBottom: 10 }}>What this means when buying</h4>
        <p style={{ margin: 0, fontSize: 14 }}>A product that went through all seven stages with proper controls will have uniform wall thickness, smooth edges, bright interior finish, and consistent dimensions. Shortcuts at any stage show up as uneven walls (wobbles when placed on a flat surface), rough or sharp rims, dull interior finish, or pitting. These aren't just cosmetic issues — they indicate where the manufacturing discipline broke down.</p>
      </div>
    </div>
  );
}

function Article3() {
  return (
    <div className="article-body">
      <p className="article-lead">India buys more stainless steel kitchenware per household than almost any other country. In a market flooded with options — aluminium, non-stick coatings, copper, ceramics, imported materials — steel keeps winning. The reasons are not sentimental. They are practical, economic, and deeply rooted in how Indian homes actually cook and live.</p>

      <LineChart
        title="India stainless steel market size — USD billion"
        unit="B"
        data={[
          { label: '2024', value: 5.35 },
          { label: '2025', value: 8.01 },
          { label: '2026', value: 8.7 },
          { label: '2027', value: 9.4 },
          { label: '2028', value: 10.1 },
          { label: '2033', value: 11.0 },
        ]}
      />

      <h3>The numbers first</h3>
      <p>India's stainless steel market reached USD 5.35 billion in 2024 and is projected to reach USD 11 billion by 2033, growing at a CAGR of 8.36% (IMARC Group). Domestic production of finished steel crossed 146 million tonnes in FY 2025, up from 96 million tonnes in FY 2021 — a 52% increase in four years. India is now among the top three stainless steel producers in the world.</p>
      <p>Consumer goods — which includes kitchenware — account for a significant share of the 200 series demand, the grade most commonly used in household utensils. The 300 series (which includes SS 304) held 46.14% of the total market share in 2024, driven by its food-grade applications.</p>

      <h3>Why steel dominates Indian kitchens</h3>
      <p>The answer starts with Indian cooking itself. A typical Indian kitchen involves pressure cooking, high heat, frequent stirring, acidic ingredients (tamarind, tomatoes, yoghurt, lemon), and multiple washes daily. Non-stick coatings degrade under this kind of treatment — chipping, peeling, and releasing particles into food. Aluminium reacts with acidic ingredients. Copper requires maintenance and reacts with certain foods. Steel does none of these things.</p>
      <p>It tolerates pressure cookers and induction cooktops. It doesn't absorb flavour or odour. It doesn't require special cleaning agents. It can go from stovetop to dishwasher to storage without special treatment. For a country where kitchens are used intensively every single day, these properties matter enormously.</p>

      <BarChart
        title="Stainless steel consumption growth — India YoY %"
        unit="%"
        color="var(--navy)"
        data={[
          { label: 'FY 2022', value: 9 },
          { label: 'FY 2023', value: 7 },
          { label: 'FY 2024', value: 8 },
          { label: 'FY 2025', value: 8 },
        ]}
      />

      <h3>The hygiene factor</h3>
      <p>Stainless steel has a non-porous surface that doesn't harbour bacteria when clean. Unlike wooden utensils (which absorb moisture and bacteria), plastic containers (which scratch and harbour bacteria in crevices), or porous ceramics, a smooth stainless steel surface is one of the most hygienic food-contact materials available. This is why hospitals, airlines, and large institutional kitchens globally use stainless steel as standard — not because of tradition, but because it is the safest option at scale.</p>
      <p>In India, where food safety awareness is growing rapidly, this hygiene advantage is increasingly a purchasing factor rather than just an assumed property.</p>

      <h3>The economics of durability</h3>
      <p>A good set of stainless steel plates and bowls, maintained normally, lasts 10–20 years or more. Non-stick cookware requires replacement every 2–5 years. Plastic containers degrade, stain, and eventually need replacement. Over a 10-year household budget, stainless steel is almost always the cheapest option per year of use — despite a higher upfront cost than alternatives.</p>
      <p>This calculation resonates strongly in middle-income Indian households, where durable goods are valued for their long-term economic sense rather than novelty.</p>

      <h3>The institutional market</h3>
      <p>Beyond homes, India's institutional demand for stainless steel kitchenware is growing rapidly. The government's mid-day meal programme serves 120 million+ children across schools. Hostels, hospitals, railways, canteens, and the armed forces collectively represent a procurement scale that runs into crores of pieces annually. These institutional buyers almost exclusively specify stainless steel for its hygiene, durability, and ease of maintenance.</p>
      <p>The GeM portal (Government e-Marketplace) has become an important procurement channel for this institutional demand — which is why GeM registration matters for any serious kitchenware manufacturer or distributor.</p>

      <h3>What's changing</h3>
      <p>The market is not static. Three shifts are worth watching. First, grade awareness is increasing — more buyers are asking for SS 304 specifically rather than accepting whatever they're given. Second, the organised retail and e-commerce channel is growing, which rewards verified manufacturers who can supply consistently at scale. Third, export demand from the Indian diaspora and institutional buyers in neighbouring countries is creating new opportunities for domestic manufacturers.</p>
      <p>None of these shifts threaten stainless steel's dominance. They reinforce it — by raising the bar for quality and creating demand for manufacturers who can meet it.</p>
    </div>
  );
}

function Article4() {
  return (
    <div className="article-body">
      <p className="article-lead">When you hold two stainless steel plates, one feels noticeably heavier and stiffer than the other. That difference is almost entirely explained by one variable: the thickness of the steel used to make it. Understanding gauge — the standard way thickness is expressed in the steel industry — helps you buy better and understand what you're paying for.</p>

      <h3>What gauge means</h3>
      <p>In the steel industry, "gauge" is a historical unit for sheet thickness. Confusingly, the gauge scale runs backwards from what you might expect: a higher gauge number means thinner steel. So 16 gauge is thicker than 18 gauge, which is thicker than 20 gauge.</p>
      <p>For kitchenware in India, most products fall between 18 gauge and 22 gauge. Here's what those numbers mean in actual millimetres:</p>

      <CompareTable
        title="Gauge to millimetre conversion — stainless steel sheet"
        cols={['Gauge', 'Thickness (mm)', 'Typical use', 'Weight feel']}
        rows={[
          ['16 gauge', '1.6 mm', 'Heavy-duty commercial', 'Very heavy'],
          ['18 gauge', '1.2 mm', 'Quality home/hotel ware', 'Solid, substantial'],
          ['20 gauge', '0.9 mm', 'Standard home ware', 'Normal'],
          ['22 gauge', '0.7 mm', 'Economy/budget ware', 'Light, thin'],
          ['24 gauge', '0.6 mm', 'Very budget products', 'Very light'],
        ]}
      />

      <h3>Why thickness matters for performance</h3>
      <p>Thicker steel means several things in practice. It dents less easily — a 20 gauge plate will deform if you drop it or apply force at the rim; an 18 gauge plate under the same conditions might flex but is less likely to dent permanently. It maintains its shape better over years of use. It feels more substantial and premium.</p>
      <p>For bowls and glasses specifically, thicker steel means better structural integrity at the rim — the most vulnerable point. Thin rims chip, crack, or deform. A well-made rim on an 18 gauge bowl should last decades of normal use without visible deterioration.</p>
      <p>Thicker steel also means better heat retention if you're using the vessel for hot food — though for most kitchenware applications, this is a minor factor compared to structural durability.</p>

      <BarChart
        title="Approximate weight — 28cm thali by gauge (grams)"
        unit="g"
        data={[
          { label: '16 gauge', value: 380 },
          { label: '18 gauge', value: 280 },
          { label: '20 gauge', value: 210 },
          { label: '22 gauge', value: 160 },
        ]}
      />

      <h3>The wall thickness trap in deep-drawn products</h3>
      <p>Here's something most buyers don't know: the act of deep drawing (forming a flat blank into a bowl or glass shape) thins the steel at the drawn sections. A blank that starts at 1.2mm (18 gauge) might end up at 0.9–1.0mm at the side walls of a deep-drawn bowl. This is normal and expected — a well-designed die and drawing process accounts for this thinning.</p>
      <p>But a manufacturer using 20 gauge (0.9mm) starting material and claiming "18 gauge equivalent" in the final product is misleading you. The base thickness is what matters — and that should be measured on the flat bottom of the piece, where drawing stress is lowest and thickness is closest to the original blank.</p>

      <h3>How to check thickness yourself</h3>
      <p>The simplest check: weight. Heavier pieces of the same size and grade are almost always thicker. Lift two similarly sized plates side by side — the heavier one is almost certainly better gauge. You can also flex the rim gently between thumb and forefinger. Thick steel will barely flex. Thin steel will feel springy.</p>
      <p>If you're buying in bulk for an institution or business, asking for the gauge specification in writing — and verifying with a digital micrometre on a sample — is a legitimate and reasonable request from any serious manufacturer.</p>

      <h3>What's right for your use</h3>
      <p>For everyday home use and gifting: 20 gauge (0.9mm) is acceptable for a product sold at mid-market pricing. 18 gauge (1.2mm) is the right choice for quality home ware you want to last 10+ years. For hotels, canteens, hospitals, and institutional buyers: 18 gauge minimum, with 16 gauge for heavy-duty commercial environments where products take serious punishment daily. For economy gifting or disposable event use: 22 gauge is the practical choice — it keeps costs down where longevity is not the priority.</p>

      <div style={{ background: 'var(--light)', border: '1px solid var(--rule-lt)', padding: '20px 24px', margin: '28px 0', borderLeft: '4px solid var(--sand)' }}>
        <h4 style={{ marginBottom: 10 }}>Ask before you buy</h4>
        <p style={{ margin: 0, fontSize: 14 }}>Any manufacturer worth buying from should be able to tell you the gauge of their products without hesitation. If the answer is vague — "standard thickness", "good quality" — push for the actual number. It's a basic specification, and its absence from a product description is a yellow flag about the manufacturer's transparency.</p>
      </div>
    </div>
  );
}

/* ── ARTICLE DATA ── */
const ARTICLES = [
  {
    id: 1, slug: "ss-grades-202-304-guide",
    cat: 'Product knowledge',
    date: '12 Jan 2025',
    readTime: '7 min read',
    title: 'Understanding SS grades: 202, 304 and what they mean for your kitchen',
    desc: 'A plain-language guide to the grades used in stainless steel kitchenware — what the numbers mean, how they differ, and what to look for when buying.',
    img: '/images/Blog_Image_1___Steel_grades_article.png',
    component: Article1,
  },
  {
    id: 2, slug: "how-ss-utensils-are-made",
    cat: 'Manufacturing',
    date: '5 Jan 2025',
    readTime: '8 min read',
    title: 'How stainless steel utensils are made: from coil to kitchen',
    desc: 'A step-by-step look at the full production process — blanking, forming, polishing, inspection, and packaging — explained simply for every buyer.',
    img: '/images/Blog_Image_2___Manufacturing_process_article_.png',
    component: Article2,
  },
  {
    id: 3, slug: "why-stainless-steel-dominates-india",
    cat: 'Industry insights',
    date: '28 Dec 2024',
    readTime: '6 min read',
    title: "Why stainless steel remains India's favourite kitchenware material",
    desc: 'Data, durability, and the economics of Indian cooking. The reasons behind steel\'s dominance in Indian homes — and why that isn\'t changing.',
    img: '/images/Blog_Image_3___Industry_insights_article.png',
    component: Article3,
  },
  {
    id: 4, slug: "gauge-thickness-guide",
    cat: 'Product knowledge',
    date: '18 Dec 2024',
    readTime: '6 min read',
    title: 'Material thickness and durability: what gauge means in stainless steel',
    desc: 'Gauge numbers explained simply — actual thickness in millimetres, what it means for durability, and how to check what you\'re actually getting.',
    img: '/images/Blog_Image_4___Material_thickness_article.png',
    component: Article4,
  },
];

/* ── ARTICLE PAGE ── */
function ArticlePage({ article }) {
  const Content = article.component;
  return (
    <div>
      {/* Hero */}
      <div style={{ background: 'var(--navy)', padding: '48px 0 40px', borderBottom: '3px solid var(--sand)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.025, backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 10px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <button onClick={() => window.history.back()} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.5)', padding: '6px 14px', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', marginBottom: 20, borderRadius: 2 }}>← Back to blog</button>
          <div style={{ display: 'flex', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)' }}>{article.cat}</span>
            <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>{article.date}</span>
            <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>{article.readTime}</span>
          </div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,48px)', maxWidth: 720, lineHeight: 1.2, marginBottom: 16 }}>{article.title}</h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', maxWidth: 600, fontSize: 15 }}>{article.desc}</p>
        </div>
      </div>

      {/* Hero image */}
      <div style={{ height: 320, overflow: 'hidden' }}>
        <img src={article.img} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Article content */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <Content />
            <hr style={{ border: 'none', borderTop: '1px solid var(--rule-lt)', margin: '40px 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
              <div style={{ fontSize: 12, color: 'var(--text-mid)' }}>Published by Bishwambhar Bharat Metals · {article.date}</div>
              <button onClick={() => window.history.back()} style={{ background: 'var(--navy)', color: '#fff', border: 'none', padding: '10px 20px', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', borderRadius: 2 }}>← Back to all articles</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── BLOG LIST PAGE ── */
export default function Blog() {
  const { slug } = useParams(); const navigate = useNavigate(); const openArticle = slug ? ARTICLES.find(a => a.slug === slug) : null;
  const [filterCat, setFilterCat] = useState(null);

  if (openArticle) {
    return <ArticlePage article={openArticle} />;
  }

  const filtered = filterCat ? ARTICLES.filter(a => a.cat === filterCat) : ARTICLES;

  return (
    <div>
      <div style={{ background: 'var(--navy)', padding: '64px 0 52px', borderBottom: '3px solid var(--sand)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.025, backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 10px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', marginBottom: 14 }}>Home › <span style={{ color: 'var(--sand)' }}>Blog</span></div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(36px,5vw,60px)', marginBottom: 12 }}>Industry insights</h1>
          <p style={{ color: 'rgba(255,255,255,0.35)', maxWidth: 540 }}>Original articles on stainless steel products, manufacturing, and the Indian metals market — backed by data.</p>
        </div>
      </div>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 44 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {filterCat && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
                  <span style={{ fontSize: 13, color: 'var(--text-mid)' }}>Showing: <strong style={{ color: 'var(--navy)' }}>{filterCat}</strong></span>
                  <button onClick={() => setFilterCat(null)} style={{ background: 'none', border: '1px solid var(--rule-lt)', padding: '4px 10px', fontSize: 11, cursor: 'pointer', borderRadius: 2, color: 'var(--accent)', fontWeight: 700 }}>Show all ×</button>
                </div>
              )}
              {filtered.map(article => (
                <div
                  key={article.id}
                  className="blog-hcard"
                  style={{ display: 'grid', gridTemplateColumns: '220px 1fr', background: '#fff', border: '1px solid var(--rule-lt)', overflow: 'hidden', cursor: 'pointer', transition: 'box-shadow 0.2s, transform 0.2s' }}
                  onClick={() => navigate(`/blog/${article.slug}`)}
                  onMouseOver={e => { e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseOut={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{ overflow: 'hidden', height: 160 }}>
                    <img src={article.img} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                      onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>
                  <div style={{ padding: '20px 24px' }}>
                    <div style={{ display: 'flex', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)' }}>{article.cat}</span>
                      <span style={{ fontSize: 11, color: 'var(--text-mid)' }}>{article.date}</span>
                      <span style={{ fontSize: 11, color: 'var(--muted)' }}>{article.readTime}</span>
                    </div>
                    <h3 style={{ fontFamily: 'Barlow Condensed', fontSize: 19, fontWeight: 700, textTransform: 'uppercase', color: 'var(--navy)', marginBottom: 8, lineHeight: 1.25 }}>{article.title}</h3>
                    <p style={{ fontSize: 13, color: 'var(--text-mid)', marginBottom: 12 }}>{article.desc}</p>
                    <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.06em' }}>Read article →</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="blog-sidebar">
              <div style={{ background: 'var(--light)', border: '1px solid var(--rule-lt)', padding: 20, marginBottom: 18 }}>
                <h4 style={{ fontFamily: 'Barlow Condensed', fontSize: 14, fontWeight: 700, textTransform: 'uppercase', marginBottom: 14, paddingBottom: 10, borderBottom: '2px solid var(--accent)' }}>Categories</h4>
                {[['Product knowledge', 2], ['Manufacturing', 1], ['Industry insights', 1]].map(([cat, count]) => (
                  <div key={cat} onClick={() => { setFilterCat(filterCat === cat ? null : cat); window.scrollTo({ top: 300, behavior: 'smooth' }); }} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 0', borderBottom: '1px solid var(--rule-lt)', fontSize: 13, color: filterCat === cat ? 'var(--accent)' : 'var(--text-mid)', cursor: 'pointer', fontWeight: filterCat === cat ? 700 : 400, transition: 'all 0.15s' }}
                    onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseOut={e => e.currentTarget.style.color = filterCat === cat ? 'var(--accent)' : 'var(--text-mid)'}
                  >
                    <span>{cat}</span><span style={{ fontSize: 11, background: filterCat === cat ? 'var(--accent)' : 'var(--navy)', color: '#fff', padding: '2px 8px', borderRadius: 10, transition: 'background 0.15s' }}>{count}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: 'var(--navy)', padding: 24, marginBottom: 18 }}>
                <h4 style={{ color: '#fff', marginBottom: 8, fontFamily: 'Barlow Condensed', fontSize: 16, textTransform: 'uppercase' }}>Market data</h4>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, marginBottom: 12 }}>India SS market: USD 5.35B (2024) → USD 11B (2033)</p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, marginBottom: 0 }}>Growth rate: 8.36% CAGR</p>
              </div>
              <div style={{ background: 'var(--accent)', padding: 24, textAlign: 'center' }}>
                <h4 style={{ color: '#fff', marginBottom: 8, fontFamily: 'Barlow Condensed', fontSize: 18, textTransform: 'uppercase' }}>Have a question?</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, marginBottom: 16 }}>Product queries, bulk orders, or trade enquiries — we're here.</p>
                <button onClick={() => navigate('/contact')} className="btn-dark" style={{ width: '100%' }}>Send an enquiry</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .article-body p { margin-bottom: 18px; font-size: 15px; line-height: 1.8; color: var(--text-dark); }
        .article-body h3 { font-family: 'Barlow Condensed', sans-serif; font-size: 24px; font-weight: 700; text-transform: uppercase; color: var(--navy); margin: 32px 0 12px; }
        .article-body h4 { font-size: 16px; font-weight: 700; color: var(--navy); margin-bottom: 8px; }
        .article-lead { font-size: 17px !important; color: var(--navy) !important; font-weight: 500; border-left: 4px solid var(--accent); padding-left: 20px; margin-bottom: 28px !important; }
        @media (max-width: 768px) {
          .blog-hcard { grid-template-columns: 1fr !important; }
          .blog-hcard > div:first-child { height: 200px !important; }
          .blog-layout { grid-template-columns: 1fr !important; }
          .blog-sidebar { display: none; }
          .article-body p { font-size: 14px; }
          .article-lead { font-size: 15px !important; }
        }
      `}</style>
    </div>
  );
}
