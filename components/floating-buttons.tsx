"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArrowUp } from "lucide-react";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function FloatingButtons() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {/* Scroll to Top Button */}
            <Button
                variant="secondary"
                size="icon"
                className={cn(
                    "fixed left-6 bottom-6 z-50 rounded-full bg-gray-300 shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-green-300",
                    showScrollTop ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                )}
                onClick={scrollToTop}
            >
                <ArrowUp className="h-5 w-5" />
            </Button>

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/1234567890" // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="fixed right-6 bottom-6 z-50"
            >
                <Button
                    size="icon"
                    className="h-12 w-12 rounded-full bg-[#e6ece8] hover:bg-[#ceffdb] shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                    <FontAwesomeIcon icon={faWhatsapp} style={{ color: '#25D366', fontSize: '24px' }} className="h-6 w-6 text-white" />
                </Button>
            </a>
        </>
    );
}