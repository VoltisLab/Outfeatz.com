import WhyCard from "./WhyCard";

export default function WhyWeBuilt() {
  return (
    <section className="bg-black py-16 flex flex-col items-center space-y-12 md:px-4">
      <h2 className="text-white text-2xl md:text-3xl font-bold text-center">
        Why did we build this?
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-8 flex-wrap">
        <WhyCard
          imageSrc="/bag.png"
          title="Trip planning gone wrong"
          description="I struggled to plan outfits ahead of a trip, juggling photos, mood boards and the notes app that just didn’t flow."
        />
        <WhyCard
          imageSrc="/face.png"
          title="Notes App Didn’t Cut It"
          description="Using my phone’s Notes app felt clunky and time-consuming, not built for style or speed."
        />
        <WhyCard
          imageSrc="/bulb.png"
          title="Built for Simplicity"
          description="So I created Outfeatz: a fast, focused digital wardrobe designed to make outfit planning effortless."
        />
      </div>
    </section>
  );
}
