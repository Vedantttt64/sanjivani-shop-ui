'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
    
const countries = [
  { name: 'Rahul', image: '/images/Travel Bloggers/travel.png' },
  { name: 'Neha', image: '/images/Travel Bloggers/travel3.png' },
  { name: 'Anjali', image: '/images/Travel Bloggers/travel1.png' },
  { name: 'Vikram', image: '/images/Travel Bloggers/travel4.png' },
  { name: 'Sukanya', image: '/images/Travel Bloggers/travel2.png' },
  { name: 'Pooja', image: '/images/Travel Bloggers/travel3.png' },
];

const VideoTravelBlogs = () => {
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
    <section className="pt-0 pb-8 bg-[#f2f1f9]">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-indigo-800 mb-6">
        Join Social Work Enthusiast Team
      </h2>

      <div className="relative px-4">
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
          aria-label="Scroll left"
        >
          <ChevronLeft className="text-black" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto px-4 scrollbar-hide scroll-smooth justify-start xl:justify-center snap-x snap-mandatory scroll-pl-4 scroll-pr-4"
        >
          {countries.map(({ name, image }) => (
            <div
              key={name}
              className="w-[calc(100vw-32px)] sm:w-[210px] sm:min-w-[210px] flex-shrink-0 h-57 rounded-2xl overflow-hidden shadow-md bg-white pb-3 snap-center"
            >
              <Image
                src={image}
                alt={name}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="text-center mt-2 font-semibold text-indigo-900">{name}</div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
          aria-label="Scroll right"
        >
          <ChevronRight className="text-black" />
        </button>
      </div>
    </section>
  );
};

export default VideoTravelBlogs;
