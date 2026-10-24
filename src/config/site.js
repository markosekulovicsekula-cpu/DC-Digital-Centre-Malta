// ============================================================================
//  SITE CONFIGURATION — replace every value marked  TODO  with your real data.
//  Anything left as a placeholder is shown on the site with a "placeholder" tag
//  so it is never mistaken for real business information.
// ============================================================================

export const site = {
  name: 'Digital Center Malta',
  shortName: 'DC Malta',
  tagline: 'xTool laser engravers & cutters, available locally in Malta',
  defaultLanguage: 'en',

  // TODO: Only set this to true once you have WRITTEN confirmation from xTool
  // that you are an authorised reseller / distributor. While false, the site
  // describes you only as a "local seller of xTool products".
  authorisedResellerConfirmed: false,

  contact: {
    // TODO: replace with your real contact details, then set isPlaceholder: false
    isPlaceholder: true,
    phone: '+356 0000 0000',
    phoneHref: 'tel:+35600000000',
    email: 'info@example.com',
    address: 'Street name, Town, Malta',
    openingHours: [
      { days: 'Mon – Fri', hours: '09:00 – 17:00' },
      { days: 'Saturday', hours: '09:00 – 13:00' },
      { days: 'Sunday', hours: 'Closed' },
    ],
    // TODO: optional Google Maps link to your shop
    mapUrl: '',
  },

  // TODO: add your real social profiles. Empty strings are NOT rendered.
  social: {
    facebook: '',
    instagram: '',
    tiktok: '',
    youtube: '',
  },

  // TODO: form backend. Leave empty to keep the form in DEMO mode
  // (validates input but does not send anything).
  // Example services: Formspree, Web3Forms, Netlify Forms, your own API.
  formEndpoint: '',

  // Official manufacturer site – used for "official specifications" links.
  manufacturerUrl: 'https://www.xtool.com/',
};

export const nav = [
  { to: '/', key: 'nav.home' },
  { to: '/products', key: 'nav.products' },
  { to: '/about', key: 'nav.about' },
  { to: '/contact', key: 'nav.contact' },
];
