'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TbDeviceMobileDown } from "react-icons/tb";

export default function Download() {
  const [mobile, setMobile] = useState('');

  const handleSubmit = () => {
    if (mobile) {
      alert(`App link sent to: +91 ${mobile}`);   
    } else {
      alert('Please enter your mobile number');
    }
  }; 

  return (
  <div className='bg-[#f2f1f9] pt-2 pb-4 px-4'>
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg border p-6 sm:p-8 flex flex-col items-center text-center gap-4 max-w-2xl sm:max-w-6xl w-[95%] mx-auto"
      >
      <div className="w-full flex flex-col items-center">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <TbDeviceMobileDown className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />
          <h2 className="text-xl sm:text-3xl font-bold text-gray-800">
            Download App Now <span className="text-black">!</span>
          </h2>
        </div>

        <p className="text-gray-700 mb-2 text-sm sm:text-base md:text-lg">
          <span className="font-semibold text-slate-600">To Engage in current projects and support the needy</span>
        </p>
      </div>

      <div className="flex flex-row items-center justify-center gap-6 mt-2 w-full">
        {/* QR Code on the left side */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="border rounded-xl overflow-hidden shrink-0 shadow-sm"
        >
          <Image src="/images/qr-code.jpeg" alt="QR Code" width={100} height={100} className="w-20 sm:w-24 md:w-28" />
        </motion.div>

        {/* Store links side-by-side on the right side */}
        <div className="flex flex-row items-center gap-3">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Image src="/images/google-pay.png" alt="Google Play" width={140} height={44} className="w-28 sm:w-36 md:w-40" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Image src="/images/app-store.png" alt="App Store" width={140} height={44} className="w-28 sm:w-36 md:w-40" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  </div>
  );
}
