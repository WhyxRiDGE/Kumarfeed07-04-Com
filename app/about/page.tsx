import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
  ArrowRight,
  Phone
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Kumar Feeds & Biotech Private Limited - over 8 years of excellence in poultry nutrition. Our mission, vision, and commitment to farmer success.",
}

const milestones = [
  { year: "2019", event: "Company founded with a small manufacturing unit" },
  { year: "2020", event: "Expanded production capacity by 5x" },
  { year: "2021", event: "Achieved ISO certification for quality management" },
  { year: "2022", event: "Launched specialized layer and starter feeds" },
  { year: "2023", event: "Reached 150,000+ farmer customers milestone" },
  { year: "2025", event: "New Poultry Intrigation Started" },
]

const values = [
  {
    icon: Heart,
    title: "Farmer First",
    description: "Everything we do is focused on helping farmers succeed. Your success is our success.",
  },
  {
    icon: Award,
    title: "Quality Always",
    description: "We never compromise on quality. Every batch meets our strict standards.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We build relationships, not just business. Our farmers are family.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "We continuously improve our formulas based on the latest research.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              8+ Years of Helping Farmers Grow
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kumar Feeds & Biotech Private Limited has been a trusted name in poultry nutrition since 2019. We are committed to providing premium quality feed that helps farmers achieve better results and higher profits.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Our Story
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Kumar Feeds was born from a simple belief: Indian poultry farmers deserve access to world-class nutrition at fair prices. Our founder, Mr. Uday Kumar, started with a small manufacturing unit and a big dream.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over the years, we have grown from a local supplier to one of the most trusted names in poultry feed across North India. But our core values remain the same - quality, integrity, and farmer success.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we serve over 150,000 farmers and produce lakhs of kilograms of premium feed every month. Our state-of-the-art facility uses the latest technology to ensure consistent quality in every bag.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/manufacturing.jpg"
                  alt="Kumar Feeds manufacturing facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-center text-primary-foreground">
                  <div className="text-xl font-semibold">Growing Together</div>
                  <p className="text-primary-foreground/80 mt-2">Since 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower Indian poultry farmers with premium quality feed and expert guidance, helping them build profitable and sustainable businesses. We strive to be more than a supplier - we are a partner in their success.
              </p>
            </div>
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be India&apos;s most trusted and innovative poultry nutrition company. We envision a future where every farmer, big or small, has access to world-class feed and the support they need to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                Founder Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                A Vision Rooted in Farming
              </h2>
            </div>
            <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                &quot;I grew up on a small farm in Deoghar and saw firsthand the challenges farmers face. When I started Kumar Feeds, my goal was simple - to create feed that I would trust for my own birds.&quot;
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Mr. Uday Kumar started with a small mixing unit and just three employees. He personally visited farms, understood farmers&apos; problems, and developed formulas that addressed real needs. His hands-on approach and commitment to quality quickly earned the trust of local farmers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, his son continues this legacy, combining traditional wisdom with modern science to create feeds that deliver consistent results. The family&apos;s farming roots remain at the heart of everything we do.
              </p>

              <div className="mt-10 overflow-hidden rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-border/50">
                <Image
                  src="/images/founder-vision.png"
                  alt="Founder Vision - Mr. Uday Kumar"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO's Thought */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                CEO&apos;s Thought
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Driving the Future
              </h2>
            </div>
            <div className="bg-background rounded-2xl p-8 md:p-12 shadow-sm border border-border">
              <div className="overflow-hidden rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-border/50">
                <Image
                  src="/images/ceo-thought.png"
                  alt="CEO's Thought - Nourishing lives through responsible farming and uncompromising quality."
                  width={1200}
                  height={1600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Stand For
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-card rounded-2xl border border-border p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Our Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Milestones Along the Way
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-20 flex-shrink-0">
                    <span className="text-xl font-bold text-primary">{milestone.year}</span>
                  </div>
                  <div className="flex-1 pb-6 border-l-2 border-primary/20 pl-6 relative">
                    <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary -translate-x-[7px]" />
                    <p className="text-muted-foreground">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Join the Kumar Feeds family and experience the difference that quality makes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <a href="tel:+919231021906" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/contact" className="flex items-center gap-2">
                  Contact Us
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
