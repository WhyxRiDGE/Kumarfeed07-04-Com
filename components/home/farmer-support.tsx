import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Stethoscope, HelpCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const supportFeatures = [
  {
    icon: BookOpen,
    title: "Feeding Guidelines",
    description: "Detailed feeding schedules and quantities for optimal results at every growth stage.",
  },
  {
    icon: Stethoscope,
    title: "Health Advice",
    description: "Tips to keep your birds healthy and prevent common diseases. Expert guidance available.",
  },
  {
    icon: HelpCircle,
    title: "FAQs & Resources",
    description: "Answers to common questions and helpful resources for poultry farmers.",
  },
  {
    icon: Phone,
    title: "Direct Helpline",
    description: "Call our experts anytime. We are here to help you solve problems quickly.",
  },
]

export function FarmerSupport() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium">
              Farmer Support
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              We Are With You Every Step of the Way
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Your success is our success. That&apos;s why we offer complete support to help you get the most out of your poultry farming business. From feeding advice to health tips, we are always here for you.
            </p>
            
            <div className="space-y-4">
              {supportFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild className="mt-4">
              <Link href="/farmer-support" className="flex items-center gap-2">
                Get Support Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
              <Image
                src="/images/happy-farmer.jpg"
                alt="Happy farmer with poultry"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center text-primary-foreground">
                <div className="text-5xl font-bold">24/7</div>
                <div className="text-xl font-semibold mt-2">Expert Support</div>
                <p className="text-primary-foreground/80 mt-2">Call us anytime at +91 92310 21906</p>
                <Button asChild className="mt-6" variant="secondary">
                  <a href="tel:+919231021906" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Talk to Expert
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
