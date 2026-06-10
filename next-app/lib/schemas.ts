import { z } from "zod"

export const InquirySchema = z.object({
  parentName: z.string().min(2, "Parent name must be at least 2 characters"),
  childName: z.string().min(2, "Child name must be at least 2 characters"),
  childAge: z.coerce
    .number()
    .min(1, "Child age must be at least 1")
    .max(10, "Child age must be under 10"),
  mobile: z
    .string()
    .min(10, "Mobile number must be at least 10 digits")
    .max(15, "Mobile number must not exceed 15 digits")
    .regex(/^[0-9+\s-]{10,15}$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  preferredProgram: z.enum(["Playgroup", "Nursery", "Junior KG", "Senior KG"]),
  message: z.string().optional(),
})

export type InquiryInput = z.infer<typeof InquirySchema>
