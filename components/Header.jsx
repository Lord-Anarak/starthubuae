"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { AnimatePresence, motion } from "framer-motion";
import RoundedButton from "./common/RoundedButton";
import Magnetic from "./common/Magnetic";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const navLinks = ["About", "Services", "Contact"];
  const path = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <header className="w-full absolute z-50">
      <div className="flex justify-between sm:p-10 p-5">
        <div className="sm:w-28 w-20">
          <Link
            href="/"
            className={path === "/contact" || path === "/" ? "text-white" : ""}>
            <Image
              src={`/logo_${
                path === "/contact" || path === "/" ? "white_" : ""
              }svg.svg`}
              width={300}
              height={300}
              alt="logo"
            />
          </Link>
        </div>
        <nav>
          <ul className="sm:flex justify-between gap-10 hidden">
            {navLinks.map((link, index) => {
              const lcText = link.toLowerCase();
              return (
                <Magnetic key={index}>
                  <li
                    className={`p-2 ${
                      path === `/contact` ? "btn-navbar-c" : "btn-navbar"
                    }`}>
                    <Link
                      href={`/${lcText}`}
                      className={`transition-all duration-500 delay-500 ease-in-out ${
                        path === "/contact" || path === "/" ? "text-white" : ""
                      }`}>
                      {link}
                    </Link>
                  </li>
                </Magnetic>
              );
            })}
          </ul>
        </nav>
        <button
          className={`${
            path === "/contact" || path === "/" ? "text-white" : ""
          } sm:hidden flex items-center`}
          onClick={() => setIsOpen(!IsOpen)}>
          <span
            className={`w-[5px] h-[5px] inline-block rounded-full mr-2 ${
              path === "/contact" || path === "/" ? "bg-white" : "bg-black"
            }`}></span>
          Menu
        </button>
      </div>

      <motion.button
        initial={{ scale: 0 }}
        animate={{
          scale: isScrolled || IsOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeIn", type: "tween" }}
        className={`burgerButton sm:m-10 m-3 z-50`}
        onClick={() => setIsOpen(!IsOpen)}>
        <RoundedButton
          backgroundColor={"#2563eb"}
          className={`h-16 w-16 text-white border border-slate-400 rounded-full absolute flex items-center justify-center cursor-pointer ${
            IsOpen ? "bg-blue-700" : "bg-slate-900"
          }`}>
          <div className={`burger ${IsOpen ? "burgerActive" : ""} z-30`}></div>
        </RoundedButton>
      </motion.button>
      <AnimatePresence mode="wait">
        {IsOpen && <Sidebar closeSidebar={() => setIsOpen(false)} />}
      </AnimatePresence>
    </header>
  );
};

export default Header;
