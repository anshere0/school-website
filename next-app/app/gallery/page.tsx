"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Grid, Eye, Image as ImageIcon, X } from "lucide-react"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { OrganicBlobImage } from "@/components/shared/OrganicBlobImage"

const CATEGORIES = [
  "All",
  "Classrooms",
  "Activities",
  "Events",
  "Celebrations",
  "Sports Day",
  "Annual Day",
]

const GALLERY_ITEMS = [
  { id: 1, title: "Toddler Learning Board", category: "Classrooms", src: "/images/gallery/classroom-1.jpg", shape: 1, color: "yellow" as const, icon: "education" as const },
  { id: 2, title: "Water and Sponge Sensory Play", category: "Activities", src: "/images/gallery/activities-1.jpg", shape: 2, color: "green" as const, icon: "smile" as const },
  { id: 3, title: "Grandparents Meet Celebration", category: "Events", src: "/images/gallery/events-1.jpg", shape: 3, color: "blue" as const, icon: "heart" as const },
  { id: 4, title: "Independence Day Dress-up", category: "Celebrations", src: "/images/gallery/celebrations-1.jpg", shape: 4, color: "red" as const, icon: "sparkles" as const },
  { id: 5, title: "Mini Athletics Obstacle Run", category: "Sports Day", src: "/images/gallery/sports-1.jpg", shape: 3, color: "yellow" as const, icon: "trophy" as const },
  { id: 6, title: "Annual Cultural Dance Drama", category: "Annual Day", src: "/images/gallery/annual-1.jpg", shape: 1, color: "green" as const, icon: "sparkles" as const },
  { id: 7, title: "Montessori Wooden Blocks", category: "Classrooms", src: "/images/gallery/classroom-2.jpg", shape: 4, color: "blue" as const, icon: "art" as const },
  { id: 8, title: "Clay Squeezing Craft", category: "Activities", src: "/images/gallery/activities-2.jpg", shape: 2, color: "red" as const, icon: "smile" as const },
  { id: 9, title: "Annual Day Rhyming Play", category: "Annual Day", src: "/images/gallery/annual-2.jpg", shape: 3, color: "yellow" as const, icon: "trophy" as const },
  { id: 10, title: "Christmas Carol Circle", category: "Celebrations", src: "/images/gallery/celebrations-2.jpg", shape: 1, color: "green" as const, icon: "heart" as const },
]

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedItem, setSelectedItem] = useState<(typeof GALLERY_ITEMS)[0] | null>(null)

  const filteredItems =
    activeFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter)

  return (
    <div className="min-h-screen flex flex-col bg-background text-dark-text selection:bg-primary-yellow/30">
      <Navbar />

      <main className="flex-1">
        {/* Banner */}
        <section className="bg-primary-yellow/10 py-16 px-4 border-b border-border/20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-[-10%] w-[30%] aspect-square bg-brand-pink/5 rounded-full blur-3xl pointer-events-none" />
          <div className="container mx-auto max-w-3xl relative z-10 flex flex-col items-center gap-3">
            <span className="text-xs font-bold text-primary-red uppercase tracking-widest font-sans bg-white border border-border/50 px-4 py-1.5 rounded-full">
              Visual Memories
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-dark-text dark:text-foreground">
              Our School Gallery
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl font-sans mt-1">
              Explore snapshots of classrooms, daily play circles, major events, and developmental celebrations.
            </p>
          </div>
        </section>

        {/* Gallery Content */}
        <section className="py-16 px-4 sm:px-6">
          <div className="container mx-auto max-w-5xl">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  id={`gallery-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`px-4.5 py-2.5 rounded-full font-heading text-xs sm:text-sm font-bold border-2 border-dark-text transition-all cursor-pointer shadow-sm hover:scale-[1.02] ${
                    activeFilter === cat
                      ? "bg-primary-yellow text-dark-text shadow-warm"
                      : "bg-white text-dark-text/80 hover:bg-primary-yellow/15"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Masonry Columns */}
            <motion.div
              layout
              className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6 [column-fill:balance]"
            >
              <AnimatePresence>
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="break-inside-avoid relative group cursor-pointer border-2 border-dark-text rounded-3xl bg-cream-card overflow-hidden shadow-sm hover:shadow-warm hover:scale-[1.01] transition-all flex flex-col"
                    onClick={() => setSelectedItem(item)}
                    id={`gallery-item-${item.id}`}
                  >
                    <div className="p-3">
                      <OrganicBlobImage
                        src={item.src}
                        alt={item.title}
                        shape={item.shape as 1 | 2 | 3 | 4}
                        color={item.color}
                        placeholderIcon={item.icon}
                      />
                    </div>
                    
                    {/* Bottom Metadata details */}
                    <div className="p-4 pt-0 flex justify-between items-center bg-cream-card">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-primary-red">
                          {item.category}
                        </span>
                        <h4 className="font-heading font-bold text-sm text-dark-text dark:text-foreground mt-0.5">
                          {item.title}
                        </h4>
                      </div>
                      <div className="h-7 w-7 rounded-full bg-primary-yellow/10 border border-primary-yellow/30 flex items-center justify-center text-dark-text shrink-0">
                        <Eye className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredItems.length === 0 && (
              <div className="text-center py-20 bg-cream-card rounded-[2rem] border-2 border-dashed border-dark-text/25">
                <ImageIcon className="h-10 w-10 text-muted-foreground mx-auto mb-2 animate-bounce" />
                <span className="font-heading font-bold text-dark-text/80 block">No photos uploaded yet</span>
                <span className="text-xs text-muted-foreground mt-1">Check back shortly. We are sorting our event logs.</span>
              </div>
            )}
          </div>
        </section>

        {/* Modal Lightbox */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative max-w-2xl w-full bg-cream-card border-4 border-dark-text rounded-[2rem] overflow-hidden p-4 sm:p-6"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 h-9 w-9 rounded-full bg-primary-red text-white flex items-center justify-center border-2 border-dark-text shadow-sm hover:scale-105 cursor-pointer z-10"
                  aria-label="Close image light-box"
                  id="close-lightbox-btn"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="flex flex-col gap-4 text-left">
                  <div className="aspect-video w-full relative">
                    <OrganicBlobImage
                      src={selectedItem.src}
                      alt={selectedItem.title}
                      shape={1}
                      color={selectedItem.color}
                      placeholderIcon={selectedItem.icon}
                    />
                  </div>
                  
                  <div className="pt-2">
                    <span className="inline-block text-[10px] font-bold tracking-wider text-primary-red uppercase bg-primary-red/10 border border-primary-red/20 px-2.5 py-0.5 rounded-full mb-1">
                      {selectedItem.category}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-dark-text dark:text-foreground">
                      {selectedItem.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-sans mt-1">
                      My Wings Academy educational showcase placeholder. Photos are regularly updated.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}
