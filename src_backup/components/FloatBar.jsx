import React from 'react';
import './FloatBar.css';

export default function FloatBar({ onEnquire }) {
  return (
    <div className="floatbar">
      <a href="tel:+91XXXXXXXXXX" className="fb-item fb-call">
        <span className="fb-icon">📞</span>
        <span className="fb-label">
          Call us
          <small>+91 XXXXX XXXXX</small>
        </span>
      </a>
      <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="fb-item fb-wa">
        <span className="fb-icon">💬</span>
        <span className="fb-label">
          WhatsApp
          <small>Instant reply</small>
        </span>
      </a>
      <button className="fb-item fb-enq" onClick={onEnquire}>
        <span className="fb-icon">✉️</span>
        <span className="fb-label">
          Send enquiry
          <small>Reply in 24 hrs</small>
        </span>
      </button>
    </div>
  );
}
