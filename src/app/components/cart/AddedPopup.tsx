'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ArrowRight, Check, RotateCcw, Sparkles } from 'lucide-react';
import { useFarmStore } from '@/context/FarmStoreContext';
import { useAddedPopup } from '@/context/AddedPopupContext';
import { Z_INDEX } from '@/app/zIndex';
import Mascot from '@/app/components/mascot/Mascot';

export default function AddedPopup() {
  const {
    isOpen,
    activeItem,
    frequentlyBought,
    cartPillRef,
    closePopup,
    updateItemQuantity,
    addWithPopup,
  } = useAddedPopup();

  const { cartTotalPrice, cartTotalCount, setIsCartOpen } = useFarmStore();

  const [mascotPose, setMascotPose] = useState<'basket' | 'cheer'>('basket');
  const [coords, setCoords] = useState<{ top: number; right: number }>({ top: 72, right: 24 });
  const [isHovered, setIsHovered] = useState(false);
  const [lastRemovedItem, setLastRemovedItem] = useState<{ id: string; name: string } | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const mobileCloseTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Free delivery calculation (₹499 threshold)
  const freeDeliveryThreshold = 499;
  const remainingForFreeDelivery = Math.max(0, freeDeliveryThreshold - cartTotalPrice);
  const deliveryPct = Math.min(100, Math.round((cartTotalPrice / freeDeliveryThreshold) * 100));

  // Swap mascot pose from basket to cheer after 600ms
  useEffect(() => {
    if (isOpen) {
      setMascotPose('basket');
      const timer = setTimeout(() => {
        setMascotPose('cheer');
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isOpen, activeItem?.addedTime]);

  // Align desktop popover under header cart pill
  useEffect(() => {
    if (isOpen && cartPillRef.current) {
      const rect = cartPillRef.current.getBoundingClientRect();
      const right = Math.max(16, window.innerWidth - rect.right);
      const top = rect.bottom + 8;
      setCoords({ top, right });
    }
  }, [isOpen, cartPillRef]);

  // Mobile 3.5s auto-close (pauses on touch)
  useEffect(() => {
    if (isOpen && !isHovered) {
      mobileCloseTimerRef.current = setTimeout(() => {
        closePopup();
      }, 3500);
      return () => {
        if (mobileCloseTimerRef.current) clearTimeout(mobileCloseTimerRef.current);
      };
    }
  }, [isOpen, isHovered, activeItem?.addedTime, closePopup]);

  // Close on Escape or click outside
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePopup();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node) &&
        !cartPillRef.current?.contains(e.target as Node)
      ) {
        closePopup();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closePopup, cartPillRef]);

  if (!activeItem) return null;

  const itemSavings =
    activeItem.originalPrice && activeItem.originalPrice > activeItem.price
      ? (activeItem.originalPrice - activeItem.price) * activeItem.quantity
      : 0;

  // Bottom offset on mobile: if items in cart, sticky stack height (~76px) + 8px = 84px
  const mobileBottomOffset = cartTotalCount > 0 ? 84 : 12;

  const handleStepDecrease = () => {
    if (activeItem.quantity === 1) {
      setLastRemovedItem({ id: activeItem.id, name: activeItem.name });
      setTimeout(() => setLastRemovedItem(null), 4000);
    }
    updateItemQuantity(activeItem.id, -1);
  };

  const handleUndo = () => {
    if (lastRemovedItem) {
      addWithPopup(activeItem, 1);
      setLastRemovedItem(null);
    }
  };

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          1. DESKTOP POPOVER (>= 768px): under header cart pill
         ══════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {isOpen && (
          <aside
            role="status"
            aria-live="polite"
            aria-label={`Added ${activeItem.name}, ${cartTotalCount} items in basket, ₹${cartTotalPrice}`}
            ref={popoverRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
            className="fixed hidden md:block w-[360px] bg-white rounded-2xl border border-stone-200 shadow-2xl overflow-hidden select-none"
            style={{
              top: coords.top,
              right: coords.right,
              zIndex: Z_INDEX.popup,
            }}
          >
            {/* Top Caret pointing up at the cart pill */}
            <div
              className="absolute -top-2 right-8 w-4 h-4 bg-white border-t border-l border-stone-200 transform rotate-45 pointer-events-none"
              aria-hidden="true"
            />

            {/* Row 1: Mascot (basket -> cheer) + Title + Close */}
            <div className="flex items-center justify-between px-4 pt-3.5 pb-2.5 border-b border-stone-100 bg-[#f9faf9]">
              <div className="flex items-center gap-2.5">
                <motion.div
                  key={mascotPose}
                  initial={{ scale: 0.6 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                  className="shrink-0"
                >
                  <Mascot pose={mascotPose} size={48} decorative />
                </motion.div>
                <div>
                  <h4 className="text-sm font-black text-[#1B4332] tracking-tight leading-tight">
                    Added to Basket!
                  </h4>
                  <p className="text-[11px] font-medium text-stone-500">
                    {cartTotalCount} item{cartTotalCount === 1 ? '' : 's'} · ₹{cartTotalPrice}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={closePopup}
                className="w-8 h-8 rounded-full hover:bg-stone-200/60 text-stone-500 flex items-center justify-center transition cursor-pointer"
                aria-label="Close notification"
              >
                <X className="w-4 h-4 stroke-[2]" />
              </button>
            </div>

            {/* Item Row: 64px rounded thumb + details + live stepper */}
            <div className="p-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="relative w-16 h-16 rounded-xl border border-stone-200/80 overflow-hidden bg-stone-50 shrink-0">
                  <Image
                    src={activeItem.image}
                    alt={activeItem.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h5 className="text-xs font-black text-slate-900 leading-tight line-clamp-2">
                    {activeItem.name}
                  </h5>
                  <p className="text-[11px] text-stone-500 font-medium mt-0.5">
                    {activeItem.weight}
                  </p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-xs font-black text-slate-900">
                      ₹{activeItem.price * activeItem.quantity}
                    </span>
                    {activeItem.originalPrice && (
                      <span className="text-[10px] text-stone-400 line-through">
                        ₹{activeItem.originalPrice * activeItem.quantity}
                      </span>
                    )}
                  </div>
                </div>

                {/* Live Stepper */}
                <div className="flex items-center bg-[#f6f9f6] border border-emerald-200/80 rounded-lg p-0.5 shrink-0">
                  <button
                    type="button"
                    onClick={handleStepDecrease}
                    className="w-7 h-7 rounded-md hover:bg-emerald-100/70 flex items-center justify-center text-emerald-950 font-bold transition cursor-pointer active:scale-90"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3 h-3 stroke-[2.5]" />
                  </button>
                  <span className="w-6 text-center text-xs font-black text-emerald-950">
                    {activeItem.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateItemQuantity(activeItem.id, 1)}
                    className="w-7 h-7 rounded-md hover:bg-emerald-100/70 flex items-center justify-center text-emerald-950 font-bold transition cursor-pointer active:scale-90"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3 h-3 stroke-[2.5]" />
                  </button>
                </div>
              </div>

              {/* Savings Callout */}
              {itemSavings > 0 && (
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-900 text-[11px] font-bold">
                  <Check className="w-3.5 h-3.5 text-emerald-700 stroke-[3]" />
                  <span>You saved ₹{itemSavings} on this item!</span>
                </div>
              )}

              {/* Free Delivery Bar */}
              <div className="pt-1">
                <div className="flex items-center justify-between text-[11px] font-bold mb-1">
                  {deliveryPct >= 100 ? (
                    <span className="text-emerald-700 font-black inline-flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400 shrink-0" />
                      Free delivery unlocked!
                    </span>
                  ) : (
                    <span className="text-stone-600">
                      Add <strong className="text-emerald-800">₹{remainingForFreeDelivery}</strong> more for free delivery
                    </span>
                  )}
                  <span className="text-[10px] text-stone-400">{deliveryPct}%</span>
                </div>
                <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-[#1B4332] rounded-full transition-all duration-300"
                    style={{ width: `${deliveryPct}%` }}
                  />
                </div>
              </div>

              {/* Frequently Bought Together */}
              {frequentlyBought.length > 0 && (
                <div className="pt-2 border-t border-stone-100">
                  <p className="text-[10px] font-black uppercase tracking-wider text-stone-500 mb-2">
                    Frequently Bought Together
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {frequentlyBought.map((item) => (
                      <div
                        key={item.id}
                        className="p-1.5 rounded-xl border border-stone-100 bg-[#FAF9F6] flex flex-col justify-between"
                      >
                        <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-white mb-1">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="40px"
                            className="object-cover"
                          />
                        </div>
                        <span className="text-[9px] font-bold text-slate-800 line-clamp-1">
                          {item.name}
                        </span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-[10px] font-black text-slate-900">
                            ₹{item.price}
                          </span>
                          <button
                            type="button"
                            onClick={() => addWithPopup(item, 1)}
                            className="w-5 h-5 rounded bg-emerald-700 hover:bg-emerald-800 text-white flex items-center justify-center shadow-2xs transition active:scale-90 cursor-pointer"
                            title={`Add ${item.name}`}
                            aria-label={`Add ${item.name}`}
                          >
                            <Plus className="w-3 h-3 stroke-[3]" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={closePopup}
                    className="flex-1 py-2 text-xs font-bold text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200/80 rounded-xl transition cursor-pointer"
                  >
                    Continue Shopping
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      closePopup();
                      setIsCartOpen(true);
                    }}
                    className="flex-1 py-2 text-xs font-black text-slate-950 bg-[#F59E0B] hover:bg-amber-400 rounded-xl transition shadow-xs flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>View Basket ({cartTotalCount})</span>
                  </button>
                </div>

                <div className="text-center pt-0.5">
                  <button
                    type="button"
                    onClick={() => {
                      closePopup();
                      setIsCartOpen(true);
                    }}
                    className="text-[11px] font-bold text-emerald-800 hover:text-emerald-950 hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </aside>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════════════════════════════════
          2. MOBILE MINI-SHEET (< 768px): slides up above StickyCartBar
         ══════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="status"
            aria-live="polite"
            aria-label={`Added ${activeItem.name}, ${cartTotalCount} items in basket`}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
            onDragEnd={(e, { offset }) => {
              if (offset.y > 40) closePopup();
            }}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
            className="fixed md:hidden left-2 right-2 bg-white rounded-2xl border border-stone-200 shadow-2xl p-3 select-none flex flex-col justify-between"
            style={{
              bottom: mobileBottomOffset,
              maxHeight: 140,
              zIndex: Z_INDEX.popup,
            }}
          >
            {/* Top row: Sanju 48 + thumb 48 + details + stepper right */}
            <div className="flex items-center gap-2.5">
              <div className="shrink-0 -my-1">
                <Mascot pose="basket" size={44} decorative />
              </div>

              <div className="relative w-11 h-11 rounded-lg border border-stone-200 overflow-hidden bg-stone-50 shrink-0">
                <Image
                  src={activeItem.image}
                  alt={activeItem.name}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-xs font-black text-slate-900 leading-tight truncate">
                  {activeItem.name}
                </p>
                <p className="text-[10px] text-stone-500 font-medium">
                  {activeItem.weight} · <strong className="text-slate-900">₹{activeItem.price * activeItem.quantity}</strong>
                </p>
              </div>

              {/* Stepper Right */}
              <div className="flex items-center bg-[#f6f9f6] border border-emerald-200/80 rounded-lg p-0.5 shrink-0">
                <button
                  type="button"
                  onClick={handleStepDecrease}
                  className="w-7 h-7 rounded-md hover:bg-emerald-100 flex items-center justify-center text-emerald-950 font-bold active:scale-90"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3 h-3 stroke-[2.5]" />
                </button>
                <span className="w-5 text-center text-xs font-black text-emerald-950">
                  {activeItem.quantity}
                </span>
                <button
                  type="button"
                  onClick={() => updateItemQuantity(activeItem.id, 1)}
                  className="w-7 h-7 rounded-md hover:bg-emerald-100 flex items-center justify-center text-emerald-950 font-bold active:scale-90"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3 h-3 stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Line 2: Free Delivery Progress text */}
            <div className="mt-1 flex items-center justify-between text-[10px] font-bold text-stone-600 px-0.5">
              {remainingForFreeDelivery > 0 ? (
                <span>Add ₹{remainingForFreeDelivery} more for free delivery</span>
              ) : (
                <span className="text-emerald-700 font-black inline-flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-500 fill-amber-400 shrink-0" />
                  Free delivery unlocked!
                </span>
              )}
              {lastRemovedItem && (
                <button
                  type="button"
                  onClick={handleUndo}
                  className="text-amber-800 font-black underline flex items-center gap-0.5"
                >
                  <RotateCcw className="w-2.5 h-2.5" /> Undo
                </button>
              )}
            </div>

            {/* Line 3: Full-width "View basket" 44px button */}
            <button
              type="button"
              onClick={() => {
                closePopup();
                setIsCartOpen(true);
              }}
              className="mt-1.5 w-full min-h-[44px] rounded-xl bg-[#F59E0B] active:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-xs"
            >
              <span>View Basket ({cartTotalCount})</span>
              <span>•</span>
              <span>₹{cartTotalPrice}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
