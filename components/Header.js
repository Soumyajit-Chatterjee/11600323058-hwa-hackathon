/* Nuzzora — header / navigation component */
import { cart } from '../store/cart.js';

export function Header({ onRoute }) {
  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = `
    <div class="container header-inner">
      <button class="menu-toggle" aria-label="Open menu" aria-expanded="false">
        <span class="menu-bar"></span>
        <span class="menu-bar"></span>
        <span class="menu-bar"></span>
      </button>
      <a href="#/" class="brand" data-link>Nuzzora</a>
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
  const menuToggle = header.querySelector('.menu-toggle');
  const navLinks = header.querySelector('.nav-links');

  function updateCount() {
    countEl.textContent = cart.getItemCount();
  }

  function toggleMenu() {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('nav--open', !expanded);
  }

  menuToggle.addEventListener('click', toggleMenu);

  // close menu when a link is clicked
  navLinks.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('nav--open');
  });

  // update when cart changes elsewhere
  const updateCart = () => updateCount();
  window.addEventListener('cart:updated', updateCart);

  // delegate nav clicks to router
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

  const cleanup = () => {
    window.removeEventListener('cart:updated', updateCart);
    menuToggle.removeEventListener('click', toggleMenu);
    navLinks.removeEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('nav--open');
    });
  };
  return { el: header, cleanup };
}
