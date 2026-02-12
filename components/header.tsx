'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-primary">Doyin</div>
          <div className="text-xs font-medium text-muted-foreground">by aLien</div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#vendors" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Vendors
          </Link>
          <Link href="#custom-order" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Custom Order
          </Link>
          <Link href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" asChild>
            <Link href="#download">Download App</Link>
          </Button>
          <Button asChild>
            <Link href="#contact">Join Community </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-foreground" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="space-y-1 px-4 py-4">
            <a href="#features" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md">
              Features
            </a>
            <a href="#vendors" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md">
              Vendors
            </a>
            <a href="#custom-order" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md">
              Custom Order
            </a>
            <a href="#contact" className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md">
              Contact
            </a>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="outline" className="w-full bg-transparent">
                Download App
              </Button>
              <Button className="w-full">Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
