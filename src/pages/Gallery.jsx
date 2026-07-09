import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import { TESTIMONIALS } from '../data/eventData';
import './Gallery.css';

const GALLERY_ITEMS = [
  { title: 'Opening Ceremony 2024', category: 'Ceremony', color: '#8B1A1A' },
  { title: 'Batik Workshop Session', category: 'Workshop', color: '#C9A227' },
  { title: 'Heritage Fashion Show', category: 'Fashion Show', color: '#4A2C2A' },
  { title: 'MSME Bazaar Area', category: 'Bazaar', color: '#6B3A2A' },
  { title: 'Artisan Demonstration', category: 'Exhibition', color: '#9B2335' },
  { title: 'History Gallery Display', category: 'Gallery', color: '#D4AF37' },
  { title: 'Design Competition Finals', category: 'Competition', color: '#7B2D26' },
  { title: 'Cultural Performance', category: 'Performance', color: '#A0522D' },
];

export default function Gallery() {
  return (
    <Layout>
      <PageHero
        title="Gallery & Testimonials"
        subtitle="Highlights from past events and voices from our community"
      />

      <section className="section">
        <div className="container">
          <span className="section-label">Photo Gallery</span>
          <h2>Event Highlights</h2>
          <div className="gallery-grid">
            {GALLERY_ITEMS.map((item) => (
              <div key={item.title} className="gallery-item" style={{ '--accent': item.color }}>
                <div className="gallery-visual">
                  <div className="gallery-batik-deco" />
                  <span className="gallery-category">{item.category}</span>
                </div>
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <span className="section-label">Testimonials</span>
          <h2>Voices from Our Community</h2>
          <div className="testimonials-full">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.name} className="testimonial-full-card">
                <div className="stars">{'★'.repeat(t.rating)}</div>
                <p>"{t.quote}"</p>
                <footer>
                  <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
