'use client';

import React, { useState } from 'react';
import { CheckCircle2, PhoneCall } from 'lucide-react';

export default function OutingPlanner() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submit
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', mobile: '', message: '' });
      }, 4000);
    }, 600);
  };

  return (
    <section
      aria-labelledby="weekend-social-heading"
      className="relative w-full overflow-hidden bg-cover bg-center py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-12"
      style={{
        backgroundImage: "url('/images/food1.jpg')",
      }}
    >
      {/* Subtle low-opacity tint to keep photo naturally bright & clear */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.08) 55%, rgba(0, 0, 0, 0.15) 100%)',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left Column: Section Heading only */}
        <div className="lg:col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h2
            id="weekend-social-heading"
            className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight [text-shadow:_0_2px_12px_rgba(0,0,0,0.7)]"
          >
            Weekend Social Work
          </h2>
        </div>

        {/* Right Column: Clean White Form Card Surface */}
        <div className="lg:col-span-6 w-full">
          <div className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-white/20 shadow-2xl backdrop-blur-xs transition-all">
            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="py-6 px-4 text-center rounded-xl bg-amber-50 border border-amber-200 space-y-2"
              >
                <div className="w-10 h-10 rounded-full bg-[#176B42] text-white flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#176B42]">
                  Plan Registered Successfully
                </h4>
                <p className="text-xs text-slate-700">
                  Thank you for volunteering! Our weekend coordinator will call you shortly with activity details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="text-left">
                    <label
                      htmlFor="weekend-name"
                      className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="weekend-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full h-9.5 px-3 rounded-lg border border-slate-300 bg-slate-50/60 text-slate-800 placeholder-slate-400 text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="text-left">
                    <label
                      htmlFor="weekend-mobile"
                      className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1"
                    >
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="weekend-mobile"
                      name="mobile"
                      type="tel"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Mobile Number"
                      required
                      className="w-full h-9.5 px-3 rounded-lg border border-slate-300 bg-slate-50/60 text-slate-800 placeholder-slate-400 text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="text-left">
                  <label
                    htmlFor="weekend-plan"
                    className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1"
                  >
                    Tell Us Your Weekend Social Work Plan <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="weekend-plan"
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us your weekend social work plan"
                    required
                    className="w-full p-2.5 rounded-lg border border-slate-300 bg-slate-50/60 text-slate-800 placeholder-slate-400 text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div className="pt-1 flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-[86%] sm:w-[40%] h-9.5 bg-black hover:bg-neutral-800 active:bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Submitting...' : 'CALL ME'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
