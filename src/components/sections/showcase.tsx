'use client';
import React from "react";
import { motion, useInView } from "framer-motion";

const Showcase = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
   <section
        ref={ref}
        className="bg-white mb-10 rounded-[20px] py-16 px-5 xl:px-20 flex flex-col md:flex-row text-start xl:items-center mt-20 w-full overflow-hidden xl:gap-5"
      >
        {/* Left Content */}
        <motion.div
          className="md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          
          <motion.h2
            className="text-[40px] xl:text-[88px] md:text-[48px] text-[#0A0909] font-bold leading-tight"
            initial={{ y: -50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 1 }}
          >
            From Closet Chaos to Style Clarity
          </motion.h2>
          <motion.p
            className="xl:text-[24px] md:text-[20px] text-[#0A0909] mb-2 font-bold"
            initial={{ y: -20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Outfeatz is the fast, simple tool for saving outfits, 
            planning looks, and getting dressed without 
            overthinking it. 
            Just your style; organised. 
          </motion.p>
          
      
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="md:w-1/2 mt-10 md:mt-0 space-y-6"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          {[
  {
    icon: '📷',
    title: 'Snap It, Save It',
    description:
      'Upload mirror pics, selfies, or any outfit shots. Outfeatz instantly removes the background so you can focus on the fit, not the clutter.',
  },
  {
    icon: '🎨',
    title: 'Build Your Digital Wardrobe',
    description:
      'Create clean, scrollable outfit galleries. Sort by season, trip, mood, or whatever makes sense to you; it’s your wardrobe, your way.',
  },
  {
    icon: '🔄',
    title: 'Save & Sync Your Looks',
    description:
      'Keep your style safe. With Outfeatz Cloud Sync, your outfits are always at your fingertips.',
  },
  {
    icon: '📲',
    title: 'Use It, Don’t Overthink It',
    description:
      'We’re not here to make you social. Just stylish. Share if you want, or not!',
  },
  {
    icon: '👗',
    title: 'Only One Job - Done Well',
    description:
      'No fluff. No features you’ll forget. Just a fast, frictionless way to get dressed without the existential spiral.',
  },
].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-3"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
            >
              <span className="text-xl mt-1">{item.icon}</span>
              <div>
              <h3 className=" md:text-[20px] xl:text-[24px] text-[#0A0909] font-bold">{item.title}</h3>
              <p className=" md:text-[20px] xl:text-[24px] font-bold text-[#0A0909] md:leading-[41px] tracking-[-0.24px]">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
  );
};

export default Showcase;
