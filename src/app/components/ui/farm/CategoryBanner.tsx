'use client';

import React, { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import { Percent } from 'lucide-react';
import { getBannerFor } from '@/app/data/getBannerFor';
import { FreshProduct } from '@/app/data/freshCategoriesData';

interface CategoryBannerProps {
  categoryKey: string;
  subKey?: string;
  products?: FreshProduct[];
  categoryName?: string;
  className?: string;
}

export default function CategoryBanner({
  categoryKey,
  subKey = 'all',
  products = [],
  categoryName,
  className = '',
}: CategoryBannerProps) {
  const { banner, isFallback } = useMemo(() => {
    return getBannerFor(categoryKey, subKey);
  }, [categoryKey, subKey]);

  // Compute maximum discount dynamically from real category products
  const maxDiscount = useMemo(() => {
    if (!products || products.length === 0) return 0;
    return Math.max(0, ...products.map((p) => p.discountPercent || 0));
  }, [products]);

  // Fallback title / eyebrow / subtitle if banner metadata not configured
  const displayEyebrow = banner?.eyebrow || 'DIRECT FROM GI-CERTIFIED FARMS';
  const displayTitle = banner?.title || categoryName || 'Fresh Organic Harvest';
  const displaySubtitle =
    banner?.subtitle || 'Zero middlemen, harvested fresh daily and delivered straight from certified soil.';

  // Build category-wise rotation slides strictly within category quarantine
  const slides = useMemo(() => {
    const list: Array<{
      id: string;
      imageDesktop: string;
      imageMobile: string;
      alt: string;
      eyebrow: string;
      title: string;
      subtitle: string;
      discount?: number;
      isProduct?: boolean;
    }> = [];

    // Slide 0: Primary Category Banner
    if (banner) {
      list.push({
        id: 'category-hero',
        imageDesktop: banner.imageDesktop,
        imageMobile: banner.imageMobile,
        alt: banner.alt,
        eyebrow: displayEyebrow,
        title: displayTitle,
        subtitle: displaySubtitle,
        discount: maxDiscount,
        isProduct: false,
      });
    }

    // Additional slides: Top featured items belonging strictly to this category
    if (products && products.length > 0) {
      products.slice(0, 3).forEach((p, idx) => {
        list.push({
          id: `product-slide-${p.id || idx}`,
          imageDesktop: p.image,
          imageMobile: p.image,
          alt: p.name,
          eyebrow: p.farmOrigin ? `DIRECT FROM ${p.farmOrigin.toUpperCase()}` : displayEyebrow,
          title: p.name,
          subtitle: `${p.weight} • Pure & GI-Certified Harvest`,
          discount:
            p.discountPercent ||
            (p.originalPrice && p.originalPrice > p.price
              ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)
              : undefined),
          isProduct: true,
        });
      });
    }

    return list;
  }, [banner, displayEyebrow, displayTitle, displaySubtitle, maxDiscount, products]);

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate every 3.8s when multiple slides exist
  useEffect(() => {
    if (slides.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3800);

    return () => clearInterval(timer);
  }, [slides.length, isPaused]);

  // Reset to first slide when category changes
  useEffect(() => {
    setActiveSlide(0);
  }, [categoryKey, subKey]);

  const currentSlide = slides[activeSlide] || slides[0];

  return (
    <div
      className={`relative w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-xs border border-emerald-950/10 ${className}`}
      data-category-banner={categoryKey}
      data-sub-banner={subKey}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Increased height so imagery and text fit comfortably on all screens */}
      <div className="relative w-full h-[145px] sm:h-[185px] md:h-[215px] bg-[#1B4332] overflow-hidden select-none">
        
        {/* Slides Container */}
        {slides.length > 0 && !isFallback ? (
          slides.map((slide, idx) => {
            const isVisible = idx === activeSlide;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isVisible ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                {slide.isProduct ? (
                  /* Product slide: clean photography on the right with soft backdrop */
                  <div className="absolute right-0 top-0 bottom-0 w-[55%] sm:w-[45%] flex items-center justify-center p-3 sm:p-5">
                    <div className="relative w-full h-full max-h-[125px] sm:max-h-[160px]">
                      <Image
                        src={slide.imageDesktop}
                        alt={slide.alt}
                        fill
                        priority={idx === 0}
                        sizes="(max-width: 640px) 50vw, 300px"
                        className="object-contain drop-shadow-xl"
                      />
                    </div>
                  </div>
                ) : (
                  /* Primary Category Banner slide: Desktop (3:1) & Mobile (2:1) webp images */
                  <>
                    <div className="hidden sm:block absolute inset-0">
                      <Image
                        src={slide.imageDesktop}
                        alt={slide.alt}
                        fill
                        priority={idx === 0}
                        sizes="(max-width: 1024px) 100vw, 1200px"
                        className="object-cover"
                        style={{
                          objectPosition:
                            banner?.focal === 'left'
                              ? 'left center'
                              : banner?.focal === 'center'
                              ? 'center center'
                              : 'right center',
                        }}
                      />
                    </div>
                    <div className="block sm:hidden absolute inset-0">
                      <Image
                        src={slide.imageMobile}
                        alt={slide.alt}
                        fill
                        priority={idx === 0}
                        sizes="100vw"
                        className="object-cover"
                        style={{
                          objectPosition:
                            banner?.focal === 'left'
                              ? 'left center'
                              : banner?.focal === 'center'
                              ? 'center center'
                              : 'right center',
                        }}
                      />
                    </div>
                  </>
                )}
              </div>
            );
          })
        ) : (
          /* Code-made fallback gradient banner (quarantine guaranteed) */
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#1B4332] via-[#2D6A4F] to-[#40916C]"
            style={{
              backgroundColor: banner?.tint || '#1B4332',
            }}
          />
        )}

        {/* 
          Text Scrim: Left on soft forest scrim -> transparent on right
          Allows the right-hand fresh produce imagery to pop brightly
        */}
        <div
          className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#1B4332]/95 via-[#1B4332]/75 sm:via-[#1B4332]/50 to-transparent"
          aria-hidden="true"
        />

        {/* 
          Active Slide Text Content (Left Half)
          Eyebrow, Title, Subtitle, and dynamic Offer badge
        */}
        {currentSlide && (
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 sm:px-6 md:px-8 py-3 max-w-[68%] sm:max-w-[55%]">
            {/* Eyebrow */}
            <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-wider text-emerald-200/95 leading-none mb-1 sm:mb-1.5 drop-shadow-xs truncate">
              {currentSlide.eyebrow}
            </span>

            {/* Title */}
            <h2 className="text-sm sm:text-xl md:text-2xl font-black text-white leading-tight line-clamp-2 drop-shadow-sm">
              {currentSlide.title}
            </h2>

            {/* Subtitle */}
            <p className="mt-1 text-[10px] sm:text-xs md:text-sm text-emerald-100/90 line-clamp-1 leading-snug drop-shadow-xs">
              {currentSlide.subtitle}
            </p>

            {/* Dynamic Offer / Discount badge */}
            {currentSlide.discount && currentSlide.discount > 0 ? (
              <div className="mt-1.5 sm:mt-2.5 inline-flex items-center gap-1 self-start px-2.5 py-0.5 sm:py-1 rounded-full bg-[#f59e0b] text-slate-950 font-black text-[9.5px] sm:text-xs shadow-xs">
                <Percent className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[2.5]" />
                <span>Up to {currentSlide.discount}% OFF</span>
              </div>
            ) : null}
          </div>
        )}

        {/* Category-wise Slide Dots Indicator */}
        {slides.length > 1 && (
          <div className="absolute bottom-2.5 right-3.5 z-30 flex items-center gap-1.5">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  idx === activeSlide ? 'w-4.5 bg-amber-400 shadow-xs' : 'w-1.5 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
