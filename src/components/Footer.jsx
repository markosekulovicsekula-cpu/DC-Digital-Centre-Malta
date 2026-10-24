import { Link } from 'react-router-dom';
import { nav, site } from '../config/site.js';
import { categories } from '../data/products.js';
import { useI18n } from '../i18n/index.jsx';
import Logo from './Logo.jsx';
import PlaceholderTag from './PlaceholderTag.jsx';

const socialLabels = { facebook: 'Facebook', instagram: 'Instagram', tiktok: 'TikTok', youtube: 'YouTube' };

export default function Footer() {
  const { t } = useI18n();
  const { contact } = site;
  const socials = Object.entries(site.social).filter(([, url]) => url);

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo />
          <p>{site.tagline}</p>
          {socials.length > 0 && (
            <ul className="footer__social" aria-label="Social media">
              {socials.map(([key, url]) => (
                <li key={key}><a href={url} target="_blank" rel="noopener noreferrer">{socialLabels[key]}</a></li>
              ))}
            </ul>
          )}
        </div>
        <nav aria-label="Footer">
          <h2 className="footer__h">Pages</h2>
          <ul>{nav.map((n) => <li key={n.to}><Link to={n.to}>{t(n.key)}</Link></li>)}</ul>
        </nav>
        <div>
          <h2 className="footer__h">Products</h2>
          <ul>
            {categories.map((c) => <li key={c.id}><Link to={`/products?category=${c.id}`}>{c.label}</Link></li>)}
          </ul>
        </div>
        <address>
          <h2 className="footer__h">Contact {contact.isPlaceholder && <PlaceholderTag />}</h2>
          <ul>
            <li><a href={contact.phoneHref}>{contact.phone}</a></li>
            <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li>{contact.address}</li>
          </ul>
        </address>
      </div>
      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p className="footer__legal">
          {site.authorisedResellerConfirmed ? t('footer.disclaimerAuthorised') : t('footer.disclaimer')}
        </p>
      </div>
    </footer>
  );
}
