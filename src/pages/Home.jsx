import React from 'react';
import './Home.css';

const Ticker = () => {
  const items = ['Stainless Steel Plates', 'Stainless Steel Bowls', 'Stainless Steel Glasses',
    'Food Grade SS 202 & 304', 'Mirror Polished Finish', 'Made in India',
    'Udyam Certified', 'GST Registered'];
  const doubled = [...items, ...items];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">
            {item}<span className="ticker-dot" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default function Home({ onNav }) {
  return (
    <div className="home">

      {/* HERO */}
      <div className="hero">
        <div className="hero-texture" />
        <div className="hero-img-bg">
          <img src="/images/IMAGE_1___Hero_background.png" alt="Manufacturing facility" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        </div>
        <div className="hero-overlay" />
        <div className="hero-fire-top" />
        <div className="hero-content container">
          <div className="hero-eyebrow">Bishwambhar Bharat Metals · Made in Bihar, India</div>
          <h1>
            Strength forged<br />
            in every piece.<br />
            <span>Built for every home.</span>
          </h1>
          <p className="hero-sub">
            Premium stainless steel kitchenware — built to last, crafted with
            consistency, and available for homes, restaurants, and businesses across India.
          </p>
          <div className="flex-gap hero-actions">
            <button className="btn-primary" onClick={() => onNav('Products')}>Explore products</button>
            <button className="btn-outline-light" onClick={() => onNav('Contact')}>Get in touch</button>
          </div>
          <div className="hero-stats">
            <div className="h-stat"><div className="h-stat-num">SS <span>202</span></div><div className="h-stat-lbl">Food-grade steel</div></div>
            <div className="h-stat"><div className="h-stat-num">100<span>%</span></div><div className="h-stat-lbl">Food safe</div></div>
            <div className="h-stat"><div className="h-stat-num">B2B <span>&</span> B2C</div><div className="h-stat-lbl">All buyer types</div></div>
            <div className="h-stat"><div className="h-stat-num">Bihar</div><div className="h-stat-lbl">Manufactured in India</div></div>
          </div>
        </div>
      </div>

      {/* TICKER */}
      <Ticker />

      {/* OVERVIEW */}
      <section className="section overview-section" style={{ background: '#fff', padding: 0 }}>
        <div className="overview-grid">
          <div className="ov-img-wrap">
            <img src="/images/IMAGE_2___Homepage_overview_section.png" alt="Manufacturing operations" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
            <div className="ov-badge">
              <div className="ov-badge-big">SS 202</div>
              <div className="ov-badge-sm">Food-grade steel</div>
            </div>
          </div>
          <div className="ov-content">
            <div className="lbl">Who we are</div>
            <div className="accent-rule" />
            <h2 style={{ color: 'var(--navy)' }} className="mb-16">Built to<br />manufacture.<br />Made to last.</h2>
            <p className="mb-16">Bishwambhar Bharat Metals is a stainless steel manufacturing company based in Bihar, India. We make products that belong in Indian kitchens — durable, rust-free, and backed by real manufacturing discipline.</p>
            <p className="mb-28">Whether you're a family buying a dinner set, a restaurant sourcing tableware, or a distributor looking for a reliable supplier — we make it for you.</p>
            <ul className="feat-list">
              <li>Food-grade stainless steel, safe for the whole family</li>
              <li>Mirror-polished finish that stays bright with everyday use</li>
              <li>Available for individual buyers, bulk orders, and trade supply</li>
              <li>Manufactured, inspected, and dispatched from our own facility</li>
            </ul>
            <div className="flex-gap" style={{ marginTop: 28 }}>
              <button className="btn-primary" onClick={() => onNav('Products')}>See our products</button>
              <button className="btn-outline-dark" onClick={() => onNav('About')}>Our story</button>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section" style={{ background: 'var(--navy)' }}>
        <div className="container">
          <div className="flex-between mb-40">
            <div>
              <div className="lbl">What we make</div>
              <div className="accent-rule" />
              <h2 style={{ color: '#fff' }}>Our product range</h2>
            </div>
            <button className="btn-outline-light" onClick={() => onNav('Products')}>View all products</button>
          </div>
          <div className="prod-grid">
            {[
              { name: 'Stainless steel plates', desc: 'Classic thali in food-grade SS. Built for everyday home use and beyond.', img: '/images/IMAGE_5___Products_page___Product_1.png', alt: 'Stainless steel plates' },
              { name: 'Stainless steel bowls', desc: 'Seamless katori and serving bowls. Smooth finish, sturdy for every meal.', img: '/images/IMAGE_6___Products_page___Product_2_.png', alt: 'Stainless steel bowls' },
              { name: 'Stainless steel glasses', desc: 'Rust-free tumblers built to last. A staple in every Indian household.', img: '/images/IMAGE_7___Products_page___Product_3_.png', alt: 'Stainless steel glasses' },
              { name: 'Other kitchenware', desc: 'More SS kitchen items available. Tell us what you need.', img: '/images/IMAGE_8___Products_page___Product_4.png', alt: 'Other metal products' },
            ].map((p) => (
              <div key={p.name} className="prod-card" onClick={() => onNav('Products')}>
                <div className="prod-img">
                  <img src={p.img} alt={p.alt} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                </div>
                <div className="prod-info">
                  <div className="lbl accent" style={{ marginBottom: 4 }}>Kitchenware</div>
                  <h4 style={{ color: '#fff', fontFamily: 'Barlow Condensed', fontSize: 20, textTransform: 'uppercase', fontWeight: 700, marginBottom: 6 }}>{p.name}</h4>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{p.desc}</p>
                </div>
                <div className="prod-hover">View product →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="section" style={{ background: 'var(--navy2)' }}>
        <div className="container">
          <div className="text-center mb-48">
            <div className="lbl" style={{ justifyContent: 'center' }}>How we work</div>
            <div className="accent-rule" style={{ margin: '0 auto 20px' }} />
            <h2 style={{ color: '#fff' }}>What goes into every product</h2>
            <p style={{ maxWidth: 480, margin: '12px auto 0' }}>Every piece follows a disciplined production process — from raw material to finished product.</p>
          </div>
          <div className="cap-grid">
            {[
              { n: '01', t: 'Raw material selection', d: 'Only verified food-grade stainless steel enters our production line. Grade certificates checked on every batch.' },
              { n: '02', t: 'Precision forming', d: 'Hydraulic presses and deep-draw tooling shape each piece to exact dimensions with consistent wall thickness.' },
              { n: '03', t: 'Surface finishing', d: 'Mirror-polish finishing inside and out. Every surface checked before moving to the next stage.' },
              { n: '04', t: 'Quality inspection', d: 'Dimensional and surface checks at every stage. Non-conforming pieces removed immediately.' },
              { n: '05', t: 'Packaging', d: 'Individual, set, and bulk packaging per buyer requirements. Every shipment traceable to its batch.' },
              { n: '06', t: 'Dispatch clearance', d: 'Final check before goods leave. Packaging integrity, count, and documentation verified per order.' },
            ].map((c) => (
              <div key={c.n} className="cap-card">
                <div className="cap-num">{c.n}</div>
                <h4 style={{ fontFamily: 'Barlow Condensed', fontSize: 17, fontWeight: 700, textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', marginBottom: 8 }}>{c.t}</h4>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY SPLIT */}
      <div className="q-split">
        <div className="q-img-side">
          <img src="/images/IMAGE_3___Homepage_quality_section.png" alt="Quality inspection" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        </div>
        <div className="q-content-side">
          <div className="lbl">Our promise</div>
          <div className="accent-rule" />
          <h2 style={{ color: '#fff', marginBottom: 16 }}>Quality built in,<br />not added on.</h2>
          <p style={{ color: 'rgba(255,255,255,0.45)' }}>We don't inspect quality at the end and hope for the best. Controls are applied at every step — so problems are caught before they become your problem.</p>
          <ul className="q-list">
            {['Verified raw material grade on every batch', 'In-process checks at forming, trimming, and finishing', 'Final batch sampling before any goods are packed', 'Each shipment linked to its production batch', 'Valid complaints investigated and resolved, every time'].map(item => (
              <li key={item}><span className="q-tick">✓</span>{item}</li>
            ))}
          </ul>
          <button className="btn-outline-light" style={{ marginTop: 28 }} onClick={() => onNav('Quality')}>View quality details</button>
        </div>
      </div>

      {/* CONTACT BAND */}
      <div className="cband">
        <div className="container">
          <div className="flex-between">
            <div>
              <h2 style={{ color: '#fff', fontSize: 34, marginBottom: 6 }}>Ready to order?</h2>
              <p style={{ color: 'rgba(255,255,255,0.55)', margin: 0 }}>Phone, WhatsApp, or email — reach us the way that works for you.</p>
            </div>
            <div className="flex-gap">
              <a href="tel:+91XXXXXXXXXX" className="btn-dark">📞 Call us</a>
              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="btn-wa">💬 WhatsApp</a>
              <button className="btn-primary" onClick={() => onNav('Contact')}>✉️ Enquiry form</button>
            </div>
          </div>
        </div>
      </div>

      {/* BLOG PREVIEW */}
      <section className="section" style={{ background: 'var(--light)' }}>
        <div className="container">
          <div className="flex-between mb-40">
            <div>
              <div className="lbl">Knowledge & insights</div>
              <div className="accent-rule" />
              <h2 style={{ color: 'var(--navy)' }}>From our blog</h2>
            </div>
            <button className="btn-outline-dark" onClick={() => onNav('Blog')}>View all articles</button>
          </div>
          <div className="blog-grid">
            {[
              { cat: 'Product knowledge', date: '12 Jan 2025', title: 'Understanding SS grades: 202, 304 and what they mean', desc: 'A plain-language guide to grades used in kitchenware — what the numbers mean and what to look for.', img: '/images/Blog_Image_1___Steel_grades_article.png' },
              { cat: 'Manufacturing', date: '5 Jan 2025', title: 'How stainless steel utensils are made: from coil to kitchen', desc: 'A step-by-step look at the production process — explained simply for every buyer.', img: '/images/Blog_Image_2___Manufacturing_process_article_.png' },
              { cat: 'Industry insights', date: '28 Dec 2024', title: "Why stainless steel remains India's favourite kitchenware material", desc: 'Durability, hygiene, and value — the reasons SS stays dominant in Indian homes.', img: '/images/Blog_Image_3___Industry_insights_article.png' },
            ].map((b) => (
              <div key={b.title} className="blog-card" onClick={() => onNav('Blog')}>
                <div className="blog-img" style={{ height: 190, overflow: 'hidden' }}>
                  <img src={b.img} alt={b.title} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.5s' }} />
                </div>
                <div className="blog-body">
                  <span className="blog-cat">{b.cat}</span>
                  <span className="blog-date">{b.date}</span>
                  <h4 className="blog-title">{b.title}</h4>
                  <p style={{ fontSize: 13 }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
