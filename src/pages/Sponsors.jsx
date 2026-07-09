import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import { SPONSORS } from '../data/eventData';
import './Sponsors.css';

export default function Sponsors() {
  return (
    <Layout>
      <PageHero
        title="Sponsors & Partners"
        subtitle="Thank you to our partners who make Wastra Riau Expo possible"
      />

      <section className="section">
        <div className="container">
          <span className="section-label">Main Sponsors</span>
          <div className="sponsor-tier main-tier">
            {SPONSORS.main.map((s) => (
              <div key={s.name} className="sponsor-card main">
                <div className="sponsor-logo">{s.name.charAt(0)}</div>
                <h3>{s.name}</h3>
                <span>{s.tier}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="section-label">Supporting Sponsors</span>
          <div className="sponsor-tier">
            {SPONSORS.supporting.map((s) => (
              <div key={s.name} className="sponsor-card">
                <div className="sponsor-logo">{s.name.charAt(0)}</div>
                <h3>{s.name}</h3>
                <span>{s.tier}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="section-label">Media Partners</span>
          <div className="sponsor-tier media-tier">
            {SPONSORS.media.map((s) => (
              <div key={s.name} className="sponsor-card media">
                <div className="sponsor-logo">{s.name.charAt(0)}</div>
                <h3>{s.name}</h3>
                <span>{s.tier}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
