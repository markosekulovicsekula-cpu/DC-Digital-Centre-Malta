import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { site } from '../config/site.js';

function setTag(selector, create, attr, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(create.tag);
    for (const [k, v] of Object.entries(create.attrs)) el.setAttribute(k, v);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

export default function useSeo(title, description) {
  const { pathname } = useLocation();
  useEffect(() => {
    const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | xTool Laser Engravers & Cutters in Malta`;
    const url = site.url + (pathname === '/' ? '/' : pathname);
    document.title = fullTitle;
    if (description) setTag('meta[name="description"]', { tag: 'meta', attrs: { name: 'description' } }, 'content', description);
    setTag('link[rel="canonical"]', { tag: 'link', attrs: { rel: 'canonical' } }, 'href', url);
    setTag('meta[property="og:title"]', { tag: 'meta', attrs: { property: 'og:title' } }, 'content', fullTitle);
    setTag('meta[property="og:url"]', { tag: 'meta', attrs: { property: 'og:url' } }, 'content', url);
    if (description) setTag('meta[property="og:description"]', { tag: 'meta', attrs: { property: 'og:description' } }, 'content', description);
  }, [title, description, pathname]);
}
