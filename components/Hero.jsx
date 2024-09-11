"use client";
import React, { useEffect, useRef } from "react";
import TextAnimation from "./common/TextAnimation";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 350,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const fadeDown = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Hero = () => {
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
    <div className="h-screen w-full bg-zinc-600 relative overflow-y-hidden">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.75, ease: [0.76, 0, 0.24, 1] }}
        className="absolute -bottom-52 right-0 w-full h-full"
        ref={scrollContainer}>
        <Image src="/Hero2.png" fill data-scroll data-scroll-speed="0.3" />
      </motion.div>
      <div className="sm:p-10 p-5 flex sm:flex-row flex-col justify-between items-center">
        <div className="mt-40 relative z-10 text-white overflow-hidden">
          <motion.h1
            variants={fadeDown}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
            className="sm:text-[2vw] text-xl ml-1">
            Unlock Your Business Potential in Dubai
          </motion.h1>
          <h2 className="mt-5 sm:text-[8vw] text-5xl uppercase leading-[1] overflow-hidden">
            <TextAnimation
              text={"Seamless"}
              classes={"font-black"}
              textDelay={0.5}
              once
            />
            <br />
            <TextAnimation
              text={"Business Setup"}
              classes={"font-black"}
              textDelay={1.5}
              once
            />
          </h2>
          <motion.div
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{
              ease: [0.76, 0, 0.24, 1],
              duration: 1,
            }}
            className="overflow-hidden">
            <motion.p
              initial={{ x: -500 }}
              animate={{ x: 0 }}
              transition={{
                ease: [0.76, 0, 0.24, 1],
                duration: 2,
                delay: 2,
              }}
              className="sm:text-lg text-sm mt-5 ml-1 tracking-wider">
              Mainland | Freezone | Offshore
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
