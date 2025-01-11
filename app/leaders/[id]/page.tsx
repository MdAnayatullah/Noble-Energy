"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const leaderDetails = {
    "john-anderson": {
        name: "John Anderson",
        role: "Founder & CEO",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
        bio: "John Anderson is a visionary leader with over 20 years of experience...",
        education: ["MBA, Harvard Business School", "BS in Engineering, MIT"],
        achievements: [
            "Led company growth from startup to industry leader",
            "Pioneer in solar technology innovation",
            "Awarded Renewable Energy Leader of the Year 2023"
        ],
        contact: {
            email: "john.anderson@solartech.com",
            linkedin: "https://linkedin.com/in/john-anderson"
        }
    }
    // Add other leaders
};

export default function LeaderPage({ params }: { params: { id: string } }) {
    const leader = leaderDetails[params.id as keyof typeof leaderDetails];

    return (
        <div className="bg-background min-h-screen py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/about">
                    <Button variant="ghost" className="mb-8">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Leadership
                    </Button>
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <img
                            src={leader.image}
                            alt={leader.name}
                            className="w-full rounded-lg shadow-lg"
                        />
                        <div className="mt-4 space-y-4">
                            <Button variant="outline" className="w-full">
                                <Mail className="mr-2 h-4 w-4" />
                                Contact
                            </Button>
                            <Button variant="outline" className="w-full">
                                <Linkedin className="mr-2 h-4 w-4" />
                                LinkedIn
                            </Button>
                        </div>
                    </div>

                    <div className="md:col-span-2 space-y-6">
                        <div>
                            <h1 className="text-4xl font-bold">{leader.name}</h1>
                            <p className="text-xl text-muted-foreground mt-2">{leader.role}</p>
                        </div>

                        <Card>
                            <CardContent className="pt-6">
                                <h2 className="text-2xl font-semibold mb-4">Biography</h2>
                                <p className="text-muted-foreground">{leader.bio}</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="pt-6">
                                <h2 className="text-2xl font-semibold mb-4">Education</h2>
                                <ul className="list-disc list-inside space-y-2">
                                    {leader.education.map((edu, index) => (
                                        <li key={index} className="text-muted-foreground">{edu}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="pt-6">
                                <h2 className="text-2xl font-semibold mb-4">Key Achievements</h2>
                                <ul className="list-disc list-inside space-y-2">
                                    {leader.achievements.map((achievement, index) => (
                                        <li key={index} className="text-muted-foreground">{achievement}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}