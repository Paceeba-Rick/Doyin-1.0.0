'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-background">Doyin</div>
            <p className="text-sm text-secondary-foreground/70">
              Campus E-Commerce made easy. Food, groceries, accessories, and stationery – all in one app.
            </p>
            <div className="flex gap-2 pt-4">
              <div className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 cursor-pointer transition-colors">
                f
              </div>
              <div className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 cursor-pointer transition-colors">
                𝕏
              </div>
              <div className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 cursor-pointer transition-colors">
                📷
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-background mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#features" className="text-secondary-foreground/70 hover:text-background transition-colors">Features</Link></li>
              <li><Link href="#vendors" className="text-secondary-foreground/70 hover:text-background transition-colors">Vendors</Link></li>
              <li><Link href="#custom-order" className="text-secondary-foreground/70 hover:text-background transition-colors">Custom Order</Link></li>
              <li><Link href="#" className="text-secondary-foreground/70 hover:text-background transition-colors">Download App</Link></li>
              <li><Link href="#" className="text-secondary-foreground/70 hover:text-background transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-background mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-secondary-foreground/70 hover:text-background transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-secondary-foreground/70 hover:text-background transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-secondary-foreground/70 hover:text-background transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-secondary-foreground/70 hover:text-background transition-colors">Press</Link></li>
              <li><Link href="#" className="text-secondary-foreground/70 hover:text-background transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-background mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 items-start">
                <Mail size={18} className="flex-shrink-0 mt-1" />
                <span className="text-secondary-foreground/70 hover:text-background transition-colors cursor-pointer">support@doyin.app</span>
              </li>
              <li className="flex gap-2 items-start">
                <Phone size={18} className="flex-shrink-0 mt-1" />
                <span className="text-secondary-foreground/70 hover:text-background transition-colors cursor-pointer">+233 594 473 819</span>
              </li>
              <li className="flex gap-2 items-start">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span className="text-secondary-foreground/70">campuses Available</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <p className="text-sm text-secondary-foreground/70">
              © 2026 Doyin. A product of Apis. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-secondary-foreground/70 md:justify-end">
              <Link href="#" className="hover:text-background transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-background transition-colors">Terms of Service</Link>
              <Link href="https://wa.me/233533125955" className="hover:text-background transition-colors">Developer: Ceeba</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
