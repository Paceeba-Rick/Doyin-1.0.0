'use client'

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
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Check if returning from category page
    const shouldScrollToVendors = sessionStorage.getItem('shouldScrollToVendors')
    
    if (shouldScrollToVendors === 'true') {
      // Scroll to vendors section
      const vendorsSection = document.getElementById('vendors')
      if (vendorsSection) {
        setTimeout(() => {
          vendorsSection.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
      sessionStorage.removeItem('shouldScrollToVendors')
    }
  }, [])

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
