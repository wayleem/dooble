// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Locals {}
  // interface PageData {}
  // interface Error {}
  // interface Platform {}
}

declare interface Product {
  id: string,
  name: string,
  price: number,
  variations: Variation[]
  href: string,
}

declare interface Variation {
  sku: string,
  size: string,
  theme: string,
  price: number
}

declare interface CartItem {
  sku: string,
  quantity: number,
}
