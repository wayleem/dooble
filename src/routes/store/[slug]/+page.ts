import type { Load } from "@sveltejs/kit";
import products from "$lib/products";

export const load: Load = ({ params }) => {
  return products.find(p => p.slug === params.slug);
};
