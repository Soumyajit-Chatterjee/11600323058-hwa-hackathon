/* ChronoScent — product data */
export const products = [
  {
    id: 'starter',
    name: 'Starter Kit',
    price: 3599,
    priceText: '₹3,599',
    summary: 'For scent routines beginning.',
    description:
      'ChronoScent base unit with programmable scent chambers, plus 3 washable scent cartridges. Each cartridge holds a scent core and a timed-release wick. Pick your size below.',
    includes: ['ChronoScent base unit', '3 washable scent cartridges', 'Small/medium or large'],
    image: {
      w: 500,
      h: 500,
      desc: 'Starter Kit: ChronoScent base with three washable scent cartridges',
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
      'ChronoScent base unit, 6 washable scent cartridges, timed-release core, and mechanical pulse disc. The scent returns between cycles. Pick your size below.',
    includes: [
      'ChronoScent base unit',
      '6 washable scent cartridges',
      'Timed-release core + mechanical pulse disc',
      'Small/medium or large',
    ],
    image: {
      w: 500,
      h: 500,
      desc: 'Full Kit: ChronoScent base, six cartridges, timed-release core and pulse disc',
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
      'Replaceable scent cartridges and reusable timed-release wicks to continue the cycle. Compatible with both base sizes. Optional add-on for longer scent runs.',
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
