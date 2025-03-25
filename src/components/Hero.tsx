"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);

  // Ensuring the correct target for parallax
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"], // Adjust this if needed
  });

  // Apply the parallax effect
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="custom-gradient overflow-x-clip pb-20 pt-8 md:pb-10 md:pt-5"
    >
      <div className="custom-container">
        <div className="md:flex md:items-center md:justify-between">
          <div className="w-[360px] md:w-[420px] lg:w-[578px]">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="section-title mt-6 text-left md:text-7xl">
              Pathway to productivity
            </h1>
            <p className="mt-6 text-xl tracking-tight text-[#010D3E]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              magnam similique vel odio deserunt laboriosam ipsa libero
              accusamus? Perferendis qui assumenda itaque perspiciatis.
            </p>
            <div className="mt-[30px] flex items-center gap-1">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowRight className="size-5" />
              </button>
            </div>
          </div>

          {/* 🔥 Updated Cylinder Image Code */}
          <div className="relative mt-20 md:mt-0 md:h-[648px] md:flex-1">
            <motion.img
              src="/cog.png"
              alt="Cog Image"
              height={500}
              width={500}
              className="md:absolute md:-left-6 md:h-full md:w-auto md:max-w-none lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />

            {/* 🚀 Fixed Parallax Effect */}
            <motion.img
              src="/cylinder.png"
              alt="Cylinder Image"
              width={220}
              height={220}
              className="-left-32 -top-8 hidden md:absolute md:block"
              style={{ y: translateY }} // Use `y` instead of `translateY`
            />

            <motion.img
              src="/noodle.png"
              alt="Noodle Image"
              height={220}
              width={220}
              className="absolute left-[448px] top-[524px] hidden rotate-[30deg] lg:block"
              style={{ y: translateY, rotate: 30 }} // Use `y` instead of `translateY`
            />
          </div>
        </div>
      </div>
    </section>
  );
};
