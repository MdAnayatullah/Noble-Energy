"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/lib/hooks/use-scroll-animation";

const educationalContent = [
    {
        id: 1,
        title: "How Solar Panels Work",
        category: "Technology",
        duration: "5:30",
        thumbnail: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
        videoUrl: "https://example.com/video1.mp4"
    },
    // Add more content
];

export default function EducationPage() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    return (
        <div className="bg-background min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold">Educational Resources</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Learn about solar energy and our solutions
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {educationalContent.map((content, index) => {
                        const animation = useScrollAnimation({
                            type: "fade",
                            delay: index * 100
                        });

                        return (
                            <Card
                                key={content.id}
                                ref={animation.ref}
                                className={`${animation.className} group cursor-pointer`}
                                onClick={() => setSelectedVideo(content.videoUrl)}
                            >
                                <div className="relative">
                                    <img
                                        src={content.thumbnail}
                                        alt={content.title}
                                        className="w-full h-48 object-cover rounded-t-lg"
                                    />
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Play className="h-12 w-12 text-white" />
                                    </div>
                                </div>
                                <CardContent className="p-4">
                                    <Badge className="mb-2">{content.category}</Badge>
                                    <h3 className="text-lg font-semibold">{content.title}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Duration: {content.duration}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>

            {/* Video Modal */}
            {selectedVideo && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                    onClick={() => setSelectedVideo(null)}
                >
                    <div className="w-full max-w-4xl aspect-video">
                        <video
                            src={selectedVideo}
                            controls
                            autoPlay
                            className="w-full h-full"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}