"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/40 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-red text-primary-yellow shadow-md transition-transform group-hover:scale-105">
            <Heart className="h-5 w-5 fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold text-dark-text tracking-wide dark:text-foreground">
              My Wings
            </span>
            <span className="text-[10px] font-sans font-semibold text-primary-red tracking-widest uppercase -mt-1 leading-none">
              Academy
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-semibold tracking-wide transition-colors font-sans hover:text-primary-red relative py-1",
                  isActive
                    ? "text-primary-red"
                    : "text-dark-text/85 dark:text-foreground/80"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary-red rounded-full" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Action Button (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Button asChild className="rounded-full bg-primary-yellow text-dark-text hover:bg-primary-yellow/90 font-bold border-2 border-dark-text shadow-warm transition-all hover:scale-102 cursor-pointer">
            <Link href="/admissions" id="nav-cta-desktop">
              Inquire Now
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            asChild
            size="sm"
            className="rounded-full bg-primary-yellow text-dark-text hover:bg-primary-yellow/90 font-bold border border-dark-text shadow-sm text-xs px-3 py-1 cursor-pointer"
          >
            <Link href="/admissions" id="nav-cta-mobile">
              Inquire
            </Link>
          </Button>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-dark-text hover:bg-muted dark:text-foreground cursor-pointer"
                aria-label="Open navigation menu"
                id="mobile-nav-toggle"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6 flex flex-col justify-between">
              <div>
                <SheetTitle className="text-left font-heading text-xl text-dark-text dark:text-foreground flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary-red text-primary-yellow">
                    <Heart className="h-4 w-4 fill-current" />
                  </div>
                  My Wings Academy
                </SheetTitle>
                <div className="mt-8 flex flex-col gap-4">
                  {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "text-base font-bold transition-colors font-sans py-2 block border-b border-border/20",
                          isActive
                            ? "text-primary-red pl-2 border-l-4 border-l-primary-red"
                            : "text-dark-text/80 hover:text-primary-red dark:text-foreground/80"
                        )}
                      >
                        {item.label}
                      </Link>
                    )
                  })}
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <Button
                  asChild
                  className="w-full rounded-full bg-primary-yellow text-dark-text hover:bg-primary-yellow/90 font-bold border-2 border-dark-text shadow-warm py-5 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/admissions" id="nav-cta-drawer">
                    Inquire Now
                  </Link>
                </Button>
                <p className="text-[10px] text-center text-muted-foreground">
                  Nurturing young minds since 2018
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
