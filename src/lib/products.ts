type ThemeImage = {
  theme: string;
  img: string;
};

function initProduct(
  id: string,
  name: string,
  basePrice: number,
  slug: string,
  sizes: string[],
  themeImages: ThemeImage[],
  priceOverrides?: Map<string, number>
): Product {
  const variations: Variation[] = [];

  // Iterate through each theme first
  themeImages.forEach(({ theme, img }) => {
    // Then iterate through sizes for each theme
    sizes.forEach(size => {
      const sku = `${id}-${size}-${theme}`;
      const price = priceOverrides?.get(sku) || basePrice;

      variations.push({
        sku: sku,
        size: size,
        theme: theme,
        price: price,
        img: img, // Use the img from the ThemeImage object
      });
    });
  });

  return {
    id: id,
    name: name,
    price: basePrice,
    slug: slug,
    variations: variations,
  };
}

const priceOverrides = new Map<string, number>([
  // ["1-S-Red", 11.99]
]);

const products: Product[] = [
  initProduct(
    '1',
    'cat',
    10.99,
    'tee1',
    ['S', 'M', 'L'],
    [
      { theme: 'white', img: '/img/placeholdertee.png' },
      { theme: 'black', img: '/img/placeholdertee.png' },
    ],
    priceOverrides
  ),
  initProduct(
    '2',
    'dog',
    10.99,
    'tee2',
    ['S', 'M', 'L'],
    [
      { theme: 'white', img: '/img/placeholdertee.png' },
      { theme: 'black', img: '/img/placeholdertee.png' },
    ],
    priceOverrides
  ),
  initProduct(
    '3',
    'bird',
    10.99,
    'tee3',
    ['S', 'M', 'L'],
    [
      { theme: 'white', img: '/img/placeholdertee.png' },
      { theme: 'black', img: '/img/placeholdertee.png' },
    ],
    priceOverrides
  ),
];

export default products;
