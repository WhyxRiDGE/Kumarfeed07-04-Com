import { Metadata } from "next"
import { 
  BookOpen, 
  Stethoscope, 
  ThermometerSun,
  Droplets,
  Lightbulb,
  Calendar,
  Phone,
  MessageCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Farmer Support",
  description: "Expert guidance for poultry farmers - feeding tips, health advice, FAQs, and 24/7 support. Get help from Kumar Feeds experts.",
}

const feedingTips = [
  {
    icon: Calendar,
    title: "Follow Age-Based Feeding",
    description: "Use the right feed for each growth stage. Chicks need pre-starter and starter feed, and mature birds need finisher or layer feed for optimal results.",
  },
  {
    icon: Droplets,
    title: "Clean Water Always",
    description: "Birds drink 2-3 times more water than feed. Ensure fresh, clean water is available 24/7. Dirty water reduces feed intake and growth.",
  },
  {
    icon: BookOpen,
    title: "Measure and Record",
    description: "Weigh feed daily and keep records. This helps you calculate FCR and identify problems early. Track body weight weekly.",
  },
  {
    icon: ThermometerSun,
    title: "Store Feed Properly",
    description: "Keep feed in cool, dry place away from sunlight. Use within 3-4 weeks of manufacture. Check for moisture or mold before feeding.",
  },
]

const healthTips = [
  {
    icon: Stethoscope,
    title: "Daily Health Checks",
    description: "Observe your birds every day. Look for signs like drooping wings, watery eyes, reduced appetite, or unusual droppings. Early detection saves birds.",
  },
  {
    icon: ThermometerSun,
    title: "Temperature Control",
    description: "Maintain proper brooder temperature for chicks (35°C in first week, reduce by 3°C each week). Adult birds need good ventilation in summer.",
  },
  {
    icon: Lightbulb,
    title: "Proper Lighting",
    description: "Layers need 16-17 hours of light for good egg production. Broilers benefit from controlled lighting programs. Use timers for consistency.",
  },
  {
    icon: Droplets,
    title: "Biosecurity",
    description: "Keep visitors out of bird areas. Disinfect equipment regularly. Quarantine new birds for 2 weeks. These simple steps prevent major losses.",
  },
]

const faqs = [
  {
    question: "How much feed does a broiler need to reach 2kg weight?",
    answer: "A broiler typically needs 3.5-4kg of feed to reach 2kg body weight, achieving an FCR of 1.75-2.0. This depends on the quality of feed, management practices, and bird genetics. With Kumar Feeds, many farmers achieve FCR below 1.8.",
  },
  {
    question: "Why are my birds not growing as expected?",
    answer: "Poor growth can be caused by several factors: inadequate feed intake, poor water quality, disease, stress, or incorrect brooder temperature. Check all these factors and consult our experts if the problem persists.",
  },
  {
    question: "How can I improve egg production in my layers?",
    answer: "Ensure layers get 16-17 hours of light daily, feed adequate calcium-rich layer feed (100-120g per bird), provide clean water, and maintain a stress-free environment. Sudden changes in routine can reduce laying.",
  },
  {
    question: "What is the shelf life of your feed?",
    answer: "Our feed stays fresh for 3-4 weeks when stored properly in a cool, dry place. Avoid exposure to sunlight and moisture. Always check the manufacturing date and use older stock first.",
  },
  {
    question: "Can I mix your feed with other ingredients?",
    answer: "We do not recommend mixing as our feed is already balanced. Adding other ingredients can upset the nutritional balance. If you have specific needs, contact us for a customized feed formula.",
  },
  {
    question: "How do I place an order for feed?",
    answer: "You can call us at +91 92310 21906, WhatsApp us, or fill out the contact form on our website. We deliver across North India and can arrange regular supply schedules.",
  },
  {
    question: "Do you offer credit or payment plans?",
    answer: "We work with established farmers on credit terms after building a relationship. New customers can start with cash orders and move to credit as trust develops. Contact our sales team to discuss options.",
  },
  {
    question: "What vaccines should I give my birds?",
    answer: "Vaccination schedules vary by region and bird type. Common vaccines include Newcastle Disease, IBD (Gumboro), and Marek&apos;s. Consult a local veterinarian or our experts for a schedule specific to your area.",
  },
]

export default function FarmerSupportPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Farmer Support
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              We Are Here to Help You Succeed
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              From feeding advice to health tips, our experts are ready to help you get the best results from your poultry farm. Your success is our mission.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <a href="tel:+919231021906" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Expert Now
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a 
                  href="https://wa.me/919231021906?text=Hello! I need help with my poultry farm."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feeding Tips */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Feeding Tips
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get the Most From Your Feed
            </h2>
            <p className="text-muted-foreground">
              Simple practices that can make a big difference in your results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {feedingTips.map((tip, index) => (
              <div 
                key={index}
                className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <tip.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Poultry Care / Health Tips */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Poultry Care
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Keep Your Birds Healthy
            </h2>
            <p className="text-muted-foreground">
              Healthy birds grow better and produce more. Follow these guidelines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {healthTips.map((tip, index) => (
              <div 
                key={index}
                className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-secondary/50 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <tip.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              FAQs
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Quick answers to common questions from farmers.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-medium text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Talk to Expert CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Our team of veterinarians and poultry experts is available 24/7 to help you with any questions or problems.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <a href="tel:+919231021906" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Expert: +91 92310 21906
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a 
                  href="https://wa.me/919231021906?text=Hello! I need expert advice for my poultry farm."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Expert
                </a>
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/60 mt-6">
              Available Monday to Saturday, 8 AM to 8 PM. Emergency support available 24/7.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
