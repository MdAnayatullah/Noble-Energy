import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroCarousel from "@/components/home/hero-carousel";
import ProductsOverview from "@/components/home/products-overview";
import Testimonials from "@/components/home/testimonials";
import WhyChooseUs from "@/components/home/why-choose-us";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      {/* <ProductsOverview /> */}
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}