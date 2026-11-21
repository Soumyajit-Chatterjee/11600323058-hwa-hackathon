/* ChronoScent — Checkout page (mock behaviour) */
import { cart } from '../store/cart.js';

export function Checkout({ onRoute }) {
  const section = document.createElement('div');
  section.className = 'page checkout page--pad';

  const items = cart.getItems();
  if (items.length === 0) {
    section.innerHTML = `
      <div class="container">
        <header class="page-head">
          <p class="eyebrow">Checkout</p>
          <h1 class="section-title">Your cart is empty</h1>
          <p class="section-intro">Add items before checking out.</p>
        </header>
        <p class="btn-container" style="justify-content: flex-start; margin-top: 0;">
          <button type="button" class="btn btn--primary" id="checkout-shop">Shop now</button>
        </p>
      </div>
    `;
    section.querySelector('#checkout-shop').addEventListener('click', () => onRoute('#/shop'));
    return { el: section };
  }

  const total = cart.getTotal();

  section.innerHTML = `
    <div class="container">
      <header class="page-head" data-reveal>
        <p class="eyebrow">Checkout</p>
        <h1 class="section-title">Place your order</h1>
        <p class="section-intro">Review and place your order. This is a mock checkout — no real payment is processed.</p>
      </header>

      <div class="checkout-wrap">
        <form id="checkout-form" class="checkout-form" novalidate>
          <div class="form-group">
            <label for="checkout-name">Full name <span class="req" aria-hidden="true">*</span></label>
            <input type="text" id="checkout-name" name="name" autocomplete="name" required aria-required="true" />
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="checkout-email">Email <span class="req" aria-hidden="true">*</span></label>
              <input type="email" id="checkout-email" name="email" autocomplete="email" required aria-required="true" />
            </div>
            <div class="form-group">
              <label for="checkout-phone">Phone <span class="req" aria-hidden="true">*</span></label>
              <input type="tel" id="checkout-phone" name="phone" autocomplete="tel" required aria-required="true" />
            </div>
          </div>

          <div class="form-group">
            <label for="checkout-address">Address <span class="req" aria-hidden="true">*</span></label>
            <textarea id="checkout-address" name="address" rows="3" autocomplete="street-address" required aria-required="true"></textarea>
          </div>

          <p class="form-notice" role="note">This is a mock checkout. No real payment is processed. Your details are only used to generate a local confirmation on this device and are not sent anywhere.</p>

          <p id="checkout-error" class="error-msg" role="alert" aria-live="assertive"></p>

          <div class="order-total">
            <span>Order total</span>
            <span>₹${total.toLocaleString()}</span>
          </div>
          <button type="submit" class="btn btn--primary btn--block" id="place-order">Place order</button>
        </form>

        <aside class="order-review" data-reveal style="--reveal-delay: 90ms">
          <h3>Order review</h3>
          <div class="review-items" aria-label="Order items"></div>
          <div class="review-total"><span>Total</span><span>₹${total.toLocaleString()}</span></div>
        </aside>
      </div>
    </div>
  `;

  const reviewItems = section.querySelector('.review-items');
  items.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'review-item';
    row.innerHTML = `
      <span class="review-name">${item.name} — ${item.variant}</span>
      <span class="review-qty">×${item.qty}</span>
      <span class="review-price">₹${((item.salePrice || item.price) * item.qty).toLocaleString()}</span>
    `;
    reviewItems.appendChild(row);
  });

  const form = section.querySelector('#checkout-form');
  const errorEl = section.querySelector('#checkout-error');

  function showFieldError(fieldId, message) {
    const field = section.querySelector(`#${fieldId}`);
    errorEl.textContent = message;
    if (field) {
      field.focus();
      field.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return false;
  }

  function validateForm() {
    const name = section.querySelector('#checkout-name').value.trim();
    const email = section.querySelector('#checkout-email').value.trim();
    const phone = section.querySelector('#checkout-phone').value.trim();
    const address = section.querySelector('#checkout-address').value.trim();

    if (!name) return showFieldError('checkout-name', 'Please enter your full name.');
    if (name.length < 3) return showFieldError('checkout-name', 'Name must be at least 3 characters long.');
    if (name.length > 255) return showFieldError('checkout-name', 'Name is too long.');

    if (!email) return showFieldError('checkout-email', 'Please enter your email address.');
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) return showFieldError('checkout-email', 'Please enter a valid email address.');

    if (!phone) return showFieldError('checkout-phone', 'Please enter your phone number.');
    const phoneRe = /^[6-9]\d{9}$/;
    if (!phoneRe.test(phone)) return showFieldError('checkout-phone', 'Please enter a valid 10-digit Indian mobile number.');

    if (!address) return showFieldError('checkout-address', 'Please enter your address.');
    if (address.length < 10) return showFieldError('checkout-address', 'Address must be at least 10 characters long.');

    errorEl.textContent = '';
    return true;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    errorEl.textContent = '';

    if (!validateForm()) return;

    const formData = new FormData(form);
    const order = {
      id: 'CS' + Date.now().toString(36).toUpperCase(),
      items: cart.getItems(),
      total,
      createdAt: new Date().toISOString(),
      status: 'confirmed (mock)',
    };

    try {
      localStorage.setItem('chronoscent_last_order', JSON.stringify(order));
    } catch (e) {
      // ignore storage failures
    }

    cart.clear();
    window.dispatchEvent(new Event('cart:updated'));
    onRoute(`#/confirmation/${order.id}`);
  });

  return { el: section };
}
