import Image from "next/image";

const Footer = () => {
  return (
    <footer className="max-w-[1280px] mx-auto py-14 px-6 md:px-12 text-white" style={{ backgroundImage: "url('/bg.png')" }} >
    
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Left - Main Heading & Subtext */}
        <div className="max-w-[500px] text-justify">
          <p className="text-blue-400 font-semibold text-lg md:text-xl">+ Workflow</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-2">
            <span className="text-blue-400">Create</span> at <br />
            the <span className="text-blue-400">speed</span> <br />
            of <span className="text-blue-400">thought.</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl mt-2">
            Focus on getting your thoughts out and <br />
            crafting the best message while Chronicle <br />
            does the heavy lifting for you.
          </p>
        </div>

        {/* Right - Upload Box & No Gatekeeping Text */}
        <div className="w-[500px] bg-[#1a1a1a] p-8 rounded-xl shadow-lg mt-6 md:mt-0">
          <p className="text-gray-400 text-base md:text-lg font-medium mb-3 text-center">
            Upload a cutout album
          </p>

          <div className="relative border border-gray-700 p-6 rounded-lg h-[200px] bg-black/50 flex flex-col">
            <p className="absolute -top-3 left-10 transform -translate-x-1/2 bg-[#1a1a1a] px-3 text-gray-400 text-sm">
              Untitled
            </p>

            <div className="flex items-center gap-2 flex-grow justify-center">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="w-12 h-16 bg-black rounded-md"></div>
              ))}
            </div>

            <button className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center text-white text-xl hover:bg-gray-700">
              +
            </button>
          </div>

          <h3 className="text-xl md:text-2xl font-bold mt-6 text-center">No gatekeeping</h3>

          <p className="text-gray-400 mt-3 text-lg md:text-xl">
            Fashion is evolving, and <span className="font-bold text-blue-400">Outfeatz</span> puts your style in focus.
          </p>

          <p className="text-gray-400 mt-3 text-lg md:text-xl">
            <a href="#" className="text-blue-400 font-bold hover:underline">Tag</a> and insert brands directly into your cutouts, 
            making it easy to track outfits, highlight favourite labels, and curate looks effortlessly.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center">
        <ul className="text-sm text-gray-400 space-y-2">
          {["Home", "FAQ", "Careers", "Terms", "Privacy", "Voltis Labs"].map((link) => (
            <li key={link}>
              <a href="#" className="hover:text-white transition">{link}</a>
            </li>
          ))}
          
          <br />
          {/* Subscribe Button */}
  <button className="w-full md:w-[200px] md:h-[30px] bg-[#1a1a1a] hover:bg-blue-600 space-y-0 text-gray-500 text-lg text-sm py-1 px-2 text-left left-2 rounded-xl shadow-md transition">
    Subscribe
  </button>
        </ul>
        
{/* Right - App Store & Google Play */}
<div className="flex-col py-1 space-y-0 gap-0">
  <a href="#">
    <img src="/svg/google-play.svg" alt="Get it on Google Play" className="h-30 border-gray-500 border p-1 rounded" />
  </a>
  <a href="#">
    <img src="/svg/apple.svg" alt="Download on the App Store" className="h-30" />
  </a>
</div>


</div>
          <br />
         {/* Centered Copyright */}
        <p className="mt-auto font-semibold text-center relative bottom-0 text-white md:text-l w-full md:w-auto">
          © 2025 Voltis Labs. All rights reserved.
        </p>
    </footer>
  );
};

export default Footer;

