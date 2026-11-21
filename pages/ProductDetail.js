/* ChronoScent — Product details page */
import { getProduct, brandConfig } from '../data/products.js';
import { cart } from '../store/cart.js';
import { Button } from '../components/Button.js';
import { PlaceholderImg } from '../components/PlaceholderImg.js';

export function ProductDetail({ id, onRoute }) {
  const product = getProduct(id);
  const section = document.createElement('div');
  section.className = 'page product-detail';
  section.style.padding = '72px 0 64px';

  if (!product) {
    section.innerHTML = `
      <div class="container">
        <h1>Product not found</h1>
        <p class="btn-container"><a href="#/shop" class="btn btn--primary" data-link>Back to shop</a></p>
      </div>
    `;
    section.addEventListener('click', (e) => {
      const link = e.target.closest('a[data-link]');
      if (link) {
        e.preventDefault();
        onRoute(link.getAttribute('href'));
      }
    });
    return { el: section };
  }

  section.innerHTML = `
    <div class="container product-container">
      <div class="product-gallery">
        <div class="gallery-placeholder">
          ${PlaceholderImg({ w: 420, h: 560, desc: product.image.desc, className: 'gallery-img', src: product.image.gallerySrc, loading: 'lazy', decoding: 'async' }).outerHTML}
        </div>
      </div>
      <div class="product-info">
        <h1 class="product-name">${product.name}</h1>
        <p class="product-type">${product.productType}</p>
        <p class="product-summary">${product.summary}</p>

        <div class="product-price-wrap">
          <p class="product-price">
            ${product.subscription
              ? `₹${product.salePrice.toLocaleString()}/${product.billingCycle}`
              : `₹${product.salePrice?.toLocaleString() || product.price.toLocaleString()}`}
          </p>
          ${product.salePrice && product.salePrice < product.price
            ? `<span class="product-orig-price">₹${product.price.toLocaleString()}</span>
               <span class="product-sale-tag">${product.saleLabel}</span>`
            : ''}
        </div>

        <p class="product-desc">${product.description}</p>

        <h3 class="pick-materials">Materials</h3>
        <ul class="materials-list"></ul>

        <h3 class="pick-size">Pick your size</h3>
        <div class="size-selector" aria-label="Size" role="radiogroup"></div>

        ${!product.subscription ? `
        <h3 class="pick-qty">Quantity</h3>
        <div class="qty-control" aria-label="Quantity">
          <button type="button" class="qty-btn qty--minus" aria-label="Decrease quantity">−</button>
          <input type="number" class="qty-input" value="1" min="1" max="10" aria-label="Quantity" />
          <button type="button" class="qty-btn qty--plus" aria-label="Increase quantity">+</button>
        </div>
        ` : ''}

        <div class="product-actions">
          <button type="button" class="btn btn--primary btn--block add-to-cart">
            ${product.subscription ? 'Subscribe' : 'Add to cart'}
          </button>
          <button type="button" class="btn btn--outline btn--block view-cart">View cart</button>
        </div>
        <p class="feedback" role="status" aria-live="polite"></p>

        <div class="product-includes">
          <h4>Includes</h4>
          <ul class="includes-list"></ul>
        </div>

        <div class="product-safety">
          <h4>Safety &amp; care</h4>
          <p>${product.safetyNotes}</p>
        </div>

        <!-- Detailed product explainer sections -->
        ${product.details ? `
        <div class="product-details">
          <h2 class="section-title">Product details</h2>

          <div class="detail-section card">
            <h3 class="card-title">Chew resistant outer body</h3>
            <p class="card-desc">${product.details.outerBody}</p>
          </div>

          <div class="detail-section card">
            <h3 class="card-title">Chrono-Treat chamber</h3>
            <p class="card-desc">${product.details.treatChamber}</p>
          </div>

          <div class="detail-section card">
            <h3 class="card-title">Thermo-Scent core</h3>
            <p class="card-desc">${product.details.scentCore}</p>
          </div>

          <div class="detail-section card">
            <h3 class="card-title">Two isolated chambers</h3>
            <p class="card-desc">${product.details.isolation}</p>
          </div>

          <div class="detail-section card">
            <h3 class="card-title">How to prepare before you leave</h3>
            <p class="card-desc">${product.details.preparation}</p>
          </div>

          <div class="detail-section card">
            <h3 class="card-title">Your dog’s experience over time</h3>
            <p class="card-desc">${product.details.experience}</p>
          </div>

          <div class="detail-section card">
            <h3 class="card-title">Refill items available</h3>
            <p class="card-desc">${product.details.refillItems}</p>
          </div>

          <div class="detail-section card">
            <h3 class="card-title">Cartridge formulations</h3>
            <p class="card-desc">${product.details.cartridgeFormulations}</p>
          </div>

          <div class="timeline-section card">
            <h3 class="card-title">${product.details.timeline.title}</h3>
            <p class="card-desc timeline-disclaimer">${product.details.timeline.disclaimer}</p>
            <div class="timeline-grid">
              ${product.details.timeline.stages.map((stage) => `
                <div class="timeline-stage card">
                  <h4 class="stage-title">${stage.title}</h4>
                  <div class="stage-image">
                    ${PlaceholderImg({
                      w: 300,
                      h: 300,
                      desc: stage.imageDesc,
                      className: 'stage-img',
                      src: stage.imageSrc,
                      fallbackSrc: stage.imageFallback,
                      loading: 'lazy',
                      decoding: 'async'
                    }).outerHTML}
                  </div>
                  <p class="stage-desc">${stage.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="product-safety-panel card">
          <h3 class="card-title">Important safety information</h3>
          <ul class="safety-list">
            <li>ChronoScent is a concept product. Introduce it to your dog under supervision during the first few sessions.</li>
            <li>Inspect the base, cartridges, warming disc, and scent strip before every use.</li>
            <li>Replace any component that shows tears, cracks, or damage immediately.</li>
            <li>Base your choice of Standard or Endurance cartridges on your own dog’s chewing behaviour and strength.</li>
            <li>Microwave heating, edible barriers, and locking mechanisms are not certified until independently verified.</li>
          </ul>
        </div>
        ` : ''}
      </div>
    </div>
  `;

  const sizeSelector = section.querySelector('.size-selector');
  product.sizes.forEach((size) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'size-btn';
    btn.setAttribute('role', 'radio');
    btn.setAttribute('aria-checked', 'false');
    btn.textContent = size.label;
    const detail = document.createElement('span');
    detail.className = 'size-detail';
    detail.textContent = size.detail;
    btn.appendChild(detail);
    btn.addEventListener('click', () => {
      sizeSelector.querySelectorAll('.size-btn').forEach((b) => {
        b.setAttribute('aria-checked', 'false');
        b.classList.remove('size--active');
      });
      btn.setAttribute('aria-checked', 'true');
      btn.classList.add('size--active');
      window.__SELECTED_SIZE__ = size.label;
    });
    sizeSelector.appendChild(btn);
  });
  if (product.sizes[0]) {
    sizeSelector.children[0].setAttribute('aria-checked', 'true');
    sizeSelector.children[0].classList.add('size--active');
    window.__SELECTED_SIZE__ = product.sizes[0].label;
  }

  if (!product.subscription) {
    let qty = 1;
    const qtyInput = section.querySelector('.qty-input');
    section.querySelector('.qty--minus').addEventListener('click', () => {
      if (qty > 1) { qty--; qtyInput.value = qty; }
    });
    section.querySelector('.qty--plus').addEventListener('click', () => {
      if (qty < 10) { qty++; qtyInput.value = qty; }
    });
    qtyInput.addEventListener('change', () => {
      const v = parseInt(qtyInput.value, 10) || 1;
      qty = Math.max(1, Math.min(10, v));
      qtyInput.value = qty;
    });
  }

  const feedback = section.querySelector('.feedback');
  const addBtn = section.querySelector('.add-to-cart');
  addBtn.addEventListener('click', () => {
    const size = window.__SELECTED_SIZE__ || product.sizes[0]?.label || 'Small / Medium';
    const variant = size;
    cart.add(product.id, variant, product.subscription ? 1 : 1);
    window.dispatchEvent(new Event('cart:updated'));
    feedback.textContent = product.subscription
      ? `Subscribed to ${product.name} (${size}) — ₹${product.salePrice.toLocaleString()}/${product.billingCycle}`
      : `Added ${qty} × ${product.name} (${size}) to cart.`;
    setTimeout(() => { feedback.textContent = ''; }, 2500);
  });

  section.querySelector('.view-cart').addEventListener('click', () => onRoute('#/cart'));

  // Materials list
  const materialsList = section.querySelector('.materials-list');
  product.materials.forEach((mat) => {
    const li = document.createElement('li');
    li.textContent = mat;
    materialsList.appendChild(li);
  });

  // Suitability list
  const suitabilityList = section.querySelector('.suitability-list');
  if (suitabilityList) {
    product.suitability.forEach((s) => {
      const item = document.createElement('div');
      item.className = 'suitability-item';
      const strong = document.createElement('strong');
      strong.textContent = s.label;
      const p = document.createElement('p');
      p.textContent = s.detail;
      item.appendChild(strong);
      item.appendChild(p);
      suitabilityList.appendChild(item);
    });
  }

  // Includes list
  product.includes.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    section.querySelector('.includes-list').appendChild(li);
  });

  return { el: section };
}
