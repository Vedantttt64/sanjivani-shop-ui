'use client';

import React from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import Mascot from '@/app/components/mascot/Mascot';
import { Z_INDEX } from '@/app/zIndex';
import BrandLogo from '@/app/components/ui/BrandLogo';

interface OrderSuccessModalProps {
  isOpen: boolean;
  orderTotal: number;
  onClose: () => void;
}

export default function OrderSuccessModal({
  isOpen,
  orderTotal,
  onClose,
}: OrderSuccessModalProps) {
  if (!isOpen) return null;

  const orderId = `SF-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Order confirmation"
      className="fixed inset-0 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs select-none"
      style={{ zIndex: Z_INDEX.modal }}
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
        {/* Top header bar with BrandLogo */}
        <div className="bg-gradient-to-r from-[#1B4332] to-[#2D6A4F] text-white px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BrandLogo variant="compact" />
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-300 stroke-[2.5]" />
              <span className="text-xs uppercase tracking-widest font-black text-emerald-100">
                Harvest Order Confirmed
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex flex-col items-center text-center">
          {/* Sanju Cheer Mascot */}
          <div className="relative mb-3 flex items-center justify-center">
            <Mascot
              pose="cheer"
              size={180}
              placementId="orderSuccess"
              speechLine="Farmer harvest underway!"
              float={true}
            />
          </div>

          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Thank you for supporting our farmers!
          </h2>
          <p className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full mt-2 inline-block">
            Order #{orderId} · ₹{orderTotal} Paid
          </p>

          <p className="text-xs text-stone-600 max-w-sm mt-3 leading-relaxed">
            Your fresh produce request is routed directly to partner farms. Harvest starts before sunrise for morning delivery.
          </p>

          {/* 4-Step Pipeline */}
          <div className="w-full mt-6 bg-[#f8fafc] border border-stone-200/80 rounded-2xl p-4 text-left">
            <p className="text-[11px] font-black uppercase tracking-wider text-slate-700 mb-3">
              Direct-from-Farm Pipeline
            </p>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mb-1.5">
                  <Mascot pose="wave" size={26} />
                </div>
                <span className="text-[10px] font-black text-slate-900 leading-tight">1. Farm Harvest</span>
                <span className="text-[9px] text-emerald-700 font-semibold">Active</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center mb-1.5 opacity-80">
                  <Mascot pose="think" size={26} />
                </div>
                <span className="text-[10px] font-black text-slate-900 leading-tight">2. Purity Lab</span>
                <span className="text-[9px] text-stone-400">Residue-free</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center mb-1.5 opacity-80">
                  <Mascot pose="deliver" size={26} />
                </div>
                <span className="text-[10px] font-black text-slate-900 leading-tight">3. Dispatch</span>
                <span className="text-[9px] text-stone-400">Eco-crate</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center mb-1.5 opacity-80">
                  <Mascot pose="cheer" size={26} />
                </div>
                <span className="text-[10px] font-black text-slate-900 leading-tight">4. Doorstep</span>
                <span className="text-[9px] text-stone-400">Today 7-10 AM</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-full mt-6 py-3.5 bg-[#1B4332] hover:bg-[#2D6A4F] active:scale-98 text-white rounded-2xl font-black text-xs uppercase tracking-wider shadow-lg shadow-emerald-950/20 flex items-center justify-center gap-2 transition cursor-pointer"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
