/* ChronoScent — Shop page (kit listing) */
import { products } from '../data/products.js';
import { ProductCard } from '../components/ProductCard.js';

export function Shop({ onRoute }) {
  const section = document.createElement('div');
  section.className = 'page shop page--pad';

  section.innerHTML = `
    <div class="container">
      <header class="page-head" data-reveal>
        <p class="eyebrow">The collection</p>
        <h1 class="section-title">Choose your kit</h1>
        <p class="section-intro">Every kit comes in two sizes. Small/medium fits compact chambers for personal spaces. Large fits expanded chambers for larger rooms.</p>
      </header>
      <div class="kits-grid" aria-label="Kits"></div>
      <div class="size-guidance" id="size-guidance" data-reveal>
        <h3>Size guidance</h3>
        <div class="size-options"></div>
      </div>
    </div>
  `;

  const grid = section.querySelector('.kits-grid');
  products.forEach((p, i) => {
    const card = ProductCard({ product: p, onSelect: () => onRoute(`#/product/${p.id}`) });
    card.style.setProperty('--reveal-delay', `${i * 90}ms`);
    grid.appendChild(card);
  });

  const sizeOptions = section.querySelector('.size-options');
  const starter = products.find((p) => p.id === 'starter');
  starter.sizes.forEach((s) => {
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
