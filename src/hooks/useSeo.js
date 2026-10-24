import { useEffect } from 'react';
import { site } from '../config/site.js';

export default function useSeo(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.name}` : `${site.name} | xTool Laser Engravers & Cutters in Malta`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) meta.setAttribute('content', description);
  }, [title, description]);
}
