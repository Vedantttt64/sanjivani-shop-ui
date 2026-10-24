'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
  id: string;
  name: string;
  hindiName?: string;
  category: string;
  price: number;
  originalPrice?: number;
  weight: string;
  image: string;
  quantity: number;
}

export interface FarmCategory {
  id: string;
  name: string;
  slug: string;
  icon: string;
  badge?: string;
  description: string;
}

export const FARM_CATEGORIES: FarmCategory[] = [
  { id: 'fruits', name: 'Fruits', slug: 'fruits', icon: '', description: 'Fresh seasonal & farm-orchard fruits' },
  { id: 'veggies', name: 'Vegetables', slug: 'veggies', icon: '', description: 'Crisp green & root organic vegetables' },
  { id: 'pulses-dal', name: 'Pulses & Dal', slug: 'pulses-dal', icon: '', description: 'Unpolished desi dals & whole pulses' },
  { id: 'grains', name: 'Atta, Rice & Grains', slug: 'grains', icon: '', description: 'Stone-ground flours, traditional rice & millets' },
  { id: 'dairy-eggs', name: 'Dairy & Eggs', slug: 'dairy-eggs', icon: '', description: 'Pure A2 farm milk, desi ghee & fresh eggs' },
  { id: 'oil-ghee', name: 'Oil & Ghee', slug: 'oil-ghee', icon: '', description: 'Cold-pressed kachi ghani oils & bilona ghee' },
  { id: 'spices-masala', name: 'Spices & Masala', slug: 'spices-masala', icon: '', description: 'Aromatic whole & ground farm spices' },
];

interface FarmStoreContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>, qty?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  cartTotalCount: number;
  cartTotalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isOffersOpen: boolean;
  setIsOffersOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedSubcategory: string;
  setSelectedSubcategory: (sub: string) => void;
  selectedCollection?: string | null;
  setSelectedCollection?: (collectionKey: string | null) => void;
  selectCategoryAndSubcategory: (category: string, subcategory?: string) => void;
}

const FarmStoreContext = createContext<FarmStoreContextType | undefined>(undefined);

export function FarmStoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage on client mount to eliminate Next.js SSR hydration mismatch
  useEffect(() => {
    try {
      const saved = localStorage.getItem('sanjivani_cart');
      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch {
      // storage unavailable
    }
    setIsHydrated(true);
  }, []);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOffersOpen, setIsOffersOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);

  const selectCategoryAndSubcategory = (category: string, subcategory: string = 'all') => {
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);
  };

  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem('sanjivani_cart', JSON.stringify(cart));
    } catch {
      // storage unavailable
    }
  }, [cart, isHydrated]);

  const addToCart = (item: Omit<CartItem, 'quantity'>, qty: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + qty } : p
        );
      }
      return [...prev, { ...item, quantity: qty }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((p) => {
          if (p.id === id) {
            const newQty = p.quantity + delta;
            return newQty > 0 ? { ...p, quantity: newQty } : null;
          }
          return p;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => setCart([]);

  const cartTotalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <FarmStoreContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotalCount,
        cartTotalPrice,
        isCartOpen,
        setIsCartOpen,
        isOffersOpen,
        setIsOffersOpen,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        selectedSubcategory,
        setSelectedSubcategory,
        selectedCollection,
        setSelectedCollection,
        selectCategoryAndSubcategory,
      }}
    >
      {children}
    </FarmStoreContext.Provider>
  );
}

export function useFarmStore() {
  const context = useContext(FarmStoreContext);
  if (!context) {
    throw new Error('useFarmStore must be used within a FarmStoreProvider');
  }
  return context;
}
