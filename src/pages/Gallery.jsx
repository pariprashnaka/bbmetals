import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const items = [
  { cat: 'manufacturing', label: 'Press operation', img: '/images/Gallery_Image_1___Press_operation.png' },
  { cat: 'products', label: 'Metal products', img: '/images/Gallery_Image_2___Metal_products.png' },
  { cat: 'manufacturing', label: 'Polishing line', img: '/images/Gallery_Image_3___Polishing_line.png' },
  { cat: 'manufacturing', label: 'Quality inspection', img: '/images/Gallery_Image_4___Quality_inspection.png' },
  { cat: 'facility', label: 'Production floor', img: '/images/Gallery_Image_5___Production_floor.png' },
  { cat: 'products', label: 'Metal components', img: '/images/Gallery_Image_6___Metal_components.png' },
  { cat: 'manufacturing', label: 'Metal forming', img: '/images/Gallery_Image_7___Metal_forming.png' },
  { cat: 'packaging', label: 'Packaging', img: '/images/Gallery_Image_8___Packaging.png' },
  { cat: 'facility', label: 'Warehouse', img: '/images/Gallery_Image_9___Warehouse.png' },
];

export default function Gallery() {
  const [active, setActive] = useState('all');
  const [lightbox, setLightbox] = useState(null);
  const tabs = ['all', 'products', 'manufacturing', 'facility', 'packaging'];
  const filtered = active === 'all' ? items : items.filter(i => i.cat === active);

  return (
    <div>
      <SEO title="Gallery" description="Photos of our manufacturing facility, products, and packaging — stainless steel kitchenware production in Bihar, India." path="/gallery" />
      <div style={{ background: 'var(--navy)', padding: '64px 0 52px', borderBottom: '3px solid var(--sand)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.025, backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 10px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', marginBottom: 14 }}><Link to="/" style={{ color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>Home</Link> › <span style={{ color: 'var(--sand)' }}>Gallery</span></div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(36px,5vw,60px)', marginBottom: 12 }}>Gallery</h1>
          <p style={{ color: 'rgba(255,255,255,0.35)', maxWidth: 540 }}>Products, facility, and manufacturing — click any image to enlarge.</p>
        </div>
      </div>
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.92)', zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center', padding:24, cursor:'zoom-out' }}>
          <button onClick={() => setLightbox(null)} style={{ position:'absolute', top:20, right:24, background:'none', border:'none', color:'#fff', fontSize:32, cursor:'pointer', lineHeight:1 }}>×</button>
          <img src={lightbox.img} alt={lightbox.label} style={{ maxWidth:'92vw', maxHeight:'88vh', objectFit:'contain' }} onClick={e => e.stopPropagation()} />
          <div style={{ position:'absolute', bottom:24, left:'50%', transform:'translateX(-50%)', color:'rgba(255,255,255,0.5)', fontSize:12, letterSpacing:'0.1em', textTransform:'uppercase' }}>{lightbox.label}</div>
        </div>
      )}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
            {tabs.map(t => (
              <button key={t} onClick={() => setActive(t)} style={{ fontFamily: 'Barlow Condensed', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '7px 16px', border: `1.5px solid ${active===t?'var(--navy)':'var(--rule-lt)'}`, background: active===t?'var(--navy)':'#fff', color: active===t?'var(--sand)':'var(--text-mid)', cursor: 'pointer', borderRadius: 2 }}>{t}</button>
            ))}
          </div>
          <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 4 }}>
            {filtered.map((item, i) => (
              <div key={i} style={{ aspectRatio: '4/3', overflow: 'hidden', cursor: 'zoom-in' }} onClick={() => setLightbox(item)}>
                <img src={item.img} alt={item.label} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.4s' }}
                  onMouseOver={e => e.currentTarget.style.transform='scale(1.05)'}
                  onMouseOut={e => e.currentTarget.style.transform='scale(1)'} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
