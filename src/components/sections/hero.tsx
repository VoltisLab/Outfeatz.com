'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="relative w-full pt-20" // Offset nav and add padding
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      ></motion.div>

      {/* Hero Image with Continuous Animation */}
      <motion.div
        className="relative"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        <motion.div
          animate={{
            scale: [1, 1.05, 1], // Scale up and down
            y: [0, -10, 0], // Float up and down
          }}
          transition={{
            duration: 4, // Duration of one cycle
            repeat: Infinity, // Loop infinitely
            repeatType: "mirror", // Smoothly reverse the animation
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/hero-cont.png"
            alt="Hero Background"
            width={1920}
            height={1080}
            layout="responsive"
            objectFit="contain"
            priority
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;