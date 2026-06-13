import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function InnerHero({ page, title, sub }) {
  return (
    <div style={{ background: 'var(--navy)', padding: '64px 0 52px', borderBottom: '3px solid var(--sand)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.025, backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 10px)' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', marginBottom: 14, letterSpacing: '0.04em' }}>
          <Link to="/" style={{ color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>Home</Link> › <span style={{ color: 'var(--sand)' }}>{page}</span>
        </div>
        <h1 style={{ color: '#fff', fontSize: 'clamp(36px,5vw,60px)', marginBottom: 12 }}>{title}</h1>
        <p style={{ color: 'rgba(255,255,255,0.35)', maxWidth: 540 }}>{sub}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div>
      <SEO title="About Us" description="Learn about Bishwambhar Bharat Metals — stainless steel manufacturer in Bihar, India. Our values, vision, and roadmap." path="/about" image="/images/IMAGE_4___About_us_page.png" />
      <InnerHero page="About us" title="About us" sub="Built on manufacturing discipline, honest quality, and a long-term vision." />
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="page-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72 }}>
            <div>
              <div className="lbl">Our background</div><div className="accent-rule" />
              <h2 style={{ color: 'var(--navy)', marginBottom: 16 }}>A manufacturer,<br />not just a seller</h2>
              <p style={{ marginBottom: 14 }}>Bishwambhar Bharat Metals was built with one conviction: Indian manufacturing deserves to be done properly — with discipline in process, integrity in materials, and a long-term view of what this enterprise can become.</p>
              <p style={{ marginBottom: 14 }}>We began with stainless steel kitchenware because it is a product every Indian household needs, and because it gave us the foundation to build real manufacturing capability.</p>
              <p style={{ marginBottom: 32 }}>Our roadmap doesn't end at plates and bowls. We are building towards aluminium products, industrial components, OEM supply, and more — step by step, quality first.</p>
              <hr className="div-lt" />
              <div className="lbl">Our values</div><div className="accent-rule" />
              <div className="page-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, marginTop: 14 }}>
                {[['Quality first','No compromise on material grade or process standard.'],['Integrity','We state what we supply, and supply what we state.'],['Consistency','Same standard batch to batch, order to order.'],['Accountability','We stand behind every product that leaves our facility.'],['Customer focus','One set or a truckload — you matter equally.'],['Improvement','Always looking to improve process and product.']].map(([t, d]) => (
                  <div key={t} style={{ background: 'var(--light)', border: '1px solid var(--rule-lt)', padding: '20px 16px', borderTop: '3px solid var(--accent)' }}>
                    <h4 style={{ marginBottom: 6 }}>{t}</h4><p style={{ fontSize: 12 }}>{d}</p>
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
          <div className="page-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72 }}>
            <div>
              <div className="lbl">Our vision</div><div className="accent-rule" />
              <h2 style={{ color: 'var(--navy)', marginBottom: 14 }}>India's most trusted metal manufacturer</h2>
              <p>Every decision — infrastructure, suppliers, quality systems, people — is made with a ten-year horizon. We want to be the name Indian buyers think of first for quality metal products.</p>
            </div>
            <div>
              <div className="lbl">Expansion roadmap</div><div className="accent-rule" />
              <div style={{ background: 'var(--navy)', borderRadius: 2, padding: 28 }}>
                {[['Phase 1 · Now','Stainless steel kitchenware','Plates, bowls, glasses. Trade distribution and retail.',false],['Phase 2 · Near term','Expanded SS range & channels','New products, hospitality and institutional supply.',true],['Phase 3 · Medium term','Aluminium & OEM manufacturing','Multi-metal capability, branded supply partnerships.',true],['Phase 4 · Long term','Industrial & contract manufacturing','Fabrication, components, and contract manufacturing at scale.',true]].map(([phase,title,desc,future]) => (
                  <div key={phase} style={{ display:'flex',gap:16,padding:'16px 0',borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ width:10,height:10,borderRadius:'50%',flexShrink:0,marginTop:4,background:future?'transparent':'var(--sand)',border:future?'2px solid rgba(255,255,255,0.15)':'none' }} />
                    <div>
                      <div style={{ fontSize:10,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',color:future?'rgba(255,255,255,0.2)':'var(--sand)',marginBottom:3 }}>{phase}</div>
                      <div style={{ fontFamily:'Barlow Condensed',fontSize:16,fontWeight:700,textTransform:'uppercase',color:future?'rgba(255,255,255,0.45)':'rgba(255,255,255,0.85)',marginBottom:3 }}>{title}</div>
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
