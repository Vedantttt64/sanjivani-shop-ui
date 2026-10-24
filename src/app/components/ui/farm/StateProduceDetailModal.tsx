'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  X,
  Sparkles,
  Award,
  ShieldCheck,
  Pause,
  Play,
  ShoppingBag,
  Check,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Package,
  Truck
} from 'lucide-react';
import { getStateSpecialties, StateSpecialtyItem } from '@/app/data/allStatesSpecialties';
import { getStateDistrictMap, isDistrictMatch } from '@/app/data/allStateDistrictMaps';
import { STATE_BOUNDS } from '@/app/data/stateMapBounds';
import { indiaMapData } from '@/app/data/indiaMapData';
import { useFarmStore } from '@/context/FarmStoreContext';
import { useAddedPopup } from '@/context/AddedPopupContext';

interface StateProduceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  stateName: string;
  initialIndex?: number;
}

export default function StateProduceDetailModal({
  isOpen,
  onClose,
  stateName = 'Maharashtra',
  initialIndex = 0,
}: StateProduceDetailModalProps) {
  const { setIsCartOpen } = useFarmStore();
  const { addWithPopup } = useAddedPopup();

  const stateConfig = getStateSpecialties(stateName);
  const specialties = stateConfig.specialties;

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isPlaying, setIsPlaying] = useState(true);
  const [justAdded, setJustAdded] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Sync index when initialIndex changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setIsPlaying(true);
    }
  }, [isOpen, initialIndex]);

  const currentItem: StateSpecialtyItem = specialties[currentIndex] || specialties[0];

  // Auto-slide every 6 seconds if playing
  useEffect(() => {
    if (!isOpen || !isPlaying || specialties.length <= 1) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % specialties.length);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isOpen, isPlaying, currentIndex, specialties.length]);

  if (!isOpen || !currentItem) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % specialties.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + specialties.length) % specialties.length);
  };

  const handleItemSelect = (index: number) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  const handleAddProduceToCart = (e?: React.MouseEvent<HTMLElement>) => {
    addWithPopup(
      {
        id: currentItem.id,
        name: currentItem.produceName,
        category: 'fruits',
        price: currentItem.price,
        originalPrice: currentItem.originalPrice,
        weight: currentItem.unit,
        image: currentItem.image,
      },
      1,
      e?.currentTarget
    );
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  // Retrieve district map data for this state
  const mapData = getStateDistrictMap(stateName);
  const hasDistricts = mapData.districts && mapData.districts.length > 0;

  // Find active district for the current produce item
  const activeDistrict = hasDistricts
    ? mapData.districts.find((d) => isDistrictMatch(d, currentItem))
    : null;

  // Determine beacon centroid coordinates
  const beaconPos =
    activeDistrict && activeDistrict.centroid
      ? activeDistrict.centroid
      : currentItem.centroid;

  const stateVector = indiaMapData.locations.find(
    (l) => l.name.toLowerCase() === stateName.toLowerCase()
  );

  const stateBound = STATE_BOUNDS[stateName] || {
    viewBox: '0 0 612 696',
    center: { x: 306, y: 348 },
    width: 150,
    height: 150,
  };
  const scaleFactor = Math.max(0.12, Math.min(0.4, (stateBound.width || 120) / 600));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl border border-slate-200 shadow-2xl p-5 sm:p-7 md:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close detail modal"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all cursor-pointer z-30"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ── Top Header Bar ── */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 pr-12">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
            <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#1B4332]">
              {stateName.toUpperCase()} GI ORIGIN &amp; DISTRICT STORY
            </h2>
            <span className="hidden md:inline text-xs text-slate-400">
              • Direct From Farm-Gate Origin
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-slate-500">
              {currentIndex + 1} <span className="text-slate-300">/</span> {specialties.length}
            </span>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
              title={isPlaying ? 'Pause auto-slider' : 'Play auto-slider'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* ── 2-Column Banner Area ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[380px]">
          
          {/* ── LEFT: State Vector Map With District Boundaries & Beacon ── */}
          <div className="lg:col-span-5 w-full flex flex-col items-center justify-center relative">
            <div className="w-full flex items-center justify-between px-2 mb-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                {activeDistrict ? activeDistrict.name : currentItem.subRegion.split(' ')[0]} District
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                {currentItem.location}
              </span>
            </div>

            {/* SVG Map Canvas */}
            <div className="w-full h-full relative flex items-center justify-center">
              {hasDistricts ? (
                <svg
                  viewBox={mapData.viewBox}
                  className="w-full h-full max-h-[320px] drop-shadow-[0_4px_16px_rgba(0,0,0,0.06)] select-none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {mapData.districts.map((district, idx) => {
                    const isActive = isDistrictMatch(district, currentItem);
                    const specialtyItem = specialties.find((s) => isDistrictMatch(district, s));
                    const isSpecialtyDistrict = !!specialtyItem;

                    return (
                      <path
                        key={`${district.id}-${idx}`}
                        d={district.path}
                        onClick={() => {
                          if (specialtyItem) {
                            const sIdx = specialties.findIndex((s) => s.id === specialtyItem.id);
                            if (sIdx !== -1) handleItemSelect(sIdx);
                          }
                        }}
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        className={`cursor-pointer transition-all duration-300 ease-out ${
                          isActive
                            ? 'fill-emerald-600 stroke-slate-950 stroke-[2.8] filter drop-shadow-[0_6px_14px_rgba(5,150,105,0.4)] z-10'
                            : isSpecialtyDistrict
                            ? 'fill-emerald-50/90 stroke-slate-700 hover:fill-emerald-100/90 stroke-[1.6]'
                            : 'fill-slate-100/85 stroke-slate-600 hover:fill-slate-200/80 stroke-[1.2]'
                        }`}
                      >
                        <title>{district.name}</title>
                      </path>
                    );
                  })}

                  {/* Beacon at Centroid */}
                  <g
                    transform={`translate(${beaconPos.x}, ${beaconPos.y})`}
                    className="pointer-events-none"
                  >
                    <circle r="26" className="fill-emerald-500/20 stroke-emerald-500/60 stroke-[1.5] animate-ping" />
                    <circle r="14" className="fill-amber-400/50 stroke-amber-500 stroke-[1.5]" />
                    <circle r="7" className="fill-amber-500 stroke-white stroke-[2.5] filter drop-shadow-md" />

                    <g className="animate-in fade-in zoom-in-75 duration-300">
                      <line
                        x1="0"
                        y1="0"
                        x2={beaconPos.x > 380 ? -45 : 45}
                        y2="-30"
                        stroke="#059669"
                        strokeWidth="2"
                        strokeDasharray="3,3"
                      />
                      <rect
                        x={beaconPos.x > 380 ? -150 : 45}
                        y="-48"
                        width="115"
                        height="26"
                        rx="6"
                        className="fill-white stroke-emerald-600 stroke-[1.5] filter drop-shadow-lg"
                      />
                      <text
                        x={beaconPos.x > 380 ? -92 : 102}
                        y="-31"
                        textAnchor="middle"
                        fill="#065f46"
                        fontSize="11"
                        fontWeight="bold"
                        fontFamily="sans-serif"
                      >
                        {activeDistrict ? activeDistrict.name : currentItem.location.split(' ')[0]}
                      </text>
                    </g>
                  </g>
                </svg>
              ) : (
                <svg
                  viewBox={stateBound.viewBox}
                  className="w-full h-full max-h-[320px] drop-shadow-[0_4px_16px_rgba(0,0,0,0.06)] select-none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {stateVector && (
                    <path
                      d={stateVector.path}
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      className="fill-emerald-50/90 stroke-slate-800 filter drop-shadow-md"
                      style={{ strokeWidth: Math.max(0.8, 2.5 * scaleFactor) }}
                    />
                  )}

                  <g
                    transform={`translate(${currentItem.centroid.x}, ${currentItem.centroid.y})`}
                    className="pointer-events-none"
                  >
                    <circle
                      r={24 * scaleFactor}
                      className="fill-emerald-500/25 stroke-emerald-600/70 animate-ping"
                      style={{ strokeWidth: Math.max(0.6, 1.5 * scaleFactor) }}
                    />
                    <circle
                      r={12 * scaleFactor}
                      className="fill-amber-400/50 stroke-amber-500"
                      style={{ strokeWidth: Math.max(0.6, 1.5 * scaleFactor) }}
                    />
                    <circle
                      r={6 * scaleFactor}
                      className="fill-amber-500 stroke-white filter drop-shadow-md"
                      style={{ strokeWidth: Math.max(1, 2.2 * scaleFactor) }}
                    />
                  </g>
                </svg>
              )}
            </div>

            <div className="text-[11px] text-center text-slate-400 mt-2">
              Origin: <strong className="text-slate-800">{activeDistrict ? activeDistrict.name : currentItem.location}</strong>
            </div>
          </div>

          {/* ── RIGHT: Produce Details & Farm Info ── */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-amber-400 text-amber-950 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{currentItem.tag}</span>
              </span>

              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                <span>{currentItem.marathiName}</span>
              </span>

              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Lab Residue-Free</span>
              </span>
            </div>

            {/* Title & Location */}
            <div>
              <div className="flex items-center gap-2 text-emerald-700 text-xs sm:text-sm font-extrabold uppercase tracking-wide">
                <span>{currentItem.location}</span>
                <span className="text-slate-400">→</span>
                <span className="text-slate-600 font-bold">{currentItem.subRegion}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mt-1">
                {currentItem.produceName}
              </h3>
            </div>

            {/* Photo & Description Row */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
              <div className="sm:col-span-5 relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden bg-stone-50 border border-slate-200 shadow-sm flex items-center justify-center">
                <Image
                  src={currentItem.image}
                  alt={currentItem.produceName}
                  fill
                  sizes="260px"
                  className="object-contain p-2"
                />
                <div className="absolute top-2 left-2 bg-emerald-800/90 text-white text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                  Direct Harvest
                </div>
              </div>

              <div className="sm:col-span-7 space-y-2.5">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {currentItem.description}
                </p>

                <div className="flex flex-wrap gap-2 text-[10px] font-bold">
                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-md inline-flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-700" /> 0% Middlemen
                  </span>
                  <span className="bg-amber-50 text-amber-900 border border-amber-200 px-2 py-0.5 rounded-md inline-flex items-center gap-1">
                    <Package className="w-3 h-3 text-amber-700" /> Farm-Gate Dispatch
                  </span>
                  <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md inline-flex items-center gap-1">
                    <Truck className="w-3 h-3 text-slate-600" /> Same-Day Delivery
                  </span>
                </div>
              </div>
            </div>

            {/* Pricing & CTA */}
            <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-black text-[#1B4332]">
                  ₹{currentItem.price}
                </span>
                <span className="text-sm line-through text-slate-400 font-semibold">
                  ₹{currentItem.originalPrice}
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  Save {Math.round(((currentItem.originalPrice - currentItem.price) / currentItem.originalPrice) * 100)}%
                </span>
                <span className="text-xs text-slate-500 font-medium ml-1">
                  / {currentItem.unit}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleAddProduceToCart}
                  className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer ${
                    justAdded
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#1B4332] hover:bg-[#2d6a4f] text-white'
                  }`}
                >
                  {justAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Basket!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Farm Basket</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsCartOpen(true);
                    onClose();
                  }}
                  className="px-4 py-3 rounded-xl font-bold text-xs text-slate-700 hover:text-emerald-800 bg-slate-100 hover:bg-slate-200 transition cursor-pointer"
                >
                  View Basket
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* ── Variety Pills Inside Modal ── */}
        <div className="pt-3 border-t border-slate-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
              Browse Other {stateName} Crops ({specialties.length} Varieties)
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {specialties.map((item, idx) => {
              const isSelected = idx === currentIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemSelect(idx)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                    isSelected
                      ? 'bg-[#1B4332] text-white shadow-xs font-bold scale-102'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>{item.location}</span>
                  <span className="text-[11px] opacity-75 font-normal">
                    ({item.produceName.split(' ')[0]})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
