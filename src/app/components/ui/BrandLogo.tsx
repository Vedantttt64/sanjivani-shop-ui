'use client';

import React, { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useFarmStore } from '@/context/FarmStoreContext';

export interface BrandLogoProps {
  variant?: 'header' | 'drawer' | 'footer' | 'compact' | 'landing';
  className?: string;
  isScrolled?: boolean;
  showTagline?: boolean;
  onClick?: () => void;
}

function BrandLogoLinkInner({
  children,
  onClick,
  className,
  ariaLabel,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className: string;
  ariaLabel: string;
}) {
  const searchParams = useSearchParams();
  const stateParam = searchParams ? searchParams.get('state') : null;
  const { setSelectedCategory } = useFarmStore();

  const activeState =
    stateParam ||
    (typeof window !== 'undefined' ? sessionStorage.getItem('selectedState') : null);

  const href = activeState ? `/?state=${encodeURIComponent(activeState)}` : '/';

  const handleClick = () => {
    setSelectedCategory('all');
    if (onClick) onClick();
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </Link>
  );
}

function BrandLogoLink({
  children,
  onClick,
  className,
  ariaLabel,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className: string;
  ariaLabel: string;
}) {
  return (
    <Suspense
      fallback={
        <Link
          href="/"
          onClick={onClick}
          aria-label={ariaLabel}
          className={className}
        >
          {children}
        </Link>
      }
    >
      <BrandLogoLinkInner
        onClick={onClick}
        className={className}
        ariaLabel={ariaLabel}
      >
        {children}
      </BrandLogoLinkInner>
    </Suspense>
  );
}

export default function BrandLogo({
  variant = 'header',
  className = '',
  isScrolled = false,
  showTagline = true,
  onClick,
}: BrandLogoProps) {
  // 1. Variant: Header (Simple, clean logo without button styling/box/border)
  if (variant === 'header') {
    return (
      <div className={`flex items-center gap-2.5 shrink-0 ${className}`}>
        <BrandLogoLink
          onClick={onClick}
          ariaLabel="Sanjivani Farms, building a better tomorrow"
          className="inline-flex items-center transition-opacity hover:opacity-90 focus-visible:outline-none"
        >
          <div className="relative flex items-center justify-center">
            <Image
              src="/images/sanjivani-logo.png"
              alt="Sanjivani Farms"
              width={105}
              height={70}
              priority
              className={`w-auto object-contain select-none transition-all duration-200 ${
                isScrolled ? 'h-9 sm:h-10' : 'h-10 sm:h-11 md:h-12'
              }`}
            />
          </div>
        </BrandLogoLink>

        {/* Optional slogan/tagline on desktop >=1280px */}
        {showTagline && (
          <div className="hidden xl:flex flex-col justify-center leading-tight max-w-[260px] pointer-events-none select-none">
            <span className="text-[12px] font-bold text-[#1B4332] uppercase tracking-wider truncate">
              Sanjivani Farms
            </span>
            <span className="text-[11px] text-stone-500 font-medium truncate">
              Pure &amp; Natural Organic Farm Produce
            </span>
          </div>
        )}
      </div>
    );
  }

  // 2. Variant: Drawer Header (White chip on Forest green background)
  if (variant === 'drawer') {
    return (
      <BrandLogoLink
        onClick={onClick}
        ariaLabel="Sanjivani Farms, building a better tomorrow"
        className={`group inline-flex items-center gap-2.5 bg-white rounded-xl border border-white/40 shadow-sm px-3 py-1.5 h-[42px] transition-all hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${className}`}
      >
        <div className="relative w-[48px] h-[32px] flex items-center justify-center shrink-0">
          <Image
            src="/images/sanjivani-logo.png"
            alt="Sanjivani Farms, building a better tomorrow"
            width={72}
            height={48}
            className="w-full h-full object-contain select-none"
          />
        </div>
        <div className="flex flex-col text-left leading-none">
          <span className="text-xs font-black text-[#1B4332] tracking-tight">SANJIVANI</span>
          <span className="text-[9px] text-stone-500 font-medium">Farm Direct</span>
        </div>
      </BrandLogoLink>
    );
  }

  // 3. Variant: Footer (White rounded card on dark navy background)
  if (variant === 'footer') {
    return (
      <BrandLogoLink
        onClick={onClick}
        ariaLabel="Sanjivani Farms, building a better tomorrow"
        className={`group inline-flex items-center gap-3 bg-white rounded-2xl border border-stone-200/90 shadow-md px-4 py-2 h-[56px] transition-all hover:-translate-y-px hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${className}`}
      >
        <div className="relative w-[60px] h-[40px] flex items-center justify-center shrink-0">
          <Image
            src="/images/sanjivani-logo.png"
            alt="Sanjivani Farms, building a better tomorrow"
            width={90}
            height={60}
            className="w-full h-full object-contain select-none"
          />
        </div>
        <div className="flex flex-col text-left leading-tight">
          <span className="text-sm font-black text-[#1B4332] tracking-tight">
            SANJIVANI FARMS
          </span>
          <span className="text-[10px] text-stone-500 font-semibold tracking-wide">
            Building a better tomorrow
          </span>
        </div>
      </BrandLogoLink>
    );
  }

  // 4. Variant: Landing (v15: prominent centered mobile & desktop landing logo, transparent bg, unclipped)
  if (variant === 'landing') {
    return (
      <div className={`relative w-[clamp(200px,64vw,300px)] aspect-[4/3] max-h-[140px] flex items-center justify-center mx-auto p-2 overflow-visible select-none ${className}`}>
        <Image
          src="/images/sanjivani-logo.png"
          alt="Sanjivani Farms Logo"
          width={300}
          height={225}
          priority
          sizes="(max-width: 640px) 64vw, 300px"
          className="w-full h-full object-contain drop-shadow-2xs"
        />
      </div>
    );
  }

  // 5. Variant: Compact (e.g. ChatBot or Modal headers)
  return (
    <BrandLogoLink
      onClick={onClick}
      ariaLabel="Sanjivani Farms, building a better tomorrow"
      className={`group inline-flex items-center justify-center bg-white rounded-lg border border-stone-200/80 shadow-2xs px-2 h-[32px] transition-all hover:shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${className}`}
    >
      <div className="relative w-[42px] h-[28px] flex items-center justify-center">
        <Image
          src="/images/sanjivani-logo.png"
          alt="Sanjivani Farms, building a better tomorrow"
          width={63}
          height={42}
          className="w-full h-full object-contain select-none"
        />
      </div>
    </BrandLogoLink>
  );
}
