import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const services = [
  { title: "Business", title2: "Setup", src: "businessSetup.mp4" },
  { title: "Residency", title2: "Visa", src: "residency.mp4" },
  { title: "Golden", title2: "Visa", src: "goldenVisa.mp4" },
  { title: "Bank Account", title2: "Opening", src: "bankAccount.mp4" },
  { title: "Financial", title2: "Services", src: "otherFinancial.mp4" },
  { title: "Virtual", title2: "Office space", src: "officeSpace.mp4" },
  { title: "Notary", title2: "Services", src: "notary.mp4" },
  { title: "Government", title2: "Approvals", src: "approvals.mp4" },
  { title: "All kind of ", title2: "Renewals", src: "renewals.mp4" },
];

const ScrollAnimation = () => {
  const container = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(Array.from({ length: services.length }, () => null));
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    if (videoRef.current) {
      // Pause all videos
      services.forEach((_, i) => {
        if (videoRef.current[i]) {
          videoRef.current[i].pause();
          videoRef.current[i].currentTime = 0;
        }
      });

      // Play the video corresponding to the active modal index
      if (videoRef.current[currentIndex]) {
        videoRef.current[currentIndex].play();
      }
    }
  }, [currentIndex, services]);

  // Calculate and update the index based on scroll
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const maxIndex = services.length - 1; // Maximum index value
    const newIndex = Math.min(Math.floor(value * services.length), maxIndex); // Clamp the index to maxIndex
    setCurrentIndex(newIndex); // Update the state with the new clamped index
  });

  return (
    <div className="relative h-[400vh] bg-gray-950 z-10" ref={container}>
      <div className="h-52 overflow-hidden sticky top-24 -mb-10">
        <div className="relative h-full">
          <div
            style={{ top: currentIndex * -100 + "%" }}
            className="absolute w-full h-full transition-[top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
            {services.map((item, index) => {
              return (
                <div className="h-full">
                  <h2
                    key={index}
                    className="text-center text-title font-bold uppercase h-full leading-tight text-white">
                    {item.title} <br /> {item.title2}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="sticky top-72 overflow-hidden">
        <div className="flex justify-between items-center w-full p-16 absolute left-0">
          <div className="flex items-center justify-center">
            <Image
              src="/stamp.png"
              width={150}
              height={150}
              alt="stamp"
              className="animate-spin-slow"
            />
            <Image
              src="/logoIcon.png"
              width={50}
              height={50}
              alt="logo_icon"
              className="absolute mx-auto ml-2"
            />
          </div>
          <div>
            <p className="text-gray-500 text-sub font-semibold">
              0{currentIndex + 1}
              <span className="font-light text-[0.75em]">/</span>0
              {services.length}
            </p>
          </div>
        </div>
        <div className="relative w-1/2 mx-auto h-[50vh] overflow-hidden rounded-3xl">
          {/* Motion div to animate the 'top' value */}
          <motion.div
            style={{ top: `${currentIndex * -100}%` }}
            className="absolute w-full h-full transition-[top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
            {services.map((item, index) => (
              <div key={index} className="w-full h-full flex justify-center">
                <video
                  src={`/videos/${item.src}`}
                  ref={(el) => (videoRef.current[index] = el)}
                  muted
                  loop
                  className="h-auto object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimation;
