import { useState, useEffect } from 'react';
import { EVENT } from '../data/eventData';
import './Countdown.css';

function getTimeLeft(target) {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(() => getTimeLeft(EVENT.eventDate.getTime()));

  useEffect(() => {
    const id = setInterval(() => {
      setTime(getTimeLeft(EVENT.eventDate.getTime()));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ];

  return (
    <div className="countdown">
      <p className="countdown-label">Event Starts In</p>
      <div className="countdown-grid">
        {units.map(({ label, value }) => (
          <div key={label} className="countdown-unit">
            <span className="countdown-value">{String(value).padStart(2, '0')}</span>
            <span className="countdown-name">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
