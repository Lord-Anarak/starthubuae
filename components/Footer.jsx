"use client";
import { useRef, useEffect, useState } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Magnetic from "./common/Magnetic";
import RoundedButton from "./common/RoundedButton";
import Link from "next/link";

const getDubaiTime = () => {
  const dubaiTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Dubai",
    hour: "2-digit",
    minute: "2-digit",
  });
  return dubaiTime;
};

const Footer = () => {
  const container = useRef(null);
  const [time, setTime] = useState(getDubaiTime());

  useEffect(() => {
    // Update time every second
    const intervalId = setInterval(() => {
      setTime(getDubaiTime());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-400, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  return (
    <motion.div
      style={{ y }}
      ref={container}
      className="flex flex-col justify-center items-center text-white relative bg-gray-950 overflow-hidden">
      <div className="pt-[250px] w-full">
        <div className="border-b-gray-500 sm:border-b-2 border-b sm:pb-[90px] pb-16 sm:mx-[200px] mx-5">
          <span className="flex items-center">
            <h2 className="sm:ml-2 sm:text-[3vw] text-3xl">Let&apos;s work</h2>
          </span>
          <h2 className="m-0 mt-2 sm:text-[8vw] text-5xl font-semibold">
            together
          </h2>
          <motion.div
            style={{ x }}
            className="relative sm:left-[calc(100%-400px)] sm:top-[calc(100%-5px)] mt-5 sm:mt-0">
            <RoundedButton
              backgroundColor={"#4c00a8"}
              className="sm:h-[180px] sm:w-[180px] h-28 w-28 bg-blue-600 text-white rounded-full absolute flex items-center justify-center cursor-pointer">
              <p className="m-0 z-10 relative text-sm">Contact Now</p>
            </RoundedButton>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            className="absolute top-1/3 left-[90%]"
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <div className="flex sm:flex-row flex-col gap-5 sm:mx-[200px] mx-5 mt-16">
          <RoundedButton>
            <Link href="mailto:info@starthubuae.com" className="relative z-10">
              info@starthubuae.com
            </Link>
          </RoundedButton>
          <RoundedButton>
            <Link
              href="https://wa.me/+971545078712"
              target="_blank"
              className="relative z-10">
              Send a quick message
            </Link>
          </RoundedButton>
        </div>
        <div className="flex sm:flex-row flex-col-reverse gap-5 sm:gap-0 justify-between p-3 sm:p-5 sm:mt-24 mt-5">
          <div className="flex gap-10 sm:items-end justify-between">
            <span className="flex flex-col sm:gap-5 ">
              <h3 className="m-0 p-2 cursor-pointer text-sm text-slate-400">
                Copyright
              </h3>
              <p className="m-0 p-2 cursor-pointer">2024 © Edition</p>
            </span>
            <span className="flex flex-col sm:gap-5 ">
              <h3 className="m-0 p-2 cursor-pointer text-sm text-slate-400 sm:text-start text-end">
                Local Time
              </h3>
              <p className="m-0 p-2 cursor-pointer sm:text-start text-end">
                {time} GMT+4
              </p>
            </span>
            <span className="flex flex-col sm:gap-5 ">
              <h3 className="m-0 p-2 cursor-pointer text-sm text-slate-400">
                socials
              </h3>
              <Magnetic>
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="m-0 p-2 cursor-pointer">
                  Facebook
                </Link>
              </Magnetic>
            </span>
            <Magnetic>
              <Link
                href="https://instagram.com/starthub___"
                target="_blank"
                className="m-0 p-2 cursor-pointer">
                Instagram
              </Link>
            </Magnetic>
          </div>
          <div className="flex sm:gap-10 items-end">
            <span className="flex flex-col sm:gap-5 ">
              <h3 className="m-0 p-2 cursor-pointer text-sm text-slate-400">
                Credits
              </h3>
              <Magnetic>
                <Link
                  href="https://lord-anarak.github.io/portfolio/"
                  target="_blank"
                  className="m-0 p-2 cursor-pointer">
                  Coded By Afrar
                </Link>
              </Magnetic>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
