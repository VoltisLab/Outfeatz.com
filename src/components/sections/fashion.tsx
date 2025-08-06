'use client';
import React from "react";
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const FashionSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <motion.div
        ref={ref}
        className="relative w-full flex justify-center items-center pt-20"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="w-full max-w-screen-xl md:px-4">
          <Image
            src="/bgwebsite.png"
            alt="Hero Background"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </motion.div>
    </>
  );
};

export default FashionSection;
