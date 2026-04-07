import Image from "next/image"
import { Phone, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-poultry.jpg"
          alt="Healthy poultry at Kumar Feeds farm"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Trusted by 10,000+ Farmers Across India
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
            Premium Poultry Feed for{" "}
            <span className="text-primary">Faster Growth</span> &{" "}
            <span className="text-secondary">Higher Profits</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
            Give your birds the best nutrition. Our scientifically formulated feed helps your poultry grow stronger, healthier, and more profitable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button asChild size="lg" className="text-base px-8">
              <a href="tel:+919231021906" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <a 
                href="https://wa.me/919231021906?text=Hello! I am interested in your poultry feed products."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: "25+", label: "Years Experience" },
              { value: "10K+", label: "Happy Farmers" },
              { value: "50L+", label: "Kg Feed Sold" },
              { value: "100%", label: "Quality Assured" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-card border border-border">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
      </div>
    </section>
  )
}
