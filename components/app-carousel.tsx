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
    <div className="relative w-full overflow-hidden flex items-center justify-center py-6 sm:py-8 lg:py-12 px-2 sm:px-4">
      {/* iPhone 17 Mockup - Responsive */}
      <div className="relative mx-auto" style={{ width: 'clamp(140px, 80vw, 290px)', aspectRatio: '9/19.5', maxWidth: '100%' }}>
        {/* Outer phone body - Premium titanium with ultra-thin bezel */}
        <div 
          className="absolute inset-0 rounded-3xl shadow-2xl"
          style={{ 
            padding: '8px',
            background: 'linear-gradient(135deg, #8b8b8b 0%, #4a4a4a 50%, #2a2a2a 100%)',
            boxShadow: 'inset 0 1px 3px rgba(255,255,255,0.1), 0 20px 40px rgba(0,0,0,0.6)'
          }}
        >
          {/* Inner screen area with minimal bezel */}
          <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden border border-gray-800">
            {/* Premium pill-shaped Dynamic Island */}
            <div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50 bg-black rounded-full"
              style={{ 
                width: 'clamp(90px, 45%, 120px)', 
                height: 'clamp(18px, 5%, 24px)', 
                marginTop: 'clamp(6px, 3%, 10px)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.05)'
              }}
            ></div>

            {/* Premium AMOLED-like display */}
            <div className="relative w-full h-full overflow-hidden bg-black" style={{ backgroundColor: '#000' }}>
              {/* Slides with enhanced transitions */}
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-500 ease-out ${
                    index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-98 pointer-events-none'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-contain object-center bg-black"
                    crossOrigin="anonymous"
                    loading="eager"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder.svg"
                    }}
                  />
                </div>
              ))}

              {/* Navigation Arrows - Premium glass-morphism style */}
              <button
                onClick={prevSlide}
                className="absolute left-0.5 sm:left-2 top-1/2 -translate-y-1/2 z-10 text-white p-1.5 sm:p-3 rounded-full transition-all text-base sm:text-lg"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                }}
                aria-label="Previous slide"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0.5 sm:right-2 top-1/2 -translate-y-1/2 z-10 text-white p-1.5 sm:p-3 rounded-full transition-all text-base sm:text-lg"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                }}
                aria-label="Next slide"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Modern dot indicators with smooth transitions */}
        <div className="absolute sm:-bottom-16 -bottom-12 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="rounded-full transition-all duration-300"
              style={{
                width: index === currentSlide ? 'clamp(12px, 5vw, 24px)' : '6px',
                height: '6px',
                backgroundColor: index === currentSlide ? '#00d9ff' : '#6b7280',
                opacity: index === currentSlide ? 1 : 0.6,
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                if (index !== currentSlide) {
                  e.currentTarget.style.backgroundColor = '#9ca3af'
                }
              }}
              onMouseLeave={(e) => {
                if (index !== currentSlide) {
                  e.currentTarget.style.backgroundColor = '#6b7280'
                }
              }}
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
