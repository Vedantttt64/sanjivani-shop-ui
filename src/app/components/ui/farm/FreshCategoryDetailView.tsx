'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, Search, Plus, Minus, X, Leaf } from 'lucide-react';
import { FRESH_CATEGORIES, FRESH_PRODUCTS } from '@/app/data/freshCategoriesData';
import { useFarmStore } from '@/context/FarmStoreContext';
import { useAddedPopup } from '@/context/AddedPopupContext';
import CategoryBanner from '@/app/components/ui/farm/CategoryBanner';

interface FreshCategoryDetailViewProps {
  categoryId: string;
  collectionKey?: string | null;
  onBack: () => void;
  onSelectCategory?: (newCatId: string) => void;
}

export default function FreshCategoryDetailView({
  categoryId,
  collectionKey,
  onBack,
}: FreshCategoryDetailViewProps) {
  const { cart, updateQuantity, selectedSubcategory, selectedCollection } = useFarmStore();
  const { addWithPopup } = useAddedPopup();

  const activeCollection = collectionKey || selectedCollection;
  const [activeSubcategoryId, setActiveSubcategoryId] = useState<string>('all');

  useEffect(() => {
    if (selectedSubcategory && selectedSubcategory !== 'all') {
      setActiveSubcategoryId(selectedSubcategory);
    }
  }, [selectedSubcategory]);

  const [searchOpen, setSearchOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState('');

  // Find the selected category definition
  const currentCategory = useMemo(() => {
    return FRESH_CATEGORIES.find((c) => c.id === categoryId) || FRESH_CATEGORIES[0];
  }, [categoryId]);

  // Filter products by category, collectionKey (if festive), and active subcategory
  const filteredProducts = useMemo(() => {
    return FRESH_PRODUCTS.filter((prod) => {
      if (activeCollection) {
        if (prod.categoryId !== currentCategory.id) return false;
      } else {
        if (prod.categoryId !== currentCategory.id) return false;
      }

      // Subcategory filter
      if (activeSubcategoryId !== 'all') {
        if (prod.subcategoryId !== activeSubcategoryId) return false;
      }

      // Local search
      if (localSearch.trim()) {
        const q = localSearch.toLowerCase();
        return (
          prod.name.toLowerCase().includes(q) ||
          prod.subcategoryId.toLowerCase().includes(q)
        );
      }

      return true;
    });
  }, [currentCategory.id, activeSubcategoryId, localSearch, activeCollection]);

  return (
    <div className="w-full bg-[#f6f9f6] flex flex-col items-center select-none pt-0 pb-4 sm:pb-8">
      {/* ── Main Container: Clean full-width layout on mobile, elegant container on tablet/desktop ── */}
      <div className="w-full max-w-7xl mx-auto bg-white sm:rounded-2xl sm:shadow-xs sm:border sm:border-slate-200/90 overflow-hidden flex flex-col relative pb-6 sm:pb-10">
        
        {/* ── 1. Top Header: Back button, Category Title & Search only ── */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-3 sm:px-6 py-2 sm:py-2.5 border-b border-slate-100 flex items-center justify-between shadow-2xs">
          {/* Back button */}
          <button
            onClick={onBack}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full text-slate-800 hover:bg-slate-100 active:scale-90 transition cursor-pointer flex items-center justify-center shrink-0"
            aria-label="Back to home"
            title="Back to home"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
          </button>

          {/* Category Title in Center or Search Bar */}
          <div className="flex-1 text-center px-2 min-w-0">
            {searchOpen ? (
              <div className="relative w-full max-w-sm mx-auto">
                <input
                  type="text"
                  value={localSearch}
                  onChange={(e) => setLocalSearch(e.target.value)}
                  placeholder={`Search in ${currentCategory.name}...`}
                  autoFocus
                  className="w-full pl-9 pr-8 py-1.5 text-xs sm:text-sm border border-emerald-400 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-slate-50 focus:bg-white"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                {localSearch && (
                  <button
                    onClick={() => setLocalSearch('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            ) : (
              <h1 className="text-sm sm:text-lg md:text-xl font-black text-slate-900 tracking-tight truncate">
                {currentCategory.name}
              </h1>
            )}
          </div>

          {/* Right Action: Search only */}
          <div className="flex items-center shrink-0">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full transition cursor-pointer flex items-center justify-center ${
                searchOpen
                  ? 'bg-emerald-50 text-emerald-800'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
              aria-label="Search within category"
            >
              <Search className="w-5 h-5 stroke-[2]" />
            </button>
          </div>
        </div>

        {/* ── 2. Horizontal Top Subcategory Menu ── */}
        <nav
          aria-label="Subcategories"
          className="w-full bg-[#f8faf8] border-b border-slate-200/80 px-2 sm:px-6 py-2 sm:py-3"
        >
          <div className="flex items-start gap-3 sm:gap-5 overflow-x-auto scrollbar-hide py-1 px-1 snap-x scroll-smooth">
            {currentCategory.subcategories.map((subcat) => {
              const isActive = activeSubcategoryId === subcat.id;

              return (
                <button
                  key={subcat.id}
                  type="button"
                  onClick={() => setActiveSubcategoryId(subcat.id)}
                  className={`flex flex-col items-center shrink-0 text-center cursor-pointer group transition-all duration-150 snap-start focus:outline-none min-w-[56px] sm:min-w-[72px] ${
                    isActive ? 'opacity-100' : 'opacity-75 hover:opacity-100'
                  }`}
                >
                  {/* Circular Plate Thumbnail */}
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center overflow-hidden transition-all duration-200 relative ring-2 ${
                      isActive
                        ? 'ring-[#1B4332] scale-105 shadow-md bg-white'
                        : 'ring-slate-200/90 group-hover:ring-slate-300 bg-white'
                    }`}
                  >
                    {subcat.image ? (
                      <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                        <Image
                          src={subcat.image}
                          alt={subcat.name}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full rounded-full flex items-center justify-center bg-gradient-to-br from-emerald-100 to-emerald-200 text-[#1B4332] font-black text-sm sm:text-base">
                        {subcat.name.charAt(0)}
                      </div>
                    )}
                  </div>

                  {/* Subcategory Label */}
                  <span
                    className={`mt-1.5 text-[10px] sm:text-xs leading-tight max-w-[60px] sm:max-w-[76px] text-center line-clamp-2 transition-colors ${
                      isActive
                        ? 'font-extrabold text-[#1B4332]'
                        : 'font-semibold text-slate-700 group-hover:text-slate-900'
                    }`}
                  >
                    {subcat.name}
                  </span>

                  {/* Active Indicator Underline Dot */}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B4332] mt-1" />
                  )}
                </button>
              );
            })}
          </div>
        </nav>

        {/* ── 3. Main Full-Width Content: Banner + Product Card Grid ── */}
        <main className="w-full px-3 py-3 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
          
          {/* Small Rectangle Banner Covering Full Horizontal Width */}
          <CategoryBanner
            categoryKey={currentCategory.id}
            subKey={activeSubcategoryId}
            products={filteredProducts}
            categoryName={currentCategory.name}
          />

          {/* Product Grid directly beneath the banner */}
          {filteredProducts.length === 0 ? (
            <div className="p-8 sm:p-10 text-center bg-slate-50 rounded-2xl border border-slate-200 my-4">
              <Leaf className="w-8 h-8 text-emerald-700 mx-auto" />
              <p className="text-sm font-bold text-slate-800 mt-2">No items found in this section</p>
              <button
                onClick={() => {
                  setActiveSubcategoryId('all');
                  setLocalSearch('');
                }}
                className="mt-3 px-4 py-2 bg-emerald-800 hover:bg-emerald-700 text-white rounded-full text-xs font-bold transition cursor-pointer shadow-xs"
              >
                View all {currentCategory.name}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-2.5 sm:gap-4 pt-1">
              {filteredProducts.map((product) => {
                const inCartItem = cart.find((i) => i.id === product.id);

                return (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
                  >
                    {/* Square image container */}
                    <div className="relative w-full aspect-square bg-[#FAF9F6] p-2 sm:p-2.5 flex items-center justify-center overflow-hidden">
                      {product.discountPercent > 0 && (
                        <div className="absolute top-0 left-0 z-10 bg-[#E11D48] text-white text-[9px] sm:text-[11px] font-black uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded-br-lg shadow-xs">
                          {product.discountPercent}% OFF
                        </div>
                      )}
                      <div className="relative w-full h-full">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 220px"
                          className="object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="p-2 sm:p-3 flex flex-col flex-1 justify-between gap-1.5 sm:gap-2">
                      <div>
                        {/* Title: 2-line clamp, consistent height */}
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-2 leading-snug min-h-[2.4em]">
                          {product.name}
                        </h3>
                        <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-0.5">
                          {product.weight}
                        </p>
                      </div>

                      {/* Price & Add Button Row - Stacks on narrow mobile without horizontal overflow */}
                      <div className="pt-1.5 sm:pt-2 border-t border-slate-100 flex items-center justify-between gap-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-baseline leading-none sm:gap-1 min-w-0">
                          <span className="text-sm sm:text-base font-black text-slate-900">
                            ₹{product.price}
                          </span>
                          {product.originalPrice > product.price && (
                            <span className="text-[9.5px] sm:text-[11px] line-through text-slate-400 font-normal mt-0.5 sm:mt-0">
                              ₹{product.originalPrice}
                            </span>
                          )}
                        </div>

                        <div className="shrink-0">
                          {inCartItem ? (
                            <div className="flex items-center bg-[#fef08a] border border-amber-300 rounded-full px-1 sm:px-1.5 py-0.5 shadow-2xs">
                              <button
                                onClick={() => updateQuantity(product.id, -1)}
                                className="w-5 h-5 flex items-center justify-center font-bold text-slate-900 hover:bg-amber-200 rounded-full transition cursor-pointer"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3 h-3 stroke-[2.5]" />
                              </button>
                              <span className="text-[11px] sm:text-xs font-black text-slate-950 px-1 sm:px-1.5">
                                {inCartItem.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(product.id, 1)}
                                className="w-5 h-5 flex items-center justify-center font-bold text-slate-900 hover:bg-amber-200 rounded-full transition cursor-pointer"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3 h-3 stroke-[2.5]" />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={(e) =>
                                addWithPopup(
                                  {
                                    id: product.id,
                                    name: product.name,
                                    category: product.categoryId,
                                    price: product.price,
                                    originalPrice: product.originalPrice,
                                    weight: product.weight,
                                    image: product.image,
                                  },
                                  1,
                                  e.currentTarget
                                )
                              }
                              className="bg-[#FACC15] hover:bg-[#EAB308] active:scale-95 text-slate-950 text-[11px] sm:text-xs font-black px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-2xs transition-all cursor-pointer border border-amber-400 uppercase tracking-wide"
                            >
                              Add
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
