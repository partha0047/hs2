import Link from "next/link";
import { Container } from "./container";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-olive text-cream py-10 sm:py-12 lg:py-16">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-[24px] sm:text-[28px] font-medium mb-3 sm:mb-4">Siti Express</h3>
            <p className="text-cream/80 text-[15px] sm:text-[17px] font-sans leading-relaxed mb-4">
              Premium homestays for unforgettable experiences. Discover luxury and comfort in our carefully curated collection.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-cream/80 hover:text-cream transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-cream/80 hover:text-cream transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-cream/80 hover:text-cream transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-[20px] sm:text-[22px] font-medium mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-cream/80 hover:text-cream transition-colors text-[15px] sm:text-[17px] font-sans">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-cream/80 hover:text-cream transition-colors text-[17px] font-sans">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#rooms" className="text-cream/80 hover:text-cream transition-colors text-[17px] font-sans">
                  Homestays
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-cream/80 hover:text-cream transition-colors text-[17px] font-sans">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-[22px] font-medium mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-1 flex-shrink-0" />
                <a href="mailto:info@sitiexpress.com" className="text-cream/80 hover:text-cream transition-colors text-[17px] font-sans">
                  info@sitiexpress.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-1 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-cream/80 hover:text-cream transition-colors text-[17px] font-sans">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span className="text-cream/80 text-[17px] font-sans">
                  123 Luxury Street<br />
                  Premium City, PC 12345
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-[22px] font-medium mb-4">Newsletter</h4>
            <p className="text-cream/80 text-[17px] font-sans mb-4">
              Subscribe to get updates on new properties and special offers.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-lg bg-cream/10 border border-cream/20 text-cream placeholder-cream/50 focus:outline-none focus:ring-2 focus:ring-cream/50 text-[17px] font-sans"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-cream text-olive rounded-lg hover:bg-cream/90 transition-colors text-[17px] font-sans font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-cream/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/60 text-[15px] font-sans">
              © {new Date().getFullYear()} Siti Express. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-cream/60 hover:text-cream text-[15px] font-sans">
                Privacy Policy
              </Link>
              <Link href="#" className="text-cream/60 hover:text-cream text-[15px] font-sans">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
