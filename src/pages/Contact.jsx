import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import { EVENT } from '../data/eventData';
import './Contact.css';

export default function Contact() {
  return (
    <Layout>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with the Wastra Riau Expo organizing committee"
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Committee Contact</h2>
              <div className="contact-cards">
                <div className="contact-card">
                  <span className="contact-icon">✉️</span>
                  <div>
                    <strong>Email</strong>
                    <a href={`mailto:${EVENT.contact.email}`}>{EVENT.contact.email}</a>
                  </div>
                </div>
                <div className="contact-card">
                  <span className="contact-icon">📞</span>
                  <div>
                    <strong>Phone</strong>
                    <a href={`tel:${EVENT.contact.phone}`}>{EVENT.contact.phone}</a>
                  </div>
                </div>
                <div className="contact-card">
                  <span className="contact-icon">💬</span>
                  <div>
                    <strong>WhatsApp</strong>
                    <a
                      href={`https://wa.me/${EVENT.contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>
                <div className="contact-card">
                  <span className="contact-icon">📍</span>
                  <div>
                    <strong>Location</strong>
                    <span>{EVENT.location}</span>
                    <span className="contact-address">{EVENT.address}</span>
                  </div>
                </div>
              </div>

              <div className="map-placeholder">
                <div className="map-content">
                  <span>📍</span>
                  <h3>Grand Hall Convention Center</h3>
                  <p>{EVENT.address}</p>
                  <a
                    href="https://maps.google.com/?q=Grand+Hall+Convention+Center+Pekanbaru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <h2>Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section partnership-section">
        <div className="container narrow">
          <h2>Partnership & Sponsorship</h2>
          <p>
            Interested in sponsoring Wastra Riau Expo 2026 or becoming a media partner?
            Fill out the form below and our team will reach out with partnership packages.
          </p>
          <ContactForm type="partnership" />
        </div>
      </section>
    </Layout>
  );
}
