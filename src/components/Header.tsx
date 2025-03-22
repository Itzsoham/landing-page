import { ArrowRight, MenuIcon } from "lucide-react";
import Image from "next/image";

export const Navbar = () => {
  return (
    <header className="sticky top-0">
      <div className="flex items-center justify-center gap-3 bg-black py-3 text-sm text-white">
        <p className="hidden text-white/60 md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex items-center gap-1">
          <p>Get started for free</p>
          <ArrowRight className="inline-flex size-4 items-center justify-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container mx-auto px-5">
          <div className="flex items-center justify-between">
            <Image src="/logosaas.png" alt="Sass Logo" height={40} width={40} />
            <MenuIcon className="size-5 md:hidden" />

            <nav className="hidden items-center gap-6 text-black/60 md:flex">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className=" inline-flex items-center rounded-lg bg-black px-4 py-2 font-medium tracking-tight text-white">
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
