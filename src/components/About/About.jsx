import { strings } from '../../i18n/pt-BR';
import Icon from '../Icon/Icon';
import './About.css';

export default function About() {
  const { about } = strings;
  return (
    <section id="about" className="about section">
      <div className="about__inner container">
        <div className="about__media">
          <img
            src="/brand/infra-aerial.jpg"
            alt="Vista aérea da avenida principal do Prisma Empresarial"
            loading="lazy"
          />
          <div className="about__badge">
            <strong>Infraestrutura</strong>
            <span>Completa</span>
          </div>
        </div>

        <div className="about__text">
          <span className="section-tag">{about.tag}</span>
          <h2 className="section-title">{about.heading}</h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="about__paragraph">
              {p}
            </p>
          ))}
          <ul className="about__list">
            {about.highlights.map((item) => (
              <li key={item}>
                <Icon name="check" size={22} className="about__check" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
