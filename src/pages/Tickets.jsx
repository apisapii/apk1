import { useState } from 'react';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import { TICKETS } from '../data/eventData';
import './Tickets.css';

export default function Tickets() {
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', qty: 1 });
  const [purchased, setPurchased] = useState(false);

  const handlePurchase = (e) => {
    e.preventDefault();
    setPurchased(true);
  };

  return (
    <Layout>
      <PageHero
        title="Tickets & Registration"
        subtitle="Secure your spot at Wastra Riau Expo 2026"
      />

      <section className="section" id="visitor">
        <div className="container">
          <span className="section-label">Visitor Tickets</span>
          <h2>Choose Your Pass</h2>
          <div className="ticket-grid">
            {TICKETS.filter((t) => t.type !== 'Tenant Booth').map((ticket) => (
              <div
                key={ticket.type}
                className={`ticket-card ${ticket.popular ? 'popular' : ''}`}
              >
                {ticket.popular && <span className="ticket-badge">Most Popular</span>}
                <h3>{ticket.type}</h3>
                <div className="ticket-price">{ticket.price}</div>
                <ul>
                  {ticket.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <button
                  className="btn btn-primary"
                  onClick={() => setSelected(ticket)}
                >
                  {ticket.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tenant-ticket-section" id="tenant">
        <div className="container">
          <span className="section-label">For Businesses</span>
          <h2>Exhibitor / Tenant Registration</h2>
          {TICKETS.filter((t) => t.type === 'Tenant Booth').map((ticket) => (
            <div key={ticket.type} className="tenant-ticket-card">
              <div className="tenant-info">
                <h3>{ticket.type}</h3>
                <div className="ticket-price">{ticket.price}</div>
                <p>3-day exhibition booth for MSMEs and batik businesses</p>
              </div>
              <ul>
                {ticket.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <button
                className="btn btn-primary"
                onClick={() => setSelected(ticket)}
              >
                {ticket.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {selected && !purchased && (
        <section className="section purchase-section">
          <div className="container narrow">
            <h2>Complete Your Registration</h2>
            <p className="selected-ticket">
              Selected: <strong>{selected.type}</strong> — {selected.price}
            </p>
            <form className="purchase-form" onSubmit={handlePurchase}>
              <label>
                Full Name *
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </label>
              <label>
                Email *
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </label>
              <label>
                Phone *
                <input
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </label>
              {selected.type !== 'Tenant Booth' && (
                <label>
                  Quantity
                  <select
                    value={form.qty}
                    onChange={(e) => setForm({ ...form, qty: Number(e.target.value) })}
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </label>
              )}
              <div className="purchase-actions">
                <button type="submit" className="btn btn-primary">
                  Confirm Registration
                </button>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setSelected(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </section>
      )}

      {purchased && (
        <section className="section purchase-success">
          <div className="container narrow">
            <div className="success-card">
              <span className="success-icon">✓</span>
              <h2>Registration Successful!</h2>
              <p>
                Thank you, {form.name}! Your {selected.type} registration has been confirmed.
                A confirmation email will be sent to {form.email}.
              </p>
              <button className="btn btn-primary" onClick={() => { setPurchased(false); setSelected(null); }}>
                Register Another
              </button>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
