// ============================================================================
//  SITE CONFIGURATION — replace every value marked  TODO  with your real data.
//  Anything left as a placeholder is shown on the site with a "placeholder" tag
//  so it is never mistaken for real business information.
// ============================================================================

export const site = {
  name: 'DC Digital Centre Malta',
  shortName: 'DC Malta',
  tagline: 'xTool laser engravers & cutters, available locally in Malta',
  url: 'https://dcmt.eu',
  defaultLanguage: 'en',

  // TODO: Only set this to true once you have WRITTEN confirmation from xTool
  // that you are an authorised reseller / distributor. While false, the site
  // describes you only as a "local seller of xTool products".
  authorisedResellerConfirmed: false,

  contact: {
    phone: '+356 9947 1937',
    phoneHref: 'tel:+35699471937',
    email: 'info@dcmt.eu',
    address: '12, Triq il-Frangiskani, Msida MSD 1120, Malta',
    addressIsPlaceholder: false,
    openingHours: [
      { days: 'Mon – Fri', hours: '09:00 – 17:00' },
    ],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=12+Triq+il-Frangiskani+Msida+MSD+1120+Malta',
  },

  // Social profiles are not active yet. Add the URL when each one goes live;
  // empty strings are NOT rendered.
  social: {
    facebook: '',
    instagram: '',
    tiktok: '',
    youtube: '',
  },

  // Enquiry form backend:
  //  'netlify' – Netlify Forms (the hidden form in index.html must keep the same
  //              name and fields). Submissions appear in Netlify → Forms.
  //  'endpoint' – POST JSON to formEndpoint (e.g. Formspree, your own API).
  //  'demo'    – validate only, nothing is sent.
  formProvider: 'netlify',
  formName: 'enquiry',
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
