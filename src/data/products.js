// ============================================================================
//  PRODUCT CATALOGUE — CONTENT TO VERIFY
//  ---------------------------------------------------------------------------
//  These are STARTER entries so the catalogue has structure. Before going live:
//   1. Check every name, description and spec against official xTool material
//      (or your supplier's sheet) and set `specsVerified: true` per product.
//   2. Add images you have the right to use: put files in /public/products/
//      and list them in `images`, e.g. ['/products/f1-front.jpg'].
//      Products without images show a neutral placeholder.
//   3. Set `price` to a number (EUR) ONLY if you want to publish a price.
//      `null` shows "Contact us for price".
//   4. Remove products you will not stock; add ones you will.
//  Nothing here states stock levels, warranty or delivery terms on purpose.
// ============================================================================

export const categories = [
  { id: 'machines', label: 'Laser machines' },
  { id: 'accessories', label: 'Accessories' },
];

export const machineTypes = [
  { id: 'diode', label: 'Diode laser', category: 'machines' },
  { id: 'co2', label: 'CO₂ laser', category: 'machines' },
  { id: 'dual', label: 'Dual-laser portable', category: 'machines' },
  { id: 'multi', label: 'Multi-tool craft machine', category: 'machines' },
  { id: 'rotary', label: 'Rotary attachments', category: 'accessories' },
  { id: 'air', label: 'Air assist', category: 'accessories' },
  { id: 'fume', label: 'Fume extraction', category: 'accessories' },
  { id: 'workspace', label: 'Work surfaces & bases', category: 'accessories' },
];

export const products = [
  {
    slug: 'xtool-f1',
    name: 'xTool F1',
    category: 'machines',
    type: 'dual',
    featured: true,
    short: 'Compact, portable engraver combining a diode and an infrared laser for small personalised items.',
    description:
      'A handheld-size laser engraver aimed at quick personalisation of small objects such as keyrings, jewellery, tags and gifts. Its two laser sources let it work on a wider range of materials than a single-source machine.',
    specs: [
      { label: 'Laser sources', value: 'Diode + infrared (verify power ratings)' },
      { label: 'Form factor', value: 'Portable / desktop' },
      { label: 'Main use', value: 'Engraving small items' },
    ],
    inTheBox: [], // TODO: fill from the official packing list
    related: ['xtool-ra2-pro', 'xtool-smoke-purifier'],
    images: [],
    price: null,
    specsVerified: false,
  },
  {
    slug: 'xtool-f1-ultra',
    name: 'xTool F1 Ultra',
    category: 'machines',
    type: 'dual',
    featured: true,
    short: 'Portable dual-laser engraver pairing a fiber laser with a diode laser for metals and non-metals.',
    description:
      'Built for makers who personalise both metal and organic materials. The fiber source targets metals and some plastics, while the diode source handles materials like wood and leather.',
    specs: [
      { label: 'Laser sources', value: 'Fiber + diode (verify power ratings)' },
      { label: 'Form factor', value: 'Portable / desktop' },
      { label: 'Main use', value: 'Engraving metal & non-metal items' },
    ],
    inTheBox: [],
    related: ['xtool-ra2-pro', 'xtool-smoke-purifier'],
    images: [],
    price: null,
    specsVerified: false,
  },
  {
    slug: 'xtool-s1',
    name: 'xTool S1',
    category: 'machines',
    type: 'diode',
    featured: true,
    short: 'Enclosed diode laser engraver and cutter with a larger working area for workshop projects.',
    description:
      'An enclosed diode machine suited to signs, decor, wooden products and batch work. The enclosure helps contain light and fumes when connected to suitable extraction.',
    specs: [
      { label: 'Laser source', value: 'Diode (several power options — verify)' },
      { label: 'Form factor', value: 'Enclosed desktop' },
      { label: 'Main use', value: 'Engraving & cutting' },
    ],
    inTheBox: [],
    related: ['xtool-ra2-pro', 'xtool-air-assist', 'xtool-smoke-purifier', 'xtool-honeycomb-panel'],
    images: [],
    price: null,
    specsVerified: false,
  },
  {
    slug: 'xtool-p2s',
    name: 'xTool P2S',
    category: 'machines',
    type: 'co2',
    featured: true,
    short: 'Desktop CO₂ laser cutter for fast cutting of wood, acrylic, leather and more.',
    description:
      'A desktop CO₂ machine for small businesses and studios that cut sheet materials regularly — signage, packaging, models and acrylic products.',
    specs: [
      { label: 'Laser source', value: 'CO₂ (verify power rating)' },
      { label: 'Form factor', value: 'Enclosed desktop' },
      { label: 'Main use', value: 'Cutting & engraving sheet materials' },
    ],
    inTheBox: [],
    related: ['xtool-ra2-pro', 'xtool-smoke-purifier', 'xtool-riser-base'],
    images: [],
    price: null,
    specsVerified: false,
  },
  {
    slug: 'xtool-m1-ultra',
    name: 'xTool M1 Ultra',
    category: 'machines',
    type: 'multi',
    featured: false,
    short: 'Multi-tool craft machine combining laser, blade, ink and pen modules.',
    description:
      'A versatile machine for crafters who want laser engraving alongside blade cutting, printing and drawing in one workspace — useful for stickers, cards, fabric and mixed-media projects.',
    specs: [
      { label: 'Modules', value: 'Laser, blade, inkjet, pen (verify)' },
      { label: 'Form factor', value: 'Enclosed desktop' },
      { label: 'Main use', value: 'Mixed craft projects' },
    ],
    inTheBox: [],
    related: ['xtool-smoke-purifier'],
    images: [],
    price: null,
    specsVerified: false,
  },
  {
    slug: 'xtool-ra2-pro',
    name: 'xTool RA2 Pro Rotary',
    category: 'accessories',
    type: 'rotary',
    featured: false,
    short: 'Rotary attachment for engraving cylindrical items such as tumblers, glasses and rings.',
    description:
      'Lets compatible machines engrave around round objects. Check compatibility with your machine before ordering.',
    specs: [
      { label: 'Use', value: 'Cylindrical & round objects' },
      { label: 'Compatibility', value: 'Selected xTool machines (verify)' },
    ],
    inTheBox: [],
    related: ['xtool-s1', 'xtool-f1'],
    images: [],
    price: null,
    specsVerified: false,
  },
  {
    slug: 'xtool-air-assist',
    name: 'xTool Air Assist Set',
    category: 'accessories',
    type: 'air',
    featured: false,
    short: 'Directs airflow at the cutting point to help produce cleaner cuts.',
    description:
      'Air assist blows air onto the working area, helping reduce scorching and clear smoke during cutting. Check compatibility with your machine.',
    specs: [
      { label: 'Use', value: 'Cleaner cutting results' },
      { label: 'Compatibility', value: 'Selected xTool machines (verify)' },
    ],
    inTheBox: [],
    related: ['xtool-s1'],
    images: [],
    price: null,
    specsVerified: false,
  },
  {
    slug: 'xtool-smoke-purifier',
    name: 'xTool Smoke Purifier',
    category: 'accessories',
    type: 'fume',
    featured: false,
    short: 'Filtration unit to help manage smoke and odour when working indoors.',
    description:
      'Connects to enclosed machines to filter fumes produced during engraving and cutting. Always follow the manufacturer\'s ventilation guidance.',
    specs: [
      { label: 'Use', value: 'Indoor fume filtration' },
      { label: 'Compatibility', value: 'Selected xTool machines (verify)' },
    ],
    inTheBox: [],
    related: ['xtool-s1', 'xtool-p2s'],
    images: [],
    price: null,
    specsVerified: false,
  },
  {
    slug: 'xtool-honeycomb-panel',
    name: 'xTool Honeycomb Panel',
    category: 'accessories',
    type: 'workspace',
    featured: false,
    short: 'Honeycomb work bed that supports materials and reduces back-reflection while cutting.',
    description:
      'A raised honeycomb surface that keeps material flat and lets the beam pass through, reducing marks on the underside of cut pieces.',
    specs: [
      { label: 'Use', value: 'Cutting support surface' },
      { label: 'Compatibility', value: 'Selected xTool machines (verify)' },
    ],
    inTheBox: [],
    related: ['xtool-s1'],
    images: [],
    price: null,
    specsVerified: false,
  },
  {
    slug: 'xtool-riser-base',
    name: 'xTool Riser Base',
    category: 'accessories',
    type: 'workspace',
    featured: false,
    short: 'Raises the machine to make room for taller objects.',
    description:
      'Extends the usable working height so you can engrave thicker or taller items. Check compatibility with your machine.',
    specs: [
      { label: 'Use', value: 'Extra working height' },
      { label: 'Compatibility', value: 'Selected xTool machines (verify)' },
    ],
    inTheBox: [],
    related: ['xtool-p2s'],
    images: [],
    price: null,
    specsVerified: false,
  },
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);
export const getType = (id) => machineTypes.find((t) => t.id === id);
export const getCategory = (id) => categories.find((c) => c.id === id);
