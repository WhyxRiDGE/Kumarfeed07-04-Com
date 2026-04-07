import { 
  FlaskConical, 
  Truck, 
  HeadphonesIcon, 
  BadgeCheck, 
  Wallet, 
  Users 
} from "lucide-react"

const reasons = [
  {
    icon: FlaskConical,
    title: "Scientific Formulation",
    description: "Our feed is developed by animal nutrition experts using the latest research and technology.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    description: "Every batch is tested in our lab to ensure consistent quality and nutrition levels.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Timely delivery to your farm. We understand that running out of feed costs you money.",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    description: "Our team of veterinarians and nutritionists are always ready to help you succeed.",
  },
  {
    icon: Wallet,
    title: "Competitive Pricing",
    description: "Premium quality at fair prices. We help you maximize your profit margins.",
  },
  {
    icon: Users,
    title: "Farmer Community",
    description: "Join our network of successful farmers and learn from each other&apos;s experiences.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            What Makes Kumar Feeds Different?
          </h2>
          <p className="text-muted-foreground">
            We go beyond just selling feed. We are your partner in building a successful poultry business.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
