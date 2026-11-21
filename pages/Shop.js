/* Nuzzora — Shop page (product listing) */
import { products } from '../data/products.js';
import { ProductCard } from '../components/ProductCard.js';
import { PlaceholderImg } from '../components/PlaceholderImg.js';

export function Shop({ onRoute }) {
  const section = document.createElement('div');
  section.className = 'page shop';

  section.innerHTML = `
    <div class="container">
      <header class="section-header page-header">
        <h1 class="section-title">Choose your kit</h1>
        <p class="section-intro">Every kit comes in two sizes. Small/medium fits toy, small and medium breeds. Large fits large and giant breeds, with larger chambers and pod capacity.</p>
      </header>
      <div class="kits-grid" aria-label="Kits"></div>
      <div class="size-guidance card" id="size-guidance">
        <h3>Size guidance</h3>
        <div class="size-options"></div>
      </div>
    </div>
  `;

  const grid = section.querySelector('.kits-grid');
  products.forEach((p) => {
    const card = ProductCard({ product: p, onSelect: () => onRoute(`#/product/${p.id}`) });
    grid.appendChild(card);
  });

  const sizeOptions = section.querySelector('.size-options');
  const sizeData = [
    { label: 'Small / Medium', detail: 'Toy, small and medium breeds.' },
    { label: 'Large', detail: 'Large and giant breeds with larger chambers and pod capacity.' },
  ];
  sizeData.forEach((s) => {
    const opt = document.createElement('div');
    opt.className = 'size-option';
    const strong = document.createElement('strong');
    strong.textContent = s.label;
    const p = document.createElement('p');
    p.textContent = s.detail;
    opt.appendChild(strong);
    opt.appendChild(p);
    sizeOptions.appendChild(opt);
  });

  return { el: section };
}
