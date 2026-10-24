export interface MarketplaceProduct {
  id: string;
  name: string;
  category: 'veggies' | 'fruits' | 'grains' | 'dairy-eggs' | 'pulses' | 'oil-ghee' | 'spices' | string;
  categoryLabel: string;
  farm: string;
  distanceKm: number;
  rating: number;
  reviewsCount: number;
  price: number;
  originalPrice?: number;
  unit: string;
  image: string;
  isOrganic: boolean;
  isLocalDirect: boolean;
  freshnessTag: string;
  inStock: boolean;
  minQuantity?: number;
  step?: number;
  description?: string;
}

export interface MarketplaceCategory {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export const MARKETPLACE_CATEGORIES: MarketplaceCategory[] = [
  { id: 'all', name: 'All Harvests', icon: '', count: 9 },
  { id: 'fruits', name: 'Fruits', icon: '', count: 1 },
  { id: 'veggies', name: 'Vegetables', icon: '', count: 3 },
  { id: 'pulses-dal', name: 'Pulses & Dal', icon: '', count: 1 },
  { id: 'grains', name: 'Atta, Rice & Grains', icon: '', count: 1 },
  { id: 'dairy-eggs', name: 'Dairy & Eggs', icon: '', count: 1 },
  { id: 'oil-ghee', name: 'Oil & Ghee', icon: '', count: 1 },
  { id: 'spices-masala', name: 'Spices & Masala', icon: '', count: 1 },
];

export const INITIAL_MARKETPLACE_PRODUCTS: MarketplaceProduct[] = [
  {
    id: 'prod-eggs',
    name: 'Pasture-Raised Organic Eggs',
    category: 'dairy-eggs',
    categoryLabel: 'Farm Dairy & Eggs',
    farm: 'Miller Family Farms',
    distanceKm: 9,
    rating: 4.98,
    reviewsCount: 315,
    price: 180,
    originalPrice: 220,
    unit: 'dozen',
    image: '/images/products/organic-eggs.jpg',
    isOrganic: true,
    isLocalDirect: true,
    freshnessTag: 'COLLECTED 4 HOURS AGO',
    inStock: true,
    description: 'Free-roaming hens raised on organic pastures with no antibiotics or synthetic feeds.'
  },
  {
    id: 'prod-apples',
    name: 'Honeycrisp Mountain Apples',
    category: 'fruits',
    categoryLabel: 'Orchard Fruits',
    farm: 'Highland Orchards',
    distanceKm: 14,
    rating: 4.95,
    reviewsCount: 210,
    price: 240,
    originalPrice: 280,
    unit: 'kg',
    image: '/images/products/mountain-apples.jpg',
    isOrganic: true,
    isLocalDirect: false,
    freshnessTag: 'TREE-RIPENED YESTERDAY',
    inStock: true,
    description: 'Crisp, explosively juicy sweet-tart Honeycrisp apples grown at high elevation.'
  },
  {
    id: 'prod-spinach',
    name: 'Hydroponic Tender Spinach',
    category: 'veggies',
    categoryLabel: 'Fresh Vegetables',
    farm: 'Miller Family Farms',
    distanceKm: 9,
    rating: 4.92,
    reviewsCount: 176,
    price: 45,
    originalPrice: 60,
    unit: '250g bunch',
    image: '/images/products/tender-spinach.jpg',
    isOrganic: true,
    isLocalDirect: true,
    freshnessTag: 'HARVESTED 3 HOURS AGO',
    inStock: true,
    description: 'Grown pesticide-free in pure nutrient water, harvested fresh with tender sweet leaves.'
  },
  {
    id: 'prod-tomatoes',
    name: 'Heirloom Vine Tomatoes',
    category: 'veggies',
    categoryLabel: 'Fresh Vegetables',
    farm: 'Green Valley Organics',
    distanceKm: 11,
    rating: 4.91,
    reviewsCount: 142,
    price: 65,
    originalPrice: 80,
    unit: 'kg',
    image: '/images/products/vine-tomatoes.jpg',
    isOrganic: true,
    isLocalDirect: true,
    freshnessTag: 'HARVESTED THIS MORNING',
    inStock: true,
    description: 'Old-world heirloom varieties bursting with natural aroma and deep umami sweetness.'
  },
  {
    id: 'prod-wheat',
    name: 'Stone-Ground Whole Wheat',
    category: 'grains',
    categoryLabel: 'Ancient Grains',
    farm: 'Sahyadri Heritage Mills',
    distanceKm: 18,
    rating: 4.85,
    reviewsCount: 428,
    price: 320,
    originalPrice: 380,
    unit: '5 kg bag',
    image: '/images/products/whole-wheat.jpg',
    isOrganic: true,
    isLocalDirect: false,
    freshnessTag: 'SLOW STONE-MILLED TODAY',
    inStock: true,
    description: 'Cold stone-ground whole wheat preserving complete germ, bran, and essential minerals.'
  },
  {
    id: 'prod-potatoes',
    name: 'Organic Russet Potatoes',
    category: 'veggies',
    categoryLabel: 'Fresh Vegetables',
    farm: 'Krishna River Farms',
    distanceKm: 16,
    rating: 4.82,
    reviewsCount: 95,
    price: 55,
    originalPrice: 70,
    unit: 'kg',
    image: '/images/products/russet-potatoes.jpg',
    isOrganic: true,
    isLocalDirect: true,
    freshnessTag: 'FARM-DUG 24 HOURS AGO',
    inStock: true,
    description: 'Naturally cultivated nutrient-dense potatoes, unbleached with rich earthy taste.'
  },
  {
    id: 'prod-toor-dal',
    name: 'Unpolished Desi Toor Dal',
    category: 'pulses-dal',
    categoryLabel: 'Pulses and Dal',
    farm: 'Latur Organic Collective',
    distanceKm: 24,
    rating: 4.93,
    reviewsCount: 184,
    price: 160,
    originalPrice: 195,
    unit: '1 kg pack',
    image: '/images/products/toor-dal.jpg',
    isOrganic: true,
    isLocalDirect: true,
    freshnessTag: 'NEW SEASON HARVEST',
    inStock: true,
    description: 'Raw unpolished desi arhar toor dal retaining high protein and rich natural aroma.'
  },
  {
    id: 'prod-a2-ghee',
    name: 'Pure A2 Desi Gir Cow Bilona Ghee',
    category: 'oil-ghee',
    categoryLabel: 'Oil and Ghee',
    farm: 'Devgad Gaushala',
    distanceKm: 28,
    rating: 4.99,
    reviewsCount: 512,
    price: 650,
    originalPrice: 780,
    unit: '500 ml jar',
    image: '/images/products/a2-ghee.jpg',
    isOrganic: true,
    isLocalDirect: true,
    freshnessTag: 'WOOD-CHURNED FRESH',
    inStock: true,
    description: 'Handmade cultured curd churned bilona ghee with golden granules and divine aroma.'
  },
  {
    id: 'prod-chilli',
    name: 'Bhiwapur Sun-Dried GI Chillies',
    category: 'spices-masala',
    categoryLabel: 'Spices and Masala',
    farm: 'Nagpur Spice Producers',
    distanceKm: 25,
    rating: 4.94,
    reviewsCount: 220,
    price: 110,
    originalPrice: 135,
    unit: '250g pack',
    image: '/images/specialties/bhiwapur_chilli.jpg',
    isOrganic: true,
    isLocalDirect: true,
    freshnessTag: 'SUN-DRIED NATURAL',
    inStock: true,
    description: 'Authentic GI-tagged fiery red chillies naturally sun-cured with intense color and pungency.'
  }
];
