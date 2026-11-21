/* ChronoScent — header / navigation component */
import { cart } from '../store/cart.js';

export function Header({ onRoute }) {
  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = `
    <div class="container header-inner">
      <a href="#/" class="brand" data-link>ChronoScent</a>
      <button type="button" class="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="site-nav">
        <span></span><span></span><span></span>
      </button>
      <nav class="nav-links" id="site-nav" aria-label="Main navigation">
        <a href="#/" class="nav-link" data-link>Home</a>
        <a href="#/shop" class="nav-link" data-link>Shop</a>
        <a href="#/faq" class="nav-link" data-link>FAQ</a>
        <a href="#/contact" class="nav-link" data-link>Contact Us</a>
        <a href="#/cart" class="nav-link cart-link" data-link>Cart <span class="cart-count">0</span></a>
      </nav>
    </div>
  `;

  const countEl = header.querySelector('.cart-count');
  const toggle = header.querySelector('.nav-toggle');
  const links = Array.from(header.querySelectorAll('.nav-link'));

  function updateCount() {
    countEl.textContent = cart.getItemCount();
  }

  function updateActive() {
    const hash = window.location.hash || '#/';
    links.forEach((link) => {
      const href = link.getAttribute('href');
      let active = false;
      if (href === '#/') active = hash === '#/' || hash === '';
      else if (href === '#/shop') active = hash.startsWith('#/shop') || hash.startsWith('#/product/');
      else active = hash.startsWith(href);
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  function closeNav() {
    header.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  }

  toggle.addEventListener('click', () => {
    const open = header.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  const updateCart = () => updateCount();
  window.addEventListener('cart:updated', updateCart);
  window.addEventListener('hashchange', updateActive);
  window.addEventListener('hashchange', closeNav);

  header.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-link]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (href && href.startsWith('#/')) {
      e.preventDefault();
      closeNav();
      if (onRoute) onRoute(href);
    }
  });

  const onKeydown = (e) => {
    if (e.key === 'Escape') closeNav();
  };
  document.addEventListener('keydown', onKeydown);

  updateCount();
  updateActive();

  const cleanup = () => {
    window.removeEventListener('cart:updated', updateCart);
    window.removeEventListener('hashchange', updateActive);
    window.removeEventListener('hashchange', closeNav);
    document.removeEventListener('keydown', onKeydown);
  };
  return { el: header, cleanup };
}
