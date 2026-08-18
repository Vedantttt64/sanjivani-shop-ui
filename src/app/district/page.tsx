'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Info, MapPin, Search } from 'lucide-react';
import Navbar from '@/app/components/sections/Navbar';
import Footer from '@/app/components/Footer';
import { maharashtraDistrictsData, DistrictInfo } from '@/app/data/districtData';
import { maharashtraMapPaths } from '@/app/data/maharashtraMapData';

// Pastel color palette for districts matching the light off-white theme
const districtColorClasses: string[] = [
  'fill-blue-100/90 stroke-blue-500/70 hover:fill-blue-200',
  'fill-emerald-100/90 stroke-emerald-500/70 hover:fill-emerald-200',
  'fill-purple-100/90 stroke-purple-500/70 hover:fill-purple-200',
  'fill-amber-100/90 stroke-amber-500/70 hover:fill-amber-200',
  'fill-rose-100/90 stroke-rose-500/70 hover:fill-rose-200',
  'fill-indigo-100/90 stroke-indigo-500/70 hover:fill-indigo-200',
  'fill-cyan-100/90 stroke-cyan-500/70 hover:fill-cyan-200',
  'fill-teal-100/90 stroke-teal-500/70 hover:fill-teal-200',
];

function DistrictContent() {
  const router = useRouter();
  const [hoveredDistrict, setHoveredDistrict] = useState<DistrictInfo | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Combine paths with info
  const pathMap = React.useMemo(() => {
    const map = new Map<string, string>();
    maharashtraMapPaths.forEach(p => map.set(p.id, p.path));
    return map;
  }, []);

  // Filter districts based on search
  const filteredDistricts = React.useMemo(() => {
    if (!searchQuery.trim()) return maharashtraDistrictsData;
    const q = searchQuery.toLowerCase();
    return maharashtraDistrictsData.filter(
      d => d.name.toLowerCase().includes(q) || d.marathiName.includes(q) || d.headquarters.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] text-slate-800 flex flex-col font-sans relative overflow-x-hidden">

      {/* Navbar with selectedState query context set */}
      <Navbar />

      {/* Main Container with top padding for fixed Navbar */}
      <main className="flex-1 relative z-10 pt-20 pb-16 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col items-center">

        {/* Header / Selection Info Badge */}
        <div className="text-center mt-2 mb-4 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-xs text-slate-700 shadow-md backdrop-blur-md">
            <Info className="w-4 h-4 text-blue-600 shrink-0" />
            <span className="font-extrabold uppercase tracking-wider text-slate-800">
              {hoveredDistrict
                ? `${hoveredDistrict.name} (${hoveredDistrict.marathiName}) • HQ: ${hoveredDistrict.headquarters}`
                : 'Select Your District'}
            </span>
          </div>
        </div>

        {/* ── 1. Interactive Maharashtra District Map (Plain Background, No Bounding Card) ── */}
        <div className="w-full h-[550px] sm:h-[650px] md:h-[700px] flex items-center justify-center relative mb-12">
          <svg
            viewBox="0 0 800 650"
            className="w-full h-full drop-shadow-[0_8px_24px_rgba(15,23,42,0.06)] select-none transition-transform duration-500"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Base Layer for All Districts */}
            {maharashtraDistrictsData.map((d, index) => {
              const pathD = pathMap.get(d.id);
              if (!pathD) return null;

              const isHovered = hoveredDistrict?.id === d.id;
              const anyHovered = hoveredDistrict !== null;
              const colorClass = districtColorClasses[index % districtColorClasses.length];

              return (
                <g key={d.id} className="group cursor-pointer">
                  <path
                    d={pathD}
                    style={{
                      transformOrigin: `${d.cx}px ${d.cy}px`,
                      transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.35s ease, opacity 0.3s ease',
                      transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                      filter: isHovered
                        ? 'drop-shadow(0 10px 20px rgba(15,23,42,0.18))'
                        : 'none',
                      opacity: anyHovered && !isHovered ? 0.45 : 1,
                      stroke: isHovered ? '#0f172a' : undefined,
                      strokeWidth: isHovered ? 2.5 : 1.2,
                    }}
                    className={`transition-all duration-300 ${colorClass} ${isHovered ? 'saturate-[1.3] brightness-[0.85]' : ''
                      }`}
                    onMouseEnter={() => setHoveredDistrict(d)}
                    onMouseLeave={() => setHoveredDistrict(null)}
                    onClick={() => {
                      router.push(`/?state=Maharashtra&district=${encodeURIComponent(d.name)}`);
                    }}
                  />
                </g>
              );
            })}

            {/* Elevated Layer for Hovered District (keeps original color + dark tone adjustment) */}
            {hoveredDistrict && (() => {
              const pathD = pathMap.get(hoveredDistrict.id);
              if (!pathD) return null;
              const index = maharashtraDistrictsData.findIndex(item => item.id === hoveredDistrict.id);
              const colorClass = districtColorClasses[index % districtColorClasses.length];

              return (
                <path
                  d={pathD}
                  style={{
                    transformOrigin: `${hoveredDistrict.cx}px ${hoveredDistrict.cy}px`,
                    transform: 'scale(1.06)',
                    filter: 'drop-shadow(0 12px 24px rgba(15,23,42,0.22))',
                    stroke: '#0f172a',
                    strokeWidth: 2.5,
                    pointerEvents: 'none',
                  }}
                  className={`${colorClass} saturate-[1.3] brightness-[0.85] pointer-events-none`}
                />
              );
            })()}

            {/* District Permanent Labels & Callout Leaders */}
            {maharashtraDistrictsData.map((d) => {
              const isHovered = hoveredDistrict?.id === d.id;

              if (d.hasCallout && d.labelX !== undefined && d.labelY !== undefined) {
                // Leader-line callout for tiny/dense districts like Mumbai
                return (
                  <g key={`label-${d.id}`} className="pointer-events-none">
                    <line
                      x1={d.cx}
                      y1={d.cy}
                      x2={d.labelX + 35}
                      y2={d.labelY}
                      stroke="#64748b"
                      strokeWidth="1.2"
                      strokeDasharray="2 2"
                    />
                    <circle cx={d.cx} cy={d.cy} r="3" className="fill-blue-600" />
                    <g transform={`translate(${d.labelX}, ${d.labelY})`}>
                      <rect
                        x="-35"
                        y="-14"
                        width="70"
                        height="24"
                        rx="4"
                        className="fill-white stroke-slate-300 shadow-md"
                      />
                      <text
                        textAnchor="middle"
                        y="-2"
                        className="text-[9px] font-extrabold fill-slate-900 tracking-tight"
                      >
                        {d.name}
                      </text>
                      <text
                        textAnchor="middle"
                        y={8}
                        className="text-[8px] font-semibold fill-blue-700"
                      >
                        {d.marathiName}
                      </text>
                    </g>
                  </g>
                );
              }

              // Standard inline district text label
              return (
                <g
                  key={`label-${d.id}`}
                  transform={`translate(${d.cx}, ${d.cy})`}
                  className="pointer-events-none select-none"
                >
                  <text
                    textAnchor="middle"
                    y="-1"
                    className={`text-[10px] sm:text-[11px] font-black tracking-tight transition-all duration-300 ${isHovered ? 'fill-slate-950 scale-105' : 'fill-slate-900'
                      }`}
                    style={{
                      paintOrder: 'stroke',
                      stroke: '#ffffff',
                      strokeWidth: '3.5px',
                      strokeLinejoin: 'round',
                    }}
                  >
                    {d.name}
                  </text>
                  <text
                    textAnchor="middle"
                    y={10}
                    className={`text-[9px] font-bold transition-all duration-300 ${isHovered ? 'fill-blue-900' : 'fill-blue-700'
                      }`}
                    style={{
                      paintOrder: 'stroke',
                      stroke: '#ffffff',
                      strokeWidth: '3px',
                      strokeLinejoin: 'round',
                    }}
                  >
                    {d.marathiName}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* ── 2. District Cards Grid Section ── */}
        <div className="w-full space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-wide uppercase flex items-center gap-2">
                <MapPin className="w-6 h-6 text-blue-600" />
                Districts of Maharashtra ({maharashtraDistrictsData.length})
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                महाराष्ट्रातील जिल्हे — Select any district to view its portfolio page.
              </p>
            </div>

            {/* Filter / Search Bar */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search district..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 transition-colors shadow-sm"
              />
            </div>
          </div>

          {/* Cards Responsive Grid: 4 columns desktop, 2 tablet, 1 mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredDistricts.map((district) => (
              <div
                key={district.id}
                onClick={() => {
                  router.push(`/?state=Maharashtra&district=${encodeURIComponent(district.name)}`);
                }}
                className="group relative bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 cursor-pointer flex flex-col transform hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative w-full h-44 overflow-hidden bg-slate-100">
                  <Image
                    src={district.image}
                    alt={district.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                  {/* Badge */}
                  <span className="absolute top-3 right-3 bg-blue-600/90 text-white font-bold text-[10px] px-2.5 py-1 rounded-full backdrop-blur-md tracking-wider uppercase shadow">
                    DISTRICT
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-4 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight">
                      {district.name}
                    </h3>
                    <p className="text-sm font-bold text-blue-600 mt-0.5">
                      {district.marathiName}
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
                    <span>HQ: <strong className="text-slate-700 font-semibold">{district.headquarters}</strong></span>
                    <span className="text-blue-600 font-bold group-hover:translate-x-1 transition-transform">
                      Explore →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}

export default function MaharashtraDistrictPage() {
  return (
    <React.Suspense fallback={<div className="min-h-screen bg-[#0f172a]" />}>
      <DistrictContent />
    </React.Suspense>
  );
}
