import React, { useState, useRef, useEffect } from "react";
import Modal from "./Modal";
import { motion } from "framer-motion";
import Overlay from "./common/Overlay";

const Works = [
  {
    title: "Business Setup",
    type: "Mailand | Freezone | Offshore",
    src: "businessSetup.mp4",
    color: "bg-yellow-100",
  },
  {
    title: "Visa Soulutions",
    type: "Golden | Resident | Visit",
    src: "residency.mp4",
    color: "bg-red-200",
  },
  {
    title: "Bank & Financial",
    type: "Account Opening",
    src: "otherFinancial.mp4",
    color: "bg-orange-200",
  },
  {
    title: "Virtual Office",
    type: "Ejari | Virtual Office",
    src: "officeSpace.mp4",
    color: "bg-slate-400",
  },
];

const Services = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [isMobile, setIsMobile] = useState();
  const container = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:1000px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <motion.div ref={container} className="-mt-20 pb-20 bg-white">
      <div className="px-container max-w-[100em] bg-white relative z-10">
        <p className="text-gray-500 text-sm pl-[calc(theme(padding.container)*1)]">
          CORE SERVICES
        </p>
        <ul className="mt-16">
          <hr />
          {isMobile
            ? Works.map(({ title, type, src }, index) => (
                <li
                  key={index}
                  className="text-3xl text-black border-b w-full flex sm:flex-row flex-col justify-between items-center py-10 sm:px-5">
                  <div
                    className={`w-96 h-72 flex items-center justify-center px-5`}>
                    <video
                      src={`/videos/${src}`}
                      className="h-auto"
                      muted
                      loop
                      autoPlay
                    />
                  </div>
                  <span className="group-hover:-translate-x-4 group-hover:text-gray-600 duration-200 ease-linear">
                    {title}
                  </span>
                  <span className="group-hover:-translate-x-4 group-hover:text-black duration-200 ease-linear text-base mt-3 sm:mt-0">
                    {type}
                  </span>
                </li>
              ))
            : Works.map(({ title, type }, index) => (
                <li
                  key={index}
                  className="text-h4 text-black border-b w-full flex sm:flex-row flex-col justify-between items-center py-10 px-[calc(theme(padding.container)*.5)] group"
                  onMouseEnter={() =>
                    setModal((prevState) => ({ active: true, index: index }))
                  }
                  onMouseLeave={() =>
                    setModal((prevState) => ({ active: false, index: index }))
                  }>
                  <span className="group-hover:-translate-x-4 group-hover:text-gray-600 duration-200 ease-linear">
                    {title}
                  </span>
                  <span className="group-hover:-translate-x-4 group-hover:text-black duration-200 ease-linear text-xl">
                    {type}
                  </span>
                </li>
              ))}
        </ul>
      </div>
      <Modal modal={modal} items={Works} />
    </motion.div>
  );
};

export default Services;
