"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "./container";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-cream">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16 px-4 sm:px-0"
        >
          <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[44px] lg:text-[54px] font-medium text-charcoal mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-olive mx-auto mb-4 sm:mb-6" />
          <p className="text-charcoal/70 text-[18px] sm:text-[20px] md:text-[22px] font-sans max-w-3xl mx-auto">
            Have questions? We're here to help. Find answers to common questions below.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto px-4 sm:px-0"
        >
          <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-cream border border-sage/30 rounded-lg px-4 sm:px-6 py-2"
              >
                <AccordionTrigger className="font-serif text-[18px] sm:text-[20px] md:text-[22px] text-charcoal hover:no-underline hover:text-olive transition-colors text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 text-[16px] sm:text-[18px] md:text-[19px] font-sans leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </section>
  );
}
