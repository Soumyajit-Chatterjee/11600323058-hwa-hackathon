/* ChronoScent — footer component */
import { brandConfig } from '../data/products.js';

export function Footer() {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="container footer-inner">
      <div class="footer-brand">
        <span class="brand">${brandConfig.name}</span>
        <p class="footer-line">${brandConfig.tagline}</p>
      </div>

      <nav class="footer-nav" aria-label="Footer navigation">
        <a href="#/" data-link>Home</a>
        <a href="#/shop" data-link>Shop</a>
        <a href="#/faq" data-link>FAQ</a>
        <a href="#/contact" data-link>Contact Us</a>
        <a href="#/cart" data-link>Cart</a>
      </nav>

      <div class="footer-notes">
        <p>${brandConfig.footerNote}</p>
      </div>

      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} ${brandConfig.name}. Concept storefront.</span>
        <span>No batteries. No Wi-Fi. No app.</span>
      </div>
    </div>
  `;

  footer.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-link]');
    if (!link) return;
    e.preventDefault();
    window.location.hash = link.getAttribute('href');
  });

  return { el: footer };
}
