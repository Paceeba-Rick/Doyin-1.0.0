'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Download, Share2 } from 'lucide-react'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-secondary/5 via-accent/5 to-secondary/5">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 p-12 sm:p-16 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-secondary-foreground">
              Start Shopping
              <br />
              <span className="text-background">Your Campus Marketplace</span>
            </h2>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
              Download Doyin now and discover thousands of products from campus vendors with fast delivery and convenient errand services.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="gap-2 bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <Link href="#download">
                <Download size={20} />
                Download App
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 border-background text-background hover:bg-background/10 bg-transparent"
              asChild
            >
              <Link href="#contact">
                Contact Us
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-background/20">
            <span className="text-sm text-secondary-foreground/70">Share with friends:</span>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="text-background hover:bg-background/20">
                <Share2 size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="text-background hover:bg-background/20">
                Facebook
              </Button>
              <Button variant="ghost" size="sm" className="text-background hover:bg-background/20">
                Twitter
              </Button>
              <Button variant="ghost" size="sm" className="text-background hover:bg-background/20">
                Instagram
              </Button>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <div className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground">
            Available on iOS & Android Soon
          </div>
          <div className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground">
            ★ Rating on App Store
          </div>
          <div className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground">
            - Downloads
          </div>
        </div>
      </div>
    </section>
  )
}
