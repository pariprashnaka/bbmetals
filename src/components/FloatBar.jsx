import React from 'react';
import { Link } from 'react-router-dom';
import './FloatBar.css';

export default function FloatBar() {
  return (
    <div className="floatbar">
      <a href="tel:+91XXXXXXXXXX" className="fb-btn fb-call">
        <span className="fb-icon">📞</span>
        <span className="fb-label">Call us</span>
      </a>
      <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="fb-btn fb-wa">
        <span className="fb-icon">💬</span>
        <span className="fb-label">WhatsApp</span>
      </a>
      <Link to="/contact" className="fb-btn fb-enquiry">
        <span className="fb-icon">✉️</span>
        <span className="fb-label">Send enquiry</span>
      </Link>
    </div>
  );
}
