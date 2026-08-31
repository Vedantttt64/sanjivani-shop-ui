import React, { ReactNode } from 'react'
import Image from 'next/image'
import Navbar from '../../sections/Navbar'

type AuthCardProps = {
  children: ReactNode
}

/**
 * Shared layout for Login and Register pages.
 * - Desktop: Navbar + two-column (logo left | card right)
 * - Mobile: Navbar + single-column (logo above card)
 */
export default function AuthCard({ children }: AuthCardProps) {
  return (
    <div className="min-h-screen bg-[#eef0f5] flex flex-col">
      {/* Site Navbar */}
      <Navbar />

      {/* Page body — push below fixed Navbar (~72px) */}
      <div className="flex flex-1 items-start md:items-center justify-center pt-[90px] md:pt-[72px]">
        {/*
          Desktop: side-by-side, max 900px wide, centred
          Mobile:  single column, logo above card
        */}
        <div className="w-full max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center md:items-center justify-center gap-8 md:gap-16">

          {/* ── Logo panel ── */}
          <div className="flex-shrink-0 flex items-center justify-center
                          w-full md:w-auto">
            <div className="flex items-center justify-center
                            w-60 h-auto md:w-[480px] md:min-h-[320px]">
              <Image
                src="/images/sanjivani-logo.png"
                alt="Sanjivani Logo"
                width={500}
                height={320}
                className="object-contain w-[85%] h-auto md:w-[460px] md:h-[300px]"
                priority
              />
            </div>
          </div>

          {/* ── Form card ── */}
          <div className="w-full md:w-[600px] max-w-sm md:max-w-none
                          bg-white rounded-xl shadow-lg border border-gray-100
                          p-8 md:p-14">
            {children}
          </div>

        </div>
      </div>
    </div>
  )
}
