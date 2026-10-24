'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, ChevronUp, Zap, ChevronRight, Truck, Sparkles } from 'lucide-react';
import { FRESH_CATEGORIES, FreshCategory } from '@/app/data/freshCategoriesData';
import { CATEGORY_TILES } from '@/app/data/categoryTiles';
import CategoryTile from './CategoryTile';
import { useFarmStore } from '@/context/FarmStoreContext';

interface FreshCategoryGridProps {
  onSelectCategory: (categoryId: string) => void;
}

export default function FreshCategoryGrid({ onSelectCategory }: FreshCategoryGridProps) {
  const { cartTotalPrice, searchQuery, setSearchQuery, setIsOffersOpen } = useFarmStore();

  const [activeBannerDot, setActiveBannerDot] = useState(0);

  // Delivery calculation (e.g. ₹149 threshold)
  const freeDeliveryThreshold = 149;
  const remainingForFreeDelivery = Math.max(0, freeDeliveryThreshold - cartTotalPrice);

  const filteredCategories = FRESH_CATEGORIES.filter((cat) => {
    if (!searchQuery.trim()) return true;
    return cat.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="w-full bg-[#f6f9f6] flex flex-col items-center">
      {/* ── Outer Mobile/Desktop Wrapper ── */}
      <div className="w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl bg-white shadow-md flex flex-col relative pb-12 sm:pb-14">
        
        {/* ── Top Header Bar matching Image 1 ── */}
        <div className="sticky top-0 z-30 bg-[#e3f9e5] px-4 pt-3 pb-3 border-b border-emerald-100 flex items-center gap-2.5 shadow-2xs">
          {/* Yellow Delivery Slot Badge */}
          <div className="bg-[#fcd34d] px-2.5 py-1 rounded-md text-[11px] font-black text-slate-900 flex flex-col items-center justify-center shrink-0 leading-tight shadow-xs">
            <span className="flex items-center gap-0.5">
              <Zap className="w-3 h-3 fill-slate-950 stroke-none" />
              <span>Tom</span>
            </span>
            <span className="text-[10px] font-extrabold">7 - 11 AM</span>
          </div>

          {/* Search Input matching Screenshot */}
          <div className="relative flex-1">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder='Search for "Fruits"'
                className="w-full pl-9 pr-3 py-2 bg-white rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-500 shadow-2xs"
              />
            </div>
          </div>
        </div>

        {/* ── Festive Promotional Carousel Banner matching Image 1 ── */}
        <div className="p-3 sm:p-4">
          <div className="relative w-full aspect-[21/9] sm:aspect-[2.4/1] rounded-2xl overflow-hidden shadow-sm border border-stone-100 bg-[#fffdf5]">
            <Image
              src="/images/fresh/ganpati_banner.jpg"
              alt="Ganpati Bappa Morya - Celebrate the season of prosperity"
              fill
              priority
              sizes="(max-width: 640px) 100vw, 800px"
              className="object-cover"
            />
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-1.5 mt-2.5">
            {[0, 1, 2, 3, 4].map((dot) => (
              <button
                key={dot}
                onClick={() => setActiveBannerDot(dot)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  activeBannerDot === dot
                    ? 'w-4 bg-slate-700'
                    : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${dot + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── Section Title: Groceries & food ── */}
        <div className="px-4 sm:px-6 pt-2 pb-3 flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            Groceries &amp; food
          </h2>
          <span className="text-xs font-bold text-emerald-800">
            {CATEGORY_TILES.length} Categories
          </span>
        </div>

        {/* ── Category Pastel Tile Grid ── */}
        <div className="px-3 sm:px-5 grid grid-cols-3 sm:grid-cols-4 gap-2.5 sm:gap-4 pb-24">
          {CATEGORY_TILES.map((tile) => (
            <CategoryTile
              key={tile.id}
              tile={tile}
              onClick={() => {
                if (tile.categoryKey) {
                  onSelectCategory(tile.categoryKey);
                } else if (tile.href) {
                  window.location.href = tile.href;
                }
              }}
            />
          ))}
        </div>

        {/* ── Bottom Sticky Free Delivery + Amazon Fresh Branding Bar ── */}
        <div className="fixed bottom-0 left-0 right-0 z-40 flex justify-center pointer-events-none">
          <div className="w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl pointer-events-auto bg-white border-t border-slate-200 shadow-2xl">
            {/* Top row: Shop for ₹X more to get free delivery */}
            <div className="bg-[#f0fdf4] border-b border-emerald-100 px-4 py-2 flex items-center justify-between text-xs text-slate-800">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-emerald-700" />
                <span className="font-medium text-[11px] sm:text-xs">
                  {remainingForFreeDelivery > 0 ? (
                    <>
                      Shop for <strong className="text-emerald-900 font-bold">₹{remainingForFreeDelivery} more</strong> to get free delivery
                    </>
                  ) : (
                    <strong className="text-emerald-800 font-bold inline-flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Free Delivery Unlocked!
                    </strong>
                  )}
                </span>
              </div>

              <button
                onClick={() => setIsOffersOpen(true)}
                className="flex items-center gap-0.5 text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 hover:text-emerald-950 cursor-pointer"
              >
                <span>OFFERS</span>
                <ChevronUp className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Bottom row: All-new Fresh, Same super savings! */}
            <div className="bg-[#bbf7d0] px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <span className="font-extrabold text-sm sm:text-base text-slate-900 tracking-tight font-sans">
                    fresh
                  </span>
                  <div className="h-4 w-px bg-slate-400 mx-1" />
                </div>
                <div className="bg-emerald-600 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-sm italic">
                  All-new Fresh
                </div>
                <span className="text-xs sm:text-sm font-black italic text-slate-900">
                  , Same super savings!
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
