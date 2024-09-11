"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import RoundedButton from "./common/RoundedButton";
import TextAnimation from "./common/TextAnimation";

const reveal = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const AboutSection = () => {
  const scrollContainer = useRef(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const scroll = new LocomotiveScroll({
        el: scrollContainer.current,
        smooth: true,
      });
    })();
  }, []);
  return (
    <section className="bg-white p-10 py-20">
      <div className="px-container flex sm:flex-row flex-col justify-between gap-3 sm:pt-20">
        <p className="text-sub leading-tight">
          <TextAnimation
            text={
              "Starting a business in Dubai or looking to expand your operations? Need expert guidance and support to make it happen effortlessly? We’ve got you covered."
            }
            once
            animDuration={0.02}
          />
        </p>
        <div className="w-90" ref={scrollContainer} data-scroll-section>
          <motion.p
            className="sm:mt-0 mt-5 text-base"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 2,
              type: "tween",
              ease: [0.76, 0, 0.24, 1],
            }}>
            Together, let's redefine business success in Dubai and set new
            benchmarks in the art of seamless company formation.
          </motion.p>

          <div className="mt-16 pb-12" data-scroll data-scroll-speed="-0.07">
            <a href="/about">
              <RoundedButton
                backgroundColor={"#334BD3"}
                className="h-[180px] w-[180px] bg-blue-500 text-white rounded-full relative z-20 flex items-center justify-center cursor-pointer">
                <p className="m-0 z-10 relative">Contact Us</p>
              </RoundedButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
