'use client';

import React, { createContext, useContext, useState, useRef, useCallback, useEffect } from 'react';
import { useFarmStore, CartItem } from '@/context/FarmStoreContext';
import { FRESH_PRODUCTS } from '@/app/data/freshCategoriesData';

export interface AddedPopupItem {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  weight: string;
  image: string;
  quantity: number;
  addedTime: number;
}

export interface FlyingThumb {
  id: string;
  image: string;
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
}

interface AddedPopupContextType {
  isOpen: boolean;
  activeItem: AddedPopupItem | null;
  frequentlyBought: AddedPopupItem[];
  cartPillRef: React.RefObject<HTMLButtonElement | null>;
  setCartPillRef: (el: HTMLButtonElement | null) => void;
  isPillBouncing: boolean;
  flyingThumb: FlyingThumb | null;
  addWithPopup: (
    product: Omit<CartItem, 'quantity'>,
    qty?: number,
    sourceElement?: HTMLElement | null
  ) => void;
  closePopup: () => void;
  updateItemQuantity: (id: string, delta: number) => void;
}

const AddedPopupContext = createContext<AddedPopupContextType | undefined>(undefined);

export function AddedPopupProvider({ children }: { children: React.ReactNode }) {
  const { addToCart, updateQuantity, cart } = useFarmStore();

  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<AddedPopupItem | null>(null);
  const [frequentlyBought, setFrequentlyBought] = useState<AddedPopupItem[]>([]);
  const [isPillBouncing, setIsPillBouncing] = useState(false);
  const [flyingThumb, setFlyingThumb] = useState<FlyingThumb | null>(null);

  const cartPillRef = useRef<HTMLButtonElement | null>(null);
  const autoCloseTimerRef = useRef<NodeJS.Timeout | null>(null);

  const setCartPillRef = useCallback((el: HTMLButtonElement | null) => {
    cartPillRef.current = el;
  }, []);

  const closePopup = useCallback(() => {
    setIsOpen(false);
    if (autoCloseTimerRef.current) {
      clearTimeout(autoCloseTimerRef.current);
      autoCloseTimerRef.current = null;
    }
  }, []);

  const startAutoClose = useCallback(() => {
    if (autoCloseTimerRef.current) clearTimeout(autoCloseTimerRef.current);
    autoCloseTimerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 4000);
  }, []);

  // Update item quantity directly inside popup stepper
  const updateItemQuantity = useCallback(
    (id: string, delta: number) => {
      updateQuantity(id, delta);
      setActiveItem((prev) => {
        if (!prev || prev.id !== id) return prev;
        const newQty = prev.quantity + delta;
        if (newQty <= 0) {
          closePopup();
          return null;
        }
        return { ...prev, quantity: newQty };
      });
      startAutoClose();
    },
    [updateQuantity, closePopup, startAutoClose]
  );

  const addWithPopup = useCallback(
    (
      product: Omit<CartItem, 'quantity'>,
      qty: number = 1,
      sourceElement?: HTMLElement | null
    ) => {
      // 1. Call standard useFarmStore add
      addToCart(product, qty);

      // Find 3 frequently bought suggestions from same or related category
      const suggestions = FRESH_PRODUCTS.filter(
        (p) => p.id !== product.id && p.categoryId === product.category
      )
        .slice(0, 3)
        .map((p) => ({
          id: p.id,
          name: p.name,
          category: p.categoryId,
          price: p.price,
          originalPrice: p.originalPrice,
          weight: p.weight,
          image: p.image,
          quantity: 1,
          addedTime: Date.now(),
        }));
      setFrequentlyBought(suggestions);

      // 2. Fly-to-cart calculation
      const pillEl = cartPillRef.current;
      const prefersReduced =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (sourceElement && pillEl && !prefersReduced) {
        const startRect = sourceElement.getBoundingClientRect();
        const targetRect = pillEl.getBoundingClientRect();

        setFlyingThumb({
          id: `${product.id}-${Date.now()}`,
          image: product.image,
          startX: startRect.left + startRect.width / 2 - 16,
          startY: startRect.top + startRect.height / 2 - 16,
          targetX: targetRect.left + targetRect.width / 2 - 16,
          targetY: targetRect.top + targetRect.height / 2 - 16,
        });

        // 500ms fly animation duration
        setTimeout(() => {
          setFlyingThumb(null);
          // Cart pill bounce
          setIsPillBouncing(true);
          setTimeout(() => setIsPillBouncing(false), 350);

          // Open popup
          setActiveItem({
            ...product,
            quantity: qty,
            addedTime: Date.now(),
          });
          setIsOpen(true);
          startAutoClose();
        }, 480);
      } else {
        // Reduced motion or no source rect: instant open
        setIsPillBouncing(true);
        setTimeout(() => setIsPillBouncing(false), 300);

        setActiveItem({
          ...product,
          quantity: qty,
          addedTime: Date.now(),
        });
        setIsOpen(true);
        startAutoClose();
      }
    },
    [addToCart, startAutoClose]
  );

  return (
    <AddedPopupContext.Provider
      value={{
        isOpen,
        activeItem,
        frequentlyBought,
        cartPillRef,
        setCartPillRef,
        isPillBouncing,
        flyingThumb,
        addWithPopup,
        closePopup,
        updateItemQuantity,
      }}
    >
      {children}
    </AddedPopupContext.Provider>
  );
}

export function useAddedPopup() {
  const context = useContext(AddedPopupContext);
  if (!context) {
    throw new Error('useAddedPopup must be used within an AddedPopupProvider');
  }
  return context;
}
