"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

export function FAQ() {
  const faqs = [
    {
      question: "What is the check-in and check-out time?",
      answer: "Check-in is at 12:00 PM and check-out is at 11:00 AM. Early check-in or late check-out may be available upon request.",
    },
    {
      question: "Are pets allowed?",
      answer: "While we love animals, to maintain the pristine condition of our luxury property, we do not allow pets.",
    },
    {
      question: "Do you offer airport transportation?",
      answer: "We offer complimentary airport transfers for guests staying 5 nights or more. For shorter stays, we can arrange premium transportation at an additional cost. Taxi services are also readily available.",
    },
    {
      question: "Is there daily housekeeping?",
      answer: "Daily housekeeping is included in your stay to ensure you have a completely relaxing experience.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold mb-4 text-foreground"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Find answers to common questions about your stay at Nesting Residence.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
