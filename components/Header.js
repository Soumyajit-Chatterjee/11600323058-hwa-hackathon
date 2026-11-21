/* ChronoScent — header / navigation component */
import { cart } from '../store/cart.js';

export function Header({ onRoute }) {
  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = `
    <div class="container header-inner">
      <a href="#/" class="brand" data-link>ChronoScent</a>
      <nav class="nav-links" aria-label="Main navigation">
        <a href="#/" class="nav-link" data-link>Home</a>
        <a href="#/shop" class="nav-link" data-link>Shop</a>
        <a href="#/faq" class="nav-link" data-link>FAQ</a>
        <a href="#/contact" class="nav-link" data-link>Contact Us</a>
        <a href="#/cart" class="nav-link cart-link" data-link>Cart <span class="cart-count">0</span></a>
      </nav>
    </div>
  `;

  const countEl = header.querySelector('.cart-count');

  function updateCount() {
    countEl.textContent = cart.getItemCount();
  }

  const updateCart = () => updateCount();
  window.addEventListener('cart:updated', updateCart);

  header.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-link]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (href && href.startsWith('#/')) {
      e.preventDefault();
      if (onRoute) onRoute(href);
    }
  });

  updateCount();

  const cleanup = () => window.removeEventListener('cart:updated', updateCart);
  return { el: header, cleanup };
}
