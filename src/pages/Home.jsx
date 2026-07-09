import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Countdown from '../components/Countdown';
import BatikPattern from '../components/BatikPattern';
import { EVENT, ACTIVITIES, MOTIFS, TESTIMONIALS, BATIK_PHILOSOPHY } from '../data/eventData';
import './Home.css';

export default function Home() {
  const featuredActivities = ACTIVITIES.slice(0, 4);

  return (
    <Layout>
      <section className="hero">
        <BatikPattern variant="hero" />
        <div className="hero-content">
          <span className="hero-badge">Riau Batik Exhibition 2026</span>
          <h1>{EVENT.name}</h1>
          <p className="hero-tagline">{EVENT.tagline}</p>
          <p className="hero-theme">
            <em>Theme:</em> {EVENT.theme}
          </p>
          <div className="hero-meta">
            <span>📅 {EVENT.date}</span>
            <span>📍 {EVENT.location}</span>
          </div>
          <div className="hero-cta">
            <Link to="/tickets" className="btn btn-primary">Register as Visitor</Link>
            <Link to="/tickets#tenant" className="btn btn-outline">Register as Tenant</Link>
            <Link to="/activities" className="btn btn-ghost">View Activities</Link>
          </div>
        </div>
      </section>

      <section className="section countdown-section">
        <Countdown />
      </section>

      <section className="section philosophy-section">
        <div className="container">
          <span className="section-label">Riau Batik Heritage</span>
          <h2>{BATIK_PHILOSOPHY.title}</h2>
          <p className="section-desc">{BATIK_PHILOSOPHY.intro}</p>

          <div className="philosophy-grid">
            <div className="philosophy-image-wrap">
              <img
                src={BATIK_PHILOSOPHY.image}
                alt="Traditional Riau batik pattern — Motif Bintang Ikan"
                className="philosophy-image"
              />
              <div className="philosophy-pattern-label">
                <strong>{BATIK_PHILOSOPHY.patternName}</strong>
                <span>Traditional Riau Batik Motif</span>
              </div>
            </div>

            <div className="philosophy-content">
              {BATIK_PHILOSOPHY.elements.map((el) => (
                <div key={el.title} className="philosophy-item">
                  <h3>{el.title}</h3>
                  <p>{el.meaning}</p>
                </div>
              ))}
              <blockquote className="philosophy-quote">
                <p>{BATIK_PHILOSOPHY.quote}</p>
                <cite>{BATIK_PHILOSOPHY.quoteAuthor}</cite>
              </blockquote>
            </div>
          </div>

          <div className="philosophy-cta">
            <Link to="/about" className="link-arrow">Explore More Motifs & Artisan Profiles →</Link>
          </div>
        </div>
      </section>

      <section className="section about-preview">
        <div className="container">
          <div className="split-grid">
            <div>
              <span className="section-label">About the Event</span>
              <h2>Discover Stories Behind Every Motif</h2>
              <p>{EVENT.description}</p>
              <Link to="/about" className="link-arrow">Learn More About Us →</Link>
            </div>
            <div className="motif-cards">
              {MOTIFS.slice(0, 2).map((m) => (
                <div key={m.name} className="motif-card">
                  <div className="motif-icon">◈</div>
                  <h4>{m.name}</h4>
                  <p>{m.meaning}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section activities-preview">
        <div className="container">
          <span className="section-label">Event Activities</span>
          <h2>7 Unforgettable Experiences</h2>
          <p className="section-desc">From hands-on workshops to runway fashion shows — something for every batik lover.</p>
          <div className="card-grid">
            {featuredActivities.map((a) => (
              <div key={a.id} className="activity-card">
                <span className="activity-icon">{a.icon}</span>
                <h3>{a.title}</h3>
                <p>{a.description}</p>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/activities" className="btn btn-primary">See All Activities</Link>
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container stats-grid">
          <div className="stat"><strong>10,000+</strong><span>Expected Visitors</span></div>
          <div className="stat"><strong>80+</strong><span>MSME Tenants</span></div>
          <div className="stat"><strong>15+</strong><span>Fashion Designers</span></div>
          <div className="stat"><strong>3</strong><span>Days of Culture</span></div>
        </div>
      </section>

      <section className="section testimonials-preview">
        <div className="container">
          <span className="section-label">Testimonials</span>
          <h2>What People Say</h2>
          <div className="testimonial-grid">
            {TESTIMONIALS.slice(0, 2).map((t) => (
              <blockquote key={t.name} className="testimonial-card">
                <p>"{t.quote}"</p>
                <footer>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
          <Link to="/gallery" className="link-arrow">View Gallery & More →</Link>
        </div>
      </section>

      <section className="section cta-banner">
        <BatikPattern variant="cta" />
        <div className="container cta-banner-content">
          <h2>Be Part of Riau's Batik Renaissance</h2>
          <p>Register now and enjoy a memorable cultural experience</p>
          <div className="hero-cta">
            <Link to="/tickets" className="btn btn-light">Buy Tickets Now</Link>
            <a
              href={`https://wa.me/${EVENT.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light"
            >
              Contact via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
