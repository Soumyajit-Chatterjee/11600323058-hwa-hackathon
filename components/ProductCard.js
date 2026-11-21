/* Nuzzora — reusable product card */
import { PlaceholderImg } from '../components/PlaceholderImg.js';

export function ProductCard({ product, onSelect }) {
  const card = document.createElement('article');
  card.className = 'card product-card';
  if (product.featured) card.classList.add('featured');

  const tag = document.createElement('span');
  tag.className = 'kit-tag';
  tag.textContent = product.featured ? 'Best value' : product.name === 'Trail Refill Pack' ? 'Add-on' : 'Starter';

  const name = document.createElement('h3');
  name.className = 'card-title';
  name.textContent = product.name;

  const price = document.createElement('p');
  price.className = 'card-price';
  price.textContent = product.priceText;

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
    })
  );

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'btn btn--primary btn--block';
  btn.textContent = 'Choose this kit';
  btn.addEventListener('click', () => {
    if (onSelect) onSelect(product);
  });

  card.appendChild(tag);
  card.appendChild(imgWrap);
  card.appendChild(name);
  card.appendChild(price);
  card.appendChild(desc);
  card.appendChild(btn);

  return card;
}
