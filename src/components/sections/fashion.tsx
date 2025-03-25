'use client';
import React from "react";
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const FashionSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <section
        ref={ref}
        className="bg-[#101010] my-20 rounded-[20px] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center mt-20 md:mt-50 w-full overflow-hidden"
      >
        {/* Left Content */}
        <motion.div
          className="border-r-[4px] md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.p
            className="text-[#36C5F0] text-[24px] mb-2"
            initial={{ y: -20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            ✦ Mobile experience
          </motion.p>
          <motion.h2
            className="text-4xl md:text-[75px] font-bold leading-tight"
            initial={{ y: -50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Seamless & Effortless, just Like Fashion Should Be
          </motion.h2>
          <motion.div
            className="flex flex-col space-y-3 mt-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <Image objectFit="contain" src="/images/Apple.svg" alt="Google Play" width={150} height={50} />
            <Image objectFit="contain" src="/images/Google.svg" alt="App Store" width={150} height={50} />
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="md:w-1/2 mt-10 md:mt-0 md:pl-10 space-y-6"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          {[
            {
              icon: '📸',
              title: 'Upload Your Outfit',
              description:
                'Choose your favourite outfit photos, and let Outfeatz’s advanced AI instantly remove the background with pixel-perfect precision.',
            },
            {
              icon: '🎨',
              title: 'Build Your Digital Wardrobe',
              description:
                'Create, customise, and organise unlimited outfit galleries—categorise by season, occasion, mood, or your own unique style.',
            },
            {
              icon: '💾',
              title: 'Save & Sync Your Looks',
              description:
                'Keep your style safe. With Outfeatz Cloud Sync, your outfits are always at your fingertips.',
            },
            {
              icon: '👗',
              title: 'The Possibilities Are Endless',
              description:
                'From styling your next event to building a visual wardrobe, Outfeatz is your ultimate fashion tool.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-3"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
            >
              <span className="text-xl">{item.icon}</span>
              <div>
                <h3 className="text-[#36C5F0] text-[24px] font-semibold">{item.title}</h3>
                <p className="text-gray-300 text-[24px]">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <motion.div
        className="relative w-full flex justify-center items-center pt-20"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="w-full max-w-screen-xl px-4">
          <Image
            src="/images/bg-website-min-2.png"
            alt="Hero Background"
            width={1920}
            height={1080}
            layout="responsive"
            objectFit="contain"
            priority
          />
        </div>
      </motion.div>
    </>
  );
};

export default FashionSection;
