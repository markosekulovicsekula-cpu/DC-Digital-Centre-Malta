import { getType } from '../data/products.js';

// Simple line illustrations per category, used until real photos are added.
const illustrations = {
  lasers: (
    <>
      <rect x="35" y="30" width="130" height="72" rx="10" className="ph-body" />
      <rect x="48" y="42" width="104" height="38" rx="5" className="ph-window" />
      <line x1="100" y1="46" x2="100" y2="76" className="ph-beam" />
      <rect x="35" y="104" width="130" height="8" rx="3" className="ph-body" />
    </>
  ),
  printers: (
    <>
      <rect x="40" y="40" width="120" height="56" rx="8" className="ph-body" />
      <rect x="54" y="30" width="92" height="14" rx="3" className="ph-window" />
      <rect x="58" y="96" width="84" height="22" rx="2" className="ph-paper" />
      <circle cx="146" cy="56" r="4" className="ph-dot" />
    </>
  ),
  'heat-presses': (
    <>
      <rect x="50" y="34" width="100" height="22" rx="6" className="ph-body" />
      <rect x="62" y="56" width="76" height="6" rx="2" className="ph-dot" />
      <rect x="62" y="74" width="76" height="8" rx="2" className="ph-window" />
      <rect x="44" y="84" width="112" height="22" rx="6" className="ph-body" />
    </>
  ),
  metalfab: (
    <>
      <rect x="40" y="56" width="70" height="52" rx="8" className="ph-body" />
      <path d="M110 70 L150 46 L160 54 L124 80 Z" className="ph-window" />
      <circle cx="158" cy="50" r="5" className="ph-dot" />
      <line x1="60" y1="118" x2="160" y2="118" className="ph-beam" />
    </>
  ),
  accessories: (
    <>
      <circle cx="100" cy="70" r="34" className="ph-body" />
      <circle cx="100" cy="70" r="14" className="ph-window" />
    </>
  ),
  materials: (
    <>
      <rect x="50" y="78" width="110" height="16" rx="3" className="ph-window" />
      <rect x="44" y="62" width="110" height="16" rx="3" className="ph-body" />
      <rect x="56" y="46" width="110" height="16" rx="3" className="ph-paper" />
    </>
  ),
};

/**
 * Shows the first product image, or a neutral illustrated placeholder
 * when no image has been added yet (see src/data/products.js).
 */
export default function ProductImage({ product, index = 0, className = '' }) {
  const src = product.images?.[index];
  if (src) {
    return <img className={`pimg ${className}`} src={src} alt={`${product.name} – image ${index + 1}`} loading="lazy" />;
  }
  return (
    <div className={`pimg pimg--ph ${className}`} role="img" aria-label={`${product.name} – image coming soon`}>
      <svg viewBox="0 0 200 140" aria-hidden="true">
        {illustrations[product.category] ?? illustrations.accessories}
      </svg>
      <span className="pimg__label">{getType(product.type)?.label} · image coming soon</span>
    </div>
  );
}
