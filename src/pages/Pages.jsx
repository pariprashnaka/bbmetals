import React from 'react';

/* ─────────── INNER HERO ─────────── */
function InnerHero({ page, title, sub }) {
  return (
    <div style={{ background: 'var(--navy)', padding: '64px 0 52px', borderBottom: '3px solid var(--sand)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.025, backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 10px)' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', marginBottom: 14, letterSpacing: '0.04em' }}>
          Home › <span style={{ color: 'var(--sand)' }}>{page}</span>
        </div>
        <h1 style={{ color: '#fff', fontSize: 'clamp(36px,5vw,60px)', marginBottom: 12 }}>{title}</h1>
        <p style={{ color: 'rgba(255,255,255,0.35)', maxWidth: 540 }}>{sub}</p>
      </div>
    </div>
  );
}

/* ─────────── ABOUT ─────────── */
export function About({ onNav }) {
  return (
    <div>
      <InnerHero page="About us" title="About us" sub="Built on manufacturing discipline, honest quality, and a long-term vision." />
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72 }}>
            <div>
              <div className="lbl">Our background</div>
              <div className="accent-rule" />
              <h2 style={{ color: 'var(--navy)', marginBottom: 16 }}>A manufacturer,<br />not just a seller</h2>
              <p style={{ marginBottom: 14 }}>Bishwambhar Bharat Metals was built with one conviction: Indian manufacturing deserves to be done properly — with discipline in process, integrity in materials, and a long-term view of what this enterprise can become.</p>
              <p style={{ marginBottom: 14 }}>We began with stainless steel kitchenware because it is a product every Indian household needs, and because it gave us the foundation to build real manufacturing capability.</p>
              <p style={{ marginBottom: 32 }}>Our roadmap doesn't end at plates and bowls. We are building towards aluminium products, industrial components, OEM supply, and more — step by step, quality first.</p>

              <hr className="div-lt" />

              <div className="lbl">Our values</div>
              <div className="accent-rule" />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, marginTop: 14 }}>
                {[['Quality first','No compromise on material grade or process standard.'],['Integrity','We state what we supply, and supply what we state.'],['Consistency','Same standard batch to batch, order to order.'],['Accountability','We stand behind every product that leaves our facility.'],['Customer focus','One set or a truckload — you matter equally.'],['Improvement','Always looking to improve process and product.']].map(([t, d]) => (
                  <div key={t} style={{ background: 'var(--light)', border: '1px solid var(--rule-lt)', padding: '20px 16px', borderTop: '3px solid var(--accent)' }}>
                    <h4 style={{ marginBottom: 6 }}>{t}</h4>
                    <p style={{ fontSize: 12 }}>{d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div style={{ background: 'var(--light)', border: '1px solid var(--rule-lt)', padding: 24, marginBottom: 18 }}>
                <h4 style={{ fontFamily: 'Barlow Condensed', fontSize: 15, fontWeight: 700, textTransform: 'uppercase', marginBottom: 14, paddingBottom: 10, borderBottom: '2px solid var(--accent)' }}>Company at a glance</h4>
                {[['Industry','Metal manufacturing'],['Products','SS kitchenware'],['Registration','Udyam certified'],['Tax','GST registered'],['Portal','GeM listed'],['Location','Bihar, India']].map(([k,v]) => (
                  <div key={k} className="spec-row"><span className="k">{k}</span><span className="v">{v}</span></div>
                ))}
              </div>
              <div style={{ background: 'var(--light)', border: '1px solid var(--rule-lt)', padding: 24, marginBottom: 18 }}>
                <h4 style={{ fontFamily: 'Barlow Condensed', fontSize: 15, fontWeight: 700, textTransform: 'uppercase', marginBottom: 14, paddingBottom: 10, borderBottom: '2px solid var(--accent)' }}>Who we supply</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {['Homes and families','Restaurants and hotels','Schools, hostels, and canteens','Distributors and wholesalers','Dealers and retailers','Government and institutional buyers'].map(item => (
                    <li key={item} style={{ display: 'flex', gap: 12, padding: '11px 0', borderBottom: '1px solid var(--rule-lt)', fontSize: 14, color: 'var(--text-mid)' }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 700 }}>—</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <img src="/images/IMAGE_4___About_us_page.png" alt="Our facility" style={{ width:'100%', height:'240px', objectFit:'cover', borderRadius:2 }} />
            </div>
          </div>

          <hr className="div-lt" />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72 }}>
            <div>
              <div className="lbl">Our vision</div>
              <div className="accent-rule" />
              <h2 style={{ color: 'var(--navy)', marginBottom: 14 }}>India's most trusted metal manufacturer</h2>
              <p>Every decision — infrastructure, suppliers, quality systems, people — is made with a ten-year horizon. We want to be the name Indian buyers think of first for quality metal products.</p>
            </div>
            <div>
              <div className="lbl">Expansion roadmap</div>
              <div className="accent-rule" />
              <div style={{ background: 'var(--navy)', borderRadius: 2, padding: 28 }}>
                {[['Phase 1 · Now','Stainless steel kitchenware','Plates, bowls, glasses. Trade distribution and retail.',false],['Phase 2 · Near term','Expanded SS range & channels','New products, hospitality and institutional supply.',true],['Phase 3 · Medium term','Aluminium & OEM manufacturing','Multi-metal capability, branded supply partnerships.',true],['Phase 4 · Long term','Industrial & contract manufacturing','Fabrication, components, and contract manufacturing at scale.',true]].map(([phase,title,desc,future]) => (
                  <div key={phase} style={{ display:'flex',gap:16,padding:'16px 0',borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ width:10,height:10,borderRadius:'50%',flexShrink:0,marginTop:4,background:future?'transparent':'var(--sand)',border:future?'2px solid rgba(255,255,255,0.15)':'none' }} />
                    <div>
                      <div style={{ fontSize:10,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',color:future?'rgba(255,255,255,0.2)':'var(--sand)',marginBottom:3,fontFamily:'Inter,sans-serif' }}>{phase}</div>
                      <div style={{ fontFamily:'Barlow Condensed,sans-serif',fontSize:16,fontWeight:700,textTransform:'uppercase',color:future?'rgba(255,255,255,0.45)':'rgba(255,255,255,0.85)',marginBottom:3 }}>{title}</div>
                      <div style={{ fontSize:12,color:'rgba(255,255,255,0.3)' }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─────────── PRODUCTS ─────────── */
export function Products({ onNav }) {
  const products = [
    { name: 'Stainless steel plates', desc: 'Classic thali in food-grade stainless steel. Durable, easy to clean, built for everyday use at home, in restaurants, or in large kitchens.', specs: [['Material grade','SS 202 / SS 304'],['Finish','Mirror polished'],['Sizes','Multiple available'],['Suitable for','Home, hotel, hostel, canteen'],['Orders','Single piece or bulk']], img: '/images/IMAGE_5___Products_page___Product_1.png', alt: 'Stainless steel plates' },
    { name: 'Stainless steel bowls', desc: 'Katori and serving bowls for everyday use. Smooth rim, seamless build, and a bright finish that stays good wash after wash.', specs: [['Material grade','SS 202 / SS 304'],['Finish','Mirror polished'],['Sizes','Multiple available'],['Suitable for','Home, dining, gifting sets'],['Orders','Single piece or bulk']], img: '/images/IMAGE_6___Products_page___Product_2_.png', alt: 'Stainless steel bowls' },
    { name: 'Stainless steel glasses', desc: 'Rust-free tumblers that are a staple in every Indian home. Lightweight, easy to hold, and safe for all ages.', specs: [['Material grade','SS 202 / SS 304'],['Finish','Mirror polished'],['Sizes','Multiple capacities'],['Suitable for','Home, travel, gifting'],['Orders','Single piece or bulk']], img: '/images/IMAGE_7___Products_page___Product_3_.png', alt: 'Stainless steel glasses' },
    { name: 'Other SS kitchenware', desc: 'Beyond plates, bowls, and glasses — we produce a range of everyday stainless steel kitchen items. Reach out and we\'ll help.', specs: [['Material grade','SS 202 / SS 304'],['Finish','Mirror polished'],['Suitable for','Home and kitchen use'],['Orders','Ask for availability']], img: '/images/IMAGE_8___Products_page___Product_4.png', alt: 'Other metal products' },
  ];

  return (
    <div>
      <InnerHero page="Products" title="Our products" sub="Stainless steel kitchenware — durable, food-safe, and made to last for years." />
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {products.map(p => (
              <div key={p.name} style={{ background: '#fff', border: '1px solid var(--rule-lt)', overflow: 'hidden' }}>
                <div className="pf-img">
                  <img src={p.img} alt={p.alt} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.4s' }} />
                </div>
                <div style={{ padding: 26 }}>
                  <div className="lbl accent" style={{ marginBottom: 8 }}>Kitchenware</div>
                  <h3 style={{ fontSize: 22, marginBottom: 8, color: 'var(--navy)' }}>{p.name}</h3>
                  <p style={{ fontSize: 13, marginBottom: 16 }}>{p.desc}</p>
                  <div style={{ marginTop: 16 }}>
                    {p.specs.map(([k,v]) => <div key={k} className="spec-row"><span className="k">{k}</span><span className="v">{v}</span></div>)}
                  </div>
                  <button className="btn-primary" style={{ marginTop: 16 }} onClick={() => onNav('Contact')}>Enquire now</button>
                </div>
              </div>
            ))}

            {/* Coming soon */}
            {[{ name: 'Aluminium products', desc: 'Aluminium kitchenware and utility products — planned as we expand manufacturing capacity.' }, { name: 'OEM & custom products', desc: 'Contract manufacturing and custom metal products for brands and large buyers — a future phase.' }].map(p => (
              <div key={p.name} style={{ background: 'var(--light)', border: '1px solid var(--rule-lt)', opacity: 0.6, overflow: 'hidden' }}>
                <div style={{ height: 230, background: '#2a3348', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:8 }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)"><path d="M12 15.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4zm0-8a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zM20 4h-3.17L15 2H9L7.17 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/></svg>
                  <span style={{ fontSize:10, color:'rgba(255,255,255,0.2)', letterSpacing:'0.14em', textTransform:'uppercase' }}>Coming soon</span>
                </div>
                <div style={{ padding: 26 }}>
                  <div className="lbl" style={{ color: 'var(--text-mid)', marginBottom: 8 }}>Coming soon</div>
                  <h3 style={{ fontSize: 22, marginBottom: 8, color: 'var(--text-mid)' }}>{p.name}</h3>
                  <p style={{ fontSize: 13 }}>{p.desc}</p>
                  <div style={{ marginTop: 16 }}><div className="spec-row"><span className="k">Status</span><span className="v" style={{ color: 'var(--text-mid)' }}>In planning</span></div></div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--navy)', padding: '44px 48px', textAlign: 'center', marginTop: 36 }}>
            <h3 style={{ color: '#fff', marginBottom: 10 }}>Looking for something specific?</h3>
            <p style={{ color: 'rgba(255,255,255,0.35)', maxWidth: 460, margin: '0 auto 22px' }}>Single set for your home or a large order for your business — we're happy to help either way.</p>
            <div className="flex-gap" style={{ justifyContent: 'center' }}>
              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="btn-wa">💬 WhatsApp us</a>
              <button className="btn-primary" onClick={() => onNav('Contact')}>Send an enquiry</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─────────── QUALITY ─────────── */
export function Quality() {
  const stages = [
    ['01','Raw material verification','All incoming SS is checked against grade certification before entering production. Material without valid documentation is returned to the supplier.'],
    ['02','In-process controls','Dimensional checks at blanking, forming, and trimming stages. Pieces outside acceptable tolerances are removed from the batch immediately.'],
    ['03','Surface inspection','All polished pieces are visually inspected before packaging. Scratches, uneven finish, or contamination result in rejection or rework.'],
    ['04','Final batch inspection','A sample is drawn from every batch before packaging. Checked against tolerances and surface quality standards. Batch proceeds only on passing.'],
    ['05','Packaging integrity','Packed goods checked for correct count, cushioning, secure closure, and correct labelling before dispatch clearance is issued.'],
    ['06','Batch traceability','Each dispatch is linked to its production batch. Any quality issue can be traced back to the exact production run.'],
  ];

  return (
    <div>
      <InnerHero page="Quality" title="Quality assurance" sub="Built into production at every stage — not inspected in at the end." />
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="lbl" style={{ marginBottom: 10 }}>Our approach</div>
          <div className="accent-rule" />
          <h2 style={{ color: 'var(--navy)', marginBottom: 14 }}>Quality at every stage</h2>
          <p style={{ maxWidth: 580, marginBottom: 36 }}>Controls are applied at each production stage so defects are found before they reach you — not after.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 18 }}>
            {stages.map(([n,t,d]) => (
              <div key={n} style={{ background: '#fff', border: '1px solid var(--rule-lt)', padding: '28px 24px', borderLeft: '4px solid var(--accent)' }}>
                <div style={{ fontFamily: 'Barlow Condensed', fontSize: 52, fontWeight: 800, color: 'var(--light)', lineHeight: 1, marginBottom: 6 }}>{n}</div>
                <h3 style={{ fontSize: 20, marginBottom: 8, color: 'var(--navy)' }}>{t}</h3>
                <p style={{ fontSize: 14 }}>{d}</p>
              </div>
            ))}
          </div>
          <hr className="div-lt" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
            {[['📋','Material documentation','Grade certification filed for every batch. We do not mix grades without clear identification.'],['🎯','Tooling discipline','Production tooling inspected regularly. Worn tooling replaced before dimensional drift affects quality.'],['🤝','Complaint resolution','Valid complaints investigated at batch level. Resolved with replacement or credit. Used to improve our process.']].map(([icon,t,d]) => (
              <div key={t} style={{ background: 'var(--light)', border: '1px solid var(--rule-lt)', padding: '26px 22px', borderTop: '3px solid var(--sand)' }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{icon}</div>
                <h4 style={{ marginBottom: 8 }}>{t}</h4>
                <p style={{ fontSize: 13 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─────────── BLOG ─────────── */
export function Blog({ onNav }) {
  const posts = [
    { cat: 'Product knowledge', date: '12 Jan 2025', title: 'Understanding SS grades: 202, 304 and what they mean', desc: 'A plain-language guide to grades used in kitchenware — what the numbers mean and what to look for when buying.', img: '/images/Blog_Image_1___Steel_grades_article.png' },
    { cat: 'Manufacturing', date: '5 Jan 2025', title: 'How stainless steel utensils are made: from coil to kitchen', desc: 'A step-by-step look at the full production process — blanking, forming, polishing, inspection, packaging.', img: '/images/Blog_Image_2___Manufacturing_process_article_.png' },
    { cat: 'Industry insights', date: '28 Dec 2024', title: "Why stainless steel remains India's favourite kitchenware material", desc: 'Durability, hygiene, and value — why SS stays dominant in Indian homes decade after decade.', img: '/images/Blog_Image_3___Industry_insights_article.png' },
    { cat: 'Product knowledge', date: '18 Dec 2024', title: 'Material thickness and durability: what gauge means in SS', desc: 'Gauge numbers explained simply — actual thickness in mm and what thicker steel gives you in real use.', img: '/images/Blog_Image_4___Material_thickness_article.png' },
  ];

  return (
    <div>
      <InnerHero page="Blog" title="Industry insights" sub="Knowledge on stainless steel products, manufacturing, and the Indian metals industry." />
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 44 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {posts.map(p => (
                <div key={p.title} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', background: '#fff', border: '1px solid var(--rule-lt)', overflow: 'hidden', cursor: 'pointer', transition: 'box-shadow 0.2s' }}>
                  <div className="bch-img">
                    <img src={p.img} alt={p.title} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                  </div>
                  <div style={{ padding: '18px 24px' }}>
                    <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)' }}>{p.cat}</span>
                    <span style={{ fontSize: 11, color: 'var(--text-mid)', marginLeft: 10 }}>{p.date}</span>
                    <h3 style={{ fontFamily: 'Barlow Condensed', fontSize: 18, fontWeight: 700, textTransform: 'uppercase', color: 'var(--navy)', margin: '8px 0 7px', lineHeight: 1.25 }}>{p.title}</h3>
                    <p style={{ fontSize: 13 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div style={{ background: 'var(--light)', border: '1px solid var(--rule-lt)', padding: 20, marginBottom: 18 }}>
                <h4 style={{ fontFamily: 'Barlow Condensed', fontSize: 14, fontWeight: 700, textTransform: 'uppercase', marginBottom: 14, paddingBottom: 10, borderBottom: '2px solid var(--accent)' }}>Categories</h4>
                {[['Product knowledge','4'],['Manufacturing','5'],['Industry insights','3'],['Company updates','2']].map(([cat,count]) => (
                  <div key={cat} style={{ display:'flex',justifyContent:'space-between',padding:'9px 0',borderBottom:'1px solid var(--rule-lt)',fontSize:13,color:'var(--text-mid)',cursor:'pointer' }}>
                    <span>{cat}</span><span style={{ fontSize:11,color:'var(--text-mid)' }}>{count}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: 'var(--accent)', padding: 24, textAlign: 'center' }}>
                <h4 style={{ color: '#fff', marginBottom: 8, fontFamily: 'Barlow Condensed', fontSize: 18, textTransform: 'uppercase' }}>Have a question?</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, marginBottom: 16 }}>Product queries, bulk orders, or trade enquiries — we're here.</p>
                <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="btn-dark" style={{ display: 'block' }}>💬 WhatsApp us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─────────── GALLERY ─────────── */
export function Gallery() {
  const [active, setActive] = React.useState('all');
  const [lightbox, setLightbox] = React.useState(null);

  const items = [
    { cat: 'manufacturing', label: 'Press operation',      img: '/images/Gallery_Image_1___Press_operation.png' },
    { cat: 'products',      label: 'Metal products',       img: '/images/Gallery_Image_2___Metal_products.png' },
    { cat: 'manufacturing', label: 'Polishing line',       img: '/images/Gallery_Image_3___Polishing_line.png' },
    { cat: 'manufacturing', label: 'Quality inspection',   img: '/images/Gallery_Image_4___Quality_inspection.png' },
    { cat: 'facility',      label: 'Production floor',     img: '/images/Gallery_Image_5___Production_floor.png' },
    { cat: 'products',      label: 'Metal components',     img: '/images/Gallery_Image_6___Metal_components.png' },
    { cat: 'manufacturing', label: 'Metal forming',        img: '/images/Gallery_Image_7___Metal_forming.png' },
    { cat: 'packaging',     label: 'Packaging',            img: '/images/Gallery_Image_8___Packaging.png' },
    { cat: 'facility',      label: 'Warehouse',            img: '/images/Gallery_Image_9___Warehouse.png' },
  ];

  const tabs = ['all', 'products', 'manufacturing', 'facility', 'packaging'];
  const filtered = active === 'all' ? items : items.filter(i => i.cat === active);

  return (
    <div>
      <InnerHero page="Gallery" title="Gallery" sub="Products, facility, and manufacturing — click any image to enlarge." />

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.92)', zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center', padding:24, cursor:'zoom-out' }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{ position:'absolute', top:20, right:24, background:'none', border:'none', color:'#fff', fontSize:32, cursor:'pointer', lineHeight:1 }}
          >×</button>
          <img
            src={lightbox.img}
            alt={lightbox.label}
            style={{ maxWidth:'92vw', maxHeight:'88vh', objectFit:'contain', borderRadius:4 }}
            onClick={e => e.stopPropagation()}
          />
          <div style={{ position:'absolute', bottom:24, left:'50%', transform:'translateX(-50%)', color:'rgba(255,255,255,0.5)', fontSize:12, letterSpacing:'0.1em', textTransform:'uppercase' }}>
            {lightbox.label}
          </div>
        </div>
      )}

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
            {tabs.map(t => (
              <button key={t} onClick={() => setActive(t)} style={{ fontFamily: 'Barlow Condensed', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '7px 16px', border: `1.5px solid ${active===t?'var(--navy)':'var(--rule-lt)'}`, background: active===t?'var(--navy)':'#fff', color: active===t?'var(--sand)':'var(--text-mid)', cursor: 'pointer', borderRadius: 2, transition: 'all 0.15s' }}>{t}</button>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 4 }}>
            {filtered.map((item, i) => (
              <div
                key={i}
                style={{ aspectRatio: '4/3', overflow: 'hidden', cursor: 'zoom-in', position: 'relative' }}
                onClick={() => setLightbox(item)}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.4s' }}
                  onMouseOver={e => e.currentTarget.style.transform='scale(1.05)'}
                  onMouseOut={e => e.currentTarget.style.transform='scale(1)'}
                />
                <div style={{ position:'absolute', bottom:0, left:0, right:0, background:'linear-gradient(transparent, rgba(0,0,0,0.5))', padding:'20px 12px 10px', opacity:0, transition:'opacity 0.2s' }}
                  onMouseOver={e => e.currentTarget.style.opacity=1}
                  onMouseOut={e => e.currentTarget.style.opacity=0}
                >
                  <span style={{ color:'#fff', fontSize:11, letterSpacing:'0.1em', textTransform:'uppercase' }}>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─────────── CONTACT ─────────── */
export function Contact() {
  const [done, setDone] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setError(false);

    const form = e.target;
    const data = {
      from_name:    form.from_name.value,
      business:     form.business.value,
      phone:        form.phone.value,
      email:        form.email.value,
      buyer_type:   form.buyer_type.value,
      product:      form.product.value,
      message:      form.message.value,
      to_email:     'bishwambharbharatmetals@gmail.com',
    };

    // EmailJS setup — replace the 3 values below with your own from emailjs.com
    // Step 1: go to emailjs.com and sign up free
    // Step 2: add Gmail as your email service
    // Step 3: create a template and copy the 3 IDs below
    const SERVICE_ID  = 'service_lqry8kn';
    const TEMPLATE_ID = 'template_6nbc1wm';
    const PUBLIC_KEY  = 'dK5VXP7qyhoST_w4z';

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id:  SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id:     PUBLIC_KEY,
        template_params: data,
      }),
    })
      .then(res => {
        setSending(false);
        if (res.ok) { setDone(true); form.reset(); setTimeout(() => setDone(false), 8000); }
        else { setError(true); }
      })
      .catch(() => { setSending(false); setError(true); });
  }

  return (
    <div>
      <InnerHero page="Contact" title="Contact us" sub="We respond to all enquiries within one business day." />
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 72, alignItems: 'start' }}>
            <div>
              <div className="lbl">Contact details</div>
              <div className="accent-rule" />
              <h3 style={{ marginBottom: 8, color: 'var(--navy)' }}>We're easy to reach</h3>
              <p style={{ marginBottom: 24 }}>Phone, WhatsApp, or email — reach us however is easiest for you.</p>
              {[['📞','Phone',<a href="tel:+91XXXXXXXXXX" style={{ color:'var(--accent)' }}>+91 XXXXX XXXXX</a>],['✉️','Email',<a href="mailto:info@bbmetals.in" style={{ color:'var(--accent)' }}>info@bbmetals.in</a>],['📍','Address','[Factory Address], Bihar, India'],['🕐','Hours','Mon – Sat, 9:00 am – 6:00 pm IST']].map(([icon,label,val]) => (
                <div key={label} style={{ display:'flex',gap:14,padding:'18px 0',borderBottom:'1px solid var(--rule-lt)' }}>
                  <span style={{ fontSize:18,width:28,textAlign:'center',flexShrink:0,paddingTop:2 }}>{icon}</span>
                  <div>
                    <div style={{ fontSize:10,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--text-mid)',marginBottom:4 }}>{label}</div>
                    <div style={{ fontSize:14,color:'var(--navy)',fontWeight:500 }}>{val}</div>
                  </div>
                </div>
              ))}

              {/* Social media */}
              <div style={{ marginTop: 24, marginBottom: 8 }}>
                <div style={{ fontSize:10,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--text-mid)',marginBottom:12 }}>Follow us</div>
                <div style={{ display:'flex',gap:8,flexWrap:'wrap' }}>
                  <a href="https://www.instagram.com/bishwambharbharatmetals/" target="_blank" rel="noopener noreferrer" style={{ display:'inline-flex',alignItems:'center',gap:7,background:'var(--light)',border:'1px solid var(--rule-lt)',color:'var(--navy)',fontSize:12,fontWeight:600,padding:'8px 14px',borderRadius:2,textDecoration:'none' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    Instagram
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61590358276975" target="_blank" rel="noopener noreferrer" style={{ display:'inline-flex',alignItems:'center',gap:7,background:'var(--light)',border:'1px solid var(--rule-lt)',color:'var(--navy)',fontSize:12,fontWeight:600,padding:'8px 14px',borderRadius:2,textDecoration:'none' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    Facebook
                  </a>
                  <a href="https://x.com/bbharatmetals" target="_blank" rel="noopener noreferrer" style={{ display:'inline-flex',alignItems:'center',gap:7,background:'var(--light)',border:'1px solid var(--rule-lt)',color:'var(--navy)',fontSize:12,fontWeight:600,padding:'8px 14px',borderRadius:2,textDecoration:'none' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    X
                  </a>
                </div>
              </div>
              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" style={{ display:'flex',alignItems:'center',gap:12,background:'#1A7A40',color:'#fff',padding:'15px 22px',borderRadius:2,textDecoration:'none',marginTop:24,fontSize:14,fontWeight:600 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp — instant reply
              </a>
              <div style={{ background:'var(--navy2)',borderRadius:2,height:200,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:10,marginTop:20,border:'1px solid var(--rule)' }}>
                <span style={{ fontSize:28 }}>📍</span>
                <p style={{ fontSize:10,color:'rgba(255,255,255,0.2)',letterSpacing:'0.12em',textTransform:'uppercase',margin:0 }}>Add Google Maps embed here</p>
              </div>
            </div>

            <div>
              <div className="lbl">Send a message</div>
              <div className="accent-rule" />
              <h3 style={{ marginBottom: 20, color: 'var(--navy)' }}>Send an enquiry</h3>
              <form onSubmit={handleSubmit} style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:14 }}>
                {[['Full name *','text','Your name',true,'from_name'],['Business name','text','If applicable',false,'business'],['Mobile number *','tel','+91 XXXXX XXXXX',true,'phone'],['Email','email','your@email.com',false,'email']].map(([label,type,ph,req,name]) => (
                  <div key={label} style={{ display:'flex',flexDirection:'column',gap:5 }}>
                    <label style={{ fontSize:10,fontWeight:700,color:'var(--text-mid)',letterSpacing:'0.1em',textTransform:'uppercase' }}>{label}</label>
                    <input name={name} type={type} placeholder={ph} required={req} style={{ border:'1.5px solid var(--rule-lt)',background:'var(--light)',padding:'11px 14px',fontSize:14,fontFamily:'Inter,sans-serif',color:'var(--navy)',borderRadius:2,outline:'none' }} />
                  </div>
                ))}
                <div style={{ display:'flex',flexDirection:'column',gap:5 }}>
                  <label style={{ fontSize:10,fontWeight:700,color:'var(--text-mid)',letterSpacing:'0.1em',textTransform:'uppercase' }}>I am a *</label>
                  <select name="buyer_type" required style={{ border:'1.5px solid var(--rule-lt)',background:'var(--light)',padding:'11px 14px',fontSize:14,fontFamily:'Inter,sans-serif',color:'var(--navy)',borderRadius:2,outline:'none' }}>
                    <option value="">Select</option>
                    {['Home buyer','Restaurant / Hotel','School / Hostel / Canteen','Distributor / Wholesaler','Dealer / Retailer','Government / Institutional buyer','Other'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div style={{ display:'flex',flexDirection:'column',gap:5 }}>
                  <label style={{ fontSize:10,fontWeight:700,color:'var(--text-mid)',letterSpacing:'0.1em',textTransform:'uppercase' }}>Product interest</label>
                  <select name="product" style={{ border:'1.5px solid var(--rule-lt)',background:'var(--light)',padding:'11px 14px',fontSize:14,fontFamily:'Inter,sans-serif',color:'var(--navy)',borderRadius:2,outline:'none' }}>
                    <option value="">Select</option>
                    {['Stainless steel plates','Stainless steel bowls','Stainless steel glasses','Full range / dinner set','Bulk / trade order','Other'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div style={{ display:'flex',flexDirection:'column',gap:5,gridColumn:'span 2' }}>
                  <label style={{ fontSize:10,fontWeight:700,color:'var(--text-mid)',letterSpacing:'0.1em',textTransform:'uppercase' }}>Your message</label>
                  <textarea name="message" rows={4} placeholder="Tell us what you need — product, quantity, location, or any questions..." style={{ border:'1.5px solid var(--rule-lt)',background:'var(--light)',padding:'11px 14px',fontSize:14,fontFamily:'Inter,sans-serif',color:'var(--navy)',borderRadius:2,outline:'none',resize:'vertical' }} />
                </div>
                <div style={{ gridColumn:'span 2' }}>
                  <button type="submit" className="btn-primary" disabled={sending}>
                    {sending ? 'Sending...' : 'Send enquiry →'}
                  </button>
                </div>
                {done && (
                  <div style={{ gridColumn:'span 2',background:'#EDF7ED',border:'1px solid #A8D5A8',padding:'13px 16px',fontSize:14,color:'#2E5E2E',borderRadius:2 }}>
                    ✓ Message received — we'll be in touch within one business day.
                  </div>
                )}
                {error && (
                  <div style={{ gridColumn:'span 2',background:'#FDE8E8',border:'1px solid #F5A5A5',padding:'13px 16px',fontSize:14,color:'#7A2020',borderRadius:2 }}>
                    ⚠️ Something went wrong. Please try WhatsApp or call us directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
