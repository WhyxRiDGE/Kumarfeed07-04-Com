import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Target, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutPreview() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Your Trusted Partner in Poultry Farming Success
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Kumar Feeds & Biotech Private Limited has been serving Indian poultry farmers for over 25 years. We understand the challenges you face and have dedicated ourselves to creating feed solutions that deliver real results.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our state-of-the-art manufacturing facility uses the latest technology to ensure every batch of feed meets our exacting standards. From raw material selection to final packaging, quality is our top priority.
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-muted border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Our Mission</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  To empower farmers with premium quality feed that maximizes their returns.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-muted border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Our Vision</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  To be India&apos;s most trusted poultry nutrition partner.
                </p>
              </div>
            </div>

            <Button asChild className="mt-4">
              <Link href="/about" className="flex items-center gap-2">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden relative">
              <Image
                src="/images/feed-products.jpg"
                alt="Premium poultry feed products"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center text-primary-foreground">
                <div className="text-6xl font-bold">25+</div>
                <div className="text-xl font-semibold mt-2">Years of Excellence</div>
                <p className="text-primary-foreground/80 mt-2">Serving Indian Farmers Since 2000</p>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
