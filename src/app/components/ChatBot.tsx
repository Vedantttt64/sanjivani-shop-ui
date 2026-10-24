'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function ChatBot() {
  const whatsappUrl =
    'https://api.whatsapp.com/send/?phone=919956253672&text&type=phone_number&app_absent=0';

  return (
    <aside aria-label="WhatsApp Chat Support">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Adv. Rahul Torambe"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#25D366] text-white shadow-[0_4px_16px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_22px_rgba(37,211,102,0.65)] hover:bg-[#20ba59] active:scale-95 transition-all duration-300 ring-2 ring-white/90 group"
      >
        <FaWhatsapp className="w-8 h-8 sm:w-9 sm:h-9 text-white transform transition-transform duration-300 group-hover:scale-110 drop-shadow-sm" />
      </a>
    </aside>
  );
}
