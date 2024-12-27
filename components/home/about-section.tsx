"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
    return (
        <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 animate-fade-in">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Noble Energy</h2>
                        <p className="text-lg text-muted-foreground">
                            Founded in 2024, SolarTech has been at the forefront of solar energy innovation,
                            providing sustainable solutions for homes and businesses across the globe.
                        </p>
                        <p className="text-lg text-muted-foreground">
                            Our mission is to accelerate the world's transition to sustainable energy through
                            advanced solar technology and exceptional service.
                        </p>
                        <div className="pt-4">
                            <Link href="/about">
                                <Button className="group">
                                    Learn More About Us
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-[400px] animate-fade-in">
                        <img
                            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                            alt="Solar installation team"
                            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl hover:scale-[1.02] transition-transform duration-300"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}