'use client'

import { useState, useEffect } from 'react'

const AppCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const slides = [
    {
      id: 1,
      title: 'Create Your Account',
      description: 'Sign up in seconds',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/signupscreen-QVcAS36m8UpIiZza46MZf447EYFucn.png',
      color: 'from-blue-600 to-cyan-500'
    },
    {
      id: 2,
      title: 'Welcome to Doyin',
      description: 'Your campus marketplace',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/splashscreen-w8k9YeAso3E9VvSl38kXU67YjRic4h.png',
      color: 'from-indigo-700 to-blue-600'
    },
    {
      id: 3,
      title: 'Browse & Shop',
      description: 'Food, groceries, accessories & more',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/userhomescreen-R1rAbKPoQY4kyZqWS01Y6yo2JLMX9J.png',
      color: 'from-green-600 to-emerald-500'
    },
    {
      id: 4,
      title: 'Vendor Dashboard',
      description: 'Manage your orders easily',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vendorscreen-h38wZ32JJX3kkEi1Kj5wKD90rNMsNZ.png',
      color: 'from-purple-600 to-pink-500'
    }
  ]

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlay, slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 10000) // Resume autoplay after 10 seconds
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  return (
    <div className="relative w-full flex items-center justify-center py-6 sm:py-8 lg:py-12 px-4">
      {/* iPhone 14 Pro Max Mockup - Responsive */}
      <div className="relative" style={{ width: 'clamp(160px, 85vw, 280px)', aspectRatio: '9/16' }}>
        {/* Outer phone body - dark titanium */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl shadow-2xl" style={{ padding: '12px' }}>
          {/* Inner screen area with rounded corners */}
          <div className="relative w-full h-full bg-black rounded-3xl overflow-hidden">
            {/* Dynamic Island (notch) */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50 bg-black rounded-full" style={{ width: 'clamp(80px, 50%, 150px)', height: 'clamp(20px, 6%, 28px)', marginTop: 'clamp(4px, 2%, 8px)' }}></div>

            {/* Screen display area */}
            <div className="relative w-full h-full overflow-hidden bg-black">
              {/* Slides */}
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover object-center"
                    crossOrigin="anonymous"
                    loading="eager"
                  />
                </div>
              ))}

              {/* Navigation Arrows - positioned outside the screen, hidden on very small screens */}
              <button
                onClick={prevSlide}
                className="absolute sm:-left-16 sm:top-1/2 sm:-translate-y-1/2 left-2 bottom-2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all text-lg sm:text-base"
                aria-label="Previous slide"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="absolute sm:-right-16 sm:top-1/2 sm:-translate-y-1/2 right-2 bottom-2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all text-lg sm:text-base"
                aria-label="Next slide"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Dot Indicators below phone - responsive positioning */}
        <div className="absolute sm:-bottom-16 -bottom-12 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-cyan-400 w-4 sm:w-6 h-2'
                  : 'bg-gray-400 w-2 h-2 hover:bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter - responsive positioning */}
        <div className="absolute sm:-bottom-24 -bottom-20 left-1/2 -translate-x-1/2 text-xs sm:text-sm text-gray-400">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </div>
  )
}

export default AppCarousel
