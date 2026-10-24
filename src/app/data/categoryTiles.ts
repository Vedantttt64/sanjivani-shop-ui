import { FRESH_PRODUCTS } from './freshCategoriesData';

export interface CategoryTile {
  id: string;
  label: string;
  categoryKey?: string;
  subKey?: string;
  href?: string;
  tint: string;
  tintDark: string;
  image: string;
  imageAlt: string;
  initial: string;
  fromPrice?: number;
  badge?: 'new' | 'deals';
  isCodeDrawn?: boolean;
}

// Helper to compute min price dynamically from FRESH_PRODUCTS
export function getMinPriceForCategory(catId: string, fallback: number): number {
  const matches = FRESH_PRODUCTS.filter((p) => p.categoryId === catId);
  if (!matches || matches.length === 0) return fallback;
  return matches.reduce((min, p) => (p.price < min ? p.price : min), matches[0].price);
}

export const CATEGORY_TILES: CategoryTile[] = [
  {
    id: 'fruits',
    label: 'Fresh Fruits',
    categoryKey: 'fresh-fruits',
    tint: '#dcf5d2',
    tintDark: '#3f6b2a',
    image: '/images/categories/fruits.webp',
    imageAlt: 'Mixed fresh orchard fruit bowl',
    initial: 'F',
    fromPrice: getMinPriceForCategory('fresh-fruits', 48),
  },
  {
    id: 'veggies',
    label: 'Fresh Vegetables',
    categoryKey: 'fresh-vegetables',
    tint: '#fbdcdc',
    tintDark: '#8a2f2f',
    image: '/images/categories/veggies.webp',
    imageAlt: 'Farm fresh vegetable crate with crisp greens and root produce',
    initial: 'V',
    fromPrice: getMinPriceForCategory('fresh-vegetables', 28),
  },
  {
    id: 'grains',
    label: 'Atta, Rice & Grains',
    categoryKey: 'atta-rice-grains',
    tint: '#f5ecd0',
    tintDark: '#7a5a1a',
    image: '/images/categories/grains.webp',
    imageAlt: 'Stone-ground whole wheat atta scoop and traditional unpolished rice',
    initial: 'G',
    fromPrice: getMinPriceForCategory('atta-rice-grains', 58),
  },
  {
    id: 'pulses-dal',
    label: 'Pulses & Dal',
    categoryKey: 'dal-pulses',
    tint: '#e6dcf5',
    tintDark: '#5b3f8a',
    image: '/images/products/pulses and dal/toor-dal-.jpg',
    imageAlt: 'Three bowls of unpolished traditional desi lentils and dals',
    initial: 'D',
    fromPrice: getMinPriceForCategory('dal-pulses', 130),
  },
  {
    id: 'dairy-eggs',
    label: 'Dairy & Farm Eggs',
    categoryKey: 'milk-dairy',
    tint: '#dcecfa',
    tintDark: '#2f5f8a',
    image: '/images/categories/dairy-eggs.webp',
    imageAlt: 'Fresh pasture-raised eggs and pure A2 milk glass',
    initial: 'M',
    fromPrice: getMinPriceForCategory('milk-dairy', 65),
  },
  {
    id: 'oil-ghee',
    label: 'Oil & Pure Ghee',
    categoryKey: 'oil-ghee',
    tint: '#fdf1c4',
    tintDark: '#8a6a12',
    image: '/images/products/oil and pure ghee/cow ghee.jpeg',
    imageAlt: 'A2 bilona desi cow ghee jar and cold-pressed oil bottles',
    initial: 'O',
    fromPrice: getMinPriceForCategory('oil-ghee', 220),
  },
  {
    id: 'spices-masala',
    label: 'Spices & Masala',
    categoryKey: 'masala-spices',
    tint: '#fde0cc',
    tintDark: '#9a4a1c',
    image: '/images/categories/spices-masala.webp',
    imageAlt: 'Bowls of authentic GI-tagged geographic origin spices',
    initial: 'S',
    fromPrice: getMinPriceForCategory('masala-spices', 45),
  },
  {
    id: 'state-specials',
    label: 'My State Specials',
    href: '/#state-map',
    tint: '#d2f0e4',
    tintDark: '#1B4332',
    image: '/images/categories/state-specials.webp',
    imageAlt: 'GI certified Devgad Alphonso mango',
    initial: 'GI',
    fromPrice: 99,
  },
  {
    id: 'seasonal',
    label: 'Seasonal Produce',
    categoryKey: 'fresh-fruits',
    tint: '#cfeee9',
    tintDark: '#1f5f58',
    image: '/images/categories/seasonal.webp',
    imageAlt: 'Seasonal harvest fresh produce',
    initial: 'S',
    fromPrice: 79,
  },
  {
    id: 'subscribe',
    label: 'Subscribe & Save',
    href: '/#subscribe',
    tint: '#ece0f7',
    tintDark: '#5b3f8a',
    image: '/images/categories/subscribe.webp',
    imageAlt: 'Farm harvest delivery crate for recurring subscriptions',
    initial: 'B',
    fromPrice: 199,
  },
  {
    id: 'farmer-stories',
    label: 'Farmer Stories',
    href: '/#farmer-trust',
    tint: '#f4ecdc',
    tintDark: '#5a4a2a',
    image: '/images/categories/farmer-stories.webp',
    imageAlt: 'Smiling Indian partner farmer portrait square crop',
    initial: 'P',
  },
];
