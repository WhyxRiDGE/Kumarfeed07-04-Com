"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MessageCircle, Phone, Package, Truck, Check, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProductConfiguratorProps {
  productName: string
  variants: string[]
}

const packagingSizes = [
  { value: "50kg",  label: "50 KG Bags",     unit: "bags", min: 60,  max: 6000, step: 10 },
  { value: "bulk",  label: "Bulk Quantity",  unit: "tons", min: 3,   max: 200,  step: 1  },
]

const deliveryOptions = [
  { value: "pickup",   label: "Self Pickup",         icon: Package },
  { value: "delivery", label: "Doorstep Delivery",   icon: Truck   },
]

export function ProductConfigurator({ productName, variants }: ProductConfiguratorProps) {
  const [selectedVariant, setSelectedVariant] = useState(variants[0])
  const [packaging, setPackaging]             = useState("50kg")
  const [quantity, setQuantity]               = useState([60])
  const [delivery, setDelivery]               = useState("pickup")

  const activePackaging = packagingSizes.find(p => p.value === packaging)!

  const handlePackagingChange = (value: string) => {
    setPackaging(value)
    const next = packagingSizes.find(p => p.value === value)!
    setQuantity([next.min])
  }

  const handleWhatsAppEnquiry = () => {
    const selectedDelivery = deliveryOptions.find(d => d.value === delivery)?.label
    const message = `Hello! I would like to place an order:

Product: ${productName}
Variant: ${selectedVariant}
Packaging: ${activePackaging.label}
Quantity: ${quantity[0]} ${activePackaging.unit}
Delivery: ${selectedDelivery}

Please confirm availability and pricing.`

    window.open(`https://wa.me/919231021906?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div className="bg-card rounded-2xl border border-border p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Configure Your Order</h3>
        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">Get a Quote</span>
      </div>

      {/* Variant Selection */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Select Variant</Label>
        <RadioGroup value={selectedVariant} onValueChange={setSelectedVariant} className="flex flex-wrap gap-2">
          {variants.map((variant) => (
            <div key={variant}>
              <RadioGroupItem value={variant} id={variant} className="peer sr-only" />
              <Label
                htmlFor={variant}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full border cursor-pointer transition-all",
                  "hover:border-primary/50 hover:bg-primary/5",
                  selectedVariant === variant
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground"
                )}
              >
                {selectedVariant === variant && <Check className="w-3 h-3" />}
                {variant}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Packaging Size */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Packaging Size</Label>
        <Select value={packaging} onValueChange={handlePackagingChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select packaging" />
          </SelectTrigger>
          <SelectContent>
            {packagingSizes.map((size) => (
              <SelectItem key={size.value} value={size.value}>
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-muted-foreground" />
                  {size.label}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Minimum order notice */}
        <div className="flex items-start gap-2 rounded-lg bg-muted/60 px-3 py-2">
          <AlertCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
          <p className="text-xs text-muted-foreground">
            Minimum order:{" "}
            <span className="font-semibold text-foreground">
              {activePackaging.min} {activePackaging.unit}
            </span>{" "}
            for {activePackaging.label}.
          </p>
        </div>
      </div>

      {/* Quantity */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Quantity</Label>
          <span className="text-sm font-semibold text-primary">
            {quantity[0]} {activePackaging.unit}
          </span>
        </div>
        <Slider
          value={quantity}
          onValueChange={setQuantity}
          min={activePackaging.min}
          max={activePackaging.max}
          step={activePackaging.step}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Min: {activePackaging.min} {activePackaging.unit}</span>
          <span>Max: {activePackaging.max} {activePackaging.unit}</span>
        </div>
      </div>

      {/* Delivery Option */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Delivery Option</Label>
        <RadioGroup value={delivery} onValueChange={setDelivery} className="space-y-2">
          {deliveryOptions.map((option) => (
            <div key={option.value}>
              <RadioGroupItem value={option.value} id={option.value} className="peer sr-only" />
              <Label
                htmlFor={option.value}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all",
                  "hover:border-primary/50 hover:bg-primary/5",
                  delivery === option.value
                    ? "border-primary bg-primary/10"
                    : "border-border"
                )}
              >
                <option.icon className={cn(
                  "w-5 h-5",
                  delivery === option.value ? "text-primary" : "text-muted-foreground"
                )} />
                <span className={cn(
                  "flex-1 text-sm font-medium",
                  delivery === option.value ? "text-primary" : "text-foreground"
                )}>
                  {option.label}
                </span>
                {delivery === option.value && <Check className="w-4 h-4 text-primary" />}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* CTAs */}
      <div className="pt-4 border-t border-border flex flex-col gap-2">
        <Button onClick={handleWhatsAppEnquiry} className="w-full" size="lg">
          <MessageCircle className="w-4 h-4 mr-2" />
          Get Quote on WhatsApp
        </Button>
        <Button asChild variant="outline" className="w-full">
          <a href="tel:+919231021906" className="flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            Call to Order
          </a>
        </Button>
      </div>
    </div>
  )
}
