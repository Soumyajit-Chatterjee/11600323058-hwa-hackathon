/* Nuzzora — reusable image placeholder (accessible, with dimensions + description) */
export function PlaceholderImg({ w, h, desc, className = '' }) {
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
  el.style.border = '1px dashed #c9c9b8';
  el.style.borderRadius = '12px';
  el.style.color = '#7a7a8e';
  el.style.fontSize = '0.85rem';
  el.style.textAlign = 'center';
  el.style.padding = '12px';

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
