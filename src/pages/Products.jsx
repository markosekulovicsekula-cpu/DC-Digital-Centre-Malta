import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { categories, machineTypes, products } from '../data/products.js';
import { useI18n } from '../i18n/index.jsx';
import useSeo from '../hooks/useSeo.js';
import ProductCard from '../components/ProductCard.jsx';
import { Search } from '../components/Icons.jsx';

export default function Products() {
  const { t } = useI18n();
  useSeo('xTool Products', 'Browse xTool laser engravers, CO₂ laser cutters, portable lasers and accessories available from Digital Center Malta.');
  const [params, setParams] = useSearchParams();
  const q = params.get('q') ?? '';
  const category = params.get('category') ?? '';
  const type = params.get('type') ?? '';

  const setParam = (key, value) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value); else next.delete(key);
    if (key === 'category') next.delete('type');
    setParams(next, { replace: true });
  };

  const types = machineTypes.filter((m) => !category || m.category === category);

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return products.filter((p) =>
      (!category || p.category === category) &&
      (!type || p.type === type) &&
      (!needle || [p.name, p.short, p.description, ...p.specs.map((s) => s.value)].join(' ').toLowerCase().includes(needle))
    );
  }, [q, category, type]);

  const hasFilters = q || category || type;

  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>{t('products.title')}</h1>
          <p>{t('products.lead')}</p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container catalog">
          <aside className="filters" aria-label="Product filters">
            <div className="field field--search">
              <label htmlFor="product-search">{t('products.search')}</label>
              <div className="search-input">
                <Search />
                <input id="product-search" type="search" value={q} placeholder={t('products.searchPlaceholder')} onChange={(e) => setParam('q', e.target.value)} />
              </div>
            </div>

            <fieldset className="filter-group">
              <legend>{t('products.category')}</legend>
              <div className="chips">
                {[{ id: '', label: t('products.all') }, ...categories].map((c) => (
                  <button key={c.id || 'all'} type="button" className="chip" aria-pressed={category === c.id} onClick={() => setParam('category', c.id)}>
                    {c.label}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="filter-group">
              <legend>{t('products.type')}</legend>
              <div className="chips">
                {[{ id: '', label: t('products.all') }, ...types].map((m) => (
                  <button key={m.id || 'all'} type="button" className="chip" aria-pressed={type === m.id} onClick={() => setParam('type', m.id)}>
                    {m.label}
                  </button>
                ))}
              </div>
            </fieldset>

            {hasFilters && (
              <button type="button" className="btn btn--ghost btn--sm" onClick={() => setParams({}, { replace: true })}>
                {t('products.reset')}
              </button>
            )}
          </aside>

          <div className="catalog__results">
            <p className="catalog__count" aria-live="polite">{t('products.results', { n: results.length })}</p>
            {results.length ? (
              <div className="product-grid product-grid--catalog">
                {results.map((p) => <ProductCard key={p.slug} product={p} />)}
              </div>
            ) : (
              <div className="empty">
                <p>{t('products.noResults')}</p>
                <button type="button" className="btn btn--primary btn--sm" onClick={() => setParams({}, { replace: true })}>{t('products.reset')}</button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
