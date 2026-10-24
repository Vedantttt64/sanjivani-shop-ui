'use client';

import React, { useState } from 'react';
import { useFarmStore } from '@/context/FarmStoreContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Sparkles, Sprout } from 'lucide-react';
import Image from 'next/image';
import Mascot from '@/app/components/mascot/Mascot';
import { Z_INDEX } from '@/app/zIndex';
import OrderSuccessModal from './OrderSuccessModal';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotalPrice, cartTotalCount, clearCart } = useFarmStore();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [placedAmount, setPlacedAmount] = useState(0);

  if (!isCartOpen && !isOrderPlaced) return null;

  const deliveryFee = cartTotalPrice > 499 ? 0 : 40;
  const grandTotal = cartTotalPrice + (cart.length > 0 ? deliveryFee : 0);

  return (
    <div className="fixed inset-0 flex justify-end" style={{ zIndex: Z_INDEX.drawer }}>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Slide-over panel */}
      <div className="relative z-10 w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="px-6 py-3.5 border-b border-emerald-100 flex items-center justify-between bg-gradient-to-r from-emerald-800 to-green-900 text-white">
          <div className="flex items-center gap-3">
            <div className="relative shrink-0 flex items-center justify-center">
              <Mascot pose="basket" size={56} />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold">Your Farm Basket</h2>
              <p className="text-xs text-emerald-200">{cartTotalCount} items selected</p>
            </div>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-full hover:bg-white/15 transition-colors text-white/80 hover:text-white"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Delivery Bar */}
        <div className="px-6 py-2.5 bg-emerald-50 border-b border-emerald-100 text-xs font-medium text-emerald-800 flex items-center justify-between">
          {cartTotalPrice >= 499 ? (
            <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
              <Sparkles className="w-4 h-4 text-emerald-600 fill-emerald-400" />
              Yay! You unlocked FREE Farm Delivery
            </span>
          ) : (
            <span>
              Add <strong className="text-emerald-700">₹{499 - cartTotalPrice}</strong> more for FREE delivery
            </span>
          )}
          <span className="text-[11px] font-bold text-emerald-700 uppercase bg-emerald-200/60 px-2 py-0.5 rounded-full">
            Direct Farm
          </span>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10 px-4">
              <div className="relative mb-3 flex items-center justify-center">
                <Mascot pose="sad" size={140} float={true} />
              </div>
              <h3 className="text-base font-bold text-slate-800">Your basket is empty</h3>
              <p className="text-xs text-slate-500 max-w-xs mt-1">
                Explore our fresh organic veggies, unpolished pulses, and pure desi ghee harvested directly by rural farmers!
              </p>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="mt-6 px-6 py-2.5 bg-[#1B4332] hover:bg-[#2D6A4F] active:scale-95 text-white rounded-full font-bold text-xs uppercase tracking-wider transition shadow-sm cursor-pointer"
              >
                Start shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-3 bg-slate-50/80 rounded-2xl border border-slate-200/70 hover:border-emerald-200 transition"
              >
                <div className="w-16 h-16 rounded-xl bg-white p-1 border border-slate-200 flex-shrink-0 relative overflow-hidden flex items-center justify-center">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  ) : (
                    <Sprout className="w-6 h-6 text-emerald-700" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-slate-800 truncate">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.weight}</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-sm font-extrabold text-emerald-800">
                      ₹{item.price * item.quantity}
                    </span>
                    {item.originalPrice && (
                      <span className="text-xs text-slate-400 line-through">
                        ₹{item.originalPrice * item.quantity}
                      </span>
                    )}
                  </div>
                </div>

                {/* Quantity modifier */}
                <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-xl p-1 shadow-2xs">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-6 h-6 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-600 transition"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-6 text-center text-xs font-bold text-slate-800">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="w-6 h-6 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center transition"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-1.5 text-slate-400 hover:text-red-600 transition"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout */}
        {cart.length > 0 && (
          <div className="p-6 bg-white border-t border-slate-200 space-y-4">
            <div className="space-y-1.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-800">₹{cartTotalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Farm-to-Door Delivery</span>
                <span className="font-semibold text-slate-800">
                  {deliveryFee === 0 ? <span className="text-emerald-600 font-bold">FREE</span> : `₹${deliveryFee}`}
                </span>
              </div>
              <div className="flex justify-between text-sm font-extrabold text-slate-900 pt-2 border-t border-slate-200">
                <span>Total Payable</span>
                <span className="text-emerald-800">₹{grandTotal}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 bg-amber-50 border border-amber-200 rounded-xl text-[11px] text-amber-900">
              <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
              <span>100% Guaranteed Residue-Free · NGO Fair-Trade to Farmers</span>
            </div>

            <button
              type="button"
              onClick={() => {
                setPlacedAmount(grandTotal);
                setIsOrderPlaced(true);
                clearCart();
              }}
              className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white rounded-xl font-bold text-sm shadow-lg shadow-emerald-700/20 flex items-center justify-center gap-2 transition active:scale-[0.99] cursor-pointer"
            >
              <span>Proceed to Checkout (₹{grandTotal})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Order Confirmation Modal */}
      <OrderSuccessModal
        isOpen={isOrderPlaced}
        orderTotal={placedAmount}
        onClose={() => {
          setIsOrderPlaced(false);
          setIsCartOpen(false);
        }}
      />
    </div>
  );
}
