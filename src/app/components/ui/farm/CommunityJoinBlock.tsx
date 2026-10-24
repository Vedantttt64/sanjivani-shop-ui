'use client';

import React from 'react';
import Image from 'next/image';
import { Smartphone, Sparkles, CheckCircle2 } from 'lucide-react';
import Mascot from '@/app/components/mascot/Mascot';

export default function CommunityJoinBlock() {
  return (
    <section className="w-full bg-[#f8fafc] px-4 sm:px-6 lg:px-8 pt-6 pb-2 sm:pt-8 sm:pb-3 mb-0">
      <div className="relative max-w-5xl mx-auto">
        {/* Sanju Mascot overlapping bottom-left card edge */}
        <div className="absolute -bottom-6 -left-6 hidden md:block z-10 pointer-events-none drop-shadow-xl">
          <Mascot
            pose="wave"
            size={140}
            placementId="communityQr"
            speechLine="Join our farmer community!"
            animateOnView={true}
          />
        </div>

        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden p-6 sm:p-10 md:pl-28 transition-all hover:shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* ── Left Content & Messaging ── */}
          <div className="flex-1 text-center lg:text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold">
              <Smartphone className="w-4 h-4 text-emerald-600" />
              <span>Mobile Farm Connect</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Join the Sanjivani Farms Community <span className="text-emerald-600">!</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
              Scan to join farmers, consumers &amp; the Sanjivani NGO team. Track live crop harvests, pre-book seasonal GI specialties, and receive harvest notifications direct to your phone.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero Middlemen Access</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Instant Harvest Alerts</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Farmer Direct Chat</span>
              </div>
            </div>
          </div>

          {/* ── Right: QR Code & App Download Badges ── */}
          <div className="flex flex-col sm:flex-row items-center gap-6 shrink-0 bg-stone-50/80 p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-inner">
            
            {/* QR Code Container */}
            <div className="relative flex flex-col items-center gap-2 group">
              <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-xl overflow-hidden bg-white p-2 border-2 border-emerald-700/20 shadow-md group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/qr-community.png"
                  alt="Scan to join Sanjivani Farms Community"
                  fill
                  className="object-contain p-1"
                  priority
                />
              </div>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Scan with Camera
              </span>
            </div>

            {/* Badges Stacked */}
            <div className="flex flex-col items-center sm:items-start justify-center gap-3">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Download App</span>
              </span>

              {/* Google Play Badge */}
              <a
                href="#google-play"
                aria-label="Download on Google Play Store"
                className="w-44 h-12 bg-black hover:bg-slate-900 text-white rounded-xl px-3 flex items-center gap-2.5 shadow-md hover:scale-103 active:scale-97 transition-all cursor-pointer border border-slate-800"
              >
                <svg className="w-6 h-6 fill-current text-white shrink-0" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186A2.298 2.298 0 0 1 3 20.573V3.427c0-.645.244-1.23.609-1.613zm11.238 11.24L4.858 2.656l11.455 6.55-1.466 3.848zm0 1.892l1.465 3.847-11.456 6.55 9.991-10.397zm1.884-1.258l4.47-2.557a1.442 1.442 0 0 0 0-2.502l-4.47-2.557-1.748 3.808 1.748 3.808z" />
                </svg>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[9px] uppercase tracking-wider text-slate-300 font-semibold">GET IT ON</span>
                  <span className="text-sm font-bold tracking-tight text-white mt-0.5">Google Play</span>
                </div>
              </a>

              {/* Apple App Store Badge */}
              <a
                href="#app-store"
                aria-label="Download on Apple App Store"
                className="w-44 h-12 bg-black hover:bg-slate-900 text-white rounded-xl px-3 flex items-center gap-2.5 shadow-md hover:scale-103 active:scale-97 transition-all cursor-pointer border border-slate-800"
              >
                <svg className="w-6 h-6 fill-current text-white shrink-0" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.42c.67-.82 1.13-1.96.99-3.11-1 .04-2.16.67-2.84 1.47-.6.7-1.12 1.83-.98 2.94 1.11.09 2.19-.57 2.83-1.3z" />
                </svg>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[9px] uppercase tracking-wider text-slate-300 font-semibold">Download on the</span>
                  <span className="text-sm font-bold tracking-tight text-white mt-0.5">App Store</span>
                </div>
              </a>
            </div>

          </div>

        </div>
      </div>
      </div>
    </section>
  );
}
