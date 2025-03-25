"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="overflow-x-clip bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24"
    >
      <div className="custom-container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-6">
            A more effective way to track progess
          </h2>
          <p className="section-description mt-6">
            Effortlessly turn your ideas into a fully functional, responsive,
            SaSS website in just few minutes with this amazing template.
          </p>
        </div>
        z
        <div className="relative h-auto w-full">
          <Image
            src="/product-image.png"
            alt="Product Image"
            className="mt-10 h-auto w-full"
            layout="responsive"
            width={1000}
            height={1000}
          />
          <motion.img
            src="/pyramid.png"
            alt="Pyramid Image"
            width={262}
            height={262}
            className="absolute -right-36 -top-32 hidden md:block"
            style={{ translateY }}
          />
          <motion.img
            src="/tube.png"
            alt="Tube Image"
            width={262}
            height={262}
            className="absolute -left-36 bottom-24 hidden md:block"
            style={{ translateY }}
          />
        </div>
      </div>
    </section>
  );
};
