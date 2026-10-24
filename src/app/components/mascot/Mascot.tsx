'use client';

import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MascotPose } from '@/app/data/mascotPlacements';
import { POSE_SVG_CONTENT } from './poseSvg';

export interface MascotProps {
  pose: MascotPose;
  size: number;
  float?: boolean;
  animateOnView?: boolean;
  decorative?: boolean;
  className?: string;
  placementId?: string;
  speechLine?: string;
  isHeroDarkBg?: boolean;
  onArmAnimate?: boolean;
  onClick?: () => void;
}

export default function Mascot({
  pose,
  size,
  float = false,
  animateOnView = false,
  decorative = true,
  className = '',
  placementId,
  speechLine,
  isHeroDarkBg = false,
  onClick,
}: MascotProps) {
  const shouldReduceMotion = useReducedMotion();
  const [showSpeech, setShowSpeech] = useState(false);

  // Height maintaining 400:420 aspect ratio
  const height = Math.round((size * 420) / 400);

  // Speech bubble session management: show once per session per placement for 4s
  useEffect(() => {
    if (!speechLine || !placementId) return;

    try {
      const storageKey = `sanju_seen_${placementId}`;
      const hasSeen = sessionStorage.getItem(storageKey);
      if (!hasSeen) {
        setShowSpeech(true);
        const timer = setTimeout(() => {
          setShowSpeech(false);
          sessionStorage.setItem(storageKey, 'true');
        }, 4000);
        return () => clearTimeout(timer);
      }
    } catch {
      // sessionStorage unavailable (incognito or SSR)
    }
  }, [placementId, speechLine]);

  const rawSvgHtml = POSE_SVG_CONTENT[pose] || POSE_SVG_CONTENT['wave'];

  // Motion variants
  const entryMotion = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, ease: 'easeOut' as const },
      };

  const floatMotion =
    float && !shouldReduceMotion
      ? {
          animate: { y: [0, -6, 0] },
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut' as const,
          },
        }
      : {};

  return (
    <div
      className={`relative inline-flex flex-col items-center select-none ${className}`}
      style={{ width: size, height }}
      onClick={onClick}
    >
      {/* ── 7. Speech Bubble: max 5 words, white pill, 12px, 4s, once per session ── */}
      {showSpeech && speechLine && (
        <motion.div
          initial={{ opacity: 0, y: 6, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -4, scale: 0.95 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="absolute -top-10 left-1/2 -translate-x-1/2 z-30 pointer-events-none whitespace-nowrap"
          role="status"
          aria-live="polite"
        >
          <div className="relative px-3 py-1 rounded-full bg-white border border-stone-200/90 shadow-md text-[12px] font-extrabold text-[#1B4332] leading-tight flex items-center gap-1.5">
            <span>{speechLine}</span>
            {/* Speech bubble pointer caret */}
            <span
              className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-white"
              aria-hidden="true"
            />
          </div>
        </motion.div>
      )}

      {/* ── Mascot Container with Entry Rise & Float Loop ── */}
      <motion.div
        {...entryMotion}
        {...floatMotion}
        className="w-full h-full flex items-center justify-center relative"
        style={{
          filter: isHeroDarkBg
            ? 'drop-shadow(0 0 24px rgba(255, 255, 255, 0.25))'
            : 'none',
        }}
      >
        <svg
          viewBox="0 0 400 420"
          width={size}
          height={height}
          role={decorative ? 'presentation' : 'img'}
          aria-hidden={decorative ? 'true' : 'false'}
          aria-label={decorative ? undefined : `Sanju mascot in ${pose} pose`}
          className="w-full h-full overflow-visible pointer-events-auto"
          dangerouslySetInnerHTML={{ __html: rawSvgHtml }}
        />
      </motion.div>
    </div>
  );
}
