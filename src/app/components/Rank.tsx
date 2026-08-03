'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SDGGoal {
  id: number;
  title: string;
  color: string;
  image: string;
  score: string;
  status: 'Active' | 'Pending';
}

const sdgGoals: SDGGoal[] = [
  { id: 1, title: 'No Poverty', color: '#e5243b', image: '/images/Popular/sdg1.jpg', score: 'Rank 15', status: 'Active' },
  { id: 2, title: 'Zero Hunger', color: '#dda63a', image: '/images/Popular/sdg2.jpg', score: 'Rank 18', status: 'Active' },
  { id: 3, title: 'Good Health and Well-being', color: '#4c9f38', image: '/images/Popular/sdg3.jpg', score: 'Rank 9', status: 'Active' },
  { id: 4, title: 'Quality Education', color: '#c5192d', image: '/images/Popular/sdg4.jpg', score: 'Rank 5', status: 'Active' },
  { id: 5, title: 'Gender Equality', color: '#ff3a21', image: '/images/Popular/sdg5.jpg', score: 'Rank 21', status: 'Active' },
  { id: 6, title: 'Clean Water and Sanitation', color: '#26bde2', image: '/images/Popular/sdg6.jpg', score: 'Rank 6', status: 'Active' },
  { id: 7, title: 'Affordable and Clean Energy', color: '#fcc30b', image: '/images/Popular/sdg7.jpg', score: 'Rank 4', status: 'Active' },
  { id: 8, title: 'Decent Work and Economic Growth', color: '#a21942', image: '/images/Popular/sdg8.jpg', score: 'Rank 11', status: 'Active' },
  { id: 9, title: 'Industry, Innovation and Infrastructure', color: '#fd6925', image: '/images/Popular/sdg9.jpg', score: 'Rank 14', status: 'Active' },
  { id: 10, title: 'Reduced Inequality', color: '#dd1367', image: '/images/Popular/sdg10.jpg', score: 'Rank 12', status: 'Active' },
  { id: 11, title: 'Sustainable Cities and Communities', color: '#fd9d24', image: '/images/Popular/sdg11.jpg', score: 'Rank 8', status: 'Active' },
  { id: 12, title: 'Responsible Consumption and Production', color: '#bf8b2e', image: '/images/Popular/sdg12.jpg', score: 'Rank 10', status: 'Active' },
  { id: 13, title: 'Climate Action', color: '#3f7e44', image: '/images/Popular/sdg13.jpg', score: 'Rank 17', status: 'Active' },
  { id: 14, title: 'Life Below Water', color: '#0a97d9', image: '/images/Popular/sdg14.jpg', score: 'Rank 22', status: 'Active' },
  { id: 15, title: 'Life on Land', color: '#56c02b', image: '/images/Popular/sdg15.jpg', score: 'Rank 16', status: 'Active' },
  { id: 16, title: 'Peace, Justice and Strong Institutions', color: '#00689d', image: '/images/Popular/sdg16.jpg', score: 'Rank 7', status: 'Active' },
  { id: 17, title: 'Partnerships for the Goals', color: '#19486a', image: '/images/Popular/sdg17.jpg', score: 'Rank 19', status: 'Active' }
];

export default function Rank() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const firstChild = container.firstElementChild as HTMLElement;
      if (firstChild) {
        const cardWidth = firstChild.getBoundingClientRect().width;
        const style = window.getComputedStyle(container);
        const gap = parseFloat(style.columnGap || style.gap || '0') || 16;
        const scrollAmount = cardWidth + gap;
        container.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <section className="bg-[#f2f1f9] pt-2 pb-8 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-indigo-900 tracking-tight">
            India SDG Progress & Rankings
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-gray-600 font-medium">
            Track India's performance, scores, and global standing across the United Nations Sustainable Development Goals (SDGs).
          </p>
        </div>

        <div className="relative">
          {/* Left Navigation Chevron Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-slate-200/80 shadow-md w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-50 transition active:scale-95"
            aria-label="Scroll left"
          >
            <ChevronLeft size={22} className="text-black" />
          </button>

          {/* Horizontal Scrolling Flexbox Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth px-1 sm:px-4 py-2 snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {/* Inject CSS style dynamically to hide WebKit scrollbars */}
            <style jsx global>{`
              .scrollbar-hidden::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {sdgGoals.map((goal) => (
              <div
                key={goal.id}
                className="bg-white rounded-2xl border-2 border-white shadow-sm p-4 flex flex-col justify-between items-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group cursor-pointer flex-shrink-0 w-[180px] sm:w-[220px] snap-start"
              >
                {/* SDG Icon Tile Container */}
                <div className="relative w-[148px] h-[148px] sm:w-[188px] sm:h-[188px] rounded-xl overflow-hidden shadow-inner mb-3 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={goal.image}
                    alt={`SDG Goal ${goal.id}: ${goal.title}`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Goal Title */}
                <div className="flex-1 flex flex-col justify-start mb-0">
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-500 mb-0.5">
                    Goal {goal.id}
                  </span>
                  <h3 className="font-extrabold text-slate-800 text-sm sm:text-base leading-snug line-clamp-2 px-1 group-hover:text-indigo-600 transition-colors">
                    {goal.title}
                  </h3>
                </div>

                {/* Progress/Score Badge */}
                <div className="w-full mt-0.5">
                  <span className="block font-extrabold text-slate-800 text-sm sm:text-base tracking-wide">
                    {goal.score}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Navigation Chevron Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-slate-200/80 shadow-md w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-50 transition active:scale-95"
            aria-label="Scroll right"
          >
            <ChevronRight size={22} className="text-black" />
          </button>
        </div>
      </div>
    </section>
  );
}
