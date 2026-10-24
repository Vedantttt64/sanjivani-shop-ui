'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CategoryTile as CategoryTileType } from '@/app/data/categoryTiles';

interface CategoryTileProps {
  tile: CategoryTileType;
  currentState?: string | null;
  onClick?: () => void;
}

export default function CategoryTile({ tile, currentState, onClick }: CategoryTileProps) {
  const [imgError, setImgError] = useState(false);

  // For State Specials tile, show the current active state
  const isStateSpecials = tile.id === 'state-specials';
  const displayState = currentState || 'Maharashtra';

  // Dev-only console.warn for missing image
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production' && !tile.isCodeDrawn && !tile.image) {
      console.warn(`[CategoryTile] Missing image for slug: ${tile.id}`);
    }
  }, [tile.id, tile.isCodeDrawn, tile.image]);

  const hasImage = Boolean(tile.image) && !imgError && !tile.isCodeDrawn;

  const content = (
    <div className="relative w-full h-full select-none">
      {/* ── Primary Card with Diagonal Tint Split ── */}
      <div
        className="relative w-full h-full rounded-2xl border border-white/60 p-2.5 sm:p-4 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 active:scale-[0.97]"
        style={{
          background: `linear-gradient(135deg, ${tile.tint} 0%, ${tile.tint} 55%, #fafafa 55%, #ffffff 100%)`,
        }}
      >
        {/* Top-Left: Category Label & From Price Subtext */}
        <div className="z-10 text-left pr-1 sm:pr-2">
          {tile.badge === 'deals' && (
            <span className="inline-block mb-1 px-1.5 py-0.5 rounded-full text-[8.5px] sm:text-[9px] font-black uppercase tracking-wider bg-amber-400 text-amber-950 shadow-2xs">
              Deals
            </span>
          )}

          <h3
            className="text-[13px] sm:text-[16px] lg:text-[18px] font-black uppercase leading-[1.12] tracking-tight line-clamp-2"
            style={{ color: tile.tintDark }}
          >
            {tile.label}
          </h3>

          {/* State specials dynamic state subtitle or price subtext */}
          {isStateSpecials ? (
            <span className="text-[9.5px] sm:text-[11px] font-bold text-emerald-800/80 mt-0.5 block truncate">
              {displayState} Map
            </span>
          ) : tile.fromPrice ? (
            <span className="text-[9.5px] sm:text-[11px] font-semibold text-stone-500/90 mt-0.5 block">
              From ₹{tile.fromPrice}
            </span>
          ) : null}
        </div>

        {/* ── Circular Plate Spec A: 58% tile width, 1/1, bottom-right, ~12% overflow, white ring, shadow ── */}
        <div
          className="absolute -right-[6%] -bottom-[6%] w-[58%] aspect-square pointer-events-none z-10"
          aria-hidden="true"
        >
          <div
            className="relative w-full h-full rounded-full border-[3.5px] sm:border-[6px] border-white shadow-[0_4px_14px_rgba(27,67,50,0.14)] sm:shadow-[0_8px_20px_rgba(27,67,50,0.18)] overflow-hidden transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2 group-active:scale-[0.97]"
            style={{
              background: `linear-gradient(135deg, ${tile.tint} 0%, #ffffff 100%)`,
            }}
          >
            {tile.isCodeDrawn || tile.id === 'deals' ? (
              /* Spec A3: Deals = percent badge drawn in code (no photo) */
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-400 to-amber-500 text-white select-none">
                <span className="text-2xl sm:text-3xl font-black leading-none tracking-tighter drop-shadow-xs">
                  %
                </span>
                <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-amber-950/80 mt-0.5">
                  Offers
                </span>
              </div>
            ) : hasImage ? (
              <Image
                src={tile.image}
                alt={tile.imageAlt}
                fill
                sizes="(max-width: 640px) 33vw, 16vw"
                onError={() => {
                  if (process.env.NODE_ENV !== 'production') {
                    console.warn(`[CategoryTile] Missing or failed image for slug: ${tile.id}`);
                  }
                  setImgError(true);
                }}
                className="object-cover object-center"
              />
            ) : (
              /* Spec A5: Missing image = tint-matched gradient plate with category initial in tintDark. Never an icon. */
              <div className="w-full h-full flex items-center justify-center">
                <span
                  className="text-2xl sm:text-3xl font-black tracking-tight select-none uppercase drop-shadow-2xs"
                  style={{ color: tile.tintDark }}
                >
                  {tile.initial || tile.label.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // If tile has direct href, render as Next.js Link
  if (tile.href) {
    return (
      <Link
        href={tile.href}
        onClick={onClick}
        aria-label={`Shop ${tile.label}`}
        className="group relative block aspect-[4/5] sm:aspect-square w-full cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1B4332] rounded-2xl"
      >
        {content}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Shop ${tile.label}`}
      className="group relative block aspect-[4/5] sm:aspect-square w-full cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1B4332] rounded-2xl text-left"
    >
      {content}
    </button>
  );
}
