"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ClipboardList, Sparkles, CheckCircle2, ChevronRight, HelpCircle, FileText } from "lucide-react"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { InquiryForm } from "@/components/forms/InquiryForm"

const STEPS = [
  {
    step: "01",
    title: "Online Inquiry Submission",
    desc: "Fill out the inquiry form on this page with your basic contact info, program preference, and message.",
  },
  {
    step: "02",
    title: "School Visit & Direct Interaction",
    desc: "Our admission counselor schedules a physical campus walk-through to view classrooms, security, and child play areas.",
  },
  {
    step: "03",
    title: "Documentation & Form Filling",
    desc: "Submit the physical registration kit along with child certificates, parent ID copies, and health records.",
  },
  {
    step: "04",
    title: "Interactive Session (Child & Parent)",
    desc: "A soft, stress-free discussion where mentors interact with the child to evaluate motor abilities and readiness.",
  },
  {
    step: "05",
    title: "Fee Confirmation & Welcome Kit",
    desc: "Upon selection approval, complete the fee transfer and collect the student's study materials and uniforms.",
  },
]

const REQUIRED_DOCUMENTS = [
  "Photocopy of Child's Birth Certificate (Registered local authority)",
  "Address Proof of Parents (Aadhar Card, Passport, or Electricity Bill)",
  "4 Passport-sized photographs of the Child",
  "2 Passport-sized photographs of each Parent/Guardian",
  "Immunization Record / Pediatric Health Fitness Certificate",
  "Transfer Certificate / Report Card (For KG admissions only, if applicable)",
]

const FAQS = [
  {
    id: "faq-1",
    question: "What is the entry age bracket for each program?",
    answer: "Playgroup: 1.5 to 2.5 Years. Nursery: 2.5 to 3.5 Years. Junior KG: 3.5 to 4.5 Years. Senior KG: 4.5 to 5.5 Years. Age calculations are typically computed as of 31st March of the academic year.",
  },
  {
    id: "faq-2",
    question: "What safety and security protocols are active at My Wings?",
    answer: "Safety is our baseline. We have continuous CCTV coverage across all classrooms and gates, secure biometric registration for parent pick-up tokens, professional gatekeepers, and all cabinet edges are rounded to prevent bruises.",
  },
  {
    id: "faq-3",
    question: "Does the school provide clean transport services?",
    answer: "Yes, we operate air-conditioned school cabs with female attendants on board. All vans have GPS trackers, and routes are configured to keep child transit time under 30 minutes.",
  },
  {
    id: "faq-4",
    question: "What is the child-to-teacher ratio at the academy?",
    answer: "To ensure absolute care: Playgroup has a 1:6 ratio, Nursery has 1:8, and KG classes maintain a 1:10 or 1:12 ratio. Each classroom is staffed with a lead educator and a trained assistant.",
  },
  {
    id: "faq-5",
    question: "Is there a child uniform requirement?",
    answer: "Yes, to build unity and safety awareness, children wear customized cotton-blend play uniforms. The welcome kit collected during admission confirmation contains these sets.",
  },
]

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-dark-text selection:bg-primary-yellow/30">
      <Navbar />

      <main className="flex-1">
        {/* Banner */}
        <section className="bg-primary-yellow/10 py-16 px-4 border-b border-border/20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-[-10%] w-[30%] aspect-square bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
          <div className="container mx-auto max-w-3xl relative z-10 flex flex-col items-center gap-3">
            <span className="text-xs font-bold text-primary-red uppercase tracking-widest font-sans bg-white border border-border/50 px-4 py-1.5 rounded-full">
              Term 2026-27
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-dark-text dark:text-foreground">
              Admission Information
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl font-sans mt-1">
              Read our step-by-step enrollment details and submit an inquiry below to secure your child's slot.
            </p>
          </div>
        </section>

        {/* Form and Process Section */}
        <section className="py-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Process steps & Documents */}
            <div className="lg:col-span-7 flex flex-col gap-10">
              {/* Process */}
              <div className="text-left">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary-red/10 text-primary-red border border-primary-red/20 mb-4 font-sans">
                  <ClipboardList className="h-3.5 w-3.5" /> Admission Stages
                </span>
                <h2 className="text-3xl font-extrabold font-heading text-dark-text dark:text-foreground mb-6">
                  Our Enrollment Process
                </h2>
                
                <div className="flex flex-col gap-6">
                  {STEPS.map((item) => (
                    <div key={item.step} className="flex gap-4 items-start" id={`admission-step-${item.step}`}>
                      <div className="h-10 w-10 rounded-xl bg-primary-yellow border-2 border-dark-text flex items-center justify-center font-heading font-extrabold text-dark-text shrink-0 shadow-sm">
                        {item.step}
                      </div>
                      <div className="flex flex-col gap-1 text-left">
                        <h3 className="font-heading font-bold text-base text-dark-text dark:text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Required Documents */}
              <div className="p-6 sm:p-8 rounded-[2rem] border-2 border-dark-text bg-cream-card shadow-warm text-left">
                <h3 className="font-heading text-xl font-bold text-dark-text dark:text-foreground mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary-red" /> Required Documents Checklist
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground font-sans mb-6">
                  Please carry original copies of these certificates when visiting the campus for verification.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {REQUIRED_DOCUMENTS.map((doc, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-dark-text/90 dark:text-foreground/90 font-sans leading-relaxed">
                      <CheckCircle2 className="h-4.5 w-4.5 text-brand-green shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Sticky Inquiry Form */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <InquiryForm />
            </div>

          </div>
        </section>

        {/* Accordion FAQs */}
        <section className="py-20 bg-cream-card/50 border-t-2 border-border/40 px-4 sm:px-6">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader
              title="Frequently Asked Questions"
              subtitle="Get answers to standard questions about preschool fees, curriculum, and food timings."
              badge="FAQ Guide"
              badgeColor="blue"
            />

            <div className="mt-12 bg-background border-2 border-dark-text rounded-[2rem] p-6 sm:p-8 shadow-warm text-left">
              <Accordion type="single" collapsible className="w-full">
                {FAQS.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id} className="border-b border-border/40 py-2">
                    <AccordionTrigger className="font-heading font-bold text-sm sm:text-base text-dark-text dark:text-foreground hover:text-primary-red text-left">
                      <span className="flex items-center gap-2">
                        <HelpCircle className="h-4 w-4 text-brand-blue shrink-0" />
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed pl-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
