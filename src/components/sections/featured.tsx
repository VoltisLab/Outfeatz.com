import React from "react";
import Image from "next/image";

const Featured = () => {
  const bands = [
    { id: 1, src: "/images/techcrunch.svg", alt: "TechCrunch" },
    { id: 2, src: "/images/forbes.svg", alt: "Forbes" },
    { id: 3, src: "/images/insider.svg", alt: "Insider" },
    { id: 4, src: "/images/deck.svg", alt: "Deck" },
    { id: 5, src: "/images/wallstreet.svg", alt: "Wall Street" },
    { id: 6, src: "/images/cnbc.svg", alt: "CNBC" },
  ];

  return (
    <section className="w-full mt-30 mb-30  text-white">
      {/* Heading */}
      <h2 className="text-3xl my-10 mb-20 font-bold text-center ">Featured and seen in</h2>

      {/* Scrollable container */}
      <div className="flex justify-center overflow-x-auto hide-scrollbar space-x-4 px-4 items-center snap-x snap-mandatory">
        {bands.map((band) => (
          <div
            key={band.id}
            className="flex-shrink-0 w-[180px] h-[60px] bg-[#101010] rounded-[16px] flex items-center justify-center snap-center"
          >
            <div className="relative w-[80%] h-[50px]">
              <Image
                src={band.src}
                alt={band.alt}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
