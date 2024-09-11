import Curve from "@/components/curve";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import WorkWith from "@/components/WorkWith";
import { useRef } from "react";
import Overlay from "@/components/common/Overlay";

export default function Home() {
  const container = useRef(null);
  return (
    <>
      <Curve backgroundColor="black">
        <Hero />
        <AboutSection />
        <Services />
        <div ref={container} className="bg-white relative z-20">
          <WorkWith />
        </div>
        <Overlay reference={container} />
        <Footer />
      </Curve>
    </>
  );
}
