"use client"

import { motion } from "framer-motion"
import { propertyOverview } from "@/lib/mockData"
import { CheckCircle2 } from "lucide-react"

export function Overview() {
  return (
    <section id="overview" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif font-bold mb-6 text-foreground">Welcome to Paradise</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {propertyOverview.description}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {propertyOverview.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('/images/media__1781131565619.jpg')` }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
