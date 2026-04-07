"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface ProductCardProps {
  id: string
  icon: LucideIcon
  title: string
  tagline: string
  description: string
  benefits: string[]
  variants: string[]
  image: string
  imageFit?: "cover" | "contain"
  color: string
  onSelect: () => void
  isSelected: boolean
}

export function ProductCard({
  icon: Icon,
  title,
  tagline,
  description,
  benefits,
  variants,
  image,
  imageFit = "cover",
  color,
  onSelect,
  isSelected,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={cn(
        "group relative bg-card rounded-2xl border overflow-hidden transition-all duration-300 cursor-pointer",
        isSelected 
          ? "border-primary shadow-lg ring-2 ring-primary/20" 
          : "border-border hover:border-primary/50 hover:shadow-md"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
    >
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className={cn(
            "transition-transform duration-500",
            imageFit === "contain" ? "object-contain p-4" : "object-cover",
            imageFit === "cover" && isHovered && "scale-105"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        
        {/* Icon Badge */}
        <div className={cn(
          "absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center",
          color
        )}>
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>

        {/* Selection Indicator */}
        {isSelected && (
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <Check className="w-5 h-5 text-primary-foreground" />
          </div>
        )}

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-primary font-medium">{tagline}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>

        {/* Variants */}
        <div className="flex flex-wrap gap-1.5">
          {variants.slice(0, 3).map((variant, i) => (
            <Badge key={i} variant="secondary" className="text-xs">
              {variant}
            </Badge>
          ))}
          {variants.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{variants.length - 3} more
            </Badge>
          )}
        </div>

        {/* Key Benefits Preview */}
        <ul className="space-y-1.5">
          {benefits.slice(0, 3).map((benefit, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
              <Check className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
              <span className="line-clamp-1">{benefit}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button 
          variant={isSelected ? "default" : "outline"} 
          className="w-full group/btn"
        >
          {isSelected ? "Selected" : "Configure Order"}
          <ArrowRight className={cn(
            "w-4 h-4 ml-2 transition-transform",
            "group-hover/btn:translate-x-1"
          )} />
        </Button>
      </div>
    </div>
  )
}
