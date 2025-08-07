"use client";

import { motion } from "framer-motion";
import WhyCard from "./WhyCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const titleVariants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9 
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const cardsData = [
  {
    imageSrc: "/bag.png",
    title: "Trip planning gone wrong",
    description: "I struggled to plan outfits ahead of a trip, juggling photos, mood boards and the notes app that just didn't flow.",
  },
  {
    imageSrc: "/face.png",
    title: "Notes App Didn't Cut It",
    description: "Using my phone's Notes app felt clunky and time-consuming, not built for style or speed.",
  },
  {
    imageSrc: "/bulb.png",
    title: "Built for Simplicity",
    description: "So I created Outfeatz: a fast, focused digital wardrobe designed to make outfit planning effortless.",
  },
];

export default function WhyWeBuilt() {
  return (
    <motion.section 
      className="bg-black pt-10 flex flex-col items-center gap-12 md:px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true, 
        amount: 0.3 
      }}
      variants={containerVariants}
    >
      <motion.h2 
        className="text-white text-2xl md:text-3xl font-bold text-center"
        variants={titleVariants}
      >
        Why did we build this?
      </motion.h2>

      <motion.div 
        className="flex flex-col md:flex-row justify-center gap-8 flex-wrap"
        variants={containerVariants}
      >
        {cardsData.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
          >
            <WhyCard
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}