'use client'

import { notFound } from 'next/navigation'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useEffect } from 'react'

const categoryData: Record<string, { title: string; description: string; products: Array<{ id: string; name: string; description: string }> }> = {
  'food-vendors': {
    title: 'Food Vendors',
    description: 'Order from your favorite campus eateries, restaurants, and cafes. Hot meals delivered fresh and quick.',
    products: [
      { id: '1', name: 'Jollof Rice', description: 'Authentic campus favorite served hot' },
      { id: '2', name: 'Waakye & Gari', description: 'Traditional Ghanaian breakfast meal' },
      { id: '3', name: 'Fried Rice', description: 'Quick and delicious combo' },
      { id: '4', name: 'Grilled Chicken', description: 'Protein-packed meal with sides' },
      { id: '5', name: 'Fufu & Light Soup', description: 'Classic comfort food' },
      { id: '6', name: 'Shawarma', description: 'Quick tasty wrap' },
      { id: '7', name: 'Pizzas', description: 'Freshly baked pizza' },
      { id: '8', name: 'Smoothies & Juice', description: 'Fresh cold beverages' },
    ]
  },
  'grocery-vendors': {
    title: 'Grocery Vendors',
    description: 'Essential groceries, snacks, and beverages delivered right to your dorm or study spot.',
    products: [
      { id: '1', name: 'Snacks', description: 'Chips, biscuits, and snacks' },
      { id: '2', name: 'Beverages', description: 'Soft drinks and bottled water' },
      { id: '3', name: 'Instant Noodles', description: 'Quick meal options' },
      { id: '4', name: 'Yogurt & Dairy', description: 'Fresh dairy products' },
      { id: '5', name: 'Fruits & Vegetables', description: 'Fresh produce' },
      { id: '6', name: 'Bread & Pastries', description: 'Baked goods' },
      { id: '7', name: 'Canned Goods', description: 'Long-lasting pantry items' },
      { id: '8', name: 'Chocolate & Sweets', description: 'Sweet treats and candy' },
    ]
  },
  'accessories': {
    title: 'Accessories',
    description: 'Fashion items, phone accessories, and more from trusted campus vendors.',
    products: [
      { id: '1', name: 'Phone Cases', description: 'Protective cases and covers' },
      { id: '2', name: 'Phone Chargers', description: 'Cables and charging accessories' },
      { id: '3', name: 'Headphones', description: 'Audio accessories' },
      { id: '4', name: 'Bags & Backpacks', description: 'School and travel bags' },
      { id: '5', name: 'Watches', description: 'Stylish timepieces' },
      { id: '6', name: 'Hair Accessories', description: 'Clips, bands, and extensions' },
      { id: '7', name: 'Jewelry', description: 'Bracelets, necklaces, and rings' },
      { id: '8', name: 'Fashion Items', description: 'Clothing and apparel' },
    ]
  },
  'stationery-more': {
    title: 'Stationery & More',
    description: 'Study materials, notebooks, pens, and everything you need for classes.',
    products: [
      { id: '1', name: 'Notebooks', description: 'Various sizes and formats' },
      { id: '2', name: 'Pens & Pencils', description: 'Writing instruments' },
      { id: '3', name: 'Books', description: 'Textbooks and novels' },
      { id: '4', name: 'Markers & Highlighters', description: 'Coloring and highlighting tools' },
      { id: '5', name: 'Calculators', description: 'Scientific and basic calculators' },
      { id: '6', name: 'Folders & Files', description: 'Organization supplies' },
      { id: '7', name: 'Flash Drives', description: 'USB storage devices' },
      { id: '8', name: 'Art Supplies', description: 'Drawing and painting materials' },
    ]
  }
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categoryData[params.slug]

  if (!category) {
    notFound()
  }

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0)
    
    // Store scroll position before leaving
    const handleBeforeUnload = () => {
      sessionStorage.setItem('vendorsSectionScroll', '0')
    }
    
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [params.slug])

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      
      <div className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-12">
            <Link 
              href="/#vendors"
              onClick={() => {
                sessionStorage.setItem('shouldScrollToVendors', 'true')
              }}
            >
              <Button variant="outline" className="gap-2 mb-6 bg-transparent">
                <ArrowLeft size={18} />
                Back to Categories
              </Button>
            </Link>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              {category.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {category.description}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.products.map((product) => (
              <div
                key={product.id}
                className="group p-6 rounded-xl border border-border hover:border-accent hover:shadow-lg transition-all duration-300 bg-card"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {product.description}
                </p>

                <Button asChild className="w-full gap-2">
                  <Link href="#order">
                    View Products
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(categoryData).map((slug) => ({
    slug,
  }))
}
