"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Heart, Send, Sparkles, AlertCircle, CheckCircle2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { submitInquiry } from "@/app/actions"
import { InquirySchema, InquiryInput } from "@/lib/schemas"
import { cn } from "@/lib/utils"

export function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{
    success: boolean
    message: string
  } | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>({
    resolver: zodResolver(InquirySchema),
    defaultValues: {
      parentName: "",
      childName: "",
      childAge: undefined as any,
      mobile: "",
      email: "",
      preferredProgram: undefined as any,
      message: "",
    },
  })

  const onSubmit = async (data: any) => {
    setIsSubmitting(true)
    setSubmitResult(null)
    
    try {
      const response = await submitInquiry(data)
      if (response.success) {
        setSubmitResult({ success: true, message: response.message || "Success!" })
        reset()
      } else {
        // Handle server side validation errors or messaging
        setSubmitResult({
          success: false,
          message: response.message || "Please fix validation errors.",
        })
      }
    } catch {
      setSubmitResult({
        success: false,
        message: "Network error. Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full border-2 border-dark-text bg-cream-card shadow-warm overflow-hidden rounded-[2rem]">
      <CardHeader className="bg-primary-yellow/10 border-b-2 border-dark-text p-6 sm:p-8">
        <CardTitle className="font-heading text-2xl text-dark-text flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary-yellow fill-primary-yellow/50 shrink-0" />
          Admission Inquiry Form
        </CardTitle>
        <CardDescription className="font-sans text-dark-text/75 text-sm sm:text-base">
          Start your child's learning journey with us. Fill out this brief form, and our admissions officer will contact you within 24 hours.
        </CardDescription>
      </CardHeader>

      <CardContent className="p-6 sm:p-8">
        <AnimatePresence mode="wait">
          {submitResult?.success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-10 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/20 text-brand-green mb-4 border border-brand-green/30">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-dark-text mb-2">
                Inquiry Received!
              </h3>
              <p className="font-sans text-muted-foreground text-sm max-w-sm leading-relaxed mb-6">
                {submitResult.message} A copy of your details has been logged, and we will email/call you shortly to schedule a school tour.
              </p>
              <Button
                onClick={() => setSubmitResult(null)}
                className="rounded-full bg-primary-yellow text-dark-text hover:bg-primary-yellow/90 border-2 border-dark-text shadow-sm font-bold cursor-pointer"
                id="reset-form-btn"
              >
                Submit Another Inquiry
              </Button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
              id="admission-inquiry-form"
            >
              {/* Parent Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="parentName"
                  className="font-sans font-bold text-xs text-dark-text tracking-wide uppercase"
                >
                  Parent Name <span className="text-primary-red">*</span>
                </label>
                <Input
                  {...register("parentName")}
                  id="parent-name-input"
                  placeholder="e.g. Shalini Sharma"
                  className={cn(
                    "bg-background text-sm rounded-xl py-5 px-4 border-2 border-dark-text/30 focus:border-primary-yellow focus:ring-0 focus-visible:ring-0",
                    errors.parentName && "border-primary-red focus:border-primary-red"
                  )}
                  aria-invalid={errors.parentName ? "true" : "false"}
                />
                {errors.parentName && (
                  <span className="text-xs text-primary-red flex items-center gap-1 font-sans">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                    {(errors.parentName as any).message}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Child Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="childName"
                    className="font-sans font-bold text-xs text-dark-text tracking-wide uppercase"
                  >
                    Child Name <span className="text-primary-red">*</span>
                  </label>
                  <Input
                    {...register("childName")}
                    id="child-name-input"
                    placeholder="e.g. Aarav Sharma"
                    className={cn(
                      "bg-background text-sm rounded-xl py-5 px-4 border-2 border-dark-text/30 focus:border-primary-yellow focus:ring-0 focus-visible:ring-0",
                      errors.childName && "border-primary-red focus:border-primary-red"
                    )}
                    aria-invalid={errors.childName ? "true" : "false"}
                  />
                  {errors.childName && (
                    <span className="text-xs text-primary-red flex items-center gap-1 font-sans">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      {(errors.childName as any).message}
                    </span>
                  )}
                </div>

                {/* Child Age */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="childAge"
                    className="font-sans font-bold text-xs text-dark-text tracking-wide uppercase"
                  >
                    Child Age (Years) <span className="text-primary-red">*</span>
                  </label>
                  <Input
                    type="number"
                    step="0.5"
                    {...register("childAge")}
                    id="child-age-input"
                    placeholder="e.g. 3.5"
                    className={cn(
                      "bg-background text-sm rounded-xl py-5 px-4 border-2 border-dark-text/30 focus:border-primary-yellow focus:ring-0 focus-visible:ring-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                      errors.childAge && "border-primary-red focus:border-primary-red"
                    )}
                    aria-invalid={errors.childAge ? "true" : "false"}
                  />
                  {errors.childAge && (
                    <span className="text-xs text-primary-red flex items-center gap-1 font-sans">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      {(errors.childAge as any).message}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Mobile Number */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="mobile"
                    className="font-sans font-bold text-xs text-dark-text tracking-wide uppercase"
                  >
                    Mobile Number <span className="text-primary-red">*</span>
                  </label>
                  <Input
                    type="tel"
                    {...register("mobile")}
                    id="mobile-input"
                    placeholder="e.g. +91 98765 43210"
                    className={cn(
                      "bg-background text-sm rounded-xl py-5 px-4 border-2 border-dark-text/30 focus:border-primary-yellow focus:ring-0 focus-visible:ring-0",
                      errors.mobile && "border-primary-red focus:border-primary-red"
                    )}
                    aria-invalid={errors.mobile ? "true" : "false"}
                  />
                  {errors.mobile && (
                    <span className="text-xs text-primary-red flex items-center gap-1 font-sans">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      {(errors.mobile as any).message}
                    </span>
                  )}
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="font-sans font-bold text-xs text-dark-text tracking-wide uppercase"
                  >
                    Email Address <span className="text-primary-red">*</span>
                  </label>
                  <Input
                    type="email"
                    {...register("email")}
                    id="email-input"
                    placeholder="e.g. parent@example.com"
                    className={cn(
                      "bg-background text-sm rounded-xl py-5 px-4 border-2 border-dark-text/30 focus:border-primary-yellow focus:ring-0 focus-visible:ring-0",
                      errors.email && "border-primary-red focus:border-primary-red"
                    )}
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors.email && (
                    <span className="text-xs text-primary-red flex items-center gap-1 font-sans">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      {(errors.email as any).message}
                    </span>
                  )}
                </div>
              </div>

              {/* Preferred Program */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="preferredProgram"
                  className="font-sans font-bold text-xs text-dark-text tracking-wide uppercase"
                >
                  Preferred Program <span className="text-primary-red">*</span>
                </label>
                <select
                  {...register("preferredProgram")}
                  id="preferred-program-input"
                  className={cn(
                    "w-full bg-background text-sm rounded-xl py-3 px-4 border-2 border-dark-text/30 focus:border-primary-yellow focus:ring-0 focus-visible:outline-none dark:text-foreground font-sans",
                    errors.preferredProgram && "border-primary-red focus:border-primary-red"
                  )}
                  defaultValue=""
                >
                  <option value="" disabled>
                    -- Select Program --
                  </option>
                  <option value="Playgroup">Playgroup (1.5 - 2.5 Years)</option>
                  <option value="Nursery">Nursery (2.5 - 3.5 Years)</option>
                  <option value="Junior KG">Junior KG (3.5 - 4.5 Years)</option>
                  <option value="Senior KG">Senior KG (4.5 - 5.5 Years)</option>
                </select>
                {errors.preferredProgram && (
                  <span className="text-xs text-primary-red flex items-center gap-1 font-sans">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                    {(errors.preferredProgram as any).message}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="font-sans font-bold text-xs text-dark-text tracking-wide uppercase"
                >
                  Your Message
                </label>
                <Textarea
                  {...register("message")}
                  id="message-input"
                  placeholder="Tell us about your child's needs, behaviors, or any questions you have."
                  rows={3}
                  className="bg-background text-sm rounded-xl py-3 px-4 border-2 border-dark-text/30 focus:border-primary-yellow focus:ring-0 focus-visible:ring-0"
                />
              </div>

              {submitResult?.success === false && (
                <div className="bg-primary-red/10 border border-primary-red/20 rounded-xl p-3 flex items-start gap-2.5 text-xs text-primary-red font-sans">
                  <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>{submitResult.message}</span>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-6 rounded-full bg-primary-yellow text-dark-text hover:bg-primary-yellow/90 border-2 border-dark-text font-bold shadow-warm flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-[0.99] disabled:opacity-50"
                id="submit-inquiry-btn"
              >
                {isSubmitting ? (
                  <>
                    <Heart className="h-4 w-4 animate-ping fill-current" />
                    Submitting Inquiry...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Submit Admission Inquiry
                  </>
                )}
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}
