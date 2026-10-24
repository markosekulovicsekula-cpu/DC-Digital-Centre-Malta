import { Link } from 'react-router-dom';
import { site } from '../config/site.js';
import { useI18n } from '../i18n/index.jsx';
import useSeo from '../hooks/useSeo.js';
import PlaceholderTag from '../components/PlaceholderTag.jsx';
import { Arrow } from '../components/Icons.jsx';

export default function About() {
  const { t } = useI18n();
  useSeo('About us', 'About Digital Center Malta, a local business in Malta offering xTool laser engravers, cutters and accessories.');

  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>{t('about.title')}</h1>
          <p>A local Maltese business offering xTool products.</p>
        </div>
      </section>

      <section className="section">
        <div className="container about">
          <div className="about__text prose">
            {/* TODO: replace these paragraphs with your real story. */}
            <p className="ph-block"><PlaceholderTag>Replace text</PlaceholderTag></p>
            <p>
              Digital Center Malta is a local business that offers xTool laser engravers, laser cutters and
              accessories to customers in Malta. Our aim is to make it easier for makers, hobbyists, schools and
              small businesses to choose and buy the right equipment without having to order blindly from abroad.
            </p>
            <p>
              Whether you are starting out with personalised gifts or adding laser cutting to an existing workshop,
              you can contact us to discuss your materials, project ideas and budget, and we will point you to
              suitable machines and accessories.
            </p>
            <p>
              {site.authorisedResellerConfirmed
                ? 'Digital Center Malta is an authorised xTool reseller.'
                : 'Digital Center Malta is an independent seller of xTool products.'}{' '}
              For full technical documentation, see the{' '}
              <a href={site.manufacturerUrl} target="_blank" rel="noopener noreferrer">official xTool website<span className="sr-only"> (opens in a new tab)</span></a>.
            </p>
            <Link to="/contact" className="btn btn--primary">{t('common.requestQuote')} <Arrow /></Link>
          </div>
          <aside className="about__facts" aria-label="Business details">
            <h2>At a glance <PlaceholderTag /></h2>
            {/* TODO: replace with real facts (year founded, location, team, etc.) */}
            <dl>
              <div><dt>Based in</dt><dd>Malta</dd></div>
              <div><dt>Products</dt><dd>xTool machines & accessories</dd></div>
              <div><dt>Founded</dt><dd>[YEAR]</dd></div>
              <div><dt>Showroom</dt><dd>[Yes / By appointment / No]</dd></div>
            </dl>
          </aside>
        </div>
      </section>
    </>
  );
}
