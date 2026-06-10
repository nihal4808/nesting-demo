import Link from "next/link"
import { MessageCircle, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-primary-foreground/20 pb-16">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-serif font-bold mb-6">Nesting<span className="text-accent">.</span></h3>
            <p className="text-primary-foreground/70 max-w-sm mb-8 leading-relaxed">
              Experience unparalleled luxury and tranquility at our premier vacation rental. Your ultimate getaway awaits.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 font-serif">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#overview" className="text-primary-foreground/70 hover:text-accent transition-colors">Overview</Link></li>
              <li><Link href="#amenities" className="text-primary-foreground/70 hover:text-accent transition-colors">Amenities</Link></li>
              <li><Link href="#gallery" className="text-primary-foreground/70 hover:text-accent transition-colors">Gallery</Link></li>
              <li><Link href="#reviews" className="text-primary-foreground/70 hover:text-accent transition-colors">Reviews</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 font-serif">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MessageCircle size={18} className="text-accent mt-1" />
                <div className="flex flex-col text-primary-foreground/70">
                  <a href="tel:9995825588" className="hover:text-accent transition-colors">9995 82 55 88</a>
                  <a href="tel:9995395588" className="hover:text-accent transition-colors">9995 39 55 88</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <a href="mailto:hello@nesting.com" className="text-primary-foreground/70 hover:text-accent transition-colors">hello@nesting.com</a>
              </li>
              <li className="flex items-start gap-3 mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent mt-1"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span className="text-primary-foreground/70 text-sm">
                  T.P. Kumaran Nair Road, B5<br />
                  Nellikode, Chevayoor<br />
                  Calicut- 673017
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Nesting Residence. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
