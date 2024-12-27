"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X } from "lucide-react";
// import NavbarSearch from "./search";
import { useTheme } from "next-themes";
import logo from "@/components/logo/logo1.png"; // Import the logo
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    // { name: "Products", href: "/products" },
    // { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    // { name: "Careers", href: "/careers" },
    // { name: "Media", href: "/media" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled
        ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
        : "bg-background border-b"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center  space-x-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
              <Image src={logo} alt="Noble Energy Logo" width={300} height={250} /> {/* Use Image component */}
              <span className="text-2xl font-bold text-primary ml-2"></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 ">
            {/* <NavbarSearch /> */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors relative group hover:text-green-700 hover:bg-gray-200"
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:bg-accent transition-colors"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-accent transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {/* {
        isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3"> */}
      {
        <div className={cn(
          "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-screen" : "max-h-0"
        )}>
          <div className="px-4 pt-2 pb-3 space-y-1 bg-background/80 backdrop-blur-md">
            <div className="py-2">
              {/* <NavbarSearch /> */}
            </div>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        // )

      }

    </nav >
  );
};

export default Navbar;
