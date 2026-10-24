# Digital Center Malta — xTool products website

React 18 + Vite + React Router. English by default, ready for more languages.

## Run
```bash
npm install
npm run dev      # development server (http://localhost:5173)
npm run build    # production build in dist/
npm run preview  # preview the build
```
Hosting note: this is a single-page app, so the host must serve `index.html` for every route
(Netlify `_redirects`: `/* /index.html 200`, Vercel/Cloudflare Pages do this automatically).

## What to replace before going live
| What | Where |
|---|---|
| Address and map link (then set `addressIsPlaceholder: false`) | `src/config/site.js` → `contact` |
| Social media links (empty = hidden) | `src/config/site.js` → `social` |
| Form backend URL (empty = demo mode, nothing is sent) | `src/config/site.js` → `formEndpoint` |
| Authorised-reseller status (only `true` with written confirmation from xTool) | `src/config/site.js` → `authorisedResellerConfirmed` |
| Products, descriptions, specs, packing list, prices, related items | `src/data/products.js` (set `specsVerified: true` once checked) |
| Product images (files in `public/products/`, paths in `images`) | `src/data/products.js` |
| Logo | `src/components/Logo.jsx`, `public/favicon.svg` |
| Home page copy, "Why buy" points, application examples | `src/i18n/en.js`, `src/pages/Home.jsx` (`reasons`, `uses`) |
| About text and "At a glance" facts | `src/pages/About.jsx` |
| SEO titles/descriptions | `index.html`, `useSeo(...)` calls in each page |

## Adding a language
Copy `src/i18n/en.js` to e.g. `mt.js` or `sr.js`, translate the values, and register it in `src/i18n/index.jsx`.

## Domain (dcmt.eu)
The site URL is set in `src/config/site.js` (`url`) and used for canonical links, Open Graph tags,
`public/robots.txt` and `public/sitemap.xml` (regenerated on every `npm run build`).
`public/_redirects` handles routing on Netlify. On Vercel or Cloudflare Pages this file is ignored and not needed.
