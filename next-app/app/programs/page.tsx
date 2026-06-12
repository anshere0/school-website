"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, Star, Clock, Target, Shield, Heart } from "lucide-react"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { OrganicBlobImage } from "@/components/shared/OrganicBlobImage"

export default function ProgramsPage() {
  const programDetails = [
    {
      value: "playgroup",
      title: "Fun Club (Playgroup)",
      shortTitle: "Fun Club",
      age: "2.0 - 3.0 Years",
      ratio: "1:8 Student-Teacher Ratio",
      description:
        "Our Fun Club Playgroup focuses on sensory integration, emotional trust, and basic socialization. Toddlers explore textures, sounds, and play coordinates in a highly safe, caring motherly layout.",
      image: "/images/activities/playgroup.png",
      shape: 1,
      color: "yellow" as const,
      placeholderIcon: "smile" as const,
      goals: [
        "Develop primary hand-eye coordination (stacking, squeezing)",
        "Build early spoken vocabulary and express simple needs",
        "Form secure peer relationships and manage transition times",
        "Sensory awareness through art, water, and sand play",
      ],
      activities: [
        "Finger painting & textured clay play",
        "Rhyme singing & sound association circles",
        "Safe crawl tunnels & soft block towers",
        "Montessori wooden toy stacking & sorting",
      ],
      outcomes: [
        "Primary fine motor grip and walking balance",
        "Spoken word expansion (simple vocabulary expressions)",
        "Willingness to share play tools under guidance",
      ],
    },
    {
      value: "nursery",
      title: "Nursery Program",
      shortTitle: "Nursery",
      age: "3.0 - 4.0 Years",
      ratio: "1:8 Student-Teacher Ratio",
      description:
        "The Nursery year introduces verbal expression, basic numbers, shape recognition, and circle-time interactions. Curriculums emphasize confidence-building and speech fluency.",
      image: "/images/activities/nursery.png",
      shape: 2,
      color: "green" as const,
      placeholderIcon: "sparkles" as const,
      goals: [
        "Introduce letter sounds (basic phonics) and primary shapes",
        "Foster self-reliance (handwashing, choosing toys)",
        "Develop balance and rhythm through active body movements",
        "Express imagination through pretend play and dress-up",
      ],
      activities: [
        "Daily themed reading and conversation circle",
        "Guided scissors practice (safety blades) & coloring",
        "Bouncing, skipping, and climbing playground games",
        "Bilingual storytelling and interactive theater play",
      ],
      outcomes: [
        "Ability to count up to 10 and recognize colors/shapes",
        "Complete bathroom and personal meal independence",
        "Confidence to follow two-step spoken guidelines",
      ],
    },
    {
      value: "lkg",
      title: "LKG (Lower Kindergarten)",
      shortTitle: "LKG",
      age: "4.0 - 5.0 Years",
      ratio: "1:8 Student-Teacher Ratio",
      description:
        "LKG focuses on cognitive development, structured tracing, early writing, and logical number sequencing. Kids learn to problem-solve and cooperate in groups.",
      image: "/images/activities/junior-kg.png",
      shape: 3,
      color: "blue" as const,
      placeholderIcon: "education" as const,
      goals: [
        "Trace characters, write numbers, and read simple words",
        "Develop math logic (size association, grouping patterns)",
        "Encourage collaborative play and peer problem-solving",
        "Foster basic biology concepts (gardening, seed planting)",
      ],
      activities: [
        "Letter tracing slate worksheets & drawing",
        "Puzzles, pattern blocks, and logic building boards",
        "Bouncing & throwing coordinates physical plays",
        "Theme-based group craft cutting & paper sticking",
      ],
      outcomes: [
        "Read basic 3-letter words and write numbers 1 to 20",
        "Understand spatial relation terms (above, below, beside)",
        "Resolve minor peer arguments with words under guidance",
      ],
    },
    {
      value: "srkg",
      title: "SR KG (Senior Kindergarten)",
      shortTitle: "SR KG",
      age: "5.0 - 6.0 Years",
      ratio: "1:8 Student-Teacher Ratio",
      description:
        "SR KG builds deep reading comprehension, basic mathematics (addition/subtraction), public speaking, and school transition readiness. Focuses on confidence.",
      image: "/images/activities/senior-kg.png",
      shape: 4,
      color: "red" as const,
      placeholderIcon: "trophy" as const,
      goals: [
        "Transition to reading sentences and spelling short words",
        "Perform basic math computations (addition and subtraction)",
        "Foster confidence in public sharing (Show and Tell)",
        "Prepare children to meet entrance criteria of top primary schools",
      ],
      activities: [
        "Public speaking circle (Show and Tell topics)",
        "Storybook reading worksheets & handwriting practice",
        "Introduction to simple computer shapes & digital drawing",
        "Advanced team sports and coordinated gymnastics",
      ],
      outcomes: [
        "Read books independently and write small journals",
        "Fluently add/subtract numbers 1 through 10",
        "Confident social skills ready for any standard primary school",
      ],
    },
    {
      value: "grade1",
      title: "Grade 1 Foundation",
      shortTitle: "Grade 1",
      age: "6.0 - 7.0 Years",
      ratio: "1:8 Student-Teacher Ratio",
      description:
        "A hybrid transition module bridges preschool playing with formal primary school expectations, focusing on reading comprehension, science, and math logic.",
      image: "/images/gallery/story-foundation.png",
      shape: 1,
      color: "yellow" as const,
      placeholderIcon: "heart" as const,
      goals: [
        "Fluent sentence writing and reading comprehension",
        "Advanced math logic (number lines, measurements)",
        "Develop self-management, focus, and study organization",
        "General awareness of environment, community, and basic sciences",
      ],
      activities: [
        "Creative story writing & grammar exercises",
        "Mental math play, pattern mapping, counting grids",
        "Scientific exploration projects (water cycles, magnifying glass)",
        "Self-discipline games & interactive social roundtables",
      ],
      outcomes: [
        "Fluent reading of early chapter books and journals",
        "Strong logical foundations for primary school mathematics",
        "Complete transition readiness for primary school schedules",
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background text-dark-text selection:bg-primary-yellow/30">
      <Navbar />

      <main className="flex-1">
        {/* Banner */}
        <section className="bg-primary-yellow/10 py-16 px-4 border-b border-border/20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-[-10%] w-[30%] aspect-square bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />
          <div className="container mx-auto max-w-3xl relative z-10 flex flex-col items-center gap-3">
            <span className="text-xs font-bold text-brand-green uppercase tracking-widest font-sans bg-white border border-border/50 px-4 py-1.5 rounded-full">
              Growth Path
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-dark-text dark:text-foreground">
              Our Learning Programs
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl font-sans mt-1">
              Explore our structured age brackets. Each stage is meticulously customized to match children's neurological milestones.
            </p>
          </div>
        </section>

        {/* Programs Detail Section */}
        <section className="py-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-5xl">
            <Tabs defaultValue="playgroup" className="w-full flex flex-col gap-10">
              
              {/* Tabs list styled child-friendly */}
              <TabsList className="grid grid-cols-2 md:grid-cols-5 h-auto p-1.5 bg-cream-card border-2 border-dark-text rounded-2xl md:rounded-full gap-2 shrink-0">
                {programDetails.map((prog) => (
                  <TabsTrigger
                    key={prog.value}
                    value={prog.value}
                    className="font-heading text-sm md:text-base font-bold py-2.5 md:py-3.5 rounded-xl md:rounded-full data-[state=active]:bg-primary-yellow data-[state=active]:text-dark-text data-[state=active]:border-2 data-[state=active]:border-dark-text transition-all data-[state=active]:shadow-sm cursor-pointer"
                  >
                    {prog.shortTitle || prog.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Tabs Content */}
              {programDetails.map((prog) => (
                <TabsContent
                  key={prog.value}
                  value={prog.value}
                  className="mt-0 focus-visible:outline-none focus-visible:ring-0"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    
                    {/* Visual left */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                      <div className="max-w-[340px] aspect-square w-full mx-auto">
                        <OrganicBlobImage
                          src={prog.image}
                          alt={prog.title}
                          shape={prog.shape as 1 | 2 | 3 | 4}
                          color={prog.color}
                          placeholderIcon={prog.placeholderIcon}
                        />
                      </div>
                      
                      {/* Program stats info */}
                      <div className="p-5 rounded-2xl border-2 border-dark-text bg-cream-card flex flex-col gap-2.5 mt-2">
                        <div className="flex items-center gap-2 text-sm text-dark-text font-bold">
                          <Clock className="h-4 w-4 text-primary-red shrink-0" />
                          <span>Age range: {prog.age}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-dark-text font-bold">
                          <Shield className="h-4 w-4 text-brand-green shrink-0" />
                          <span>Teacher ratio: {prog.ratio}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content right */}
                    <div className="lg:col-span-7 flex flex-col gap-6 text-left">
                      <div>
                        <h2 className="text-3xl font-extrabold font-heading text-dark-text dark:text-foreground mb-3">
                          {prog.title}
                        </h2>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
                          {prog.description}
                        </p>
                      </div>

                      {/* Goals */}
                      <div>
                        <h3 className="font-heading text-lg font-bold text-dark-text dark:text-foreground mb-3 flex items-center gap-2">
                          <Target className="h-5 w-5 text-primary-red" /> Learning Goals
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {prog.goals.map((goal, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-brand-green shrink-0 mt-0.5" />
                              <span>{goal}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Activities */}
                      <div>
                        <h3 className="font-heading text-lg font-bold text-dark-text dark:text-foreground mb-3 flex items-center gap-2">
                          <Star className="h-5 w-5 text-brand-blue" /> Typical Activities
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {prog.activities.map((act, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                              <span className="h-2 w-2 rounded-full bg-brand-blue shrink-0 mt-2" />
                              <span>{act}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Outcomes */}
                      <div className="p-6 rounded-2xl bg-primary-yellow/10 border border-primary-yellow/40">
                        <h3 className="font-heading text-base font-bold text-dark-text dark:text-foreground mb-2 flex items-center gap-2">
                          <Heart className="h-4 w-4 text-primary-red fill-current" /> Key Milestones & Outcomes
                        </h3>
                        <ul className="list-inside list-disc text-xs sm:text-sm text-dark-text/85 dark:text-foreground/90 flex flex-col gap-1.5">
                          {prog.outcomes.map((out, idx) => (
                            <li key={idx} className="font-sans leading-relaxed">
                              {out}
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                  </div>
                </TabsContent>
              ))}

            </Tabs>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 bg-primary-yellow border-t border-dark-text text-dark-text text-center px-4">
          <div className="container mx-auto max-w-2xl flex flex-col gap-5 items-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">
              Unsure which program fits your toddler?
            </h2>
            <p className="text-sm font-sans font-medium opacity-90 max-w-md">
              We conduct light interactive sessions to evaluate social readiness and gross motor capabilities. Let's schedule a parent discussion.
            </p>
            <a
              href="/admissions"
              className="rounded-full bg-primary-red text-white hover:bg-primary-red/90 border-2 border-dark-text font-bold shadow-warm px-8 py-3.5 cursor-pointer text-sm"
              id="programs-cta-consult"
            >
              Request Free Consultation
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
