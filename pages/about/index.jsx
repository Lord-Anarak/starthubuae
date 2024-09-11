"use client";
import React, { useEffect, useRef } from "react";
import Overlay from "@/components/common/Overlay";
import Footer from "@/components/Footer";
import TextAnimation from "@/components/common/TextAnimation";
import { motion } from "framer-motion";
import Curve from "@/components/curve";
import Image from "next/image";

const process = [
  {
    title: "Client-First",
    img: "clientFirst.jpg",
    desc: "We prioritize understanding and meeting our clients' needs, ensuring a seamless and personalized experience throughout their business journey.",
  },
  {
    title: "Innovative Spirit",
    img: "innovative.jpg",
    desc: "Driven by curiosity and enthusiasm, we embrace new ideas and approaches, always striving to exceed expectations and set new standards.",
  },
  {
    title: "Agility",
    img: "agility.jpg",
    desc: "Infusing vibrancy and depth, we meticulously craft textures and shades to enrich visual storytelling.",
  },
  {
    title: "Expertise",
    img: "expertise.jpg",
    desc: "Our extensive experience and proven success in business setup and management form the foundation of our reliable and effective solutions.",
  },
  {
    title: "Transparency",
    img: "transparency.jpg",
    desc: "We practice honesty and direct communication, ensuring clarity and fairness in all our interactions and decisions.",
  },
  {
    title: "Empowering",
    img: "empowering.jpg",
    desc: "We empower our clients with the knowledge and tools they need to succeed, fostering a supportive and collaborative environment.",
  },
  {
    title: "Creative Problem-Solving",
    img: "solving.jpg",
    desc: "We approach challenges with creativity and innovation, leveraging our expertise to find effective and tailored solutions.",
  },
  {
    title: "Inclusive",
    img: "inclusive.jpg",
    desc: "We value diversity and collaboration, drawing on different perspectives to drive the best results and foster a positive, inclusive work environment.",
  },
];

const AboutPage = () => {
  const scrollContainer = useRef(null);
  const container = useRef(null);

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
    <Curve backgroundColor="black">
      <div className="bg-white">
        <div className="flex flex-col h-[80vh] justify-center items-center sm:mb-8 pt-16">
          <h1 className="text-title leading-tight sm:px-[16vw] mx-5 uppercase overflow-hidden">
            <TextAnimation
              text={"Empowering Businesses"}
              once
              textDelay={0.5}
              animDuration={0.05}
              classes={"font-medium"}
            />
          </h1>
          <h2 className="text-title leading-tight sm:px-[16vw] mx-5 uppercase overflow-hidden">
            <TextAnimation
              text={"to Flourish in Dubai's"}
              once
              textDelay={0.9}
              animDuration={0.05}
              classes={"font-medium"}
            />
          </h2>
          <h2 className="text-title leading-tight sm:px-[16vw] mx-5 uppercase overflow-hidden">
            <TextAnimation
              text={"Dynamic Market"}
              once
              textDelay={1.3}
              animDuration={0.05}
              classes={"font-medium"}
            />
          </h2>
          <hr />
        </div>
        <div className="bg-white relative z-10" data-scroll-container>
          <div className="flex sm:flex-row flex-col justify-between gap-20 relative max-w-7xl mx-auto">
            <div className="sm:w-1/2 sm:ml-32 mx-5 sm:mx-0">
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 1 }}
                className="text-justify">
                At Start Hub, we are your trusted partners in business setup and
                management consultancy, dedicated to transforming your
                entrepreneurial dreams into reality. Based in the heart of
                Dubai, we specialize in offering a comprehensive suite of
                services designed to simplify the complexities of starting and
                managing a business in the UAE.
              </motion.p>
              <svg
                className="scale-125 mt-5 sm:float-right"
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
                  fill="black"
                />
              </svg>
              <div className="mt-16 flex items-center gap-5">
                <p className="text-justify">
                  To be the leading catalyst for business success in Dubai,
                  empowering entrepreneurs and companies with seamless,
                  innovative solutions that drive growth, sustainability, and
                  excellence in the UAE&apos;s dynamic market.
                </p>
                <h2 className="text-sm [writing-mode:vertical-lr] font-semibold uppercase justify-center">
                  Vision
                </h2>
              </div>
              <div className="mt-16 flex items-center gap-5">
                <p className="text-justify">
                  At Start Hub, we focus on understanding your unique business
                  needs and providing personalized, efficient solutions. Our
                  client-centric approach ensures a smooth and successful
                  journey in Dubai&apos;s dynamic market.
                </p>
                <h2 className="text-sm [writing-mode:vertical-lr] font-semibold uppercase justify-center">
                  Approach
                </h2>
              </div>
            </div>
            <div
              className="sm:w-1/2 h-[80vh] mt-5 sm:mt-0 overflow-hidden"
              ref={scrollContainer}
              data-scroll-section>
              <img
                data-scroll
                data-scroll-speed="-0.3"
                src="about.jpg"
                alt="Profile_pic"
                className="w-full h-auto -mt-16"
              />
            </div>
          </div>
          <div className="mt-10 pb-20" ref={container}>
            <h1 className="text-center text-4xl font-bold">Our Values</h1>
            <div className="mt-16">
              <ul className="grid sm:grid-cols-2 grid-cols-1 px-[16vw] gap-20 pb-10">
                {process.map(({ title, img, desc }, index) => (
                  <li
                    key={index}
                    className="border border-black p-10 group relative rounded-3xl overflow-hidden">
                    <h2 className="flex items-center gap-10 text-lg group-hover:text-white transition-colors duration-500">
                      <span className="text-7xl font-bold text-primary">
                        0{index + 1}
                      </span>{" "}
                      {title}
                    </h2>
                    <p className="text-sm text-gray-400 mt-3">{desc}</p>
                    <span className="absolute top-0 left-0 w-full h-full max-h-[10px] group-hover:max-h-full transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] -z-10 bg-black"></span>
                    <Image
                      src={`/${img}`}
                      width={500}
                      height={200}
                      className="absolute group-hover:opacity-40 opacity-0 top-0 left-0 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] -z-10"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Overlay reference={container} />
        <Footer />
      </div>
    </Curve>
  );
};

export default AboutPage;
