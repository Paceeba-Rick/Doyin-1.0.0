import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Zap, Users, Truck, ShoppingBag } from 'lucide-react'
import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import Features from '@/components/features'
import VendorTypes from '@/components/vendor-types'
import CustomOrder from '@/components/custom-order'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <HeroSection />
      <Features />
      <VendorTypes />
      <CustomOrder />
      <CTA />
      <Footer />
    </div>
  )
}
