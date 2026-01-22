"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Testimonial } from "@/src/content/site";
import { Container } from "./container";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <section className="bg-cream py-16 lg:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12"
        >
          <div className="flex-1">
            <div className="text-8xl lg:text-9xl font-serif text-olive/20 leading-none mb-4">
              &ldquo;
            </div>
            <p className="text-lg lg:text-xl text-charcoal/80 leading-relaxed mb-6 font-sans">
              {testimonial.quote}
            </p>
            <p className="text-charcoal/60 font-sans">— {testimonial.author}</p>
          </div>
          <div className="relative w-24 h-24 lg:w-32 lg:h-32 flex-shrink-0">
            <div className="absolute inset-0 bg-sage/30 rounded-full" />
            <Image
              src={testimonial.avatar}
              alt={testimonial.author}
              fill
              className="object-cover rounded-full"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
