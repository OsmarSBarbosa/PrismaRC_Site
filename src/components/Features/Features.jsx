import { strings } from '../../i18n/pt-BR';
import Icon from '../Icon/Icon';
import './Features.css';

export default function Features() {
  const { features } = strings;
  return (
    <section id="features" className="features section">
      <div className="container">
        <header className="features__head">
          <span className="section-tag">{features.tag}</span>
          <h2 className="section-title">{features.heading}</h2>
          <p className="section-subtitle">{features.subheading}</p>
        </header>

        <ul className="features__grid">
          {features.items.map((item) => (
            <li key={item.title} className="feature-card">
              <span className="feature-card__icon">
                <Icon name={item.icon} size={26} />
              </span>
              <h3 className="feature-card__title">{item.title}</h3>
              <p className="feature-card__desc">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
