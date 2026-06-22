import { strings, contactInfo } from '../../i18n/pt-BR';
import { whatsappUrl, telUrl, mapsUrl } from '../../utils/contact';
import Icon from '../Icon/Icon';
import './Contact.css';

export default function Contact() {
  const { contact } = strings;

  const items = [
    {
      icon: 'phone',
      label: contact.phoneLabel,
      value: contactInfo.phoneDisplay,
      href: telUrl(),
    },
    {
      icon: 'mail',
      label: contact.emailLabel,
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: 'pin',
      label: contact.addressLabel,
      value: contactInfo.address,
      href: mapsUrl(),
    },
    {
      icon: 'globe',
      label: contact.siteLabel,
      value: contactInfo.site,
      href: `https://${contactInfo.site}`,
    },
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact__inner">
          <div className="contact__head">
            <span className="section-tag contact__tag">{contact.tag}</span>
            <h2 className="contact__title">{contact.heading}</h2>
            <p className="contact__sub">{contact.subheading}</p>
            <a
              href={whatsappUrl(contact.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp contact__cta"
            >
              <Icon name="whatsapp" size={20} />
              {contact.whatsappLabel}
            </a>
          </div>

          <ul className="contact__list">
            {items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                >
                  <span className="contact__icon">
                    <Icon name={item.icon} size={22} />
                  </span>
                  <span className="contact__meta">
                    <small>{item.label}</small>
                    <strong>{item.value}</strong>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
