// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image"; // Import Image component
// import { Button } from "@/components/ui/button";
// import { Sun, Moon, Menu, X } from "lucide-react";
// // import NavbarSearch from "./search";
// import { useTheme } from "next-themes";
// import logo from "@/components/logo/logo1.png"; // Import the logo
// import { cn } from "@/lib/utils";
// import { useRandomGradient } from "@/lib/hooks/use-random-gradient";
// import NewsTicker from "../news-ticker";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger
// } from "@/components/ui/dropdown-menu";



// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const { theme, setTheme } = useTheme();
//   const { gradient, changeGradient } = useRandomGradient();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navigation = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/about" },
//     {
//       name: "Company",
//       items: [
//         { name: "Vision", href: "/company/vision" },
//         { name: "Mission", href: "/company/mission" },
//         { name: "Values", href: "/company/values" },
//       ]
//     },
//     // { name: "Products", href: "/products" },
//     // { name: "Projects", href: "/projects" },
//     { name: "Portfolio", href: "/portfolio" },
//     { name: "Future Goals", href: "/future-goals" },

//     { name: "Careers", href: "/careers" },
//     { name: "Media", href: "/media" },
//     { name: "Gallery", href: "/gallery" },
//     { name: "Education", href: "/education" },
//     { name: "Blog", href: "/blog" },
//     { name: "Contact Us", href: "/contact" },
//   ];

//   return (
//     <>
//       <NewsTicker />
//       <nav className={cn(
//         "fixed top-0 w-full z-50 transition-all duration-300",
//         scrolled
//           // ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
//           // : "bg-background border-b"
//           ? `bg-gradient-to-r ${gradient} backdrop-blur-md shadow-sm`
//           : `bg-gradient-to-r ${gradient}`,
//       )}
//         onMouseEnter={changeGradient}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex items-center">
//               <Link href="/" className="flex items-center  space-x-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
//                 <Image src={logo} alt="Noble Energy Logo" width={300} height={250} /> {/* Use Image component */}
//                 <span className="text-2xl font-bold text-primary ml-2"></span>
//               </Link>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-4 ">
//               {/* <NavbarSearch /> */}
//               {navigation.map((item) =>
//                 item.items ? (
//                   <DropdownMenu key={item.name}>
//                     <DropdownMenuTrigger asChild>
//                       <Button variant="ghost">
//                         {item.name}
//                       </Button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent>
//                       {item.items.map((subItem) => (
//                         <DropdownMenuItem key={subItem.name}>
//                           <Link href={subItem.href}>
//                             {subItem.name}
//                           </Link>
//                         </DropdownMenuItem>
//                       ))}
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 ) : (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     className="text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors relative group hover:text-green-700 hover:bg-gray-200"
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//                 className="hover:bg-accent transition-colors"
//               >
//                 {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//               </Button>
//             </div>

//             {/* Mobile menu button */}
//             <div className="md:hidden flex items-center">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="hover:bg-accent transition-colors"
//               >
//                 {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {/* {
//         isOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3"> */}
//         {
//           <div className={cn(
//             "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
//             isOpen ? "max-h-screen" : "max-h-0"
//           )}>
//             <div className="px-4 pt-2 pb-3 space-y-1 bg-background/80 backdrop-blur-md">
//               <div className="py-2">
//                 {/* <NavbarSearch /> */}
//               </div>
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-accent transition-colors"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//           // )

//         }

//       </nav >
//     </>
//   );
// };

// export default Navbar;

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { useTheme } from "next-themes";
import logo from "@/components/logo/logo1.png";
import { cn } from "@/lib/utils";
import { useRandomGradient } from "@/lib/hooks/use-random-gradient";
import NewsTicker from "./news-ticker";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const { gradient, changeGradient } = useRandomGradient();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name) => {
    setDropdownOpen((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Company",
      items: [
        { name: "Vision", href: "/company/vision" },
        { name: "Mission", href: "/company/mission" },
        { name: "Values", href: "/company/values" },
        { name: "Future Goals", href: "/future-goals" },
        { name: "Gallery", href: "/gallery" },
      ],
    },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Careers", href: "/careers" },
    { name: "Media", href: "/media" },
    { name: "Education", href: "/education" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <NewsTicker />
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          scrolled
            ? `bg-gradient-to-r ${gradient} backdrop-blur-md shadow-sm`
            : `bg-gradient-to-r ${gradient}`
        )}
        onMouseEnter={changeGradient}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
              >
                <Image src={logo} alt="Noble Energy Logo" width={100} height={150} />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <NavigationMenu>
                <NavigationMenuList>
                  {navigation.map((item) =>
                    item.items ? (
                      <NavigationMenuItem key={item.name}>
                        <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[200px] gap-2 p-4">
                            {item.items.map((subItem) => (
                              <li key={subItem.name}>
                                <Link
                                  href={subItem.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    ) : (
                      <NavigationMenuItem key={item.name}>
                        <Link
                          href={item.href}
                          className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                        >
                          {item.name}
                        </Link>
                      </NavigationMenuItem>
                    )
                  )}
                </NavigationMenuList>
              </NavigationMenu>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="hover:bg-accent transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="hover:bg-accent transition-colors"
                aria-label="Toggle Navigation"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
            isOpen ? "max-h-screen" : "max-h-0"
          )}
        >
          <div className="px-4 pt-2 pb-3 space-y-1 bg-background/80 backdrop-blur-md">
            {navigation.map((item) => (
              <div key={item.name}>
                <div
                  onMouseEnter={() => toggleDropdown(item.name)}
                  onMouseLeave={() => toggleDropdown(item.name)}
                  onClick={() => toggleDropdown(item.name)}
                  className="flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-accent transition-colors cursor-pointer"
                >
                  <span>{item.name}</span>
                  {item.items && (
                    dropdownOpen[item.name] ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />
                  )}
                </div>
                {item.items && dropdownOpen[item.name] && (
                  <div className="pl-4">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-3 py-2 rounded-md text-sm text-foreground hover:text-primary hover:bg-accent transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
