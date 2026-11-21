/* ChronoScent — central product data (single source of truth) */
/* All prices, descriptions, included items, materials, suitability and safety notes
   are defined here. Components and pages read from this file only. */
export const products = [
  {
    id: 'starter',
    name: 'Starter Kit',
    productType: 'Dual Chamber Modular Chew Pod',
    brand: 'ChronoScent',
    price: 3499,
    salePrice: 2399,
    saleLabel: 'Limited time',
    originalPriceLabel: 'Ongoing discount',
    summary: 'For dogs beginning timed chew routines.',
    description:
      'Heavy duty, capsule shaped chew base with two isolated systems: a timed treat chamber with staged food release over time, and a separate warmth/scent chamber with a removable PCM warming disc and cotton scent strip. A realistic, battery free enrichment system that combines chewing, delayed rewards, warmth and familiar scent. Not a medical or anti anxiety device. Not a guaranteed calming product.',
    shortDesc: 'Dual chamber modular chew pod for dogs left alone at home.',
    includes: [
      '1 ChronoScent chew base',
      '1 PCM warming disc',
      '3 cotton scent strips',
      '2 timed treat cartridges'
    ],
    materials: [
      'Food grade rubber or TPR outer body',
      'Sealed PCM disc',
      'Silicon diffuser cage',
      'Porous ceramic insert',
      'Cotton scent strips',
      'Edible treat cartridges'
    ],
    suitability: [
      { label: 'Light chewers', detail: 'Standard cartridges and base chambers.' },
      { label: 'Moderate chewers', detail: 'Standard cartridges with reinforced base.' },
      { label: 'Heavy chewers', detail: 'Reinforced cartridges and base chambers.' }
    ],
    sizes: [
      { label: 'Small / Medium', detail: 'Compact chambers for smaller dogs.' },
      { label: 'Large', detail: 'Expanded chambers for larger dogs.' }
    ],
    image: {
      w: 500,
      h: 500,
      desc: 'Starter Kit: ChronoScent dual-chamber chew base with two timed treat cartridges, PCM warming disc and cotton scent strips',
      src: 'assets/Shop_Page_StarterKit_500x500.webp',
      fallbackSrc: 'assets/Shop_Page_StarterKit_500x500.png',
      gallerySrc: 'assets/Product_Page_StarterKit_420x560.jpg'
    },
    safetyNotes:
      'Check the base and cartridges during initial sessions to make sure your dog does not tear, swallow, or aggressively chew any part. Remove damaged components and follow your veterinarian’s advice for your dog’s chewing habits. The scent strip and PCM disc are not for chewing or ingestion.'
  },
  {
    id: 'refill',
    name: 'Scent Refill Pack',
    productType: 'Refill Pack (Subscription)',
    brand: 'ChronoScent',
    price: 999,
    salePrice: 599,
    saleLabel: 'Limited time',
    billingCycle: 'month',
    subscription: true,
    summary: 'Extend the chew cycle.',
    description:
      'Replaceable timed treat cartridges and scent strips to continue the ChronoScent cycle. Compatible with both base sizes.',
    includes: [
      '8 timed treat cartridges',
      '4 cotton scent strips'
    ],
    materials: [
      'Edible treat cartridges',
      'Cotton scent strips'
    ],
    suitability: [
      { label: 'Light chewers', detail: 'Use with any base size.' },
      { label: 'Moderate chewers', detail: 'Use with any base size.' },
      { label: 'Heavy chewers', detail: 'Use with reinforced base chambers.' }
    ],
    sizes: [{ label: 'One size', detail: 'Works with both base sizes.' }],
    image: {
      w: 500,
      h: 500,
      desc: 'Scent Refill Pack: eight timed treat cartridges and four cotton scent strips',
      src: 'assets/Shop_Page_TrailRefillPack_500x500.webp',
      fallbackSrc: 'assets/Shop_Page_TrailRefillPack_500x500.png',
      gallerySrc: 'assets/Product_Page_TrailRefillPack_420x560.jpg'
    },
    safetyNotes:
      'Timed treat cartridges contain edible treats. Cotton scent strips and PCM discs are not for chewing or ingestion. Check cartridges during initial sessions.'
  }
];

export function getProduct(id) {
  return products.find((p) => p.id === id);
}

export const brandConfig = {
  name: 'ChronoScent',
  tagline: 'Scent + timing. No batteries. No Wi-Fi. No app.',
  footerNote:
    'ChronoScent is a purely mechanical timed chew system. Not a treat cam. Not a puzzle your dog solves once. It turns your space into a timed chew cycle.'
};
