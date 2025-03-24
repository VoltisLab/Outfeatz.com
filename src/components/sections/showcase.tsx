'use client';
import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const Showcase = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative w-full mt-[120px] md:mt-[250px] h-auto md:h-[600px] bg-[url('/images/bg-website-min.svg')] bg-contain bg-center flex flex-col md:flex-row items-center px-8 md:px-16 py-12"
    >
      {/* Text container */}
      <motion.div
        className="w-full md:w-1/2 text-white space-y-6 mb-8 md:mb-0"
        initial={{ x: -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-[40px] md:text-[50px] font-bold leading-tight"
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <span className="text-[#36C5F0]">Snap it.</span>{" "}
          <span className="text-green-500">Cut it.</span>{" "}
          <span className="text-[#36C5F0]">Curate it.</span>
        </motion.h2>
        <motion.p
          className="text-[22px] md:text-[30px] leading-[1.4]"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Fashion is evolving, and technology is changing how we engage with style.
        </motion.p>
        <motion.p
          className="text-[22px] md:text-[30px] leading-[1.4]"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Outfeatz puts this transformation in your hands, allowing you to curate, 
          organize, and showcase your outfits effortlessly in the digital space.
        </motion.p>
      </motion.div>

      {/* Image container */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <motion.div
          className="relative w-[90%] max-w-[400px] md:max-w-[500px] h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src="/images/showcase.png"
            alt="Showcase"
            width={500}
            height={600} // Maintain aspect ratio
            priority // Ensures fast loading
            className="object-contain w-full h-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Showcase;
