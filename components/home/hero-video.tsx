// "use client";

// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";

// export default function HeroVideo() {
//     return (
//         <div className="video-background">
//             <video
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="video-background"
//             >
//                 <source
//                     //src="https://player.vimeo.com/external/373839593.sd.mp4?s=8c14fe0b52e12e1078e060970a2d7c535f78d652&profile_id=164&oauth2_token_id=57447761"
//                     src="https://youtu.be/TzfnlPxCZv0?si=aYUlTzff6na0XY0q"
//                     type="video/mp4"
//                 />
//             </video>
//             <div className="video-overlay" />
//             <div className="relative h-full flex items-center justify-center">
//                 <div className="text-center max-w-3xl px-4">
//                     <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
//                         Power Your Future with Solar Energy
//                     </h1>
//                     <p className="text-xl text-gray-200 mb-8 animate-slide-up">
//                         Transform your energy consumption with our cutting-edge solar solutions.
//                         Save money while contributing to a sustainable future.
//                     </p>
//                     <div className="flex justify-center gap-4 animate-scale-in">
//                         <Link href="/contact">
//                             <Button size="lg" className="bg-primary/90 hover:bg-primary text-white">
//                                 Get Started
//                                 <ArrowRight className="ml-2 h-4 w-4" />
//                             </Button>
//                         </Link>
//                         <Link href="/products">
//                             <Button
//                                 variant="outline"
//                                 size="lg"
//                                 className="text-white border-white hover:bg-white/10"
//                             >
//                                 View Products
//                             </Button>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



//for youtube video emebedded

"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroVideo() {
    return (
        <div className="relative w-screen h-screen overflow-hidden">
            {/* YouTube Video Background */}
            <iframe
                className="absolute top-0 left-0 w-full h-full min-w-fit-screen"
                src="https://www.youtube.com/embed/TzfnlPxCZv0?autoplay=1&loop=1&mute=1&playlist=TzfnlPxCZv0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>

            {/* Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

            {/* Content Section */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                    Power Your Future with Solar Energy
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8 animate-slide-up max-w-xl">
                    Transform your energy consumption with our cutting-edge solar solutions.
                    Save money while contributing to a sustainable future.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 animate-scale-in">
                    {/* <Link href="/contact">
                        <Button
                            size="lg"
                            className="bg-primary/90 hover:bg-primary text-white w-full sm:w-auto"
                        >
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                    <Link href="/products">
                        <Button
                            variant="outline"
                            size="lg"
                            className="text-white border-white hover:bg-white/10 w-full sm:w-auto"
                        >
                            View Products
                        </Button>
                    </Link> */}
                </div>
            </div>
        </div>
    );
}


//loccally stored video

// "use client";

// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";

// export default function HeroVideo() {
//     return (
//         <div className="relative w-screen h-screen overflow-hidden">
//             {/* Video Background */}
//             <video
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="absolute top-0 left-0 w-full h-full object-cover"
//             >
//                 <source src="/components/videos/solarvideo.webm" type="video/webm" />
//                 {/* Fallback text for unsupported browsers */}
//                 Your browser does not support the video tag.
//             </video>

//             {/* Dark Overlay */}
//             <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

//             {/* Content Section */}
//             <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
//                 <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
//                     Power Your Future with Solar Energy
//                 </h1>
//                 <p className="text-lg md:text-xl text-gray-200 mb-8 animate-slide-up max-w-xl">
//                     Transform your energy consumption with our cutting-edge solar solutions.
//                     Save money while contributing to a sustainable future.
//                 </p>
//                 <div className="flex flex-col sm:flex-row justify-center gap-4 animate-scale-in">
//                     {/* <Link href="/contact">
//                         <Button
//                             size="lg"
//                             className="bg-primary/90 hover:bg-primary text-white w-full sm:w-auto"
//                         >
//                             Get Started
//                             <ArrowRight className="ml-2 h-4 w-4" />
//                         </Button>
//                     </Link>
//                     <Link href="/products">
//                         <Button
//                             variant="outline"
//                             size="lg"
//                             className="text-white border-white hover:bg-white/10 w-full sm:w-auto"
//                         >
//                             View Products
//                         </Button>
//                     </Link> */}
//                 </div>
//             </div>
//         </div>
//     );
// }

