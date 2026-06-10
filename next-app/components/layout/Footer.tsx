import Link from "next/link"
import { Heart, Phone, Mail, MapPin, MessageSquare } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-border/40 mt-16 overflow-hidden">
      {/* Decorative Wave Divider at Top */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-primary-yellow/20" />

      <div className="container mx-auto px-4 py-16 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 group self-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-red text-primary-yellow shadow-md transition-transform group-hover:scale-105">
                <Heart className="h-5 w-5 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold text-dark-text tracking-wide dark:text-foreground">
                  My Wings
                </span>
                <span className="text-[10px] font-sans font-semibold text-primary-red tracking-widest uppercase -mt-1 leading-none">
                  Academy
                </span>
              </div>
            </Link>
            <p className="text-sm font-sans text-muted-foreground leading-relaxed">
              A premium childhood environment built to inspire safety, trust, cognitive growth, and lifelong creativity. Fostering development since 2018.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-full bg-primary-yellow/10 border border-primary-yellow/20 flex items-center justify-center text-dark-text hover:bg-primary-yellow hover:text-dark-text dark:text-foreground dark:hover:text-dark-text transition-all"
                aria-label="Facebook Profile"
                id="footer-social-facebook"
              >
                <svg
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-full bg-primary-yellow/10 border border-primary-yellow/20 flex items-center justify-center text-dark-text hover:bg-primary-yellow hover:text-dark-text dark:text-foreground dark:hover:text-dark-text transition-all"
                aria-label="Instagram Profile"
                id="footer-social-instagram"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-full bg-primary-yellow/10 border border-primary-yellow/20 flex items-center justify-center text-dark-text hover:bg-primary-yellow hover:text-dark-text dark:text-foreground dark:hover:text-dark-text transition-all"
                aria-label="WhatsApp Chat"
                id="footer-social-whatsapp"
              >
                <MessageSquare className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-lg font-bold text-dark-text dark:text-foreground">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2.5">
              <Link href="/" className="text-sm font-sans text-muted-foreground hover:text-primary-red transition-colors" id="footer-link-home">
                Home
              </Link>
              <Link href="/about" className="text-sm font-sans text-muted-foreground hover:text-primary-red transition-colors" id="footer-link-about">
                About Us
              </Link>
              <Link href="/programs" className="text-sm font-sans text-muted-foreground hover:text-primary-red transition-colors" id="footer-link-programs">
                Learning Programs
              </Link>
              <Link href="/facilities" className="text-sm font-sans text-muted-foreground hover:text-primary-red transition-colors" id="footer-link-facilities">
                School Facilities
              </Link>
            </nav>
          </div>

          {/* Column 3: Parent Resources */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-lg font-bold text-dark-text dark:text-foreground">
              Parent Resources
            </h4>
            <nav className="flex flex-col gap-2.5">
              <Link href="/gallery" className="text-sm font-sans text-muted-foreground hover:text-primary-red transition-colors" id="footer-link-gallery">
                Gallery
              </Link>
              <Link href="/testimonials" className="text-sm font-sans text-muted-foreground hover:text-primary-red transition-colors" id="footer-link-testimonials">
                Testimonials
              </Link>
              <Link href="/admissions" className="text-sm font-sans text-muted-foreground hover:text-primary-red transition-colors" id="footer-link-admissions">
                Admissions Info
              </Link>
              <Link href="/contact" className="text-sm font-sans text-muted-foreground hover:text-primary-red transition-colors" id="footer-link-contact">
                Contact & Map
              </Link>
            </nav>
          </div>

          {/* Column 4: Contact & Timing */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading text-lg font-bold text-dark-text dark:text-foreground">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3 font-sans text-sm text-muted-foreground">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-red shrink-0" />
                <span>
                  123 Wings Way, Sector 4,
                  <br />
                  Creative Kidz Circle, New Delhi 110001
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-brand-green shrink-0" />
                <a href="tel:+919876543210" className="hover:text-primary-red transition-colors" id="footer-call-action">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-brand-blue shrink-0" />
                <a href="mailto:admissions@mywingsacademy.com" className="hover:text-primary-red transition-colors" id="footer-email-action">
                  admissions@mywingsacademy.com
                </a>
              </div>
              <div className="pt-2 border-t border-border/20 text-xs">
                <span className="font-semibold block text-dark-text dark:text-foreground mb-0.5">
                  School Hours:
                </span>
                <span>Mon - Fri: 8:00 AM - 1:30 PM</span>
                <span className="block">Sat: 9:00 AM - 12:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-sans text-muted-foreground">
            &copy; {new Date().getFullYear()} My Wings Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs font-sans text-muted-foreground">
            <Link href="/admissions" className="hover:text-primary-red transition-colors" id="footer-link-privacy">
              Inquire
            </Link>
            <span>&bull;</span>
            <Link href="/contact" className="hover:text-primary-red transition-colors" id="footer-link-terms">
              Location
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
