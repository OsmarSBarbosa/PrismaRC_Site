import { strings, contactInfo } from '../../i18n/pt-BR';
import { whatsappUrl, telUrl } from '../../utils/contact';
import { asset } from '../../utils/asset';
import Icon from '../Icon/Icon';
import './Footer.css';

// Caminhos a partir da raiz: o rodapé também aparece na página de privacidade.
const home = import.meta.env.BASE_URL;
const navLinks = [
  { label: strings.nav.about, href: `${home}#about` },
  { label: strings.nav.features, href: `${home}#features` },
  { label: strings.nav.location, href: `${home}#location` },
];

export default function Footer() {
  const { footer } = strings;

  return (
    <>
      {/* Botão WhatsApp flutuante — sempre visível */}
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={footer.whatsappCta}
        className="float-wpp"
        data-botao="flutuante"
      >
        <Icon name="whatsapp" size={30} />
      </a>

      <footer className="footer">
        <div className="container footer__top">
          <div className="footer__brand">
            <img src={asset('brand/logo-prisma-white.png')} alt="Prisma Empresarial" />
            <p>{footer.tagline}</p>
          </div>

          <nav className="footer__col">
            <h2>{footer.navTitle}</h2>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h2>{footer.contactTitle}</h2>
            <ul className="footer__contact">
              <li>
                <a href={telUrl()} data-botao="rodape-telefone">
                  <Icon name="phone" size={16} />
                  {contactInfo.phoneDisplay}
                </a>
              </li>
              <li>
                <span>
                  <Icon name="pin" size={16} />
                  {contactInfo.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__legal">
          <div className="container">
            <p className="footer__legal-text">{footer.legal}</p>
            <p className="footer__rights">
              {footer.rights}{' '}
              <a href={`${home}privacidade/`} className="footer__privacy">
                {strings.privacyNotice.linkLabel}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
