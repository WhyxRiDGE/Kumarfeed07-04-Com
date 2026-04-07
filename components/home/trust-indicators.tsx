import { Shield, Award, Leaf, TrendingUp } from "lucide-react"

const indicators = [
  {
    icon: Shield,
    title: "Quality Certified",
    description: "ISO certified manufacturing with strict quality control",
  },
  {
    icon: Award,
    title: "Premium Ingredients",
    description: "Only the finest raw materials for optimal nutrition",
  },
  {
    icon: Leaf,
    title: "Natural Formula",
    description: "Balanced blend of proteins, vitamins & minerals",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Better FCR and faster weight gain guaranteed",
  },
]

export function TrustIndicators() {
  return (
    <section className="py-12 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {indicators.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-4 group"
            >
              <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-3 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-7 h-7 text-primary-foreground group-hover:text-secondary-foreground" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-primary-foreground/80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
