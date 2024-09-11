import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { scaleAnimation } from "../anim";
import gsap from "gsap";

const Modal = ({ modal, items }) => {
  const { active, index } = modal;
  const container = useRef(null);
  const videoRef = useRef(Array.from({ length: items.length }, () => null));

  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      moveContainerX(pageX);
      moveContainerY(pageY);
    });
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      // Pause all videos
      items.forEach((_, i) => {
        if (videoRef.current[i]) {
          videoRef.current[i].pause();
          videoRef.current[i].currentTime = 0;
        }
      });

      // Play the video corresponding to the active modal index
      if (active && videoRef.current[index]) {
        videoRef.current[index].play();
      }
    }
  }, [index, items, active]);

  return (
    <>
      <motion.div
        ref={container}
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "enter" : "exit"}
        className="w-[30vw] h-[50vh] flex justify-center items-center absolute overflow-hidden pointer-events-none z-[99] cursor-pointer">
        <div
          style={{ top: index * -100 + "%" }}
          className="h-full w-full absolute transition-[top] duration-500  ease-[cubic-bezier(0.76,0,0.24,1)]">
          {items.map((item, i) => {
            const { src, color } = item;

            return (
              <div
                className={`w-full h-full flex items-center justify-center ${color} px-8`}
                key={i}>
                <video
                  src={`/videos/${src}`}
                  ref={(el) => (videoRef.current[i] = el)}
                  className="h-auto"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Modal;
