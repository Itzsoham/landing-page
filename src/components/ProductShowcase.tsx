import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="overflow-x-clip bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24">
      <div className="custom-container">
        <div className="mx-auto max-w-[540px]">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="mt-6 bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-center text-3xl font-bold tracking-tight text-transparent md:text-[54px] md:leading-[60px]">
            A more effective way to track progess
          </h2>
          <p className="mt-6 text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E]">
            Effortlessly turn your ideas into a fully functional, responsive,
            SaSS website in just few minutes with this amazing template.
          </p>
        </div>
        <div className="relative h-auto w-full">
          <Image
            src="/product-image.png"
            alt="Product Image"
            className="mt-10 h-auto w-full"
            layout="responsive"
            width={1000}
            height={1000}
          />
          <Image
            src="/pyramid.png"
            alt="Pyramid Image"
            layout="intrinsic"
            width={262}
            height={262}
            className="absolute -right-36 -top-32 hidden md:block"
          />
          <Image
            src="/tube.png"
            alt="Tube Image"
            layout="intrinsic"
            width={262}
            height={262}
            className="absolute -left-36 bottom-24 hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};
