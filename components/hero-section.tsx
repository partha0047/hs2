"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-bleed dark luxury background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="Luxurious villa with pool at dusk"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
      </div>

      {/* Centered content – no card, text directly on image */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <h1 className="font-serif text-[36px] sm:text-[48px] md:text-[56px] lg:text-[72px] font-medium text-white leading-[1.1] tracking-tight mb-5 sm:mb-6">
            Find Your
            <br />
            Perfect Stay
          </h1>
          <p className="font-sans text-white/95 text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
            Book boutique homestays, private villas & curated experiences. Tailored for those who travel with taste.
          </p>

          {/* Circular play button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <button
              type="button"
              aria-label="Play video"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white/90 bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-white/15 hover:border-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              <Play className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white ml-1" strokeWidth={1.5} />
            </button>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-white/90 hover:text-white hover:bg-white/10 font-sans text-[14px] sm:text-[15px]"
            >
              <Link href="#rooms" className="flex items-center gap-2" prefetch={true}>
                Explore Homestays
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator – white */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/80 text-[12px] sm:text-[14px] font-sans uppercase tracking-widest">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-9 border-2 border-white/60 rounded-full flex items-start justify-center pt-2"
          >
            <div className="w-1 h-1 bg-white/80 rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
