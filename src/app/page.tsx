import FashionSection from "@/components/sections/fashion";
import Hero from "@/components/sections/hero";
import Playground from "@/components/sections/playground";
import Faster from "@/components/sections/Faster";
import BetaScroller from "@/components/Beta";
import Last from "@/components/Last";
import WhyWeBuilt from "@/components/sections/WhyWeBuilt";
import Footer from "@/components/sections/footer";
// import Featured from "@/components/sections/featured";
import Showcase from "@/components/sections/showcase";

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
        <Showcase />
        <BetaScroller />
        <Last />
        <BetaScroller />
      </div>
      <Footer />
    </div>
  );
}
