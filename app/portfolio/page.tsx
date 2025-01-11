"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/lib/hooks/use-scroll-animation";

const portfolioItems = [
    {
        id: 1,
        title: "City Solar Farm",
        status: "In Progress",
        completion: "85%",
        location: "Bhopal, MP",
        capacity: "50MW",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276"
    },
    // Add more items
];

export default function PortfolioPage() {
    return (
        <div className="bg-background min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold">Current Portfolio</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Our ongoing and recently completed projects
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioItems.map((item, index) => {
                        const animation = useScrollAnimation({
                            type: "slide",
                            direction: "up",
                            delay: index * 100
                        });

                        return (
                            <Card
                                key={item.id}
                                ref={animation.ref}
                                className={animation.className}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />
                                <CardContent className="p-4">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-lg font-semibold">{item.title}</h3>
                                        <Badge
                                            variant={item.status === "Completed" ? "default" : "secondary"}
                                        >
                                            {item.status}
                                        </Badge>
                                    </div>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <p>Location: {item.location}</p>
                                        <p>Capacity: {item.capacity}</p>
                                        <p>Completion: {item.completion}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}