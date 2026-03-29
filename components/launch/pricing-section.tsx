"use client"

import { Check, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const included = [
  "Landing page built",
  "Google Ads launched",
  "First month managed",
  "48-hour delivery",
  "No hidden fees",
  "No monthly contracts after",
]

export function LaunchPricing() {
  return (
    <section className="px-4 py-16 sm:py-24 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent">
      <div className="max-w-md sm:max-w-lg mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4">
          ONE Price. ONE Offer.
        </h2>
        <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-12">No confusion.</p>
        
        {/* Pricing Card */}
        <div className="relative p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-[#12121a] border-2 border-orange-500 shadow-2xl shadow-orange-500/20">
          {/* Badge */}
          <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 rounded-full bg-orange-500 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
            <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
            COMPLETE PACKAGE
          </div>
          
          {/* Price */}
          <div className="mb-6 sm:mb-8 mt-2">
            <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white">$800</span>
          </div>
          
          {/* Features */}
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-left max-w-sm mx-auto">
            {included.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-300">{item}</span>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <Button 
            size="lg" 
            className="w-full h-14 sm:h-16 text-lg sm:text-xl font-bold bg-orange-500 hover:bg-orange-600 text-white rounded-xl shadow-lg shadow-orange-500/25 transition-all hover:scale-[1.02]"
            asChild
          >
            <a href="https://wa.me/573103956445?text=Launch%20My%20Business%20-%20$800" target="_blank" rel="noopener noreferrer">
              Launch My Business — $800
            </a>
          </Button>
          
          {/* After note */}
          <p className="mt-5 sm:mt-6 text-xs sm:text-sm text-gray-500">
            After month 1: continue for $1,000/mo or walk away.
            <br />
            <span className="text-gray-400">No pressure. No contracts.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
