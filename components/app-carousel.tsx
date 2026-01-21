'use client'

import { useState, useEffect } from 'react'

const AppCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const slides = [
    {
      id: 1,
      title: 'Welcome to Doyin',
      description: 'Start your campus shopping journey',
      image: '/images/onboading.png',
      color: 'from-blue-600 to-cyan-500'
    },
    {
      id: 2,
      title: 'Browse & Shop',
      description: 'Food, groceries, accessories & more',
      image: '/images/homescreen.png',
      color: 'from-green-600 to-emerald-500'
    },
    {
      id: 3,
      title: 'Quick & Easy Signup',
      description: 'Join the Doyin community in seconds',
      image: '/images/sign-up.png',
      color: 'from-purple-600 to-pink-500'
    },
    {
      id: 4,
      title: 'Download Doyin',
      description: 'Your campus marketplace awaits',
      image: '/images/splash-screen.png',
      color: 'from-indigo-700 to-blue-600'
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
    <div className="relative w-full h-full flex items-center justify-center perspective">
      {/* Carousel Container */}
      <div className="relative w-full max-w-sm aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl bg-gray-900">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity transition-transform duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            {/* Phone Frame */}
            <div className="relative w-full h-full bg-black rounded-3xl border-8 border-gray-800 overflow-hidden">
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20"></div>

              {/* Screen Content */}
              <div className={`w-full h-full bg-gradient-to-br ${slide.color} relative overflow-hidden flex items-center justify-center`}>
                <img
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Slide Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-lg font-bold mb-1">{slide.title}</h3>
                <p className="text-sm text-gray-200">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 rounded-full transition-all"
          aria-label="Previous slide"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 rounded-full transition-all"
          aria-label="Next slide"
        >
          →
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-white w-6'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-sm text-muted-foreground">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  )
}

export default AppCarousel
