'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { FRESH_PRODUCTS } from '@/app/data/freshCategoriesData';
import { useFarmStore } from '@/context/FarmStoreContext';
import ScrollCarousel from './ScrollCarousel';
import ProductCarouselCard from './ProductCarouselCard';

interface CategoryConfig {
  id: string;
  title: string;
  subtitle: string;
  plateImage: string;
}

const FEATURED_SHOWCASE_CATEGORIES: CategoryConfig[] = [
  {
    id: 'fresh-vegetables',
    title: 'Vegetables',
    subtitle: 'Harvested at dawn, 100% residue-free & crisp',
    plateImage: '/images/categories/veggies.webp',
  },
  {
    id: 'fresh-fruits',
    title: 'Fruits',
    subtitle: 'Naturally tree-ripened orchard fresh fruits',
    plateImage: '/images/categories/fruits.webp',
  },
  {
    id: 'atta-rice-grains',
    title: 'Atta, Rice & Grains',
    subtitle: 'Stone-ground flours & traditional indigenous paddy',
    plateImage: '/images/categories/grains.webp',
  },
  {
    id: 'dal-pulses',
    title: 'Pulses & Dal',
    subtitle: 'Pure unpolished desi dals with natural dietary fiber',
    plateImage: '/images/products/pulses and dal/toor-dal-.jpg',
  },
  {
    id: 'oil-ghee',
    title: 'Wood-Pressed Oil & Pure Ghee',
    subtitle: 'Traditional bilona desi cow ghee & cold-pressed oils',
    plateImage: '/images/products/oil and pure ghee/cow ghee.jpeg',
  },
  {
    id: 'masala-spices',
    title: 'Spices & Masala',
    subtitle: 'Sun-dried aromatic whole spices & chemical-free jaggery',
    plateImage: '/images/categories/spices-masala.webp',
  },
  {
    id: 'milk-dairy',
    title: 'Dairy & Farm Eggs',
    subtitle: 'Pure A2 farm milk & free-range organic country eggs',
    plateImage: '/images/categories/dairy-eggs.webp',
  },
];

export default function CategoryShowcaseCarousels() {
  const { setSelectedCategory } = useFarmStore();

  const handleSeeAll = (catId: string) => {
    setSelectedCategory(catId);
    const el = document.getElementById('marketplace');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-5 py-3 sm:py-4">
      {FEATURED_SHOWCASE_CATEGORIES.map((cat) => {
        const products = FRESH_PRODUCTS.filter((p) => p.categoryId === cat.id);
        if (products.length === 0) return null;

        return (
          <section
            key={cat.id}
            className="bg-white rounded-3xl p-4 sm:p-6 md:p-7 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow"
          >
            {/* Header: Title Left with Produce Plate (Spec B2a), See All Right */}
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
              <div className="flex items-center gap-3">
                {/* Spec B2a: Produce photo in circular plate */}
                <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-white shadow-[0_4px_12px_rgba(27,67,50,0.14)] overflow-hidden shrink-0">
                  <Image
                    src={cat.plateImage}
                    alt={cat.title}
                    fill
                    sizes="48px"
                    className="object-cover object-center"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                    {cat.title}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleSeeAll(cat.id)}
                aria-label={`View All ${cat.title}`}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 transition-colors cursor-pointer shrink-0"
              >
                <span>View All</span>
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Scrollable Product Row */}
            <ScrollCarousel ariaLabel={`${cat.title} Showcase Carousel`}>
              {products.map((p) => (
                <ProductCarouselCard
                  key={p.id}
                  item={{
                    id: p.id,
                    name: p.name,
                    category: p.categoryId,
                    price: p.price,
                    originalPrice: p.originalPrice,
                    weight: p.weight,
                    image: p.image,
                    farmOrigin: p.farmOrigin,
                  }}
                />
              ))}
            </ScrollCarousel>
          </section>
        );
      })}
    </div>
  );
}
