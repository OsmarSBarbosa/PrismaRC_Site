import { useState } from 'react';
import { strings } from '../../i18n/pt-BR';
import './Gallery.css';

// Imagens do empreendimento e do material de divulgação.
const photos = [
  { src: '/brand/hero-aerial.jpg', caption: 'Avenida principal com palmeiras imperiais', span: 'wide' },
  { src: '/brand/planta-loteamento-2.jpeg', caption: 'Planta de implantação — 98 lotes' },
  { src: '/brand/mapa-acessos.jpg', caption: 'Localização e acessos' },
  { src: '/brand/infra-aerial.jpg', caption: 'Infraestrutura completa e pronta para construir', span: 'wide' },
  { src: '/brand/outdoor.jpg', caption: 'Prisma Empresarial' },
];

export default function Gallery() {
  const { gallery } = strings;
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <header className="gallery__head">
          <span className="section-tag">{gallery.tag}</span>
          <h2 className="section-title">{gallery.heading}</h2>
          <p className="section-subtitle">{gallery.subheading}</p>
        </header>

        <div className="gallery__grid">
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              className={`gallery__item ${photo.span === 'wide' ? 'is-wide' : ''}`}
              onClick={() => setActive(photo)}
              aria-label={photo.caption}
            >
              <img
                src={photo.src}
                alt={`${gallery.altPrefix} — ${photo.caption}`}
                loading={i < 2 ? 'eager' : 'lazy'}
              />
              <span className="gallery__caption">{photo.caption}</span>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div className="gallery__lightbox" onClick={() => setActive(null)} role="dialog">
          <img src={active.src} alt={`${gallery.altPrefix} — ${active.caption}`} />
        </div>
      )}
    </section>
  );
}
