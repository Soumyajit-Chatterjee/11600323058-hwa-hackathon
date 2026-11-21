/* Nuzzora — reusable button */
export function Button({ text, onClick, variant = 'primary', type = 'button', disabled = false, className = '' }) {
  const btn = document.createElement('button');
  btn.type = type;
  btn.className = `btn btn--${variant} ${className}`;
  btn.textContent = text;
  if (disabled) btn.disabled = true;
  if (onClick) btn.addEventListener('click', onClick);
  return btn;
}
