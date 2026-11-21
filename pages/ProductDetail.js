/* ChronoScent — Product details page */
import { getProduct } from '../data/products.js';
import { cart } from '../store/cart.js';
import { PlaceholderImg } from '../components/PlaceholderImg.js';

export function ProductDetail({ id, onRoute }) {
  const product = getProduct(id);
  const section = document.createElement('div');
  section.className = 'page product-detail';

  if (!product) {
    section.innerHTML = `
      <div class="container">
        <h1 class="section-title">Product not found</h1>
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

  const detailItems = product.details
    ? [
        { title: 'Chew resistant outer body', text: product.details.outerBody },
        { title: 'Chrono-Treat chamber', text: product.details.treatChamber },
        { title: 'Thermo-Scent core', text: product.details.scentCore },
        { title: 'Two isolated chambers', text: product.details.isolation },
        { title: 'How to prepare before you leave', text: product.details.preparation },
        { title: 'Your dog’s experience over time', text: product.details.experience },
        { title: 'Refill items available', text: product.details.refillItems },
        { title: 'Cartridge formulations', text: product.details.cartridgeFormulations },
      ].filter((item) => item.text && !/^N\/A/i.test(item.text))
    : [];

  const priceLabel = product.subscription
    ? `₹${product.salePrice.toLocaleString()}/${product.billingCycle}`
    : `₹${(product.salePrice || product.price).toLocaleString()}`;

  section.innerHTML = `
    <div class="container product-container">
      <a class="back-link" href="#/shop" data-link>← Back to shop</a>

      <!-- Top: gallery + purchase information -->
      <div class="product-top">
        <div class="product-gallery">
          <div class="gallery-placeholder">
            ${PlaceholderImg({
              w: product.image.galleryW || product.image.w,
              h: product.image.galleryH || product.image.h,
              desc: product.image.galleryDesc || product.image.desc,
              className: 'gallery-img',
              src: product.image.gallerySrc || product.image.src,
              loading: 'eager',
              decoding: 'async',
              fit: 'contain',
              fetchPriority: 'high'
            }).outerHTML}
          </div>
          <p class="product-note">Concept product — real-world timing, durability and safety require physical testing and veterinary review.</p>
        </div>

        <div class="product-info">
          <p class="product-type">${product.productType}</p>
          <h1 class="product-name">${product.name}</h1>
          <p class="product-summary">${product.summary}</p>

          <div class="product-price-wrap">
            <p class="product-price">${priceLabel}</p>
            ${product.salePrice && product.salePrice < product.price
              ? `<span class="product-orig-price">₹${product.price.toLocaleString()}${product.subscription ? '/' + product.billingCycle : ''}</span>
                 <span class="product-sale-tag">${product.saleLabel}</span>`
              : ''}
          </div>

          <p class="product-desc">${product.description}</p>

          <div class="product-field">
            <h3 class="pick-materials">Materials</h3>
            <ul class="materials-list"></ul>
          </div>

          <div class="product-field">
            <h3 class="pick-size">Pick your size</h3>
            <div class="size-selector" aria-label="Size" role="radiogroup"></div>
          </div>

          ${!product.subscription ? `
          <div class="product-field">
            <h3 class="pick-qty">Quantity</h3>
            <div class="qty-control" aria-label="Quantity">
              <button type="button" class="qty-btn qty--minus" aria-label="Decrease quantity">−</button>
              <input type="number" class="qty-input" value="1" min="1" max="10" aria-label="Quantity" />
              <button type="button" class="qty-btn qty--plus" aria-label="Increase quantity">+</button>
            </div>
          </div>
          ` : ''}

          <div class="product-actions">
            <button type="button" class="btn btn--primary btn--block add-to-cart">
              ${product.subscription ? 'Subscribe' : 'Add to cart'}
            </button>
            <button type="button" class="btn btn--outline btn--block view-cart">View cart</button>
          </div>
          <p class="feedback" role="status" aria-live="polite"></p>
        </div>
      </div>

      <div class="product-divider" role="presentation"></div>

      <!-- Below the divider: specification, chambers, timeline and safety -->
      <div class="product-details">
        <div class="product-details-head" data-reveal>
          <p class="eyebrow">Inside ChronoScent</p>
          <h2 class="section-title">Product details</h2>
        </div>

        <div class="product-info-row">
          <div class="info-card" data-reveal>
            <h4>Includes</h4>
            <ul class="includes-list"></ul>
          </div>
          <div class="info-card" data-reveal style="--reveal-delay: 70ms">
            <h4>Suitable for</h4>
            <div class="suitability-list"></div>
          </div>
          <div class="info-card info-card--safety" data-reveal style="--reveal-delay: 140ms">
            <h4>Safety &amp; care</h4>
            <p>${product.safetyNotes}</p>
          </div>
        </div>

        ${detailItems.length ? `
        <div class="product-details-grid">
          ${detailItems.map((item, i) => `
            <article class="detail-card" data-reveal style="--reveal-delay: ${(i % 2) * 70}ms">
              <span class="detail-index">${String(i + 1).padStart(2, '0')}</span>
              <h3 class="detail-title">${item.title}</h3>
              <p class="detail-desc">${item.text}</p>
            </article>
          `).join('')}
        </div>
        ` : ''}

        ${product.details && product.details.timeline ? `
        <div class="product-timeline" data-reveal>
          <h3>${product.details.timeline.title}</h3>
          <p class="timeline-disclaimer">${product.details.timeline.disclaimer}</p>
          <div class="timeline-grid">
            ${product.details.timeline.stages.map((stage) => `
              <div class="timeline-stage">
                <h4 class="stage-title">${stage.title}</h4>
                <div class="stage-image">
                  ${PlaceholderImg({
                    w: stage.image.w,
                    h: stage.image.h,
                    desc: stage.image.desc,
                    className: 'stage-img',
                    src: stage.image.src,
                    loading: 'lazy',
                    decoding: 'async',
                    fit: 'contain'
                  }).outerHTML}
                </div>
                <p class="stage-desc">${stage.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
        ` : ''}

        ${product.details ? `
        <div class="product-safety-panel" data-reveal>
          <h3>Important safety information</h3>
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

  // Size selection
  let selectedSize = product.sizes[0]?.label || 'Small / Medium';
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
      selectedSize = size.label;
    });
    sizeSelector.appendChild(btn);
  });
  if (sizeSelector.children[0]) {
    sizeSelector.children[0].setAttribute('aria-checked', 'true');
    sizeSelector.children[0].classList.add('size--active');
  }

  // Quantity (shared with the add-to-cart handler below)
  let qty = 1;
  if (!product.subscription) {
    const qtyInput = section.querySelector('.qty-input');
    section.querySelector('.qty--minus').addEventListener('click', () => {
      if (qty > 1) {
        qty -= 1;
        qtyInput.value = qty;
      }
    });
    section.querySelector('.qty--plus').addEventListener('click', () => {
      if (qty < 10) {
        qty += 1;
        qtyInput.value = qty;
      }
    });
    qtyInput.addEventListener('change', () => {
      const v = parseInt(qtyInput.value, 10) || 1;
      qty = Math.max(1, Math.min(10, v));
      qtyInput.value = qty;
    });
  }

  // Add-to-cart feedback
  const feedback = section.querySelector('.feedback');
  const addBtn = section.querySelector('.add-to-cart');
  let feedbackTimer = null;
  addBtn.addEventListener('click', () => {
    const addQty = product.subscription ? 1 : qty;
    cart.add(product.id, selectedSize, addQty);
    window.dispatchEvent(new Event('cart:updated'));

    feedback.textContent = product.subscription
      ? `Subscribed to ${product.name} (${selectedSize}) — ₹${product.salePrice.toLocaleString()}/${product.billingCycle}`
      : `Added ${addQty} × ${product.name} (${selectedSize}) to cart.`;
    feedback.classList.add('is-visible');

    clearTimeout(feedbackTimer);
    feedbackTimer = setTimeout(() => {
      feedback.textContent = '';
      feedback.classList.remove('is-visible');
    }, 3200);
  });

  section.querySelector('.view-cart').addEventListener('click', () => onRoute('#/cart'));

  // Materials
  const materialsList = section.querySelector('.materials-list');
  product.materials.forEach((mat) => {
    const li = document.createElement('li');
    li.textContent = mat;
    materialsList.appendChild(li);
  });

  // Suitability
  const suitabilityList = section.querySelector('.suitability-list');
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

  // Includes
  product.includes.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    section.querySelector('.includes-list').appendChild(li);
  });

  // Internal links (breadcrumb, back-to-shop states)
  section.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-link]');
    if (!link) return;
    e.preventDefault();
    onRoute(link.getAttribute('href'));
  });

  return { el: section };
}
