"use client"

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
// import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from "@/components/logo/logo1.png";
import { useRandomGradient } from "@/lib/hooks/use-random-gradient";
import { useEffect, useRef } from 'react';


// // Bhopal Substation locations
// const substations = [
//   { name: "Govindpura 220KV", lat: 23.2599, lng: 77.4126 },
//   { name: "Mandideep 400KV", lat: 23.1087, lng: 77.5022 },
//   { name: "Bhopal 400KV", lat: 23.2467, lng: 77.4122 },
//   { name: "PGCIL Bhopal", lat: 23.2833, lng: 77.3524 },
//   { name: "Bairagarh 132KV", lat: 23.2856, lng: 77.3573 },
//   { name: "Shahpura 132KV", lat: 23.2033, lng: 77.4294 },
//   { name: "Ayodhya Nagar 132KV", lat: 23.2724, lng: 77.4274 },
//   { name: "Karond 132KV", lat: 23.3014, lng: 77.4324 },
//   { name: "BHEL 220KV", lat: 23.2125, lng: 77.4037 },
//   { name: "Misrod 132KV", lat: 23.1789, lng: 77.4851 }
// ];


const Footer = () => {
  const { gradient, changeGradient } = useRandomGradient();
  const mapRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   // Load Google Maps script
  //   const script = document.createElement('script');
  //   script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
  //   script.async = true;
  //   script.defer = true;
  //   script.onload = initMap;
  //   document.head.appendChild(script);

  //   return () => {
  //     document.head.removeChild(script);
  //   };
  // }, []);

  // const initMap = () => {
  //   if (mapRef.current) {
  //     // Center on Bhopal
  //     const bhopal = { lat: 23.2599, lng: 77.4126 };

  //     const map = new window.google.maps.Map(mapRef.current, {
  //       center: bhopal,
  //       zoom: 12,
  //       styles: [
  //         {
  //           featureType: "all",
  //           elementType: "geometry",
  //           stylers: [{ color: "#242f3e" }]
  //         },
  //         {
  //           featureType: "all",
  //           elementType: "labels.text.stroke",
  //           stylers: [{ color: "#242f3e" }]
  //         },
  //         {
  //           featureType: "all",
  //           elementType: "labels.text.fill",
  //           stylers: [{ color: "#746855" }]
  //         }
  //       ]
  //     });

  // Add markers for each substation
  //     substations.forEach(station => {
  //       const marker = new window.google.maps.Marker({
  //         position: { lat: station.lat, lng: station.lng },
  //         map,
  //         title: station.name,
  //         icon: {
  //           path: window.google.maps.SymbolPath.CIRCLE,
  //           scale: 8,
  //           fillColor: "#22c55e",
  //           fillOpacity: 1,
  //           strokeColor: "#ffffff",
  //           strokeWeight: 2,
  //         }
  //       });

  //       // Add info window
  //       const infowindow = new window.google.maps.InfoWindow({
  //         content: `<div style="color: black; padding: 5px;"><strong>${station.name}</strong></div>`
  //       });

  //       marker.addListener("click", () => {
  //         infowindow.open(map, marker);
  //       });
  //     });
  //   }
  // };

  return (
    // <footer className="bg-background border-t">
    <footer
    // className={`bg-gradient-to-r ${gradient} transition-colors duration-500`}
    // onMouseEnter={changeGradient}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-muted-foreground mb-4">
              Leading provider of solar energy solutions, committed to a sustainable future through renewable energy.
            </p>
            <div className="flex justify-center md:justify-start">
              <Image src={logo} alt="Noble Energy Logo" width={300} height={250} />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-green-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-green-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-green-600">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-green-600">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-muted-foreground hover:text-green-600">
                  Media
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-green-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-green-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Bhopal</li>
              <li>Madhya Pradesh</li>
              <li>Phone: (+91)7554527050</li>
              <li>Email: info@nobleenergy.co</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <FontAwesomeIcon icon={faFacebook} style={{ color: '#4267B2', fontSize: '24px' }} className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <FontAwesomeIcon icon={faTwitter} style={{ color: '#1DA1F2', fontSize: '24px' }} className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <FontAwesomeIcon icon={faInstagram} style={{ color: '#E1306C', fontSize: '24px' }} className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <FontAwesomeIcon icon={faLinkedinIn} style={{ color: '#0077B5', fontSize: '24px' }} className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>


        <div className="border-t border-white/10 pt-8 text-center text-white/80">
          <p>&copy; {new Date().getFullYear()} Noble Energy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
