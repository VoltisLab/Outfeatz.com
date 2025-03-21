import React from "react";
import Image from "next/image";

export default function CreativeWorkflowSection() {
  return (
    <section className="relative bg-[url('/images/bg-website-min.svg')] bg-cover bg-center bg-black text-white py-16 px-6 md:px-16">
      {/* Background Image */}

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center">
        {/* Left Side - Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-blue-400 text-sm font-semibold">✨ Workflow</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
            Create at <br />
            the <span className="text-blue-400">speed</span> <br />
            of <span className="text-blue-400">thought</span>.
          </h1>
          <p className="text-gray-400 mt-4">
            Focus on getting your thoughts out and crafting the best message
            while Chronicle does the heavy lifting for you.
          </p>
        </div>

        {/* Right Side - Image Card */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
  <div className="bg-[#131313] p-6 rounded-xl w-full max-w-md shadow-lg flex flex-col items-center">
    <div className="flex justify-center items-center w-full">
      <Image
        src="/images/rectangle.png"
        alt="Cutout Album Preview"
        width={300}
        height={150}
        className="rounded-md"
      />
    </div>
    <h3 className="text-white font-semibold text-lg mt-4">No gatekeeping</h3>
    <p className="text-gray-400 text-sm mt-2 text-center">
      Fashion is evolving, and <span className="text-blue-400">Outfeatz</span> puts your style in focus.
      <br />
      <span className="text-blue-400">Tag</span> and insert brands directly into your cutouts, making it
      easy to track outfits, highlight favorite labels, and curate looks effortlessly.
    </p>
  </div>
</div>
      </div>
    </section>
  );
}
