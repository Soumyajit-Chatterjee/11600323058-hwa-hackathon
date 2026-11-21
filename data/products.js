/* Nuzzora — product data */
export const products = [
  {
    id: 'starter',
    name: 'Starter Kit',
    price: 3599,
    priceText: '₹3,599',
    summary: 'For dogs beginning scent games.',
    description:
      'Chew-resistant den base with reconfigurable puzzle chambers, plus 3 washable scent pods. Each pod holds a piece of your worn clothing and a treat. Pick your size below.',
    includes: ['Chew-resistant den base', '3 washable scent pods', 'Small/medium or large'],
    image: { w: 500, h: 500, desc: 'Starter Kit: chew-resistant den base with three washable scent pods' },
    sizes: [
      { label: 'Small / Medium', detail: 'Toy, small and medium breeds.' },
      { label: 'Large', detail: 'Large and giant breeds with larger chambers and pod capacity.' },
    ],
  },
  {
    id: 'full',
    name: 'Full Kit',
    price: 5399,
    priceText: '₹5,399',
    summary: 'The complete Nuzzora setup.',
    description:
      'Chew-resistant den base, 6 washable scent pods, warmth insert, and the mechanical pulse disc. The dog returns to the warm den between hunts. Pick your size below.',
    includes: [
      'Chew-resistant den base',
      '6 washable scent pods',
      'Warmth insert + mechanical pulse disc',
      'Small/medium or large',
    ],
    image: { w: 500, h: 500, desc: 'Full Kit: den base, six scent pods, warmth insert and mechanical pulse disc' },
    sizes: [
      { label: 'Small / Medium', detail: 'Toy, small and medium breeds.' },
      { label: 'Large', detail: 'Large and giant breeds with larger chambers and pod capacity.' },
    ],
    ribbon: 'Mostly Bought',
  },
  {
    id: 'refill',
    name: 'Trail Refill Pack',
    price: 1499,
    priceText: '₹1,499',
    summary: 'Extend the search around your home.',
    description:
      'Replaceable scent pods and reusable scent-wax sachets to lay a trail between pods. Compatible with both den sizes. Optional add-on for longer routes.',
    includes: ['Replaceable scent pods', 'Reusable scent-wax sachets', 'Compatible with both den sizes'],
    image: { w: 500, h: 500, desc: 'Trail Refill Pack: scent pods and reusable scent-wax sachets' },
    sizes: [{ label: 'One size', detail: 'Works with both Small / Medium and Large dens.' }],
  },
];

export function getProduct(id) {
  return products.find((p) => p.id === id);
}
