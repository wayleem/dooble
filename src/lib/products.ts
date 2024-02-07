function initProduct(
  id: string,
  name: string,
  basePrice: number,
  slug: string,
  sizes: string[],
  themes: string[],
  priceOverrides?: Map<string, number> 
): Product {
  const variations: Variation[] = [];

  sizes.forEach(size => {
    themes.forEach(theme => {
      const sku = `${id}-${size}-${theme}`;
      const price = priceOverrides?.get(sku) || basePrice; // override price if exists, else base price

      variations.push({
        sku: sku,
        size: size,
        theme: theme,
        price: price
      });
    });
  });

  return {
    id: id,
    name: name,
    price: basePrice,
    slug: slug,
    variations: variations
  };
}

const priceOverrides = new Map<string, number>([
  // ["1-S-Red", 11.99]
]);

const products: Product[] = [
  initProduct(
    '1',
    'tee',
    10.99,
    'tee1',
    ['S', 'M', 'L'],
    ['white', 'black', 'sea', 'space'],
    priceOverrides
  ),
  initProduct(
    '2',
    'tee2',
    10.99,
    'tee2',
    ['S', 'M', 'L'],
    ['white', 'black', 'sea', 'space'],
    priceOverrides
  )
];

export default products;
