"use client"

import { motion } from "framer-motion"
import { MapPin, Navigation, Car } from "lucide-react"

export function Location() {
  const attractions = [
    { name: "Downtown Center", distance: "15 min drive", icon: Car },
    { name: "National Park", distance: "30 min drive", icon: MapPin },
    { name: "International Airport", distance: "45 min drive", icon: Navigation },
  ]

  return (
    <section id="location" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-serif font-bold mb-4 text-foreground">Prime Location</h2>
              <p className="text-muted-foreground text-lg">
                Perfectly situated to offer both seclusion and convenience. Enjoy peaceful surroundings while remaining close to major attractions.
              </p>
            </div>

            <div className="space-y-4">
              {attractions.map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-background p-4 rounded-xl border border-border">
                  <div className="bg-secondary p-3 rounded-full text-accent">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.distance}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[500px] w-full rounded-2xl overflow-hidden shadow-lg border border-border relative bg-muted"
          >
            <div className="absolute inset-0 bg-[url('/images/media__1781131565608.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-black/40" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center animate-bounce">
                <MapPin className="w-12 h-12 text-accent fill-accent" />
                <div className="bg-background px-4 py-2 rounded-lg shadow-lg font-medium text-sm mt-2 border border-border text-center">
                  <p className="font-bold">Nesting Residence</p>
                  <p className="text-muted-foreground text-xs mt-1">T.P. Kumaran Nair Road, B5</p>
                  <p className="text-muted-foreground text-xs">Nellikode, Chevayoor</p>
                  <p className="text-muted-foreground text-xs">Calicut- 673017</p>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
