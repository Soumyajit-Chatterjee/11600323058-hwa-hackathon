/* ChronoScent — SPA router and app entry */
import { cart } from './store/cart.js';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { Landing } from './pages/Landing.js';
import { Shop } from './pages/Shop.js';
import { ProductDetail } from './pages/ProductDetail.js';
import { Cart } from './pages/Cart.js';
import { FAQ } from './pages/FAQ.js';
import { Contact } from './pages/Contact.js';
import { Checkout } from './pages/Checkout.js';
import { Confirmation } from './pages/Confirmation.js';

// expose products globally for product detail page
import { products } from './data/products.js';
window.__CHRONOSENT_PRODUCTS__ = products;

const appEl = document.getElementById('app');
const headerEl = document.getElementById('header');
const footerEl = document.getElementById('footer');

let headerInstance = null;
let footerInstance = null;
let currentPage = null;
let currentCleanup = null;

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const canReveal = 'IntersectionObserver' in window && !prefersReducedMotion;
let revealObserver = null;

function setTitle(title) {
  document.title = title ? `ChronoScent — ${title}` : 'ChronoScent';
}

function focusApp() {
  if (appEl) {
    appEl.focus({ preventScroll: true });
  }
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
}

function getRevealObserver() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    );
  }
  return revealObserver;
}

function setupReveals(root) {
  if (!canReveal || !root) return;
  root.querySelectorAll('[data-reveal]').forEach((el) => {
    if (el.classList.contains('is-revealed')) return;
    getRevealObserver().observe(el);
  });
}

async function mountPage(renderFn, ...args) {
  if (currentPage) {
    if (currentPage.cleanup) currentPage.cleanup();
    if (currentEl) appEl.removeChild(currentEl);
  }

  const result = renderFn(...args);
  const el = result.el;
  appEl.appendChild(el);
  currentPage = result;
  currentEl = el;

  focusApp();
  setupReveals(el);

  return result;
}

let currentEl = null;

const routes = [
  { path: /^#\/?$/, page: Landing, title: 'Home' },
  { path: /^#\/shop$/, page: Shop, title: 'Shop' },
  { path: /^#\/product\/([a-z0-9-]+)$/, page: ProductDetail, title: 'Product' },
  { path: /^#\/cart$/, page: Cart, title: 'Cart' },
  { path: /^#\/faq$/, page: FAQ, title: 'FAQ' },
  { path: /^#\/contact$/, page: Contact, title: 'Contact Us' },
  { path: /^#\/checkout$/, page: Checkout, title: 'Checkout' },
  { path: /^#\/confirmation\/([A-Za-z0-9]+)$/, page: Confirmation, title: 'Confirmation' },
];

function resolveRoute(hash) {
  for (const route of routes) {
    const m = hash.match(route.path);
    if (m) {
      return { route, params: m.slice(1) };
    }
  }
  return { route: routes[0], params: [] };
}

function onRouteChange() {
  const hash = window.location.hash || '#/';
  const { route, params } = resolveRoute(hash);

  setTitle(route.title);
  const pageParams = params.length
    ? route.page === Confirmation
      ? { orderId: params[0] }
      : { id: params[0] }
    : {};
  mountPage(route.page, { onRoute: navigate, ...pageParams });
}

function navigate(href) {
  window.location.hash = href;
}

function init() {
  if (canReveal) document.body.classList.add('reveal-ready');

  headerInstance = Header({ onRoute: navigate });
  footerInstance = Footer();
  if (headerEl) headerEl.appendChild(headerInstance.el);
  if (footerEl) footerEl.appendChild(footerInstance.el);

  // update cart badge in header when cart changes
  window.addEventListener('cart:updated', () => {
    const count = headerEl.querySelector('.cart-count');
    if (count) count.textContent = cart.getItemCount();
  });

  window.addEventListener('hashchange', onRouteChange);
  window.addEventListener('load', onRouteChange);
  onRouteChange();
}

init();
