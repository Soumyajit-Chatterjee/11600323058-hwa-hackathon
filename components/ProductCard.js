/* ChronoScent — reusable product card */
import { PlaceholderImg } from '../components/PlaceholderImg.js';

export function ProductCard({ product, onSelect }) {
  const card = document.createElement('article');
  card.className = 'card product-card';

  // Ribbon badge (permanent on Full Kit / Refill)
  if (product.ribbon) {
    const ribbon = document.createElement('span');
    ribbon.className = 'kit-ribbon';
    ribbon.textContent = product.ribbon;
    card.appendChild(ribbon);
  }

  // Subscription badge for refill pack
  if (product.subscription) {
    const subBadge = document.createElement('span');
    subBadge.className = 'kit-tag sub-tag';
    subBadge.textContent = 'Subscription';
    card.appendChild(subBadge);
  } else {
    const tag = document.createElement('span');
    tag.className = 'kit-tag';
    tag.textContent = product.name === 'Scent Refill Pack' ? 'Add-on' : 'Starter';
    card.appendChild(tag);
  }

  const name = document.createElement('h3');
  name.className = 'card-title';
  name.textContent = product.name;

  const type = document.createElement('p');
  type.className = 'card-type';
  type.textContent = product.productType;

  // Price block with sale pricing
  const priceWrap = document.createElement('div');
  priceWrap.className = 'card-price-wrap';

  const price = document.createElement('p');
  price.className = 'card-price';

  if (product.subscription && product.salePrice) {
    price.textContent = `₹${product.salePrice.toLocaleString()}/${product.billingCycle}`;
  } else if (product.salePrice) {
    price.textContent = `₹${product.salePrice.toLocaleString()}`;
  } else {
    price.textContent = `₹${product.price.toLocaleString()}`;
  }

  const origPrice = document.createElement('span');
  origPrice.className = 'card-orig-price';

  if (product.salePrice && product.salePrice < product.price) {
    origPrice.textContent = `₹${product.price.toLocaleString()}`;
    const saleTag = document.createElement('span');
    saleTag.className = 'card-sale-tag';
    saleTag.textContent = product.saleLabel;
    priceWrap.appendChild(saleTag);
  }

  priceWrap.appendChild(origPrice);
  priceWrap.appendChild(price);

  const desc = document.createElement('p');
  desc.className = 'card-desc';
  desc.textContent = product.summary;

  const imgWrap = document.createElement('div');
  imgWrap.className = 'card-image';
  imgWrap.appendChild(
    PlaceholderImg({
      w: product.image.w,
      h: product.image.h,
      desc: product.image.desc,
      className: 'card-placeholder',
      src: product.image.src,
      fallbackSrc: product.image.fallbackSrc,
      srcSet: `${product.image.src.replace('.webp', '_400x400.webp')} 400w, ${product.image.src} 500w`,
      sizes: '(max-width: 768px) 100vw, 33vw',
      loading: 'lazy',
      decoding: 'async',
    })
  );

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'btn btn--primary btn--block';
  btn.textContent = product.subscription ? 'Subscribe' : 'Choose this kit';
  btn.addEventListener('click', () => {
    if (onSelect) onSelect(product);
  });

  // Hover-to-highlight: highlight this card on mouseenter, remove on mouseleave
  card.addEventListener('mouseenter', () => {
    document.querySelectorAll('.product-card').forEach((c) => c.classList.remove('highlighted'));
    card.classList.add('highlighted');
  });

  card.appendChild(name);
  card.appendChild(type);
  card.appendChild(priceWrap);
  card.appendChild(desc);
  card.appendChild(imgWrap);
  card.appendChild(btn);

  return card;
}
