/* ChronoScent — Cart page */
import { cart } from '../store/cart.js';
import { Button } from '../components/Button.js';
import { PlaceholderImg } from '../components/PlaceholderImg.js';

export function Cart({ onRoute }) {
  const section = document.createElement('div');
  section.className = 'page cart';
  section.style.padding = '72px 0 64px';

  function render() {
    const items = cart.getItems();
    section.innerHTML = `
      <div class="container">
        <header class="page-header">
          <h1 class="section-title">Your cart</h1>
          <p class="section-intro">Review your items before checkout.</p>
        </header>

        <div class="cart-wrap">
          <div class="cart-items" aria-label="Cart items"></div>
          <div class="cart-summary">
            <h3>Order summary</h3>
            <div class="summary-row"><span>Items</span><span id="cart-item-count">0</span></div>
            <div class="summary-row"><span>Total</span><span id="cart-total">₹0</span></div>
            <div class="summary-actions">
              ${items.length ? `<button type="button" class="btn btn--primary btn--block checkout-btn">Checkout</button>` : ''}
              <button type="button" class="btn btn--outline btn--block continue-shopping">Continue shopping</button>
            </div>
          </div>
        </div>
      </div>
    `;

    const itemsContainer = section.querySelector('.cart-items');
    const countEl = section.querySelector('#cart-item-count');
    const totalEl = section.querySelector('#cart-total');

    countEl.textContent = cart.getItemCount();
    totalEl.textContent = `₹${cart.getTotal().toLocaleString()}`;

    if (items.length === 0) {
      itemsContainer.innerHTML = `
        <div class="empty-cart">
          ${PlaceholderImg({ w: 260, h: 180, desc: 'Your cart is empty', className: 'empty-img' }).outerHTML}
          <p>Your cart is empty.</p>
          <p class="btn-container"><button type="button" class="btn btn--primary" id="empty-shop">Shop now</button></p>
        </div>
      `;
      section.querySelector('#empty-shop').addEventListener('click', () => onRoute('#/shop'));
      return;
    }

    items.forEach((item) => {
      const cartImageMap = {
        starter: 'assets/Cart_Page_StarterKit_260x180.jpg',
        full: 'assets/Cart_Page_FullKit_260x180.jpg',
        refill: 'assets/Cart_Page_TrailRefillPack_260x180.jpg',
      };
      const row = document.createElement('div');
      row.className = 'cart-item';
      row.innerHTML = `
        <div class="cart-item-thumb">
          ${PlaceholderImg({ w: 80, h: 80, desc: item.imageDesc || 'Product image', className: 'thumb-img', src: cartImageMap[item.productId], loading: 'lazy', decoding: 'async' }).outerHTML}
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
      itemsContainer.appendChild(row);

      row.querySelector('.qty--minus').addEventListener('click', () => {
        const cur = parseInt(row.querySelector('.qty-input').value, 10) || 1;
        cart.setQty(item.id, cur - 1);
        window.dispatchEvent(new Event('cart:updated'));
        render();
      });
      row.querySelector('.qty--plus').addEventListener('click', () => {
        const cur = parseInt(row.querySelector('.qty-input').value, 10) || 1;
        cart.setQty(item.id, cur + 1);
        window.dispatchEvent(new Event('cart:updated'));
        render();
      });
      row.querySelector('.qty-input').addEventListener('change', (e) => {
        const v = parseInt(e.target.value, 10) || 1;
        cart.setQty(item.id, v);
        window.dispatchEvent(new Event('cart:updated'));
        render();
      });
      row.querySelector('.remove-btn').addEventListener('click', () => {
        cart.remove(item.id);
        window.dispatchEvent(new Event('cart:updated'));
        render();
      });
    });

    section.querySelector('.checkout-btn').addEventListener('click', () => onRoute('#/checkout'));
    section.querySelector('.continue-shopping').addEventListener('click', () => onRoute('#/shop'));
  }

  render();
  return { el: section, update: render };
}
