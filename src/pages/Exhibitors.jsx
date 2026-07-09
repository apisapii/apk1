import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import { EXHIBITORS } from '../data/eventData';
import './Exhibitors.css';

export default function Exhibitors() {
  return (
    <Layout>
      <PageHero
        title="Exhibitors & Tenants"
        subtitle="Meet the talented artisans and businesses showcasing at Wastra Riau Expo 2026"
      />

      <section className="section">
        <div className="container">
          <p className="section-desc">
            Our exhibition floor features {EXHIBITORS.length}+ confirmed tenants representing
            the finest batik craftsmanship from across Riau Province.
          </p>
          <div className="exhibitor-grid">
            {EXHIBITORS.map((e) => (
              <div key={e.name} className="exhibitor-card">
                <div className="exhibitor-header">
                  <div className="exhibitor-logo">{e.name.charAt(0)}</div>
                  <div>
                    <h3>{e.name}</h3>
                    <span className="exhibitor-category">{e.category}</span>
                  </div>
                </div>
                <div className="exhibitor-details">
                  <span className="exhibitor-origin">📍 {e.origin}, Riau</span>
                  <p>{e.products}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
