import { useState } from 'react';
import './ContactForm.css';

export default function ContactForm({ type = 'general' }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', company: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-success">
        <span className="success-icon">✓</span>
        <h3>Thank You!</h3>
        <p>Your message has been received. Our team will respond within 1–2 business days.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Full Name *
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your full name"
          />
        </label>
        <label>
          Email *
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="your@email.com"
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          Phone
          <input
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+62 xxx xxxx xxxx"
          />
        </label>
        {type === 'partnership' && (
          <label>
            Company / Organization
            <input
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              placeholder="Company name"
            />
          </label>
        )}
      </div>
      <label>
        Message *
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder={
            type === 'partnership'
              ? 'Tell us about your partnership interest...'
              : 'How can we help you?'
          }
        />
      </label>
      <button type="submit" className="btn btn-primary">
        {type === 'partnership' ? 'Submit Partnership Inquiry' : 'Send Message'}
      </button>
    </form>
  );
}
