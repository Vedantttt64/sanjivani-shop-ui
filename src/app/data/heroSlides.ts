export interface HeroSlide {
  id: string;
  slug: string;
  eyebrow: string;
  headline: string;
  subtext: string;
  caption: string;
  promoCode: string;
  discountText: string;
  ctaText: string;
  categorySlug: string;
  image: string;
  imageAlt: string;
  mascotPose: 'wave' | 'point';
  mascotLine: string;
  hasOffer: boolean;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'hero-devgad-mango',
    slug: 'devgad-mango',
    eyebrow: 'DIRECT FROM ORCHARDS · GI CERTIFIED #139',
    headline: 'Harvested at Dawn. Delivered by Dusk.',
    subtext: 'Plucked at peak Brix sweetness from coastal laterite soil in Devgad. 100% naturally tree-ripened with zero carbide, packed directly at the farm-gate.',
    caption: 'Partner farmer · Devgad, Ratnagiri',
    promoCode: 'HARVEST25',
    discountText: 'FLAT 25% OFF',
    ctaText: 'Explore Devgad Harvest',
    categorySlug: 'fruits',
    image: '/images/specialties/devgad_alphonso.jpg',
    imageAlt: 'Devgad Alphonso Mango harvest direct from Ratnagiri orchard',
    mascotPose: 'point',
    mascotLine: 'Grab 25% off today',
    hasOffer: true,
  },
  {
    id: 'hero-organic-harvest',
    slug: 'organic-harvest',
    eyebrow: '500+ VERIFIED SMALLHOLDERS · ZERO MIDDLEMEN',
    headline: 'Pure Food from Soil You Can Trace.',
    subtext: 'Every green leaf, root vegetable, and tomato is tested for 218 chemical residues in certified labs. 100% of fair-trade margins return directly to farmer cooperatives.',
    caption: 'Partner harvest collective · Pune Cluster',
    promoCode: 'PUREFARM',
    discountText: 'FLAT ₹100 OFF',
    ctaText: 'Shop Fresh Vegetables',
    categorySlug: 'veggies',
    image: '/images/food.JPG',
    imageAlt: 'Partner farm harvest collective distributing fresh produce',
    mascotPose: 'point',
    mascotLine: 'Fresh from Devgad',
    hasOffer: true,
  },
  {
    id: 'hero-coldpressed-oil',
    slug: 'coldpressed-oil',
    eyebrow: 'COLD-PRESSED KACHI GHANI · A2 BILONA GHEE',
    headline: 'Ancient Stone Milling. Zero Solvents.',
    subtext: 'Traditional wood-churned (bilona) desi cow ghee and single-origin mustard & groundnut oils pressed below 42°C to preserve vital micro-nutrients.',
    caption: 'Partner gaushala & pressers · Saurashtra',
    promoCode: 'BILONA20',
    discountText: '20% OFF',
    ctaText: 'Shop Pure Ghee & Oils',
    categorySlug: 'oil-ghee',
    image: '/images/products/a2-ghee.jpg',
    imageAlt: 'Pure A2 Gir cow bilona ghee and wood-pressed oil jars',
    mascotPose: 'point',
    mascotLine: 'Free delivery above ₹499',
    hasOffer: true,
  },
  {
    id: 'hero-unpolished-dals',
    slug: 'unpolished-dals',
    eyebrow: 'UNPOLISHED HEIRLOOM GRAINS · HIGH FIBER',
    headline: 'Desi Kisan Seed Heritage.',
    subtext: 'Stone-ground whole wheat, traditional unpolished toor & moong dals, and native aromatic Basmati grown without synthetic chemical fertilizers.',
    caption: 'Partner farmer cooperative · Latur District',
    promoCode: 'DESIDAL',
    discountText: '15% OFF',
    ctaText: 'Shop Grains & Dals',
    categorySlug: 'pulses-dal',
    image: '/images/products/toor-dal.jpg',
    imageAlt: 'Unpolished desi toor dal and stone-ground grains',
    mascotPose: 'wave',
    mascotLine: 'Join our farmers',
    hasOffer: false,
  },
];
