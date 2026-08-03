'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Footer() {
  const router = useRouter();
  return (
    <>
      <footer className="bg-[#0B132A] text-white font-bold py-6 px-6 md:px-12 flex flex-col items-center">
        <div className="max-w-7xl w-full flex flex-col items-center gap-6">
          
          {/* Logo Title */}
          <h2 className="text-2xl font-bold text-center">
            <span className="text-white">Sanjivani</span>
          </h2>

          {/* Redesigned Brand Social Media Icons */}
          <div className="flex flex-col items-center justify-center gap-2 w-full">
            <span className="text-xs font-bold text-slate-400">Follow Us</span>
            <div className="flex gap-4 justify-center items-center">
              {/* Twitter/X */}
              <a 
                href="https://x.com/SanjivaniNGO" /* Redirect to Sanjivani's official X page */
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-transform hover:scale-110 block"
                aria-label="X (Twitter)"
              >
                <Image src="/assets/icons/social/twitter.png" alt="X Logo" width={36} height={36} className="rounded-full" />
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com/SanjivaniNGO" /* Redirect to Sanjivani's official Instagram page */
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-transform hover:scale-110 block"
                aria-label="Instagram"
              >
                <Image src="/assets/icons/social/instagram.png" alt="Instagram Logo" width={36} height={36} className="rounded-full" />
              </a>

              {/* Facebook */}
              <a 
                href="https://facebook.com/SanjivaniNGO" /* Redirect to Sanjivani's official Facebook page */
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-transform hover:scale-110 block"
                aria-label="Facebook"
              >
                <Image src="/assets/icons/social/facebook.jpg" alt="Facebook Logo" width={36} height={36} className="rounded-full" />
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/company/SanjivaniNGO" /* Redirect to Sanjivani's official LinkedIn page */
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-transform hover:scale-110 block"
                aria-label="LinkedIn"
              >
                <Image src="/assets/icons/social/linkedin.jpg" alt="LinkedIn Logo" width={36} height={36} className="rounded-full" />
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/918956253672" /* Redirect to Sanjivani's official WhatsApp contact */
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-transform hover:scale-110 block"
                aria-label="WhatsApp"
              >
                <Image src="/assets/icons/social/whatsapp.png" alt="WhatsApp Logo" width={36} height={36} className="rounded-full" />
              </a>

              {/* YouTube */}
              <a 
                href="https://youtube.com/@SanjivaniNGO" /* Redirect to Sanjivani's official YouTube channel */
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-transform hover:scale-110 block"
                aria-label="YouTube"
              >
                <Image src="/assets/icons/social/youtube.png" alt="YouTube Logo" width={36} height={36} className="rounded-full" />
              </a>
            </div>
          </div>

          {/* Redesigned Links Columns — Mobile horizontal scroll, Desktop 4-column grid */}
          <div className="w-full overflow-x-auto md:overflow-visible scrollbar-hidden flex md:grid md:grid-cols-4 gap-8 py-3 px-4 md:px-0 whitespace-nowrap md:whitespace-normal justify-start border-t border-b border-white/10 my-1">
            
            {/* Column 1: Company */}
            <div className="flex flex-col gap-3 text-left shrink-0 min-w-[140px] md:min-w-0">
              <h3 className="font-extrabold text-[#E87B35] text-base uppercase tracking-wider">Company</h3>
              <ul className="flex flex-col gap-2 text-sm text-slate-300 font-semibold">
                <li><a href="#" className="hover:text-[#E87B35]">About Us</a></li>
                <li><a href="#" className="hover:text-[#E87B35]">Contact Us</a></li>
                <li><a href="#" className="hover:text-[#E87B35]">IPR Compliance</a></li>
                <li><a href="#" className="hover:text-[#E87B35]">GDPR Compliance</a></li>
                <li><a href="#" className="hover:text-[#E87B35]">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#E87B35]">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-[#E87B35]">Refund Policy</a></li>
              </ul>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col gap-3 text-left shrink-0 min-w-[140px] md:min-w-0">
              <h3 className="font-extrabold text-[#E87B35] text-base uppercase tracking-wider">Quick Links</h3>
              <ul className="flex flex-col gap-2 text-sm text-slate-300 font-semibold">
                <li><a href="#" className="hover:text-[#E87B35]">Login/Register</a></li>
                <li><a href="#" className="hover:text-[#E87B35]">Vendor Registration</a></li>
                <li><a href="#" className="hover:text-[#E87B35]">Corporate Registration</a></li>
                <li><a href="#" className="hover:text-[#E87B35]">Anti-Spam Policy</a></li>
                <li><a href="#" className="hover:text-[#E87B35]">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-[#E87B35]">Abuse Policy</a></li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="flex flex-col gap-3 text-left shrink-0 min-w-[140px] md:min-w-0">
              <h3 className="font-extrabold text-[#E87B35] text-base uppercase tracking-wider">Services</h3>
              <ul className="flex flex-col gap-2 text-sm text-slate-300 font-semibold">
                <li><a href="#" className="hover:text-[#E87B35]">Photo Gallery</a></li>
                <li><a href="#" className="hover:text-[#E87B35]">Video Gallery</a></li>
                <li><a href="#" className="hover:text-[#E87B35]">NEWS</a></li>
                <li><a href="#" className="hover:text-[#E87B35]">Internship</a></li>
                <li><a href="#" className="hover:text-[#E87B35]">CSR Opportunity</a></li>
                <li><a href="#" className="hover:text-[#E87B35]">Share NGO Banner</a></li>
              </ul>
            </div>

            {/* Column 4: Donate & Support */}
            <div className="flex flex-col gap-3 text-left shrink-0 min-w-[140px] md:min-w-0">
              <h3 className="font-extrabold text-[#E87B35] text-base uppercase tracking-wider">Support</h3>
              <ul className="flex flex-col gap-2 text-sm text-slate-300 font-semibold">
                <li><a href="#" className="hover:text-[#E87B35]">Donate in Honour of</a></li>
                <li><a href="#" className="hover:text-[#E87B35]">Donate in Memory of</a></li>
                <li><a href="#" className="hover:text-[#E87B35]">Donate on Occasion of</a></li>
                <li><a href="#" className="hover:text-[#E87B35]">Volunteer Publication</a></li>
                <li><a href="#" className="hover:text-[#E87B35]">FAQ’s</a></li>
              </ul>
            </div>

          </div>

          {/* Copyright Info */}
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider text-center mt-1">
            &copy; {new Date().getFullYear()} Sanjivani NGO. All rights reserved.
          </p>

        </div>
      </footer>

      {/* Floating Donate Button */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:bottom-6 md:right-28 md:left-auto md:translate-x-0 z-50">
        <button
          onClick={() => router.push('/donation')}
          className="relative overflow-hidden rounded-full bg-gradient-to-r from-[#FF7A00] via-[#E87B35] to-[#FF9E46] px-16 md:px-6 py-3 text-center text-sm font-black tracking-wider text-white shadow-[0_4px_20px_rgba(232,123,53,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_25px_rgba(232,123,53,0.7)] active:scale-95 opacity-100"
        >
          <span className="absolute inset-0 block w-full h-full bg-gradient-to-r from-transparent via-white/45 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
          DONATE
        </button>
      </div>
    </>
  );
}
