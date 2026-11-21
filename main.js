/* Nuzzora — SPA router and app entry */
import { cart } from './store/cart.js';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { Landing } from './pages/Landing.js';
import { Shop } from './pages/Shop.js';
import { ProductDetail } from './pages/ProductDetail.js';
import { Cart } from './pages/Cart.js';
import { Checkout } from './pages/Checkout.js';
import { Confirmation } from './pages/Confirmation.js';

// expose products globally for product detail page
import { products } from './data/products.js';
window.__NUZZORA_PRODUCTS__ = products;

const appEl = document.getElementById('app');
const headerEl = document.getElementById('header');
const footerEl = document.getElementById('footer');

let headerInstance = null;
let footerInstance = null;
let currentPage = null;
let currentCleanup = null;

function setTitle(title) {
  document.title = title ? `Nuzzora — ${title}` : 'Nuzzora';
}

function focusApp() {
  if (appEl) {
    appEl.focus();
    appEl.scrollTop = 0;
  }
}

async function mountPage(renderFn, ...args) {
  if (currentPage) {
    if (currentPage.cleanup) currentPage.cleanup();
    if (currentEl) appEl.removeChild(currentEl);
  }
  focusApp();
  setTimeout(() => focusApp(), 50); // ensure focus after render

  const result = renderFn(...args);
  const el = result.el;
  appEl.appendChild(el);
  currentPage = result;
  currentEl = el;

  return result;
}

let currentEl = null;

const routes = [
  { path: /^#\/?$/, page: Landing, title: 'Home' },
  { path: /^#\/shop$/, page: Shop, title: 'Shop' },
  { path: /^#\/product\/([a-z0-9-]+)$/, page: ProductDetail, title: 'Product' },
  { path: /^#\/cart$/, page: Cart, title: 'Cart' },
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
  mountPage(route.page, { onRoute: navigate, ...(params.length ? { id: params[0] } : {}) });
}

function navigate(href) {
  window.location.hash = href;
}

function init() {
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
