import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import { RUNDOWN } from '../data/eventData';
import './Agenda.css';

export default function Agenda() {
  const days = [...new Set(RUNDOWN.map((r) => r.day))];

  return (
    <Layout>
      <PageHero
        title="Event Agenda"
        subtitle="Complete rundown of activities across all three days"
      />

      <section className="section">
        <div className="container">
          {days.map((day) => (
            <div key={day} className="agenda-day">
              <h2 className="agenda-day-title">{day}</h2>
              <div className="agenda-timeline">
                {RUNDOWN.filter((r) => r.day === day).map((item) => (
                  <div key={`${item.time}-${item.event}`} className="agenda-item">
                    <span className="agenda-time">{item.time}</span>
                    <div className="agenda-dot" />
                    <span className="agenda-event">{item.event}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
