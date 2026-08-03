'use client';

import React from 'react';

const ContactSection = () => {
  return (
    <section
      className="bg-cover bg-center text-white flex items-center justify-center px-4 sm:px-6 md:px-10 py-8 md:py-12"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('/images/placetovisit1.jpg')",
      }}
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-0 items-center">
        
        <div className="lg:col-span-3 flex flex-col items-center justify-center text-center">
          <div className="inline-block bg-white px-4 sm:px-5 py-2.5 rounded-xl shadow-md">
            <span className="text-xl sm:text-2xl lg:text-[32px] font-extrabold text-purple-800 tracking-wide">
              Emergency Response Team
            </span>
          </div>
        </div>

        <form className="lg:col-span-2 bg-transparent rounded-lg pt-2 pb-4 px-4 sm:pt-3 sm:pb-6 sm:px-6 space-y-3 text-white font-semibold shadow-lg w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full placeholder-white border-2 border-white px-4 py-2 rounded outline-none focus:ring-2 focus:ring-purple-600 bg-transparent"
                required
              />
          </div>
            <div>
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full placeholder-white border-2 border-white px-4 py-2 rounded outline-none focus:ring-2 focus:ring-purple-600 bg-transparent"
              />
            </div>
          </div>

          <div>
            <textarea
              rows={4}
              placeholder="Tell us about your problem"
              className="w-full placeholder-white border-2 border-white px-4 py-2 rounded outline-none focus:ring-2 focus:ring-purple-600 bg-transparent"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/2 text-white font-bold py-2.5 rounded-md transition-transform hover:scale-105"
              style={{
                background: 'linear-gradient(to right, #f97316, #ec4899)',
              }}
            >
              CALL ME
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
