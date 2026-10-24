'use client';

import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { getStateSpecialties } from '@/app/data/allStatesSpecialties';
import ScrollCarousel from './ScrollCarousel';
import ProductCarouselCard from './ProductCarouselCard';

interface StateSpecialsCarouselProps {
  stateName?: string;
}

export default function StateSpecialsCarousel({
  stateName = 'Maharashtra',
}: StateSpecialsCarouselProps) {
  const stateConfig = getStateSpecialties(stateName);
  const specialties = stateConfig.specialties;

  const [activeFilterId, setActiveFilterId] = useState<string>('all');
  const displayedItems =
    activeFilterId === 'all'
      ? specialties
      : specialties.filter((s) => s.id === activeFilterId);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
      
      {/* ── Section Header ── */}
      <div className="mb-3">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
          Your State&apos;s Specials - {stateName}
        </h2>
      </div>

      {/* ── Variety Pill Bar Above Carousel (For Quick Filter / Selection) ── */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-2 scrollbar-hide">
        {specialties.map((item) => {
          const isActive = activeFilterId === item.id;
          const cleanLocation = item.location.replace(/\s*\([^)]*\)/g, '').trim();
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setActiveFilterId((prev) => (prev === item.id ? 'all' : item.id));
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                isActive
                  ? 'bg-[#1B4332] text-white shadow-xs font-bold'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              <MapPin className="w-3 h-3 text-amber-500" />
              <span>{cleanLocation}</span>
            </button>
          );
        })}
      </div>

      {/* ── Horizontal Scroll Carousel ── */}
      <ScrollCarousel ariaLabel={`${stateName} Specials Carousel`}>
        {displayedItems.map((crop) => (
          <ProductCarouselCard
            key={crop.id}
            item={{
              id: crop.id,
              name: crop.produceName,
              category: 'fruits',
              price: crop.price,
              originalPrice: crop.originalPrice,
              weight: crop.unit,
              image: crop.image,
              tag: crop.tag,
              farmOrigin: crop.location,
            }}
          />
        ))}
      </ScrollCarousel>
    </section>
  );
}
