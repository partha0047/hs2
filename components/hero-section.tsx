"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full screen background image with parallax effect */}
      <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/1920/1080?random=100"
          alt="Luxurious interior"
          fill
          className="object-cover scale-105 transition-transform duration-700 ease-out"
          priority
          sizes="100vw"
        />
        {/* Modern gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/50 via-charcoal/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
      </div>

      {/* Text content with modern design */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Modern card with glassmorphism */}
          <div className="bg-olive/20 backdrop-blur-2xl p-6 sm:p-8 md:p-10 lg:p-16 shadow-2xl rounded-xl sm:rounded-2xl border border-olive/30 relative overflow-hidden mx-4 sm:mx-0">
            {/* Subtle accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-olive via-sage to-olive" />
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-serif text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px] font-medium text-charcoal mb-4 sm:mb-6 leading-tight tracking-tight">
                Siti Express
              </h1>
              <div className="w-16 sm:w-20 h-1 bg-olive mb-4 sm:mb-6 mx-auto" />
              <p className="text-charcoal/75 leading-relaxed mb-6 sm:mb-8 font-sans text-[16px] sm:text-[18px] md:text-[20px] max-w-2xl mx-auto px-2 sm:px-0">
                Experience luxury and comfort in our carefully curated collection of premium accommodations. 
                Each space is thoughtfully designed to provide an unforgettable stay.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex justify-center"
              >
                <Button 
                  asChild 
                  size="lg"
                  className="bg-olive hover:bg-olive/90 text-cream text-[15px] sm:text-[17px] px-6 sm:px-8 py-5 sm:py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto"
                >
                  <Link href="#rooms" className="flex items-center justify-center gap-2" prefetch={true}>
                    Explore Homestays
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-cream/80 text-[14px] font-sans uppercase tracking-wider">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-cream/60 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 bg-cream/80 rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
