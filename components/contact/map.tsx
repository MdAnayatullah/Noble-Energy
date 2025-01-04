"use client";

import { useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";

declare global {
    interface Window {
        google: any;
    }
}

export default function ContactMap() {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Load Google Maps script
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
        script.async = true;
        script.defer = true;
        script.onload = initMap;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    const initMap = () => {
        if (mapRef.current) {
            // Bhopal coordinates
            const bhopal = { lat: 23.2599, lng: 77.4126 };

            const map = new window.google.maps.Map(mapRef.current, {
                center: bhopal,
                zoom: 14,
                styles: [
                    {
                        featureType: "all",
                        elementType: "geometry",
                        stylers: [{ color: "#242f3e" }]
                    },
                    {
                        featureType: "all",
                        elementType: "labels.text.stroke",
                        stylers: [{ color: "#242f3e" }]
                    },
                    {
                        featureType: "all",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#746855" }]
                    }
                ]
            });

            // Add marker
            new window.google.maps.Marker({
                position: bhopal,
                map,
                title: "Noble Energys"
            });
        }
    };

    return (
        <Card className="mt-8">
            <div ref={mapRef} className="w-full h-[400px] rounded-lg" />
        </Card>
    );
}