import Challenge from "./sections/Challenge";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import Navbar from "./sections/Navbar";
import Pricing from "./sections/Pricing";
import Wave1 from "./sections/Wave1";
import Wave2 from "./sections/Wave2";
import Wave3 from "./sections/Wave3";

export default function Home() {
  return (
    <main className="w-screen h-screen flex-col m-0">
      <Navbar/>
      <Hero/>
      <Wave1/>
      <Challenge/>
      <Wave2/>
      <HowItWorks/>
      <Wave3/>
      <Pricing/>
    </main>
  );
}
