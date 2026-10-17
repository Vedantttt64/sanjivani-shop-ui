'use client';

import React, { useState } from 'react';
import { PhoneCall, CheckCircle2 } from 'lucide-react';

const EmergencyART = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    problem: '',
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
    // Simulate emergency callback dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', mobile: '', problem: '' });
      }, 4000);
    }, 600);
  };

  return (
    <section
      aria-labelledby="emergency-response-heading"
      className="relative w-full py-5 sm:py-6 md:py-8 px-4 sm:px-6 lg:px-12 border-y border-[#DCE5DC]"
      style={{
        background: 'linear-gradient(180deg, #F7F9F5 0%, #EDF4EA 100%)',
      }}
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
        {/* Left Column: Heading only */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left">
          <h2
            id="emergency-response-heading"
            className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#176B42] tracking-tight leading-tight"
          >
            Emergency Response Team
          </h2>
        </div>

        {/* Right Column: Compact Form Card */}
        <div className="lg:col-span-6 w-full">
          <div className="bg-white rounded-xl p-4 sm:p-5 border border-[#DCE5DC] shadow-[0_4px_20px_rgba(23,107,66,0.05)] transition-all">
            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="py-5 px-3 text-center rounded-lg bg-[#EDF4EA] border border-[#DCE5DC] space-y-1.5"
              >
                <div className="w-9 h-9 rounded-full bg-[#176B42] text-white flex items-center justify-center mx-auto shadow-2xs">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#176B42]">
                  Emergency Alert Received
                </h4>
                <p className="text-xs text-[#26352D]">
                  Our coordinator has been notified and is calling your mobile number now.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label
                      htmlFor="emergency-name"
                      className="block text-[11px] font-bold text-[#26352D] uppercase tracking-wider mb-1"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="emergency-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full h-9 px-3 rounded-md border border-[#DCE5DC] bg-[#F7F9F5]/40 text-[#26352D] placeholder-[#647067]/70 text-xs font-medium focus:bg-white focus:outline-none focus:ring-1.5 focus:ring-[#176B42] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="emergency-mobile"
                      className="block text-[11px] font-bold text-[#26352D] uppercase tracking-wider mb-1"
                    >
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="emergency-mobile"
                      name="mobile"
                      type="tel"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Mobile Number"
                      required
                      className="w-full h-9 px-3 rounded-md border border-[#DCE5DC] bg-[#F7F9F5]/40 text-[#26352D] placeholder-[#647067]/70 text-xs font-medium focus:bg-white focus:outline-none focus:ring-1.5 focus:ring-[#176B42] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="emergency-problem"
                    className="block text-[11px] font-bold text-[#26352D] uppercase tracking-wider mb-1"
                  >
                    Tell Us About Your Problem <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="emergency-problem"
                    name="problem"
                    rows={2}
                    value={formData.problem}
                    onChange={handleChange}
                    placeholder="Tell us about your problem"
                    required
                    className="w-full p-2.5 rounded-md border border-[#DCE5DC] bg-[#F7F9F5]/40 text-[#26352D] placeholder-[#647067]/70 text-xs font-medium focus:bg-white focus:outline-none focus:ring-1.5 focus:ring-[#176B42] focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div className="pt-1 flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-1/2 h-9 bg-[#176B42] hover:bg-[#125433] active:bg-[#0d3f26] text-white font-bold text-xs uppercase tracking-wider rounded-md shadow-2xs hover:shadow-xs transition-all duration-200 flex items-center justify-center gap-1.5 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
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
};

export default EmergencyART;
