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
              <span className="nb-logo-ph">LOGO</span>
            </div>
            <div className="nb-brand-text">
              <span className="nb-name">Bishwambhar Bharat Metals</span>
              <span className="nb-sub">Manufacturing Enterprise · India</span>
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
