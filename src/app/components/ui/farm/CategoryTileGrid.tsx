'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { CATEGORY_TILES, CategoryTile as CategoryTileType } from '@/app/data/categoryTiles';
import { useFarmStore } from '@/context/FarmStoreContext';
import CategoryTile from './CategoryTile';

export default function CategoryTileGrid() {
  const searchParams = useSearchParams();
  const currentState = searchParams ? searchParams.get('state') : null;

  const { selectCategoryAndSubcategory } = useFarmStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTileClick = (tile: CategoryTileType) => {
    if (tile.categoryKey) {
      selectCategoryAndSubcategory(tile.categoryKey, tile.subKey || 'all');
      const el = document.getElementById('marketplace');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (tile.id === 'state-specials') {
      const el = document.getElementById('state-specials-section') || document.getElementById('state-map');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-3 pb-3 sm:pb-4 select-none">

      {/* ── Responsive Tile Grid: 3 cols mobile, 4 cols tablet, 6 cols desktop ── */}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5 pb-2">
        {!mounted
          ? // Zero-CLS Skeleton Shimmer Placeholders
            Array.from({ length: CATEGORY_TILES.length }).map((_, idx) => (
              <div
                key={idx}
                className="aspect-[4/5] sm:aspect-square w-full rounded-2xl bg-stone-100 animate-pulse border border-stone-200/60"
              />
            ))
          : CATEGORY_TILES.map((tile) => (
              <div key={tile.id} className="block">
                <CategoryTile
                  tile={tile}
                  currentState={currentState}
                  onClick={() => handleTileClick(tile)}
                />
              </div>
            ))}
      </div>
    </section>
  );
}
