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
  ),

  initProduct(
    '3',
    'tee3',
    10.99,
    'tee3',
    ['S', 'M', 'L'],
    ['white', 'black'],
    priceOverrides
  ),

  initProduct(
    '4',
    'tee4',
    10.99,
    'tee4',
    ['S', 'M', 'L'],
    ['white', 'sea', 'space'],
    priceOverrides
  ),

  initProduct(
    '5',
    'tee5',
    10.99,
    'tee5',
    ['S', 'M', 'L'],
    ['white', 'black', 'space'],
    priceOverrides
  ),

  initProduct(
    '6',
    'tee7',
    10.99,
    'tee6',
    ['S', 'M', 'L'],
    ['white', 'black', 'sea', 'space'],
    priceOverrides
  ),
  initProduct(
    '7',
    'tee7',
    10.99,
    'tee7',
    ['S', 'M', 'L'],
    ['white', 'black', 'sea', 'space'],
    priceOverrides
  ),
  initProduct(
    '8',
    'tee8',
    10.99,
    'tee8',
    ['S', 'M', 'L'],
    ['white', 'black', 'sea', 'space'],
    priceOverrides
  ),
];

export default products;
