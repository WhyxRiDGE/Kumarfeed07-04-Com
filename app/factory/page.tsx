import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { 
  MapPin, 
  Clock, 
  Users, 
  Award, 
  Factory, 
  Leaf, 
  Shield, 
  Truck,
  Phone,
  ArrowRight,
  CheckCircle2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { FactoryGallery } from "@/components/factory/factory-gallery"

export const metadata: Metadata = {
  title: "Our Factory | Kumar Feeds & Biotech",
  description: "Explore our state-of-the-art manufacturing facility. Modern equipment, strict quality control, and sustainable practices ensure premium poultry feed production.",
}

const factoryStats = [
  { label: "Production Capacity", value: "500+", unit: "Tons/Day", icon: Factory },
  { label: "Quality Tests Daily", value: "200+", unit: "Tests", icon: Shield },
  { label: "Skilled Workforce", value: "150+", unit: "Employees", icon: Users },
  { label: "Years of Operation", value: "25+", unit: "Years", icon: Clock },
]

const certifications = [
  {
    name: "ISO 9001:2015",
    description: "Quality Management System",
    icon: Award,
  },
  {
    name: "FSSAI Certified",
    description: "Food Safety Standards Authority of India",
    icon: Shield,
  },
  {
    name: "GMP Certified",
    description: "Good Manufacturing Practices",
    icon: CheckCircle2,
  },
  {
    name: "ISO 14001:2015",
    description: "Environmental Management System",
    icon: Leaf,
  },
]

const operationalDetails = [
  {
    title: "Raw Material Sourcing",
    description: "We source premium quality ingredients from certified suppliers across India, ensuring consistent quality in every batch.",
    icon: Truck,
  },
  {
    title: "Advanced Processing",
    description: "Our automated production lines use the latest technology for precise mixing, pelleting, and quality control.",
    icon: Factory,
  },
  {
    title: "Quality Assurance",
    description: "Every batch undergoes rigorous testing in our in-house laboratory before packaging and dispatch.",
    icon: Shield,
  },
  {
    title: "Sustainable Practices",
    description: "We are committed to eco-friendly manufacturing with waste recycling and energy-efficient processes.",
    icon: Leaf,
  },
]

export default function FactoryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Manufacturing Facility
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              State-of-the-Art Feed Manufacturing
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our modern facility combines cutting-edge technology with decades of expertise 
              to produce premium quality poultry feed that helps farmers achieve better results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Schedule a Visit
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+919231021906">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Stats */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {factoryStats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-secondary" />
                <div className="text-3xl lg:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-primary-foreground/80">{stat.unit}</div>
                <div className="text-xs text-primary-foreground/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Information */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Factory Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Kumar Feeds Manufacturing Unit
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Established in 2000, our manufacturing facility spans over 5 acres in the 
                  industrial belt of Haryana. Equipped with fully automated production lines 
                  from leading European manufacturers, we produce over 500 tons of premium 
                  poultry feed daily.
                </p>
              </div>

              {/* Location Card */}
              <div className="bg-muted/50 rounded-2xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Factory Location</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Plot No. F-3, Industrial Area, Jasidih<br />
                      Deoghar - 814112, India
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/H6L7FxkZNy4LEmubA" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-2 hover:underline"
                    >
                      View on Google Maps
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-muted/50 rounded-2xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Operating Hours</h3>
                    <div className="text-muted-foreground text-sm space-y-1">
                      <p>Production: 24 Hours, 7 Days a Week</p>
                      <p>Office: Monday - Saturday, 9:00 AM - 6:00 PM</p>
                      <p>Dispatch: 6:00 AM - 10:00 PM Daily</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Factory Image Placeholder */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <Image
                src="/images/manufacturing.jpg"
                alt="Kumar Feeds Manufacturing Facility"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <div className="text-xl font-semibold">Main Production Hall</div>
                <p className="text-sm text-primary-foreground/80">Fully automated feed production line</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Gallery */}
      <FactoryGallery />

      {/* Operational Process */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Manufacturing Process
            </h2>
            <p className="text-muted-foreground">
              From raw materials to finished products, every step is carefully monitored 
              to ensure the highest quality standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {operationalDetails.map((detail, index) => (
              <div 
                key={index} 
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <detail.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground mb-2">Step {index + 1}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{detail.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {detail.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-muted-foreground">
              Our commitment to quality is validated by leading certification bodies, 
              ensuring you receive products that meet the highest industry standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 border border-border text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Visit Our Factory
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            We welcome farmers and business partners to tour our facility. 
            See firsthand how we maintain the highest quality standards in feed production.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Schedule a Factory Tour
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <a href="tel:+919231021906">
                <Phone className="w-4 h-4 mr-2" />
                +91 92310 21906
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
