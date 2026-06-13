import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Quality', path: '/quality' },
  { name: 'Blog', path: '/blog' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  function isActive(path) {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  }

  return (
    <>
      <header className="navbar">
        <div className="nb-inner">
          <Link to="/" className="nb-brand">
            <img src="/logo.png" alt="Bishwambhar Bharat Metals" style={{ width: 44, height: 44, objectFit: 'contain', borderRadius: 4 }} />
            <div className="nb-brand-text">
              <span className="nb-name">Bishwambhar Bharat Metals</span>
            </div>
          </Link>

          <nav className="nb-links">
            {pages.map(p => (
              <Link
                key={p.name}
                to={p.path}
                className={`nb-link ${isActive(p.path) ? 'active' : ''}`}
              >
                {p.name}
              </Link>
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
            <Link
              key={p.name}
              to={p.path}
              className={`nb-link ${isActive(p.path) ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {p.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
