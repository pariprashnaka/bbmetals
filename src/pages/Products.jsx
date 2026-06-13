import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const products = [
  { name: 'Stainless steel plates', desc: 'Classic thali in food-grade stainless steel. Durable, easy to clean, built for everyday use at home, in restaurants, or in large kitchens.', specs: [['Material grade','SS 202 / SS 304'],['Finish','Mirror polished'],['Sizes','Multiple available'],['Suitable for','Home, hotel, hostel, canteen'],['Orders','Single piece or bulk']], img: '/images/IMAGE_5___Products_page___Product_1.webp', alt: 'SS plates' },
  { name: 'Stainless steel bowls', desc: 'Katori and serving bowls for everyday use. Smooth rim, seamless build, and a bright finish that stays good wash after wash.', specs: [['Material grade','SS 202 / SS 304'],['Finish','Mirror polished'],['Sizes','Multiple available'],['Suitable for','Home, dining, gifting sets'],['Orders','Single piece or bulk']], img: '/images/IMAGE_6___Products_page___Product_2_.webp', alt: 'SS bowls' },
  { name: 'Stainless steel glasses', desc: 'Rust-free tumblers that are a staple in every Indian home. Lightweight, easy to hold, and safe for all ages.', specs: [['Material grade','SS 202 / SS 304'],['Finish','Mirror polished'],['Sizes','Multiple capacities'],['Suitable for','Home, travel, gifting'],['Orders','Single piece or bulk']], img: '/images/IMAGE_7___Products_page___Product_3_.webp', alt: 'SS glasses' },
  { name: 'Other SS kitchenware', desc: "Beyond plates, bowls, and glasses — we produce a range of everyday stainless steel kitchen items. Reach out and we'll help.", specs: [['Material grade','SS 202 / SS 304'],['Finish','Mirror polished'],['Suitable for','Home and kitchen use'],['Orders','Ask for availability']], img: '/images/IMAGE_8___Products_page___Product_4.webp', alt: 'Other products' },
];

export default function Products() {
  return (
    <div>
      <SEO title="Products" description="Stainless steel plates, bowls, glasses and kitchenware — SS 202 & SS 304. Food-grade, mirror polished, available for retail and bulk orders." path="/products" />
      <div style={{ background: 'var(--navy)', padding: '64px 0 52px', borderBottom: '3px solid var(--sand)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.025, backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 10px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', marginBottom: 14 }}><Link to="/" style={{ color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>Home</Link> › <span style={{ color: 'var(--sand)' }}>Products</span></div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(36px,5vw,60px)', marginBottom: 12 }}>Our products</h1>
          <p style={{ color: 'rgba(255,255,255,0.35)', maxWidth: 540 }}>Stainless steel kitchenware — durable, food-safe, and made to last for years.</p>
        </div>
      </div>
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="page-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {products.map(p => (
              <div key={p.name} style={{ background: '#fff', border: '1px solid var(--rule-lt)', overflow: 'hidden' }}>
                <div className="pf-img"><img src={p.img} alt={p.alt} style={{ width:'100%', height:'100%', objectFit:'cover' }} /></div>
                <div style={{ padding: 26 }}>
                  <div className="lbl accent" style={{ marginBottom: 8 }}>Kitchenware</div>
                  <h3 style={{ fontSize: 22, marginBottom: 8, color: 'var(--navy)' }}>{p.name}</h3>
                  <p style={{ fontSize: 13, marginBottom: 16 }}>{p.desc}</p>
                  <div style={{ marginTop: 16 }}>{p.specs.map(([k,v]) => <div key={k} className="spec-row"><span className="k">{k}</span><span className="v">{v}</span></div>)}</div>
                  <Link to="/contact" className="btn-primary" style={{ marginTop: 16, display: 'inline-block', textDecoration: 'none' }}>Enquire now</Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: 'var(--navy)', padding: '44px 48px', textAlign: 'center', marginTop: 36 }}>
            <h3 style={{ color: '#fff', marginBottom: 10 }}>Looking for something specific?</h3>
            <p style={{ color: 'rgba(255,255,255,0.35)', maxWidth: 460, margin: '0 auto 22px' }}>Single set for your home or a large order for your business — we're happy to help either way.</p>
            <div className="flex-gap" style={{ justifyContent: 'center' }}>
              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="btn-wa">💬 WhatsApp us</a>
              <Link to="/contact" className="btn-primary" style={{ textDecoration:'none' }}>Send an enquiry</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
