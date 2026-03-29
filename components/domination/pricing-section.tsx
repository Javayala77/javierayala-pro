"use client"

import { Crown, Check, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const breakdown = [
  { service: "SEO + Content", price: "$497/mo" },
  { service: "Google Ads Management", price: "$1,000/mo" },
  { service: "GMB Management", price: "$297/mo" },
]

const included = [
  "Everything from all 3 services",
  "Unified strategy across channels",
  "Single point of contact",
  "Monthly strategy calls",
  "Priority support",
  "Quarterly deep-dive reviews",
]

export function DominationPricing() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4">
          ONE Bundle. ONE Price.
        </h2>
        <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-12">Total domination, simplified.</p>
        
        {/* Pricing Card */}
        <div className="relative p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-[#12121a] border-2 border-yellow-500 shadow-2xl shadow-yellow-500/20">
          {/* Badge */}
          <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 rounded-full bg-yellow-500 text-black text-xs sm:text-sm font-bold flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
            <Crown className="h-3 w-3 sm:h-4 sm:w-4" />
            SAVE $200/MONTH
          </div>
          
          {/* Breakdown */}
          <div className="mb-6 space-y-3 text-left">
            {breakdown.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-gray-800">
                <span className="text-gray-400 text-sm sm:text-base">{item.service}</span>
                <span className="text-gray-500 line-through text-sm">{item.price}</span>
              </div>
            ))}
            <div className="flex justify-between items-center pt-2">
              <span className="text-gray-400 text-sm sm:text-base">Normally:</span>
              <span className="text-gray-500 line-through">$1,794/mo</span>
            </div>
          </div>
          
          {/* Bundle Price */}
          <div className="mb-6 py-4 border-t border-b border-yellow-500/30">
            <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white">$1,594</span>
            <span className="text-xl text-gray-400">/mo</span>
          </div>
          
          {/* Features */}
          <div className="space-y-3 mb-6 text-left">
            {included.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-300">{item}</span>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <Button 
            size="lg" 
            className="w-full h-14 sm:h-16 text-lg sm:text-xl font-bold bg-yellow-500 hover:bg-yellow-600 text-black rounded-xl shadow-lg shadow-yellow-500/25 transition-all hover:scale-[1.02]"
            asChild
          >
            <a href="https://wa.me/573103956445?text=I%20want%20the%20Local%20Domination%20Bundle%20-%20$1,594/mo" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Dominate My Market
            </a>
          </Button>
          
          {/* Note */}
          <p className="mt-5 sm:mt-6 text-xs sm:text-sm text-gray-500">
            Ad spend not included. No long-term contracts. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
