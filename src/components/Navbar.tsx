"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className={`text-2xl font-serif font-bold tracking-tighter ${isScrolled ? "text-primary" : "text-white"}`}>
          Nesting<span className="text-accent">.</span>
        </Link>
        
        <nav className={`hidden md:flex gap-8 items-center ${isScrolled ? "text-foreground" : "text-white/90"}`}>
          <Link href="#overview" className="text-sm font-medium hover:text-accent transition-colors">Overview</Link>
          <Link href="#amenities" className="text-sm font-medium hover:text-accent transition-colors">Amenities</Link>
          <Link href="#gallery" className="text-sm font-medium hover:text-accent transition-colors">Gallery</Link>
          <Link href="#reviews" className="text-sm font-medium hover:text-accent transition-colors">Reviews</Link>
        </nav>

        <div className="hidden md:flex gap-4 items-center">
          <Link href="/admin" className={`text-sm font-medium hover:text-accent transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}>
            Admin Login
          </Link>
          <Button variant={isScrolled ? "default" : "outline"} className={!isScrolled ? "text-white border-white hover:bg-white hover:text-black" : ""} asChild>
            <Link href="#booking">Book Now</Link>
          </Button>
        </div>

        <button 
          className={`md:hidden p-2 ${isScrolled ? "text-primary" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg py-4 px-4 flex flex-col gap-4"
        >
          <Link href="#overview" onClick={() => setIsMobileMenuOpen(false)} className="text-foreground font-medium p-2">Overview</Link>
          <Link href="#amenities" onClick={() => setIsMobileMenuOpen(false)} className="text-foreground font-medium p-2">Amenities</Link>
          <Link href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-foreground font-medium p-2">Gallery</Link>
          <Link href="#reviews" onClick={() => setIsMobileMenuOpen(false)} className="text-foreground font-medium p-2">Reviews</Link>
          <Link href="/admin" onClick={() => setIsMobileMenuOpen(false)} className="text-foreground font-medium p-2">Admin Dashboard</Link>
          <Button className="w-full mt-2" onClick={() => setIsMobileMenuOpen(false)} asChild>
            <Link href="#booking">Book Now</Link>
          </Button>
        </motion.div>
      )}
    </header>
  )
}
