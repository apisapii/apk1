import BatikPattern from './BatikPattern';
import './PageHero.css';

export default function PageHero({ title, subtitle, children }) {
  return (
    <section className="page-hero">
      <BatikPattern variant="hero" />
      <div className="page-hero-content">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
