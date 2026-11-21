/* ChronoScent — Cart page */
import { cart } from '../store/cart.js';
import { getProduct } from '../data/products.js';
import { PlaceholderImg } from '../components/PlaceholderImg.js';

export function Cart({ onRoute }) {
  const section = document.createElement('div');
  section.className = 'page cart page--pad';

  // The page shell is built once. Only the item rows and the summary numbers
  // are refreshed, so the header, summary panel and their reveal animations
  // are never destroyed while you change quantities.
  section.innerHTML = `
    <div class="container">
      <header class="page-head" data-reveal>
        <p class="eyebrow">Your selection</p>
        <h1 class="section-title">Your cart</h1>
        <p class="section-intro">Review your items before checkout.</p>
      </header>

      <div class="cart-wrap">
        <div class="cart-items" aria-label="Cart items"></div>
        <aside class="cart-summary" data-reveal>
          <h3>Order summary</h3>
          <div class="summary-row"><span>Items</span><span id="cart-item-count">0</span></div>
          <div class="summary-row summary-row--total"><span>Total</span><span id="cart-total">₹0</span></div>
          <div class="summary-actions">
            <button type="button" class="btn btn--primary btn--block checkout-btn" hidden>Checkout</button>
            <button type="button" class="btn btn--outline btn--block continue-shopping">Continue shopping</button>
          </div>
        </aside>
      </div>
    </div>
  `;

  const itemsContainer = section.querySelector('.cart-items');
  const countEl = section.querySelector('#cart-item-count');
  const totalEl = section.querySelector('#cart-total');
  const checkoutBtn = section.querySelector('.checkout-btn');

  function buildRow(item) {
    const product = getProduct(item.productId);
    const productImage = product?.image;
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <div class="cart-item-thumb">
        ${PlaceholderImg({
          w: productImage?.w || 80,
          h: productImage?.h || 80,
          desc: productImage?.desc || item.imageDesc || 'ChronoScent product image',
          className: 'thumb-img',
          src: productImage?.src,
          loading: 'lazy',
          decoding: 'async',
          fit: 'contain'
        }).outerHTML}
      </div>
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-variant">${item.variant}</p>
        <p class="cart-item-price">₹${(item.salePrice || item.price).toLocaleString()}</p>
      </div>
      <div class="cart-item-controls">
        <button type="button" class="qty-btn qty--minus" data-id="${item.id}" aria-label="Decrease ${item.name}">−</button>
        <input type="number" class="qty-input" value="${item.qty}" min="1" max="10" data-id="${item.id}" aria-label="Quantity for ${item.name}" />
        <button type="button" class="qty-btn qty--plus" data-id="${item.id}" aria-label="Increase ${item.name}">+</button>
        <button type="button" class="remove-btn" data-id="${item.id}" aria-label="Remove ${item.name} from cart">Remove</button>
      </div>
    `;
    return row;
  }

  function render() {
    const items = cart.getItems();

    countEl.textContent = cart.getItemCount();
    totalEl.textContent = `₹${cart.getTotal().toLocaleString()}`;
    checkoutBtn.hidden = items.length === 0;

    if (items.length === 0) {
      itemsContainer.innerHTML = `
        <div class="empty-cart">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M6 7h12l-1.2 12.2a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6 7Z"></path>
            <path d="M9 7V5.5a3 3 0 0 1 6 0V7"></path>
          </svg>
          <p>Your cart is empty.</p>
          <p>Browse the concept kits to get started.</p>
          <p class="btn-container"><button type="button" class="btn btn--primary" id="empty-shop">Shop now</button></p>
        </div>
      `;
      return;
    }

    const fragment = document.createDocumentFragment();
    items.forEach((item) => fragment.appendChild(buildRow(item)));
    itemsContainer.replaceChildren(fragment);
  }

  function sync() {
    window.dispatchEvent(new Event('cart:updated'));
    render();
  }

  // Event delegation: rows can be replaced freely without losing handlers.
  itemsContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;

    if (btn.id === 'empty-shop') {
      onRoute('#/shop');
      return;
    }

    const row = btn.closest('.cart-item');
    if (!row) return;
    const input = row.querySelector('.qty-input');
    const id = btn.dataset.id || input?.dataset.id;
    if (!id) return;

    if (btn.classList.contains('qty--minus')) {
      const cur = parseInt(input.value, 10) || 1;
      cart.setQty(id, cur - 1);
      sync();
    } else if (btn.classList.contains('qty--plus')) {
      const cur = parseInt(input.value, 10) || 1;
      cart.setQty(id, cur + 1);
      sync();
    } else if (btn.classList.contains('remove-btn')) {
      cart.remove(id);
      sync();
    }
  });

  itemsContainer.addEventListener('change', (e) => {
    const input = e.target.closest('.qty-input');
    if (!input) return;
    const v = parseInt(input.value, 10) || 1;
    cart.setQty(input.dataset.id, v);
    sync();
  });

  checkoutBtn.addEventListener('click', () => onRoute('#/checkout'));
  section.querySelector('.continue-shopping').addEventListener('click', () => onRoute('#/shop'));

  render();
  return { el: section, update: render };
}
