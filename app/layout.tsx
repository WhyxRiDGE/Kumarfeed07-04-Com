import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: {
    default: 'Kumar Feeds & Biotech Private Limited | Premium Poultry Feed',
    template: '%s | Kumar Feeds & Biotech'
  },
  description: 'Premium quality poultry feed for faster growth and higher profits. Trusted by thousands of farmers across India. Broiler feed, layer feed, starter feed, and customized solutions.',
  keywords: ['poultry feed', 'broiler feed', 'layer feed', 'starter feed', 'chicken feed', 'poultry farming', 'India', 'Kumar Feeds'],
  authors: [{ name: 'Kumar Feeds & Biotech Private Limited' }],
  creator: 'Kumar Feeds & Biotech Private Limited',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Kumar Feeds & Biotech Private Limited',
    title: 'Kumar Feeds & Biotech - Premium Poultry Feed',
    description: 'Premium quality poultry feed for faster growth and higher profits. Trusted by thousands of farmers across India.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kumar Feeds & Biotech - Premium Poultry Feed',
    description: 'Premium quality poultry feed for faster growth and higher profits.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#2e7d32',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
