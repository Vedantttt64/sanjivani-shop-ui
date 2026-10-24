'use client';

import React from 'react';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';
import { useFarmStore } from '@/context/FarmStoreContext';
import { useAddedPopup } from '@/context/AddedPopupContext';

export interface ProductCarouselItem {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  weight: string;
  image: string;
  discountPercent?: number;
  farmOrigin?: string;
  tag?: string;
}

interface ProductCarouselCardProps {
  item: ProductCarouselItem;
  onClickCard?: () => void;
  className?: string;
}

export default function ProductCarouselCard({
  item,
  onClickCard,
  className = '',
}: ProductCarouselCardProps) {
  const { cart, updateQuantity } = useFarmStore();
  const { addWithPopup } = useAddedPopup();

  const cartItem = cart.find((p) => p.id === item.id);
  const quantity = cartItem?.quantity || 0;

  // Calculate discount percentage if not provided
  const discount = item.discountPercent
    ? item.discountPercent
    : item.originalPrice && item.originalPrice > item.price
    ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)
    : 0;

  const handleAdd = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    addWithPopup(
      {
        id: item.id,
        name: item.name,
        category: item.category,
        price: item.price,
        originalPrice: item.originalPrice,
        weight: item.weight,
        image: item.image,
      },
      1,
      e.currentTarget
    );
  };

  const handleIncrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    updateQuantity(item.id, 1);
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    updateQuantity(item.id, -1);
  };

  return (
    <div
      onClick={onClickCard}
      className={`group relative flex flex-col justify-between w-[168px] sm:w-[190px] md:w-[210px] shrink-0 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 snap-start overflow-hidden select-none ${
        onClickCard ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {/* ── Top Half: Image, Discount Badge & Overlapping Add Pill ── */}
      <div className="relative w-full aspect-square bg-[#FAF9F6] p-3 flex items-center justify-center overflow-hidden">
        
        {/* Pink Discount Badge Top-Left */}
        {discount > 0 && (
          <div className="absolute top-0 left-0 bg-[#E11D48] text-white text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-br-lg shadow-xs z-10">
            {discount}% OFF
          </div>
        )}


        {/* Produce Photography */}
        <div className="relative w-full h-full">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 168px, 210px"
            className="object-contain p-2 group-hover:scale-108 transition-transform duration-500 ease-out"
          />
        </div>
      </div>

      {/* ── Bottom Half: Produce Info, Weight & Pricing ── */}
      <div className="p-3 sm:p-3.5 flex flex-col justify-between flex-1 gap-2 bg-white">
        
        {/* Name and Weight */}
        <div>
          <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-2 leading-tight">
            {item.name}
          </h3>
          <p className="text-[11px] font-medium text-slate-500 mt-1">
            {item.weight}
          </p>
        </div>

        {/* Pricing & Add Button in front of price tag at bottom right */}
        <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between gap-1.5">
          <div className="flex items-baseline gap-1.5 min-w-0">
            <span className="text-base sm:text-lg font-black text-slate-900">
              ₹{item.price}
            </span>
            {item.originalPrice && item.originalPrice > item.price && (
              <span className="text-xs font-semibold text-slate-400 line-through">
                ₹{item.originalPrice}
              </span>
            )}
          </div>

          {/* Yellow ADD Pill / Stepper at bottom right */}
          <div className="shrink-0" onClick={(e) => e.stopPropagation()}>
            {quantity === 0 ? (
              <button
                type="button"
                onClick={handleAdd}
                aria-label={`Add ${item.name} to basket`}
                className="flex items-center justify-center gap-1 min-w-[64px] sm:min-w-[70px] h-7 sm:h-8 px-2.5 sm:px-3 rounded-full bg-[#FACC15] hover:bg-[#EAB308] text-slate-900 font-extrabold text-[11px] sm:text-xs uppercase tracking-wider shadow-xs hover:scale-105 active:scale-95 transition-all cursor-pointer border border-amber-400"
              >
                <span>Add</span>
                <Plus className="w-3.5 h-3.5 stroke-[3]" />
              </button>
            ) : (
              <div
                className="flex items-center justify-between gap-1 h-7 sm:h-8 px-1.5 rounded-full bg-[#1B4332] text-white font-extrabold text-xs shadow-xs border border-emerald-800"
              >
                <button
                  type="button"
                  onClick={handleDecrement}
                  aria-label={`Decrease quantity of ${item.name}`}
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-800 hover:bg-emerald-700 flex items-center justify-center text-white active:scale-90 transition-transform cursor-pointer"
                >
                  <Minus className="w-3 h-3 stroke-[3]" />
                </button>
                <span className="w-4 text-center font-bold text-xs">{quantity}</span>
                <button
                  type="button"
                  onClick={handleIncrement}
                  aria-label={`Increase quantity of ${item.name}`}
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-800 hover:bg-emerald-700 flex items-center justify-center text-white active:scale-90 transition-transform cursor-pointer"
                >
                  <Plus className="w-3 h-3 stroke-[3]" />
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
