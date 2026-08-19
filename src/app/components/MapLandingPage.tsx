'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Info } from 'lucide-react';
import Image from 'next/image';
import { indiaMapData } from '../data/indiaMapData';

// Types definition for clean modular structure
interface LabelConfig {
  x: number;
  y: number;
  labelX?: number; // Target label position for UTs/Small states
  labelY?: number;
  hasCallout?: boolean;
}

// 1:1 Precise pre-calculated geographical centroids based on state path data
const labelMapping: Record<string, LabelConfig> = {
  // Northern States
  'jk': { x: 173, y: 61, labelX: 85, labelY: 60, hasCallout: true },
  'hp': { x: 191, y: 133, labelX: 95, labelY: 100, hasCallout: true },
  'pb': { x: 151, y: 152, labelX: 85, labelY: 140, hasCallout: true },
  'ut': { x: 232, y: 175, labelX: 95, labelY: 180, hasCallout: true },
  'hr': { x: 164, y: 195, labelX: 85, labelY: 220, hasCallout: true },
  'dl': { x: 186, y: 210, labelX: 260, labelY: 185, hasCallout: true }, // Delhi
  'ch': { x: 179, y: 160, labelX: 85, labelY: 260, hasCallout: true }, // Chandigarh

  // Western States
  'rj': { x: 119, y: 257, labelX: 70, labelY: 300, hasCallout: true },
  'gj': { x: 66, y: 355, labelX: 45, labelY: 370, hasCallout: true },
  'mh': { x: 180, y: 435, labelX: 110, labelY: 420, hasCallout: true },
  'ga': { x: 122, y: 512, labelX: 62, labelY: 512, hasCallout: true }, // Goa
  'dd': { x: 54, y: 391, labelX: 14, labelY: 380, hasCallout: true },  // Daman & Diu
  'dn': { x: 102, y: 405, labelX: 42, labelY: 408, hasCallout: true },  // Dadra & Nagar Haveli

  // Central States
  'mp': { x: 214, y: 319, labelX: 110, labelY: 340, hasCallout: true },
  'ct': { x: 296, y: 388, labelX: 390, labelY: 380, hasCallout: true },

  // Eastern States
  'up': { x: 265, y: 245, labelX: 330, labelY: 225, hasCallout: true },
  'br': { x: 369, y: 275, labelX: 450, labelY: 250, hasCallout: true },
  'jh': { x: 366, y: 327, labelX: 460, labelY: 290, hasCallout: true },
  'wb': { x: 412, y: 310, labelX: 480, labelY: 330, hasCallout: true },
  'or': { x: 340, y: 405, labelX: 440, labelY: 440, hasCallout: true },
  'sk': { x: 425, y: 235, labelX: 360, labelY: 200, hasCallout: true }, // Sikkim

  // Southern States
  'tg': { x: 237, y: 457, labelX: 110, labelY: 470, hasCallout: true },
  'ap': { x: 263, y: 500, labelX: 115, labelY: 530, hasCallout: true },
  'ka': { x: 171, y: 519, labelX: 95, labelY: 580, hasCallout: true },
  'kl': { x: 166, y: 615, labelX: 80, labelY: 640, hasCallout: true },
  'tn': { x: 211, y: 609, labelX: 115, labelY: 660, hasCallout: true },
  'py': { x: 268, y: 546, labelX: 328, labelY: 546, hasCallout: true }, // Puducherry
  'ld': { x: 99, y: 627, labelX: 39, labelY: 615, hasCallout: true },  // Lakshadweep
  'an': { x: 521, y: 609, labelX: 461, labelY: 609, hasCallout: true },  // Andaman & Nicobar

  // Northeastern States
  'ml': { x: 484, y: 283, labelX: 424, labelY: 283, hasCallout: true }, // Meghalaya
  'as': { x: 516, y: 271, labelX: 580, labelY: 240, hasCallout: true },
  'ar': { x: 550, y: 224, labelX: 620, labelY: 190, hasCallout: true },
  'nl': { x: 546, y: 270, labelX: 620, labelY: 260, hasCallout: true }, // Nagaland
  'mn': { x: 537, y: 301, labelX: 620, labelY: 300, hasCallout: true }, // Manipur
  'mz': { x: 516, y: 337, labelX: 620, labelY: 340, hasCallout: true }, // Mizoram
  'tr': { x: 493, y: 325, labelX: 420, labelY: 340, hasCallout: true }  // Tripura
};

// Official name spelling overrides - 100% correct matching states of India standards
const officialNames: Record<string, string> = {
  'jk': 'Jammu & Kashmir',
  'la': 'Ladakh',
  'hp': 'Himachal Pradesh',
  'pb': 'Punjab',
  'ut': 'Uttarakhand',
  'hr': 'Haryana',
  'dl': 'Delhi',
  'ch': 'Chandigarh',
  'rj': 'Rajasthan',
  'gj': 'Gujarat',
  'mh': 'Maharashtra',
  'ga': 'Goa',
  'dd': 'Daman and Diu',
  'dn': 'Dadra and Nagar Haveli',
  'mp': 'Madhya Pradesh',
  'ct': 'Chhattisgarh',
  'up': 'Uttar Pradesh',
  'br': 'Bihar',
  'jh': 'Jharkhand',
  'wb': 'West Bengal',
  'or': 'Odisha',
  'sk': 'Sikkim',
  'tg': 'Telangana',
  'ap': 'Andhra Pradesh',
  'ka': 'Karnataka',
  'kl': 'Kerala',
  'tn': 'Tamil Nadu',
  'py': 'Puducherry',
  'ld': 'Lakshadweep',
  'an': 'Andaman & Nicobar Islands',
  'ml': 'Meghalaya',
  'as': 'Assam',
  'ar': 'Arunachal Pradesh',
  'nl': 'Nagaland',
  'mn': 'Manipur',
  'mz': 'Mizoram',
  'tr': 'Tripura'
};

// High-fidelity styling tokens matching the Sanjivani dark branding
const stateColors: Record<string, string> = {
  // Blue Shades
  'jk': 'fill-[#e0f2fe]/80 stroke-[#0284c7] hover:fill-[#bae6fd]',
  'pb': 'fill-[#e0f2fe]/80 stroke-[#0284c7] hover:fill-[#bae6fd]',
  'wb': 'fill-[#e0f2fe]/80 stroke-[#0284c7] hover:fill-[#bae6fd]',
  'tn': 'fill-[#e0f2fe]/80 stroke-[#0284c7] hover:fill-[#bae6fd]',
  'as': 'fill-[#e0f2fe]/80 stroke-[#0284c7] hover:fill-[#bae6fd]',
  // Green Shades
  'la': 'fill-[#dcfce7]/80 stroke-[#16a34a] hover:fill-[#bbf7d0]',
  'hr': 'fill-[#dcfce7]/80 stroke-[#16a34a] hover:fill-[#bbf7d0]',
  'ct': 'fill-[#dcfce7]/80 stroke-[#16a34a] hover:fill-[#bbf7d0]',
  'ka': 'fill-[#dcfce7]/80 stroke-[#16a34a] hover:fill-[#bbf7d0]',
  'tr': 'fill-[#dcfce7]/80 stroke-[#16a34a] hover:fill-[#bbf7d0]',
  // Pink/Rose Shades
  'hp': 'fill-[#ffe4e6]/80 stroke-[#e11d48] hover:fill-[#fecdd3]',
  'up': 'fill-[#ffe4e6]/80 stroke-[#e11d48] hover:fill-[#fecdd3]',
  'or': 'fill-[#ffe4e6]/80 stroke-[#e11d48] hover:fill-[#fecdd3]',
  'kl': 'fill-[#ffe4e6]/80 stroke-[#e11d48] hover:fill-[#fecdd3]',
  'ml': 'fill-[#ffe4e6]/80 stroke-[#e11d48] hover:fill-[#fecdd3]',
  // Yellow Shades
  'ut': 'fill-[#fef9c3]/80 stroke-[#ca8a04] hover:fill-[#fef08a]',
  'gj': 'fill-[#fef9c3]/80 stroke-[#ca8a04] hover:fill-[#fef08a]',
  'jh': 'fill-[#fef9c3]/80 stroke-[#ca8a04] hover:fill-[#fef08a]',
  'tg': 'fill-[#fef9c3]/80 stroke-[#ca8a04] hover:fill-[#fef08a]',
  'mn': 'fill-[#fef9c3]/80 stroke-[#ca8a04] hover:fill-[#fef08a]',
  // Orange/Amber Shades
  'rj': 'fill-[#ffedd5]/80 stroke-[#ea580c] hover:fill-[#fed7aa]',
  'br': 'fill-[#ffedd5]/80 stroke-[#ea580c] hover:fill-[#fed7aa]',
  'ap': 'fill-[#ffedd5]/80 stroke-[#ea580c] hover:fill-[#fed7aa]',
  'ar': 'fill-[#ffedd5]/80 stroke-[#ea580c] hover:fill-[#fed7aa]',
  'mz': 'fill-[#ffedd5]/80 stroke-[#ea580c] hover:fill-[#fed7aa]',
  // Purple/Lavender Shades
  'mp': 'fill-[#f3e8ff]/80 stroke-[#9333ea] hover:fill-[#e9d5ff]',
  'mh': 'fill-[#f3e8ff]/80 stroke-[#9333ea] hover:fill-[#e9d5ff]',
  'nl': 'fill-[#f3e8ff]/80 stroke-[#9333ea] hover:fill-[#e9d5ff]',
  'sk': 'fill-[#f3e8ff]/80 stroke-[#9333ea] hover:fill-[#e9d5ff]',
  // Union Territories / Small Points
  'dl': 'fill-[#fef08a] stroke-[#eab308] hover:fill-[#fef08a]',
  'ch': 'fill-[#fef08a] stroke-[#eab308] hover:fill-[#fef08a]',
  'ga': 'fill-[#fef08a] stroke-[#eab308] hover:fill-[#fef08a]',
  'dd': 'fill-[#fef08a] stroke-[#eab308] hover:fill-[#fef08a]',
  'dn': 'fill-[#fef08a] stroke-[#eab308] hover:fill-[#fef08a]',
  'ld': 'fill-[#fef08a] stroke-[#eab308] hover:fill-[#fef08a]',
  'an': 'fill-[#fef08a] stroke-[#eab308] hover:fill-[#fef08a]',
  'py': 'fill-[#fef08a] stroke-[#eab308] hover:fill-[#fef08a]'
};

export default function MapLandingPage() {
  const router = useRouter();
  const [hoveredLocation, setHoveredLocation] = useState<typeof indiaMapData.locations[0] | null>(null);

  const handleStateClick = (stateName: string) => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('selectedState', stateName);
    }
    router.push(`/?state=${encodeURIComponent(stateName)}`);
  };

  return (
    <div className="h-screen w-screen bg-[#f1f5f9] text-slate-800 flex flex-col overflow-hidden relative">

      {/* Subtle light background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 pointer-events-none" />

      <main className="flex-1 relative z-10 flex flex-col items-center justify-start px-4 pt-4 md:pt-1 pb-2 md:px-8 md:-mt-8">

        {/* Sanjivani Logo */}
        <div className="mb-2 md:mb-1">
          <Image
            src="/images/sanjivani-logo.png"
            alt="Sanjivani Logo"
            width={400}
            height={300}
            className="object-contain w-52 sm:w-72 md:w-[320px] h-auto"
            priority
          />
        </div>

        {/* Select Region Badge */}
        <div className="text-center mb-0 pb-0 flex flex-col items-center z-20">
          {/* Dynamic Map Selection Hint Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-xs shadow-md transition-all duration-200">
            <Info className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span className="font-extrabold text-slate-700 uppercase tracking-wider">
              {hoveredLocation ? `${officialNames[hoveredLocation.id] || hoveredLocation.name} (Capital: ${hoveredLocation.capital})` : 'Click Your State to Join'}
            </span>
          </div>
        </div>

        <div className="w-full max-w-[98vw] relative group mt-28 sm:mt-4 flex items-start justify-center">

          {/* SVG Map Canvas */}
          <svg
            viewBox="-180 -50 972 820"
            className="w-full origin-center drop-shadow-[0_8px_24px_rgba(15,23,42,0.06)] select-none transition-transform duration-500 ease-out scale-[1.6] sm:scale-[1.05]"
            style={{ maxHeight: 'calc(100vh - 250px)' }}
          >
            {/* Map Paths — base layer (all states) */}
            {indiaMapData.locations.map((loc) => {
              const colorClass = stateColors[loc.id] || 'fill-slate-100 stroke-slate-400';
              const isHovered = hoveredLocation?.id === loc.id;
              const anyHovered = hoveredLocation !== null;
              const cfg = labelMapping[loc.id];
              const cx = cfg ? cfg.x : 300;
              const cy = cfg ? cfg.y : 350;

              return (
                <path
                  key={loc.id}
                  id={loc.id}
                  d={loc.path}
                  style={{
                    transformOrigin: `${cx}px ${cy}px`,
                    transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.35s ease, opacity 0.3s ease',
                    transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                    filter: isHovered
                      ? 'drop-shadow(0 8px 16px rgba(15,23,42,0.12)) drop-shadow(0 2px 4px rgba(15,23,42,0.08))'
                      : 'none',
                    opacity: anyHovered && !isHovered ? 0.45 : 1,
                    stroke: isHovered ? '#ffffff' : undefined,
                    strokeWidth: isHovered ? 2.5 : 1.2,
                  }}
                  className={`
                    cursor-pointer transition-all duration-300
                    ${colorClass}
                    ${isHovered ? 'saturate-[1.1] brightness-[0.82]' : ''}
                  `}
                  onMouseEnter={() => setHoveredLocation(loc)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  onClick={() => handleStateClick(loc.name)}
                />
              );
            })}

            {/* Elevated overlay — re-render the hovered state on top for clean z-order */}
            {hoveredLocation && (() => {
              const loc = hoveredLocation;
              const colorClass = stateColors[loc.id] || 'fill-slate-100 stroke-slate-400';
              const cfg = labelMapping[loc.id];
              const cx = cfg ? cfg.x : 300;
              const cy = cfg ? cfg.y : 350;
              return (
                <path
                  d={loc.path}
                  style={{
                    transformOrigin: `${cx}px ${cy}px`,
                    transform: 'scale(1.06)',
                    filter: 'drop-shadow(0 10px 20px rgba(15,23,42,0.15)) drop-shadow(0 3px 6px rgba(15,23,42,0.1))',
                    stroke: '#ffffff',
                    strokeWidth: 2.5,
                    pointerEvents: 'none',
                  }}
                  className={`
                    saturate-[1.1] brightness-[0.82] pointer-events-none
                    ${colorClass}
                  `}
                />
              );
            })()}

            {/* Labels — always visible, with hover emphasis using callout style for all states
            {indiaMapData.locations.map((loc) => {
              const cfg = labelMapping[loc.id];
              if (!cfg) return null;
              const isHovered = hoveredLocation?.id === loc.id;
              const anyHovered = hoveredLocation !== null;

              // Calculate leader line destination outside the state region
              const labelX = cfg.labelX !== undefined ? cfg.labelX : (cfg.x < 280 ? cfg.x - 75 : cfg.x + 75);
              const labelY = cfg.labelY !== undefined ? cfg.labelY : (cfg.y < 350 ? cfg.y - 40 : cfg.y + 40);
              const isLeft = labelX < cfg.x;
              const textAnchor = isLeft ? 'end' : 'start';

              return (
                <g
                  key={`callout-${loc.id}`}
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredLocation(loc)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  onClick={() => handleStateClick(loc.name)}
                  style={{
                    opacity: anyHovered && !isHovered ? 0.45 : 1,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <path
                    d={`M ${cfg.x} ${cfg.y} L ${labelX} ${labelY}`}
                    stroke={isHovered ? '#1e3a8a' : '#94a3b8'}
                    strokeWidth={isHovered ? 2 : 1.2}
                    strokeDasharray={isHovered ? 'none' : '3 2'}
                    className="transition-all duration-300 fill-none"
                  />
                  <circle 
                    cx={cfg.x} 
                    cy={cfg.y} 
                    r={isHovered ? 5.5 : 3} 
                    fill={isHovered ? '#3b82f6' : '#1e293b'} 
                    stroke={isHovered ? '#ffffff' : '#e2e8f0'} 
                    strokeWidth={isHovered ? 2 : 1.2} 
                    className="transition-all duration-300"
                  />
                  <text
                    x={isLeft ? labelX - 6 : labelX + 6}
                    y={labelY + 4}
                    textAnchor={textAnchor}
                    style={{
                      fontSize: '12px',
                      fontWeight: 900,
                      fill: isHovered ? '#1e3a8a' : '#1e293b',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase' as const,
                      transition: 'fill 0.3s ease, font-size 0.3s ease, font-weight 0.3s ease',
                      filter: isHovered ? 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))' : 'drop-shadow(0 1px 1px rgba(255,255,255,0.9))',
                    }}
                  >
                    {officialNames[loc.id] || loc.name}
                  </text>
                </g>
              );
            })} */}
          </svg>

        </div>

      </main>
    </div>
  );
}
