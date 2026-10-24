import { useSearchParams } from 'react-router-dom';
import { site } from '../config/site.js';
import { getProduct } from '../data/products.js';
import { useI18n } from '../i18n/index.jsx';
import useSeo from '../hooks/useSeo.js';
import EnquiryForm from '../components/EnquiryForm.jsx';
import PlaceholderTag from '../components/PlaceholderTag.jsx';
import { Clock, Mail, Phone, Pin } from '../components/Icons.jsx';

export default function Contact() {
  const { t } = useI18n();
  useSeo('Contact & quotes', 'Contact Digital Center Malta for xTool product quotes, advice and availability in Malta.');
  const [params] = useSearchParams();
  const productSlug = getProduct(params.get('product') ?? '') ? params.get('product') : '';
  const { contact } = site;

  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>{t('contact.title')}</h1>
          <p>{t('contact.lead')}</p>
        </div>
      </section>
      <section className="section">
        <div className="container contact">
          <div className="contact__form">
            <EnquiryForm defaultProduct={productSlug} />
          </div>
          <aside className="contact__info" aria-label="Contact details">
            <ul className="info-list">
              <li><Phone /><div><span>Phone</span><a href={contact.phoneHref}>{contact.phone}</a></div></li>
              <li><Mail /><div><span>Email</span><a href={`mailto:${contact.email}`}>{contact.email}</a></div></li>
              <li><Pin /><div><span>Address</span>
                {contact.mapUrl ? <a href={contact.mapUrl} target="_blank" rel="noopener noreferrer">{contact.address}</a> : <p>{contact.address}</p>}
                {contact.addressIsPlaceholder && <PlaceholderTag />}
              </div></li>
              <li><Clock /><div><span>Opening hours</span>
                <dl className="hours">
                  {contact.openingHours.map((h) => <div key={h.days}><dt>{h.days}</dt><dd>{h.hours}</dd></div>)}
                </dl>
              </div></li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
