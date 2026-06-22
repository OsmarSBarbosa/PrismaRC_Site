import { strings, contactInfo } from '../../i18n/pt-BR';
import { whatsappUrl, telUrl } from '../../utils/contact';
import Icon from '../Icon/Icon';
import './Footer.css';

const navLinks = [
  { label: strings.nav.about, href: '#about' },
  { label: strings.nav.features, href: '#features' },
  { label: strings.nav.location, href: '#location' },
  { label: strings.nav.lots, href: '#lots' },
  { label: strings.nav.gallery, href: '#gallery' },
  { label: strings.nav.contact, href: '#contact' },
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
      >
        <Icon name="whatsapp" size={30} />
      </a>

      <footer className="footer">
        <div className="container footer__top">
          <div className="footer__brand">
            <img src="/brand/logo-prisma-white.png" alt="Prisma Empresarial" />
            <p>{footer.tagline}</p>
          </div>

          <nav className="footer__col">
            <h4>{footer.navTitle}</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h4>{footer.contactTitle}</h4>
            <ul className="footer__contact">
              <li>
                <a href={telUrl()}>
                  <Icon name="phone" size={16} />
                  {contactInfo.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`}>
                  <Icon name="mail" size={16} />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a href={`https://${contactInfo.site}`} target="_blank" rel="noopener noreferrer">
                  <Icon name="globe" size={16} />
                  {contactInfo.site}
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
            <p className="footer__rights">{footer.rights}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
