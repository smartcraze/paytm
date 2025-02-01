import React from "react";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="py-10 px-6 md:px-16 lg:px-24 bg-white text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 - Logo & About */}
        <div>
          <Image
            src="/paytm-logo.svg"
            alt="Paytm Logo"
            width={120}
            height={40}
          />
          <p className="text-gray-600 text-sm mt-4">
            India's most-loved payments and financial services app. Secure &
            fast transactions with Paytm.
          </p>
        </div>

        {/* Column 2 - Services */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <Link
            href="#"
            className="text-gray-600 text-sm mb-2 hover:text-black transition-all duration-300"
          >
            Recharge & Bill Payments
          </Link>
          <Link
            href="#"
            className="text-gray-600 text-sm mb-2 hover:text-black transition-all duration-300"
          >
            Movie & Events Tickets
          </Link>
          <Link
            href="#"
            className="text-gray-600 text-sm mb-2 hover:text-black transition-all duration-300"
          >
            Flight & Train Bookings
          </Link>
          <Link
            href="#"
            className="text-gray-600 text-sm hover:text-black transition-all duration-300"
          >
            Paytm Wallet & UPI
          </Link>
        </div>

        {/* Column 3 - Support & Social Media */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <Link
            href="#"
            className="text-gray-600 text-sm mb-2 hover:text-black transition-all duration-300"
          >
            24x7 Customer Support
          </Link>
          <Link
            href="#"
            className="text-gray-600 text-sm mb-2 hover:text-black transition-all duration-300"
          >
            Help & FAQs
          </Link>
          <Link
            href="#"
            className="text-gray-600 text-sm mb-2 hover:text-black transition-all duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-gray-600 text-sm hover:text-black transition-all duration-300"
          >
            Terms & Conditions
          </Link>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 mt-6">
            <Link
              href="#"
              className="text-gray-600 hover:text-black transition-all duration-300 transform hover:scale-110"
            >
              <Facebook />
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-black transition-all duration-300 transform hover:scale-110"
            >
              <Twitter />
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-black transition-all duration-300 transform hover:scale-110"
            >
              <Instagram />
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-black transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-300 mt-8 pt-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Paytm Clone. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
