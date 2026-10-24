import { Link } from 'react-router-dom';
import { products, categories, machineTypes } from '../data/products.js';
import { useI18n } from '../i18n/index.jsx';
import useSeo from '../hooks/useSeo.js';
import ProductCard from '../components/ProductCard.jsx';
import { Arrow, Box, Chat, Compare, Laser, Wrench } from '../components/Icons.jsx';

// TODO: adjust these points to what your business actually offers.
// Keep them factual — do not add warranty, delivery or support promises
// you have not confirmed.
const reasons = [
  { icon: Chat, title: 'Talk to someone local', text: 'Ask questions in person, by phone or by email before you decide.' },
  { icon: Compare, title: 'Help choosing a machine', text: 'Tell us your materials and projects and we will suggest suitable xTool options.' },
  { icon: Box, title: 'Machines and accessories', text: 'Enquire about machines and compatible accessories from one place.' },
  { icon: Wrench, title: 'Getting started', text: 'Ask us about setup and first steps with your new machine.' },
];

const uses = [
  { title: 'Engraving', text: 'Names, logos and patterns on wood, leather, slate, coated metal and more.', className: 'use--engrave' },
  { title: 'Cutting', text: 'Clean shapes from plywood, acrylic, card and fabric for signs, models and decor.', className: 'use--cut' },
  { title: 'Personalised gifts', text: 'Custom keyrings, tumblers, jewellery and keepsakes made to order.', className: 'use--gift' },
  { title: 'Small-batch products', text: 'Branded packaging, tags and merchandise for small businesses.', className: 'use--batch' },
];

export default function Home() {
  const { t } = useI18n();
  useSeo(null, 'DC Digital Centre Malta – local seller of xTool laser engravers, cutters and accessories in Malta. Browse products and request a quote.');
  const featured = products.filter((p) => p.featured);

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__grid-bg" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__copy reveal">
            <p className="eyebrow">{t('home.eyebrow')}</p>
            <h1 id="hero-title">{t('home.title')}</h1>
            <p className="hero__lead">{t('home.lead')}</p>
            <div className="hero__ctas">
              <Link to="/products" className="btn btn--primary btn--lg">{t('home.ctaProducts')} <Arrow /></Link>
              <Link to="/contact" className="btn btn--outline-light btn--lg">{t('home.ctaQuote')}</Link>
            </div>
          </div>
          <div className="hero__visual reveal reveal--delay" aria-hidden="true">
            <div className="hero__panel">
              <svg viewBox="0 0 320 260">
                <defs>
                  <linearGradient id="beam" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#ff8a4c" stopOpacity="0" />
                    <stop offset="1" stopColor="#ff6b2c" />
                  </linearGradient>
                </defs>
                <rect x="40" y="30" width="240" height="16" rx="4" className="hv-rail" />
                <g className="hv-head">
                  <rect x="140" y="40" width="40" height="34" rx="6" className="hv-module" />
                  <rect x="157" y="74" width="6" height="128" fill="url(#beam)" className="hv-beam" />
                </g>
                <rect x="30" y="200" width="260" height="34" rx="6" className="hv-bed" />
                <path d="M70 217 h180" className="hv-trace" />
              </svg>
              <p className="hero__panel-cap">Laser engraving & cutting</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="cat-title">
        <div className="container">
          <div className="section__head">
            <h2 id="cat-title">{t('home.categoriesTitle')}</h2>
            <Link to="/products" className="link-arrow">{t('common.viewAll')} <Arrow width={16} height={16} /></Link>
          </div>
          <ul className="cat-grid">
            {categories.map((c) => (
              <li key={c.id}>
                <Link to={`/products?category=${c.id}`} className={`cat-card cat-card--${c.id}`}>
                  <span className="cat-card__icon">{c.id === 'machines' ? <Laser width={28} height={28} /> : <Box width={28} height={28} />}</span>
                  <span className="cat-card__title">{c.label}</span>
                  <span className="cat-card__types">
                    {machineTypes.filter((m) => m.category === c.id).map((m) => m.label).join(' · ')}
                  </span>
                  <span className="cat-card__count">{products.filter((p) => p.category === c.id).length} products <Arrow width={16} height={16} /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="feat-title">
        <div className="container">
          <div className="section__head">
            <h2 id="feat-title">{t('home.featuredTitle')}</h2>
            <Link to="/products?category=machines" className="link-arrow">{t('common.viewAll')} <Arrow width={16} height={16} /></Link>
          </div>
          <div className="product-grid">
            {featured.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="why-title">
        <div className="container">
          <h2 id="why-title" className="section__title">{t('home.whyTitle')}</h2>
          <ul className="why-grid">
            {reasons.map(({ icon: Icon, title, text }) => (
              <li key={title} className="why-card">
                <span className="why-card__icon"><Icon width={24} height={24} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="use-title">
        <div className="container">
          <h2 id="use-title" className="section__title">{t('home.useTitle')}</h2>
          <p className="section__lead">{t('home.useLead')}</p>
          <ul className="use-grid">
            {uses.map((u) => (
              <li key={u.title} className={`use-card ${u.className}`}>
                <div className="use-card__art" aria-hidden="true" />
                <h3>{u.title}</h3>
                <p>{u.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="band-title">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2 id="band-title">{t('home.ctaBandTitle')}</h2>
              <p>{t('home.ctaBandText')}</p>
            </div>
            <Link to="/contact" className="btn btn--primary btn--lg">{t('common.requestQuote')} <Arrow /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
