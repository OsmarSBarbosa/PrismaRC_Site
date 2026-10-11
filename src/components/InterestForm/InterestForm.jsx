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

    const url = whatsappUrl(lines.join('\n'));
    // Sem 'noopener' nos parâmetros: com ele, window.open sempre retorna null e
    // não daria para saber se o navegador bloqueou a nova aba.
    const win = window.open(url, '_blank');
    if (!win) {
      // Nova aba bloqueada: abre o WhatsApp na própria aba.
      window.location.href = url;
      return;
    }
    win.opener = null;
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
            {/* Rótulos ocultos visualmente: o placeholder some ao digitar e não é
                anunciado de forma confiável por leitores de tela. */}
            <label htmlFor="interest-name" className="sr-only">
              {interestForm.namePlaceholder}
            </label>
            <input
              id="interest-name"
              type="text"
              name="name"
              autoComplete="name"
              placeholder={interestForm.namePlaceholder}
              required
            />
            <label htmlFor="interest-company" className="sr-only">
              {interestForm.companyPlaceholder}
            </label>
            <input
              id="interest-company"
              type="text"
              name="company"
              autoComplete="organization"
              placeholder={interestForm.companyPlaceholder}
            />
            <label htmlFor="interest-phone" className="sr-only">
              {interestForm.phonePlaceholder}
            </label>
            <input
              id="interest-phone"
              type="tel"
              name="phone"
              autoComplete="tel"
              inputMode="tel"
              placeholder={interestForm.phonePlaceholder}
              required
            />
            <label htmlFor="interest-email" className="sr-only">
              {interestForm.emailPlaceholder}
            </label>
            <input
              id="interest-email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder={interestForm.emailPlaceholder}
              required
            />
            <label htmlFor="interest-message" className="sr-only">
              {interestForm.messagePlaceholder}
            </label>
            <textarea
              id="interest-message"
              name="message"
              placeholder={interestForm.messagePlaceholder}
              rows={3}
            />
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
