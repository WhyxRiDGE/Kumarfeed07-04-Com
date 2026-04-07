import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { 
  ArrowRight,
  Phone,
  Shield,
  Award,
  Truck,
  Clock
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductShowcase } from "@/components/products/product-showcase"
import { ProductDetails } from "@/components/products/product-details"

export const metadata: Metadata = {
  title: "Our Products",
  description: "Premium poultry feed products - Broiler Feed, Layer Feed, Starter Feed, and Customized Feed solutions. Scientific formulation for maximum results.",
}

const trustBadges = [
  { icon: Shield, label: "Quality Assured" },
  { icon: Award, label: "ISO Certified" },
  { icon: Truck, label: "Pan India Delivery" },
  { icon: Clock, label: "24/7 Support" },
]

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/feed-products.jpg"
            alt="Premium poultry feed products"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              Premium Products
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
              Premium Feed for Every Stage
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              From day-old chicks to mature layers, we have the right nutrition for every bird. All our feeds are scientifically formulated for maximum results.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              {trustBadges.map((badge, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full border border-border"
                >
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase with Configurator */}
      <ProductShowcase />

      {/* Product Details & Specifications */}
      <ProductDetails />

      {/* Comparison Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Farmers Choose Us
            </h2>
            <p className="text-muted-foreground">
              See how Kumar Feeds compares to conventional feed options
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Kumar Feeds */}
              <div className="bg-primary/5 rounded-2xl border-2 border-primary p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Image
                    src="/images/kf-logo.png"
                    alt="Kumar Feeds"
                    width={40}
                    height={40}
                    className="object-contain w-auto h-auto"
                  />
                  <div>
                    <h3 className="font-bold text-foreground">Kumar Feeds</h3>
                    <span className="text-xs text-primary">Premium Quality</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Scientific formulation by expert nutritionists",
                    "100% quality tested raw materials",
                    "Consistent batch-to-batch quality",
                    "24/7 farmer support hotline",
                    "Customized feed solutions available",
                    "Pan-India delivery network",
                    "ISO certified manufacturing",
                    "Monthly subscription discounts",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Conventional Feed */}
              <div className="bg-muted/50 rounded-2xl border border-border p-8">
                <div className="mb-6">
                  <h3 className="font-bold text-muted-foreground">Conventional Feed</h3>
                  <span className="text-xs text-muted-foreground">Standard Quality</span>
                </div>
                <ul className="space-y-3">
                  {[
                    "Generic formulation",
                    "Limited quality control",
                    "Inconsistent quality",
                    "Limited support options",
                    "One-size-fits-all approach",
                    "Local availability only",
                    "No certifications",
                    "No subscription benefits",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src="/images/manufacturing.jpg"
                alt="Kumar Feeds manufacturing facility"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="grid grid-cols-3 gap-4 text-center text-primary-foreground">
                  <div>
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-xs opacity-80">Tested</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-xs opacity-80">Parameters</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">ISO</div>
                    <div className="text-xs opacity-80">Certified</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                Quality Assurance
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Every Bag Is Quality Tested
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our in-house laboratory tests every batch of raw materials and finished products. We check for protein content, moisture levels, and nutritional values to ensure you get consistent quality every time.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Raw material inspection before processing",
                  "In-process quality checks",
                  "Final product testing and certification",
                  "Regular third-party audits",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link href="/about" className="flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Need Help Choosing the Right Feed?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Our experts are ready to help you select the best feed for your birds. Call us or visit our support page.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <a href="tel:+919231021906" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Talk to Expert
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/farmer-support" className="flex items-center gap-2">
                  Farmer Support
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
