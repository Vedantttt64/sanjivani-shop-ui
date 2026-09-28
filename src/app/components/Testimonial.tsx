"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonialsData = [
  {
    name: "Rahul",
    role: "Volunteer from Maharashtra",
    message: "Thanks for helping us. The support and service were beyond what I expected!",
    image: "/images/rahul1.png",
  },
  {
    name: "Priya Sharma",
    role: "Donor & Supporter",
    message: "Seeing the real-world impact of my contribution to child education brings so much joy. Sanjivani is doing incredible work!",
    image: "/images/banner/b2.jpg",
  },
  {
    name: "Aniket Deshmukh",
    role: "Community Coordinator",
    message: "The dedication of the team during food distribution and healthcare drives is inspiring. Proud to be associated with Sanjivani.",
    image: "/images/food1.jpg",
  },
  {
    name: "Sunita Patil",
    role: "Beneficiary",
    message: "The healthcare support provided to elderly members in our district was a true blessing. Thank you for your care.",
    image: "/images/oldage1.jpg",
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[currentIndex];

  return (
    <div className="bg-[#f2f1f9] pt-4 pb-12 md:pt-4 md:pb-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-indigo-800 mb-6">
          What people say about us
        </h2>

        <div className="relative w-full flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="absolute -left-2 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 p-2.5 sm:p-3 rounded-full shadow-md hover:bg-gray-100 transition active:scale-95"
          >
            <ChevronLeft size={24} className="text-black" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="absolute -right-2 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 p-2.5 sm:p-3 rounded-full shadow-md hover:bg-gray-100 transition active:scale-95"
          >
            <ChevronRight size={24} className="text-black" />
          </button>

          {/* Single Card Slide */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative bg-white shadow-md border border-gray-200 
            rounded-2xl p-4 sm:p-6 md:p-8 w-full sm:w-[85%] md:w-[75%] 
            flex flex-col sm:flex-row items-center justify-center 
            gap-4 sm:gap-8 group overflow-hidden"
          >
            <motion.div
              className="relative w-full h-60 sm:w-64 sm:h-64 rounded-xl overflow-hidden flex-shrink-0"
            >
              <Image
                src={current.image}
                alt={current.name}
                fill
                className="object-cover rounded-xl"
              />
            </motion.div>

            <div className="relative text-center sm:text-left flex-1 w-full">
              <div className="mt-2 sm:mt-0 sm:ml-6 md:sm:ml-10">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {current.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 italic mb-2 leading-relaxed">
                  "{current.message}"
                </p>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                  — {current.role}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
