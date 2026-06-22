import { useState } from 'react';
import { strings } from '../../i18n/pt-BR';
import { whatsappUrl } from '../../utils/contact';
import Icon from '../Icon/Icon';
import './InterestForm.css';

export default function InterestForm() {
  const { interestForm } = strings;
  const [sent, setSent] = useState(false);

  // Sem backend: o envio compõe uma mensagem e abre o WhatsApp do consultor.
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get('name');
    const company = data.get('company');
    const phone = data.get('phone');
    const email = data.get('email');
    const message = data.get('message');

    const lines = [
      'Olá! Tenho interesse no Prisma Empresarial.',
      name && `Nome: ${name}`,
      company && `Empresa: ${company}`,
      phone && `Telefone: ${phone}`,
      email && `E-mail: ${email}`,
      message && `Mensagem: ${message}`,
    ].filter(Boolean);

    window.open(whatsappUrl(lines.join('\n')), '_blank', 'noopener');
    setSent(true);
    e.target.reset();
  };

  return (
    <section id="interesse" className="interest section">
      <div className="container">
        <div className="interest__card">
          <div className="interest__aside">
            <span className="section-tag">{interestForm.tag}</span>
            <h2 className="interest__title">{interestForm.heading}</h2>
            <p className="interest__sub">{interestForm.subheading}</p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="interest__wpp"
            >
              <Icon name="whatsapp" size={22} />
              {interestForm.whatsappAlt}
            </a>
          </div>

          <form className="interest__form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder={interestForm.namePlaceholder} required />
            <input type="text" name="company" placeholder={interestForm.companyPlaceholder} />
            <input type="tel" name="phone" placeholder={interestForm.phonePlaceholder} required />
            <input type="email" name="email" placeholder={interestForm.emailPlaceholder} required />
            <textarea name="message" placeholder={interestForm.messagePlaceholder} rows={3} />
            <button type="submit" className="btn btn-primary interest__submit">
              {interestForm.submitButton}
              <Icon name="arrow" size={18} />
            </button>
            {sent && (
              <p className="interest__success" role="status">
                <Icon name="check" size={18} />
                {interestForm.successMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
