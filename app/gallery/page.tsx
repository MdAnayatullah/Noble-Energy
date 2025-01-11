"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/lib/hooks/use-scroll-animation";

const galleryItems = [
    {
        id: 1,
        title: "Industry Leadership Award 2024",
        category: "Awards",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
        date: "2024-03-15"
    },
    // Add more items
];

export default function GalleryPage() {
    return (
        <div className="bg-background min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold">Achievement Gallery</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Celebrating our milestones and successes
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryItems.map((item, index) => {
                        const animation = useScrollAnimation({
                            type: "fade",
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
                                    className="w-full h-64 object-cover rounded-t-lg"
                                />
                                <CardContent className="p-4">
                                    <Badge className="mb-2">{item.category}</Badge>
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {new Date(item.date).toLocaleDateString()}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}