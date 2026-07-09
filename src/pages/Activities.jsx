import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import { ACTIVITIES } from '../data/eventData';
import './Activities.css';

export default function Activities() {
  return (
    <Layout>
      <PageHero
        title="Event Activities"
        subtitle="Seven immersive experiences celebrating Riau batik culture"
      />

      <section className="section">
        <div className="container">
          <div className="activities-list">
            {ACTIVITIES.map((a, i) => (
              <article key={a.id} className={`activity-item ${i % 2 === 1 ? 'reverse' : ''}`}>
                <div className="activity-visual">
                  <span className="activity-big-icon">{a.icon}</span>
                  <span className="activity-number">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="activity-info">
                  <h2>{a.title}</h2>
                  <p>{a.description}</p>
                  <ul className="activity-highlights">
                    {a.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
