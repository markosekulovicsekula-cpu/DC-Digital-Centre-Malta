import { getType } from '../data/products.js';

/**
 * Shows the first product image, or a neutral illustrated placeholder
 * when no image has been added yet (see src/data/products.js).
 */
export default function ProductImage({ product, index = 0, className = '' }) {
  const src = product.images?.[index];
  if (src) {
    return <img className={`pimg ${className}`} src={src} alt={`${product.name} – image ${index + 1}`} loading="lazy" />;
  }
  const isMachine = product.category === 'machines';
  return (
    <div className={`pimg pimg--ph ${className}`} role="img" aria-label={`${product.name} – image coming soon`}>
      <svg viewBox="0 0 200 140" aria-hidden="true">
        {isMachine ? (
          <>
            <rect x="35" y="30" width="130" height="72" rx="10" className="ph-body" />
            <rect x="48" y="42" width="104" height="38" rx="5" className="ph-window" />
            <line x1="100" y1="46" x2="100" y2="76" className="ph-beam" />
            <rect x="35" y="104" width="130" height="8" rx="3" className="ph-body" />
          </>
        ) : (
          <>
            <circle cx="100" cy="70" r="34" className="ph-body" />
            <circle cx="100" cy="70" r="14" className="ph-window" />
          </>
        )}
      </svg>
      <span className="pimg__label">{getType(product.type)?.label} · image coming soon</span>
    </div>
  );
}
