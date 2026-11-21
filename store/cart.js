/* Nuzzora — cart store (localStorage backed, mock behaviour) */
const STORAGE_KEY = 'nuzzora_cart';

let items = [];
try {
  const raw = localStorage.getItem(STORAGE_KEY);
  items = raw ? JSON.parse(raw) : [];
  if (!Array.isArray(items)) items = [];
} catch (e) {
  items = [];
}

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    // localStorage unavailable; keep in memory only
  }
}

export const cart = {
  items,

  add(productId, variant, qty = 1) {
    const existing = items.find(
      (i) => i.productId === productId && i.variant === variant
    );
    if (existing) {
      existing.qty += qty;
    } else {
      const product = window.__NUZZORA_PRODUCTS__?.find((p) => p.id === productId);
      items.push({
        id: `${productId}-${variant}`,
        productId,
        name: product ? product.name : 'Item',
        price: product ? product.price : 0,
        variant,
        qty,
        imageDesc: product ? product.image.desc : 'Product image placeholder',
      });
    }
    save();
    return items;
  },

  remove(cartId) {
    items = items.filter((i) => i.id !== cartId);
    save();
    return items;
  },

  setQty(cartId, qty) {
    const item = items.find((i) => i.id === cartId);
    if (item) {
      item.qty = Math.max(1, Math.floor(qty));
      if (item.qty < 1) item.qty = 1;
    }
    save();
    return items;
  },

  clear() {
    items = [];
    save();
    return items;
  },

  getItemCount() {
    return items.reduce((sum, i) => sum + i.qty, 0);
  },

  getTotal() {
    return items.reduce((sum, i) => sum + i.price * i.qty, 0);
  },

  getItems() {
    return items.slice();
  },
};
