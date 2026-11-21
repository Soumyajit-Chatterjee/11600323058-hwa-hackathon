/* ChronoScent — central product data (single source of truth) */
/* All prices, descriptions, included items, materials, suitability and safety notes
   are defined here. Components and pages read from this file only. */
/*
   CONCEPT DISCLAIMER:
   ChronoScent is a concept product. Real-world timing, durability, and safety have
   not been independently verified. Physical testing and veterinary or product safety
   review are required before use. Actual release time can vary by dog chewing strength,
   cartridge formulation, temperature, and environment. Not a medical device. Not an
   anti-anxiety or calming product. Not guaranteed to keep any dog busy for any set time.
*/
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
    summary: 'Concept chew pod for dogs beginning timed chew routines.',
    description:
      'Concept design for a capsule shaped chew base with two isolated systems: a timed treat chamber concept for staged food release, and a separate warmth/scent chamber concept with a removable PCM warming disc and cotton scent strip. A battery free enrichment concept that combines chewing, delayed rewards, warmth and familiar scent. Not a medical or anti anxiety device. Not a guaranteed calming product. Real-world timing, durability, and safety require physical testing and veterinary or product safety review.',
    shortDesc: 'Dual chamber modular chew pod concept for dogs left alone at home.',
    includes: [
      '1 ChronoScent chew base (concept)',
      '1 PCM warming disc (concept)',
      '3 cotton scent strips (concept)',
      '2 timed treat cartridges (concept)'
    ],
    materials: [
      'Food grade rubber or TPR outer body (concept material)',
      'Sealed PCM disc (concept material)',
      'Silicon diffuser cage (concept material)',
      'Porous ceramic insert (concept material)',
      'Cotton scent strips (concept material)',
      'Edible treat cartridges (concept material)'
    ],
    suitability: [
      { label: 'Light chewers', detail: 'Standard cartridges and base chambers (concept suitability).' },
      { label: 'Moderate chewers', detail: 'Standard cartridges with reinforced base (concept suitability).' },
      { label: 'Heavy chewers', detail: 'Reinforced cartridges and base chambers (concept suitability).' }
    ],
    sizes: [
      { label: 'Small / Medium', detail: 'Compact chambers for smaller dogs (concept sizing).' },
      { label: 'Large', detail: 'Expanded chambers for larger dogs (concept sizing).' }
    ],
    image: {
      w: 500,
      h: 500,
      desc: 'ChronoScent starter kit concept: rugged moulded rubber chew base with two isolated chambers, removable PCM warming disc, cotton scent strips, and edible treat cartridges arranged together',
      src: 'assets/Shop_Page_StarterKit_500x500.webp',
      fallbackSrc: 'assets/Shop_Page_StarterKit_500x500.png',
      gallerySrc: 'assets/Product_Page_StarterKit_420x560.jpg'
    },
    safetyNotes:
      'Concept product — inspect the base and cartridges during initial sessions to make sure your dog does not tear, swallow, or aggressively chew any part. Remove damaged components immediately and follow your veterinarian’s advice for your dog’s chewing habits. The scent strip and PCM disc are not for chewing or ingestion. Real-world safety requires physical testing and veterinary review.',
    details: {
      outerBody: 'Concept: heavy duty chew resistant outer body made of food grade rubber or TPR. The surface has raised tactile zones — ridges and dimples — intended to give your dog varied chewing resistance and sensory feedback.',
      treatChamber: 'Concept: the Chrono-Treat chamber is a sealed, isolated compartment that holds timed treat cartridges. Intended to release food in stages over time, so your dog works for rewards gradually instead of all at once. Cartridges are replaceable when empty (concept).',
      scentCore: 'Concept: the Thermo-Scent core is the second isolated system. It holds a removable PCM warming disc and a cotton scent strip. Intended to hold a piece of your worn clothing on the strip so your dog has familiar scent between chew sessions.',
      isolation: 'Concept: the two chambers are physically separated inside the base. Intended so that treats do not reach the scent core, and the warming disc does not contact food. Each chamber opens independently so you can refill the treat cartridge or swap the scent strip without disturbing the other system.',
      preparation: 'Concept: before you leave, load a timed treat cartridge into the treat chamber, insert a cotton scent strip with your worn clothing into the scent chamber, and place the PCM warming disc in its slot. Close both chambers securely. Your dog can then chew, scent, and settle on its own (concept).',
      experience: 'Concept: early — your dog discovers the chew base and the first treat release. Middle — scent strip and warming disc intended to provide a familiar resting point between chew sessions. Later — staged treat release and rearrangeable chambers intended to keep the experience fresh as your dog improves.',
      refillItems: 'The Scent Refill Pack includes 8 timed treat cartridges and 4 cotton scent strips. It works with both Small / Medium and Large base sizes (concept compatibility).',
      cartridgeFormulations: 'Concept: standard cartridges suit light and moderate chewers. Endurance cartridges are intended to be denser and made for heavy chewers who wear through standard cartridges faster. Match the formulation to your dog’s chewing strength (concept suitability).',
      timeline: {
        title: 'Intended engagement timeline (concept)',
        disclaimer: 'This is an intended design concept, not a guaranteed schedule. Actual release time can vary by dog chewing strength, cartridge formulation, temperature, and environment. Physical testing required.',
        stages: [
          {
            title: 'Start',
            desc: 'Concept: a smear or immediate treat reward on the surface encourages initial interest and first contact with the chew base.',
            imageDesc: 'Timeline start: smear reward on ChronoScent chew base surface',
            imageSrc: 'assets/Home_Page_Main_Image_500x520.webp',
            imageFallback: 'assets/Home_Page_Main_Image_500x520.png'
          },
          {
            title: 'Middle',
            desc: 'Concept: a protected treat stage becomes available after chewing and saliva gradually affect the edible barrier, releasing rewards gradually.',
            imageDesc: 'Timeline middle: protected treat stage after chewing on ChronoScent base',
            imageSrc: 'assets/Shop_Page_StarterKit_500x500.webp',
            imageFallback: 'assets/Shop_Page_StarterKit_500x500.png'
          },
          {
            title: 'Later',
            desc: 'Concept: a final reward is intended to appear after the dog has spent more time with the toy, encouraging extended engagement.',
            imageDesc: 'Timeline later: final reward after extended engagement with ChronoScent chew base',
            imageSrc: 'assets/Shop_Page_FullKit_500x500.webp',
            imageFallback: 'assets/Shop_Page_FullKit_500x500.png'
          },
          {
            title: 'Throughout',
            desc: 'Concept: the separate scent chamber provides familiar owner scent and gentle warmth from the PCM warming disc between chew sessions.',
            imageDesc: 'Timeline throughout: scent chamber with owner scent and PCM warming disc',
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
    summary: 'Concept refill pack to extend the chew cycle.',
    description:
      'Replaceable timed treat cartridges and scent strips to continue the ChronoScent cycle. Compatible with both base sizes (concept compatibility).',
    includes: [
      '8 timed treat cartridges (concept)',
      '4 cotton scent strips (concept)'
    ],
    materials: [
      'Edible treat cartridges (concept material)',
      'Cotton scent strips (concept material)'
    ],
    suitability: [
      { label: 'Light chewers', detail: 'Use with any base size (concept suitability).' },
      { label: 'Moderate chewers', detail: 'Use with any base size (concept suitability).' },
      { label: 'Heavy chewers', detail: 'Use with reinforced base chambers (concept suitability).' }
    ],
    sizes: [{ label: 'One size', detail: 'Works with both base sizes (concept compatibility).' }],
    image: {
      w: 500,
      h: 500,
      desc: 'ChronoScent scent refill pack concept: eight edible timed treat cartridges and four cotton scent strips for the dual-chamber chew base',
      src: 'assets/Shop_Page_TrailRefillPack_500x500.webp',
      fallbackSrc: 'assets/Shop_Page_TrailRefillPack_500x500.png',
      gallerySrc: 'assets/Product_Page_TrailRefillPack_420x560.jpg'
    },
    safetyNotes:
      'Concept product — timed treat cartridges contain edible treats. Cotton scent strips and PCM discs are not for chewing or ingestion. Check cartridges during initial sessions.',
    details: {
      outerBody: 'N/A — refill pack contains no base unit.',
      treatChamber: 'N/A — refill pack contains cartridges only.',
      scentCore: 'N/A — refill pack contains cartridges and strips only.',
      isolation: 'N/A — refill pack contains no base unit.',
      preparation: 'Concept: insert cartridges and scent strips into the ChronoScent base according to the base instructions (concept).',
      experience: 'Concept: replacement cartridges and strips intended to continue the chew cycle.',
      refillItems: 'The Scent Refill Pack includes 8 timed treat cartridges and 4 cotton scent strips. It works with both Small / Medium and Large base sizes (concept compatibility).',
      cartridgeFormulations: 'Concept: standard cartridges suit light and moderate chewers. Endurance cartridges are intended to be denser and made for heavy chewers who wear through standard cartridges faster. Match the formulation to your dog’s chewing strength (concept suitability).',
      timeline: null
    }
  }
];

export function getProduct(id) {
  return products.find((p) => p.id === id);
}

export const brandConfig = {
  name: 'ChronoScent',
  tagline: 'Scent + timing. No batteries. No Wi-Fi. No app.',
  footerNote:
    'ChronoScent is a purely mechanical timed chew concept. Not a treat cam. Not a puzzle your dog solves once. Real-world timing, durability, and safety require physical testing and veterinary or product safety review. Not a medical or anti-anxiety device.'
};
