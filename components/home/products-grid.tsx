import Link from "next/link"
import { ArrowRight, Drumstick, Egg, Baby, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: "broiler",
    icon: Drumstick,
    title: "Broiler Feed",
    description: "High-protein formula for rapid weight gain and better FCR. Perfect for commercial broiler farming.",
    benefits: ["Fast Growth", "Better FCR", "Healthy Birds"],
    color: "bg-primary",
  },
  {
    id: "layer",
    icon: Egg,
    title: "Layer Feed",
    description: "Calcium-rich formula for maximum egg production and strong shells. Boost your egg farm profits.",
    benefits: ["More Eggs", "Strong Shells", "Consistent Quality"],
    color: "bg-secondary",
  },
  {
    id: "starter",
    icon: Baby,
    title: "Starter Feed",
    description: "Gentle nutrition for chicks in their first weeks. Sets the foundation for healthy growth.",
    benefits: ["Easy Digestion", "Strong Start", "Low Mortality"],
    color: "bg-primary",
  },
  {
    id: "custom",
    icon: Settings,
    title: "Customized Feed",
    description: "Tailored feed solutions based on your specific needs. We work with you to create the perfect blend.",
    benefits: ["Your Formula", "Expert Support", "Flexible Orders"],
    color: "bg-secondary",
  },
]

export function ProductsGrid() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Our Products
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Premium Feed for Every Need
          </h2>
          <p className="text-muted-foreground">
            Choose from our range of scientifically formulated feeds designed to maximize your poultry&apos;s potential.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <product.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{product.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {product.benefits.map((benefit, index) => (
                  <span 
                    key={index}
                    className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
              <Link 
                href={`/products#${product.id}`}
                className="inline-flex items-center text-sm font-medium text-primary hover:gap-2 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/products" className="flex items-center gap-2">
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
