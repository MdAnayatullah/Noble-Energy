"use client";

import { Card, CardContent } from "@/components/ui/card";
// import { Linkedin } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";
import Image from "next/image";
import { useScrollAnimation } from "@/lib/hooks/use-scroll-animation";
import arqamImage from "@/components/images/arqam.jpeg";
import hasanImage from "@/components/images/shaheedul_hasan.jpg";
import anayat from "@/components/images/Anayat.jpg";
import clsx from "clsx";
const cn = clsx;

const leaders = [
    {
        name: "Shaheedul Hasan",
        role: "CMD",
        //education: "Bachelor of Electronic Engineering, Aligarh Muslim University",
        image: hasanImage, // Local image imported
        linkedin: "https://www.linkedin.com/in/shaheedul-hasan-14ab1132/",
        since: "2024",
        description:
            "With over 20 years in renewable energy, Shaheedul Hasan founded Noble Energy with a vision to revolutionize the solar industry. His leadership has driven our growth from a small startup to an industry leader.",
        quote: "Innovation and sustainability are not just buzzwords - they're the foundation of our future.",
    },
    {
        name: "Syed Mohammad Abrar",
        role: "CEO",
        //education: "MSc in Renewable Energy, Stanford",
        image:
            "https://images.unsplash.com/",
        linkedin: "https://linkedin.com",
        since: "2024",
        description:
            "Michael's strategic vision has helped expand our operations across multiple continents while maintaining our commitment to excellence.",
        quote: "Success in sustainable energy comes from balancing innovation with reliability.",
    },
    {
        name: "Arqam Ansari",
        role: "CTO",
        //education: "Ph.D. in Solar Engineering, MIT",
        image: arqamImage, // Local image imported
        linkedin: "https://www.linkedin.com/in/arqam-kaolin/",
        since: "2024",
        description:
            "Arqam's groundbreaking research in solar efficiency has been instrumental in developing our cutting-edge technology solutions.",
        quote: "Technology is the bridge between possibility and reality in renewable energy.",
    },

    // {
    //     name: "Md Anayatullah Ansari",
    //     role: "IT Head",
    //     //education: "B. Tech in CSE, Aligarh Muslim University",
    //     image: anayat, // Local image imported
    //     linkedin: "https://linkedin.com",
    //     since: "2024",
    //     description: "Anayat is a seasoned IT professional with a passion for sustainable technology solutions.",
    //     quote: "Sustainable business is good business - for our planet and our future."
    // },
    // {
    //     name: "David Kim",
    //     role: "Director of Operations",
    //     education: "MSc in Engineering, Berkeley",
    //     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=400&h=400&q=80",
    //     linkedin: "https://linkedin.com",
    //     since: "2024",
    //     description: "David's operational excellence has streamlined our installation processes and improved customer satisfaction across all regions.",
    //     quote: "Efficiency in operations translates directly to customer satisfaction."
    // },
    // {
    //     name: "Lisa Martinez",
    //     role: "Director of Innovation",
    //     education: "Ph.D. in Physics, CalTech",
    //     image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=400&h=400&q=80",
    //     linkedin: "https://linkedin.com",
    //     since: "2024",
    //     description: "Lisa leads our R&D initiatives, focusing on next-generation solar technologies and smart energy solutions.",
    //     quote: "The future of energy is not just clean - it's intelligent and adaptive."
    // }
];

export default function LeadershipSection() {
    const headerAnimation = useScrollAnimation({ type: "slide", direction: "up", delay: 2000 });
    return (
        <section className="py-16 bg-muted hover:bg-gradient-to-t from-pink-100 to-green-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={headerAnimation.ref} className={headerAnimation.className}>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold">Our Leadership</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Meet the team driving innovation in solar energy
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {leaders.map((leader, index) => {
                        const cardAnimation = useScrollAnimation({
                            type: "slide",
                            direction: index % 2 === 0 ? "left" : "right",
                            delay: 2000 + (index * 100)
                        });

                        return (
                            <Card
                                key={leader.name}
                                ref={cardAnimation.ref}
                                className={cn(
                                    cardAnimation.className,
                                    "group relative hover:shadow-lg transition-all duration-300 overflow-hidden hover:translate-y-2 hover:scale-105"
                                )}
                            //className="group relative hover:shadow-lg transition-all duration-300 animate-fade-in overflow-hidden"
                            >
                                <CardContent className="p-0">
                                    <div className="relative w-full h-64">
                                        {typeof leader.image === "string" ? (
                                            <img
                                                src={leader.image}
                                                alt={leader.name}
                                                className="object-cover w-full h-full"
                                            />
                                        ) : (
                                            <Image
                                                src={leader.image}
                                                alt={leader.name}
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded-md"
                                                priority // Ensures the local image loads faster
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-center text-white">
                                            <p className="text-sm mb-4">With us since {leader.since}</p>
                                            <p className="mb-4">{leader.description}</p>
                                            <blockquote className="italic text-sm border-l-2 pl-4 mt-auto">
                                                "{leader.quote}"
                                            </blockquote>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold">{leader.name}</h3>
                                        <p className="text-primary mt-1">{leader.role}</p>
                                        <p className="text-sm text-muted-foreground mt-1">{leader.education}</p>
                                        <Link
                                            href={leader.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute bottom-3 right-4 p-2 text-muted-foreground hover:text-primary transition-colors hover:rounded-full bg-gray-50 rounded-full hover:bg-gray-200 hover:translate-y-1"
                                        >
                                            <FontAwesomeIcon icon={faLinkedinIn} style={{ color: '#0077B5', fontSize: '24px' }} className="h-5 w-5" />
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
