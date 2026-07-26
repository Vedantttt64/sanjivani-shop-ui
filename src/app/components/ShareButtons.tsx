'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Share2, Check, Copy } from 'lucide-react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

interface ShareButtonsProps {
  url?: string;
  title?: string;
  className?: string;
}

export default function ShareButtons({ url, title, className = '' }: ShareButtonsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get current page URL if none is provided
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const shareTitle = title || 'Help support this campaign!';

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleShare = (platform: string) => {
    let shareLink = '';
    switch (platform) {
      case 'whatsapp':
        shareLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`;
        window.open(shareLink, '_blank');
        break;
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        window.open(shareLink, '_blank');
        break;
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`;
        window.open(shareLink, '_blank');
        break;
      case 'instagram':
        // Fallback copy link for Instagram
        navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
        break;
      default:
        break;
    }
    setIsOpen(false);
  };

  return (
    <div className={`relative inline-block w-full ${className}`} ref={dropdownRef}>
      {/* Unified Trigger Button - Styled as off-white and rounded-full */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[#f8fafc] hover:bg-[#f1f5f9] text-slate-800 border border-slate-200/80 font-extrabold text-sm py-3.5 px-4 rounded-full shadow transition-all duration-200 flex items-center justify-center gap-2 relative overflow-hidden"
      >
        <Share2 size={16} className="text-slate-600" />
        <span>SHARE THIS CAMPAIGN</span>
      </button>

      {/* Share Options Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 left-0 mt-2 z-50 bg-white border border-slate-200 rounded-xl shadow-xl p-3 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-150">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 pb-1 border-b border-slate-100">
            Share to support
          </p>

          <div className="grid grid-cols-2 gap-2 mt-1">
            {/* WhatsApp */}
            <button
              onClick={() => handleShare('whatsapp')}
              className="flex items-center gap-2 p-2.5 rounded-lg text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] transition-colors"
            >
              <FaWhatsapp size={16} />
              <span>WhatsApp</span>
            </button>

            {/* Facebook */}
            <button
              onClick={() => handleShare('facebook')}
              className="flex items-center gap-2 p-2.5 rounded-lg text-xs font-bold text-white bg-[#1877F2] hover:bg-[#1565d8] transition-colors"
            >
              <FaFacebook size={16} />
              <span>Facebook</span>
            </button>

            {/* Twitter/X */}
            <button
              onClick={() => handleShare('twitter')}
              className="flex items-center gap-2 p-2.5 rounded-lg text-xs font-bold text-white bg-[#000000] hover:bg-[#222222] transition-colors"
            >
              <FaTwitter size={16} />
              <span>Twitter / X</span>
            </button>

            {/* Instagram Fallback */}
            <button
              onClick={() => handleShare('instagram')}
              className="flex items-center gap-2 p-2.5 rounded-lg text-xs font-bold text-white bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:opacity-95 transition-opacity"
            >
              <FaInstagram size={16} />
              <span>Instagram</span>
            </button>
          </div>
        </div>
      )}

      {/* Copied Alert Toast */}
      {copied && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white text-xs font-bold py-2.5 px-4 rounded-lg shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
          <Check size={14} className="text-green-400" />
          <span>Link copied! Paste it in your Instagram story or post.</span>
        </div>
      )}
    </div>
  );
}
