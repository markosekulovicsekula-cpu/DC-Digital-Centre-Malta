import { useId, useState } from 'react';
import { categories, products } from '../data/products.js';
import { site } from '../config/site.js';
import { useI18n } from '../i18n/index.jsx';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// The static preview build (npm run build:preview) is never hosted on Netlify,
// so it always runs in demo mode.
const PROVIDER = import.meta.env.VITE_HASH_ROUTER ? 'demo' : site.formProvider;

function send(values, botField) {
  if (PROVIDER === 'netlify') {
    return fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ 'form-name': site.formName, 'bot-field': botField, ...values }).toString(),
    });
  }
  return fetch(site.formEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(values),
  });
}

export default function EnquiryForm({ defaultProduct = '', compact = false }) {
  const { t } = useI18n();
  const id = useId();
  const [values, setValues] = useState({ name: '', email: '', product: defaultProduct, message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | demo | sent | error
  const [botField, setBotField] = useState(''); // spam honeypot, hidden from people

  const update = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
    if (status !== 'idle' && status !== 'sending') setStatus('idle');
  };

  const validate = () => {
    const er = {};
    if (!values.name.trim()) er.name = t('form.err.name');
    if (!EMAIL_RE.test(values.email.trim())) er.email = t('form.err.email');
    if (values.message.trim().length < 10) er.message = t('form.err.message');
    return er;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length) {
      document.getElementById(`${id}-${Object.keys(er)[0]}`)?.focus();
      return;
    }
    if (PROVIDER === 'demo' || (PROVIDER === 'endpoint' && !site.formEndpoint)) {
      setStatus('demo');
      return;
    }
    setStatus('sending');
    try {
      const res = await send(values, botField);
      if (!res.ok) throw new Error(String(res.status));
      setStatus('sent');
      setValues({ name: '', email: '', product: defaultProduct, message: '' });
    } catch {
      setStatus('error');
    }
  };

  const field = (name) => ({
    id: `${id}-${name}`,
    name,
    value: values[name],
    onChange: update,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `${id}-${name}-err` : undefined,
  });

  const Err = ({ name }) =>
    errors[name] ? <p className="field__err" id={`${id}-${name}-err`}>{errors[name]}</p> : null;

  return (
    <form className={`form ${compact ? 'form--compact' : ''}`} name={site.formName} onSubmit={onSubmit} noValidate>
      <p className="sr-only" aria-hidden="true">
        <label>Leave this field empty <input name="bot-field" tabIndex={-1} autoComplete="off" value={botField} onChange={(e) => setBotField(e.target.value)} /></label>
      </p>
      {PROVIDER === 'demo' && (
        <p className="form__demo-note">
          <strong>Demo form.</strong> Nothing is sent until a form backend is configured.
        </p>
      )}
      <div className="form__row">
        <div className="field">
          <label htmlFor={`${id}-name`}>{t('form.name')} <span className="req">*</span></label>
          <input type="text" autoComplete="name" required {...field('name')} />
          <Err name="name" />
        </div>
        <div className="field">
          <label htmlFor={`${id}-email`}>{t('form.email')} <span className="req">*</span></label>
          <input type="email" autoComplete="email" required {...field('email')} />
          <Err name="email" />
        </div>
      </div>
      <div className="field">
        <label htmlFor={`${id}-product`}>{t('form.product')}</label>
        <select {...field('product')}>
          <option value="">{t('form.productNone')}</option>
          <option value="service">{t('form.topicService')}</option>
          <option value="demo">{t('form.topicDemo')}</option>
          {categories.map((c) => (
            <optgroup key={c.id} label={c.label}>
              {products.filter((p) => p.category === c.id).map((p) => <option key={p.slug} value={p.slug}>{p.name}</option>)}
            </optgroup>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor={`${id}-message`}>{t('form.message')} <span className="req">*</span></label>
        <textarea rows={compact ? 4 : 6} required {...field('message')} />
        <Err name="message" />
      </div>
      <p className="form__hint"><span className="req">*</span> {t('form.required')}</p>
      <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
        {status === 'sending' ? t('form.sending') : t('form.submit')}
      </button>

      <div aria-live="polite" className="form__status-wrap">
        {status === 'demo' && (
          <div className="form__status form__status--demo" role="status">
            <strong>{t('form.demoTitle')}</strong>
            <p>{t('form.demoText')}</p>
          </div>
        )}
        {status === 'sent' && (
          <div className="form__status form__status--ok" role="status">
            <strong>{t('form.sentTitle')}</strong>
            <p>{t('form.sentText')}</p>
          </div>
        )}
        {status === 'error' && (
          <div className="form__status form__status--err" role="alert">
            <strong>{t('form.errorTitle')}</strong>
            <p>{t('form.errorText')}</p>
          </div>
        )}
      </div>
    </form>
  );
}
