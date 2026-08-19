"use client"

import React, { useState } from 'react'
import IconSection from './IconSection'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { X } from 'lucide-react'

// Icon imports for mobile drawer to match desktop
import { FaPlaneUp } from "react-icons/fa6"
import { FaBriefcaseMedical } from "react-icons/fa"
import { GoLaw } from "react-icons/go"
import { FiPower } from "react-icons/fi"
import { GiTeacher } from "react-icons/gi"
import { PiStudentBold } from "react-icons/pi"
import { PiPlantLight } from "react-icons/pi"
import { GiBroom } from "react-icons/gi"
import { MdBabyChangingStation } from "react-icons/md"
import { MdOutlineSolarPower } from "react-icons/md"
import { FaLaptopCode } from "react-icons/fa"
import { FaPersonMilitaryRifle } from "react-icons/fa6"
import { GiShipBow } from "react-icons/gi"

export default function Navbar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const stateFromParams = searchParams ? searchParams.get('state') : null;
  const [menuOpen, setMenuOpen] = useState(false);

  // Fix 4 — Lock/unlock body scroll when mobile menu opens/closes (prevents iOS background scroll)
  const openMenu = () => {
    setMenuOpen(true);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    }
  };
  const closeMenu = () => {
    setMenuOpen(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
  };
  const [activeState, setActiveState] = useState<string | null>(stateFromParams);

  // Sync state from sessionStorage client-side after initial mount to prevent SSR hydration mismatch
  React.useEffect(() => {
    if (stateFromParams) {
      sessionStorage.setItem('selectedState', stateFromParams);
      setActiveState(stateFromParams);
    } else {
      const stored = sessionStorage.getItem('selectedState');
      if (stored) setActiveState(stored);
    }
  }, [stateFromParams]);

  const redirectToLogin = () => router.push('/login');
  const redirectToHome = () => {
    closeMenu();
    if (activeState) {
      router.push(`/?state=${encodeURIComponent(activeState)}`);
    } else {
      router.push('/');
    }
  };
  const redirectToStartPage = () => {
    closeMenu();
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('selectedState');
    }
    router.push('/');
  };

  /* Nav items data — mirrors IconSection for the mobile drawer */
  const navItems = [
    { title: 'Home' },
    { title: 'District' },
    { title: 'Air' },
    { title: 'Water' },
    { title: 'Food' },
    { title: 'Clothes' },
    { title: 'Shelter' },
    { title: 'Solar' },
    { title: 'Education' },
    { title: 'Work' },
    { title: 'Medical' },
    { title: 'Legal' },
    { title: 'Login' },
  ];

  // Helper to map navigation titles to matching icons
  const getIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t === 'home') return <FaPersonMilitaryRifle size={20} />;
    if (t === 'district') return <MdBabyChangingStation size={20} />;
    if (t === 'air') return <FaPlaneUp size={20} />;
    if (t === 'water') return <GiShipBow size={20} />;
    if (t === 'food') return <PiPlantLight size={20} />;
    if (t === 'clothes') return <GiBroom size={20} />;
    if (t === 'shelter') return <PiStudentBold size={20} />;
    if (t === 'solar') return <MdOutlineSolarPower size={20} />;
    if (t === 'education') return <GiTeacher size={20} />;
    if (t === 'work') return <FaLaptopCode size={20} />;
    if (t === 'medical') return <FaBriefcaseMedical size={20} />;
    if (t === 'legal') return <GoLaw size={20} />;
    if (t === 'login') return <FiPower size={20} />;
    return null;
  };

  return (
    <>
      {/* ── Main Navbar bar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="flex items-center justify-between gap-3 max-w-screen-xl mx-auto px-3 sm:px-6 py-0 sm:py-1">

          {/* Logo & Selected State */}
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0 cursor-pointer" onClick={redirectToStartPage}>
              <Image
                src="/images/sanjivani-logo.png"
                alt="sanjivani-logo"
                width={105}
                height={80}
                className="object-contain"
              />
            </div>
            {activeState && (
              <div className="flex items-center pl-2 border-l-2 border-slate-300 h-8">
                <span className="text-slate-800 font-extrabold text-xs sm:text-sm tracking-wide uppercase select-none whitespace-nowrap">
                  {activeState}
                </span>
              </div>
            )}
          </div>

          {/* Desktop nav (hidden on mobile) */}
          <div className="hidden sm:flex flex-1">
            <IconSection />
          </div>

          {/* Right side: hamburger on mobile | login always */}
          <div className="flex items-center gap-3">
            {/* Hamburger — mobile only */}
            <button
              onClick={openMenu}
              className="sm:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 rounded-lg hover:bg-slate-100 transition"
              aria-label="Open menu"
            >
              <span className="block w-6 h-[2.5px] bg-slate-700 rounded-full" />
              <span className="block w-6 h-[2.5px] bg-slate-700 rounded-full" />
              <span className="block w-6 h-[2.5px] bg-slate-700 rounded-full" />
            </button>

          </div>

        </div>
      </nav>

      {/* ── Mobile drawer backdrop ── Fix 5: -webkit-backdrop-filter for iOS Safari blur support */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-full z-[60] bg-black/40 backdrop-blur-sm sm:hidden"
          style={{
            height: '100vh',
            // @ts-ignore
            WebkitBackdropFilter: 'blur(4px)',
            backdropFilter: 'blur(4px)',
          }}
          onClick={closeMenu}
        />
      )}

      <div
<<<<<<< HEAD
        className={`fixed top-0 left-0 h-fit max-h-[90vh] max-h-[90dvh] overflow-y-auto rounded-br-3xl w-[58vw] max-w-xs z-[70] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out sm:hidden ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
=======
        className={`fixed top-0 left-0 rounded-br-3xl w-[60vw] max-w-[210px] z-[70] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out sm:hidden ${menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        style={{
          height: 'auto',
          maxHeight: '90dvh',
          transform: menuOpen ? 'translateX(0) translateZ(0)' : 'translateX(-100%) translateZ(0)', /* Fix 3: GPU compositing */
          WebkitTransform: menuOpen ? 'translateX(0) translateZ(0)' : 'translateX(-100%) translateZ(0)',
          overflowY: 'auto',
        }}
>>>>>>> 14f67caba4e75bea1862508b4f480e215c231e10
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-3 py-3 border-b border-slate-100">
          <Image
            src="/images/sanjivani-logo.png"
            alt="sanjivani-logo"
            width={150}
            height={100}
            className="object-contain cursor-pointer"
            onClick={redirectToStartPage}
          />
          <button
            onClick={closeMenu}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 active:bg-red-700 transition"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav list — Fix 2: -webkit-overflow-scrolling:touch for smooth iOS momentum scroll */}
        <nav
          className="flex-1 overflow-y-auto py-2 px-2 pb-4 space-y-0.5"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {navItems.map((item, i) => (
            <button
              key={i}
              onClick={() => {
                closeMenu();
                if (typeof window !== 'undefined') {
                  const urlParams = new URLSearchParams(window.location.search);
                  const stateParam = urlParams.get('state') || sessionStorage.getItem('selectedState');
                  if (item.title.toLowerCase() === 'login') {
                    router.push('/login');
                  } else if (item.title.toLowerCase() === 'district' && stateParam?.toLowerCase() === 'maharashtra') {
                    router.push('/district');
                  } else if (item.title.toLowerCase() === 'home' && stateParam) {
                    router.push(`/?state=${encodeURIComponent(stateParam)}`);
                  }
                }
              }}
              className="flex w-full items-center gap-3 px-4 py-1.5 rounded-xl text-left text-xs font-extrabold uppercase tracking-wider text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-colors">
                {getIcon(item.title)}
              </span>
              {item.title}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}

