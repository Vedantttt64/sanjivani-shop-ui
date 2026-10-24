'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useAddedPopup } from '@/context/AddedPopupContext';
import { Z_INDEX } from '@/app/zIndex';

export default function FlyToCart() {
  const { flyingThumb } = useAddedPopup();

  return (
    <AnimatePresence>
      {flyingThumb && (
        <motion.div
          key={flyingThumb.id}
          initial={{
            left: flyingThumb.startX,
            top: flyingThumb.startY,
            scale: 1,
            opacity: 1,
          }}
          animate={{
            left: flyingThumb.targetX,
            top: flyingThumb.targetY,
            scale: 0.35,
            opacity: 0.85,
          }}
          exit={{ opacity: 0, scale: 0.2 }}
          transition={{
            duration: 0.48,
            ease: [0.2, 0.8, 0.2, 1], // parabolic ease
          }}
          className="fixed pointer-events-none w-8 h-8 rounded-full border-2 border-white shadow-lg overflow-hidden"
          style={{ zIndex: Z_INDEX.toast }}
        >
          <Image
            src={flyingThumb.image}
            alt="Flying product thumb"
            fill
            sizes="32px"
            className="object-cover"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
