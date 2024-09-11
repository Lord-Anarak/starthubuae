"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { menuSlide, linkSlide } from "../anim";

export const Curve = () => {
  const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${
    window.innerHeight
  } Q-50 ${window.innerHeight / 2} 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${
    window.innerHeight
  } Q100 ${window.innerHeight / 2} 100 0`;

  const curveAnim = {
    initial: { d: initialPath },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };
  return (
    <svg className="absolute top-0 left-[-99px] w-[100px] h-full fill-black stroke-none">
      <motion.path
        variants={curveAnim}
        initial="initial"
        animate="enter"
        exit="exit"></motion.path>
    </svg>
  );
};

const Sidebar = ({ closeSidebar }) => {
  const SideLinks = ["Home", "About", "Services", "Contact"];
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen sm:px-[7.5vw] px-10 sm:w-[calc(100vw/2.8)] w-full py-[10vh] z-40 bg-black fixed top-0 right-0 flex flex-col justify-end">
      <h6 className="text-white opacity-50 text-[10px] tracking-widest">
        NAVIGATION
      </h6>
      <div className="opacity-30 my-10 h-[1px] bg-white w-full" />
      <ul>
        {SideLinks.map((sideLink, index) => {
          const lcText = sideLink.toLowerCase();

          return (
            <motion.li
              custom={index}
              variants={linkSlide}
              initial="initial"
              animate="enter"
              exit="exit"
              className="text-white text-5xl py-2 btn-sidebar"
              key={index}
              onClick={closeSidebar}>
              <Link href={lcText === "home" ? "/" : `/${lcText}`}>
                {sideLink}
              </Link>
            </motion.li>
          );
        })}
      </ul>
      <h6 className="text-white opacity-30 text-[10px] mt-20">SOCIALS</h6>
      <ul className="flex gap-5 justify-between">
        <li className="text-white mt-5 sm:text-base text-xs">
          <Link
            href="https://www.facebook.com/people/360-Motion-Studio/100092259304482/"
            target="_blank">
            Facebook
          </Link>
        </li>
        <li className="text-white mt-5 sm:text-base text-xs">
          <Link href="https://instagram.com/360motionstud" target="_blank">
            Instagram
          </Link>
        </li>
        <li className="text-white mt-5 sm:text-base text-xs">
          <Link href="#">Youtube</Link>
        </li>
        <li className="text-white mt-5 sm:text-base text-xs">
          <Link
            href="https://www.linkedin.com/in/david-kotoka-913782231"
            target="_blank">
            LinkedIn
          </Link>
        </li>
      </ul>
      <Curve />
    </motion.div>
  );
};

export default Sidebar;
