"use client"

import { Shield, Sparkles, Smile, BookOpen, Heart, Eye, Palette, Music, Award, Truck, Coffee, GlassWater } from "lucide-react"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { OrganicBlobImage } from "@/components/shared/OrganicBlobImage"

export default function FacilitiesPage() {
  const facilityItems = [
    {
      title: "Collaborative Classrooms",
      badge: "Learning Spaces",
      desc: "Designed with rounded ergonomics and flexible modular tables. Features high-legibility greenboards, smart display boards, and designated child storage compartments that encourage cleanliness.",
      image: "/images/facilities/classroom.png",
      shape: 1 as const,
      color: "yellow" as const,
      icon: "art" as const,
      bulletPoints: [
        "Anti-bacterial rubber flooring to prevent slippage",
        "Air purifier systems maintaining clean air cycles",
        "Abundant natural light with double-glazed safety windows",
      ],
    },
    {
      title: "Outdoor Active Play Yards",
      badge: "Play Areas",
      desc: "An outdoor active zone featuring sandpits, miniature obstacle courses, slides, and balance beams. Built to improve child posture, core stability, and collaborative social play.",
      image: "/images/facilities/play-area.png",
      shape: 2 as const,
      color: "green" as const,
      icon: "smile" as const,
      bulletPoints: [
        "Imported shock-absorbing turf overlays (fall protection)",
        "Shaded pergolas protecting children from mid-day heat",
        "Sanitized toys checked twice daily by hygiene supervisors",
      ],
    },
    {
      title: "Interactive Cognitive Library",
      badge: "Learning Spaces",
      desc: "A quiet reading loft featuring step-cushions, bilingual storybooks, Montessori tracing cards, and spelling blocks. Stimulates language comprehension and cognitive thinking.",
      image: "/images/facilities/library.png",
      shape: 3 as const,
      color: "blue" as const,
      icon: "education" as const,
      bulletPoints: [
        "Comfortable floor-matted seating arrays for reading circles",
        "Phonics reading corners and audiobooks with clean volume limiters",
        "Over 1,200 curated early developmental books and picture journals",
      ],
    },
    {
      title: "CCTV & Security Shield System",
      badge: "Safety Systems",
      desc: "Safety is our absolute baseline. The school environment features gated checkpoints, mandatory parent verification tokens, and complete CCTV camera systems with feed relays for transparency.",
      image: "/images/facilities/security.png",
      shape: 4 as const,
      color: "red" as const,
      icon: "heart" as const,
      bulletPoints: [
        "Restricted visitor check-ins with digital logs",
        "Full staff trained in basic medical pediatric first-aid",
        "Backup power grid ensuring cameras and lights remain live",
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background text-dark-text selection:bg-primary-yellow/30">
      <Navbar />

      <main className="flex-1">
        {/* Banner */}
        <section className="bg-primary-yellow/10 py-16 px-4 border-b border-border/20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-[-10%] w-[30%] aspect-square bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
          <div className="container mx-auto max-w-3xl relative z-10 flex flex-col items-center gap-3">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest font-sans bg-white border border-border/50 px-4 py-1.5 rounded-full">
              Our Campus
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-dark-text dark:text-foreground">
              Our School Facilities
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl font-sans mt-1">
              Explore the premium physical designs and micro-safety setups built to keep child comfort and early learning high.
            </p>
          </div>
        </section>

        {/* Catalog List */}
        <section className="py-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-5xl flex flex-col gap-20">
            {facilityItems.map((item, index) => {
              const isEven = index % 2 === 0
              return (
                <div
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                >
                  {/* Photo blob */}
                  <div
                    className={`lg:col-span-5 flex justify-center ${
                      isEven ? "lg:order-first" : "lg:order-last"
                    }`}
                  >
                    <div className="w-full max-w-[340px] aspect-square relative">
                      <OrganicBlobImage
                        src={item.image}
                        alt={item.title}
                        shape={item.shape}
                        color={item.color}
                        placeholderIcon={item.icon}
                      />
                    </div>
                  </div>

                  {/* Content details */}
                  <div className="lg:col-span-7 flex flex-col gap-5 text-left">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cream-card border border-border/50 text-muted-foreground self-start`}
                    >
                      {item.badge}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-dark-text dark:text-foreground">
                      {item.title}
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
                      {item.desc}
                    </p>

                    <div className="flex flex-col gap-2.5 mt-2">
                      {item.bulletPoints.map((bp, bpIdx) => (
                        <div
                          key={bpIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-dark-text/90 dark:text-foreground/90 font-sans"
                        >
                          <Shield className="h-4.5 w-4.5 text-brand-green shrink-0 mt-0.5" />
                          <span>{bp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Facilities Checklist Grid */}
        <section className="py-20 bg-background border-t-2 border-dashed border-border/40 px-4 sm:px-6">
          <div className="container mx-auto max-w-5xl text-center">
            <SectionHeader
              title="Our Campus Amenities"
              subtitle="Every corner is designed for toddler safety, physical play, and visual guidance."
              badge="Amenities Checklist"
              badgeColor="green"
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-12">
              {[
                { title: "CCTV Surveillance", icon: Shield, color: "bg-primary-red/10 border-primary-red" },
                { title: "Indoor Play Area", icon: Smile, color: "bg-primary-yellow/15 border-primary-yellow" },
                { title: "Outdoor Play Area", icon: Smile, color: "bg-brand-green/10 border-brand-green" },
                { title: "Activity Room", icon: Sparkles, color: "bg-brand-blue/10 border-brand-blue" },
                { title: "Reading Corner", icon: BookOpen, color: "bg-brand-purple/10 border-brand-purple" },
                { title: "Art & Craft Area", icon: Palette, color: "bg-brand-pink/10 border-brand-pink" },
                { title: "Music Activities", icon: Music, color: "bg-brand-orange/10 border-brand-orange" },
                { title: "Dance Activities", icon: Music, color: "bg-brand-blue/10 border-brand-blue" },
                { title: "First Aid Facility", icon: Heart, color: "bg-primary-red/10 border-primary-red" },
                { title: "Safe Drinking Water", icon: GlassWater, color: "bg-brand-green/10 border-brand-green" },
                { title: "Transportation Cab", icon: Truck, color: "bg-primary-yellow/15 border-primary-yellow" },
                { title: "Parent Waiting Area", icon: Coffee, color: "bg-brand-purple/10 border-brand-purple" },
                { title: "Educational Toys", icon: Award, color: "bg-brand-pink/10 border-brand-pink" },
                { title: "Learning Materials", icon: BookOpen, color: "bg-brand-orange/10 border-brand-orange" },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border border-dark-text ${item.color} flex flex-col items-center justify-center text-center gap-2 hover:scale-[1.03] transition-transform shadow-sm`}
                  >
                    <Icon className="h-5 w-5 text-dark-text" />
                    <span className="font-heading font-bold text-xs sm:text-sm text-dark-text">
                      {item.title}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Safety standards callout */}
        <section className="py-20 bg-cream-card border-t-2 border-border/40 px-4 sm:px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <SectionHeader
              title="Hygiene & Care Standards"
              subtitle="We maintain daily checkpoints to ensure our spaces remain clean."
              badge="Daily Checklist"
              badgeColor="red"
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              {[
                {
                  title: "Sanitization Cycles",
                  desc: "All play tools, floor mats, and handrails are sprayed with child-safe organic disinfectants three times daily.",
                  icon: Sparkles,
                },
                {
                  title: "Doctor on Call",
                  desc: "We have an active tie-up with the nearby Pediatric Hospital, and maintain complete first-aid supplies on campus.",
                  icon: Heart,
                },
                {
                  title: "Parent CCTV Feeds",
                  desc: "Parents receive secure log-in details to view stream relays of classroom activity schedules, building confidence.",
                  icon: Eye,
                },
              ].map((std, idx) => {
                const Icon = std.icon
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl border-2 border-dark-text bg-background shadow-warm flex flex-col items-center text-left"
                  >
                    <div className="h-10 w-10 rounded-full bg-primary-yellow/15 flex items-center justify-center mb-3">
                      <Icon className="h-5 w-5 text-dark-text" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-dark-text dark:text-foreground mb-1.5">
                      {std.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                      {std.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
