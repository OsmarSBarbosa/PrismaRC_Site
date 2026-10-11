import { useState, useEffect, useRef } from 'react';
import { strings } from '../../i18n/pt-BR';
import { whatsappUrl } from '../../utils/contact';
import { asset } from '../../utils/asset';
import Icon from '../Icon/Icon';
import './Navbar.css';

const links = [
  { key: 'about', href: '#about' },
  { key: 'features', href: '#features' },
  { key: 'location', href: '#location' },
];

export default function Navbar() {
  const { nav } = strings;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Menu mobile aberto: fecha com Esc ou com toque fora do cabeçalho.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onPointerDown = (e) => {
      if (!headerRef.current?.contains(e.target)) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header ref={headerRef} className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a
          href="#home"
          className="navbar__brand"
          onClick={close}
          aria-label="Prisma Empresarial"
        >
          <img src={asset('brand/logo-prisma.png')} alt="Prisma Empresarial" />
        </a>

        <nav id="navbar-menu" className={`navbar__nav ${open ? 'is-open' : ''}`}>
          <ul>
            {links.map(({ key, href }) => (
              <li key={key}>
                <a href={href} onClick={close}>
                  {nav[key]}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp navbar__cta"
            data-botao="menu"
            onClick={close}
          >
            <Icon name="whatsapp" size={18} />
            {nav.cta}
          </a>
        </nav>

        <button
          className="navbar__toggle"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="navbar-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
