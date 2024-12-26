"use client";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const carouselItems = [
  {
    title: "Residential Solar Solutions",
    description: "Power your home with clean, renewable energy",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3",
  },
  {
    title: "Commercial Solar Projects",
    description: "Sustainable energy solutions for businesses",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3",
  },
  {
    title: "Solar Farm Installations",
    description: "Large-scale solar power generation",
    image: "https://images.unsplash.com/photo-1595437193398-f24279553f4f?ixlib=rb-4.0.3",
  },
  {
    title: "Smart Energy Management",
    description: "Optimize your energy consumption",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3",
  },
  {
    title: "Innovative Solar Technology",
    description: "Leading the future of renewable energy",
    image: "https://images.unsplash.com/photo-1595437193398-f24279553f4f?ixlib=rb-4.0.3",
  },
];

export default function HeroCarousel() {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="relative">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[600px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative h-full flex items-center justify-center text-center px-4">
                  <div className="max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                      {item.title}
                    </h2>
                    <p className="text-xl text-gray-200">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
}