"use client"

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
// import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from "@/components/logo/logo1.png";
import { useRandomGradient } from "@/lib/hooks/use-random-gradient";


const Footer = () => {
  const { gradient, changeGradient } = useRandomGradient();
  return (
    // <footer className="bg-background border-t">
    <footer
      className={`bg-gradient-to-r ${gradient} transition-colors duration-500`}
      onMouseEnter={changeGradient}
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
              <li>Phone: (+91) 1234567890</li>
              <li>Email: info@nobleenergy.com</li>
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
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Noble Energy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

