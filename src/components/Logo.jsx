import { site } from '../config/site.js';

// TODO: replace this generated mark with your real logo (e.g. <img src="/logo.svg" />).
export default function Logo() {
  return (
    <span className="logo">
      <svg className="logo__mark" viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="14" />
        <path d="M18 18h14a14 14 0 0 1 0 28H18z" />
        <circle cx="46" cy="18" r="4" />
      </svg>
      <span className="logo__text">
        <strong>DC Digital Centre</strong>
        <small>Malta</small>
      </span>
      <span className="sr-only">{site.name}</span>
    </span>
  );
}
