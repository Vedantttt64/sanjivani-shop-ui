'use client';

import React, { Suspense, useState } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import Navbar from '@/app/components/sections/Navbar';
import Footer from '@/app/components/Footer';
import { LEGAL_PRACTICE_AREAS, LegalPracticeArea } from '@/app/data/legalPracticeAreas';
import { X, CheckCircle, PhoneCall } from 'lucide-react';

function LegalPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedSlug = searchParams?.get('area') || null;
  const [activeModalArea, setActiveModalArea] = useState<LegalPracticeArea | null>(null);

  // Sync active modal if URL has ?area=
  React.useEffect(() => {
    if (selectedSlug) {
      const match = LEGAL_PRACTICE_AREAS.find((item) => item.slug === selectedSlug);
      if (match) setActiveModalArea(match);
    }
  }, [selectedSlug]);

  const handleCardClick = (area: LegalPracticeArea) => {
    setActiveModalArea(area);
    const params = new URLSearchParams(window.location.search);
    params.set('area', area.slug);
    router.replace(`/legal?${params.toString()}`, { scroll: false });
  };

  const closeModal = () => {
    setActiveModalArea(null);
    const params = new URLSearchParams(window.location.search);
    params.delete('area');
    const newQuery = params.toString();
    router.replace(newQuery ? `/legal?${newQuery}` : '/legal', { scroll: false });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 antialiased">
      {/* Sanjivani NGO Navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 w-full pt-20 sm:pt-24 pb-16">
        {/* Top Header Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-8 sm:pb-12 text-center">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-extrabold tracking-tight text-[#0F172A] leading-tight max-w-4xl mx-auto">
            India&apos;s Premier Full-Service Law Firm
          </h1>

          {/* Section Divider & Eyebrow / Intro Hierarchy */}
          <div className="mt-8 sm:mt-10 max-w-2xl mx-auto">
            {/* Eyebrow */}
            <p className="text-base sm:text-lg md:text-xl font-bold tracking-[0.22em] text-[#2563EB] uppercase mb-2">
              PRACTICE AREAS
            </p>

            {/* Section heading */}
            <h2 className="text-2xl sm:text-3xl md:text-[2.25rem] font-extrabold text-[#0F172A] tracking-tight">
              Not sure what service you need?
            </h2>

            {/* Supporting text */}
            <p className="mt-2 text-sm sm:text-base md:text-lg text-slate-500 font-normal">
              Browse law firms by practice area.
            </p>
          </div>
        </section>

        {/* Practice Areas 20-Card Grid Section */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {LEGAL_PRACTICE_AREAS.map((area) => (
                <div
                  key={area.id}
                  onClick={() => handleCardClick(area)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleCardClick(area);
                    }
                  }}
                  className="group relative w-full aspect-[1.8/1] rounded-[10px] sm:rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 select-none bg-slate-900"
                >
                  {/* Full-bleed Photographic Background */}
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transform transition-transform duration-500 ease-out group-hover:scale-105"
                    priority={false}
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/35 group-hover:from-black/70 group-hover:via-black/35 group-hover:to-black/25 transition-colors duration-300" />

                  {/* Centered Bold White Title */}
                  <div className="absolute inset-0 flex items-center justify-center p-4 text-center z-10 pointer-events-none">
                    <h3 className="text-white text-base sm:text-lg md:text-[1.2rem] font-bold tracking-normal leading-snug drop-shadow-md">
                      {area.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* Practice Area Detail Modal / Drawer */}
        {activeModalArea && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
            onClick={closeModal}
          >
            <div
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Image */}
              <div className="relative w-full h-44 sm:h-52 bg-slate-900">
                <Image
                  src={activeModalArea.image}
                  alt={activeModalArea.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent" />
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 text-white hover:bg-black/70 backdrop-blur-sm transition z-20"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-blue-400">
                    Sanjivani Legal Aid Network
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold mt-1 text-white">
                    {activeModalArea.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-5 sm:p-6 space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Practice Overview
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {activeModalArea.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Key Advisory & Services
                  </h4>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Dedicated legal consultation and case merit assessment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Drafting, legal notices, representation & compliance review</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Pan-India advocate and senior counsel panel support</span>
                    </li>
                  </ul>
                </div>

                {/* Consultation Action */}
                <div className="pt-4 flex flex-col sm:flex-row gap-2.5">
                  <a
                    href="tel:18002096732"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm transition-colors"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Contact Legal Desk</span>
                  </a>
                  <button
                    onClick={closeModal}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-sm font-medium transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Sanjivani NGO Footer */}
      <Footer />
    </div>
  );
}

export default function LegalPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <LegalPageContent />
    </Suspense>
  );
}
