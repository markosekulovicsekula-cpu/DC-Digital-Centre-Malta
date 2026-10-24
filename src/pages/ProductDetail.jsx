import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCategory, getProduct, getType } from '../data/products.js';
import { site } from '../config/site.js';
import { useI18n } from '../i18n/index.jsx';
import useSeo from '../hooks/useSeo.js';
import ProductImage from '../components/ProductImage.jsx';
import ProductCard, { formatPrice } from '../components/ProductCard.jsx';
import EnquiryForm from '../components/EnquiryForm.jsx';
import { Arrow, External } from '../components/Icons.jsx';
import NotFound from './NotFound.jsx';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProduct(slug);
  if (!product) return <NotFound title="Product not found" />;
  return <ProductView key={slug} product={product} />;
}

function ProductView({ product }) {
  const { t } = useI18n();
  useSeo(product.name, `${product.name} available from Digital Center Malta. ${product.short}`);
  const [active, setActive] = useState(0);
  const related = product.related.map(getProduct).filter(Boolean);
  const imageCount = Math.max(product.images.length, 1);

  return (
    <>
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <ol>
            <li><Link to="/">{t('nav.home')}</Link></li>
            <li><Link to="/products">{t('nav.products')}</Link></li>
            <li><Link to={`/products?category=${product.category}`}>{getCategory(product.category)?.label}</Link></li>
            <li aria-current="page">{product.name}</li>
          </ol>
        </nav>
      </div>

      <section className="section section--tight">
        <div className="container pdp">
          <div className="pdp__gallery">
            <div className="pdp__main"><ProductImage product={product} index={active} /></div>
            {imageCount > 1 && (
              <ul className="pdp__thumbs" aria-label="Product images">
                {product.images.map((_, i) => (
                  <li key={i}>
                    <button type="button" aria-label={`Show image ${i + 1}`} aria-pressed={active === i} onClick={() => setActive(i)}>
                      <ProductImage product={product} index={i} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="pdp__info">
            <p className="eyebrow eyebrow--dark">{getType(product.type)?.label}</p>
            <h1>{product.name}</h1>
            <p className="pdp__lead">{product.description}</p>
            <p className="pdp__price">{formatPrice(product.price, t)}</p>
            <div className="pdp__ctas">
              <a href="#enquiry" className="btn btn--primary btn--lg">{t('product.enquire')} <Arrow /></a>
              <a href={site.manufacturerUrl} className="btn btn--ghost btn--lg" target="_blank" rel="noopener noreferrer">
                {t('product.official')} <External width={16} height={16} />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>

            <h2 className="pdp__h">{t('product.specs')}</h2>
            <dl className="spec-list">
              {product.specs.map((s) => (
                <div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd></div>
              ))}
            </dl>
            {!product.specsVerified && <p className="note note--warn">{t('product.verifyNote')}</p>}

            <h2 className="pdp__h">{t('product.inTheBox')}</h2>
            {product.inTheBox.length ? (
              <ul className="box-list">{product.inTheBox.map((i) => <li key={i}>{i}</li>)}</ul>
            ) : (
              <p className="muted">{t('product.inTheBoxUnknown')}</p>
            )}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section--tint" aria-labelledby="rel-title">
          <div className="container">
            <h2 id="rel-title" className="section__title">{t('product.related')}</h2>
            <div className="product-grid">
              {related.map((p) => <ProductCard key={p.slug} product={p} />)}
            </div>
          </div>
        </section>
      )}

      <section className="section" id="enquiry" aria-labelledby="enq-title">
        <div className="container narrow">
          <h2 id="enq-title" className="section__title">{t('product.enquire')}: {product.name}</h2>
          <EnquiryForm defaultProduct={product.slug} compact />
        </div>
      </section>
    </>
  );
}
