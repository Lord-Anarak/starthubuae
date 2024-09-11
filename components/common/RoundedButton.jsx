import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Magnetic from "./Magnetic";

const RoundedButton = ({
  children,
  backgroundColor = "#2563eb",
  ...attributes
}) => {
  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className="rounded-full border border-gray-500 cursor-pointer flex items-center justify-center sm:px-10 px-5 sm:py-5 py-4"
        style={{ overflow: "hidden" }}
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        {...attributes}>
        {children}
        <div
          ref={circle}
          style={{ backgroundColor }}
          className="w-full h-[150%] absolute rounded-full top-full"></div>
      </div>
    </Magnetic>
  );
};

export default RoundedButton;
