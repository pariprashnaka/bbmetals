import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div>
      <SEO title="Page Not Found" path="/404" />
      <div style={{ background: 'var(--navy)', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 40 }}>
        <div>
          <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 120, fontWeight: 800, color: 'var(--sand)', opacity: 0.2, lineHeight: 1 }}>404</div>
          <h1 style={{ color: '#fff', fontSize: 36, marginBottom: 12, marginTop: -20 }}>Page not found</h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', maxWidth: 400, margin: '0 auto 28px', fontSize: 15 }}>The page you're looking for doesn't exist or has been moved.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn-primary">Go to homepage</Link>
            <Link to="/products" className="btn-outline-light">View products</Link>
            <Link to="/contact" className="btn-outline-light">Contact us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
