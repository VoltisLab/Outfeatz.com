"use client"; // Ensure Framer Motion works in Next.js App Router
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Featured = () => {
  const bands = [
    { id: 1, src: "/images/techcrunch.svg", alt: "TechCrunch" },
    { id: 2, src: "/images/forbes.svg", alt: "Forbes" },
    { id: 3, src: "/images/insider.svg", alt: "Insider" },
    { id: 4, src: "/images/deck.svg", alt: "Deck" },
    { id: 5, src: "/images/wallstreet.svg", alt: "Wall Street" },
    { id: 6, src: "/images/cnbc.svg", alt: "CNBC" },
  ];

  return (
    <section className="mt-30 mb-30 text-white relative w-full overflow-hidden">
      {/* Heading */}
      <motion.h2 
        className="text-3xl my-10 mb-20 font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Featured and seen in
      </motion.h2>

      {/* Logos */}
      <motion.div 
        className="flex flex-wrap justify-center items-center gap-4 w-full px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, staggerChildren: 0.2 }}
      >
        {bands.map((band) => (
          <motion.div
            key={band.id}
            className="flex-grow max-w-[180px] min-w-[100px] h-[60px] bg-[#101010] rounded-[16px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: band.id * 0.1 }}
            whileHover={{ scale: 1.1 }}
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
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Featured;
