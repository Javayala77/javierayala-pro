"use client"

import { Check, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"

const included = [
  "AI agent built for your business",
  "Trained on your services",
  "Connected to your calendar",
  "WhatsApp + website + social",
  "English + Spanish",
  "Appointment reminders",
  "Lead qualification",
  "24/7 availability",
  "Monthly performance report",
  "No contracts",
  "Cancel anytime",
  "Setup in 48 hours",
]

export function AIAgentPricing() {
  return (
    <section className="px-4 py-16 sm:py-24 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
      <div className="max-w-md sm:max-w-lg mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4">
          ONE Price. ONE Offer. Simple.
        </h2>
        <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-12">No confusion. No hidden fees.</p>
        
        {/* Pricing Card */}
        <div className="relative p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-[#12121a] border-2 border-purple-500 shadow-2xl shadow-purple-500/20">
          {/* Badge */}
          <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 rounded-full bg-purple-600 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
            <Bot className="h-3 w-3 sm:h-4 sm:w-4" />
            AI BOOKING AGENT
          </div>
          
          {/* Price */}
          <div className="mb-6 sm:mb-8 mt-2">
            <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white">$497</span>
            <span className="text-2xl sm:text-3xl text-gray-400 font-bold">/mo</span>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8 text-left">
            {included.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">{item}</span>
              </div>
            ))}
          </div>
          
          {/* Value proposition */}
          <p className="text-sm sm:text-base text-gray-400 mb-6 px-2">
            One missed $500 job pays for a full month of your AI agent.
            <br />
            <span className="text-white font-medium">How many are you missing right now?</span>
          </p>
          
          {/* CTA */}
          <Button 
            size="lg" 
            className="w-full h-14 sm:h-16 text-lg sm:text-xl font-bold bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-lg shadow-purple-600/25 transition-all hover:scale-[1.02]"
            asChild
          >
            <a href="https://wa.me/573103956445?text=I%20want%20the%20AI%20Agent%20-%20$497/mo" target="_blank" rel="noopener noreferrer">
              Get My AI Agent
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
