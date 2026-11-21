/* Nuzzora — reusable image component (real image with placeholder fallback) */
export function PlaceholderImg({ w, h, desc, className = '', src }) {
  // If a real image source is provided, render an  tag
  if (src) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = desc || 'Product image';
    img.className = className; // no placeholder-img class on real images
    img.style.objectFit = 'contain';
    img.style.borderRadius = '0';
    img.style.border = 'none';
    img.style.background = 'transparent';
    img.style.display = 'block';
    img.style.margin = '0 auto';
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    return img;
  }

  // Fallback placeholder div
  const el = document.createElement('div');
  el.className = `placeholder-img ${className}`;
  el.setAttribute('role', 'img');
  el.setAttribute('aria-label', desc || 'Image placeholder');
  el.style.width = `${w}px`;
  el.style.height = `${h}px`;
  el.style.minHeight = `${h}px`;
  el.style.display = 'flex';
  el.style.flexDirection = 'column';
  el.style.alignItems = 'center';
  el.style.justifyContent = 'center';
  el.style.background = '#eef0e6';
  el.style.border = '1px dashed var(--color-border)';
  el.style.borderRadius = '12px';
  el.style.color = '#7a7a8e';
  el.style.fontSize = '0.85rem';
  el.style.textAlign = 'center';
  el.style.padding = '20px 16px';
  el.style.wordWrap = 'break-word';
  el.style.overflowWrap = 'break-word';
  el.style.maxWidth = '100%';

  const dim = document.createElement('div');
  dim.style.fontWeight = '700';
  dim.style.marginBottom = '6px';
  dim.textContent = `${w} × ${h}`;

  const text = document.createElement('div');
  text.textContent = desc || 'Image placeholder';

  el.appendChild(dim);
  el.appendChild(text);
  return el;
}
