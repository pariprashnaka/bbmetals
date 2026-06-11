import React from 'react';
import './Footer.css';

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Footer({ onNav }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="ft-grid">
          <div className="ft-brand">
            <div className="ft-name">Bishwambhar Bharat Metals</div>
            <div className="ft-sub">Bihar, India</div>
            <p className="ft-desc">
              Stainless steel kitchenware manufactured in India — for homes,
              restaurants, and businesses. Quality built in, not added on.
            </p>
            <div className="ft-socials">
              <a href="https://www.instagram.com/bishwambharbharatmetals/" target="_blank" rel="noopener noreferrer" className="ft-social-btn" title="Instagram">
                <InstagramIcon />
                <span>Instagram</span>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61590358276975" target="_blank" rel="noopener noreferrer" className="ft-social-btn" title="Facebook">
                <FacebookIcon />
                <span>Facebook</span>
              </a>
              <a href="https://x.com/bbharatmetals" target="_blank" rel="noopener noreferrer" className="ft-social-btn" title="X (Twitter)">
                <XIcon />
                <span>X</span>
              </a>
            </div>
          </div>

          <div className="ft-col">
            <h5>Pages</h5>
            <ul>
              {['About', 'Products', 'Quality', 'Blog', 'Gallery'].map(p => (
                <li key={p}><button onClick={() => onNav(p)}>{p}</button></li>
              ))}
            </ul>
          </div>

          <div className="ft-col">
            <h5>Products</h5>
            <ul>
              {['SS Plates', 'SS Bowls', 'SS Glasses', 'Other Kitchenware'].map(p => (
                <li key={p}><button onClick={() => onNav('Products')}>{p}</button></li>
              ))}
            </ul>
          </div>

          <div className="ft-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="tel:+91XXXXXXXXXX">+91 XXXXX XXXXX</a></li>
              <li><a href="mailto:info@bbmetals.in">info@bbmetals.in</a></li>
              <li><a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><button onClick={() => onNav('Contact')}>Send enquiry</button></li>
            </ul>
          </div>
        </div>

        <div className="ft-bottom">
          <p>© 2025 Bishwambhar Bharat Metals · GST Registered · Udyam Certified · GeM Listed</p>
          <p>Made in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
