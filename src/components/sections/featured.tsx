'use client';
import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const Featured = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const bands = [
    { id: 1, src: "/images/techcrunch.svg", alt: "TechCrunch" },
    { id: 2, src: "/images/forbes.svg", alt: "Forbes" },
    { id: 3, src: "/images/insider.svg", alt: "Insider" },
    { id: 4, src: "/images/deck.svg", alt: "Deck" },
    { id: 5, src: "/images/wallstreet.svg", alt: "Wall Street" },
    { id: 6, src: "/images/cnbc.svg", alt: "CNBC" },
  ];

  return (
    <section
      ref={ref}
      className="w-full mt-30 mb-30 text-white"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl my-10 mb-20 font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        Featured and seen in
      </motion.h2>

      {/* Scrollable container */}
      <motion.div
        className="flex justify-center overflow-x-auto hide-scrollbar space-x-4 px-4 items-center snap-x snap-mandatory"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 1 }}
      >
        {bands.map((band, index) => (
          <motion.div
            key={band.id}
            className="flex-shrink-0 w-[180px] h-[60px] bg-[#101010] rounded-[16px] flex items-center justify-center snap-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
          >
            <motion.div
              className="relative w-[80%] h-[50px]"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
    <section className="mt-30 mb-30 text-white relative w-full overflow-hidden">
      {/* Heading */}
      <h2 className="text-3xl my-10 mb-20 font-bold text-center">Featured and seen in</h2>

      {/* Dynamic Responsive Container */}
      <div className="flex flex-wrap justify-center items-center gap-4 w-full px-4">
        {bands.map((band) => (
          <div
            key={band.id}
            className="flex-grow max-w-[180px] min-w-[100px] h-[60px] bg-[#101010] rounded-[16px] flex items-center justify-center"
          >
            <div className="relative flex items-center justify-center w-[80%] h-[50px]">
              <Image
                src={band.src}
                alt={band.alt}
                width={120}
                height={50}
                objectFit="contain"
                className="rounded-lg"
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Featured;
