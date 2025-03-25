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
    <section className="mt-30 mb-30 text-white relative w-full overflow-hidden">
      {/* Heading */}
      <h2 className="text-3xl my-10 mb-20 font-bold text-center">Featured and seen in</h2>

      {/* Dynamic Responsive Container */}
      <div className="flex flex-wrap justify-center items-center gap-4 w-full px-4">
        {bands.map((band) => (
          <div
            key={band.id}
            className="flex-grow max-w-[180px] min-w-[100px] h-[60px] bg-[#101010] rounded-[16px] flex items-center justify-center"
          >
            <div className="relative flex items-center justify-center w-[80%] h-[50px]">
              <Image
                src={band.src}
                alt={band.alt}
                width={120}
                height={50}
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
