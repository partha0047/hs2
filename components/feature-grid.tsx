"use client";

import { motion } from "framer-motion";
import { Feature } from "@/src/content/site";
import { Container } from "./container";
import { Calendar, MapPin, Home, Sparkles } from "lucide-react";

interface FeatureGridProps {
  features: Feature[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  calendar: Calendar,
  "map-pin": MapPin,
  home: Home,
  default: Sparkles,
};

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <section className="bg-sage py-12 sm:py-16 md:py-20 lg:py-28" id="about">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16 px-4 sm:px-0"
        >
          <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[44px] lg:text-[54px] font-medium text-charcoal mb-4">
            About Us
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-olive mx-auto mb-4 sm:mb-6" />
          <p className="text-charcoal/70 text-[18px] sm:text-[20px] md:text-[22px] font-sans max-w-3xl mx-auto">
            Discover why Siti Express is your perfect choice for premium accommodations
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon || "default"] || iconMap.default;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cream/60 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-sage/40 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-olive/10 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-olive/20 transition-colors">
                  <IconComponent className="h-7 w-7 sm:h-8 sm:w-8 text-olive" />
                </div>
                <h3 className="font-serif text-[24px] sm:text-[26px] md:text-[28px] font-medium text-charcoal mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed text-[17px] sm:text-[19px]">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
