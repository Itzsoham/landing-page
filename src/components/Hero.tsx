import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="custom-gradient overflow-x-clip pb-20 pt-8 md:pb-10 md:pt-5">
      <div className="custom-container">
        <div className="md:flex md:items-center md:justify-between">
          <div className="w-[478px] lg:w-[578px]">
            <div className="inline-flex rounded-lg border border-[#222]/10 px-3 py-1 text-sm tracking-tight">
              Version 2.0 is here
            </div>
            <h1 className="mt-6 bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-7xl">
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
          <div className="relative mt-20 md:mt-0 md:h-[648px] md:flex-1">
            <Image
              className="md:absolute md:-left-6 md:h-full md:w-auto md:max-w-none lg:left-5"
              src="/cog.png"
              alt="Cog Image"
              height={500}
              width={500}
            />
            <Image
              className="-left-32 -top-8 hidden md:absolute md:block"
              src="/cylinder.png"
              alt="Cylinder Image"
              width={220}
              height={220}
            />
            <Image
              src="/noodle.png"
              alt="Noodle Image"
              height={220}
              width={220}
              className="absolute left-[448px] top-[524px] hidden rotate-[30deg] lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
