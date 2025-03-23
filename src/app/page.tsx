import FashionSection from "@/components/sections/fashion";
import Featured from "@/components/sections/featured";
import Hero from "@/components/sections/hero";
import Showcase from "@/components/sections/showcase";
import Playground from "@/components/sections/playground";
import Footer from "@/components/sections/footer";




export default function Home() {
  return (
    <div className="page-container bg-black w-full min-h-screen">       
    <Hero />
    <Featured/>
    <Showcase/>
    <FashionSection/>
    <Playground/>
    <Footer/>
    </div>
  );
}
