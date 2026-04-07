"use client"

import { useState } from "react"
import { ProductCard } from "./product-card"
import { ProductConfigurator } from "./product-configurator"
import { 
  Drumstick, 
  Egg, 
  Bird, 
  Sun,
} from "lucide-react"

const products = [
  {
    id: "broiler",
    icon: Drumstick,
    title: "Broiler Feed",
    tagline: "Maximize Growth, Maximize Profits",
    description: "Scientifically formulated for rapid weight gain and improved Feed Conversion Ratio (FCR). Give your broilers the nutrition they need to reach market weight faster.",
    benefits: [
      "Faster weight gain - reach market weight in less time",
      "Better FCR - more meat per kg of feed",
      "Stronger immunity - healthier birds, lower mortality",
      "Improved meat quality - better prices in market",
      "Consistent formulation - reliable results every time",
    ],
    usage: "Feed according to age: Pre-starter (0-10 days), Starter (11-21 days), Finisher (22+ days). Ensure clean water is always available.",
    variants: ["Pre-Starter", "Starter", "Finisher"],
    image: "/images/products/broiler-feed-bag.jpg",
    imageFit: "contain" as const,
    color: "bg-primary",
    basePrice: 1400,
  },
  {
    id: "sonali",
    icon: Sun,
    title: "Sonali Feed",
    tagline: "Bred for the Golden Yield",
    description: "Specially crafted for Sonali (Golden) crossbred birds — balancing rapid growth with the superior meat quality that commands a premium in local and regional markets.",
    benefits: [
      "Optimized for Sonali crossbred physiology",
      "Excellent FCR tailored to slower-growing genetics",
      "Richer flavor profile preferred in rural markets",
      "Stronger disease resistance for semi-intensive farming",
      "Flexible feeding schedule suits free-range systems",
    ],
    usage: "Feed Sonali birds from day 1 to market weight (~70-90 days). Starter phase 0-28 days, Finisher phase 29+ days. Always provide fresh water.",
    variants: ["Sonali Starter", "Sonali Finisher"],
    image: "/images/products/sonali-feed-bag.jpg",
    imageFit: "contain" as const,
    color: "bg-secondary",
    basePrice: 1300,
  },
  {
    id: "kuroiler",
    icon: Bird,
    title: "Kuroiler Feed",
    tagline: "Dual Purpose. Maximum Value.",
    description: "Formulated for Kuroiler dual-purpose birds — delivering strong body weight for meat while supporting consistent egg production in both backyard and intensive farming systems.",
    benefits: [
      "Dual-purpose nutrition for meat and eggs",
      "Supports Kuroiler's hardy genetic potential",
      "High protein for strong muscle and bone growth",
      "Supports egg production from 20 weeks onwards",
      "Cost-effective for smallholder and rural farmers",
    ],
    usage: "Feed Kuroiler chicks starter from day 1-35, then shift to grower-finisher until market weight. Layer phase starts at 18-20 weeks for egg-producing birds.",
    variants: ["Kuroiler Starter", "Kuroiler Grower", "Kuroiler Layer"],
    image: "/images/products/kuroiler-feed-bag.jpg",
    imageFit: "contain" as const,
    color: "bg-primary",
    basePrice: 1320,
  },
  {
    id: "layer",
    icon: Egg,
    title: "Layer Feed",
    tagline: "More Eggs, Better Quality",
    description: "Enriched with calcium, proteins, and essential vitamins for maximum egg production. Designed for strong shells, consistent laying, and long productive life.",
    benefits: [
      "Higher egg production - more eggs per bird per year",
      "Stronger shells - reduced breakage and better grading",
      "Consistent laying cycle - predictable production",
      "Better yolk color - premium quality eggs",
      "Long productive life - extended laying period",
    ],
    usage: "Start layer feed from 18-20 weeks of age. Provide 100-120g per bird daily. Ensure adequate water and light exposure for optimal laying.",
    variants: ["Pre-Layer", "Layer Phase 1", "Layer Phase 2"],
    image: "/images/products/layer-feed-bag.jpg",
    imageFit: "contain" as const,
    color: "bg-secondary",
    basePrice: 1250,
  },
]

export function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState(products[0])

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Product Cards Grid */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Select Your Product</h2>
              <p className="text-muted-foreground">Click on a product to configure your order</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  imageFit={product.imageFit ?? "cover"}
                  onSelect={() => setSelectedProduct(product)}
                  isSelected={selectedProduct.id === product.id}
                />
              ))}
            </div>
          </div>

          {/* Configurator Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ProductConfigurator
                productName={selectedProduct.title}
                variants={selectedProduct.variants}
                basePrice={selectedProduct.basePrice}
              />

              {/* Product Details */}
              <div className="mt-6 bg-muted/50 rounded-2xl border border-border p-6 space-y-4">
                <h4 className="font-semibold text-foreground">About {selectedProduct.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedProduct.description}
                </p>
                <div className="pt-4 border-t border-border">
                  <h5 className="text-sm font-medium text-foreground mb-2">Feeding Guidelines</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {selectedProduct.usage}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
