"use client"

import { Heart, Sparkles, Smile, Shield, Target, BookOpen, User } from "lucide-react"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { OrganicBlobImage } from "@/components/shared/OrganicBlobImage"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-dark-text selection:bg-primary-yellow/30">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero Banner */}
        <section className="bg-primary-yellow/10 py-16 px-4 border-b border-border/20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-[-10%] w-[30%] aspect-square bg-primary-red/5 rounded-full blur-3xl pointer-events-none" />
          <div className="container mx-auto max-w-3xl relative z-10 flex flex-col items-center gap-3">
            <span className="text-xs font-bold text-primary-red uppercase tracking-widest font-sans bg-white border border-border/50 px-4 py-1.5 rounded-full">
              Our Identity
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-dark-text dark:text-foreground">
              About My Wings Academy
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl font-sans mt-1">
              Discover the history, the team, and the core philosophies driving our children's daily learning.
            </p>
          </div>
        </section>

        {/* 1. SCHOOL STORY */}
        <section className="py-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Text */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary-red bg-primary-red/10 border border-primary-red/20 px-3 py-1 rounded-full self-start">
                <Heart className="h-3.5 w-3.5 fill-current" /> Our Story
              </span>
              <h2 className="text-3xl font-bold font-heading text-dark-text leading-tight dark:text-foreground">
                Fostering Creative Flight Since 2018
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
                My Wings Academy was founded in 2018 with a simple vision: to construct a childhood environment where children are treated not as empty vessels to be filled with rules, but as curious flames to be nurtured. 
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
                What started as a small, specialized play-circle of 15 children has grown into New Delhi's most trusted, premium child development facility. Today, we cater to over 400 families, maintaining our signature tiny classroom ratios and parent-inclusive educational models.
              </p>
            </div>

            {/* Story Image Placeholder */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[320px] aspect-square relative">
                <OrganicBlobImage
                  src="/images/gallery/story-foundation.jpg"
                  alt="Our historical school journey"
                  shape={2}
                  color="red"
                  placeholderIcon="heart"
                />
              </div>
            </div>

          </div>
        </section>

        {/* 2. VISION & MISSION */}
        <section className="py-20 bg-cream-card/50 border-y-2 border-dashed border-border/40 px-4 sm:px-6">
          <div className="container mx-auto max-w-5xl">
            <SectionHeader
              title="Our Purpose"
              subtitle="The strategic direction and moral compass guiding our daily interactions and safety systems."
              badge="Vision & Mission"
              badgeColor="blue"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {/* Vision Card */}
              <div className="p-8 rounded-[2rem] border-2 border-dark-text bg-background shadow-warm relative overflow-hidden group">
                <div className="absolute top-0 right-0 h-24 w-24 bg-primary-yellow/10 rounded-full blur-xl pointer-events-none" />
                <div className="h-12 w-12 rounded-2xl bg-primary-yellow/20 border border-dark-text flex items-center justify-center mb-6">
                  <Smile className="h-6 w-6 text-dark-text" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-dark-text dark:text-foreground mb-3">
                  Our Vision
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
                  To be recognized globally as the gold standard of early childhood developmental education. We aim to raise a generation of happy, empathetic, self-reliant individuals who approach global challenges with curiosity, reasoning, and child-like wonder.
                </p>
              </div>

              {/* Mission Card */}
              <div className="p-8 rounded-[2rem] border-2 border-dark-text bg-background shadow-warm relative overflow-hidden group">
                <div className="absolute top-0 right-0 h-24 w-24 bg-brand-blue/10 rounded-full blur-xl pointer-events-none" />
                <div className="h-12 w-12 rounded-2xl bg-brand-blue/20 border border-dark-text flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-dark-text" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-dark-text dark:text-foreground mb-3">
                  Our Mission
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
                  To provide a safe, micro-monitored, and developmentally structured environment where curriculum modules are seamlessly integrated into creative play. We build parent confidence by offering absolute transparency, child-first ergonomics, and dedicated mentor tracking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. FOUNDER MESSAGE */}
        <section className="py-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Portrait Image */}
            <div className="lg:col-span-5 flex justify-center order-last lg:order-first">
              <div className="w-full max-w-[320px] aspect-square relative">
                <OrganicBlobImage
                  src="/images/teachers/founder.jpg"
                  alt="Founder Mrs. Neeta Sharma"
                  shape={3}
                  color="yellow"
                  placeholderIcon="smile"
                />
              </div>
            </div>

            {/* Quote block */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-green/10 text-brand-green border border-brand-green/20 self-start">
                <User className="h-3.5 w-3.5" /> Founder Message
              </span>
              <h2 className="text-3xl font-bold font-heading text-dark-text leading-tight dark:text-foreground">
                "Early Childhood is a Journey, Not a Race"
              </h2>
              
              <div className="flex flex-col gap-4 font-sans text-sm sm:text-base text-muted-foreground leading-relaxed italic border-l-4 border-l-primary-yellow pl-4">
                <p>
                  "As parents, we are often tempted to rush our children into academic templates, expecting spelling and counting tests. But early neurology tells us that emotional regulation, social coordination, and active sensory reasoning are the absolute anchors of future cognitive success."
                </p>
                <p>
                  "We built My Wings Academy to be a sanctuary of discovery. When you visit us, you won't see children memorizing sheets; you will see them solving puzzles, building clay circles, and expressing ideas fearlessly. That is where real intellect takes flight."
                </p>
              </div>

              <div className="flex flex-col mt-2">
                <span className="font-heading font-bold text-base text-dark-text dark:text-foreground">
                  Mrs. Neeta Sharma
                </span>
                <span className="text-xs text-muted-foreground">
                  Founder & Principal Director, My Wings Academy
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* 4. TEACHING PHILOSOPHY */}
        <section className="py-20 bg-cream-card/30 border-t-2 border-border/40 px-4 sm:px-6">
          <div className="container mx-auto max-w-5xl">
            <SectionHeader
              title="Our Teaching Philosophy"
              subtitle="We combine standard childhood practices into a proprietary, child-first pedagogical framework."
              badge="How We Educate"
              badgeColor="green"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Montessori-Led Autonomy",
                  desc: "Children choose activities based on inner interests, cultivating intrinsic focus, hand-eye coordination, and physical independence.",
                  icon: Smile,
                },
                {
                  title: "Inquiry-Based Learning",
                  desc: "Instead of raw lectures, mentors prompt questions like 'Why does clay melt?' to stimulate speech, logic, and reasoning.",
                  icon: BookOpen,
                },
                {
                  title: "Theme-Based Play",
                  desc: "Weekly themes (e.g. Space Exploration, Under the Sea) integrate math, art, stories, and sensory play into a unified story context.",
                  icon: Sparkles,
                },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl border border-dark-text/20 bg-background shadow-sm hover:scale-[1.01] transition-transform"
                  >
                    <div className="h-10 w-10 rounded-xl bg-primary-yellow/10 border border-primary-yellow/20 flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5 text-dark-text" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-dark-text dark:text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 5. WHY MY WINGS ACADEMY */}
        <section className="py-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="p-8 sm:p-12 rounded-[2rem] border-2 border-dark-text bg-primary-yellow text-dark-text shadow-warm relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2d2d2d_2.5px,transparent_2.5px)] [background-size:20px_20px] pointer-events-none" />
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 flex flex-col gap-4 text-left">
                  <h3 className="font-heading text-3xl font-extrabold">
                    Ready to witness your child's confidence take flight?
                  </h3>
                  <p className="text-sm sm:text-base font-sans font-medium opacity-90 max-w-xl">
                    Our seats fill up fast due to our low student-to-teacher ratio requirements. Get in touch with our team to book a school tour slot or receive our brochures.
                  </p>
                </div>
                <div className="lg:col-span-4 flex justify-start lg:justify-end">
                  <a
                    href="/admissions"
                    className="inline-flex items-center justify-center rounded-full bg-primary-red text-white hover:bg-primary-red/90 border-2 border-dark-text font-bold shadow-warm px-8 py-4 cursor-pointer text-sm tracking-wide uppercase transition-transform active:scale-[0.98]"
                    id="about-cta-visit"
                  >
                    Start Admission Today
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
