import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 48, paddingBottom: 40, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>

          <div>
            <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 20, fontWeight: 800, textTransform: 'uppercase', color: '#fff', marginBottom: 4 }}>Bishwambhar Bharat Metals</div>
            <div style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sand)', marginBottom: 16 }}>Bihar, India</div>
            <p className="ft-desc" style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.75, maxWidth: 280 }}>
              Stainless steel kitchenware manufactured in India — for homes, restaurants, and businesses. Quality built in, not added on.
            </p>
          </div>

          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sand)', marginBottom: 16 }}>Pages</div>
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Products', path: '/products' },
              { name: 'Quality', path: '/quality' },
              { name: 'Blog', path: '/blog' },
              { name: 'Gallery', path: '/gallery' },
              { name: 'Contact', path: '/contact' },
            ].map(p => (
              <Link key={p.name} to={p.path} style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.35)', textDecoration: 'none', padding: '5px 0', transition: 'color 0.15s' }}
                onMouseOver={e => e.currentTarget.style.color = 'var(--sand)'}
                onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
              >
                {p.name}
              </Link>
            ))}
          </div>

          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sand)', marginBottom: 16 }}>Products</div>
            {['Stainless steel plates', 'Stainless steel bowls', 'Stainless steel glasses', 'Other kitchenware'].map(p => (
              <Link key={p} to="/products" style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.35)', textDecoration: 'none', padding: '5px 0' }}>{p}</Link>
            ))}
          </div>

          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sand)', marginBottom: 16 }}>Contact</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 2.2 }}>
              <a href="tel:+91XXXXXXXXXX" style={{ display: 'block', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>📞 +91 XXXXX XXXXX</a>
              <a href="mailto:bishwambharbharatmetals@gmail.com" style={{ display: 'block', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>✉️ bishwambharbharatmetals@gmail.com</a>
              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>💬 WhatsApp us</a>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
              <a href="https://www.instagram.com/bishwambharbharatmetals/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.3)', fontSize: 18, textDecoration: 'none' }}>📷</a>
              <a href="https://www.facebook.com/profile.php?id=61590358276975" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.3)', fontSize: 18, textDecoration: 'none' }}>📘</a>
              <a href="https://x.com/bbharatmetals" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.3)', fontSize: 18, textDecoration: 'none' }}>🐦</a>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, flexWrap: 'wrap', gap: 12 }}>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>
            © {new Date().getFullYear()} Bishwambhar Bharat Metals. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
            {['GST Registered', 'Udyam Certified', 'GeM Listed'].map(t => (
              <span key={t} style={{ fontSize: 10, color: 'rgba(255,255,255,0.15)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
