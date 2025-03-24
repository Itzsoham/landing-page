import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Pricing } from "@/components/Pricing";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
