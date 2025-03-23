import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-[1440px] h-[900px] bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/bg.png')" }}
      ></div>

      {/* Footer Content */}
      <footer className="relative z-10 mx-auto py-12 px-6 md:px-8 text-white mt-50">
        <div className="max-w-[1440px] flex flex-col md:flex-row justify-center items-start mt-15">
          {/* Left - Main Heading & Subtext */}
          <div className="w-[500px] space-y-6 text-justify">
            <p className="text-blue-400 font-semibold text-lg md:text-xl flex items-center gap-2">
              <img src="star.png" alt="Star" className="w-5 h-5" /> Workflow
            </p>
            <h1 className="text-9xl md:text-6xl font-bold leading-tight mt-1">
              <span className="text-blue-400">Create</span> at <br />
              the <span className="text-blue-400">speed</span> <br />
              of <span className="text-blue-400">thought.</span>
            </h1>
            <p className="text-white-500 text-xl text-lg md:text-xl mt-1 w-[569px]">
              Focus on getting your thoughts out and <br />
              crafting the best message while Chronicle does <br />
              the heavy lifting for you.
            </p>
          </div>

          {/* Right - Upload Box & No Gatekeeping Text */}
          <div className="w-[500px] h-full bg-[#1a1a1a] p-6 rounded-xl shadow-lg mt-4 md:mt-2">
            <p className="text-gray-400 text-base md:text-lg font-medium mb-2 text-center">
              Upload a cutout album
            </p>

            <br />
            <div className="relative border border-gray-700 p-4 rounded-lg h-[180px] bg-black/50 flex flex-col">
              <p className="absolute -top-3 left-10 bg-[#1a1a1a] px-2 text-gray-400 text-sm">
                Untitled
              </p>

              <div className="flex items-center gap-3 flex-grow justify-center">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="w-30 h-20 bg-black rounded-md"></div>
                ))}
              </div>

              <button className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center text-white text-xl hover:bg-gray-700">
                +
              </button>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mt-4 text-center">No gatekeeping</h3>

            <div className="w-full h-[180px] right-[10.48px] left-[10.48px] px-5">
              <p className="text-white-500 mt-2 text-lg md:text-xl">
                Fashion is evolving, and <span className="font-bold text-blue-400">Outfeatz</span>{" "}
                puts your <br /> style in focus.
              </p>

              <p className="text-white-500 mt-2 text-lg md:text-xl mt-8">
                <a href="#" className="text-blue-400 font-bold hover:underline">Tag</a> and insert
                brands directly into your cut-outs, making it easy to track outfits, highlight
                favourite labels, and curate looks effortlessly.
              </p>
            </div>
            <br />
          </div>
        </div>

        {/* Footer Links and Subscribe Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-35">
          {/* Left Section - Links */}
          <div className="text-sm text-gray-400 space-y-3">
            <ul className="space-y-1">
              {["Home", "FAQ", "Careers", "Terms", "Privacy", "Voltis Labs"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition">{link}</a>
                </li>
              ))}
            </ul>

            {/* Subscribe Button */}
            <div className="w-64 h-10 bg-[#101010] rounded-full flex items-center pl-4 mt-3">
              <p className="text-gray-500">Subscribe</p>
            </div>
          </div>

          {/* Right Section - App Store & Google Play */}
          <div className="flex flex-col items-center md:items-end gap-3 mt-4 md:mt-0">
            <img src="/apple.png" alt="App Store" className="w-36 h-auto" />
            <img src="/google.png" alt="Google Play" className="w-36 h-auto" />
          </div>
        </div>

        {/* Centered Copyright */}
        <p className="mt-6 text-center md:text-base mt-15">
          © 2025 Voltis Labs. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
