import React, { useState } from 'react';
import './Navbar.css';

const pages = ['Home', 'About', 'Products', 'Quality', 'Blog', 'Gallery', 'Contact'];

export default function Navbar({ current, onNav }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="nb-inner">
          <button className="nb-brand" onClick={() => onNav('Home')}>
            <div className="nb-logo-slot">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(196,168,130,0.4)" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="12" cy="11" r="3"/>
                <path d="M3 19l4-4 3 3 4-5 4 6"/>
              </svg>
              <span className="nb-logo-ph">LOGO</span>
            </div>
            <div className="nb-brand-text">
              <span className="nb-name">Bishwambhar Bharat Metals</span>
            </div>
          </button>

          <nav className="nb-links">
            {pages.map(p => (
              <button
                key={p}
                className={`nb-link ${current === p ? 'active' : ''}`}
                onClick={() => onNav(p)}
              >
                {p}
              </button>
            ))}
          </nav>

          <button className="nb-hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </header>

      {open && (
        <div className="nb-mobile">
          {pages.map(p => (
            <button
              key={p}
              className={`nb-link ${current === p ? 'active' : ''}`}
              onClick={() => { onNav(p); setOpen(false); }}
            >
              {p}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
