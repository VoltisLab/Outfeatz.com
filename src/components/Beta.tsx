"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BetaScroller() {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full bg-black">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30, // slower for clarity; tweak to your liking
            ease: "linear",
          },
        }}
      >
        {[...Array(20)].map((_, idx) => (
          <Image
            key={idx}
            src="/beta.png"
            width={500}
            height={60.29}
            alt="Join our beta"
            className="inline-block"
          />
        ))}
      </motion.div>
    </div>
  );
}
