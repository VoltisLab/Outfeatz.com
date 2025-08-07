'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      className="relative w-full bg-black text-white flex flex-col items-center justify-center py-10 xl:py-20 md:px-4 overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      {/* Headline */}
      <motion.h1
        className="xl:text-[60.91px] md:text-[40px] text-[20px] leading-[88px] tracking-[-1.76px] font-bold text-center mb-12"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        Faster than scrolling your Camera roll.
      </motion.h1>

      {/* Articles collage */}
      <motion.div
        className="relative w-full flex gap-5 justify-between items-center"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <div className="bg-gradient-to-b from-[#282828] to-[#0D0D0D] rounded-2xl shadow-lg w-[685px] max-h-[440px] flex justify-center items-center p-1">
          <Image src="/denim2.png" alt="Fashion Image" width={685} height={440} className="w-full h-full object-contain" />
        </div>

        <div className="bg-gradient-to-b from-[#282828] to-[#0D0D0D] rounded-2xl shadow-lg w-[685px] max-h-[440px] flex justify-center items-center p-1">
          <Image src="/denim2.png" alt="Fashion Image" width={685} height={440} className="w-full h-full object-contain" />
        </div>
      

      </motion.div>  

       <motion.div
        className="relative w-full max-w-2xl  justify-between flex items-center mt-8"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <h1 className='xl:text-[60.91px] md:text-[40px] text-[20px] md:leading-[60px] font-bold'>
        While other apps pile on 
features you’ll never use, 
we’ve stripped it back to what 
actually matters: 
a clean, fast, digital wardrobe. 
It’s as quick to use as it is to think, 
built for those moments 
when you just want to save a look, 
plan a trip, or get dressed 
without overthinking. 
No clutter. No noise.
        </h1>
      </motion.div>  
    </motion.section>
  );
};

export default Hero;
