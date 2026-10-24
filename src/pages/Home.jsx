import { Link } from 'react-router-dom';
import { products, categories } from '../data/products.js';
import { useI18n } from '../i18n/index.jsx';
import useSeo from '../hooks/useSeo.js';
import ProductCard from '../components/ProductCard.jsx';
import { Arrow, Box, Chat, Compare, Laser, Wrench, Printer, Press, Flame, Layers, Badge, Store } from '../components/Icons.jsx';

const categoryIcons = { lasers: Laser, printers: Printer, 'heat-presses': Press, metalfab: Flame, retail: Store, accessories: Box, materials: Layers };

// Keep these points factual — do not add warranty, delivery or support
// promises that have not been confirmed.
const reasons = [
  { icon: Badge, title: 'Official xTool partner', text: 'The full xTool range, from a partner based in Msida.' },
  { icon: Chat, title: 'Talk to someone local', text: 'Ask questions in person, by phone or by email before you decide.' },
  { icon: Compare, title: 'Help choosing', text: 'Tell us your materials and projects and we will suggest the right machine and accessories.' },
  { icon: Wrench, title: 'Getting started', text: 'Ask us about setup, materials and first steps with your new machine.' },
];

const uses = [
  { title: 'Engraving & marking', text: 'Glass, metal, wood and leather — from fine UV marking to deep engraving.', img: '/products/xtool-f2-ultra-uv-3.webp', to: '/products?category=lasers' },
  { title: 'Cutting', text: 'Clean shapes from plywood, acrylic, card and fabric for signs, models and decor.', img: '/products/xtool-p3-4.webp', to: '/products/xtool-p3' },
  { title: 'Printing & apparel', text: 'UV printing on objects and DTF transfers for T-shirts and merchandise.', img: '/products/xtool-o1-6.webp', to: '/products?category=printers' },
  { title: 'Metal fabrication', text: 'Laser welding and CNC metal cutting for workshops.', img: '/products/xtool-metalfab-welder-cutter-7.webp', to: '/products?category=metalfab' },
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
          <div className="hero__visual reveal reveal--delay">
            <Link to="/products/xtool-f2-ultra-uv" className="hero__photo">
              <img src="/products/xtool-f2-ultra-uv-5.webp" alt="xTool F2 Ultra UV engraving glassware in a workshop" width="1400" height="933" />
              <span className="hero__photo-cap">xTool F2 Ultra UV <Arrow width={16} height={16} /></span>
            </Link>
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
                  <span className="cat-card__icon">{(() => { const Icon = categoryIcons[c.id] ?? Box; return <Icon width={28} height={28} />; })()}</span>
                  <span className="cat-card__title">{c.label}</span>
                  <span className="cat-card__types">{c.blurb}</span>
                  <span className="cat-card__count">{products.filter((p) => p.category === c.id).length} products <Arrow width={16} height={16} /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="retail-title">
        <div className="container">
          <Link to="/products?category=retail" className="retail-band">
            <img src="/products/xtool-retail-studio-1.webp" alt="" loading="lazy" />
            <div className="retail-band__body">
              <p className="eyebrow">For shops & brands</p>
              <h2 id="retail-title">In-store personalisation with xTool Retail Studio</h2>
              <p>Self-service kiosks, demo stations and machines that let your customers personalise products on the spot.</p>
              <span className="link-arrow link-arrow--light">See retail solutions <Arrow width={16} height={16} /></span>
            </div>
          </Link>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="feat-title">
        <div className="container">
          <div className="section__head">
            <h2 id="feat-title">{t('home.featuredTitle')}</h2>
            <Link to="/products" className="link-arrow">{t('common.viewAll')} <Arrow width={16} height={16} /></Link>
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
              <li key={u.title} className="use-card">
                <Link to={u.to} className="use-card__link">
                  <img className="use-card__img" src={u.img} alt="" loading="lazy" />
                  <h3>{u.title}</h3>
                  <p>{u.text}</p>
                </Link>
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
