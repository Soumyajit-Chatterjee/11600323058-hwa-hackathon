/* Nuzzora — Checkout page (mock behaviour) */
import { cart } from '../store/cart.js';
import { Button } from '../components/Button.js';

export function Checkout({ onRoute }) {
  const section = document.createElement('div');
  section.className = 'page checkout';

  const items = cart.getItems();
  if (items.length === 0) {
    section.innerHTML = `
      <div class="container">
        <h1 class="section-title">Your cart is empty</h1>
        <p>Add items before checking out.</p>
        <p class="btn-container"><button type="button" class="btn btn--primary" id="checkout-shop">Shop now</button></p>
      </div>
    `;
    section.querySelector('#checkout-shop').addEventListener('click', () => onRoute('#/shop'));
    return { el: section };
  }

  const total = cart.getTotal();

  section.innerHTML = `
    <div class="container">
      <header class="page-header">
        <h1 class="section-title">Checkout</h1>
        <p class="section-intro">Review and place your order. This is a mock checkout — no real payment is processed.</p>
      </header>

      <div class="checkout-wrap">
        <form id="checkout-form" novalidate>
          <div class="form-group">
            <label for="checkout-name">Full name <span class="req" aria-hidden="true">*</span></label>
            <input type="text" id="checkout-name" name="name" required aria-required="true" />
          </div>
          <div class="form-group">
            <label for="checkout-email">Email <span class="req" aria-hidden="true">*</span></label>
            <input type="email" id="checkout-email" name="email" required aria-required="true" />
          </div>
          <div class="form-group">
            <label for="checkout-phone">Phone <span class="req" aria-hidden="true">*</span></label>
            <input type="tel" id="checkout-phone" name="phone" required aria-required="true" />
          </div>
          <div class="form-group">
            <label for="checkout-address">Address <span class="req" aria-hidden="true">*</span></label>
            <textarea id="checkout-address" name="address" rows="3" required aria-required="true"></textarea>
          </div>
          <div class="order-total">
            <span>Order total</span>
            <span>₹${total.toLocaleString()}</span>
          </div>
          <button type="submit" class="btn btn--primary btn--block" id="place-order">Place order</button>
        </form>
        <p id="checkout-error" class="error-msg" role="alert" aria-live="assertive"></p>
      </div>

      <aside class="order-review">
        <h3>Order review</h3>
        <div class="review-items" aria-label="Order items"></div>
        <div class="review-total"><span>Total</span><span>₹${total.toLocaleString()}</span></div>
      </aside>
    </div>
  `;

  const reviewItems = section.querySelector('.review-items');
  items.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'review-item';
    row.innerHTML = `
      <span class="review-name">${item.name} — ${item.variant}</span>
      <span class="review-qty">×${item.qty}</span>
      <span class="review-price">₹${(item.price * item.qty).toLocaleString()}</span>
    `;
    reviewItems.appendChild(row);
  });

  const form = section.querySelector('#checkout-form');
  const errorEl = section.querySelector('#checkout-error');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    errorEl.textContent = '';

    const formData = new FormData(form);
    const order = {
      id: 'NZ' + Date.now().toString(36).toUpperCase(),
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      items: cart.getItems(),
      total,
      createdAt: new Date().toISOString(),
      status: 'confirmed (mock)',
    };

    try {
      localStorage.setItem('nuzzora_last_order', JSON.stringify(order));
    } catch (e) {
      // ignore
    }

    cart.clear();
    window.dispatchEvent(new Event('cart:updated'));
    onRoute(`#/confirmation/${order.id}`);
  });

  return { el: section };
}
