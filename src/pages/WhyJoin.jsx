import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import { VALUE_PROPS } from '../data/eventData';
import './WhyJoin.css';

export default function WhyJoin() {
  return (
    <Layout>
      <PageHero
        title="Why Join Us"
        subtitle="Discover the value of attending or exhibiting at Wastra Riau Expo 2026"
      />

      <section className="section">
        <div className="container">
          <div className="value-header">
            <span className="section-label">For Visitors</span>
            <h2>Why Attend the Exhibition?</h2>
          </div>
          <div className="value-grid">
            {VALUE_PROPS.visitors.map((v, i) => (
              <div key={v.title} className="value-card">
                <span className="value-num">{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
          <div className="value-cta">
            <Link to="/tickets" className="btn btn-primary">Register as Visitor</Link>
          </div>
        </div>
      </section>

      <section className="section tenant-section">
        <div className="container">
          <div className="value-header">
            <span className="section-label">For Tenants & Exhibitors</span>
            <h2>Benefits of Exhibiting</h2>
            <p className="section-desc">
              Join 80+ MSMEs and batik businesses showcasing their finest products to a
              captivated audience of enthusiasts, buyers, and industry professionals.
            </p>
          </div>
          <div className="value-grid">
            {VALUE_PROPS.tenants.map((v, i) => (
              <div key={v.title} className="value-card tenant">
                <span className="value-num">{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
          <div className="value-cta">
            <Link to="/tickets#tenant" className="btn btn-primary">Register as Tenant</Link>
            <Link to="/contact" className="btn btn-outline">Partnership Inquiry</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
