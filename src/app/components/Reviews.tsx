"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    id: 4,
    name: "Nikita Kalbhor",
    date: "2024-07-09",
    rating: 5,
    text: "The purpose of life is not to be happy, it is to be useful — to make some difference that you have lived and lived well.",
    avatar: "N",
  },
  {
    id: 5,
    name: "Snehil Suhas",
    date: "2024-05-02",
    rating: 4,
    text: "I want to express my sincere gratitude to Sanjivani for the incredible learning experience I've had with your organisation.",
    avatar: "S",
  },
  {
    id: 6,
    name: "Harsh K",
    date: "2024-07-22",
    rating: 5,
    text: "We conducted a food drive helping the needy and poor in ways that truly changed me.",
    avatar: "H",
  },
  {
    id: 1,
    name: "Tanay Jain",
    date: "2024-10-02",
    rating: 4,
    text: "Engaging with Sanjivani has been incredibly rewarding. We created posters, gathered donations, and distributed food to the underprivileged.",
    avatar: "T",
  },
  {
    id: 2,
    name: "Tejas Patil",
    date: "2024-12-09",
    rating: 5,
    text: "Annapurna Mission to distribute free food to needy individuals. We witnessed the gratitude and relief on the faces of those who received the meals.",
    avatar: "T",
  },
  {
    id: 3,
    name: "Tanmay B",
    date: "2024-08-29",
    rating: 5,
    text: "My experience with Sanjivani NGO has been truly remarkable. The organization's commitment to helping the poor and needy is commendable.",
    avatar: "T",
  },
];

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const firstChild = container.firstElementChild as HTMLElement;
      if (firstChild) {
        const cardWidth = firstChild.getBoundingClientRect().width;
        const style = window.getComputedStyle(container);
        const gap = parseFloat(style.columnGap || style.gap || '0') || 24;
        const scrollAmount = cardWidth + gap;
        container.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <section className="w-full bg-[#f2f1f9] pb-12 pt-0 md:pb-16 md:pt-0 px-2 sm:px-4 md:px-6 lg:px-8 flex justify-center">
      <div className="max-w-[1400px] w-full flex flex-col items-center gap-6">
        <div className="w-full flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight flex items-center justify-center gap-2 leading-tight">
            <span>
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </span>
            <span className="text-indigo-800">Reviews</span>
          </h2>
        </div>

        <div className="w-full relative flex items-center px-10 sm:px-12">
          <button
            onClick={() => scroll('left')}
            className="absolute left-1 sm:left-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition z-10"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          </button>

          <div
            ref={scrollRef}
            className="flex w-full gap-4 sm:gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory px-0 scroll-pl-0 scroll-pr-0 items-stretch"
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] flex-shrink-0 border border-slate-100 rounded-2xl overflow-hidden bg-white shadow-md p-5 sm:p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 snap-center min-w-0 min-h-[190px]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3 min-w-0">
                      {review.avatar.startsWith("/") ? (
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shrink-0"
                        />
                      ) : (
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-extrabold text-sm sm:text-base shrink-0">
                          {review.avatar}
                        </div>
                      )}
                      <div className="flex flex-col min-w-0">
                        <h3 className="font-extrabold text-slate-800 text-sm sm:text-base truncate">
                          {review.name}
                        </h3>
                        <p className="text-xs text-slate-400 font-semibold">
                          {review.date}
                        </p>
                      </div>
                    </div>
                    <img
                      src="/images/owner.jpg"
                      alt="Owner"
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover shrink-0"
                    />
                  </div>

                  <div className="flex gap-0.5 sm:gap-1 mt-3">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                            i < review.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                  </div>

                  <p className="mt-3 text-slate-600 text-[13px] sm:text-[14px] leading-relaxed font-medium line-clamp-4">
                    {review.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition z-10"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          </button>
        </div>
      </div>
    </section>
  );
}
