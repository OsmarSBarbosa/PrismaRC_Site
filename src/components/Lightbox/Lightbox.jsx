import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Icon from '../Icon/Icon';
import './Lightbox.css';

// Visualizador de imagem em tela cheia: fecha com Esc, botão ou clique no
// fundo e trava a rolagem da página enquanto aberto. Com `zoomable`, um
// toque/clique na imagem alterna entre "caber na tela" e o tamanho real
// (com rolagem), para permitir ler detalhes como a planta no celular.
export default function Lightbox({ src, alt, onClose, zoomable = false }) {
  const [zoomed, setZoomed] = useState(false);
  const scrollerRef = useRef(null);
  const closeRef = useRef(null);
  // Ponto tocado (proporção 0–1) para centralizar a rolagem após ampliar.
  const focusPointRef = useRef(null);
  // Guarda o onClose mais recente sem reexecutar o efeito de abertura.
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') onCloseRef.current();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.();
    };
  }, []);

  const handleImageClick = (e) => {
    if (!zoomable) return;
    e.stopPropagation();

    const rect = e.currentTarget.getBoundingClientRect();
    focusPointRef.current = {
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    };
    setZoomed((v) => !v);
  };

  // Ao ampliar, centraliza a rolagem no ponto tocado (antes da pintura).
  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    const point = focusPointRef.current;
    if (!zoomed || !scroller || !point) return;
    scroller.scrollLeft = point.x * scroller.scrollWidth - scroller.clientWidth / 2;
    scroller.scrollTop = point.y * scroller.scrollHeight - scroller.clientHeight / 2;
  }, [zoomed]);

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <div
        ref={scrollerRef}
        className={`lightbox__scroller ${zoomed ? 'is-zoomed' : ''}`}
      >
        <img
          src={src}
          alt={alt}
          className={`lightbox__img ${zoomable ? 'is-zoomable' : ''}`}
          onClick={handleImageClick}
        />
      </div>

      <button
        ref={closeRef}
        type="button"
        className="lightbox__close"
        aria-label="Fechar"
        onClick={onClose}
      >
        <Icon name="close" size={24} />
      </button>

      {zoomable && (
        <p className="lightbox__hint">
          {zoomed ? 'Toque na imagem para reduzir' : 'Toque na imagem para ampliar'}
        </p>
      )}
    </div>
  );
}
