'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/** Display name from image filename (no extension); underscores/hyphens become spaces, words title-cased. */
function nameFromFilename(filename: string): string {
  const base = filename.replace(/\.[^.]+$/i, '');
  return base
    .replace(/[_-]/g, ' ')
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const volunteers = [
  { file: 'kapil.jpeg' },
  { file: 'varad.jpeg' },
  { file: 'Arpit.jpeg', objectPosition: 'center 18%' },
  { file: 'Swaym.jpeg', objectPosition: 'center 68%' },
  { file: 'Vedant.jpeg', objectPosition: 'center 18%' },
  { file: 'Yash.jpeg', objectPosition: 'center 50%' },
  { file: 'harsh.jpeg' },
  { file: 'Pramit.PNG', objectPosition: 'center 35%',  },
].map(({ file, objectPosition }) => ({
  name: nameFromFilename(file),
  image: `/images/volunteers/${file}`,
  objectPosition: objectPosition ?? 'center',
}));

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

      <div className="relative mx-auto w-full max-w-[1736px]">
        <button
          onClick={() => scroll('left')}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
          aria-label="Scroll left"
        >
          <ChevronLeft className="text-black" />
        </button>

        <div
          ref={scrollRef}
          className="flex w-full gap-4 overflow-x-auto px-12 scrollbar-hide scroll-smooth justify-start snap-x snap-mandatory scroll-pl-12 scroll-pr-12"
        >
          {volunteers.map(({ name, image, objectPosition }) => (
            <div
              key={image}
              className="w-full sm:w-[240px] sm:min-w-[240px] lg:w-[260px] lg:min-w-[260px] flex-shrink-0 rounded-2xl overflow-hidden shadow-md bg-white pb-3 snap-start"
            >
              <Image
                src={image}
                alt={`${name}, social work volunteer`}
                width={300}
                height={300}
                sizes="(min-width: 1024px) 260px, (min-width: 640px) 240px, calc(100vw - 6rem)"
                className="w-full aspect-square object-cover"
                style={{ objectPosition }}
              />
              <div className="text-center mt-2 font-semibold text-indigo-900">{name}</div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
          aria-label="Scroll right"
        >
          <ChevronRight className="text-black" />
        </button>
      </div>
    </section>
  );
};

export default VideoTravelBlogs;
