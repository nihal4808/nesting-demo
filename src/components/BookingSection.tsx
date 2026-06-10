"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { addDays } from "date-fns"

export function BookingSection() {
  const [date, setDate] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: new Date(),
    to: addDays(new Date(), 3),
  })
  
  const [guests, setGuests] = useState("2")
  const [isBooked, setIsBooked] = useState(false)

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault()
    setIsBooked(true)
    setTimeout(() => setIsBooked(false), 5000)
  }

  // Mock disabled dates (already booked)
  const disabledDays = [
    new Date(new Date().getFullYear(), new Date().getMonth(), 15),
    new Date(new Date().getFullYear(), new Date().getMonth(), 16),
    new Date(new Date().getFullYear(), new Date().getMonth(), 22),
  ]

  return (
    <section id="booking" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-2xl p-6 md:p-8 shadow-sm border border-border"
          >
            <h2 className="text-3xl font-serif font-bold mb-4">Availability</h2>
            <p className="text-muted-foreground mb-6">Select your dates to see availability and pricing.</p>
            
            <div className="flex justify-center bg-black text-white p-6 rounded-2xl w-full max-w-sm mx-auto">
              <Calendar
                mode="range"
                selected={date}
                // @ts-ignore
                onSelect={setDate}
                numberOfMonths={1}
                captionLayout="dropdown"
                fromYear={new Date().getFullYear()}
                toYear={new Date().getFullYear() + 5}
                disabled={disabledDays}
                className="w-full"
              />
            </div>
            
            <div className="mt-6 flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span>Selected</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span>Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-muted-foreground opacity-50" />
                <span>Booked</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg border-0 bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Reserve Your Stay</CardTitle>
                <CardDescription>Complete your booking request below.</CardDescription>
              </CardHeader>
              <CardContent>
                {isBooked ? (
                  <div className="bg-green-50 text-green-800 p-4 rounded-lg border border-green-200 text-center">
                    <h3 className="font-bold text-lg mb-1">Booking Request Sent!</h3>
                    <p>Thank you. We will contact you shortly to confirm your reservation.</p>
                  </div>
                ) : (
                  <form onSubmit={handleBook} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="checkIn">Check-in</Label>
                        <Input id="checkIn" value={date.from?.toLocaleDateString() || ""} readOnly className="bg-muted" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="checkOut">Check-out</Label>
                        <Input id="checkOut" value={date.to?.toLocaleDateString() || ""} readOnly className="bg-muted" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="guests">Number of Guests</Label>
                      <Input 
                        id="guests" 
                        type="number" 
                        min="1" 
                        max="10" 
                        value={guests} 
                        onChange={(e) => setGuests(e.target.value)} 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
                      </div>
                    </div>

                    <div className="pt-4 border-t mt-6 border-border">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-medium text-lg">Total</span>
                        <span className="font-serif font-bold text-2xl text-accent">$1,200</span>
                      </div>
                      <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                        Request Booking
                      </Button>
                      <p className="text-xs text-center text-muted-foreground mt-3">
                        You won't be charged yet.
                      </p>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
