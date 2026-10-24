import { Link } from 'react-router-dom';
import { site } from '../config/site.js';
import { useI18n } from '../i18n/index.jsx';
import useSeo from '../hooks/useSeo.js';
import { Arrow, Badge, Laser, Printer, Store, Wrench, Box } from '../components/Icons.jsx';

const services = [
  { icon: Printer, title: 'Large-format printers', text: 'Servicing, maintenance and repairs for wide-format printing equipment.' },
  { icon: Laser, title: 'Laser machines', text: 'Diagnostics, alignment, maintenance and repairs for laser engravers and cutters.' },
  { icon: Wrench, title: 'CNC machines', text: 'Service and repairs to keep CNC routers and machines running accurately.' },
  { icon: Box, title: '3D printers', text: 'Maintenance, calibration and repairs for 3D printers.' },
];

export default function About() {
  const { t } = useI18n();
  useSeo('About us', 'DC Digital Centre Malta in Msida: official xTool partner, demo room, and servicing of large-format printers, laser machines, CNC machines and 3D printers.');

  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>{t('about.title')}</h1>
          <p>Digital fabrication and printing equipment — sales, demos and service, from Msida.</p>
        </div>
      </section>

      <section className="section">
        <div className="container about">
          <div className="about__text prose">
            <p>
              DC Digital Centre Malta is a Maltese company working with the machines behind modern making and printing:
              large-format printers, laser machines, CNC machines and 3D printers. We help businesses, studios, schools
              and makers choose the right equipment, and we keep that equipment running once it is in use.
            </p>
            <p>
              {site.officialPartner ? 'As an official xTool partner in Malta, we' : 'We'} represent the xTool range locally —
              laser engravers and cutters, UV and DTF printers, heat presses, MetalFab laser welding and in-store
              personalisation solutions. Instead of ordering blindly from abroad, you can see the machines, ask
              questions and get advice from people who work with this equipment every day.
            </p>
            <p>
              Full technical documentation for every xTool product is available on the{' '}
              <a href={site.manufacturerUrl} target="_blank" rel="noopener noreferrer">official xTool website<span className="sr-only"> (opens in a new tab)</span></a>.
            </p>
            <div className="about__ctas">
              <Link to="/contact" className="btn btn--primary">{t('common.requestQuote')} <Arrow /></Link>
              <Link to="/products" className="btn btn--ghost">{t('nav.products')}</Link>
            </div>
          </div>
          <aside className="about__facts" aria-label="Business details">
            <h2>At a glance</h2>
            <dl>
              <div><dt>Location</dt><dd>Msida, Malta</dd></div>
              <div><dt>Demo room</dt><dd>At our Msida premises</dd></div>
              <div><dt>Partner status</dt><dd>Official xTool partner</dd></div>
              <div><dt>Service</dt><dd>Large-format, laser, CNC, 3D printing</dd></div>
              <div><dt>Opening hours</dt><dd>{site.contact.openingHours.map((h) => `${h.days} ${h.hours}`).join(', ')}</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="service-title">
        <div className="container">
          <h2 id="service-title" className="section__title">Service & repairs</h2>
          <p className="section__lead">
            We service and repair digital production equipment — not only xTool. Tell us the make and model of your
            machine and what is wrong, and we will get back to you.
          </p>
          <ul className="why-grid">
            {services.map(({ icon: Icon, title, text }) => (
              <li key={title} className="why-card why-card--white">
                <span className="why-card__icon"><Icon width={24} height={24} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
          <div className="about__ctas">
            <Link to="/contact?topic=service" className="btn btn--primary">Request service <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="demo-title">
        <div className="container">
          <div className="demo-room">
            <div className="demo-room__icons" aria-hidden="true">
              <span><Store width={28} height={28} /></span>
              <span><Badge width={28} height={28} /></span>
            </div>
            <div>
              <h2 id="demo-title">Visit our demo room in Msida</h2>
              <p>
                See xTool machines working before you buy. Bring your own materials or project ideas and test what is
                possible. Contact us to arrange a visit at 12, Triq il-Frangiskani, Msida.
              </p>
            </div>
            <Link to="/contact?topic=demo" className="btn btn--primary btn--lg">Book a visit <Arrow /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
