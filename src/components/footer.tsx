import Link from "next/link";
import { Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1e2c4f] text-white py-8 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Majorca Stays</h3>
            <p className="text-sm">
              Discover accommodation across the magical Majorca island, from
              beach resorts to peaceful mountain villas.
            </p>
            <div className="mt-4 flex items-center">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/palma"
                  className="text-sm hover:underline"
                >
                  Palma
                </Link>
              </li>
              <li>
                <Link
                  href="/alcudia"
                  className="text-sm hover:underline"
                >
                  Alcudia
                </Link>
              </li>
              <li>
                <Link
                  href="/pollenca"
                  className="text-sm hover:underline"
                >
                  Pollença
                </Link>
              </li>
              <li>
                <Link
                  href="/soller"
                  className="text-sm hover:underline"
                >
                  Sóller
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-sm hover:underline"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/activities"
                  className="text-sm hover:underline"
                >
                  Activities
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:underline"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-sm hover:underline"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap"
                  className="text-sm hover:underline"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700 text-sm">
          <p className="mb-2">© 2025 Majorca Stays. All rights reserved.</p>
          <p className="text-gray-300">
            Majorca Stays is an affiliate partner of Booking.com. When you book
            through our links, we may earn a commission at no additional cost to
            you.
          </p>
        </div>
      </div>
    </footer>
  );
}
