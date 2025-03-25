'use client';
import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function CreativeWorkflowSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative bg-[url('/images/bg-website-min.svg')] bg-cover bg-center bg-black text-white py-16 px-6 md:px-16 overflow-hidden rounded-xl"
    >
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 "
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 2 }}
      ></motion.div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center">
        {/* Left Side - Text Section */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.p
            className="text-[#36C5F0] text-sm font-semibold"
            initial={{ y: -20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            ✨ Workflow
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl font-bold mt-3 leading-tight"
            initial={{ y: -50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Create at <br />
            the <span className="text-[#36C5F0]">speed</span> <br />
            of <span className="text-[#36C5F0]">thought</span>.
          </motion.h1>
          <motion.p
            className="text-gray-400 mt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Focus on getting your thoughts out and crafting the best message
            while Chronicle does the heavy lifting for you.
          </motion.p>
        </motion.div>

        {/* Right Side - Image Card */}
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <motion.div
            className="bg-[#131313] p-6 rounded-xl w-full max-w-md shadow-lg flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="flex justify-center items-center w-full"
              initial={{ rotate: -10, opacity: 0 }}
              animate={isInView ? { rotate: 0, opacity: 1 } : {}}
              transition={{ delay: 1, duration: 1 }}
            >
              <Image
                src="/images/rectangle.png"
                alt="Cutout Album Preview"
                width={300}
                height={150}
                className="rounded-md"
              />
            </motion.div>
            <motion.h3
              className="text-white font-semibold text-lg mt-4"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 1.2, duration: 1 }}
            >
              No gatekeeping
            </motion.h3>
            <motion.p
              className="text-gray-400 text-[18px] mt-2 text-justify"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 1.4, duration: 1 }}
            >
              Fashion is evolving, and{" "}
              <span className="text-[#36C5F0]">Outfeatz</span> puts your style
              in focus.
            </motion.p>
            <motion.p
              className="text-gray-400 text-[18px] mt-2 text-justify"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 1.6, duration: 1 }}
            >
              <span className="text-[#36C5F0]">Tag</span> and insert brands
              directly into your cutouts, making it easy to track outfits,
              highlight favorite labels, and curate looks effortlessly.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
