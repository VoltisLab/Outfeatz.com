"use client";

import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
export default function Last() {
  return (
    <footer className="bg-black text-white md:px-16 py-20 flex flex-col gap-12 w-full">
      {/* Social section */}
      <div className="text-center space-y-4 max-w-5xl mx-auto flex flex-col w-full">
        <h2 className="text-2xl md:text-4xl font-bold">Keep up with us on socials:</h2>
        <div className="flex justify-between gap-8 text-lg font-bold w-full">
          <p>@Outfeatz</p>
          <p>@Outfeatz</p>
          <p>@Outfeatz</p>
        </div>
      </div>

      {/* Footer main content */}
      <div className="flex flex-col max-h-[726px] md:h-[526px] lg:h-[526px] bg-[#F1F1EF] text-black rounded-3xl px-5 md:px-8 lg:px-10 py-20 w-full">
  <div className="flex flex-col md:flex-row justify-between max-h-[726px] h-[726px] md:h-auto lg:h-[526px] items-start gap-12 md:gap-6 lg:gap-8 w-full">
    {/* Chronicle block */}
    <div className="flex flex-col gap-4 w-full md:w-auto lg:flex-1">
      <div className="flex items-center gap-2">
        <span className="text-base font-semibold text-black">✦ chronicle</span>
      </div>
      <p className="text-[#838383] text-sm max-w-[200px] md:max-w-[180px] lg:max-w-[200px] font-bold">Experience the future of storytelling.</p>
      <p className="text-[#838383] text-xs max-w-[200px] md:max-w-[180px] lg:max-w-[200px] font-bold">Being built remote on sunny shores around the world</p>
    </div>

    {/* Links container */}
    <div className="flex gap-12 md:gap-8 lg:gap-12 flex-1 justify-between items-start w-full md:w-auto">
      {/* About */}
      <div className="flex flex-col gap-2 min-w-[120px] md:min-w-[100px] lg:min-w-[120px]">
        <h4 className="text-black font-semibold text-sm">About</h4>
        <ul className="flex flex-col gap-1 text-sm text-[#838383] font-bold">
          <li><a href="#" className="hover:underline">Contact</a></li>
          <li><a href="#" className="hover:underline">Blog</a></li>
          <li><a href="#" className="hover:underline">Our Story</a></li>
          <li className="flex items-center gap-2">
            <a href="#" className="hover:underline">Careers</a>
            <span className="bg-[#7053FF] text-white rounded px-1 py-0.5 text-xs font-bold">HIRING</span>
          </li>
        </ul>
      </div>

      {/* Company */}
      <div className="flex flex-col gap-2 min-w-[120px] md:min-w-[100px] lg:min-w-[120px]">
        <h4 className="text-black font-semibold text-sm">Company</h4>
        <ul className="flex flex-col gap-1 text-sm text-[#838383] font-bold">
          <li><a href="#" className="hover:underline">Press</a></li>
          <li><a href="#" className="hover:underline">Brand Assets</a></li>
          <li><a href="#" className="hover:underline">Terms of service</a></li>
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
        </ul>
      </div>
    </div>

    {/* Social / CTA */}
    <div className="flex flex-col gap-4 w-full md:w-auto md:flex-1 lg:flex-1 min-w-[200px] md:min-w-[180px] lg:min-w-[200px]">
      <a
        href="#"
        className="flex items-center gap-3 bg-white rounded-full py-2 px-4 w-fit shadow hover:shadow-lg transition"
      >
        <FaTwitter color="blue" fill="blue" />
        <span className="text-black font-medium text-sm md:text-xs lg:text-sm">Follow us on Twitter for updates</span>
      </a>
      <a
        href="#"
        className="flex flex-col justify-center gap-2 bg-white rounded-2xl py-4 px-4 w-full max-w-[260px] md:max-w-[220px] lg:max-w-[260px] shadow hover:shadow-lg transition text-left"
      >
        <div className="flex items-center gap-3 md:gap-2 lg:gap-3">
          <div className="bg-black rounded-full flex items-center justify-center">
            <Image src="/beta1.png" alt="beta-image" width={80} height={80} className="md:w-16 md:h-16 lg:w-20 lg:h-20" />
          </div>
          <p className="text-black font-semibold text-sm md:text-xs lg:text-sm">Apply for early access</p>
        </div>
      </a>

      <p className="font-bold text-[#838383] text-xs max-w-[260px] md:max-w-[220px] lg:max-w-[260px]">
        We are still fine tuning the product and would love your help. Join our Beta to help contribute
      </p>
    </div>
  </div>

  <div className="flex flex-col gap-4 w-full md:w-auto">
    <p className="font-bold text-[#838383] text-xs">
      Being built remote on sunny shores around the world
    </p>
  </div>
</div>



    </footer>
  );
}
