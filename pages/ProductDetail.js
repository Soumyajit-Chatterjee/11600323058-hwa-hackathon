/* Nuzzora — Product details page */
import { getProduct } from '../data/products.js';
import { cart } from '../store/cart.js';
import { Button } from '../components/Button.js';
import { PlaceholderImg } from '../components/PlaceholderImg.js';

export function ProductDetail({ id, onRoute }) {
  const product = getProduct(id);
  const section = document.createElement('div');
  section.className = 'page product-detail';
  section.style.padding = '72px 0 64px';

  if (!product) {
    section.innerHTML = `
      <div class="container">
        <h1>Product not found</h1>
        <p class="btn-container"><a href="#/shop" class="btn btn--primary" data-link>Back to shop</a></p>
      </div>
    `;
    section.addEventListener('click', (e) => {
      const link = e.target.closest('a[data-link]');
      if (link) {
        e.preventDefault();
        onRoute(link.getAttribute('href'));
      }
    });
    return { el: section };
  }

  section.innerHTML = `
    <div class="container product-container">
      <div class="product-gallery">
        <div class="gallery-placeholder">
          ${PlaceholderImg({ w: 420, h: 560, desc: product.image.desc, className: 'gallery-img', src: product.image.src }).outerHTML}
        </div>
      </div>
      <div class="product-info">
        <h1 class="product-name">${product.name}</h1>
        <p class="product-summary">${product.summary}</p>
        <p class="product-price">₹${product.price.toLocaleString()}</p>
        <p class="product-desc">${product.description}</p>

        <h3 class="pick-size">Pick your size</h3>
        <div class="size-selector" aria-label="Size" role="radiogroup"></div>

        <h3 class="pick-qty">Quantity</h3>
        <div class="qty-control" aria-label="Quantity">
          <button type="button" class="qty-btn qty--minus" aria-label="Decrease quantity">−</button>
          <input type="number" class="qty-input" value="1" min="1" max="10" aria-label="Quantity" />
          <button type="button" class="qty-btn qty--plus" aria-label="Increase quantity">+</button>
        </div>

        <div class="product-actions">
          <button type="button" class="btn btn--primary btn--block add-to-cart">Add to cart</button>
          <button type="button" class="btn btn--outline btn--block view-cart">View cart</button>
        </div>
        <p class="feedback" role="status" aria-live="polite"></p>

        <div class="product-includes">
          <h4>Includes</h4>
          <ul class="includes-list"></ul>
        </div>
      </div>
    </div>
  `;

  const sizeSelector = section.querySelector('.size-selector');
  product.sizes.forEach((size) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'size-btn';
    btn.setAttribute('role', 'radio');
    btn.setAttribute('aria-checked', 'false');
    btn.textContent = size.label;
    const detail = document.createElement('span');
    detail.className = 'size-detail';
    detail.textContent = size.detail;
    btn.appendChild(detail);
    btn.addEventListener('click', () => {
      sizeSelector.querySelectorAll('.size-btn').forEach((b) => {
        b.setAttribute('aria-checked', 'false');
        b.classList.remove('size--active');
      });
      btn.setAttribute('aria-checked', 'true');
      btn.classList.add('size--active');
      window.__SELECTED_SIZE__ = size.label;
    });
    sizeSelector.appendChild(btn);
  });
  // select first by default
  if (product.sizes[0]) {
    sizeSelector.children[0].setAttribute('aria-checked', 'true');
    sizeSelector.children[0].classList.add('size--active');
    window.__SELECTED_SIZE__ = product.sizes[0].label;
  }

  let qty = 1;
  const qtyInput = section.querySelector('.qty-input');
  section.querySelector('.qty--minus').addEventListener('click', () => {
    if (qty > 1) { qty--; qtyInput.value = qty; }
  });
  section.querySelector('.qty--plus').addEventListener('click', () => {
    if (qty < 10) { qty++; qtyInput.value = qty; }
  });
  qtyInput.addEventListener('change', () => {
    const v = parseInt(qtyInput.value, 10) || 1;
    qty = Math.max(1, Math.min(10, v));
    qtyInput.value = qty;
  });

  const feedback = section.querySelector('.feedback');
  const addBtn = section.querySelector('.add-to-cart');
  addBtn.addEventListener('click', () => {
    const size = window.__SELECTED_SIZE__ || product.sizes[0]?.label || 'Small / Medium';
    const variant = size;
    cart.add(product.id, variant, qty);
    window.dispatchEvent(new Event('cart:updated'));
    feedback.textContent = `Added ${qty} × ${product.name} (${size}) to cart.`;
    setTimeout(() => { feedback.textContent = ''; }, 2500);
  });

  section.querySelector('.view-cart').addEventListener('click', () => onRoute('#/cart'));

  product.includes.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    section.querySelector('.includes-list').appendChild(li);
  });

  return { el: section };
}
