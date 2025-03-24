import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full pt-20"> {/* Offset nav and add padding */}
      <Image 
        src="/images/hero-cont.png" 
        alt="Hero Background" 
        width={1920} 
        height={1080} 
        layout="responsive" 
        objectFit="contain" 
        priority
      />
    </div>
  );
};

export default Hero;
