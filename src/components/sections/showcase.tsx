import React from "react";
import Image from "next/image";

const Showcase = () => {
  return (
    <section
      className="relative w-full mt-30 h-[600px] bg-[url('/images/bg-website-min.svg')] bg-contain bg-center flex items-center px-8 md:px-16"
    >
      {/* Text container */}
      <div className="w-full md:w-1/2 text-white space-y-6">
        <h2 className="text-[50px] font-bold">
          <span className="text-[#36C5F0]">Snap it.</span>{" "}
          <span className="text-green-500">Cut it.</span>{" "}
          <span className="text-[#36C5F0]">Curate it.</span>
        </h2>
        <p className="text-[30px] leading-[1.4]">
          {`Fashion is evolving, and technology
          \nis changing how we engage 
          with\nstyle. `}
        </p>
        <p className="text-[30px] leading-[1.4]">
          Outfeatz puts this transformation in
          your hands, allowing you to curate, 
          organise, and showcase your outfits 
          effortlessly in the digital space.
        </p>
      </div>

      {/* Image container */}
      <div className="hidden md:block w-full md:w-1/2 h-full relative">
        <Image
          src="/images/showcase.png"
          alt="Showcase"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </section>
  );
};

export default Showcase;