import React from "react";
import Image from "next/image";

const Showcase = () => {
  return (
    <section
      className="relative w-full mt-[120px] md:mt-[250px] h-auto md:h-[600px] bg-[url('/images/bg-website-min.svg')] bg-contain bg-center flex flex-col md:flex-row items-center px-8 md:px-16 py-12"
    >
      {/* Text container */}
      <div className="w-full md:w-1/2 text-white space-y-6 mb-8 md:mb-0">
        <h2 className="text-[40px] md:text-[50px] font-bold leading-tight">
          <span className="text-[#36C5F0]">Snap it.</span>{" "}
          <span className="text-green-500">Cut it.</span>{" "}
          <span className="text-[#36C5F0]">Curate it.</span>
        </h2>
        <p className="text-[22px] md:text-[30px] leading-[1.4]">
          Fashion is evolving, and technology is changing how we engage with style.
        </p>
        <p className="text-[22px] md:text-[30px] leading-[1.4]">
          Outfeatz puts this transformation in your hands, allowing you to curate, 
          organize, and showcase your outfits effortlessly in the digital space.
        </p>
      </div>

      {/* Image container */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-[90%] max-w-[400px] md:max-w-[500px] h-auto">
          <Image
            src="/images/showcase.png"
            alt="Showcase"
            width={500}
            height={600} // Maintain aspect ratio
            priority // Ensures fast loading
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
