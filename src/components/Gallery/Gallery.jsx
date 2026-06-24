import { useState } from 'react';
import { strings } from '../../i18n/pt-BR';
import { asset } from '../../utils/asset';
import './Gallery.css';

// Imagens do empreendimento.
const photos = [
  { src: asset('brand/galeria-1.jpg'), caption: 'Avenida principal com palmeiras imperiais e ciclovia' },
  { src: asset('brand/galeria-2.jpg'), caption: 'Sistema viário e proximidade com grandes empresas' },
  { src: asset('brand/galeria-3.jpg'), caption: 'Vista aérea do empreendimento' },
  { src: asset('brand/galeria-4.jpg'), caption: 'Vias amplas e entrada do loteamento' },
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
              className="gallery__item"
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
