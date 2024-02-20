import { writable, get } from 'svelte/store';
import products from '$lib/products'; // Assuming this is the path to your products

function findVariationBySKU(sku: string): Variation | undefined {
  for (const product of products) {
    const variation = product.variations.find((v) => v.sku === sku);
    if (variation) return variation;
  }
  return undefined;
}

export const cartItems = writable<CartItem[]>([]);

export function addToCart(sku: string) {
  let items = get(cartItems);
  let variation = findVariationBySKU(sku);

  // Directly exit if no variation is found, ensuring TypeScript knows
  // `variation` cannot be undefined past this point.
  if (!variation) {
    console.error('Variation not found for SKU:', sku);
    return;
  }

  let itemPosition = items.findIndex((item) => item.product.sku === sku);

  if (itemPosition !== -1) {
    // If already in cart, increment quantity
    cartItems.update(items => items.map((item, index) =>
      index === itemPosition ? { ...item, quantity: item.quantity + 1 } : item));
  } else {
    // Here, TypeScript should understand `variation` cannot be `undefined`
    // Assert variation is Variation when adding to cart
    cartItems.update(items => [...items, { product: variation as Variation, quantity: 1 }]);
  }
}

export function removeFromCart(sku: string) {
  let items = get(cartItems);
  let itemPosition = items.findIndex((item) => item.product.sku === sku);

  if (itemPosition === -1) return; // Item not found, possibly handle this case

  cartItems.update((items) => {
    if (items[itemPosition].quantity - 1 === 0) {
      // If quantity becomes 0, remove the item
      return items.filter((_, index) => index !== itemPosition);
    } else {
      // Otherwise, decrement quantity
      return items.map((item, index) =>
        index === itemPosition ? { ...item, quantity: item.quantity - 1 } : item);
    }
  });
}
