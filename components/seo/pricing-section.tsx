"use client"

import { Check, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

const included = [
  "Review management",
  "Bad review alerts",
  "Automated responses",
  "Weekly GMB posts",
  "Monthly optimization",
  "Performance reports",
  "English + Spanish",
  "No contracts",
  "Cancel anytime",
]

export function SeoPricing() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="max-w-md sm:max-w-lg mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4">
          ONE Price. ONE Offer. <span className="text-blue-400">Simple.</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12">
          Most businesses waste more than this ignoring reviews every month.
        </p>
        
        {/* Pricing Card */}
        <div className="relative p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-[#0D1424] border-2 border-blue-500 shadow-2xl shadow-blue-500/20">
          {/* Badge */}
          <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
            <Shield className="h-3 w-3 sm:h-4 sm:w-4" />
            REPUTATION GUARDIAN
          </div>
          
          {/* Price */}
          <div className="mb-6 sm:mb-8 mt-2">
            <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white">$297</span>
            <span className="text-2xl sm:text-3xl text-gray-400">/mo</span>
          </div>
          
          {/* Features */}
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-left max-w-sm mx-auto">
            {included.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-300">{item}</span>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <Button 
            size="lg" 
            className="w-full h-14 sm:h-16 text-lg sm:text-xl font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02]"
            asChild
          >
            <a href="https://wa.me/573103956445?text=Start%20Protecting%20My%20Reputation" target="_blank" rel="noopener noreferrer">
              Start Protecting My Reputation
            </a>
          </Button>
          
          {/* Note */}
          <p className="mt-5 sm:mt-6 text-xs sm:text-sm text-gray-500">
            We make sure every review works FOR you, not against you.
          </p>
        </div>
      </div>
    </section>
  )
}
