import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const slide = [
  "ded.jpg",
  "dld.jpg",
  "dubaiCourts.jpg",
  "dubaiMunicipality.jpg",
];
const slide2 = ["DubaiGov.jpg", "faic.jpg", "fca.jpg", "sira.jpg"];

const WorkWith = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [-250, 0]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return (
    <div
      ref={container}
      className="relative pt-[calc(theme(padding.section)*0.75)] pb-[calc(theme(padding.section)-1.5vw)] top-0 overflow-hidden">
      <motion.div style={{ x: x1 }} className="sm:w-[120%] w-[200%] flex">
        {slide.map((img, index) => (
          <div
            key={index}
            className="p-[1.25vw] w-1/4 overflow-hidden relative flex justify-center items-center">
            <div className="bg-white w-full h-full relative">
              <img src={`/workwith/${img}`} alt="image" />
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div style={{ x: x2 }} className="sm:w-[120%] w-[200%] flex">
        {slide2.map((img, index) => (
          <div
            key={index}
            className="p-[1.25vw] w-1/4 overflow-hidden relative flex justify-center items-center">
            <div className="bg-white w-full h-full relative">
              <img src={`/workwith/${img}`} alt="image" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default WorkWith;
