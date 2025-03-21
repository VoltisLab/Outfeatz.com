'use client';
import React from "react";
import Image from 'next/image';

const FashionSection = () => {
  return (
    <>
      <section className="bg-[#101010] my-20 md:rounded-[20px] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center mt-20 md:mt-50">
        {/* Left Content */}
        <div className="border-r-[4px] md:w-1/2">
          <p className="text-[#36C5F0] text-sm md:text-base mb-2">✦ Mobile experience</p>
          <h2 className="text-[40px] md:text-[60px] font-bold leading-tight">
            Seamless & Effortless, just Like Fashion Should Be
          </h2>
          <div className="flex flex-col space-y-3 mt-6">
            <Image objectFit="contain" src="/images/Apple.svg" alt="Google Play" width={150} height={50} />
            <Image objectFit="contain" src="/images/Google.svg" alt="App Store" width={150} height={50} />
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 mt-10 md:mt-0 md:pl-10 space-y-6">
          <div className="flex items-start space-x-3">
            <span className="text-lg md:text-xl">📸</span>
            <div>
              <h3 className="text-[#36C5F0] text-base md:text-lg font-semibold">Upload Your Outfit</h3>
              <p className="text-gray-300 text-sm md:text-[22px] leading-relaxed">
                Choose your favourite outfit photos, and let Outfeatz’s advanced AI instantly remove the background with pixel-perfect precision.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-lg md:text-xl">🎨</span>
            <div>
              <h3 className="text-[#36C5F0] text-base md:text-lg font-semibold">Build Your Digital Wardrobe</h3>
              <p className="text-gray-300 text-sm md:text-[22px] leading-relaxed">
                Create, customise, and organise unlimited outfit galleries—categorise by season, occasion, mood, or your own unique style.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-lg md:text-xl">💾</span>
            <div>
              <h3 className="text-[#36C5F0] text-base md:text-lg font-semibold">Save & Sync Your Looks</h3>
              <p className="text-gray-300 text-sm md:text-[22px] leading-relaxed">
                Keep your style safe. With Outfeatz Cloud Sync, your outfits are always at your fingertips.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-lg md:text-xl">👗</span>
            <div>
              <h3 className="text-[#36C5F0] text-base md:text-lg font-semibold">The Possibilities Are Endless</h3>
              <p className="text-gray-300 text-sm md:text-[22px] leading-relaxed">
                From styling your next event to building a visual wardrobe, Outfeatz is your ultimate fashion tool.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="relative w-full pt-20">
        {/* Offset nav and add padding */}
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
    </>
  );
};

export default FashionSection;