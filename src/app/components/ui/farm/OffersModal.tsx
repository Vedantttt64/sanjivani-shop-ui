'use client';

import React from 'react';
import { useFarmStore } from '@/context/FarmStoreContext';
import { X, Tag, Sparkles, Copy, Check, Percent } from 'lucide-react';

export default function OffersModal() {
  const { isOffersOpen, setIsOffersOpen } = useFarmStore();
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);

  if (!isOffersOpen) return null;

  const offers = [
    {
      code: 'FIRSTFARM20',
      discount: '20% OFF',
      title: 'First Harvest Welcome Offer',
      description: 'Get flat 20% discount on your first order of organic veggies & unpolished dals above ₹499.',
      minOrder: 'Min order ₹499',
    },
    {
      code: 'FREEDEL499',
      discount: 'FREE DELIVERY',
      title: 'Zero Middleman Free Shipping',
      description: 'Free direct farm-to-kitchen dispatch across all districts in Maharashtra.',
      minOrder: 'Applicable on all orders > ₹499',
    },
    {
      code: 'DALPULSE15',
      discount: '15% OFF',
      title: 'Pulses & Desi Ghee Combo',
      description: 'Extra 15% discount on combo of Toor Dal, Moong Dal, Chana Dal and Pure Cow Bilona Ghee.',
      minOrder: 'Min order ₹799',
    },
  ];

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOffersOpen(false)}
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-emerald-800 via-emerald-700 to-green-800 text-white relative">
          <button
            onClick={() => setIsOffersOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Sanjivani Farms Special Deals</span>
          </div>
          <h3 className="text-xl font-extrabold text-white">Direct-to-Consumer Farm Offers</h3>
          <p className="text-xs text-emerald-100 mt-1">
            Save more while directly supporting smallholder organic farmers with fair compensation.
          </p>
        </div>

        {/* Offers List */}
        <div className="p-6 space-y-3.5 max-h-[60vh] overflow-y-auto">
          {offers.map((offer) => (
            <div
              key={offer.code}
              className="p-4 rounded-2xl border-2 border-dashed border-emerald-300/80 bg-emerald-50/40 hover:bg-emerald-50 transition relative flex flex-col gap-2"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-emerald-700 text-white rounded-lg">
                    <Percent className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-200/70 px-2 py-0.5 rounded-md">
                      {offer.discount}
                    </span>
                    <h4 className="text-sm font-bold text-slate-800 mt-1">{offer.title}</h4>
                  </div>
                </div>

                {/* Copy Button */}
                <button
                  onClick={() => handleCopy(offer.code)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold transition shadow-2xs"
                >
                  {copiedCode === offer.code ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{offer.code}</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">{offer.description}</p>
              <span className="text-[11px] font-medium text-slate-400">{offer.minOrder}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>* Coupons automatically applied at checkout</span>
          <button
            onClick={() => setIsOffersOpen(false)}
            className="px-4 py-2 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-900 transition"
          >
            Start Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
