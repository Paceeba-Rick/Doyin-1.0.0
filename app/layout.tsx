import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import WhatsAppButton from '@/components/whatsapp-button'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Doyin | Fast Campus Delivery & Custom Errands',
  description: 'Doyin connects you to food vendors, groceries, accessories, stationery and more right on campus. Plus use our unique Custom Order feature for quick errands.',
  generator: 'v0.app',
  metadataBase: new URL('https://doyin.app'),
  keywords: ['campus marketplace', 'delivery', 'food', 'groceries', 'doyin'],
  icons: {
    icon: [
      {
        url: '/doyin-favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/doyin-favicon.svg',
  },
  openGraph: {
    title: 'Doyin | Fast Campus Delivery & Custom Errands',
    description: 'Shop everything on campus - food, groceries, accessories, stationery and more. Fast delivery + unique custom errand service.',
    url: 'https://doyin.app',
    siteName: 'Doyin',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Doyin.logo-r7VenzMqc5rCmo48xv9qdWrTlGLJYe.jpeg',
        width: 1200,
        height: 630,
        alt: 'Doyin Campus Marketplace',
        type: 'image/jpeg',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Doyin | Fast Campus Delivery & Custom Errands',
    description: 'Shop everything on campus - food, groceries, accessories, stationery and more. Fast delivery + unique custom errand service.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Doyin.logo-r7VenzMqc5rCmo48xv9qdWrTlGLJYe.jpeg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
