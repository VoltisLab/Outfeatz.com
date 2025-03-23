import Image from "next/image";

const Playground = () => {
  return (
    <div className="w-[1686px] h-[1072px] top-[4820px] left-[-121px] mx-auto bg-black text-white text-left px-6 md:px-16">
      {/* Text Area */}
      <div className="flex justify-start">
        <header className="py-10">
          <p className="text-blue-400 font-semibold text-lg md:text-xl gap-2 flex items-center">
            <img src="star.png" alt="Star" className="w-5 h-5 mr-2" />
            <span className="text-white"> Experience</span> Workflow
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-blue-400">The Ultimate Style <br /> Playground</span>
          </h1>
        </header>
      </div>

      <div className="grid grid-cols-5 gap-6 absolute w-[1686px] right-[-140px] left-[-121px] mx-auto">
        {/* Column 1 - Left Gallery */}
        <div className="flex flex-col items-center space-y-8">
          <Image src="/denim1.png" alt="Gallery Left" width={300} height={400} className="w-full max-w-md bg-gradient-to-b from-[#282828] to-[#0D0D0D] rounded-2xl shadow-lg" />
          <Image src="/style1.png" alt="Gallery Left" width={300} height={400} className="w-full max-w-md bg-gradient-to-b from-[#282828] to-[#0D0D0D] rounded-2xl shadow-lg" />
        </div>

        {/* Column 2 - Before/After Section */}
        <div className="flex flex-col items-center text-center mt-35 gap-35">
          <div className="grid grid-cols-2 gap-4 bg-gradient-to-b from-[#282828] to-[#0D0D0D] rounded-2xl shadow-lg p-4">
            <h1 className="text-left text-blue-400">Before</h1>
            <h1 className="text-left text-white">After</h1>
            <div className="space-y-4">
              <Image src="/before1.jfif" alt="Before Image 1" width={119} height={92} className="w-[119px] h-[92px] object-cover rounded-2xl" />
              <Image src="/before2.png" alt="Before Image 2" width={119} height={171} className="w-[119px] h-[171px] object-cover rounded-2xl" />
            </div>
            <div className="space-y-4">
              <Image src="/after1.png" alt="After Image 1" width={119} height={171} className="w-[119px] h-[171px] object-cover border border-gray-500 rounded-2xl" />
              <Image src="/after2.png" alt="After Image 2" width={119} height={92} className="w-[119px] h-[92px] object-cover border border-gray-500 rounded-2xl" />
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
            <Image src="/style1.png" alt="Fashion Image" width={302} height={189} className="w-[302px] h-[189px] object-contain" />
          </div>

          <div className="w-[312px] h-[213px] flex justify-center items-center p-1 -mt-1">
            <Image src="/notion.png" alt="Roadmap Planning" width={315} height={67} className="w-[315px] h-[67px] object-contain" />
          </div>

          <div className="flex flex-col p-3 w-[312px] bg-gradient-to-b from-[#282828] to-[#0D0D0D] rounded-2xl shadow-lg">
            <div className="flex justify-center gap-1.5 mb-2">
              {[...Array(4)].map((_, index) => (
                <Image key={index} src={`/style${index + 1}.png`} alt="Styled Image" width={58} height={92} className="w-[58px] h-[92px] object-contain" />
              ))}
            </div>
            <div className="text-center space-y-1.5 p-2">
              <p className="text-[18px] font-bold tracking-[1px] text-left">
                Fashion is more than just what you wear – it's a statement, a collection of moments, a reflection of who you are.
              </p>
              <p className="text-blue-400 text-left font-bold tracking-[1px]">
                With Outfeatz, turn your best outfit shots into stunning, cut-out digital galleries that let your style shine like never before.
              </p>
            </div>
          </div>
        </div>

        {/* Column 4 - Before/After Section */}
        <div className="flex flex-col items-center text-center mt-35 gap-35">
          <div className="grid grid-cols-2 gap-4 bg-gradient-to-b from-[#282828] to-[#0D0D0D] rounded-2xl shadow-lg p-4">
            <h1 className="text-left text-blue-400">Before</h1>
            <h1 className="text-left text-white">After</h1>
            <div className="space-y-4">
              <Image src="/left1.jfif" alt="Before Image 1" width={119} height={92} className="w-[119px] h-[92px] object-cover rounded-2xl" />
              <Image src="/left3.png" alt="Before Image 2" width={119} height={171} className="w-[119px] h-[171px] object-cover rounded-2xl" />
            </div>
            <div className="space-y-4">
              <Image src="/left2.png" alt="After Image 1" width={119} height={171} className="w-[119px] h-[171px] object-cover border border-gray-500 rounded-2xl" />
              <Image src="/left4.png" alt="After Image 2" width={119} height={92} className="w-[119px] h-[92px] object-cover border border-gray-500 rounded-2xl" />
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
          <div className="w-[312px] h-[448px]">
            <Image src="/denim1.png" alt="Gallery Right" width={312} height={408} className="w-[312px] h-[408px] bg-gradient-to-b from-[#282828] to-[#0D0D0D] rounded-2xl shadow-lg" />
          </div>
          <div className="w-[312px] h-[213px]">
            <Image src="/style1.png" alt="Gallery Right" width={302} height={189} className="w-[302px] h-[189px] bg-gradient-to-b from-[#282828] to-[#0D0D0D] rounded-2xl shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
