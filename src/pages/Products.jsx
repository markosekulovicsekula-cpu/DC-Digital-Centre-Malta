import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { categories, machineTypes, products } from '../data/products.js';
import { useI18n } from '../i18n/index.jsx';
import useSeo from '../hooks/useSeo.js';
import ProductCard from '../components/ProductCard.jsx';
import { Arrow, Search } from '../components/Icons.jsx';

// How many products each category shows in the grouped "All" view.
const PREVIEW_COUNT = 3;

export default function Products() {
  const { t } = useI18n();
  useSeo('xTool Products', 'The complete xTool range in Malta: laser engravers and cutters, UV and DTF printers, heat presses, MetalFab laser welders, accessories and materials.');
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

  const showCategory = (id) => {
    setParams({ category: id }, { replace: false });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const types = machineTypes.filter((m) => m.category === category);

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return products.filter((p) =>
      (!category || p.category === category) &&
      (!type || p.type === type) &&
      (!needle || [p.name, p.short, p.description, ...p.specs.map((s) => s.value)].join(' ').toLowerCase().includes(needle))
    );
  }, [q, category, type]);

  const hasFilters = q || category || type;
  const grouped = !hasFilters;

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
                {[{ id: '', short: t('products.all') }, ...categories].map((c) => (
                  <button key={c.id || 'all'} type="button" className="chip" aria-pressed={category === c.id} onClick={() => setParam('category', c.id)}>
                    {c.short}
                  </button>
                ))}
              </div>
            </fieldset>

            {category && types.length > 1 && (
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
            )}

            {hasFilters && (
              <button type="button" className="btn btn--ghost btn--sm" onClick={() => setParams({}, { replace: true })}>
                {t('products.reset')}
              </button>
            )}
          </aside>

          <div className="catalog__results">
            <p className="catalog__count" aria-live="polite">{t('products.results', { n: results.length })}</p>
            {grouped ? (
              categories.map((c) => {
                const items = products.filter((p) => p.category === c.id);
                const preview = [...items.filter((p) => p.featured), ...items.filter((p) => !p.featured)].slice(0, PREVIEW_COUNT);
                return (
                  <section key={c.id} className="cat-group" aria-labelledby={`grp-${c.id}`}>
                    <div className="cat-group__head">
                      <div>
                        <h2 id={`grp-${c.id}`}>{c.label}</h2>
                        <p>{c.blurb}</p>
                      </div>
                      {items.length > preview.length && (
                        <button type="button" className="cat-group__more" onClick={() => showCategory(c.id)}>
                          {t('products.showAll', { n: items.length })} <Arrow width={16} height={16} />
                        </button>
                      )}
                    </div>
                    <div className="product-grid product-grid--catalog">
                      {preview.map((p) => <ProductCard key={p.slug} product={p} />)}
                    </div>
                  </section>
                );
              })
            ) : results.length ? (
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
