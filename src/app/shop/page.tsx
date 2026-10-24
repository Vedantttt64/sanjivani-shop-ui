'use client';

import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import Appbar from '../components/screens/Appbar';
import Explore from '@/app/components/Explore';
import Testimonial from '@/app/components/Testimonial';
import Reviews from '@/app/components/Reviews';
import FaqSection from '@/app/components/FaqSection';
import Download from '@/app/components/Download';
import ChatBot from '@/app/components/ChatBot';
import Footer from '@/app/components/Footer';

import CategoryTileGrid from '@/app/components/ui/farm/CategoryTileGrid';
import StateSpecialsCarousel from '@/app/components/ui/farm/StateSpecialsCarousel';
import CategoryShowcaseCarousels from '@/app/components/ui/farm/CategoryShowcaseCarousels';
import StickyCartBar from '@/app/components/ui/farm/StickyCartBar';
import FreshCategoryDetailView from '@/app/components/ui/farm/FreshCategoryDetailView';
import CartDrawer from '@/app/components/ui/farm/CartDrawer';
import OffersModal from '@/app/components/ui/farm/OffersModal';
import { useFarmStore, FARM_CATEGORIES } from '@/context/FarmStoreContext';
import { useAddedPopup } from '@/context/AddedPopupContext';
import { FRESH_PRODUCTS } from '@/app/data/freshCategoriesData';
import { Search, X, Tag, ShoppingBag } from 'lucide-react';

// Helper to normalize category slugs for the detailed view
function normalizeCategory(cat: string): string {
  switch (cat) {
    case 'veggies':
    case 'vegetables':
      return 'fresh-vegetables';
    case 'fruits':
      return 'fresh-fruits';
    case 'grains':
      return 'atta-rice-grains';
    case 'pulses-dal':
    case 'pulses':
      return 'dal-pulses';
    case 'spices-masala':
    case 'spices':
      return 'masala-spices';
    case 'dairy-eggs':
      return 'milk-dairy';
    default:
      return cat;
  }
}

function ShopMainContent({ stateName }: { stateName: string }) {
  const searchParams = useSearchParams();
  const collectionParam = searchParams ? searchParams.get('collection') : null;
  const searchRef = useRef<HTMLDivElement>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const {
    cart,
    updateQuantity,
    cartTotalCount,
    setIsCartOpen,
    setIsOffersOpen,
    selectedCategory,
    setSelectedCategory,
    selectedCollection,
    setSelectedCollection,
    searchQuery,
    setSearchQuery,
  } = useFarmStore();

  const { addWithPopup } = useAddedPopup();

  // Close search popover on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter products for pure live search
  const matchingProducts = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return FRESH_PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.categoryId.toLowerCase().includes(q) ||
        p.subcategoryId.toLowerCase().includes(q) ||
        p.farmOrigin?.toLowerCase().includes(q)
    ).slice(0, 6);
  }, [searchQuery]);

  // Filter categories for pure live search
  const matchingCategories = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return FARM_CATEGORIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.slug.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Sync collection from searchParams if present
  useEffect(() => {
    if (collectionParam && setSelectedCollection) {
      setSelectedCollection(collectionParam);
      if (selectedCategory === 'all') {
        setSelectedCategory('oil-ghee');
      }
    }
  }, [collectionParam, setSelectedCollection, setSelectedCategory, selectedCategory]);

  // Force scroll to top on initial mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const isDetailView = (selectedCategory !== 'all' && Boolean(selectedCategory)) || Boolean(selectedCollection);
  const normalizedCategory = normalizeCategory(selectedCategory);

  return (
    <div className="relative z-10 pt-14 sm:pt-16 overflow-x-hidden bg-[#f2f1f9]">
      {/* 1. Main Sanjivani Navbar Header */}
      <Appbar />

      {/* Cart Drawer & Offers Modal */}
      <CartDrawer />
      <OffersModal />

      {/* 2. Farm Marketplace Section (in between Navbar and Corporate CSR Partners) */}
      <section className="w-full bg-[#f8fafc] pt-4 sm:pt-6 pb-8 border-b border-stone-200/70">
        
        {/* Search Bar with Offers and Cart beside it (No Name, No Logo) */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-5" ref={searchRef}>
          <div className="flex items-center gap-2.5 sm:gap-3 w-full">
            {/* Search Input Container */}
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onFocus={() => setIsSearchFocused(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchFocused(true);
                }}
                placeholder="Search fresh vegetables, fruits, pulses, grains, oils & spices..."
                className="w-full pl-10 sm:pl-11 pr-9 sm:pr-10 py-2 sm:py-2.5 bg-white hover:bg-stone-50/80 focus:bg-white border border-stone-300 focus:border-[#1B4332] rounded-full text-xs sm:text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#1B4332]/20 transition-all shadow-xs"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3 sm:left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setIsSearchFocused(false);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-0.5 rounded-full cursor-pointer"
                  aria-label="Clear search"
                >
                  <X size={15} />
                </button>
              )}

              {/* Live Search Results Dropdown */}
              {isSearchFocused && searchQuery.trim().length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden z-50 max-h-[380px] flex flex-col">
                  {/* Category shortcuts if any */}
                  {matchingCategories.length > 0 && (
                    <div className="p-2 sm:p-2.5 bg-emerald-50/60 border-b border-emerald-100 flex items-center gap-1.5 overflow-x-auto scrollbar-hide">
                      <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider px-1 shrink-0">Categories:</span>
                      {matchingCategories.map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => {
                            setSelectedCategory(cat.slug);
                            setIsSearchFocused(false);
                            const el = document.getElementById('marketplace');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="inline-flex items-center px-2.5 py-1 bg-white hover:bg-emerald-100 text-stone-800 border border-emerald-200 rounded-full text-[11px] font-semibold whitespace-nowrap transition cursor-pointer shadow-2xs shrink-0"
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Product list */}
                  <div className="flex-1 overflow-y-auto p-2 space-y-1 divide-y divide-stone-100">
                    {matchingProducts.length === 0 ? (
                      <div className="py-6 px-4 text-center flex flex-col items-center">
                        <p className="text-xs font-bold text-stone-800">No produce matching &ldquo;{searchQuery}&rdquo;</p>
                        <p className="text-[11px] text-stone-500 mt-1">Try searching for vegetables, mango, rice, ghee, or dal...</p>
                      </div>
                    ) : (
                      matchingProducts.map((prod) => {
                        const inCart = cart.find((c) => c.id === prod.id);
                        return (
                          <div
                            key={prod.id}
                            className="flex items-center justify-between p-2 rounded-xl hover:bg-emerald-50/40 transition gap-2 sm:gap-3 pt-2"
                          >
                            <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-stone-50 border border-stone-200 p-0.5 relative shrink-0 overflow-hidden flex items-center justify-center">
                                <Image src={prod.image} alt={prod.name} width={40} height={40} className="object-contain" />
                              </div>
                              <div className="min-w-0">
                                <h4 className="text-xs font-bold text-stone-900 truncate">{prod.name}</h4>
                                <div className="flex items-center gap-1.5 text-[10px] text-stone-500">
                                  <span>{prod.weight}</span>
                                  {prod.farmOrigin && (
                                    <>
                                      <span>&bull;</span>
                                      <span className="text-emerald-700 font-semibold truncate">{prod.farmOrigin}</span>
                                    </>
                                  )}
                                </div>
                                <span className="text-xs font-extrabold text-[#1B4332]">
                                  &#8377;{prod.price}
                                </span>
                              </div>
                            </div>

                            <div className="shrink-0">
                              {inCart ? (
                                <div className="flex items-center bg-emerald-50 rounded-full border border-emerald-300 px-1 py-0.5">
                                  <button
                                    type="button"
                                    onClick={() => updateQuantity(prod.id, -1)}
                                    className="w-6 h-6 flex items-center justify-center text-xs font-bold text-emerald-800 hover:bg-emerald-200/50 rounded-full"
                                  >
                                    -
                                  </button>
                                  <span className="text-xs font-bold px-1.5 text-emerald-900">{inCart.quantity}</span>
                                  <button
                                    type="button"
                                    onClick={() => updateQuantity(prod.id, 1)}
                                    className="w-6 h-6 flex items-center justify-center text-xs font-bold text-emerald-800 hover:bg-emerald-200/50 rounded-full"
                                  >
                                    +
                                  </button>
                                </div>
                              ) : (
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    addWithPopup(
                                      {
                                        id: prod.id,
                                        name: prod.name,
                                        category: prod.categoryId,
                                        price: prod.price,
                                        originalPrice: prod.originalPrice,
                                        weight: prod.weight,
                                        image: prod.image,
                                      },
                                      1,
                                      e.currentTarget
                                    );
                                  }}
                                  className="px-3 py-1 bg-[#1B4332] hover:bg-[#2D6A4F] text-white text-[11px] font-bold rounded-full transition shadow-2xs"
                                >
                                  ADD
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Offers Button */}
            <button
              type="button"
              onClick={() => setIsOffersOpen(true)}
              className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 bg-amber-50/60 hover:bg-amber-100 text-amber-900 border border-amber-300 rounded-full text-xs sm:text-sm font-bold transition cursor-pointer shrink-0 shadow-2xs"
            >
              <Tag size={14} className="text-amber-700" />
              <span>Offers</span>
            </button>

            {/* Cart Drawer Trigger */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#1B4332] hover:bg-[#2D6A4F] text-white rounded-full text-xs sm:text-sm font-bold transition shadow-xs cursor-pointer shrink-0"
              title="View Cart"
            >
              <ShoppingBag size={15} />
              <span>Cart</span>
              {cartTotalCount > 0 && (
                <span className="bg-amber-400 text-slate-900 rounded-full px-2 py-0.5 text-[10px] sm:text-[11px] font-black leading-none">
                  {cartTotalCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Dynamic Store View: Detail Category View OR Standard Marketplace */}
        {isDetailView ? (
          <div id="marketplace" className="w-full bg-[#f6f9f6] pt-0 pb-4 sm:pb-6 scroll-mt-12">
            <FreshCategoryDetailView
              categoryId={normalizedCategory}
              collectionKey={selectedCollection}
              onBack={() => {
                setSelectedCategory('all');
                if (setSelectedCollection) setSelectedCollection(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectCategory={(catId) => setSelectedCategory(catId)}
            />
          </div>
        ) : (
          <main className="flex flex-col">
            {/* 1. Category Tile Grid */}
            <CategoryTileGrid />

            {/* 2. State Specials Carousel */}
            <StateSpecialsCarousel stateName={stateName} />

            {/* 3. Category Showcase Carousels */}
            <CategoryShowcaseCarousels />
          </main>
        )}

        {/* Floating Cart Bar */}
        <StickyCartBar />
      </section>

      {/* 3. Bottom Sections: Preserved exactly from Corporate CSR Partners (Explore) down to Footer */}
      <Explore />
      <Testimonial />
      <Reviews />
      <FaqSection />
      <Download />
      <ChatBot />
      <Footer />
    </div>
  );
}

function ShopPageWrapper() {
  const searchParams = useSearchParams();
  const stateFromParams = searchParams ? searchParams.get('state') : null;
  const [activeState, setActiveState] = useState<string>('Maharashtra');

  useEffect(() => {
    if (stateFromParams) {
      sessionStorage.setItem('selectedState', stateFromParams);
      setActiveState(stateFromParams);
    } else {
      const stored = typeof window !== 'undefined' ? sessionStorage.getItem('selectedState') : null;
      if (stored) setActiveState(stored);
    }
  }, [stateFromParams]);

  return <ShopMainContent stateName={activeState} />;
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#F1F5F9]">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#1B4332] border-t-transparent" />
        </div>
      }
    >
      <ShopPageWrapper />
    </Suspense>
  );
}
