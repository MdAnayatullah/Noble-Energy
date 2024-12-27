"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const featuredPosts = [
    {
        id: 1,
        title: "The Future of Solar Energy: 2024 and Beyond",
        excerpt: "Explore the latest trends and innovations in solar technology...",
        category: "Technology",
        author: "Sarah Johnson",
        date: "2024-03-15",
        image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "Solar Installation Guide for Homeowners",
        excerpt: "Everything you need to know before installing solar panels...",
        category: "Guide",
        author: "Michael Chen",
        date: "2024-03-10",
        image: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Maximizing Solar Panel Efficiency",
        excerpt: "Tips and tricks to get the most out of your solar installation...",
        category: "Tips",
        author: "Emily Thompson",
        date: "2024-03-08",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
];

export default function FeaturedBlogs() {
    return (
        <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h2 className="text-3xl font-bold">Latest Insights</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Stay updated with our latest articles and news
                        </p>
                    </div>
                    <Link href="/blog">
                        <Button variant="outline" className="group">
                            View All Posts
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredPosts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.id}`}>
                            <Card className="group h-full hover:shadow-lg transition-all duration-300 animate-fade-in">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <CardHeader>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Badge>{post.category}</Badge>
                                        <span className="text-sm text-muted-foreground">
                                            {new Date(post.date).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                        {post.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                                    <p className="text-sm text-muted-foreground">By {post.author}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}