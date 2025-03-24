"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const Playground = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full h-[1072px] mx-auto bg-black text-white text-left px-6 md:px-16 relative overflow-hidden"
    >
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(-30%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-scroll {
          animation: scroll 12s ease-in-out alternate infinite;
        }
      `}</style>

      {/* Text Area */}
      <div className="flex justify-start">
        <header className="py-10">
          <p className="text-blue-400 font-semibold text-lg md:text-xl flex items-center">
            <img src="star.png" alt="Star Icon" className="w-5 h-5 mr-2" />
            <span className="text-white"> Experience</span> Workflow
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-blue-400">
              The Ultimate Style <br /> Playground
            </span>
          </h1>
        </header>
      </div>

      {/* Scrolling Container */}
      <div className={`flex gap-6 ${isVisible ? "animate-scroll" : ""}`}>
        <div className="flex space-x-6">
          <div className="grid grid-cols-5 gap-6 absolute w-[1686px] right-[-140px] left-[-121px] mx-auto">
            {/* Column 1 - Left Gallery */}
            <div className="flex flex-col items-center space-y-8">
              <Image
                src="/denim1.png"
                alt="Denim 1"
                width={300}
                height={400}
                className="w-full max-w-md bg-gradient-to-b from-[#282828] to-[#0D0D0D] rounded-2xl shadow-lg"
              />
              <Image
                src="/denim2.png"
                alt="Denim 2"
                width={300}
                height={400}
                className="w-full max-w-md bg-gradient-to-b from-[#282828] to-[#0D0D0D] rounded-2xl shadow-lg"
              />
            </div>

            {/* Column 2 - Before/After Section */}
            <div className="flex flex-col items-center text-center mt-35 gap-35">
              <div className="grid grid-cols-2 gap-4 bg-gradient-to-b from-[#282828] to-[#0D0D0D] rounded-2xl shadow-lg p-4">
                <h1 className="text-left text-blue-400">Before</h1>
                <h1 className="text-left text-white">After</h1>
                <div className="space-y-4">
                  <Image
                    src="/before1.jfif"
                    alt="Before 1"
                    width={119}
                    height={92}
                    className="w-[119px] h-[92px] object-cover rounded-2xl"
                  />
                  <Image
                    src="/before2.png"
                    alt="Before 2"
                    width={119}
                    height={171}
                    className="w-[119px] h-[171px] object-cover rounded-2xl"
                  />
                </div>
                <div className="space-y-4">
                  <Image
                    src="/after1.png"
                    alt="After 1"
                    width={119}
                    height={171}
                    className="w-[119px] h-[171px] object-cover border border-gray-500 rounded-2xl"
                  />
                  <Image
                    src="/after2.png"
                    alt="After 2"
                    width={119}
                    height={92}
                    className="w-[119px] h-[92px] object-cover border border-gray-500 rounded-2xl"
                  />
                </div>
              </div>

              {/* Store Buttons */}
              <div className="flex justify-center space-x-4">
                <a href="#">
                  <img src="/google.png" alt="Google Play" className="h-12" />
                </a>
              </div>
            </div>

            {/* Column 3 - Middle Image Section */}
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-b from-[#282828] to-[#0D0D0D] rounded-2xl shadow-lg w-[312px] h-[213px] flex justify-center items-center p-1">
                <Image
                  src="/denim2.png"
                  alt="Fashion"
                  width={302}
                  height={189}
                  className="w-[302px] h-[189px] object-contain"
                />
              </div>
            </div>

            {/* Column 4 - Before/After Section */}
            <div className="flex flex-col items-center text-center mt-35 gap-35">
              <div className="grid grid-cols-2 gap-4 bg-gradient-to-b from-[#282828] to-[#0D0D0D] rounded-2xl shadow-lg p-4">
                <h1 className="text-left text-blue-400">Before</h1>
                <h1 className="text-left text-white">After</h1>
                <div className="space-y-4">
                  <Image
                    src="/left1.jfif"
                    alt="Left Before 1"
                    width={119}
                    height={92}
                    className="w-[119px] h-[92px] object-cover rounded-2xl"
                  />
                  <Image
                    src="/left3.png"
                    alt="Left Before 2"
                    width={119}
                    height={171}
                    className="w-[119px] h-[171px] object-cover rounded-2xl"
                  />
                </div>
                <div className="space-y-4">
                  <Image
                    src="/left2.png"
                    alt="Left After 1"
                    width={119}
                    height={171}
                    className="w-[119px] h-[171px] object-cover border border-gray-500 rounded-2xl"
                  />
                  <Image
                    src="/left4.png"
                    alt="Left After 2"
                    width={119}
                    height={92}
                    className="w-[119px] h-[92px] object-cover border border-gray-500 rounded-2xl"
                  />
                </div>
              </div>

              {/* Store Buttons */}
              <div className="flex justify-center space-x-4">
                <a href="#">
                  <img src="/apple.png" alt="App Store" className="h-12" />
                </a>
              </div>
            </div>

            {/* Column 5 - Right Gallery */}
            <div className="flex flex-col items-center space-y-8">
              <Image
                src="/denim1.png"
                alt="Gallery Right 1"
                width={312}
                height={408}
                className="w-[312px] h-[408px] bg-gradient-to-b from-[#282828] to-[#0D0D0D] rounded-2xl shadow-lg"
              />
              <Image
                src="/denim2.png"
                alt="Gallery Right 2"
                width={302}
                height={189}
                className="w-[302px] h-[189px] bg-gradient-to-b from-[#282828] to-[#0D0D0D] rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
