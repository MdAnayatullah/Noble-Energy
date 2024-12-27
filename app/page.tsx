import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroCarousel from "@/components/home/hero-carousel";
import AboutSection from "@/components/home/about-section";
import LeadershipSection from "@/components/home/leadership-section";
import ProductsOverview from "@/components/home/products-overview";
import Testimonials from "@/components/home/testimonials";
import WhyChooseUs from "@/components/home/why-choose-us";
import FeaturedBlogs from "@/components/home/featured-blogs";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <AboutSection />
      <LeadershipSection />
      {/* <ProductsOverview /> */}
      <WhyChooseUs />
      <Testimonials />
      <FeaturedBlogs />
    </div>
  );
}