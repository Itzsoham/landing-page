"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="overflow-x-clip bg-gradient-to-b from-white to-[#d2dcff] py-24"
    >
      <div className="custom-container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate your achievements with an app crafted to track your
            progress, inspire your journey, and keep you motivated every step of
            the way.
          </p>
          <motion.img
            src="/star.png"
            alt="Star Image"
            width={360}
            height={360}
            className="absolute left-[-350px] top-[-137px] hidden md:block"
            style={{ translateY }}
          />
          <motion.img
            src={"/spring.png"}
            alt="Spring Image"
            width={360}
            height={360}
            className="absolute right-[-331px] top-[-19px] hidden md:block"
            style={{ translateY }}
          />
        </div>
        <div className="mt-10 flex justify-center gap-2">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
