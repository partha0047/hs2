"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Home } from "@/src/content/site";
import { Card } from "@/components/ui/card";

interface SuiteOverlayCollageProps {
  suites: Home[];
}

export function SuiteOverlayCollage({ suites }: SuiteOverlayCollageProps) {
  return (
    <section className="bg-cream py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {suites.map((suite, index) => (
            <motion.div
              key={suite.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <Link href={`/properties/${suite.id}`}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                  <Image
                    src={suite.image}
                    alt={suite.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-olive/80 to-transparent" />
                  <Card className="absolute bottom-6 left-6 right-6 bg-olive border-0 p-6 text-cream shadow-lg">
                    <h3 className="font-serif text-2xl font-medium mb-2">
                      {suite.badge || suite.title}
                    </h3>
                    <p className="text-sm text-cream/90 leading-relaxed">
                      {suite.description}
                    </p>
                  </Card>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
