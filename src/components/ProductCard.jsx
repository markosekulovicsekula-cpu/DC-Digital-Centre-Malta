import { Link } from 'react-router-dom';
import ProductImage from './ProductImage.jsx';
import { getType } from '../data/products.js';
import { useI18n } from '../i18n/index.jsx';
import { Arrow } from './Icons.jsx';

export const formatPrice = (price, t) =>
  typeof price === 'number'
    ? new Intl.NumberFormat('en-MT', { style: 'currency', currency: 'EUR' }).format(price)
    : t('common.contactForPrice');

export default function ProductCard({ product }) {
  const { t } = useI18n();
  return (
    <article className="pcard">
      <Link to={`/products/${product.slug}`} className="pcard__media" tabIndex={-1} aria-hidden="true">
        <ProductImage product={product} />
      </Link>
      <div className="pcard__body">
        <p className="pcard__type">{getType(product.type)?.label}</p>
        <h3 className="pcard__title">
          <Link to={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="pcard__short">{product.short}</p>
        <ul className="pcard__specs">
          {product.specs.slice(0, 2).map((s) => (
            <li key={s.label}><span>{s.label}</span>{s.value}</li>
          ))}
        </ul>
        {!product.specsVerified && <span className="verify-tag">{t('common.toVerify')}</span>}
        <div className="pcard__foot">
          <span className="pcard__price">{formatPrice(product.price, t)}</span>
          <div className="pcard__actions">
            <Link className="btn btn--ghost btn--sm" to={`/contact?product=${product.slug}`}>
              {t('common.requestQuote')}
            </Link>
            <Link className="btn btn--primary btn--sm" to={`/products/${product.slug}`} aria-label={`${t('common.learnMore')}: ${product.name}`}>
              {t('common.learnMore')} <Arrow width={16} height={16} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
