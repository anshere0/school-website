"use client"

import { Phone, Mail, MapPin, MessageSquare, Compass, Shield, Clock } from "lucide-react"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { InquiryForm } from "@/components/forms/InquiryForm"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-dark-text selection:bg-primary-yellow/30">
      <Navbar />

      <main className="flex-1">
        {/* Banner */}
        <section className="bg-primary-yellow/10 py-16 px-4 border-b border-border/20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-[-10%] w-[30%] aspect-square bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />
          <div className="container mx-auto max-w-3xl relative z-10 flex flex-col items-center gap-3">
            <span className="text-xs font-bold text-brand-green uppercase tracking-widest font-sans bg-white border border-border/50 px-4 py-1.5 rounded-full">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-dark-text dark:text-foreground">
              Contact My Wings
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl font-sans mt-1">
              Have questions about registration fees, guidelines, or transport lines? Our team is here to assist.
            </p>
          </div>
        </section>

        {/* Contact Layout */}
        <section className="py-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Contact Info & Timing */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              
              {/* Core Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Call Card */}
                <div className="p-6 rounded-3xl border border-dark-text/20 bg-cream-card text-left flex flex-col justify-between min-h-[160px]">
                  <div>
                    <div className="h-9 w-9 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-brand-green mb-3">
                      <Phone className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-dark-text dark:text-foreground">
                      Call Admissions Office
                    </h3>
                    <p className="text-xs text-muted-foreground font-sans mt-1">
                      Direct phone discussions during office hours.
                    </p>
                  </div>
                  <a
                    href="tel:+919876543210"
                    className="font-sans font-bold text-sm text-primary-red hover:underline mt-4 block"
                    id="contact-phone-link"
                  >
                    +91 98765 43210
                  </a>
                </div>

                {/* WhatsApp Card */}
                <div className="p-6 rounded-3xl border border-dark-text/20 bg-cream-card text-left flex flex-col justify-between min-h-[160px]">
                  <div>
                    <div className="h-9 w-9 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-brand-green mb-3">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-dark-text dark:text-foreground">
                      WhatsApp Messaging
                    </h3>
                    <p className="text-xs text-muted-foreground font-sans mt-1">
                      Chat instantly with our admission counselors.
                    </p>
                  </div>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans font-bold text-sm text-brand-green hover:underline mt-4 block"
                    id="contact-whatsapp-link"
                  >
                    Send WhatsApp Message
                  </a>
                </div>

                {/* Email Card */}
                <div className="p-6 rounded-3xl border border-dark-text/20 bg-cream-card text-left flex flex-col justify-between min-h-[160px]">
                  <div>
                    <div className="h-9 w-9 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue mb-3">
                      <Mail className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-dark-text dark:text-foreground">
                      Email Communication
                    </h3>
                    <p className="text-xs text-muted-foreground font-sans mt-1">
                      Send official documents or request kit PDFs.
                    </p>
                  </div>
                  <a
                    href="mailto:admissions@mywingsacademy.com"
                    className="font-sans font-bold text-sm text-brand-blue hover:underline mt-4 block"
                    id="contact-email-link"
                  >
                    admissions@mywingsacademy.com
                  </a>
                </div>

                {/* Address Card */}
                <div className="p-6 rounded-3xl border border-dark-text/20 bg-cream-card text-left flex flex-col justify-between min-h-[160px]">
                  <div>
                    <div className="h-9 w-9 rounded-xl bg-primary-red/10 border border-primary-red/20 flex items-center justify-center text-primary-red mb-3">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-dark-text dark:text-foreground">
                      Campus Location
                    </h3>
                    <p className="text-xs text-muted-foreground font-sans mt-1">
                      Sector 4, Creative Kidz Circle, New Delhi 110001
                    </p>
                  </div>
                  <span className="font-sans font-bold text-xs text-muted-foreground/80 mt-4 block">
                    Near Metro-Park Circle
                  </span>
                </div>

              </div>

              {/* Working Hours Callout */}
              <div className="p-6 sm:p-8 rounded-[2rem] border-2 border-dark-text bg-cream-card shadow-warm text-left flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary-yellow/15 flex items-center justify-center shrink-0 text-dark-text">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="flex flex-col gap-1 w-full font-sans text-sm text-muted-foreground">
                  <h3 className="font-heading font-bold text-base text-dark-text dark:text-foreground">
                    Office Operation Timings
                  </h3>
                  <p className="leading-relaxed">
                    Our administrative staff is active on campus for inquiry consultations during these periods:
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-3 max-w-sm font-semibold text-dark-text/80 dark:text-foreground/90">
                    <div>
                      <span className="block text-xs text-muted-foreground font-normal">Weekdays (Mon-Fri)</span>
                      <span>08:00 AM - 01:30 PM</span>
                    </div>
                    <div>
                      <span className="block text-xs text-muted-foreground font-normal">Saturdays</span>
                      <span>09:00 AM - 12:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direction Guide and Mock Map */}
              <div className="h-72 w-full border-2 border-dark-text rounded-[2rem] shadow-warm bg-brand-blue/10 relative overflow-hidden flex flex-col justify-center items-center text-center p-6 border-dashed">
                <Compass className="h-10 w-10 text-brand-blue animate-spin mb-3" />
                <span className="font-heading font-bold text-dark-text/85 dark:text-foreground/80 text-lg">
                  Interactive Direction Map
                </span>
                <span className="text-xs text-muted-foreground mt-1.5 max-w-sm leading-relaxed font-sans">
                  The campus is located on the wide 80-feet ring road next to Central Park block-4. High safety indicators and designated cab pick-up points align the entrance pathways.
                </span>
                <Button className="mt-4 rounded-full bg-white text-dark-text hover:bg-muted border border-dark-text text-xs cursor-pointer">
                  Get Google Maps Directions
                </Button>
              </div>

            </div>

            {/* Right: Lead Form */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <InquiryForm />
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
