import React from "react";
import Image from "next/image";

const Featured = () => {
  // Example array of band images
  const bands = [
    { id: 1, src: "/images/techcrunch.svg", alt: "TechCrunch" },
    { id: 2, src: "/images/forbes.svg", alt: "Forbes" },
    { id: 3, src: "/images/insider.svg", alt: "Insider" },
    { id: 4, src: "/images/deck.svg", alt: "Deck" },
    { id: 5, src: "/images/wallstreet.svg", alt: "Wall Street" },
    { id: 6, src: "/images/cnbc.svg", alt: "CNBC" },
  ];

  return (
    <section className="w-full py-20 text-white">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-6">Featured and seen in</h2>

      {/* Horizontal scrollable container */}
      <div className="flex overflow-x-auto space-x-6 px-4 scrollbar-hide items-center">
        {bands.map((band) => (
          <div
            key={band.id}
            className="w-[190px] h-[60px] bg-[#101010] rounded-[16px] flex items-center justify-center"
          >
            <div className="relative w-[80%] h-[100%]">
              <Image
                src={band.src}
                alt={band.alt}
                layout="fill" // Ensures the image fills the parent container
                objectFit="contain" // Ensures the image fits nicely within the container
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