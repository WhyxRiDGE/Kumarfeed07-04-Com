"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Check, 
  FlaskConical, 
  Scale, 
  ShieldCheck,
  Leaf,
  Zap,
  Heart,
  TrendingUp
} from "lucide-react"

const nutritionData = {
  broiler: {
    protein: "22-24%",
    fat: "4-6%",
    fiber: "4-5%",
    calcium: "0.9-1.1%",
    phosphorus: "0.45-0.5%",
    energy: "3000-3200 kcal/kg",
  },
  sonali: {
    protein: "20-22%",
    fat: "4-5%",
    fiber: "4-5%",
    calcium: "0.9-1.0%",
    phosphorus: "0.42-0.48%",
    energy: "2900-3100 kcal/kg",
  },
  kuroiler: {
    protein: "19-21%",
    fat: "3-5%",
    fiber: "4-6%",
    calcium: "1.0-3.8%",
    phosphorus: "0.4-0.48%",
    energy: "2800-3000 kcal/kg",
  },
  layer: {
    protein: "16-18%",
    fat: "3-4%",
    fiber: "5-6%",
    calcium: "3.5-4%",
    phosphorus: "0.4-0.45%",
    energy: "2700-2900 kcal/kg",
  },
}

const specifications = [
  {
    icon: FlaskConical,
    title: "Lab Tested",
    description: "Every batch tested for quality and nutritional content",
  },
  {
    icon: Scale,
    title: "Precise Formulation",
    description: "Computer-controlled mixing for consistent quality",
  },
  {
    icon: ShieldCheck,
    title: "ISO Certified",
    description: "Manufacturing processes certified to international standards",
  },
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "Premium quality grains and natural supplements",
  },
]

const benefits = [
  {
    icon: Zap,
    title: "Faster Growth",
    stat: "15%",
    description: "faster weight gain compared to standard feed",
  },
  {
    icon: Heart,
    title: "Better Health",
    stat: "40%",
    description: "reduction in mortality rates",
  },
  {
    icon: TrendingUp,
    title: "Higher ROI",
    stat: "25%",
    description: "improved profit margins for farmers",
  },
]

export function ProductDetails() {
  const [selectedFeed, setSelectedFeed] = useState<"broiler" | "sonali" | "kuroiler" | "layer">("broiler")

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Product Specifications
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Science-Backed Nutrition for Optimal Results
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our feeds are formulated by expert nutritionists using the latest research in poultry nutrition.
          </p>
        </div>

        {/* Nutrition Information */}
        <div className="bg-card rounded-2xl border border-border p-8 mb-12">
          <Tabs value={selectedFeed} onValueChange={(v) => setSelectedFeed(v as typeof selectedFeed)}>
            <TabsList className="grid w-full max-w-xl mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="broiler">Broiler</TabsTrigger>
              <TabsTrigger value="sonali">Sonali</TabsTrigger>
              <TabsTrigger value="kuroiler">Kuroiler</TabsTrigger>
              <TabsTrigger value="layer">Layer</TabsTrigger>
            </TabsList>

            {Object.entries(nutritionData).map(([key, data]) => (
              <TabsContent key={key} value={key}>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {Object.entries(data).map(([nutrient, value]) => (
                    <div 
                      key={nutrient} 
                      className="text-center p-4 rounded-xl bg-muted/50 border border-border"
                    >
                      <div className="text-2xl font-bold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize mt-1">
                        {nutrient.replace(/([A-Z])/g, " $1").trim()}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Benefits Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-2xl bg-card border border-border p-6 text-center group hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{benefit.stat}</div>
              <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Specifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specifications.map((spec, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <spec.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{spec.title}</h3>
              <p className="text-sm text-muted-foreground">{spec.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
