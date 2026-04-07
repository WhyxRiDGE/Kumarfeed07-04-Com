import Link from "next/link"
import { Phone, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 text-balance">
            Ready to Boost Your Poultry Farm&apos;s Success?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
            Join thousands of successful farmers who trust Kumar Feeds. Get in touch today and let us help you grow your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="text-base px-8">
              <a href="tel:+919231021906" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now: +91 92310 21906
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
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

          <div className="mt-8">
            <Link 
              href="/contact"
              className="inline-flex items-center text-primary-foreground/80 hover:text-secondary transition-colors"
            >
              Or fill out our contact form
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
