"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "./section-title";
import { Button } from "@/components/ui/button";
import { Container } from "./container";

interface PremiumSuiteSectionProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
  propertyId: string;
}

export function PremiumSuiteSection({
  title,
  subtitle,
  description,
  image,
  cta,
  propertyId,
}: PremiumSuiteSectionProps) {
  return (
    <section className="bg-cream py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-lg"
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionTitle className="mb-4">{title}</SectionTitle>
            <p className="text-olive font-sans text-lg mb-6">{subtitle}</p>
            <p className="text-charcoal/80 leading-relaxed mb-8 font-sans">
              {description}
            </p>
            <Button asChild className="bg-olive hover:bg-olive/90 text-cream">
              <Link href={`/properties/${propertyId}`}>{cta}</Link>
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
