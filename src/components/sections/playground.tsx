"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const Playground = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full xl:h-[1272px] h-[1000px] mx-auto bg-black text-white text-left px-6 md:px-16 relative overflow-hidden xl:mt-0 mt-24"
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
          animation: scroll 10s ease-in-out alternate infinite;
        }
      `}</style>

      {/* Text Area */}
      <div className="justify-center text-center mb-5">
        <header className="w-full text-4xl md:text-5xl xl:text-[75px] font-bold leading-[-1.7px]">
        You already have style. 
        <br />
        We just help you see it
        </header>
      </div>

      {/* Scrolling Container */}
      <div className={`flex gap-6 ${isVisible ? "animate-scroll" : "reset-scroll"}`}>
        <div className="flex space-x-6">
          <div className="grid grid-cols-5 gap-6 absolute w-[1686px] right-[-140px] left-[-121px] mx-auto">
            {/* Column 1 - Left Gallery */}
            <div className="flex flex-col items-center space-y-8">
              <Image src="/denim1.png" alt="Gallery Left" width={300} height={400} className="w-full max-w-md bg-gradient-to-b from-[#282828] to-[#0D0D0D] rounded-2xl shadow-lg" />
              <Image src="/denim2.png" alt="Gallery Left" width={300} height={400} className="w-full max-w-md bg-gradient-to-b from-[#282828] to-[#0D0D0D] rounded-2xl shadow-lg" />
            </div>

            {/* Column 2 - Before/After Section */}
            <div className="flex flex-col items-center text-center mt-35 gap-35">
              <div className="grid grid-cols-2 gap-4 bg-gradient-to-b from-[#282828] to-[#0D0D0D] rounded-2xl shadow-lg p-4">
                <h1 className="text-left text-[#36C5F0]">Before</h1>
                <h1 className="text-left text-white">After</h1>
                <div className="space-y-4">
                  <Image src="/leftr.png" alt="Before Image 1" width={119} height={92} className="w-[119px] h-[92px] object-cover rounded-2xl" />
                  <Image src="/leftr3.png" alt="Before Image 2" width={119} height={171} className="w-[119px] h-[171px] object-cover rounded-2xl" />
                </div>
                <div className="space-y-4">
                  <Image src="/leftr2.png" alt="After Image 1" width={119} height={171} className="w-[119px] h-[171px] object-cover border border-gray-500 rounded-2xl" />
                  <Image src="/leftr4.png" alt="After Image 2" width={119} height={92} className="w-[119px] h-[92px] object-cover border border-gray-500 rounded-2xl" />
                </div>
              </div>
             
            </div>

            {/* Column 3 - Middle Image Section */}
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-b from-[#282828] to-[#0D0D0D] rounded-2xl shadow-lg w-[312px] h-[213px] flex justify-center items-center p-1">
                <Image src="/denim2.png" alt="Fashion Image" width={302} height={189} className="w-[302px] h-[189px] object-contain" />
              </div>
              <div className="w-[312px] h-[173px] flex flex-col justify-center items-center p-1 -mt-1">
                <Image src="/notion.png" alt="Roadmap Planning" width={315} height={67} className="w-[315px] h-[67px] object-contain" />
              </div>
              <div className="relative w-[312px] h-[412px] flex justify-center items-center">
              <Image
                src="/middle.png"
                alt="Roadmap Planning"
                fill
                className="object-contain rounded-lg"
              />

              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-4 gap-2text-white rounded-lg">
                <p className="text-[20px] font-semibold mb-4 leading-[23px] tracking-[1px]">
                  Fashion is more than just what you wear – it’s a statement, a collection of moments, a reflection of who you are.
                </p>
                <p className="text-[20px] font-semibold leading-[23px] tracking-[1px]">
                  With Outfeatz, turn your best outfit shots into stunning, cut-out digital galleries that let your style shine like never before.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-5 items-center pt-12">
            <div className="flex justify-center space-x-4">
                <a href="#"><img src="/google.png" alt="Google Play" className="h-12" /></a>
              </div>
            <div className="flex justify-center space-x-4">
                <a href="#"><img src="/apple.png" alt="App Store" className="h-12" /></a>
              </div>
            </div>

            </div>

            {/* Column 4 - Before/After Section */}
            <div className="flex flex-col items-center text-center mt-35 gap-35">
              <div className="grid grid-cols-2 gap-4 bg-gradient-to-b from-[#282828] to-[#0D0D0D] rounded-2xl shadow-lg p-4">
                <h1 className="text-left text-[#36C5F0]">Before</h1>
                <h1 className="text-left text-white">After</h1>
                <div className="space-y-4">
                  <Image src="/before1.png" alt="Before Image 1" width={119} height={92} className="w-[119px] h-[92px] object-cover rounded-2xl" />
                  <Image src="/before2.png" alt="Before Image 2" width={119} height={171} className="w-[119px] h-[171px] object-cover rounded-2xl" />
                </div>
                <div className="space-y-4">
                  <Image src="/after1.png" alt="After Image 1" width={119} height={171} className="w-[119px] h-[171px] object-cover border border-gray-500 rounded-2xl" />
                  <Image src="/after2.png" alt="After Image 2" width={119} height={92} className="w-[119px] h-[92px] object-cover border border-gray-500 rounded-2xl" />
                </div>
              </div>
              
           
            </div>

            {/* Column 5 - Right Gallery */}
            <div className="flex flex-col items-center space-y-8">
              <div className="w-[312px] h-[448px]">
                <Image src="/denim1.png" alt="Gallery Right" width={312} height={408} className="w-[312px] h-[408px] bg-gradient-to-b from-[#282828] to-[#0D0D0D] rounded-2xl shadow-lg" />
              </div>
              <div className="w-[312px] h-[213px]">
                <Image src="/denim2.png" alt="Gallery Right" width={302} height={189} className="w-[302px] h-[189px] bg-gradient-to-b from-[#282828] to-[#0D0D0D] rounded-2xl shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
