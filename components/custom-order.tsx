'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react'

export default function CustomOrder() {
  return (
    <section id="custom-order" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <span className="text-sm font-semibold text-accent">Unique Feature</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                Custom Order Service
              </h2>
              <p className="text-xl text-muted-foreground">
                Don't see what you need? Our delivery agents can run any errand for you. From picking up documents to buying specific items off-campus, we've got you covered.
              </p>
            </div>

            {/* How It Works */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">How It Works</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent text-background font-semibold">
                      1
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Request Your Errand</h4>
                    <p className="text-muted-foreground">Describe exactly what you need done through the app.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent text-background font-semibold">
                      2
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Get Matched with an Agent</h4>
                    <p className="text-muted-foreground">A verified delivery agent accepts your request.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent text-background font-semibold">
                      3
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Done & Delivered</h4>
                    <p className="text-muted-foreground">Your errand is completed and delivered to you quickly.</p>
                  </div>
                </div>
              </div>
            </div>

            <Button size="lg" className="gap-2 w-full sm:w-auto">
              Request Custom Order
              <ArrowRight size={20} />
            </Button>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <Card className="p-6 border-2 border-accent/20 hover:border-accent transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <MapPin className="text-accent" size={24} />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Any Location</h4>
                <p className="text-sm text-muted-foreground">Send agents anywhere on or off campus.</p>
              </Card>

              {/* Card 2 */}
              <Card className="p-6 border-2 border-accent/20 hover:border-accent transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Clock className="text-accent" size={24} />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Quick Turnaround</h4>
                <p className="text-sm text-muted-foreground">Most errands completed within hours.</p>
              </Card>

              {/* Card 3 */}
              <Card className="p-6 border-2 border-accent/20 hover:border-accent transition-colors group col-span-2">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <CheckCircle className="text-accent" size={24} />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Verified Agents</h4>
                <p className="text-sm text-muted-foreground">All agents are thoroughly vetted for your safety and peace of mind.</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
