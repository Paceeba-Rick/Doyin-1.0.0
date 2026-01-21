'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Download } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import AppCarousel from '@/components/app-carousel'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5 pt-20 pb-32 sm:pt-32 sm:pb-40">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="space-y-3">
              <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <span className="text-sm font-semibold text-accent">Campus E-Commerce Marketplace</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground">
                Shop Everything{' '}
                <span className="text-primary">On Campus</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Browse food, groceries, accessories, and stationery from campus vendors in one app. Fast delivery included. Plus, get help with custom errands anytime.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="gap-2">
                <Link href="#download">
                  <Download size={20} />
                  Download App
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="gap-2 bg-transparent">
                <Link href="#contact">
                  Learn More
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Vendor Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Campus Coverage</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">Custom</div>
                <div className="text-sm text-muted-foreground">Errand Services</div>
              </div>
            </div>
          </div>

          {/* Right Visual - App Carousel */}
          <div className="hidden lg:flex items-center justify-center relative">
            <AppCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}
