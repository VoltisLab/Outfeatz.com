'use client';
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      className="relative w-full"
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

      {/* Footer Content */}
      <motion.footer
        className="relative z-10 mx-auto py-12 px-6 md:px-8 text-white mt-12"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        <motion.div
          className="max-w-[1440px] flex flex-col md:flex-row justify-center items-center md:items-start gap-12"
          animate={{
            scale: [1, 1.05, 1],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          {/* Left Section */}
          <div className="max-w-md text-center md:text-left space-y-6">
            <p className="text-[#36C5F0] font-semibold text-lg md:text-xl flex items-center justify-center md:justify-start gap-2">
              <img src="star.png" alt="Star" className="w-5 h-5" /> Workflow
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-[#36C5F0]">Create</span> at <br />
              the <span className="text-[#36C5F0]">speed</span> <br />
              of <span className="text-[#36C5F0]">thought.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl">
              Focus on getting your thoughts out and <br />
              crafting the best message while Chronicle does <br />
              the heavy lifting for you.
            </p>
          </div>

          {/* Right Section */}
          <div className="w-full max-w-md bg-[#1a1a1a] p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
            <p className="text-gray-400 text-lg font-medium mb-4 text-center">
              Upload a cutout album
            </p>

            <div className="relative border border-gray-700 p-3 rounded-lg h-[200px] bg-black/50 flex flex-col">
              <p className="absolute -top-3 left-4 bg-[#1a1a1a] px-2 text-gray-400 text-sm">
                Untitled
              </p>

              <div className="flex items-center justify-center gap-2 flex-grow">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="w-10 h-10 md:w-20 md:h-20 bg-black rounded-md"></div>
                ))}
              </div>

              <button className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center text-gray-500 text-3xl hover:bg-gray-700 rounded-lg">
                +
              </button>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mt-6 text-center">
              No gatekeeping
            </h3>

            <p className="text-gray-400 text-lg mt-2 text-left">
              Fashion is evolving, and <span className="font-bold text-[#36C5F0]">Outfeatz</span> puts your <br />
              style in focus.
            </p>

            <p className="text-gray-400 text-lg mt-4 text-left">
              <a href="#" className="text-[#36C5F0] font-bold hover:underline">Tag</a> and insert
              brands directly into your cut-outs, making it easy to track outfits, highlight
              favourite labels, and curate looks effortlessly.
            </p>
          </div>
        </motion.div>



{/* Footer Links and Subscribe Section */}
<div className="flex justify-between items-start gap-6 mt-26 flex-row">
  {/* Left Section - Footer Links & Subscribe (Always flex-col, always on the left) */}
  <div className="text-sm text-gray-400 space-y-3 text-left flex flex-col">
    <ul className="space-y-1 transition-transform duration-300 hover:scale-105 flex flex-col">
      {["Home", "FAQ", "Careers", "Terms", "Privacy", "Voltis Labs"].map((link) => (
        <li key={link}>
          <a href="#" className="hover:text-white transition">{link}</a>
        </li>
      ))}
    </ul>

    {/* Subscribe Button */}
    <div className="w-48 h-10 bg-[#181717] rounded-full flex items-center justify-start pl-4 mt-3">
      <p className="text-gray-500">Subscribe</p>
    </div>
  </div>

  {/* Right Section - App Store and Google Play (Stays on right, always flex-col) */}
  <div className="flex flex-col items-end gap-3">
    <img src="/apple.png" alt="App Store" className="w-32 h-auto transition-transform duration-300 hover:scale-105" />
    <img src="/google.png" alt="Google Play" className="w-32 h-auto transition-transform duration-300 hover:scale-105" />
  </div>
</div>

        <p className="mt-15 text-center text-sm md:text-base">
          © 2025 Voltis Labs. All rights reserved.
        </p>
      </motion.footer>
    </motion.div>
  );
};

export default Footer;
