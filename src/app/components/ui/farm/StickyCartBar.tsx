'use client';

import React from 'react';
import { ShoppingBag, ChevronRight, Sparkles } from 'lucide-react';
import { useFarmStore } from '@/context/FarmStoreContext';
import { Z_INDEX } from '@/app/zIndex';

export default function StickyCartBar() {
  const { cartTotalCount, cartTotalPrice, setIsCartOpen, setIsOffersOpen } = useFarmStore();

  if (cartTotalCount === 0) return null;

  const freeDeliveryThreshold = 499;
  const remainingForFreeDelivery = Math.max(0, freeDeliveryThreshold - cartTotalPrice);

  return (
    <aside
      role="region"
      aria-label="Sticky cart bar"
      className="fixed bottom-0 inset-x-0 md:hidden bg-white border-t border-stone-200/90 shadow-2xl select-none"
      style={{ zIndex: Z_INDEX.sheet }}
    >
      {/* Top Banner: Free delivery progress + Offers */}
      <div className="bg-[#eaf5ee] px-4 py-1.5 flex items-center justify-between text-[11px] font-bold border-b border-emerald-100">
        <div className="flex items-center gap-1.5 text-emerald-950 truncate">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          {remainingForFreeDelivery > 0 ? (
            <span>
              Shop for <strong className="text-emerald-800">₹{remainingForFreeDelivery} more</strong> for FREE delivery
            </span>
          ) : (
            <span className="text-emerald-800 font-extrabold">
              Free Farm Delivery Unlocked!
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => setIsOffersOpen(true)}
          className="text-amber-800 hover:text-amber-950 font-black uppercase text-[10px] tracking-wider shrink-0 cursor-pointer ml-2"
        >
          OFFERS »
        </button>
      </div>

      {/* Main Cart Bar Row */}
      <div className="px-4 py-2.5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="relative w-9 h-9 rounded-full bg-[#1B4332] text-white flex items-center justify-center shrink-0">
            <ShoppingBag className="w-4 h-4 text-emerald-200" />
            <span className="absolute -top-1 -right-1 bg-amber-400 text-stone-950 font-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center border border-white">
              {cartTotalCount}
            </span>
          </div>

          <div>
            <p className="text-xs font-black text-slate-900 leading-tight">
              {cartTotalCount} item{cartTotalCount === 1 ? '' : 's'} · ₹{cartTotalPrice}
            </p>
            <p className="text-[10px] text-stone-500 font-medium">
              Saved with farm direct prices
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          className="min-h-[44px] px-5 rounded-full bg-[#F59E0B] hover:bg-amber-400 active:scale-95 text-slate-950 font-black text-xs uppercase tracking-wider shadow-sm flex items-center gap-1.5 transition cursor-pointer"
        >
          <span>View Basket</span>
          <ChevronRight className="w-4 h-4 stroke-[3]" />
        </button>
      </div>
    </aside>
  );
}
