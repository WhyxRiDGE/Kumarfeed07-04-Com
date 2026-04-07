import { HeroSection } from "@/components/home/hero-section"
import { TrustIndicators } from "@/components/home/trust-indicators"
import { AboutPreview } from "@/components/home/about-preview"
import { ProductsGrid } from "@/components/home/products-grid"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { FarmerSupport } from "@/components/home/farmer-support"
import { Testimonials } from "@/components/home/testimonials"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustIndicators />
      <AboutPreview />
      <ProductsGrid />
      <WhyChooseUs />
      <FarmerSupport />
      <Testimonials />
      <CTASection />
    </>
  )
}
