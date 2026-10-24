import { Link } from 'react-router-dom';
import useSeo from '../hooks/useSeo.js';

export default function NotFound({ title = 'Page not found' }) {
  useSeo(title, 'The page you were looking for could not be found.');
  return (
    <section className="section">
      <div className="container narrow empty empty--page">
        <h1>{title}</h1>
        <p>The page you are looking for does not exist or has moved.</p>
        <Link to="/products" className="btn btn--primary">Browse products</Link>
      </div>
    </section>
  );
}
