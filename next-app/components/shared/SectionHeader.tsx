import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  badge?: string
  align?: "left" | "center"
  className?: string
  badgeColor?: "yellow" | "red" | "blue" | "green"
}

export function SectionHeader({
  title,
  subtitle,
  badge,
  align = "center",
  className,
  badgeColor = "yellow",
}: SectionHeaderProps) {
  const badgeColors = {
    yellow: "bg-primary-yellow/20 text-dark-text border border-primary-yellow/40",
    red: "bg-primary-red/10 text-primary-red border border-primary-red/20",
    blue: "bg-brand-blue/10 text-brand-blue border border-brand-blue/20",
    green: "bg-brand-green/10 text-brand-green border border-brand-green/20",
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-3 max-w-2xl",
        align === "center" ? "mx-auto text-center items-center" : "text-left items-start",
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            "inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase font-sans",
            badgeColors[badgeColor]
          )}
        >
          {badge}
        </span>
      )}
      
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark-text leading-tight dark:text-foreground">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-base md:text-lg text-muted-foreground font-sans leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}

      {/* Decorative organic squiggly under header */}
      <div className="flex gap-1.5 mt-1">
        <span className={cn("h-2 w-12 rounded-full", 
          badgeColor === "yellow" ? "bg-primary-yellow" : 
          badgeColor === "red" ? "bg-primary-red" : 
          badgeColor === "blue" ? "bg-brand-blue" : "bg-brand-green"
        )} />
        <span className={cn("h-2 w-3 rounded-full", 
          badgeColor === "yellow" ? "bg-primary-yellow/60" : 
          badgeColor === "red" ? "bg-primary-red/60" : 
          badgeColor === "blue" ? "bg-brand-blue/60" : "bg-brand-green/60"
        )} />
        <span className={cn("h-2 w-2 rounded-full", 
          badgeColor === "yellow" ? "bg-primary-yellow/40" : 
          badgeColor === "red" ? "bg-primary-red/40" : 
          badgeColor === "blue" ? "bg-brand-blue/40" : "bg-brand-green/40"
        )} />
      </div>
    </div>
  )
}
