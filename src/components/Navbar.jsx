import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/activities', label: 'Activities' },
  { to: '/why-join', label: 'Why Join' },
  { to: '/exhibitors', label: 'Exhibitors' },
  { to: '/agenda', label: 'Agenda' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/tickets', label: 'Tickets' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          <span className="brand-icon">◈</span>
          <span className="brand-text">
            <strong>Wastra Riau</strong>
            <small>Expo 2026</small>
          </span>
        </Link>

        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={location.pathname === to ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link to="/tickets" className="nav-cta" onClick={() => setOpen(false)}>
            Get Tickets
          </Link>
        </nav>
      </div>
    </header>
  );
}
