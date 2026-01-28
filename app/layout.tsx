import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import WhatsAppButton from '@/components/whatsapp-button'
import { StructuredData } from '@/components/structured-data'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Doyin | Campus Marketplace for Food, Groceries & More | Fast Delivery',
  description: 'Discover Doyin - the ultimate campus e-commerce platform connecting you to food vendors, groceries, accessories, and stationery. Enjoy fast delivery and our unique custom errand service. Shop everything you need right on campus.',
  generator: 'v0.app',
  metadataBase: new URL('https://doyin.site'),
  keywords: [
    'campus marketplace',
    'campus delivery',
    'food delivery on campus',
    'grocery delivery',
    'campus shopping',
    'student marketplace',
    'Doyin app',
    'custom errand service',
    'campus vendors',
    'student delivery service'
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
    title: 'Doyin | Campus Marketplace for Food, Groceries & More',
    description: 'The all-in-one campus shopping platform with multiple vendors, fast delivery, and convenient custom errand services.',
    url: 'https://doyin.site',
    siteName: 'Doyin',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Doyin.logo-r7VenzMqc5rCmo48xv9qdWrTlGLJYe.jpeg',
        width: 1200,
        height: 630,
        alt: 'Doyin Campus Marketplace Logo',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Doyin | Campus Marketplace',
    description: 'Shop food, groceries, accessories, stationery and more with fast campus delivery.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Doyin.logo-r7VenzMqc5rCmo48xv9qdWrTlGLJYe.jpeg'],
    creator: '@doyinapp',
  },
  alternates: {
    canonical: 'https://doyin.site',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
