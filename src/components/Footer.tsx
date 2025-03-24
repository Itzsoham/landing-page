import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black  py-10 text-center text-sm text-[#bcbcbc]">
      <div className="custom-container">
        <div className="relative inline-flex before:absolute before:bottom-0 before:top-2 before:size-full before:bg-[linear-gradient(to_right,#F87BFF,#FB93CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:blur before:content-['']">
          <Image
            src="/logosaas.png"
            className="relative"
            alt="SaaS Logo"
            width={40}
            height={40}
          />
        </div>
        <nav className="mt-6 flex flex-col gap-6 md:flex-row md:justify-center">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="mt-6 flex justify-center gap-6">
          <Twitter />
          <Instagram />
          <Linkedin />
          <Facebook />
          <Youtube />
        </div>
        <p className="mt-6">
          &copy; {new Date().getFullYear()} Your company, Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
