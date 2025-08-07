'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      className="relative w-full bg-black text-white flex flex-col items-center justify-center md:py-20 md:px-4 overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      {/* Headline */}
      <motion.h1
        className="md:text-5xl md:text-3xl text-2xl font-bold text-center md:mb-12"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        Getting dressed shouldn’t be existential.
      </motion.h1>

      {/* Articles collage */}
      <motion.div
        className="relative w-full justify-center items-center"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        {/* Left article */}
      

        {/* Center article (taller) */}
        <div className="relative justify-center w-full h-[180px] md:h-[363px] ">
          <Image
            src="/vogue.png" // <- replace with your actual path
            alt="Vogue Article"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>

      <motion.div
        className="relative w-full max-w-5xl justify-between flex items-center"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        {/* Left article */}
    
        <div className="relative w-full xl:-mt-7 md:-mt-28 -mt-16 md:h-[386px] h-[180px] overflow-hidden ">
          <Image
            src="/articleleft.png" // <- replace with your actual path
            alt="Anxiety and Dressing"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-full xl:-mt-20 md:-mt-40 -mt-20 h-[180px]  md:h-[383px]">
          <Image
            src="/articleright.png" // <- replace with your actual path
            alt="Clothing & Anxiety"
            fill
            className="object-contain"
          />
        </div>
        {/* Right article */}
      </motion.div>


      <motion.div
        className="relative w-full max-w-2xl  justify-between flex items-center xl:mt-8"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <h1 className='xl:text-[60.91px] md:text-[40px] text-[20px] tracking-[-0.62px] leading-[60px] font-bold'>
        According to The Cut, 
the stress often comes from 
decision fatigue, social pressure, 
and not having a reliable sense of 
what works for you. 
That’s why saving your fits; 
takes the guesswork out of your days. 
You’ll always have a go-to, 
always look put together.
        </h1>
      </motion.div>

      
    </motion.section>
  );
};

export default Hero;
