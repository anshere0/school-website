"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import {
  Heart,
  Shield,
  BookOpen,
  Award,
  Sparkles,
  Calendar,
  Compass,
  ArrowRight,
  Smile,
  GraduationCap,
  Clock,
  ChevronRight,
  CheckCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { OrganicBlobImage } from "@/components/shared/OrganicBlobImage"
import { cn } from "@/lib/utils"

export default function HomePage() {
  const [metricsRef, metricsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [timelineRef, timelineInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  // Staggered motion reveals
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  }

  // Curated programs data
  const programs = [
    {
      title: "Playgroup",
      age: "1.5 - 2.5 Years",
      desc: "Sensory learning, emotional bonding, and fundamental motor development through structured play.",
      color: "bg-brand-pink/20 text-dark-text border-brand-pink",
      accent: "bg-brand-pink",
      icon: Smile,
    },
    {
      title: "Nursery",
      age: "2.5 - 3.5 Years",
      desc: "Pre-reading skills, social interaction, active storytelling, and emotional independence building.",
      color: "bg-brand-green/20 text-dark-text border-brand-green",
      accent: "bg-brand-green",
      icon: Sparkles,
    },
    {
      title: "Junior KG",
      age: "3.5 - 4.5 Years",
      desc: "Introduction to numbers, shapes, language arts, critical logic, and scientific exploration.",
      color: "bg-brand-blue/20 text-dark-text border-brand-blue",
      accent: "bg-brand-blue",
      icon: Compass,
    },
    {
      title: "Senior KG",
      age: "4.5 - 5.5 Years",
      desc: "Advanced reading readiness, basic mathematics, collaborative team activities, and school prep.",
      color: "bg-brand-purple/20 text-dark-text border-brand-purple",
      accent: "bg-brand-purple",
      icon: GraduationCap,
    },
  ]

  // Daily timeline schedule data
  const schedule = [
    { time: "08:30 AM", title: "Warm Arrival & Circle Time", desc: "Children gather, share feelings, sing greeting songs, and set the day's goals." },
    { time: "09:30 AM", title: "Creative & Sensory Explorations", desc: "Hands-on painting, clay modeling, cognitive puzzles, and fine motor work." },
    { time: "10:30 AM", title: "Healthy Mealtime & Social Play", desc: "Washing hands, developing table manners, and sharing healthy bites with friends." },
    { time: "11:00 AM", title: "Core Academics & Literacy", desc: "Phonics, mathematical play, writing exercises, and bilingual storytelling sessions." },
    { time: "12:15 PM", title: "Outdoor Physical Play", desc: "Running, climbing, sandbox games, and coordinated team activities." },
    { time: "01:30 PM", title: "Review & Goodbye Circle", desc: "Reflecting on achievements, cleaning spaces, and singing the departure song." },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background text-dark-text selection:bg-primary-yellow/30">
      <Navbar />

      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <section className="relative overflow-hidden py-16 lg:py-24 px-4 sm:px-6">
          {/* Asymmetrical background curves */}
          <div className="absolute top-[-20%] left-[-10%] w-[50%] aspect-square bg-primary-yellow/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[45%] aspect-square bg-primary-red/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Text Content */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left relative z-10">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary-yellow/20 text-dark-text border border-primary-yellow/40 self-start">
                <Sparkles className="h-3.5 w-3.5 text-primary-yellow fill-current" />
                Premium Preschool Education
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-text leading-[1.1] font-heading dark:text-foreground">
                Nurturing <span className="text-primary-red">Wings</span> for Curious Minds
              </h1>
              
              <p className="text-base sm:text-lg text-muted-foreground font-sans leading-relaxed max-w-xl">
                My Wings Academy combines state-of-the-art safety, emotional care, and cognitive curriculum to ensure your child builds confidence, creativity, and a lifelong love for learning.
              </p>

              <div className="flex flex-wrap gap-4 mt-2">
                <Button asChild size="lg" className="rounded-full bg-primary-yellow text-dark-text hover:bg-primary-yellow/90 border-2 border-dark-text font-bold shadow-warm px-8 py-6 cursor-pointer">
                  <Link href="/admissions" id="hero-cta-inquire">
                    Schedule a Visit
                  </Link>
                </Button>
                <Button asChild size="lg" variant="ghost" className="rounded-full border-2 border-dark-text/20 font-bold hover:bg-primary-yellow/10 px-8 py-6 text-dark-text dark:text-foreground cursor-pointer">
                  <Link href="/programs" id="hero-cta-programs">
                    Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Safety Quick Badges */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-border/20 max-w-md mt-4">
                <div className="flex flex-col items-center text-center p-2 rounded-2xl bg-cream-card/50 border border-border/30">
                  <Shield className="h-5 w-5 text-brand-green mb-1" />
                  <span className="text-xs font-bold font-sans">CCTV Monitored</span>
                </div>
                <div className="flex flex-col items-center text-center p-2 rounded-2xl bg-cream-card/50 border border-border/30">
                  <Heart className="h-5 w-5 text-primary-red mb-1" />
                  <span className="text-xs font-bold font-sans">1:8 Ratio</span>
                </div>
                <div className="flex flex-col items-center text-center p-2 rounded-2xl bg-cream-card/50 border border-border/30">
                  <Award className="h-5 w-5 text-brand-blue mb-1" />
                  <span className="text-xs font-bold font-sans">Play Curriculum</span>
                </div>
              </div>
            </div>

            {/* Asymmetrical Photo Blob Section */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="w-full max-w-[400px] aspect-square relative">
                {/* Asymmetrical Blob Wrapper */}
                <OrganicBlobImage
                  src="/images/hero/hero-child.png"
                  alt="Happy toddler learning at My Wings Academy"
                  shape={1}
                  color="yellow"
                  placeholderIcon="smile"
                />
                {/* Tiny absolute highlights */}
                <div className="absolute -top-3 -right-3 h-14 w-14 rounded-2xl bg-brand-pink flex items-center justify-center border-2 border-dark-text shadow-sm rotate-12 animate-pulse hidden sm:flex">
                  <Smile className="h-7 w-7 text-dark-text" />
                </div>
                <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-3xl bg-brand-blue flex items-center justify-center border-2 border-dark-text shadow-sm -rotate-12 hidden sm:flex">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHY PARENTS CHOOSE US (Credibility Stats) */}
        <section ref={metricsRef} className="py-16 bg-cream-card border-y-2 border-dashed border-border/60">
          <div className="container mx-auto px-4 sm:px-6">
            <SectionHeader
              title="Why My Wings Academy?"
              subtitle="We set new standards in early educational support, ensuring safety and quality structure at every step."
              badge="Credibility"
              badgeColor="red"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
              {[
                { label: "Happy Students", count: 450, suffix: "+", color: "text-primary-red" },
                { label: "Child-to-Teacher Ratio", count: 8, suffix: ":1", color: "text-brand-green" },
                { label: "Safety Audits/Year", count: 24, suffix: "", color: "text-brand-blue" },
                { label: "Experienced Staff", count: 32, suffix: "+", color: "text-brand-orange" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-6 rounded-[1.5rem] border-2 border-dark-text bg-background shadow-warm hover:scale-[1.02] transition-transform"
                >
                  <span className={`text-3xl md:text-4xl font-extrabold font-heading block mb-1 ${stat.color}`}>
                    {metricsInView ? (
                      <CountUp start={0} end={stat.count} duration={2} suffix={stat.suffix} />
                    ) : (
                      <span>0{stat.suffix}</span>
                    )}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. LEARNING PROGRAMS */}
        <section className="py-20 px-4 sm:px-6">
          <div className="container mx-auto">
            <SectionHeader
              title="Our Learning Programs"
              subtitle="Tailored curriculum modules structured around developmental milestones and age brackets."
              badge="Curriculum"
              badgeColor="green"
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
            >
              {programs.map((prog, index) => {
                const ProgIcon = prog.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`flex flex-col justify-between p-6 rounded-[2rem] border-2 border-dark-text bg-cream-card shadow-warm hover:y-[-4px] transition-all group`}
                  >
                    <div>
                      <div className={`h-12 w-12 rounded-2xl ${prog.accent}/25 border border-dark-text flex items-center justify-center mb-4 transition-transform group-hover:rotate-12`}>
                        <ProgIcon className="h-6 w-6 text-dark-text" />
                      </div>
                      <h3 className="text-xl font-bold font-heading text-dark-text mb-1 dark:text-foreground">
                        {prog.title}
                      </h3>
                      <span className="inline-block text-xs font-bold bg-dark-text/5 text-dark-text dark:bg-foreground/15 dark:text-foreground px-2.5 py-1 rounded-full mb-3">
                        {prog.age}
                      </span>
                      <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                        {prog.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border/20">
                      <Link
                        href="/programs"
                        className="inline-flex items-center text-xs font-bold text-primary-red hover:underline gap-1 group-hover:gap-1.5 transition-all"
                        id={`program-link-${prog.title.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        Explore Program Details <ChevronRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* 4. DAILY ACTIVITIES */}
        <section ref={timelineRef} className="py-20 bg-cream-card/50 border-t-2 border-border/40 px-4 sm:px-6">
          <div className="container mx-auto">
            <SectionHeader
              title="A Typical Day at My Wings"
              subtitle="We maintain a predictable yet creative routine that balances active play with cognitive modules."
              badge="Daily Routine"
              badgeColor="blue"
            />

            <div className="mt-12 max-w-3xl mx-auto flex flex-col gap-6 relative before:absolute before:left-4 sm:before:left-1/2 before:top-2 before:bottom-2 before:w-0.5 before:bg-dark-text/20">
              {schedule.map((item, index) => {
                const isEven = index % 2 === 0
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    animate={timelineInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={cn(
                      "flex flex-col sm:flex-row items-start sm:items-center justify-between w-full relative",
                      isEven ? "sm:flex-row-reverse" : ""
                    )}
                  >
                    {/* Time Bubble */}
                    <div className="absolute left-2 sm:left-1/2 -translate-x-1/2 flex items-center justify-center h-5 w-5 rounded-full bg-primary-yellow border-2 border-dark-text z-10" />

                    {/* Content Card */}
                    <div className={cn(
                      "w-full sm:w-[45%] ml-10 sm:ml-0 p-5 rounded-2xl border-2 border-dark-text bg-background shadow-sm",
                      isEven ? "sm:text-right" : "sm:text-left"
                    )}>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-primary-red mb-1">
                        <Clock className="h-3 w-3" />
                        {item.time}
                      </span>
                      <h4 className="font-heading text-base font-bold text-dark-text dark:text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground font-sans mt-1.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Empty block for layout alignment */}
                    <div className="hidden sm:block w-[45%]" />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 5. FACILITIES PREVIEW */}
        <section className="py-20 px-4 sm:px-6">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image masonry preview */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <OrganicBlobImage
                  src="/images/facilities/classroom.png"
                  alt="Modern creative classrooms"
                  shape={2}
                  color="blue"
                  placeholderIcon="art"
                />
                <OrganicBlobImage
                  src="/images/facilities/play-area.png"
                  alt="Safe child play areas"
                  shape={4}
                  color="green"
                  placeholderIcon="smile"
                />
              </div>
              <div className="flex flex-col gap-4 justify-center">
                <OrganicBlobImage
                  src="/images/facilities/learning-space.png"
                  alt="Modern learning spaces"
                  shape={3}
                  color="red"
                  placeholderIcon="education"
                />
              </div>
            </div>

            {/* Description content */}
            <div className="lg:col-span-6 flex flex-col gap-6 text-left">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/15 text-brand-blue border border-brand-blue/30 self-start">
                Environment
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark-text leading-tight font-heading dark:text-foreground">
                Safe & Stimulating Learning Environments
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                At My Wings Academy, environment design goes beyond standard templates. Our facilities feature child-friendly rounded designs, anti-bacterial surfaces, CCTV coverage across all corners, and separate zones for active indoor crafts and tranquil reading.
              </p>

              <div className="flex flex-col gap-3 font-sans mt-2">
                {[
                  "Biometric parent access and gate security guards",
                  "Air-conditioned smart classrooms with soft lighting",
                  "Fully sanitized Montessori wood toys (No microplastics)",
                  "Custom active sand pits & sensory gardening spaces",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-dark-text/90 dark:text-foreground/90">
                    <CheckCircle className="h-4.5 w-4.5 text-brand-green shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <Button asChild className="rounded-full bg-primary-yellow text-dark-text hover:bg-primary-yellow/90 border-2 border-dark-text font-bold shadow-warm px-6 py-5 cursor-pointer">
                  <Link href="/facilities" id="facilities-preview-more">
                    Tour Our Facilities
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 6. GALLERY PREVIEW */}
        <section className="py-20 bg-cream-card/30 border-y-2 border-dashed border-border/40 px-4 sm:px-6">
          <div className="container mx-auto">
            <SectionHeader
              title="Peek Into Our World"
              subtitle="Explore activities, annual events, celebrations, and daily creations by our toddlers."
              badge="Gallery Preview"
              badgeColor="yellow"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { title: "Fun Sports Meet", shape: 1, color: "yellow", icon: "trophy" },
                { title: "Finger Painting Art", shape: 2, color: "red", icon: "art" },
                { title: "Clay Modeling Craft", shape: 3, color: "blue", icon: "smile" },
                { title: "Children's Theater Stage", shape: 4, color: "green", icon: "sparkles" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3">
                  <OrganicBlobImage
                    alt={item.title}
                    shape={item.shape as 1|2|3|4}
                    color={item.color as "yellow"|"red"|"blue"|"green"}
                    placeholderIcon={item.icon as any}
                  />
                  <span className="font-heading font-semibold text-xs text-dark-text/80 text-center dark:text-foreground/80 mt-1">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button asChild variant="outline" className="rounded-full border-2 border-dark-text hover:bg-primary-yellow/10 font-bold px-6 py-5 text-dark-text dark:text-foreground cursor-pointer">
                <Link href="/gallery" id="gallery-preview-more">
                  View Full Gallery
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 7. PARENT TESTIMONIALS */}
        <section className="py-20 px-4 sm:px-6 overflow-hidden">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader
              title="What Parents Say"
              subtitle="Listen to testimonies of child confidence and educational milestones from our parent community."
              badge="Testimonials"
              badgeColor="red"
            />

            {/* Testimonials Slideshow mockup */}
            <div className="mt-12 bg-cream-card border-2 border-dark-text rounded-[2rem] p-6 sm:p-10 shadow-warm relative">
              <div className="absolute top-[-15px] left-6 h-8 w-8 rounded-lg bg-primary-red text-white flex items-center justify-center border border-dark-text shadow-sm rotate-6">
                <Heart className="h-4 w-4 fill-current" />
              </div>

              <div className="flex flex-col gap-4 text-center items-center">
                <div className="h-14 w-14 rounded-full bg-primary-yellow/20 border-2 border-primary-yellow flex items-center justify-center text-primary-yellow text-xl font-bold font-heading">
                  R
                </div>
                <p className="text-base sm:text-lg italic font-sans text-dark-text/90 leading-relaxed dark:text-foreground/90 max-w-2xl">
                  "My child Aarav was very shy and refused to interact. After just 3 months at My Wings Academy, he started humming school rhymes, sorting toys independently, and looking forward to school every single morning! The CCTV security access gives me peace of mind throughout the day."
                </p>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-sm text-dark-text dark:text-foreground">
                    Shalini Sharma
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Mother of Aarav (Nursery student)
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/testimonials" className="text-sm font-bold text-primary-red hover:underline" id="testimonials-read-all">
                Read all parent stories &bull;
              </Link>
            </div>
          </div>
        </section>

        {/* 8. ADMISSION CTA */}
        <section className="py-16 bg-primary-yellow border-t-2 border-b-2 border-dark-text px-4 sm:px-6 relative overflow-hidden">
          {/* Fun dotted accent patterns */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2d2d2d_2px,transparent_2px)] [background-size:16px_16px]" />
          
          <div className="container mx-auto max-w-3xl text-center relative z-10 flex flex-col gap-6 items-center">
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-dark-text leading-tight">
              Admissions Open for Term 2026-27!
            </h2>
            <p className="text-sm sm:text-base text-dark-text/80 max-w-xl font-sans font-medium">
              We maintain tiny class sizes to guarantee individual care. Secure your slot and schedule a physical school tour today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full bg-primary-red text-white hover:bg-primary-red/90 border-2 border-dark-text font-bold shadow-warm px-8 py-6 cursor-pointer">
                <Link href="/admissions" id="cta-enroll-now">
                  Apply Online Now
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-full border-2 border-dark-text bg-background text-dark-text hover:bg-muted font-bold px-8 py-6 cursor-pointer">
                <Link href="/contact" id="cta-contact-school">
                  Get Information Kit
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 9. CONTACT PREVIEW */}
        <section className="py-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-5xl">
            <SectionHeader
              title="Visit Us Today"
              subtitle="Drop by for a school preview or schedule a direct consultation."
              badge="Locate Us"
              badgeColor="green"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 items-center">
              {/* Address details */}
              <div className="flex flex-col gap-6 p-6 sm:p-8 rounded-[2rem] border-2 border-dark-text bg-cream-card shadow-warm">
                <h3 className="font-heading text-xl font-bold text-dark-text dark:text-foreground">
                  My Wings Academy Office
                </h3>
                
                <div className="flex flex-col gap-4 font-sans text-sm">
                  <div className="flex items-start gap-3">
                    <span className="h-8 w-8 rounded-full bg-primary-red/10 border border-primary-red/20 flex items-center justify-center text-primary-red shrink-0 font-bold">1</span>
                    <div>
                      <span className="font-bold block text-dark-text dark:text-foreground">Address</span>
                      <span className="text-muted-foreground">123 Wings Way, Sector 4, Creative Kidz Circle, New Delhi 110001</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="h-8 w-8 rounded-full bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-brand-green shrink-0 font-bold">2</span>
                    <div>
                      <span className="font-bold block text-dark-text dark:text-foreground">Phone & Chat</span>
                      <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary-red transition-colors">+91 98765 43210</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="h-8 w-8 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue shrink-0 font-bold">3</span>
                    <div>
                      <span className="font-bold block text-dark-text dark:text-foreground">Email Support</span>
                      <a href="mailto:admissions@mywingsacademy.com" className="text-muted-foreground hover:text-primary-red transition-colors">admissions@mywingsacademy.com</a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/20 flex gap-3">
                  <Button asChild size="sm" className="rounded-full bg-brand-green hover:bg-brand-green/90 text-white font-bold cursor-pointer">
                    <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" id="preview-whatsapp-chat">
                      Chat on WhatsApp
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="rounded-full border-2 border-dark-text text-dark-text dark:text-foreground font-bold hover:bg-muted cursor-pointer">
                    <Link href="/contact" id="preview-contact-details">
                      View Contact Details
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Map Placeholder Graphic */}
              <div className="h-64 sm:h-80 w-full border-2 border-dark-text rounded-[2rem] shadow-warm bg-brand-blue/10 relative overflow-hidden flex flex-col justify-center items-center text-center p-6 border-dashed">
                <Compass className="h-10 w-10 text-brand-blue animate-spin mb-3" />
                <span className="font-heading font-bold text-dark-text/80 dark:text-foreground/80">Interactive School Map</span>
                <span className="text-xs text-muted-foreground mt-1 max-w-xs leading-relaxed">
                  Located near the clean metro-park circle, easily reachable via local buses and central school cabs.
                </span>
                <Button asChild className="mt-4 rounded-full bg-white text-dark-text hover:bg-muted border border-dark-text text-xs cursor-pointer">
                  <Link href="/contact" id="preview-map-button">
                    Open Directions
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
