'use client';

import React from 'react';
import { Calendar, Megaphone } from 'lucide-react';

interface NoticeItem {
  id: number;
  label: string;
  date: string;
  title: string;
}

const NOTICES: NoticeItem[] = [
  {
    id: 1,
    label: 'OFFICIAL BULLETINS',
    date: '2026-10-15',
    title: 'Annual Community Cleanliness Drive starting this Sunday',
  },
  {
    id: 2,
    label: 'OFFICIAL BULLETINS',
    date: '2026-10-18',
    title: 'Free Medical & Health Checkup Camp at District Hospital',
  },
  {
    id: 3,
    label: 'OFFICIAL BULLETINS',
    date: '2026-10-22',
    title: 'Legal Literacy Workshop for Women & Farmers',
  },
  {
    id: 4,
    label: 'OFFICIAL BULLETINS',
    date: '2026-10-25',
    title: 'Solar Energy Adoption Campaign in Rural Areas',
  },
  {
    id: 5,
    label: 'OFFICIAL BULLETINS',
    date: '2026-10-28',
    title: 'Youth Skill Development & Vocational Training Seminar',
  },
  {
    id: 6,
    label: 'OFFICIAL BULLETINS',
    date: '2026-11-02',
    title: 'Tree Plantation & Environmental Awareness Rally',
  },
];

export default function PartyNoticeBoard() {
  return (
    <section
      aria-label="Notice Board"
      className="relative w-full overflow-hidden bg-cover bg-center py-6 sm:py-7 md:py-8 px-4 sm:px-6 lg:px-12 flex items-center"
      style={{
        backgroundImage: "url('/images/notice-board-bg.jpg')",
      }}
    >
      {/* Subtle overlay allowing natural colors and background details to shine through */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(10, 15, 29, 0.55) 0%, rgba(10, 15, 29, 0.35) 45%, rgba(10, 15, 29, 0.45) 100%)',
        }}
      />

      {/* Main Two-Column Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left Column: Heading with orange emphasis */}
        <div className="lg:col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black tracking-tight leading-tight select-none text-white [text-shadow:_0_2px_14px_rgba(0,0,0,0.65)]">
            Notice Board
          </h2>
        </div>

        {/* Right Column: Dark Notice Panel with Internal Scroll */}
        <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-xl bg-[#090D1A]/95 rounded-2xl p-3 sm:p-3.5 border border-white/10 shadow-2xl backdrop-blur-md">
            {/* Scrollable list of notice cards */}
            <div
              className="space-y-2.5 max-h-[220px] overflow-y-auto pr-2 custom-notice-scrollbar"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#94A3B8 rgba(255,255,255,0.05)',
              }}
            >
              {NOTICES.map((notice) => (
                <div
                  key={notice.id}
                  className="bg-[#121829]/90 hover:bg-[#1A2238] border border-white/5 rounded-xl p-2.5 sm:p-3 transition-all duration-200 cursor-pointer shadow-sm group"
                >
                  {/* Card Header: Label with icon + Date */}
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-1.5 text-[#FF6A00] font-bold text-[10.5px] sm:text-[11px] tracking-wider uppercase">
                      <Megaphone className="w-3 h-3" />
                      <span>{notice.label}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-slate-400 text-[10.5px] sm:text-[11px] font-mono font-medium">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      <span>{notice.date}</span>
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-white font-bold text-xs sm:text-[13px] leading-snug group-hover:text-orange-200 transition-colors">
                    {notice.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
