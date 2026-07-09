import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import { FAQ } from '../data/eventData';
import './FAQ.css';

export default function FAQPage() {
  return (
    <Layout>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before attending Wastra Riau Expo 2026"
      />

      <section className="section">
        <div className="container narrow">
          <div className="faq-list">
            {FAQ.map((item, i) => (
              <details key={i} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
