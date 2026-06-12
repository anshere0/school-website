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
    const targetEmail = process.env.SCHOOL_EMAIL || "leenachopra@yahoo.com"

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
            <div style="font-family: sans-serif; padding: 20px; color: #2D2D2D; background-color: #FFFAF0; border-radius: 16px; border: 2px solid #BA0C2F;">
              <h2 style="color: #BA0C2F; font-family: sans-serif; margin-bottom: 5px;">New Inquiry Received!</h2>
              <p style="font-size: 14px; margin-top: 0; color: #706B5E;">Someone submitted an admission inquiry for My Wings Academy.</p>
              <hr style="border: none; border-top: 2px dashed #F0E6D2; margin: 20px 0;" />
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 160px; color: #BA0C2F;">Parent Name:</td>
                  <td style="padding: 8px 0; color: #2D2D2D;">${validated.parentName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #BA0C2F;">Child's Name:</td>
                  <td style="padding: 8px 0; color: #2D2D2D;">${validated.childName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #BA0C2F;">Child's Age:</td>
                  <td style="padding: 8px 0; color: #2D2D2D;">${validated.childAge} years old</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #BA0C2F;">Preferred Program:</td>
                  <td style="padding: 8px 0; color: #BA0C2F; font-weight: bold; background-color: #FFD400; display: inline-block; padding: 2px 8px; border-radius: 6px;">${validated.preferredProgram}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #BA0C2F;">Mobile Number:</td>
                  <td style="padding: 8px 0;"><a href="tel:${validated.mobile}" style="color: #BA0C2F; font-weight: bold; text-decoration: none;">${validated.mobile}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #BA0C2F;">Email Address:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${validated.email}" style="color: #BA0C2F; font-weight: bold; text-decoration: none;">${validated.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; vertical-align: top; color: #BA0C2F;">Message:</td>
                  <td style="padding: 8px 0; white-space: pre-wrap; color: #2D2D2D;">${validated.message || "No additional message."}</td>
                </tr>
              </table>
              <hr style="border: none; border-top: 2px dashed #F0E6D2; margin: 20px 0;" />
              <p style="font-size: 11px; color: #706B5E; margin: 0;">Submitted on: ${new Date(timestamp).toLocaleString()}</p>
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
