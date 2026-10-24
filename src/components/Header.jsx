import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { nav } from '../config/site.js';
import { useI18n } from '../i18n/index.jsx';
import Logo from './Logo.jsx';
import { Close, MenuIcon } from './Icons.jsx';

export default function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <a href="#main" className="skip-link" onClick={(e) => { e.preventDefault(); document.getElementById('main')?.focus(); }}>{t('nav.skip')}</a>
      <div className="container header__inner">
        <Link to="/" className="header__brand" aria-label="DC Digital Centre Malta – home">
          <Logo />
        </Link>
        <button
          className="header__toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <Close /> : <MenuIcon />}
          <span className="sr-only">{t('nav.menu')}</span>
        </button>
        <nav id="primary-nav" className={`header__nav ${open ? 'is-open' : ''}`} aria-label="Primary">
          <ul>
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'}>{t(item.key)}</NavLink>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn--primary btn--sm header__cta">{t('nav.quote')}</Link>
        </nav>
      </div>
    </header>
  );
}
