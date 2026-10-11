import { strings, contactInfo } from '../../i18n/pt-BR';
import { whatsappUrl, telUrl } from '../../utils/contact';
import Icon from '../Icon/Icon';
import './WhatsAppCta.css';

// Chamada principal para o WhatsApp (substitui o antigo formulário): um toque
// abre o aplicativo com a mensagem pronta. O clique é registrado pelo
// rastreamento global (src/utils/tracking.js).
export default function WhatsAppCta() {
  const { whatsappCta } = strings;
  return (
    <section id="interesse" className="wcta section">
      <div className="container">
        <div className="wcta__card">
          <div className="wcta__main">
            <span className="section-tag wcta__tag">{whatsappCta.tag}</span>
            <h2 className="wcta__title">{whatsappCta.heading}</h2>
            <p className="wcta__sub">{whatsappCta.subheading}</p>
            <a
              href={whatsappUrl(strings.contact.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp wcta__button"
              data-botao="fale-conosco"
            >
              <Icon name="whatsapp" size={24} />
              {whatsappCta.buttonLabel}
            </a>
            <a href={telUrl()} className="wcta__phone" data-botao="fale-conosco-telefone">
              <Icon name="phone" size={18} />
              {whatsappCta.phonePrefix} {contactInfo.phoneDisplay}
            </a>
          </div>

          <ul className="wcta__list">
            {whatsappCta.benefits.map((item) => (
              <li key={item}>
                <Icon name="check" size={22} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
