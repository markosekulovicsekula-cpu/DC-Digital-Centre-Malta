// ============================================================================
//  SITE CONFIGURATION — replace every value marked  TODO  with your real data.
//  Anything left as a placeholder is shown on the site with a "placeholder" tag
//  so it is never mistaken for real business information.
// ============================================================================

export const site = {
  name: 'DC Digital Centre Malta',
  shortName: 'DC Malta',
  tagline: 'Official xTool partner in Malta — lasers, printers, heat presses and MetalFab.',
  url: 'https://dcmt.eu',
  defaultLanguage: 'en',

  // Official xTool partner status (confirmed by the business owner).
  // Set to false to describe the business only as a "seller of xTool products".
  officialPartner: true,

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
  manufacturerUrl: 'https://www.xtool.eu/',
};

export const nav = [
  { to: '/', key: 'nav.home' },
  { to: '/products', key: 'nav.products' },
  { to: '/about', key: 'nav.about' },
  { to: '/contact', key: 'nav.contact' },
];
