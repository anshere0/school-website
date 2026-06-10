"use server"

import fs from "fs/promises"
import path from "path"
import { z } from "zod"
import { InquirySchema, InquiryInput } from "@/lib/schemas"

export async function submitInquiry(data: InquiryInput) {
  try {
    // 1. Validate with Zod server-side
    const validated = InquirySchema.parse(data)
    const timestamp = new Date().toISOString()
    const record = { ...validated, id: Math.random().toString(36).substring(2, 9), timestamp }

    // 2. Save locally (JSON mock storage) to make it out-of-the-box functional
    const filePath = path.join(process.cwd(), "inquiries.json")
    let currentRecords = []
    
    try {
      const fileData = await fs.readFile(filePath, "utf-8")
      currentRecords = JSON.parse(fileData)
    } catch {
      // File doesn't exist yet, start with empty array
    }

    currentRecords.unshift(record)
    await fs.writeFile(filePath, JSON.stringify(currentRecords, null, 2), "utf-8")

    // 3. Email notifications (Resend Integration)
    const apiKey = process.env.RESEND_API_KEY
    // Default to a staging fallback if not provided
    const targetEmail = process.env.SCHOOL_EMAIL || "ansha1288@gmail.com"

    if (apiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from: "My Wings Academy Admissions <onboarding@resend.dev>",
          to: targetEmail,
          subject: `New Admission Inquiry: ${validated.childName} (${validated.preferredProgram})`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #2D2D2D; background-color: #FFF8E7; border-radius: 12px;">
              <h2 style="color: #E53935; font-family: sans-serif;">New Inquiry Received!</h2>
              <p>Someone submitted an admission inquiry for My Wings Academy.</p>
              <hr style="border: none; border-top: 1px solid #E8DFCE; margin: 20px 0;" />
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 160px;">Parent Name:</td>
                  <td style="padding: 8px 0;">${validated.parentName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Child's Name:</td>
                  <td style="padding: 8px 0;">${validated.childName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Child's Age:</td>
                  <td style="padding: 8px 0;">${validated.childAge} years old</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Preferred Program:</td>
                  <td style="padding: 8px 0; color: #82C91E; font-weight: bold;">${validated.preferredProgram}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Mobile Number:</td>
                  <td style="padding: 8px 0;"><a href="tel:${validated.mobile}">${validated.mobile}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Email Address:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${validated.email}">${validated.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message:</td>
                  <td style="padding: 8px 0; white-space: pre-wrap;">${validated.message || "No additional message."}</td>
                </tr>
              </table>
              <hr style="border: none; border-top: 1px solid #E8DFCE; margin: 20px 0;" />
              <p style="font-size: 11px; color: #66635A;">Submitted on: ${new Date(timestamp).toLocaleString()}</p>
            </div>
          `,
        }),
      })

      if (!res.ok) {
        const errorText = await res.text()
        console.error("Resend API failed:", errorText)
      }
    } else {
      console.warn(
        "RESEND_API_KEY env is missing. Form inquiry saved locally to inquiries.json instead of sending email."
      )
    }

    return { success: true, message: "Thank you! Your inquiry has been submitted successfully." }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: error.flatten().fieldErrors }
    }
    console.error("Submission error:", error)
    return { success: false, message: "An unexpected error occurred. Please try again later." }
  }
}
