import { strings } from '../../i18n/pt-BR';
import { whatsappUrl } from '../../utils/contact';
import { asset } from '../../utils/asset';
import Icon from '../../components/Icon/Icon';
import './Linkedin.css';

// Landing page dos anúncios do LinkedIn (/linkedin/): uma mensagem, o botão do
// WhatsApp e um link para o site. O clique no WhatsApp é registrado pelo
// rastreamento global (botão "linkedin").
export default function Linkedin() {
  const { linkedinLanding: lp } = strings;
  const home = import.meta.env.BASE_URL;

  return (
    <div className="lp">
      <div
        className="lp__bg"
        style={{ backgroundImage: `url(${asset('brand/galeria-3.webp')})` }}
        aria-hidden="true"
      />
      <div className="lp__overlay" aria-hidden="true" />

      <header className="lp__header container">
        <img src={asset('brand/logo-prisma-white.png')} alt="Prisma Empresarial" />
      </header>

      <main className="lp__content container">
        <h1 className="lp__title">{lp.title}</h1>
        <p className="lp__subtitle">{lp.subtitle}</p>

        <a
          href={whatsappUrl(lp.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp lp__button"
          data-botao="linkedin"
        >
          <Icon name="whatsapp" size={26} />
          {lp.buttonLabel}
        </a>

        <a href={home} className="lp__site-link">
          {lp.siteLink}
          <Icon name="arrow" size={18} />
        </a>
      </main>

      <footer className="lp__footer container">
        <a href={`${home}privacidade/`}>{strings.footer.privacyLink}</a>
      </footer>
    </div>
  );
}
