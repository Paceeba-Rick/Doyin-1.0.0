'use client'

import { Card } from '@/components/ui/card'
import { UtensilsCrossed, ShoppingCart, Sparkles, BookOpen } from 'lucide-react'

const vendors = [
  {
    icon: UtensilsCrossed,
    title: 'Food Vendors',
    description: 'Order from your favorite campus eateries, restaurants, and cafes. Hot meals delivered fresh and quick.',
    color: 'from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900'
  },
  {
    icon: ShoppingCart,
    title: 'Grocery Vendors',
    description: 'Essential groceries, snacks, and beverages delivered right to your dorm or study spot.',
    color: 'from-green-50 to-green-100 dark:from-green-950 dark:to-green-900'
  },
  {
    icon: Sparkles,
    title: 'Accessories',
    description: 'Fashion items, phone accessories, and more from trusted campus vendors.',
    color: 'from-pink-50 to-pink-100 dark:from-pink-950 dark:to-pink-900'
  },
  {
    icon: BookOpen,
    title: 'Stationery & More',
    description: 'Study materials, notebooks, pens, and everything you need for classes.',
    color: 'from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900'
  }
]

export default function VendorTypes() {
  return (
    <section id="vendors" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/40">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Shop All Categories
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Browse thousands of products from verified campus vendors across food, groceries, accessories, and stationery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {vendors.map((vendor, index) => {
            const Icon = vendor.icon
            return (
              <Card 
                key={index} 
                className={`p-8 border-2 border-border hover:border-accent hover:shadow-lg transition-all duration-300 overflow-hidden group`}
              >
                <div className={`absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br ${vendor.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-xl bg-accent/15 flex items-center justify-center group-hover:bg-accent group-hover:text-background transition-all duration-300">
                      <Icon className="text-accent group-hover:text-background" size={32} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {vendor.title}
                  </h3>

                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {vendor.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-border">
                    <button className="text-accent font-semibold hover:gap-2 flex items-center gap-1 transition-all group/btn">
                      Explore Now
                      <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
