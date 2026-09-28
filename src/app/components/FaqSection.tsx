'use client';

import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: 'What is Sanjivani and what causes does it support?',
    answer: 'Sanjivani is a community platform supporting healthcare, education, elderly care, clean energy, food distribution, and social welfare causes.',
  },
  {
    question: 'How can I donate to a campaign through Sanjivani?',
    answer: 'Select any active campaign or cause from the home or donation page, click Donate Now, enter your desired contribution, and complete payment securely.',
  },
  {
    question: 'How is my donation used for the selected cause?',
    answer: 'Your donation goes directly toward funding the specific cause or campaign you select, such as healthcare treatment, food, or educational resources.',
  },
  {
    question: 'Can I choose a specific campaign or cause to donate to?',
    answer: 'Yes, you can browse through individual campaign categories, urgent initiatives, or state-wise causes and contribute to the one you choose.',
  },
  {
    question: 'Will I receive a confirmation or receipt after making a donation?',
    answer: 'Yes, after successfully completing your donation, an instant digital confirmation with details of your contribution will be provided.',
  },
  {
    question: 'Is my payment and personal information secure?',
    answer: 'Yes, all payments are processed through encrypted payment gateways, and your personal data is handled securely in accordance with data privacy practices.',
  },
  {
    question: 'How can I volunteer or get involved with Sanjivani?',
    answer: 'You can sign up as a volunteer on our registration page or reach out directly to join our ongoing community outreach programs.',
  },
  {
    question: 'How can I contact Sanjivani for more information or support?',
    answer: 'You can contact us via email, phone, or our official contact details available on the website header and footer for any assistance.',
  },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return isMobile;
}

type FaqItemProps = {
  item: { question: string; answer: string };
  index: number;
  isOpen: boolean;
  toggle: () => void;
};

const FaqItem = memo(({ item, index, isOpen, toggle }: FaqItemProps) => {
  return (
    <motion.div 
      layout 
      initial={false}
      className="mb-6 bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition duration-300"
    >
      <button
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
        className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-indigo-50 rounded-2xl transition"
      >
        <span className="text-gray-900 font-medium text-lg">{item.question}</span>
        {isOpen ? <Minus className="text-indigo-600" /> : <Plus className="text-indigo-600" />}
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden px-6 pb-5 text-gray-600 text-sm"
          >
            <div>{item.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const faqsToShow = faqData;

  return (
    <section className="bg-[#f2f1f9] pt-0 pb-2 px-5 md:px-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-indigo-800 mb-6">
        Frequently Asked Questions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-3">
        {faqsToShow.map((item, index) => (
          <FaqItem
            key={index}
            item={item}
            index={index}
            isOpen={openIndex === index}
            toggle={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
