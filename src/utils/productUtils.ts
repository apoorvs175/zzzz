import { Product } from '../data/products';

/**
 * Calculates the price range (min and max) from a product's denominations
 * @param product - The product object
 * @returns An object with min and max price values
 */
export function getPriceRange(product: Product): { min: number; max: number } {
  if (!product.denominations || product.denominations.length === 0) {
    return { min: 0, max: 0 };
  }

  const prices = product.denominations.map((denom) => denom.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);

  return { min, max };
}

/**
 * Formats the price range as a string (e.g., "₹100 - ₹1,800")
 * @param product - The product object
 * @param currency - The currency symbol (default: '₹')
 * @returns Formatted price range string
 */
export function formatPriceRange(product: Product, currency: string = '₹'): string {
  const { min, max } = getPriceRange(product);
  
  if (min === 0 && max === 0) {
    return 'Price not available';
  }

  const formatPrice = (price: number) => {
    return price.toLocaleString('en-IN');
  };

  if (min === max) {
    return `${currency}${formatPrice(min)}`;
  }

  return `${currency}${formatPrice(min)} - ${currency}${formatPrice(max)}`;
}

