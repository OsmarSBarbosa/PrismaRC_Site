import { strings } from '../../i18n/pt-BR';
import { asset } from '../../utils/asset';
import Icon from '../Icon/Icon';
import './Hero.css';

export default function Hero() {
  const { hero } = strings;
  return (
    <section id="home" className="hero">
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${asset('brand/hero-aerial.jpg')})` }}
      />
      <div className="hero__overlay" />
      <div className="hero__inner container">
        <div className="hero__content">
          <span className="hero__eyebrow">
            <Icon name="pin" size={16} />
            {hero.eyebrow}
          </span>
          <h1 className="hero__title">{hero.title}</h1>
          <p className="hero__subtitle">{hero.subtitle}</p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn-accent">
              {hero.ctaPrimary}
            </a>
            <a href="#lots" className="btn btn-outline-light">
              {hero.ctaSecondary}
              <Icon name="arrow" size={18} />
            </a>
          </div>
        </div>

        <ul className="hero__stats">
          {hero.stats.map((stat) => (
            <li key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
