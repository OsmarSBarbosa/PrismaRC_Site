import { useEffect, useRef, useState } from 'react';
import { strings } from '../../i18n/pt-BR';
import './PrivacyNotice.css';

const STORAGE_KEY = 'prisma:aviso-privacidade';

function alreadyDismissed() {
  try {
    return localStorage.getItem(STORAGE_KEY) === '1';
  } catch {
    return false;
  }
}

// Aviso fixo informando a coleta de dados de navegação, com link para a
// Política de Privacidade. Some depois de "Entendi" (lembrado no navegador).
export default function PrivacyNotice() {
  const { privacyNotice } = strings;
  const [visible, setVisible] = useState(() => !alreadyDismissed());
  const ref = useRef(null);

  // Expõe a altura do aviso (--notice-h) para o botão flutuante do WhatsApp
  // subir e não ficar escondido atrás dele.
  useEffect(() => {
    const root = document.documentElement;
    if (!visible || !ref.current) {
      root.style.removeProperty('--notice-h');
      return undefined;
    }
    const update = () => root.style.setProperty('--notice-h', `${ref.current.offsetHeight}px`);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      root.style.removeProperty('--notice-h');
    };
  }, [visible]);

  if (!visible) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // sem armazenamento: o aviso volta na próxima visita
    }
    setVisible(false);
  };

  return (
    <div ref={ref} className="pnotice" role="region" aria-label={privacyNotice.linkLabel}>
      <p className="pnotice__text">
        {privacyNotice.text}{' '}
        <a href={`${import.meta.env.BASE_URL}privacidade/`}>{privacyNotice.linkLabel}</a>.
      </p>
      <button type="button" className="btn btn-primary pnotice__button" onClick={dismiss}>
        {privacyNotice.button}
      </button>
    </div>
  );
}
