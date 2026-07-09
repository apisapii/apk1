import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import { EVENT, MOTIFS, ARTISANS } from '../data/eventData';
import './About.css';

export default function About() {
  return (
    <Layout>
      <PageHero
        title="About Us"
        subtitle="Preserving Riau's batik heritage while empowering the creative economy"
      />

      <section className="section">
        <div className="container narrow">
          <h2>Our Story</h2>
          <p>
            Wastra Riau Expo was founded with a singular vision: to celebrate and elevate the
            exquisite art of Riau batik on a national and international stage. Born from a
            passion for Melayu cultural heritage, our team of event professionals, cultural
            advocates, and creative industry experts unite to create an exhibition experience
            unlike any other.
          </p>
          <p>
            Since our inaugural event, we have connected hundreds of artisans with new markets,
            inspired young designers to explore traditional motifs, and welcomed thousands of
            visitors into the captivating world of Riau batik.
          </p>
        </div>
      </section>

      <section className="section about-event">
        <div className="container">
          <h2>About the Event</h2>
          <div className="info-grid">
            <div className="info-card">
              <span className="info-label">Event Name</span>
              <strong>{EVENT.name}</strong>
            </div>
            <div className="info-card">
              <span className="info-label">Theme</span>
              <strong>{EVENT.theme}</strong>
            </div>
            <div className="info-card">
              <span className="info-label">Date & Time</span>
              <strong>{EVENT.date}</strong>
              <span>{EVENT.time}</span>
            </div>
            <div className="info-card">
              <span className="info-label">Location</span>
              <strong>{EVENT.location}</strong>
              <span>{EVENT.address}</span>
            </div>
          </div>
          <p className="event-desc">{EVENT.description}</p>
        </div>
      </section>

      <section className="section motif-section">
        <div className="container">
          <span className="section-label">Batik Philosophy</span>
          <h2>Iconic Riau Batik Motifs</h2>
          <p className="section-desc">
            Every motif in Riau batik carries deep cultural meaning — a visual language passed
            down through generations of Melayu artisans.
          </p>
          <div className="motif-grid">
            {MOTIFS.map((m) => (
              <div key={m.name} className="motif-detail-card">
                <div className="motif-pattern-deco" />
                <h3>{m.name}</h3>
                <p>{m.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section artisan-section">
        <div className="container">
          <span className="section-label">Featured Artisans</span>
          <h2>Master Craftsmen & Designers</h2>
          <div className="artisan-grid">
            {ARTISANS.map((a) => (
              <div key={a.name} className="artisan-card">
                <div className="artisan-avatar">{a.name.charAt(0)}</div>
                <h3>{a.name}</h3>
                <span className="artisan-role">{a.specialty}</span>
                <p>{a.experience} of experience · {a.origin}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>
                To showcase Riau batik as a living cultural treasure, creating platforms for
                artisans and MSMEs to thrive in the creative economy.
              </p>
            </div>
            <div className="mission-card">
              <h3>Our Vision</h3>
              <p>
                To establish Wastra Riau Expo as Southeast Asia's premier batik exhibition,
                bridging heritage craftsmanship with contemporary innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
