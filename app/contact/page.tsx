import { Metadata } from "next"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Kumar Feeds & Biotech. Call us, WhatsApp us, or fill out our contact form. We are here to help with all your poultry feed needs.",
}

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 92310 21906",
    link: "tel:+919231021906",
    description: "Call us directly for orders and inquiries",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+91 92310 21906",
    link: "https://wa.me/919231021906?text=Hello! I am interested in your poultry feed products.",
    description: "Quick responses on WhatsApp",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@kumarfeeds.com",
    link: "mailto:info@kumarfeeds.com",
    description: "For detailed inquiries and documents",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon-Sat: 8AM - 8PM",
    link: null,
    description: "Emergency support available 24/7",
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Contact Us
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Get in Touch With Us
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have questions about our products? Need help with your order? Want expert advice? We are here to help. Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-primary font-medium hover:underline"
                  >
                    {info.value}
                  </a>
                ) : (
                  <span className="text-foreground font-medium">{info.value}</span>
                )}
                <p className="text-sm text-muted-foreground mt-2">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we will get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>

            {/* Map & Address */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Visit Our Office
              </h2>
              <p className="text-muted-foreground mb-8">
                Come meet us in person at our office and manufacturing facility.
              </p>

              {/* Map Placeholder */}
              <div className="aspect-video rounded-xl bg-muted border border-border overflow-hidden mb-6">
                <iframe
                  src="https://maps.google.com/maps?q=Plot+No.+F-3+Industrial+Area+Jasidih+Deoghar+814112&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kumar Feeds Location"
                />
              </div>

              {/* Address */}
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Our Address</h3>
                    <p className="text-muted-foreground">
                      Kumar Feeds & Biotech Private Limited<br />
                      Plot No. F-3, Industrial Area, Jasidih<br />
                      Deoghar - 814112, India
                    </p>
                    <a
                      href="https://maps.app.goo.gl/H6L7FxkZNy4LEmubA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-2 hover:underline"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Call us directly or chat with us on WhatsApp for instant support.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <a href="tel:+919231021906" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call: +91 92310 21906
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a 
                  href="https://wa.me/919231021906?text=Hello! I need help with my order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
