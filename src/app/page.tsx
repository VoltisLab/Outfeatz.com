import Featured from "@/components/sections/featured";
import Hero from "@/components/sections/hero";
import Showcase from "@/components/sections/showcase";
import Image from "next/image";

export default function Home() {
  return (
    <div className="page-container bg-black w-full min-h-screen">       
    <Hero />
    <Featured/>
    <Showcase/>
    </div>
  );
}
