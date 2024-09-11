"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Overlay = ({ container }) => {
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.8], [75, 0]);

  return (
    <motion.div style={{ height }} className="bg-red-500 relative">
      <div className="circle"></div>
    </motion.div>
  );
};

export default Overlay;
