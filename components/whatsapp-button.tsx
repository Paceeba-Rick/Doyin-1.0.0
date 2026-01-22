'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse-ring {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }

        @keyframes scale-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .whatsapp-button {
          animation: float 3s ease-in-out infinite;
        }

        .whatsapp-pulse {
          animation: pulse-ring 2s infinite;
        }

        .whatsapp-scale-pulse {
          animation: scale-pulse 2s ease-in-out infinite;
        }
      `}</style>

      <Link
        href="https://wa.me/0594473819"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 group"
      >
        {/* Pulse ring background */}
        <div className="absolute inset-0 whatsapp-pulse rounded-full"></div>

        {/* Main button container */}
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center whatsapp-button group-hover:scale-110">
          {/* Scale pulse effect on hover */}
          <div className="absolute inset-0 rounded-full whatsapp-scale-pulse opacity-0 group-hover:opacity-100 bg-green-500"></div>

          {/* Icon */}
          <MessageCircle size={28} className="text-white relative z-10 group-hover:scale-125 transition-transform duration-300" strokeWidth={1.5} />

          {/* Tooltip */}
          <div className="absolute right-full mr-3 bottom-1/2 translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg">
            Chat with us on WhatsApp
            <div className="absolute left-full w-2 h-2 bg-gray-900 transform rotate-45 -ml-1"></div>
          </div>
        </div>
      </Link>
    </>
  )
}
