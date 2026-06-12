"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
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
  Baby,
  Palette,
  Music,
  Lock,
  CheckCircle2,
  Utensils,
  Star,
  Users,
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
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
      
      const ctx = gsap.context(() => {
        // 1. Hero Entrance Timeline
        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } })
        tl.fromTo(".hero-badge", { opacity: 0, y: -20 }, { opacity: 1, y: 0 })
          .fromTo(".hero-title", { opacity: 0, y: 25 }, { opacity: 1, y: 0 }, "-=0.6")
          .fromTo(".hero-desc", { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, "-=0.6")
          .fromTo(".hero-cta", { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, stagger: 0.1 }, "-=0.6")
          .fromTo(".hero-trust", { opacity: 0, y: 15 }, { opacity: 1, y: 0 }, "-=0.6")
          .fromTo(".hero-blob-wrapper", { opacity: 0, scale: 0.9, rotation: -3 }, { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "back.out(1.2)" }, "-=0.8")

        // 2. Floating shapes infinite bounce
        gsap.to(".floating-shape-1", { y: "-=20", rotation: 15, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" })
        gsap.to(".floating-shape-2", { y: "+=15", rotation: -12, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut" })
        gsap.to(".floating-shape-3", { x: "+=12", y: "-=12", duration: 4.5, repeat: -1, yoyo: true, ease: "sine.inOut" })

        // 3. Metrics Stagger
        gsap.fromTo(".metric-card",
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.08,
            duration: 0.7,
            ease: "back.out(1.3)",
            scrollTrigger: {
              trigger: ".metrics-section",
              start: "top 85%",
            }
          }
        )

        // 4. Programs Card Stagger
        gsap.fromTo(".program-card",
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".programs-section",
              start: "top 80%",
            }
          }
        )

        // 5. Day Care Sections ScrollTrigger
        gsap.fromTo(".daycare-text",
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".daycare-section",
              start: "top 80%",
            }
          }
        )
        gsap.fromTo(".daycare-card",
          { opacity: 0, scale: 0.95, y: 15 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.6,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: ".daycare-section",
              start: "top 75%",
            }
          }
        )

        // 6. Activity Hub ScrollTrigger
        gsap.fromTo(".activity-card",
          { opacity: 0, scale: 0.9, rotation: -2 },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            stagger: 0.06,
            duration: 0.6,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: ".activity-section",
              start: "top 80%",
            }
          }
        )
        gsap.fromTo(".activity-text",
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".activity-section",
              start: "top 80%",
            }
          }
        )

        // 7. Tuitions Section ScrollTrigger
        gsap.fromTo(".tuition-text",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".tuition-section",
              start: "top 80%",
            }
          }
        )
        gsap.fromTo(".tuition-card",
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".tuition-section",
              start: "top 80%",
            }
          }
        )

        // 8. Daily Routine Timeline ScrollTrigger
        gsap.fromTo(".timeline-item",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".timeline-section",
              start: "top 80%",
            }
          }
        )

        // 9. Facilities Section ScrollTrigger
        gsap.fromTo(".facilities-grid",
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".facilities-section",
              start: "top 80%",
            }
          }
        )
        gsap.fromTo(".facilities-text",
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".facilities-section",
              start: "top 80%",
            }
          }
        )

        // 10. Safety Cards ScrollTrigger
        gsap.fromTo(".safety-card",
          { opacity: 0, y: 25, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.08,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".safety-section",
              start: "top 80%",
            }
          }
        )

        // 11. Events Showcase Cards ScrollTrigger
        gsap.fromTo(".event-card",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".events-section",
              start: "top 80%",
            }
          }
        )

        // 12. Gallery Blobs ScrollTrigger
        gsap.fromTo(".gallery-item",
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            stagger: 0.08,
            duration: 0.6,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: ".gallery-section",
              start: "top 80%",
            }
          }
        )

        // 13. Testimonials & Google Reviews ScrollTrigger
        gsap.fromTo(".testimonial-card",
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".testimonials-section",
              start: "top 80%",
            }
          }
        )
        gsap.fromTo(".google-review-item",
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            stagger: 0.08,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".testimonials-section",
              start: "top 80%",
            }
          }
        )

        // 14. Admissions CTA ScrollTrigger
        gsap.fromTo(".admissions-cta-content",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".admissions-cta-section",
              start: "top 85%",
            }
          }
        )

        // 15. Visit Us / Contact ScrollTrigger
        gsap.fromTo(".contact-card",
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: ".contact-preview-section",
              start: "top 80%",
            }
          }
        )
        gsap.fromTo(".contact-map",
          { opacity: 0, scale: 0.98 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: ".contact-preview-section",
              start: "top 80%",
            }
          }
        )

      }, containerRef)

      return () => ctx.revert()
    }
  }, [])

  // Curated programs data
  const programs = [
    {
      title: "Fun Club (Playgroup)",
      age: "2 - 3 Years",
      desc: "Sensory learning, emotional bonding, and primary motor skill exercises through play.",
      color: "bg-brand-pink/20 text-dark-text border-brand-pink",
      accent: "bg-brand-pink",
      icon: Smile,
    },
    {
      title: "Nursery",
      age: "3 - 4 Years",
      desc: "Speech expansion, vocabulary building, circle time, and early socialization.",
      color: "bg-brand-green/20 text-dark-text border-brand-green",
      accent: "bg-brand-green",
      icon: Sparkles,
    },
    {
      title: "LKG",
      age: "4 - 5 Years",
      desc: "Phonics, character tracing, shape recognition, and early mathematical play.",
      color: "bg-brand-blue/20 text-dark-text border-brand-blue",
      accent: "bg-brand-blue",
      icon: Compass,
    },
    {
      title: "SR KG",
      age: "5 - 6 Years",
      desc: "Advanced reading readiness, simple math operations, and public speaking prep.",
      color: "bg-brand-purple/20 text-dark-text border-brand-purple",
      accent: "bg-brand-purple",
      icon: GraduationCap,
    },
    {
      title: "Grade 1 Foundation",
      age: "6 - 7 Years",
      desc: "Creative critical thinking, formal sentence writing, and primary school transition readiness.",
      color: "bg-brand-orange/20 text-dark-text border-brand-orange",
      accent: "bg-brand-orange",
      icon: Award,
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

      <main ref={containerRef} className="flex-1">
        {/* 1. HERO SECTION */}
        <section className="relative overflow-hidden py-16 lg:py-24 px-4 sm:px-6">
          {/* Asymmetrical background curves */}
          <div className="absolute top-[-20%] left-[-10%] w-[50%] aspect-square bg-primary-yellow/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[45%] aspect-square bg-primary-red/10 rounded-full blur-3xl pointer-events-none" />

          {/* Floating Shapes */}
          <div className="absolute top-[10%] left-[4%] w-10 h-10 bg-primary-yellow/20 rounded-full border border-primary-yellow/40 flex items-center justify-center floating-shape-1 pointer-events-none z-0 hidden sm:flex">
            <Smile className="h-5 w-5 text-primary-yellow" />
          </div>
          <div className="absolute top-[35%] right-[5%] w-12 h-12 bg-brand-pink/20 rounded-[40%_60%_60%_40%] border border-brand-pink/40 flex items-center justify-center floating-shape-2 pointer-events-none z-0 hidden sm:flex">
            <Heart className="h-5 w-5 text-brand-pink" />
          </div>
          <div className="absolute bottom-[8%] left-[18%] w-9 h-9 bg-brand-blue/20 rounded-[60%_40%_30%_70%] border border-brand-blue/40 flex items-center justify-center floating-shape-3 pointer-events-none z-0 hidden sm:flex">
            <Sparkles className="h-4.5 w-4.5 text-brand-blue" />
          </div>

          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Text Content */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left relative z-10">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary-yellow/20 text-dark-text border border-primary-yellow/40 self-start hero-badge">
                <Sparkles className="h-3.5 w-3.5 text-primary-yellow fill-current" />
                Premium Preschool Vadodara
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-text leading-[1.1] font-heading dark:text-foreground hero-title">
                Giving Every Child the <span className="text-primary-red">Wings</span> of Education, Confidence & Success Since 2011
              </h1>
              
              <p className="text-base sm:text-lg text-muted-foreground font-sans leading-relaxed max-w-xl hero-desc">
                A nurturing preschool in Vadodara where children learn through play, creativity, exploration, and joyful experiences—helping them truly Fly High to Sky.
              </p>

              <div className="flex flex-wrap gap-4 mt-2 hero-cta">
                <Button asChild size="lg" className="rounded-full bg-primary-yellow text-dark-text hover:bg-primary-yellow/90 border-2 border-dark-text font-bold shadow-warm px-8 py-6 cursor-pointer">
                  <Link href="/admissions" id="hero-cta-inquire">
                    Book a School Visit
                  </Link>
                </Button>
                <Button asChild size="lg" variant="ghost" className="rounded-full border-2 border-dark-text/20 font-bold hover:bg-primary-yellow/10 px-8 py-6 text-dark-text dark:text-foreground cursor-pointer">
                  <Link href="/admissions" id="hero-cta-programs">
                    Admissions Open 2026–27 <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Safety Quick Badges */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-border/20 max-w-md mt-4 hero-trust">
                <div className="flex flex-col items-center text-center p-2 rounded-2xl bg-cream-card/50 border border-border/30 shadow-sm">
                  <Shield className="h-5 w-5 text-brand-green mb-1" />
                  <span className="text-xs font-bold font-sans">CCTV Monitored</span>
                </div>
                <div className="flex flex-col items-center text-center p-2 rounded-2xl bg-cream-card/50 border border-border/30 shadow-sm">
                  <Heart className="h-5 w-5 text-primary-red mb-1" />
                  <span className="text-xs font-bold font-sans">1:8 Ratio</span>
                </div>
                <div className="flex flex-col items-center text-center p-2 rounded-2xl bg-cream-card/50 border border-border/30 shadow-sm">
                  <Award className="h-5 w-5 text-brand-blue mb-1" />
                  <span className="text-xs font-bold font-sans">Play Curriculum</span>
                </div>
              </div>
            </div>

            {/* Asymmetrical Photo Blob Section */}
            <div className="lg:col-span-5 relative flex justify-center hero-blob-wrapper">
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
        <section ref={metricsRef} className="py-16 bg-cream-card border-y-2 border-dashed border-border/60 metrics-section">
          <div className="container mx-auto px-4 sm:px-6">
            <SectionHeader
              title="Why My Wings Academy?"
              subtitle="We set new standards in early educational support, ensuring safety and quality structure at every step."
              badge="Credibility"
              badgeColor="red"
            />

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12 text-center">
              {[
                { label: "Students Nurtured", count: 1500, suffix: "+", color: "text-primary-red" },
                { label: "Years Experience", count: 20, suffix: "+", color: "text-brand-green" },
                { label: "Teacher Ratio", count: 8, prefix: "1:", suffix: "", color: "text-brand-blue" },
                { label: "Dedicated Staff", count: 15, suffix: "+", color: "text-brand-orange" },
                { label: "Established Year", count: 2011, suffix: "", color: "text-brand-purple" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-5 rounded-[1.5rem] border-2 border-dark-text bg-background shadow-warm hover:scale-[1.02] transition-transform metric-card"
                >
                  <span className={`text-2xl md:text-3xl font-extrabold font-heading block mb-1 ${stat.color}`}>
                    {stat.prefix || ""}
                    {metricsInView ? (
                      <CountUp start={0} end={stat.count} duration={2} suffix={stat.suffix} separator="" />
                    ) : (
                      <span>0{stat.suffix}</span>
                    )}
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. LEARNING PROGRAMS */}
        <section className="py-20 px-4 sm:px-6 programs-section">
          <div className="container mx-auto">
            <SectionHeader
              title="Our Learning Programs"
              subtitle="Tailored curriculum modules structured around developmental milestones and age brackets."
              badge="Curriculum"
              badgeColor="green"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
              {programs.map((prog, index) => {
                const ProgIcon = prog.icon
                return (
                  <div
                    key={index}
                    className="flex flex-col justify-between p-5 rounded-[2rem] border-2 border-dark-text bg-cream-card shadow-warm hover:y-[-4px] transition-all group program-card"
                  >
                    <div>
                      <div className={`h-12 w-12 rounded-2xl ${prog.accent}/25 border border-dark-text flex items-center justify-center mb-4 transition-transform group-hover:rotate-12`}>
                        <ProgIcon className="h-6 w-6 text-dark-text" />
                      </div>
                      <h3 className="text-lg font-bold font-heading text-dark-text mb-1 dark:text-foreground">
                        {prog.title}
                      </h3>
                      <span className="inline-block text-xs font-bold bg-dark-text/5 text-dark-text dark:bg-foreground/15 dark:text-foreground px-2.5 py-1 rounded-full mb-3">
                        {prog.age}
                      </span>
                      <p className="text-xs font-sans text-muted-foreground leading-relaxed">
                        {prog.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border/20">
                      <Link
                        href="/programs"
                        className="inline-flex items-center text-xs font-bold text-primary-red hover:underline gap-1 group-hover:gap-1.5 transition-all"
                        id={`program-link-${prog.title.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        Explore Details <ChevronRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 3.1. DAY CARE & CHILD CARE SECTION */}
        <section className="py-20 bg-cream-card/30 border-t-2 border-dashed border-border/40 px-4 sm:px-6 daycare-section">
          <div className="container mx-auto max-w-6xl">
            <SectionHeader
              title="Day Care & Child Care Services"
              subtitle="A home away from home with a motherly, safe, and nurturing environment for children of working parents."
              badge="Day Care"
              badgeColor="yellow"
            />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-center">
              <div className="lg:col-span-5 flex flex-col gap-6 text-left daycare-text">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary-yellow/20 text-dark-text border border-primary-yellow/40 self-start">
                  <Clock className="h-3.5 w-3.5" /> 8:00 AM – 7:00 PM
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-dark-text dark:text-foreground">
                  Personalized Care from 4 Months Onwards
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We understand that balancing work and family is demanding. Our daycare facility offers half-day and full-day options where babies and toddlers are handled by loving, full-time caring mothers and trained caregivers.
                </p>
                <div className="flex flex-col gap-3 font-sans">
                  {[
                    "Motherly & caring environment with constant supervision",
                    "Full-time dedicated staff providing individual attention",
                    "Nutritious healthy meals & snack schedules",
                    "Perfect home away from home for your little ones",
                  ].map((pt, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-dark-text/90">
                      <CheckCircle2 className="h-4.5 w-4.5 text-brand-green shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Button asChild className="rounded-full bg-primary-red text-white hover:bg-primary-red/90 border-2 border-dark-text font-bold shadow-warm px-6 py-5 cursor-pointer">
                    <Link href="/admissions?service=daycare" id="daycare-cta">
                      Inquire for Day Care
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "CCTV Monitoring", desc: "Keep an eye on your child with real-time feed relays.", icon: Shield },
                  { title: "Indoor Activities", desc: "Sensory games, puzzle play, and story reading.", icon: Smile },
                  { title: "Outdoor Activities", desc: "Safe playground interactions under mentor eyes.", icon: Compass },
                  { title: "Nap & Rest Area", desc: "Clean, cozy, air-conditioned sleeping zones.", icon: Clock },
                  { title: "Homework Assistance", desc: "Dedicated support for school-going kids.", icon: BookOpen },
                  { title: "Continuous Care", desc: "Nurses and caretakers available at all times.", icon: Heart },
                ].map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <div key={idx} className="p-5 rounded-2xl border-2 border-dark-text bg-background hover:scale-[1.02] transition-transform shadow-sm flex gap-3 text-left daycare-card">
                      <div className="h-10 w-10 rounded-xl bg-primary-yellow/20 border border-dark-text flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5 text-dark-text" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-sm text-dark-text dark:text-foreground">{item.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 3.2. ACTIVITY HUB SECTION */}
        <section className="py-20 bg-background border-t-2 border-dashed border-border/40 px-4 sm:px-6 activity-section">
          <div className="container mx-auto max-w-6xl">
            <SectionHeader
              title="Creative Activity Hub"
              subtitle="Lively weekend and after-school programs designed to explore creative thinking, motor skills, and confidence."
              badge="Activity Hub"
              badgeColor="blue"
            />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-center">
              <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-4 order-last lg:order-first">
                {[
                  { name: "Drawing & Painting", icon: Palette, color: "bg-brand-pink/10 border-brand-pink" },
                  { name: "Art & Craft Work", icon: Palette, color: "bg-brand-green/10 border-brand-green" },
                  { name: "Dance & Motion", icon: Music, color: "bg-brand-blue/10 border-brand-blue" },
                  { name: "Music & Rhythms", icon: Music, color: "bg-brand-purple/10 border-brand-purple" },
                  { name: "Storytelling Circle", icon: Smile, color: "bg-brand-orange/10 border-brand-orange" },
                  { name: "Public Speaking", icon: Award, color: "bg-primary-yellow/15 border-primary-yellow" },
                  { name: "Fine Motor Skills", icon: Sparkles, color: "bg-brand-pink/10 border-brand-pink" },
                  { name: "Gross Motor Skills", icon: Compass, color: "bg-brand-green/10 border-brand-green" },
                  { name: "Fun Workshops", icon: BookOpen, color: "bg-brand-blue/10 border-brand-blue" },
                ].map((act, idx) => {
                  const Icon = act.icon
                  return (
                    <div key={idx} className={`p-4 rounded-2xl border border-dark-text ${act.color} flex flex-col items-center justify-center text-center gap-2 hover:scale-105 transition-transform shadow-sm activity-card`}>
                      <Icon className="h-5 w-5 text-dark-text" />
                      <span className="font-heading font-bold text-xs text-dark-text">{act.name}</span>
                    </div>
                  )
                })}
              </div>
              <div className="lg:col-span-6 flex flex-col gap-6 text-left activity-text">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/15 text-brand-blue border border-brand-blue/30 self-start">
                  Saturday Programs Available
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-dark-text dark:text-foreground">
                  Open for Internal & External Students
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  No age restriction! Our Activity Hub brings together early learners and school kids for fun workshops, fine-art exploration, motor skill enhancement, and personality development modules.
                </p>
                <div className="flex flex-col gap-3 font-sans">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="h-4.5 w-4.5 text-brand-green shrink-0 mt-0.5" />
                    <span className="text-sm text-dark-text/90"><strong>No Student Boundary:</strong> Enrolments welcome from all schools in Vadodara.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="h-4.5 w-4.5 text-brand-green shrink-0 mt-0.5" />
                    <span className="text-sm text-dark-text/90"><strong>Motor-Skill Milestones:</strong> Handcrafting, paint mixing, and physical coordination activities.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="h-4.5 w-4.5 text-brand-green shrink-0 mt-0.5" />
                    <span className="text-sm text-dark-text/90"><strong>Saturday Workshops:</strong> Weekly customized modules keeping weekends fun and productive.</span>
                  </div>
                </div>
                <div className="mt-2">
                  <Button asChild className="rounded-full bg-primary-yellow text-dark-text hover:bg-primary-yellow/90 border-2 border-dark-text font-bold shadow-warm px-6 py-5 cursor-pointer">
                    <Link href="/admissions?service=activityhub" id="activity-hub-cta">
                      Join Our Saturday Hub
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3.3. TUITION CLASSES SECTION */}
        <section className="py-20 bg-cream-card/20 border-t-2 border-dashed border-border/40 px-4 sm:px-6 tuition-section">
          <div className="container mx-auto max-w-6xl">
            <SectionHeader
              title="Academic Support & Tuitions"
              subtitle="Personalized academic learning classes led by experienced educators to build a solid concept base."
              badge="Tuition Classes"
              badgeColor="green"
            />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-center">
              <div className="lg:col-span-6 flex flex-col gap-6 text-left tuition-text">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-green/10 text-brand-green border border-brand-green/20 self-start">
                  Nursery to Grade 10
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-dark-text dark:text-foreground">
                  CBSE • ICSE • GSEB Board Coverage
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We provide comprehensive support in all subjects, ensuring every child receives individual attention, homework guidance, exam preparation, and customized worksheets.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  {[
                    "Individualized attention key",
                    "Experienced school educators",
                    "Stress-free exam prep",
                    "Strong foundational math & science",
                    "Homework & writing guidance",
                    "Interactive regular revisions",
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-dark-text/90 font-sans">
                      <CheckCircle2 className="h-4.5 w-4.5 text-brand-green shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Button asChild className="rounded-full bg-primary-red text-white hover:bg-primary-red/90 border-2 border-dark-text font-bold shadow-warm px-6 py-5 cursor-pointer">
                    <Link href="/admissions?service=tuitions" id="tuitions-cta">
                      Enquire for Tuitions
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-6 p-6 sm:p-8 rounded-[2rem] border-2 border-dark-text bg-background shadow-warm flex flex-col gap-5 text-left tuition-card">
                <h4 className="font-heading text-xl font-bold text-dark-text dark:text-foreground border-b border-border pb-3 flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary-red" />
                  Tuition Key Deliverables
                </h4>
                <div className="flex flex-col gap-4">
                  {[
                    { title: "Personalized Support", desc: "No overcrowded rooms. Our teachers follow customized speed indices for each child." },
                    { title: "Weekly Revision Tests", desc: "Regular evaluation mapping progress and clearing logical doubts before exam weeks." },
                    { title: "Writing & Homework Help", desc: "Solving school tasks step-by-step to reinforce primary concepts learned." },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="h-7 w-7 rounded-full bg-primary-yellow/20 border border-dark-text flex items-center justify-center shrink-0 font-heading font-bold text-xs text-dark-text mt-0.5">
                        {idx + 1}
                      </span>
                      <div>
                        <h5 className="font-heading font-bold text-sm text-dark-text dark:text-foreground">{item.title}</h5>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. DAILY ACTIVITIES */}
        <section ref={timelineRef} className="py-20 bg-cream-card/50 border-t-2 border-border/40 px-4 sm:px-6 timeline-section">
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
                  <div
                    key={index}
                    className={cn(
                      "flex flex-col sm:flex-row items-start sm:items-center justify-between w-full relative timeline-item",
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
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 5. FACILITIES PREVIEW */}
        <section className="py-20 px-4 sm:px-6 facilities-section">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image masonry preview */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 facilities-grid">
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
            <div className="lg:col-span-6 flex flex-col gap-6 text-left facilities-text">
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
                  <div key={idx} className="flex items-center gap-2 text-sm text-dark-text/90 dark:text-foreground/90 font-sans">
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

        {/* 5.1. SAFETY & SECURITY HIGHLIGHT */}
        <section className="py-20 bg-primary-red/5 border-t-2 border-dashed border-border/40 px-4 sm:px-6 safety-section">
          <div className="container mx-auto max-w-5xl">
            <SectionHeader
              title="Our Safety Guarantee"
              subtitle="Safety is our absolute baseline. We enforce strict supervision guidelines and verification systems."
              badge="Safety Shield"
              badgeColor="red"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { title: "Continuous CCTV", desc: "Full camera coverage in all classrooms and playyards.", icon: Shield },
                { title: "Controlled Entry", desc: "Gated checkpoints with mandatory visitor checks.", icon: Lock },
                { title: "Authorized Release", desc: "Children released ONLY to parents or verified guardians.", icon: Users },
                { title: "Staff Availability", desc: "15+ dedicated staff members keeping children supervised.", icon: Heart },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="p-6 rounded-[2rem] border-2 border-dark-text bg-background shadow-warm-red text-left safety-card">
                    <div className="h-10 w-10 rounded-xl bg-primary-red/10 border border-dark-text flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5 text-primary-red" />
                    </div>
                    <h4 className="font-heading font-bold text-base text-dark-text dark:text-foreground mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 5.2. EVENTS & CELEBRATIONS SECTION */}
        <section className="py-20 bg-background border-t-2 border-dashed border-border/40 px-4 sm:px-6 events-section">
          <div className="container mx-auto max-w-6xl">
            <SectionHeader
              title="Vibrant Events & Celebrations"
              subtitle="Bringing children, families, and teachers together for joyful milestones and active festivals."
              badge="Celebrations"
              badgeColor="yellow"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                { title: "Annual Day Celebrations", desc: "Grand cultural performances, music, and stage dramas.", icon: Sparkles, image: "/images/gallery/annual-1.png" },
                { title: "Sports Day Meet", desc: "Mini-athletics, obstacles, gymnastics, and parent races.", icon: Award, image: "/images/gallery/sports-1.png" },
                { title: "Garba Utsav & Garbi", desc: "Vibrant ethnic dress-up, traditional circle dance, and music.", icon: Smile, image: "/images/gallery/celebrations-1.png" },
                { title: "Janmashtami Celebrations", desc: "Krishna dress-up, pot breaking, and sweet sharing.", icon: Heart, image: "/images/gallery/celebrations-2.png" },
                { title: "SR KG Convocation", desc: "Graduation gown ceremonies, scroll distribution, and memory walks.", icon: GraduationCap, image: "/images/gallery/story-foundation.png" },
                { title: "Grandparents Day", desc: "Interactive story circles, puzzles, and respect ceremonies.", icon: Users, image: "/images/gallery/events-1.png" },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="border-2 border-dark-text rounded-[2rem] bg-cream-card overflow-hidden shadow-warm flex flex-col justify-between event-card">
                    <div className="p-3">
                      <div className="aspect-video relative rounded-2xl overflow-hidden border border-dark-text">
                        <OrganicBlobImage
                          src={item.image}
                          alt={item.title}
                          shape={1}
                          color="yellow"
                          placeholderIcon="smile"
                        />
                      </div>
                    </div>
                    <div className="p-5 pt-0 text-left">
                      <h4 className="font-heading font-bold text-base text-dark-text dark:text-foreground flex items-center gap-2">
                        <Icon className="h-4.5 w-4.5 text-primary-red shrink-0" />
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-10 font-sans">
              And more: Rangoli Competition &bull; Cooking Competition &bull; Fireless Cooking &bull; Kite Flying Festival &bull; Fancy Dress &bull; Free Doctor Check-Up Camps &bull; Independence Day &bull; Republic Day.
            </p>
          </div>
        </section>

        {/* 6. GALLERY PREVIEW */}
        <section className="py-20 bg-cream-card/30 border-y-2 border-dashed border-border/40 px-4 sm:px-6 gallery-section">
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
                <div key={idx} className="flex flex-col items-center gap-3 gallery-item">
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

        {/* 7. PARENT TESTIMONIALS & GOOGLE REVIEWS */}
        <section className="py-20 px-4 sm:px-6 overflow-hidden testimonials-section">
          <div className="container mx-auto max-w-5xl">
            <SectionHeader
              title="What Parents Say"
              subtitle="Listen to testimonies of child confidence and educational milestones from our parent community."
              badge="Testimonials"
              badgeColor="red"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 items-start">
              {/* Highlight Review */}
              <div className="bg-cream-card border-2 border-dark-text rounded-[2rem] p-6 sm:p-8 shadow-warm relative text-left testimonial-card">
                <div className="absolute top-[-15px] left-6 h-8 w-8 rounded-lg bg-primary-red text-white flex items-center justify-center border border-dark-text shadow-sm rotate-6">
                  <Heart className="h-4 w-4 fill-current" />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-1 text-primary-yellow">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current text-primary-yellow" />)}
                  </div>
                  <p className="text-sm sm:text-base italic font-sans text-dark-text/90 leading-relaxed dark:text-foreground/90">
                    "My child Aarav was very shy and refused to interact. After just 3 months at My Wings Academy, he started humming school rhymes, sorting toys independently, and looking forward to school every single morning! The CCTV security access gives me peace of mind throughout the day."
                  </p>
                  <div className="flex flex-col border-t border-border pt-4">
                    <span className="font-heading font-bold text-sm text-dark-text dark:text-foreground">
                      Shalini Sharma
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Mother of Aarav (Nursery student)
                    </span>
                  </div>
                </div>
              </div>

              {/* Google Reviews Showcase */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 font-heading font-bold text-dark-text mb-2 border-b border-border pb-2 justify-between">
                  <span className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary-yellow fill-current" />
                    Actual Google Reviews
                  </span>
                  <span className="text-xs text-muted-foreground font-sans">Google Trust Indicators Verified</span>
                </div>
                {[
                  { name: "Rahul Patel", rating: 5, date: "2 weeks ago", text: "Best preschool in Vadodara! Leena Ma'am and her staff provide motherly care. My son loves going to school everyday. The CCTV feed is an absolute relief for working parents." },
                  { name: "Sneha Amin", rating: 5, date: "1 month ago", text: "Excellent environment and play-based curriculum. My daughter's phonics and writing have improved. The daycare facilities are highly clean and well-monitored." },
                ].map((review, i) => (
                  <div key={i} className="p-4 rounded-2xl border border-dark-text bg-background text-left flex flex-col gap-2 shadow-sm google-review-item">
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-bold text-xs text-dark-text">{review.name}</span>
                      <span className="text-[10px] text-muted-foreground font-sans">{review.date}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {[...Array(review.rating)].map((_, idx) => (
                        <Star key={idx} className="h-3 w-3 fill-current text-primary-yellow" />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground font-sans leading-relaxed">"{review.text}"</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/testimonials" className="text-sm font-bold text-primary-red hover:underline" id="testimonials-read-all">
                Read all parent reviews &bull;
              </Link>
            </div>
          </div>
        </section>

        {/* 8. ADMISSION CTA */}
        <section className="py-16 bg-primary-yellow border-t-2 border-b-2 border-dark-text px-4 sm:px-6 relative overflow-hidden admissions-cta-section">
          {/* Fun dotted accent patterns */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2d2d2d_2px,transparent_2px)] [background-size:16px_16px]" />
          
          <div className="container mx-auto max-w-3xl text-center relative z-10 flex flex-col gap-6 items-center admissions-cta-content">
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
        <section className="py-20 px-4 sm:px-6 contact-preview-section">
          <div className="container mx-auto max-w-5xl">
            <SectionHeader
              title="Visit Us Today"
              subtitle="Drop by for a school preview or schedule a direct consultation."
              badge="Locate Us"
              badgeColor="green"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 items-center">
              {/* Address details */}
              <div className="flex flex-col gap-6 p-6 sm:p-8 rounded-[2rem] border-2 border-dark-text bg-cream-card shadow-warm contact-card">
                <h3 className="font-heading text-xl font-bold text-dark-text dark:text-foreground">
                  My Wings Academy Vadodara
                </h3>
                
                <div className="flex flex-col gap-4 font-sans text-sm">
                  <div className="flex items-start gap-3">
                    <span className="h-8 w-8 rounded-full bg-primary-red/10 border border-primary-red/20 flex items-center justify-center text-primary-red shrink-0 font-bold">1</span>
                    <div className="text-left">
                      <span className="font-bold block text-dark-text dark:text-foreground">Address</span>
                      <span className="text-muted-foreground font-sans">B-34 Samruddhi Tenament, Opp. Priti Enclave, Near Amin Party Plot, Rajesh Tower Road, Vadodara, Gujarat – 390023</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="h-8 w-8 rounded-full bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-brand-green shrink-0 font-bold">2</span>
                    <div className="text-left">
                      <span className="font-bold block text-dark-text dark:text-foreground">Phone & WhatsApp</span>
                      <a href="tel:+918000291158" className="text-muted-foreground hover:text-primary-red transition-colors font-sans">+91 80002 91158</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="h-8 w-8 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue shrink-0 font-bold">3</span>
                    <div className="text-left">
                      <span className="font-bold block text-dark-text dark:text-foreground">Email Support</span>
                      <a href="mailto:leenachopra@yahoo.com" className="text-muted-foreground hover:text-primary-red transition-colors font-sans">leenachopra@yahoo.com</a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/20 flex gap-3">
                  <Button asChild size="sm" className="rounded-full bg-brand-green hover:bg-brand-green/90 text-white font-bold cursor-pointer">
                    <a href="https://wa.me/918000291158" target="_blank" rel="noreferrer" id="preview-whatsapp-chat">
                      Chat on WhatsApp
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="rounded-full border-2 border-dark-text text-dark-text dark:text-foreground font-bold hover:bg-muted cursor-pointer">
                    <Link href="/contact" id="preview-contact-details">
                      View Location Details
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Map Iframe */}
              <div className="h-64 sm:h-80 w-full border-2 border-dark-text rounded-[2rem] shadow-warm bg-brand-blue/10 relative overflow-hidden contact-map">
                <iframe
                  title="My Wings Academy School Map"
                  src="https://maps.google.com/maps?q=B-34%20Samruddhi%20Tenament%20Vadodara&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
