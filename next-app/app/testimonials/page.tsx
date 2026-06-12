"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, Star, Sparkles, MessageSquare, Play, Video, Smile } from "lucide-react"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { OrganicBlobImage } from "@/components/shared/OrganicBlobImage"

const TESTIMONIALS_LIST = [
  {
    id: 1,
    name: "Rahul Patel",
    role: "Father of Aarav (Nursery student)",
    quote: "Best preschool in Vadodara! Leena Ma'am and her staff provide motherly care. My son Aarav loves going to school everyday. The CCTV feed is an absolute relief for working parents like us.",
    rating: 5,
    initial: "R",
    color: "yellow",
  },
  {
    id: 2,
    name: "Sneha Amin",
    role: "Mother of Meera (Fun Club student)",
    quote: "We were anxious about sending Meera to daycare/playgroup so early. But the caretakers are exceptionally gentle, providing motherly care and feeding schedules in a super clean environment.",
    rating: 5,
    initial: "S",
    color: "blue",
  },
  {
    id: 3,
    name: "Jayesh Shah",
    role: "Father of Kabir (LKG student)",
    quote: "The activity-based curriculum here is top-notch. Kabir has developed solid language tracing capabilities and logic thinking. The Saturday activity classes keep him extremely engaged.",
    rating: 5,
    initial: "J",
    color: "green",
  },
  {
    id: 4,
    name: "Priya Patel",
    role: "Mother of Ishaan (SR KG student)",
    quote: "Ishaan is graduating SR KG, and we are highly satisfied with the school. His reading and sentence formulation skills are amazing. The educational foundation has prepared him for Grade 1.",
    rating: 5,
    initial: "P",
    color: "red",
  },
]

const VIDEOS_LIST = [
  {
    id: 1,
    parent: "Meera's Parents",
    topic: "Managing early preschool transition anxiety",
    duration: "2 min 15 sec",
    shape: 1,
    color: "blue" as const,
  },
  {
    id: 2,
    parent: "Kabir's Mother",
    topic: "Developmental progress in Junior KG curriculum",
    duration: "1 min 45 sec",
    shape: 3,
    color: "green" as const,
  },
]

export default function TestimonialsPage() {
  const [activeCarousel, setActiveCarousel] = useState(0)

  return (
    <div className="min-h-screen flex flex-col bg-background text-dark-text selection:bg-primary-yellow/30">
      <Navbar />

      <main className="flex-1">
        {/* Banner */}
        <section className="bg-primary-yellow/10 py-16 px-4 border-b border-border/20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-[-10%] w-[30%] aspect-square bg-primary-red/5 rounded-full blur-3xl pointer-events-none" />
          <div className="container mx-auto max-w-3xl relative z-10 flex flex-col items-center gap-3">
            <span className="text-xs font-bold text-primary-red uppercase tracking-widest font-sans bg-white border border-border/50 px-4 py-1.5 rounded-full">
              Parent Voices
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-dark-text dark:text-foreground">
              Parent Testimonials
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl font-sans mt-1">
              Read stories of growth, safety, and cognitive confidence directly from our family community.
            </p>
          </div>
        </section>

        {/* 1. SLIDER CAROUSEL SECTION */}
        <section className="py-16 px-4 sm:px-6">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader
              title="Featured Parent Review"
              subtitle="Swipe or click below to read highlighted stories of child development."
              badge="Parent Spotlight"
              badgeColor="yellow"
            />

            {/* Carousel display box */}
            <div className="mt-12 bg-cream-card border-2 border-dark-text rounded-[2.5rem] p-6 sm:p-10 shadow-warm relative min-h-[300px] flex flex-col justify-between">
              {/* Quote bubble */}
              <div className="absolute top-[-16px] left-8 h-9 w-9 rounded-xl bg-primary-red text-white flex items-center justify-center border-2 border-dark-text shadow-sm rotate-6">
                <Heart className="h-4 w-4 fill-current" />
              </div>

              <div className="flex flex-col gap-6 text-center items-center py-4">
                <div className="h-16 w-16 rounded-2xl bg-primary-yellow border-2 border-dark-text flex items-center justify-center text-dark-text text-2xl font-bold font-heading shadow-sm rotate-3">
                  {TESTIMONIALS_LIST[activeCarousel].initial}
                </div>
                
                <div className="flex items-center gap-0.5">
                  {[...Array(TESTIMONIALS_LIST[activeCarousel].rating)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-primary-yellow text-dark-text" />
                  ))}
                </div>

                <p className="text-base sm:text-lg italic font-sans text-dark-text/95 leading-relaxed dark:text-foreground/90 max-w-2xl">
                  "{TESTIMONIALS_LIST[activeCarousel].quote}"
                </p>
              </div>

              <div className="flex flex-col items-center border-t border-border/20 pt-6 mt-4">
                <span className="font-heading font-bold text-base text-dark-text dark:text-foreground">
                  {TESTIMONIALS_LIST[activeCarousel].name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {TESTIMONIALS_LIST[activeCarousel].role}
                </span>
              </div>
            </div>

            {/* Slider Dots */}
            <div className="flex items-center justify-center gap-2.5 mt-6">
              {TESTIMONIALS_LIST.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCarousel(i)}
                  className={`h-3 rounded-full border border-dark-text cursor-pointer transition-all ${
                    activeCarousel === i ? "w-8 bg-primary-yellow" : "w-3 bg-white"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                  id={`carousel-dot-${i}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 2. VIDEO TESTIMONIAL SUPPORT */}
        <section className="py-20 bg-cream-card/50 border-y-2 border-dashed border-border/40 px-4 sm:px-6">
          <div className="container mx-auto max-w-5xl">
            <SectionHeader
              title="Video Testimonials"
              subtitle="Listen to audio/video recordings of parents discussing their preschool choice."
              badge="Video Support"
              badgeColor="blue"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {VIDEOS_LIST.map((vid) => (
                <div
                  key={vid.id}
                  className="p-6 rounded-[2rem] border-2 border-dark-text bg-background shadow-warm flex flex-col sm:flex-row items-center gap-6"
                >
                  {/* Thumbnail Placeholder */}
                  <div className="w-full sm:w-[150px] aspect-square relative shrink-0">
                    <OrganicBlobImage
                      alt={vid.parent}
                      shape={vid.shape as 1 | 2 | 3 | 4}
                      color={vid.color}
                      placeholderIcon="smile"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors rounded-full">
                      <div className="h-10 w-10 rounded-full bg-primary-red border-2 border-dark-text text-white flex items-center justify-center shadow-md animate-pulse">
                        <Play className="h-4.5 w-4.5 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Video Metadata */}
                  <div className="flex flex-col gap-2.5 text-left w-full">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue flex items-center gap-1">
                      <Video className="h-3 w-3" /> Interview &bull; {vid.duration}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-dark-text dark:text-foreground">
                      {vid.parent}
                    </h3>
                    <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                      "{vid.topic}"
                    </p>
                    <span className="text-[10px] text-muted-foreground italic font-sans mt-1">
                      *Media release consent signed.
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. TESTIMONIALS LIST GRID */}
        <section className="py-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-5xl">
            <SectionHeader
              title="All Parent Reviews"
              subtitle="Browse through complete verification details logged from our parent logs."
              badge="Community Board"
              badgeColor="green"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {TESTIMONIALS_LIST.map((item) => (
                <div
                  key={item.id}
                  className="p-6 rounded-3xl border border-dark-text/20 bg-cream-card shadow-sm flex flex-col gap-4 text-left justify-between"
                  id={`review-card-${item.id}`}
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-primary-yellow text-primary-yellow" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm italic font-sans text-muted-foreground leading-relaxed">
                      "{item.quote}"
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-border/20">
                    <div className="h-8 w-8 rounded-full bg-dark-text/5 flex items-center justify-center text-xs font-bold">
                      {item.initial}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-heading font-bold text-xs text-dark-text dark:text-foreground">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-muted-foreground font-sans">
                        {item.role}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
