import { Link } from 'react-router-dom';
import { EVENT } from '../data/eventData';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-batik" aria-hidden="true" />
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Wastra Riau Expo 2026</h3>
            <p>Celebrating the timeless artistry of Riau batik and empowering local creative communities.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/activities">Activities</Link></li>
              <li><Link to="/agenda">Event Agenda</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4>Participate</h4>
            <ul>
              <li><Link to="/tickets">Buy Tickets</Link></li>
              <li><Link to="/tickets#tenant">Register as Tenant</Link></li>
              <li><Link to="/sponsors">Sponsors</Link></li>
              <li><Link to="/contact">Partnership</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>{EVENT.contact.email}</li>
              <li>{EVENT.contact.phone}</li>
              <li>{EVENT.location}</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Wastra Riau Expo. All rights reserved.</p>
          <p className="footer-motto">Threads of Melayu Heritage</p>
        </div>
      </div>
    </footer>
  );
}
