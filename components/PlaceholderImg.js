/* ChronoScent — reusable image component (optimized for web performance) */
export function PlaceholderImg({
  w,
  h,
  desc,
  className = '',
  src,
  fallbackSrc,
  srcSet,
  sizes,
  loading = 'lazy',
  decoding = 'async',
  fit = 'contain',
  fetchPriority = '',
}) {
  // Common attributes — width/height as HTML attrs for aspect ratio (layout shift prevention)
  const imgAttrs = {
    alt: desc || 'ChronoScent image',
    class: className,
    width: w,
    height: h,
    loading,
    decoding,
  };

  const applyImageStyles = (img) => {
    img.style.objectFit = fit;
    img.style.display = 'block';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.maxWidth = '100%';
    if (w && h) img.style.aspectRatio = `${w} / ${h}`;
  };

  // If both formats exist, use <picture> with a format-specific fallback.
  if (src && fallbackSrc && src !== fallbackSrc) {
    const picture = document.createElement('picture');
    picture.style.display = 'block';
    picture.style.width = '100%';
    picture.style.height = '100%';

    const webpSource = document.createElement('source');
    webpSource.setAttribute('type', 'image/webp');
    webpSource.setAttribute('srcset', srcSet || src);
    if (sizes) webpSource.setAttribute('sizes', sizes);
    picture.appendChild(webpSource);

    const fallbackSource = document.createElement('source');
    fallbackSource.setAttribute('type', 'image/png');
    fallbackSource.setAttribute('srcset', fallbackSrc);
    if (sizes) fallbackSource.setAttribute('sizes', sizes);
    picture.appendChild(fallbackSource);

    const img = document.createElement('img');
    Object.entries(imgAttrs).forEach(([key, value]) => {
      img.setAttribute(key, String(value));
    });
    if (fetchPriority) img.setAttribute('fetchpriority', fetchPriority);
    img.src = fallbackSrc;
    applyImageStyles(img);
    picture.appendChild(img);

    return picture;
  }

  // Single-source image (PNG, JPG or standalone WebP).
  if (src) {
    const img = document.createElement('img');
    if (srcSet) img.setAttribute('srcset', srcSet);
    if (sizes) img.setAttribute('sizes', sizes);
    Object.entries(imgAttrs).forEach(([key, value]) => {
      img.setAttribute(key, String(value));
    });
    if (fetchPriority) img.setAttribute('fetchpriority', fetchPriority);
    img.src = src;
    applyImageStyles(img);
    return img;
  }

  // Only used when a caller genuinely has no image source.
  const placeholder = document.createElement('div');
  placeholder.className = `placeholder-img ${className}`.trim();
  placeholder.setAttribute('role', 'img');
  placeholder.setAttribute('aria-label', desc || 'ChronoScent image');
  placeholder.style.width = w ? `${w}px` : '100%';
  placeholder.style.height = h ? `${h}px` : 'auto';
  if (w && h) placeholder.style.aspectRatio = `${w} / ${h}`;
  return placeholder;
}
