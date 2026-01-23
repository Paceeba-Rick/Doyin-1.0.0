'use client'

import { Card } from '@/components/ui/card'
import { Zap, Users, Truck, Shield } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Multiple Vendor Types',
    description: 'Shop from food vendors, grocery stores, accessories shops, and stationery sellers all in one marketplace.'
  },
  {
    icon: Zap,
    title: 'Fast Campus Delivery',
    description: 'Quick delivery from vendors directly to your dorm or location anywhere on campus.'
  },
  {
    icon: Truck,
    title: 'Custom Errand Service',
    description: 'Need something beyond shopping? Connect with delivery agents to handle your campus errands.'
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Secure payments, verified vendors, and reliable delivery partners you can trust.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Why Choose Doyin?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The all-in-one campus marketplace with multiple vendors, fast delivery, and convenient errand services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="text-accent" size={24} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
