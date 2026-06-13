import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Quality() {
  const stages = [
    ['01','Raw material verification','All incoming SS is checked against grade certification before entering production.'],
    ['02','In-process controls','Dimensional checks at blanking, forming, and trimming stages.'],
    ['03','Surface inspection','All polished pieces are visually inspected before packaging.'],
    ['04','Final batch inspection','A sample is drawn from every batch before packaging.'],
    ['05','Packaging integrity','Packed goods checked for correct count, cushioning, and labelling.'],
    ['06','Batch traceability','Each dispatch is linked to its production batch.'],
  ];
  return (
    <div>
      <SEO title="Quality Assurance" description="Quality controls at every manufacturing stage — raw material verification, in-process checks, surface inspection, and batch traceability." path="/quality" />
      <div style={{ background: 'var(--navy)', padding: '64px 0 52px', borderBottom: '3px solid var(--sand)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.025, backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 10px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', marginBottom: 14 }}><Link to="/" style={{ color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>Home</Link> › <span style={{ color: 'var(--sand)' }}>Quality</span></div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(36px,5vw,60px)', marginBottom: 12 }}>Quality assurance</h1>
          <p style={{ color: 'rgba(255,255,255,0.35)', maxWidth: 540 }}>Built into production at every stage — not inspected in at the end.</p>
        </div>
      </div>
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="page-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 18 }}>
            {stages.map(([n,t,d]) => (
              <div key={n} style={{ background: '#fff', border: '1px solid var(--rule-lt)', padding: '28px 24px', borderLeft: '4px solid var(--accent)' }}>
                <div style={{ fontFamily: 'Barlow Condensed', fontSize: 52, fontWeight: 800, color: 'var(--light)', lineHeight: 1, marginBottom: 6 }}>{n}</div>
                <h3 style={{ fontSize: 20, marginBottom: 8, color: 'var(--navy)' }}>{t}</h3>
                <p style={{ fontSize: 14 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
