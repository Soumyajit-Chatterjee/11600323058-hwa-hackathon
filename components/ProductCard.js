/* ChronoScent — reusable product card */
import { PlaceholderImg } from '../components/PlaceholderImg.js';

export function ProductCard({ product, onSelect }) {
  const card = document.createElement('article');
  card.className = 'card product-card';
  card.setAttribute('data-reveal', '');

  // Ribbon badge (permanent on the starter kit)
  if (product.ribbon) {
    const ribbon = document.createElement('span');
    ribbon.className = 'kit-ribbon';
    ribbon.textContent = product.ribbon;
    card.appendChild(ribbon);
  }

  const imgWrap = document.createElement('div');
  imgWrap.className = 'card-image';
  imgWrap.appendChild(
    PlaceholderImg({
      w: product.image.w,
      h: product.image.h,
      desc: product.image.desc,
      className: 'card-placeholder',
      src: product.image.src,
      srcSet: product.image.srcSet,
      sizes: '(max-width: 768px) calc(100vw - 48px), (max-width: 1100px) 45vw, 520px',
      loading: 'lazy',
      decoding: 'async',
    })
  );

  const tag = document.createElement('span');
  tag.className = product.subscription ? 'kit-tag sub-tag' : 'kit-tag';
  tag.textContent = product.subscription ? 'Subscription' : 'Starter';

  const name = document.createElement('h3');
  name.className = 'card-title';
  name.textContent = product.name;

  const type = document.createElement('p');
  type.className = 'card-type';
  type.textContent = product.productType;

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

  if (product.salePrice && product.salePrice < product.price) {
    const origPrice = document.createElement('span');
    origPrice.className = 'card-orig-price';
    origPrice.textContent = `₹${product.price.toLocaleString()}`;

    const saleTag = document.createElement('span');
    saleTag.className = 'card-sale-tag';
    saleTag.textContent = product.saleLabel;

    priceWrap.appendChild(price);
    priceWrap.appendChild(origPrice);
    priceWrap.appendChild(saleTag);
  } else {
    priceWrap.appendChild(price);
  }

  const desc = document.createElement('p');
  desc.className = 'card-desc';
  desc.textContent = product.summary;

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'btn btn--primary btn--block';
  btn.textContent = product.subscription ? 'Subscribe' : 'Choose this kit';
  btn.addEventListener('click', () => {
    if (onSelect) onSelect(product);
  });

  card.appendChild(imgWrap);
  card.appendChild(tag);
  card.appendChild(name);
  card.appendChild(type);
  card.appendChild(priceWrap);
  card.appendChild(desc);
  card.appendChild(btn);

  return card;
}
