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
      <p class="footer-notes">${brandConfig.footerNote}</p>
    </div>
  `;
  return { el: footer };
}
