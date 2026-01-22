"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLink } from "@/src/content/site";
import { Container } from "./container";

interface NavigationProps {
  links: NavLink[];
}

export function Navigation({ links }: NavigationProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-sage/40 backdrop-blur-md border-b border-olive/20 shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Mobile menu button */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 bg-cream">
              <div className="flex flex-col gap-4 mt-8">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="font-serif text-[28px] font-medium text-charcoal tracking-tight mb-4"
                >
                  Siti Express
                </Link>
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-charcoal hover:text-olive transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-4 bg-olive hover:bg-olive/90 text-cream">
                  <Link href="#contact">CONTACT</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop: Logo on left */}
          <div className="hidden md:block">
            <Link href="/" className="font-serif text-[28px] font-medium text-charcoal tracking-tight">
              Siti Express
            </Link>
          </div>

          {/* Desktop/Tablet: Nav links and Contact on right */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] lg:text-[17px] text-charcoal hover:text-olive transition-colors font-sans uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-olive hover:bg-olive/90 text-cream text-[14px] lg:text-base px-4 lg:px-6"
            >
              <Link href="#contact">CONTACT</Link>
            </Button>
          </div>

          {/* Mobile: Logo in center */}
          <div className="md:hidden absolute left-1/2 -translate-x-1/2">
            <Link href="/" className="font-serif text-[28px] font-medium text-charcoal tracking-tight">
              Siti Express
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}
