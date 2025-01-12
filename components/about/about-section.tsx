"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

export default function AboutSection() {
    const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="py-24 bg-background hover:bg-gradient-to-t from-red-100 to-blue-100 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4">About Noble Energy</h1>
                    <p className="text-xl text-muted-foreground">
                        Leading the way in sustainable energy solutions
                    </p>
                </div>

                <div ref={ref1} className={cn(
                    "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24",
                    "opacity-0 transition-all duration-1000",
                    inView1 && "opacity-100 translate-y-0"
                )}>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Our Mission</h2>
                        <p className="text-lg text-muted-foreground">
                            Founded in 2024, Noble Energy has been at the forefront of solar energy innovation.
                            Our mission is to accelerate the world's transition to sustainable energy through
                            advanced solar technology and exceptional service.
                        </p>
                        <p className="text-lg text-muted-foreground">
                            We believe in a future where clean, renewable energy is accessible to everyone.
                            Through continuous innovation and dedication to excellence, we're making this
                            vision a reality.
                        </p>
                    </div>
                    <div className="relative h-[500px] rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
                        <img
                            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                            alt="Solar installation team"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div ref={ref2} className={cn(
                    "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                    "opacity-0 transition-all duration-1000 delay-300",
                    inView2 && "opacity-100 translate-y-0"
                )}>
                    <div className="order-2 lg:order-1 relative h-[500px] rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
                        <img
                            src="https://images.unsplash.com/photo-1566093097221-ac2335b09e70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                            alt="Solar panels installation"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                    <div className="order-1 lg:order-2 space-y-6">
                        <h2 className="text-3xl font-bold">Our Values</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                                <p className="text-muted-foreground">
                                    We continuously push the boundaries of solar technology to deliver
                                    more efficient and effective solutions.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                                <p className="text-muted-foreground">
                                    Every decision we make is guided by our commitment to environmental
                                    stewardship and sustainable practices.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                                <p className="text-muted-foreground">
                                    We maintain the highest standards in every aspect of our work,
                                    from customer service to installation quality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}