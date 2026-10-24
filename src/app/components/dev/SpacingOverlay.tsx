'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

interface GapMeasurement {
  id: string;
  fromName: string;
  toName: string;
  gapPx: number;
  topPx: number;
  isOverLimit: boolean;
  limitPx: number;
}

export default function SpacingOverlay() {
  const searchParams = useSearchParams();
  const enabled = searchParams ? searchParams.get('spacing') === '1' : false;

  const [measurements, setMeasurements] = useState<GapMeasurement[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!enabled || !isMounted) return;

    const measureGaps = () => {
      const sections = Array.from(document.querySelectorAll('main > section, main section, footer'));
      const newMeasurements: GapMeasurement[] = [];
      const isMobile = window.innerWidth < 1024;

      for (let i = 0; i < sections.length - 1; i++) {
        const curr = sections[i] as HTMLElement;
        const next = sections[i + 1] as HTMLElement;

        const currRect = curr.getBoundingClientRect();
        const nextRect = next.getBoundingClientRect();

        const scrollY = window.scrollY || window.pageYOffset;
        const gap = Math.round(nextRect.top - currRect.bottom);
        const top = Math.round(currRect.bottom + scrollY);

        const currId = curr.id || curr.getAttribute('aria-label') || curr.tagName.toLowerCase() + `-${i}`;
        const nextId = next.id || next.getAttribute('aria-label') || next.tagName.toLowerCase() + `-${i + 1}`;

        // Reviews -> FAQ limit is 64px desktop / 40px mobile; all others <= 48px desktop / 32px mobile
        const isReviewsFaq = currId.includes('review') || nextId.includes('faq');
        const limit = isReviewsFaq ? (isMobile ? 40 : 64) : (isMobile ? 32 : 48);
        const isOverLimit = gap > limit;

        newMeasurements.push({
          id: `${currId}-${nextId}`,
          fromName: currId,
          toName: nextId,
          gapPx: gap,
          topPx: top,
          isOverLimit,
          limitPx: limit,
        });
      }

      setMeasurements(newMeasurements);
    };

    measureGaps();
    window.addEventListener('resize', measureGaps);
    window.addEventListener('scroll', measureGaps);

    const observer = new MutationObserver(measureGaps);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('resize', measureGaps);
      window.removeEventListener('scroll', measureGaps);
      observer.disconnect();
    };
  }, [enabled, isMounted]);

  if (!enabled || !isMounted) return null;

  const violations = measurements.filter((m) => m.isOverLimit);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-visible font-mono text-[11px]">
      {/* Floating status card bottom-left */}
      <div className="fixed bottom-4 left-4 bg-slate-900/95 text-white p-3 rounded-xl shadow-2xl border border-slate-700 pointer-events-auto backdrop-blur-sm max-w-xs">
        <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-1.5 mb-2">
          <span className="font-bold text-emerald-400">?spacing=1 Inspector</span>
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${violations.length > 0 ? 'bg-rose-500 text-white' : 'bg-emerald-700 text-emerald-100'}`}>
            {violations.length > 0 ? `${violations.length} Over Limit` : 'All Gaps Passed'}
          </span>
        </div>
        <p className="text-[10px] text-slate-400 leading-tight">
          Limits: &le;48px desktop (&le;32px mobile). Reviews&rarr;FAQ: &le;64px.
        </p>
      </div>

      {/* Spacing indicators between sections */}
      {measurements.map((m) => (
        <div
          key={m.id}
          style={{ top: `${m.topPx}px` }}
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-auto z-50"
        >
          <div
            className={`px-3 py-1 rounded-full text-xs font-black shadow-lg border backdrop-blur-sm flex items-center gap-1.5 ${
              m.isOverLimit
                ? 'bg-rose-600/95 text-white border-rose-400 animate-pulse'
                : 'bg-emerald-600/95 text-white border-emerald-400'
            }`}
          >
            <span>{m.gapPx}px gap</span>
            <span className="text-[9px] opacity-80">(max {m.limitPx}px)</span>
          </div>
        </div>
      ))}
    </div>
  );
}
