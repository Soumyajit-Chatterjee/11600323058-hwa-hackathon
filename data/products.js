/* ChronoScent — product data */
export const products = [
  {
    id: 'starter',
    name: 'Starter Kit',
    price: 3599,
    priceText: '₹3,599',
    summary: 'For dogs beginning timed scent routines.',
    description:
      'Heavy duty, capsule shaped chew base with two isolated systems: a timed treat chamber with staged food release, and a separate warmth/scent chamber with a removable PCM warming disc and cotton scent strip. Includes 3 washable scent cartridges. Pick your size below.',
    includes: ['ChronoScent chew base', '3 washable scent cartridges', 'Small/medium or large'],
    image: {
      w: 500,
      h: 500,
      desc: 'Starter Kit: ChronoScent dual-chamber chew base with three washable scent cartridges',
      src: 'assets/Shop_Page_StarterKit_500x500.webp',
      fallbackSrc: 'assets/Shop_Page_StarterKit_500x500.png',
      gallerySrc: 'assets/Product_Page_StarterKit_420x560.jpg',
    },
    sizes: [
      { label: 'Small / Medium', detail: 'Compact chambers for personal spaces.' },
      { label: 'Large', detail: 'Expanded chambers for larger rooms.' },
    ],
  },
  {
    id: 'full',
    name: 'Full Kit',
    price: 5399,
    priceText: '₹5,399',
    summary: 'The complete ChronoScent setup.',
    description:
      'Heavy duty chew base, 6 washable scent cartridges, removable PCM warming disc, cotton scent strip. Dual isolated chambers for chewing, delayed rewards, warmth and familiar scent. Pick your size below.',
    includes: [
      'ChronoScent chew base',
      '6 washable scent cartridges',
      'Removable PCM warming disc',
      'Cotton scent strip',
      'Small/medium or large',
    ],
    image: {
      w: 500,
      h: 500,
      desc: 'Full Kit: ChronoScent chew base, six cartridges, PCM warming disc and cotton scent strip',
      src: 'assets/Shop_Page_FullKit_500x500.webp',
      fallbackSrc: 'assets/Shop_Page_FullKit_500x500.png',
      gallerySrc: 'assets/Product_Page_FullKit_420x560.jpg',
    },
    sizes: [
      { label: 'Small / Medium', detail: 'Compact chambers for personal spaces.' },
      { label: 'Large', detail: 'Expanded chambers for larger rooms.' },
    ],
    ribbon: 'Mostly Bought',
  },
  {
    id: 'refill',
    name: 'Scent Refill Pack',
    price: 1499,
    priceText: '₹1,499',
    summary: 'Extend the scent timeline.',
    description:
      'Replaceable scent cartridges and reusable timed-release wicks to continue the cycle. Compatible with both base sizes. Optional add-on for longer sessions.',
    includes: ['Replaceable scent cartridges', 'Reusable timed-release wicks', 'Compatible with both base sizes'],
    image: {
      w: 500,
      h: 500,
      desc: 'Scent Refill Pack: cartridges and reusable timed-release wicks',
      src: 'assets/Shop_Page_TrailRefillPack_500x500.webp',
      fallbackSrc: 'assets/Shop_Page_TrailRefillPack_500x500.png',
      gallerySrc: 'assets/Product_Page_TrailRefillPack_420x560.jpg',
    },
    sizes: [{ label: 'One size', detail: 'Works with both Small / Medium and Large bases.' }],
  },
];

export function getProduct(id) {
  return products.find((p) => p.id === id);
}
