import Overlay from "@/components/common/Overlay";
import TextAnimation from "@/components/common/TextAnimation";
import Curve from "@/components/curve";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";

const ServicesPage = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.6]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <Curve backgroundColor="black">
      <section className="bg-white relative" ref={container}>
        <motion.div
          style={{ scale, opacity }}
          className="flex flex-col h-[80vh] justify-center items-center sm:mb-8 pt-16 sticky top-0">
          <h1 className="text-title leading-tight sm:px-[16vw] mx-5 uppercase overflow-hidden">
            <TextAnimation
              text={"Unlocking Opportunities"}
              once
              textDelay={0.5}
              animDuration={0.05}
              classes={"font-medium"}
            />
          </h1>
          <h2 className="text-title leading-tight sm:px-[16vw] mx-5 uppercase overflow-hidden">
            <TextAnimation
              text={"with Our Comprehensive"}
              once
              textDelay={0.9}
              animDuration={0.05}
              classes={"font-medium"}
            />
          </h2>
          <h2 className="text-title leading-tight sm:px-[16vw] mx-5 uppercase overflow-hidden">
            <TextAnimation
              text={"Services"}
              once
              textDelay={1.3}
              animDuration={0.05}
              classes={"font-medium"}
            />
          </h2>
          <hr />
        </motion.div>
        <div className="h-[480vh] bg-gray-950 relative pt-36 p-container">
          <ScrollAnimation />
        </div>
      </section>
      <Footer />
    </Curve>
  );
};

export default ServicesPage;
