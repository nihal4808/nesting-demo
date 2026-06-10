import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Overview } from "@/components/Overview"
import { Amenities } from "@/components/Amenities"
import { Gallery } from "@/components/Gallery"
import { BookingSection } from "@/components/BookingSection"
import { Reviews } from "@/components/Reviews"
import { Location } from "@/components/Location"
import { FAQ } from "@/components/FAQ"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Navbar />
      <Hero />
      <Overview />
      <Amenities />
      <Gallery />
      <BookingSection />
      <Reviews />
      <Location />
      <FAQ />
      <Footer />
    </main>
  )
}
