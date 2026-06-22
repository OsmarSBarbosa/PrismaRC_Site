import { strings } from '../../i18n/pt-BR';
import { mapsUrl } from '../../utils/contact';
import Icon from '../Icon/Icon';
import './Location.css';

export default function Location() {
  const { location } = strings;
  return (
    <section id="location" className="location section">
      <div className="container">
        <header className="location__head">
          <span className="section-tag">{location.tag}</span>
          <h2 className="section-title">{location.heading}</h2>
          <p className="section-subtitle">{location.intro}</p>
        </header>

        <div className="location__grid">
          <div className="location__panels">
            <div className="location__panel">
              <h3 className="location__panel-title">
                <Icon name="road" size={20} />
                {location.highwaysTitle}
              </h3>
              <ul>
                {location.highways.map((item) => (
                  <li key={item.name}>
                    <span>{item.name}</span>
                    <strong>{item.time}</strong>
                  </li>
                ))}
              </ul>
            </div>

            <div className="location__panel">
              <h3 className="location__panel-title">
                <Icon name="pin" size={20} />
                {location.citiesTitle}
              </h3>
              <ul>
                {location.cities.map((item) => (
                  <li key={item.name}>
                    <span>{item.name}</span>
                    <strong>{item.time}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="location__map">
            <a
              href={mapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="location__map-link"
            >
              <img
                src="/brand/mapa-acessos.jpg"
                alt={location.mapAlt}
                loading="lazy"
              />
              <span className="btn btn-primary location__map-btn">
                <Icon name="map" size={18} />
                {location.mapCta}
              </span>
            </a>

            <ul className="location__landmarks">
              {location.landmarks.map((item) => (
                <li key={item}>
                  <Icon name="pin" size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
