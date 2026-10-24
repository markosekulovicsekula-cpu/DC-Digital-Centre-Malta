// Regenerates public/sitemap.xml from the product list. Run: npm run sitemap
import { writeFileSync } from 'node:fs';
import { products } from '../src/data/products.js';
import { site } from '../src/config/site.js';

const paths = ['/', '/products', '/about', '/contact', ...products.map((p) => `/products/${p.slug}`)];
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${site.url}${p}</loc></url>`).join('\n')}
</urlset>
`;
writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml);
console.log(`sitemap.xml: ${paths.length} URLs`);
