import { useState } from 'react';
import { strings } from '../../i18n/pt-BR';
import { whatsappUrl } from '../../utils/contact';
import { asset } from '../../utils/asset';
import Icon from '../Icon/Icon';
import './InteractivePlot.css';

export default function InteractivePlot() {
  const { interactivePlot } = strings;
  const [zoomed, setZoomed] = useState(false);

  return (
    <section id="lots" className="plot section">
      <div className="container">
        <header className="plot__head">
          <span className="section-tag">{interactivePlot.tag}</span>
          <h2 className="section-title">{interactivePlot.heading}</h2>
          <p className="section-subtitle">{interactivePlot.subheading}</p>
        </header>

        <div className="plot__board">
          <figure
            className={`plot__figure ${zoomed ? 'is-zoomed' : ''}`}
            onClick={() => setZoomed((v) => !v)}
            title="Clique para ampliar"
          >
            <img
              src={asset('brand/planta-loteamento.jpeg')}
              alt={interactivePlot.planAlt}
              loading="lazy"
            />
            <span className="plot__zoom-hint">
              <Icon name="expand" size={18} />
            </span>
          </figure>

          <aside className="plot__aside">
            <h3 className="plot__aside-title">{interactivePlot.asideTitle}</h3>
            <p className="plot__aside-text">{interactivePlot.asideText}</p>
            <a
              href={whatsappUrl(
                'Olá! Gostaria de consultar a disponibilidade e os valores dos lotes do Prisma Empresarial.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn plot__cta"
            >
              <Icon name="whatsapp" size={20} />
              {interactivePlot.ctaText}
            </a>
            <p className="plot__note">{interactivePlot.note}</p>
          </aside>
        </div>
      </div>

      {zoomed && (
        <div
          className="plot__lightbox"
          onClick={() => setZoomed(false)}
          role="dialog"
          aria-label={interactivePlot.planAlt}
        >
          <img src={asset('brand/planta-loteamento.jpeg')} alt={interactivePlot.planAlt} />
        </div>
      )}
    </section>
  );
}
