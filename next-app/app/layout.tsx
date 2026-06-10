import { Fredoka, Nunito_Sans } from "next/font/google"
import { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
})

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    default: "My Wings Academy | Premium Preschool & Early Childhood Development",
    template: "%s | My Wings Academy",
  },
  description: "Discover My Wings Academy, a premium preschool dedicated to early childhood development. We offer playgroup, nursery, and kindergarten programs in a safe, warm, and professional environment.",
  keywords: ["preschool", "kindergarten", "child development", "early learning", "playgroup", "nursery", "my wings academy"],
  authors: [{ name: "My Wings Academy" }],
  openGraph: {
    title: "My Wings Academy | Premium Preschool",
    description: "Nurturing young minds in a safe, warm, and professional environment.",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased font-sans", fredoka.variable, nunitoSans.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
