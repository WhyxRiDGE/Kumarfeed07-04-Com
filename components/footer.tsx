import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Our Products" },
  { href: "/factory", label: "Our Factory" },
  { href: "/farmer-support", label: "Farmer Support" },
  { href: "/contact", label: "Contact Us" },
]

const products = [
  { href: "/products#broiler", label: "Broiler Feed" },
  { href: "/products#sonali", label: "Sonali Feed" },
  { href: "/products#kuroiler", label: "Kuroiler Feed" },
  { href: "/products#layer", label: "Layer Feed" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/kf-logo.png"
                  alt="Kumar Feeds Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-bold text-lg">Kumar Feeds</span>
                <span className="text-xs block -mt-1 text-primary-foreground/80">& Biotech Pvt. Ltd.</span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Premium quality poultry feed for faster growth and higher profits. Trusted by thousands of farmers across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Products</h3>
            <ul className="space-y-2">
              {products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919231021906"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  +91 92310 21906
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@kumarfeeds.in"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  info@kumarfeeds.in
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/H6L7FxkZNy4LEmubA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  Plot No. F-3, Industrial Area, Jasidih,<br />Deoghar - 814112, India
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/80">
              &copy; 2019 Kumar Feeds & Biotech Private Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
