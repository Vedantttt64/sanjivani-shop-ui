'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { FreshSubcategory } from '@/app/data/freshCategoriesData';

interface SidebarRailProps {
  categoryKey: string;
  subcategories: FreshSubcategory[];
  activeSubcategoryId: string;
  onSelectSubcategory: (subcategoryId: string) => void;
  tint?: string;
  tintDark?: string;
  className?: string;
}

export default function SidebarRail({
  categoryKey,
  subcategories,
  activeSubcategoryId,
  onSelectSubcategory,
  tint = '#1B4332',
  tintDark = '#0f291e',
  className = '',
}: SidebarRailProps) {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleImageError = (subId: string, imageSrc?: string) => {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(
        `[SidebarRail] Missing or failed thumb for "${categoryKey}-${subId}" (${imageSrc || 'no image'}). Rendering tint gradient fallback.`
      );
    }
    setFailedImages((prev) => ({ ...prev, [subId]: true }));
  };

  // Keyboard navigation for accessibility: ArrowUp, ArrowDown, Home, End
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex: number | null = null;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      nextIndex = (index + 1) % subcategories.length;
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      nextIndex = (index - 1 + subcategories.length) % subcategories.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = subcategories.length - 1;
    }

    if (nextIndex !== null) {
      const nextSub = subcategories[nextIndex];
      onSelectSubcategory(nextSub.id);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <aside
      className={`w-[72px] sm:w-[96px] shrink-0 bg-[#f4f7f4] border-r border-slate-200 self-stretch sticky top-12 sm:top-14 max-h-[calc(100vh-50px)] overflow-y-auto overscroll-contain py-2 flex flex-col items-center space-y-3 scrollbar-hide select-none transition-all ${className}`}
      role="tablist"
      aria-orientation="vertical"
      aria-label="Subcategories"
    >
      {subcategories.map((subcat, idx) => {
        const isActive = activeSubcategoryId === subcat.id;
        const hasFailed = failedImages[subcat.id];

        return (
          <button
            key={subcat.id}
            ref={(el) => {
              tabRefs.current[idx] = el;
            }}
            role="tab"
            id={`subcat-tab-${subcat.id}`}
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onSelectSubcategory(subcat.id)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            className={`w-full flex flex-col items-center px-1 text-center cursor-pointer group transition-all duration-150 relative min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4332] rounded-lg ${
              isActive ? 'opacity-100' : 'opacity-85 hover:opacity-100'
            }`}
          >
            {/* Active Left 3px Edge Bar */}
            {isActive && (
              <div
                className="absolute left-0 top-1 bottom-1 w-[3px] bg-[#16a34a] sm:bg-[#1B4332] rounded-r-full"
                aria-hidden="true"
              />
            )}

            {/* Circular Plate Thumbnail (48px mobile, 64px desktop) */}
            <div
              className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center overflow-hidden transition-all duration-200 ring-4 ring-white shadow-[0_4px_12px_rgba(27,67,50,0.12)] relative ${
                isActive
                  ? 'scale-[1.04] ring-[#1B4332]/30 shadow-md'
                  : 'group-hover:scale-[1.02] bg-white'
              }`}
            >
              {subcat.isPercent ? (
                /* "Top deals": percent glyph drawn in code (tint background + white % sign, stroke 2.5), NEVER an icon box */
                <div
                  className="w-full h-full rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: tint || '#1B4332' }}
                  aria-hidden="true"
                >
                  <span className="text-xl sm:text-2xl font-black leading-none">%</span>
                </div>
              ) : subcat.image && !hasFailed ? (
                /* Subcategory circular plate WebP image */
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={subcat.image}
                    alt={subcat.name}
                    fill
                    sizes="(max-width: 640px) 48px, 64px"
                    className="object-cover"
                    onError={() => handleImageError(subcat.id, subcat.image)}
                  />
                </div>
              ) : (
                /* Missing thumb fallback: category tint gradient circle + first letter in tintDark */
                <div
                  className="w-full h-full rounded-full flex items-center justify-center bg-gradient-to-br from-emerald-100 to-emerald-200"
                  style={{
                    backgroundColor: `${tint}15`,
                  }}
                  aria-hidden="true"
                >
                  <span
                    className="text-base sm:text-lg font-black select-none"
                    style={{ color: tintDark || '#0f291e' }}
                  >
                    {subcat.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            {/* Subcategory Label */}
            <span
              className={`mt-1.5 text-[10px] sm:text-[11px] leading-tight max-w-[64px] sm:max-w-[84px] break-words line-clamp-2 transition-colors ${
                isActive
                  ? 'font-extrabold text-[#1B4332]'
                  : 'font-semibold text-slate-700 group-hover:text-slate-900'
              }`}
            >
              {subcat.name}
            </span>
          </button>
        );
      })}
    </aside>
  );
}
