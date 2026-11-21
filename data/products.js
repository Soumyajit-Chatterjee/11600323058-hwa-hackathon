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
      'Check the base and cartridges during initial sessions to make sure your dog does not tear, swallow, or aggressively chew any part. Remove damaged components and follow your veterinarian’s advice for your dog’s chewing habits. The scent strip and PCM disc are not for chewing or ingestion.',
    details: {
      outerBody: 'Heavy duty chew resistant outer body made of food grade rubber or TPR. The surface has raised tactile zones — ridges and dimples — that give your dog varied chewing resistance and sensory feedback without breaking apart.',
      treatChamber: 'The Chrono-Treat chamber is a sealed, isolated compartment that holds timed treat cartridges. It releases food in stages over time, so your dog works for rewards gradually instead of all at once. Cartridges are replaceable when empty.',
      scentCore: 'The Thermo-Scent core is the second isolated system. It holds a removable PCM warming disc and a cotton scent strip. You place a piece of your worn clothing on the strip so your dog has familiar scent between chew sessions.',
      isolation: 'The two chambers are physically separated inside the base. Treats cannot reach the scent core, and the warming disc cannot contact food. Each chamber opens independently so you can refill the treat cartridge or swap the scent strip without disturbing the other system.',
      preparation: 'Before you leave, load a timed treat cartridge into the treat chamber, insert a cotton scent strip with your worn clothing into the scent chamber, and place the PCM warming disc in its slot. Close both chambers securely. Your dog can then chew, scent, and settle on its own.',
      experience: 'Early: your dog discovers the chew base and the first treat release. Middle: scent strip and warming disc provide a familiar resting point between chew sessions. Later: staged treat release and rearrangeable chambers keep the experience fresh as your dog improves.',
      refillItems: 'The Scent Refill Pack includes 8 timed treat cartridges and 4 cotton scent strips. It works with both Small / Medium and Large base sizes.',
      cartridgeFormulations: 'Standard cartridges suit light and moderate chewers. Endurance cartridges are denser and made for heavy chewers who wear through standard cartridges faster. Match the formulation to your dog’s chewing strength.',
      timeline: {
        title: 'Intended engagement timeline',
        disclaimer: 'This is an intended design concept, not a guaranteed schedule. Actual release time can vary by dog chewing strength, cartridge formulation, temperature, and environment.',
        stages: [
          {
            title: 'Start',
            desc: 'A smear or immediate treat reward on the surface encourages initial interest and first contact with the chew base.',
            imageDesc: 'Timeline start: smear reward on chew base surface',
            imageSrc: 'assets/Home_Page_Main_Image_500x520.webp',
            imageFallback: 'assets/Home_Page_Main_Image_500x520.png'
          },
          {
            title: 'Middle',
            desc: 'A protected treat stage becomes available after chewing and saliva gradually affect the edible barrier, releasing rewards gradually.',
            imageDesc: 'Timeline middle: protected treat stage after chewing',
            imageSrc: 'assets/Shop_Page_StarterKit_500x500.webp',
            imageFallback: 'assets/Shop_Page_StarterKit_500x500.png'
          },
          {
            title: 'Later',
            desc: 'A final reward is intended to appear after the dog has spent more time with the toy, encouraging extended engagement.',
            imageDesc: 'Timeline later: final reward after extended engagement',
            imageSrc: 'assets/Shop_Page_FullKit_500x500.webp',
            imageFallback: 'assets/Shop_Page_FullKit_500x500.png'
          },
          {
            title: 'Throughout',
            desc: 'The separate scent chamber provides familiar owner scent and gentle warmth from the PCM warming disc between chew sessions.',
            imageDesc: 'Timeline throughout: scent chamber with owner scent and warmth',
            imageSrc: 'assets/Shop_Page_TrailRefillPack_500x500.webp',
            imageFallback: 'assets/Shop_Page_TrailRefillPack_500x500.png'
          }
        ]
      }
    }
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
