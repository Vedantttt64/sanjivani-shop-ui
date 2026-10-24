'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ScrollCarouselProps {
  children: React.ReactNode;
  className?: string;
  scrollStepRatio?: number; // ratio of container width to scroll per click (default 0.8)
  ariaLabel?: string;
}

export default function ScrollCarousel({
  children,
  className = '',
  scrollStepRatio = 0.8,
  ariaLabel = 'Product Carousel',
}: ScrollCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    checkScrollability();
    el.addEventListener('scroll', checkScrollability, { passive: true });
    window.addEventListener('resize', checkScrollability);

    return () => {
      el.removeEventListener('scroll', checkScrollability);
      window.removeEventListener('resize', checkScrollability);
    };
  }, [checkScrollability, children]);

  const handleScroll = (direction: 'left' | 'right') => {
    const el = containerRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * scrollStepRatio;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative group/carousel w-full">
      {/* Left Scroll Button */}
      {canScrollLeft && (
        <button
          type="button"
          onClick={() => handleScroll('left')}
          aria-label="Scroll left"
          className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 border border-slate-200/90 shadow-md hover:shadow-lg flex items-center justify-center text-slate-700 hover:text-emerald-800 hover:scale-105 active:scale-95 transition-all cursor-pointer backdrop-blur-xs"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      {/* Scrollable Track */}
      <div
        ref={containerRef}
        aria-label={ariaLabel}
        className={`flex items-stretch gap-3 sm:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide py-3 px-1 ${className}`}
      >
        {children}
      </div>

      {/* Right Scroll Button */}
      {canScrollRight && (
        <button
          type="button"
          onClick={() => handleScroll('right')}
          aria-label="Scroll right"
          className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 border border-slate-200/90 shadow-md hover:shadow-lg flex items-center justify-center text-slate-700 hover:text-emerald-800 hover:scale-105 active:scale-95 transition-all cursor-pointer backdrop-blur-xs"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
