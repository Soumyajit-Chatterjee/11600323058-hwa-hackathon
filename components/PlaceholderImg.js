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
}) {
  // Common attributes — width/height as HTML attrs for aspect ratio (layout shift prevention)
  const imgAttrs = {
    alt: desc || 'Image placeholder',
    className,
    width: w,
    height: h,
    loading,
    decoding,
  };

  // If we have both a WebP source and a PNG fallback, use <picture>
  if (src && fallbackSrc) {
    const picture = document.createElement('picture');

    const webpSource = document.createElement('source');
    webpSource.setAttribute('type', 'image/webp');
    webpSource.setAttribute('srcset', srcSet || src);
    if (sizes) webpSource.setAttribute('sizes', sizes);
    picture.appendChild(webpSource);

    const pngSource = document.createElement('source');
    pngSource.setAttribute('type', 'image/png');
    pngSource.setAttribute('srcset', fallbackSrc);
    if (sizes) pngSource.setAttribute('sizes', sizes);
    picture.appendChild(pngSource);

    const img = document.createElement('img');
    Object.entries(imgAttrs).forEach(([key, value]) => {
      img.setAttribute(key, String(value));
    });
    img.src = fallbackSrc;
    img.style.objectFit = 'cover';
    img.style.display = 'block';
    img.style.width = '100%';
    img.style.height = '100%';
    picture.appendChild(img);

    return picture;
  }

  // Single-source image (JPG or standalone WebP)
  const img = document.createElement('img');
  if (src) img.src = src;
  Object.entries(imgAttrs).forEach(([key, value]) => {
    img.setAttribute(key, String(value));
  });
  if (srcSet) img.setAttribute('srcset', srcSet);
  if (sizes) img.setAttribute('sizes', sizes);
  img.style.objectFit = 'cover';
  img.style.display = 'block';
  img.style.width = '100%';
  img.style.height = '100%';
  return img;
}
