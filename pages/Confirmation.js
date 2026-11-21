/* Nuzzora — Confirmation page */
import { Button } from '../components/Button.js';

export function Confirmation({ orderId, onRoute }) {
  const section = document.createElement('div');
  section.className = 'page confirmation';
  section.style.padding = '72px 0 64px';

  let order = null;
  try {
    const raw = localStorage.getItem('nuzzora_last_order');
    order = raw ? JSON.parse(raw) : null;
  } catch (e) {
    order = null;
  }

  const match = order && order.id === orderId ? order : null;

  if (!match) {
    section.innerHTML = `
      <div class="container">
        <h1 class="section-title">Order not found</h1>
        <p>We couldn't find that order.</p>
        <p class="btn-container"><button type="button" class="btn btn--primary" id="confirm-shop">Shop now</button></p>
      </div>
    `;
    section.querySelector('#confirm-shop').addEventListener('click', () => onRoute('#/shop'));
    return { el: section };
  }

  section.innerHTML = `
    <div class="container confirmation-container">
      <div class="confirmation-hero">
        ${(function(){
          const el = document.createElement('div');
          el.className = 'checkmark';
          el.innerHTML = '<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>';
          return el.outerHTML;
        })()}
        <h1 class="section-title">Order confirmed</h1>
        <p class="confirmation-id">Order #${match.id}</p>
        <p>Thank you. Your Nuzzora order has been placed (mock checkout — no real payment was processed).</p>
      </div>

      <div class="confirmation-details">
        <h3>Order summary</h3>
        <div class="detail-row"><span>Name</span><span>${match.name}</span></div>
        <div class="detail-row"><span>Email</span><span>${match.email}</span></div>
        <div class="detail-row"><span>Phone</span><span>${match.phone}</span></div>
        <div class="detail-row"><span>Address</span><span>${match.address}</span></div>
        <div class="detail-row total-row"><span>Total</span><span>₹${match.total.toLocaleString()}</span></div>

        <h3>Items</h3>
        <ul class="confirmation-items" aria-label="Confirmed items"></ul>

        <div class="confirmation-actions">
          <button type="button" class="btn btn--outline" id="confirm-shop">Shop again</button>
          <button type="button" class="btn btn--primary" id="confirm-home">Back to landing</button>
        </div>
      </div>
    </div>
  `;

  const itemsList = section.querySelector('.confirmation-items');
  match.items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} — ${item.variant} ×${item.qty} · ₹${(item.price * item.qty).toLocaleString()}`;
    itemsList.appendChild(li);
  });

  section.querySelector('#confirm-shop').addEventListener('click', () => onRoute('#/shop'));
  section.querySelector('#confirm-home').addEventListener('click', () => onRoute('#/'));

  return { el: section };
}
