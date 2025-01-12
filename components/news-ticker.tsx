// "use client";

// import { useEffect, useState } from "react";

// const news = [
//     "SolarTech achieves 1GW installation milestone",
//     "New solar technology breakthrough increases efficiency by 25%",
//     "SolarTech expands operations to 5 new cities",
//     "Partnership announcement: Leading the renewable energy revolution",
//     "SolarTech wins Sustainable Energy Award 2024"
// ];

// export default function NewsTicker() {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentIndex((prev) => (prev + 1) % news.length);
//         }, 5000);

//         return () => clearInterval(timer);
//     }, []);

//     return (
//         <div className="bg-primary/10 py-2 overflow-hidden">
//             <div className="max-w-7xl mx-auto px-4">
//                 <div className="flex items-center">
//                     <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-medium mr-4">
//                         Latest News
//                     </span>
//                     <p className="text-sm animate-slide-left">
//                         {news[currentIndex]}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const news = [
    {
        id: 1,
        title: "Noble Enegy achieves 100MW installation milestone",
        link: "/news/1gw-milestone"
    },
    {
        id: 2,
        title: "New solar technology breakthrough increases efficiency by 25%",
        link: "/news/efficiency-breakthrough"
    },
    {
        id: 3,
        title: "Noble Enegy expands operations to 5 new cities",
        link: "/news/expansion"
    },
    {
        id: 4,
        title: "Partnership announcement: Leading the renewable energy revolution",
        link: "/news/partnership"
    },
    {
        id: 5,
        title: "Noble Energy wins Sustainable Energy Award 2024",
        link: "/news/award"
    }
];

export default function NewsTicker() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % news.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-primary/10 py-2 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center">
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-medium mr-4 shrink-0">
                        Latest News
                    </span>
                    <div className="overflow-hidden relative flex-1">
                        <div className="whitespace-nowrap animate-marquee">
                            {news.map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.link}
                                    className="inline-block mx-8 text-sm hover:text-primary transition-colors"
                                >
                                    {item.title}
                                </Link>
                            ))}
                            {/* Duplicate items for seamless loop */}
                            {news.map((item) => (
                                <Link
                                    key={`${item.id}-duplicate`}
                                    href={item.link}
                                    className="inline-block mx-8 text-sm hover:text-primary transition-colors"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}