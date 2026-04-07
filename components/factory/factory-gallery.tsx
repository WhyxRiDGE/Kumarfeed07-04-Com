"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const galleryImages = [
  {
    src: "/images/factory/Gen_Factory_Final.png",
    alt: "Kumar Feeds factory aerial view at sunset",
    title: "Our Factory",
    description: "Aerial view of our manufacturing facility at sunset — fully operational, 24/7",
  },
  {
    src: "/images/factory/Gen_Factory.png",
    alt: "Kumar Feeds factory exterior",
    title: "Factory Exterior",
    description: "Our large-scale production campus with dispatch bays and loading areas",
  },
  {
    src: "/images/factory/Gen_Machine.png",
    alt: "Advanced feed processing machinery",
    title: "Processing Machinery",
    description: "State-of-the-art multi-level feed processing and pelleting equipment",
  },
  {
    src: "/images/factory/Gen_Wharehouse.png",
    alt: "Warehouse with feed sacks and workers",
    title: "Warehouse Operations",
    description: "Our well-organized warehouse with trained staff managing inventory",
  },
  {
    src: "/images/factory/Gen_Sacks_Zoom_Out.png",
    alt: "Feed product display showroom",
    title: "Product Showroom",
    description: "Our product display area showcasing the full range of Kumar Feeds products",
  },
  {
    src: "/images/factory/Gen_Sacks.png",
    alt: "Feed product range close-up",
    title: "Product Range",
    description: "Close-up view of our complete poultry feed product lineup",
  },
  {
    src: "/images/factory/Gen_White_Sack.png",
    alt: "White feed sacks in factory storage",
    title: "Raw Material Storage",
    description: "High-quality raw materials stored under controlled conditions",
  },
]

export function FactoryGallery() {
  const [current, setCurrent] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return
      setIsAnimating(true)
      setCurrent((index + galleryImages.length) % galleryImages.length)
      setTimeout(() => setIsAnimating(false), 400)
    },
    [isAnimating]
  )

  const goNext = useCallback(() => goTo(current + 1), [current, goTo])
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo])

  // Auto-advance every 5 seconds when lightbox is closed
  useEffect(() => {
    if (lightboxOpen) return
    const timer = setInterval(goNext, 5000)
    return () => clearInterval(timer)
  }, [goNext, lightboxOpen])

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
      if (e.key === "Escape") setLightboxOpen(false)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [lightboxOpen, goNext, goPrev])

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [lightboxOpen])

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Factory Gallery
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            A Look Inside Our Facility
          </h2>
          <p className="text-muted-foreground">
            Take a visual tour of our manufacturing unit — from raw material storage
            to finished product dispatch.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="max-w-5xl mx-auto">
          {/* Slide */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted shadow-lg group">
            <Image
              key={current}
              src={galleryImages[current].src}
              alt={galleryImages[current].alt}
              fill
              className="object-cover transition-opacity duration-500"
              priority
              sizes="(max-width: 768px) 100vw, 900px"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
              <h3 className="text-xl font-bold">{galleryImages[current].title}</h3>
              <p className="text-sm text-primary-foreground/80 mt-1">
                {galleryImages[current].description}
              </p>
            </div>

            {/* Zoom button */}
            <button
              onClick={() => setLightboxOpen(true)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-foreground/40 backdrop-blur-sm flex items-center justify-center text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-foreground/60"
              aria-label="View fullscreen"
            >
              <ZoomIn className="w-5 h-5" />
            </button>

            {/* Prev / Next arrows */}
            <Button
              variant="ghost"
              size="icon"
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-foreground/30 backdrop-blur-sm text-primary-foreground hover:bg-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-foreground/30 backdrop-blur-sm text-primary-foreground hover:bg-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Slide counter */}
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-foreground/40 backdrop-blur-sm text-primary-foreground text-xs font-medium">
              {current + 1} / {galleryImages.length}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  "rounded-full transition-all duration-300",
                  i === current
                    ? "w-8 h-2.5 bg-primary"
                    : "w-2.5 h-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                )}
              />
            ))}
          </div>

          {/* Thumbnail strip */}
          <div className="flex gap-3 mt-5 overflow-x-auto pb-2 justify-center">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={cn(
                  "relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden transition-all duration-200",
                  i === current
                    ? "ring-2 ring-primary ring-offset-2 opacity-100"
                    : "opacity-50 hover:opacity-80"
                )}
                aria-label={img.title}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-primary-foreground hover:bg-primary-foreground/10 z-10"
          >
            <X className="w-6 h-6" />
          </Button>

          {/* Prev */}
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground hover:bg-primary-foreground/10 z-10 w-12 h-12"
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>

          {/* Next */}
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => { e.stopPropagation(); goNext() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground hover:bg-primary-foreground/10 z-10 w-12 h-12"
          >
            <ChevronRight className="w-8 h-8" />
          </Button>

          {/* Image */}
          <div
            className="relative w-full max-w-5xl max-h-[80vh] aspect-video mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[current].src}
              alt={galleryImages[current].alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-8 left-0 right-0 text-center text-primary-foreground px-4">
            <h3 className="text-xl font-semibold">{galleryImages[current].title}</h3>
            <p className="text-primary-foreground/70 text-sm mt-1">
              {galleryImages[current].description}
            </p>
            <p className="text-primary-foreground/50 text-xs mt-2">
              {current + 1} / {galleryImages.length} &nbsp;·&nbsp; Press ← → to navigate · Esc to close
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
