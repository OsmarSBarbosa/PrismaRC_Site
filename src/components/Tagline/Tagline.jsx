import { strings } from '../../i18n/pt-BR';
import './Tagline.css';

export default function Tagline() {
  const { tagline } = strings;
  return (
    <section className="tagline">
      <div className="tagline__inner container">
        <span className="tagline__mark" aria-hidden="true" />
        <blockquote className="tagline__quote">{tagline.text}</blockquote>
        <p className="tagline__sub">{tagline.subtext}</p>
      </div>
    </section>
  );
}
