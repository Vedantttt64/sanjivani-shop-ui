"use client";

import React, { useState, useEffect } from "react";
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
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  // Responsive items count detector
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(1);
      } else if (width < 768) {
        setVisibleCount(2);
      } else if (width < 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, reviews.length - visibleCount);

  // Keep index within bounds if window resizes
  useEffect(() => {
    setStartIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <section className="w-full bg-[#f2f1f9] pt-1 pb-10 sm:pb-12 md:pb-14 px-3 sm:px-6 lg:px-8 flex justify-center">
      <div className="max-w-[1400px] w-full flex flex-col items-center">
        {/* Centered Heading with minimal top whitespace */}
        <div className="w-full flex flex-col items-center text-center mb-4 sm:mb-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight flex items-center justify-center gap-2 leading-tight">
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

        {/* Carousel Container */}
        <div className="w-full relative flex items-center">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute -left-2 sm:-left-3 lg:-left-4 bg-white p-2 sm:p-2.5 rounded-full shadow-md hover:bg-gray-50 active:scale-95 transition-all z-20 border border-slate-200 cursor-pointer"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 text-slate-800" />
          </button>

          {/* Masked Viewport */}
          <div className="w-full overflow-hidden rounded-2xl py-2 px-1">
            <div
              className="flex transition-transform duration-400 ease-out"
              style={{
                transform: `translateX(-${startIndex * (100 / visibleCount)}%)`,
              }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex-shrink-0 px-2 sm:px-3 box-border"
                  style={{
                    width: `${100 / visibleCount}%`,
                  }}
                >
                  <div className="h-full border border-slate-200/90 rounded-2xl bg-white shadow-sm hover:shadow-md p-4 sm:p-5 flex flex-col justify-between transition-all duration-300">
                    <div>
                      {/* Reviewer Header */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5 min-w-0">
                          {review.avatar.startsWith("/") ? (
                            <img
                              src={review.avatar}
                              alt={review.name}
                              className="w-10 h-10 rounded-full object-cover shrink-0"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-extrabold text-sm shrink-0">
                              {review.avatar}
                            </div>
                          )}
                          <div className="flex flex-col min-w-0">
                            <h3 className="font-extrabold text-slate-800 text-sm truncate">
                              {review.name}
                            </h3>
                            <p className="text-[11px] text-slate-400 font-semibold">
                              {review.date}
                            </p>
                          </div>
                        </div>
                        <img
                          src="/images/owner.jpg"
                          alt="Owner"
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover shrink-0"
                        />
                      </div>

                      {/* Stars */}
                      <div className="flex gap-0.5 mt-2.5">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${
                                i < review.rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                      </div>

                      {/* Text */}
                      <p className="mt-2.5 text-slate-600 text-xs sm:text-[13px] leading-relaxed font-medium line-clamp-4">
                        {review.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute -right-2 sm:-right-3 lg:-right-4 bg-white p-2 sm:p-2.5 rounded-full shadow-md hover:bg-gray-50 active:scale-95 transition-all z-20 border border-slate-200 cursor-pointer"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 text-slate-800" />
          </button>
        </div>
      </div>
    </section>
  );
}
