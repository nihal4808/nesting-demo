"use client"

import { motion } from "framer-motion"
import { Wifi, Coffee, Wind, Tv, Car, Utensils, Mountain, HeadphonesIcon } from "lucide-react"

const amenitiesList = [
  { icon: Wifi, label: "Free WiFi" },
  { icon: Coffee, label: "Coffee Maker" },
  { icon: Wind, label: "Air Conditioning" },
  { icon: Tv, label: "Smart TV" },
  { icon: Car, label: "Parking" },
  { icon: Utensils, label: "Kitchen" },
  { icon: Mountain, label: "Mountain View" },
  { icon: HeadphonesIcon, label: "24/7 Support" },
]

export function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold mb-4 text-foreground"
          >
            Premium Amenities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Everything you need for an unforgettable stay. We've thought of every detail.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {amenitiesList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-border group"
            >
              <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors text-accent">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="font-medium text-foreground">{item.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
