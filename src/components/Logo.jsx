import { site } from '../config/site.js';

/** Brand logo. `variant="full"` shows the complete logo (used in the footer). */
export default function Logo({ variant = 'mark' }) {
  if (variant === 'full') {
    return <img className="logo-full" src="/brand/dc-logo-light.webp" alt={site.name} width="900" height="412" />;
  }
  return (
    <span className="logo">
      <img className="logo__mark" src="/brand/dc-mark-light.webp" alt="" width="400" height="167" />
      <span className="logo__text">
        <strong>DC Digital Centre</strong>
        <small>Malta</small>
      </span>
      <span className="sr-only">{site.name}</span>
    </span>
  );
}
