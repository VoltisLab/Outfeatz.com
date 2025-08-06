import FashionSection from "@/components/sections/fashion";
import Featured from "@/components/sections/featured";
import Hero from "@/components/sections/hero";
import Showcase from "@/components/sections/showcase";
import Playground from "@/components/sections/playground";
import Footer from "@/components/sections/footer";
import Faster from "@/components/sections/Faster";
import BetaScroller from "@/components/Beta";
import Last from "@/components/Last";
import WhyWeBuilt from "@/components/sections/WhyWeBuilt";

export default function Home() {
  return (
    <div className="bg-black w-full min-h-screen">
      <div className="max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8">
      <Playground />
        <Hero />
        <FashionSection />
        {/* <Featured /> */}
        <Faster />
        <WhyWeBuilt />
        <BetaScroller />
        <Last />
        <BetaScroller />
        {/* <Showcase /> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
}
