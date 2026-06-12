"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { Heart, Sparkles, Smile, GraduationCap, Palette, Trophy, Music } from "lucide-react"

interface OrganicBlobImageProps {
  src?: string
  alt: string
  shape?: 1 | 2 | 3 | 4
  className?: string
  color?: "yellow" | "red" | "blue" | "green"
  placeholderIcon?: "heart" | "sparkles" | "smile" | "education" | "art" | "trophy" | "music"
}

export function OrganicBlobImage({
  src,
  alt,
  shape = 1,
  className,
  color = "yellow",
  placeholderIcon = "smile",
}: OrganicBlobImageProps) {
  const shapes = {
    1: "rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%]",
    2: "rounded-[30%_70%_70%_30%_/_50%_60%_40%_50%]",
    3: "rounded-[50%_50%_30%_70%_/_50%_60%_40%_50%]",
    4: "rounded-[40%_60%_60%_40%_/_60%_60%_40%_40%]",
  }

  const colors = {
    yellow: "bg-primary-yellow/20 border-primary-yellow shadow-warm",
    red: "bg-primary-red/10 border-primary-red shadow-warm-red",
    blue: "bg-brand-blue/20 border-brand-blue shadow-warm-blue",
    green: "bg-brand-green/20 border-brand-green shadow-warm-green",
  }

  const icons = {
    heart: Heart,
    sparkles: Sparkles,
    smile: Smile,
    education: GraduationCap,
    art: Palette,
    trophy: Trophy,
    music: Music,
  }

  const IconComponent = icons[placeholderIcon]

  // We check if it is a placeholder image path or undefined
  const isPlaceholder = !src || src.startsWith("/placeholder") || src === ""

  return (
    <div
      className={cn(
        "relative aspect-square w-full overflow-hidden border-4 border-dashed transition-all duration-500 hover:scale-[1.02]",
        shapes[shape],
        colors[color],
        className
      )}
    >
      {isPlaceholder ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <IconComponent
            className={cn(
              "h-12 w-12 mb-3 animate-bounce",
              color === "yellow" && "text-primary-yellow",
              color === "red" && "text-primary-red",
              color === "blue" && "text-brand-blue",
              color === "green" && "text-brand-green"
            )}
            strokeWidth={1.5}
          />
          <span className="font-heading font-medium text-sm text-dark-text/70 dark:text-foreground/70">
            {alt}
          </span>
          <span className="text-[10px] font-sans text-muted-foreground mt-1">
            Photo Placeholder
          </span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      )}
    </div>
  )
}
