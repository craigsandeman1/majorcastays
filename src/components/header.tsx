"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const destinations = [
  {
    name: "Palma",
    slug: "palma",
    subDestinations: [
      { name: "Apartment", slug: "apartment" },
      { name: "Guest House", slug: "guest-house" },
      { name: "Holiday Home", slug: "holiday-home" },
      { name: "Hotel", slug: "hotel" },
    ],
  },
  {
    name: "Alcudia",
    slug: "alcudia",
    subDestinations: [
      { name: "Apartment", slug: "apartment" },
      { name: "Bed And Breakfast", slug: "bed-and-breakfast" },
      { name: "Holiday Home", slug: "holiday-home" },
      { name: "Hotel", slug: "hotel" },
      { name: "Villa", slug: "villa" },
    ],
  },
  {
    name: "Pollença",
    slug: "pollenca",
    subDestinations: [
      { name: "Holiday Home", slug: "holiday-home" },
      { name: "Apartment", slug: "apartment" },
      { name: "Villa", slug: "villa" },
    ],
  },
  {
    name: "Sóller",
    slug: "soller",
    subDestinations: [
      { name: "Apartment", slug: "apartment" },
      { name: "Holiday Home", slug: "holiday-home" },
      { name: "Lodge", slug: "lodge" },
    ],
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#1e3a8a] text-white relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/majorca-stays-logo.png"
              alt="Majorca Stays"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {destinations.map((destination) => (
              <div key={destination.slug} className="relative group">
                <Link
                  href={`/${destination.slug}`}
                  className="px-3 py-2 hover:text-[#00b0f0] transition-colors duration-200 block"
                >
                  {destination.name} <span className="ml-1">▼</span>
                </Link>
                <div className="absolute z-50 left-0 mt-1 w-48 bg-white text-gray-800 rounded-md shadow-lg overflow-hidden transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 invisible group-hover:visible">
                  {destination.subDestinations.map((subDest) => (
                    <Link
                      key={`${destination.slug}-${subDest.slug}`}
                      href={`/${destination.slug}/${subDest.slug}`}
                      className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                    >
                      {subDest.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="relative group">
              <Link
                href="/blog"
                className="px-3 py-2 hover:text-[#00b0f0] transition-colors duration-200 block"
              >
                Blog
              </Link>
            </div>
          </nav>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1e3a8a] border-t border-blue-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {destinations.map((destination) => (
              <div key={`mobile-${destination.slug}`}>
                <Link
                  href={`/${destination.slug}`}
                  className="block px-3 py-2 text-white font-medium"
                >
                  {destination.name}
                </Link>
                <div className="pl-4 space-y-1">
                  {destination.subDestinations.map((subDest) => (
                    <Link
                      key={`mobile-${destination.slug}-${subDest.slug}`}
                      href={`/${destination.slug}/${subDest.slug}`}
                      className="block px-3 py-2 text-blue-100 text-sm"
                    >
                      {subDest.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link
              href="/blog"
              className="block px-3 py-2 text-white font-medium"
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
