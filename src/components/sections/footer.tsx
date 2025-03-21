import Image from "next/image";

const Footer = () => {
  return (
    <footer className="max-w-[1280px] mx-auto py-14 px-6 md:px-12 text-white" style={{ backgroundImage: "url('/bg.png')" }} >
    

      <div className="flex flex-col md:flex-row justify-between ">
        <ul className="text-sm text-gray-400 space-y-2">
          {["Home", "FAQ", "Careers", "Terms", "Privacy", "Voltis Labs"].map((link) => (
            <li key={link}>
              <a href="#" className="hover:text-white transition">{link}</a>
            </li>
          ))}
          
          <br />
          {/* Subscribe Button */}
  <input placeholder="subscribe" className="w-[200px] md:w-[200px] md:h-[30px] bg-[#1a1a1a]  space-y-0 text-gray-500 text-lg text-sm py-1 px-2 text-left left-2 rounded-xl shadow-md transition"/>
        </ul>
        
{/* Right - App Store & Google Play */}
 <div className="flex flex-col space-y-3 mt-6">
                  <Image objectFit="contain" src="/images/Apple.svg" alt="Google Play" width={150} height={50} />
                  <Image objectFit="contain" src="/images/Google.svg" alt="App Store" width={150} height={50} />
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

