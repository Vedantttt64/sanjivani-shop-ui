import type { Metadata } from 'next';
import { FarmStoreProvider } from '@/context/FarmStoreContext';
import { AddedPopupProvider } from '@/context/AddedPopupContext';
import AddedPopup from '@/app/components/cart/AddedPopup';
import FlyToCart from '@/app/components/cart/FlyToCart';

export const metadata: Metadata = {
  title: 'Sanjivani Farms | Pure & Natural Farm Produce',
  description:
    'Direct farm-fresh organic vegetables, unpolished pulses & dals, stone-ground flours, pure ghee and cold-pressed oils from Sanjivani Farms.',
};

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <FarmStoreProvider>
      <AddedPopupProvider>
        {children}
        <AddedPopup />
        <FlyToCart />
      </AddedPopupProvider>
    </FarmStoreProvider>
  );
}
