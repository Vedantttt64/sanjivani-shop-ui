'use client';

import React, { useState } from 'react';

export default function OutingPlanner() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submit
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', mobile: '', message: '' });
    }, 3000);
  };

  return (
    <section className="relative w-full overflow-hidden bg-slate-900">
      {/* Background image container matching the reference style */}
      <div 
        className="absolute inset-0 bg-[url('/images/food1.jpg')] bg-cover bg-center opacity-80 pointer-events-none"
        style={{ filter: 'brightness(0.75) contrast(1.05)' }}
      />
      
      {/* Dark overlay to ensure contrast and accessibility */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Main Grid Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-4 md:py-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
        
        {/* Left Side: Copywriting Content */}
        <div className="lg:col-span-6 text-white flex flex-col items-center lg:items-start justify-center">
          <div className="inline-block bg-white px-5 py-2.5 rounded-xl shadow-lg border border-purple-100">
            <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple-700 uppercase tracking-wide">
              Weekend Social Work
            </span>
          </div>
        </div>

        {/* Right Side: Interactive Discussion Form */}
        <div className="lg:col-span-6 bg-black/20 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-md shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-3">
            
            {/* Input Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-transparent border-2 border-white/60 rounded-xl px-4 py-3 text-white placeholder-white/80 focus:border-white focus:outline-none transition-colors duration-200 font-bold text-sm"
                />
              </div>
              <div className="relative">
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  required
                  className="w-full bg-transparent border-2 border-white/60 rounded-xl px-4 py-3 text-white placeholder-white/80 focus:border-white focus:outline-none transition-colors duration-200 font-bold text-sm"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us your weekend social work plan"
                required
                rows={4}
                className="w-full bg-transparent border-2 border-white/60 rounded-xl px-4 py-3 text-white placeholder-white/80 focus:border-white focus:outline-none transition-colors duration-200 font-bold text-sm resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={submitted}
                className="w-1/2 text-white font-bold py-2.5 rounded-md transition-transform hover:scale-105"
                style={{
                  background: 'linear-gradient(to right, #f97316, #ec4899)',
                }}
              >
                {submitted ? 'Submitted Successfully' : 'Submit'}
              </button>
            </div>
            
          </form>
        </div>

      </div>
    </section>
  );
}
