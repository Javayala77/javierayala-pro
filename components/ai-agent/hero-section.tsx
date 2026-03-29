"use client"

import { Bot, Clock, MessageSquare, Globe, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AIAgentHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-24 sm:py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Robot Emoji as Brand Mark */}
        <div className="mb-6 flex justify-center">
          <span className="text-6xl sm:text-7xl" role="img" aria-label="Robot">🤖</span>
        </div>
        
        {/* Brand Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10">
          <Bot className="h-4 w-4 text-purple-400" />
          <span className="text-purple-400 font-bold tracking-wide text-sm">AUTOBOOK PRO</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 text-balance">
          How Many Leads Are You Losing
          <br className="hidden sm:block" />
          <span className="text-purple-400"> While You Sleep?</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed px-2">
          What if your business could answer every message, qualify every lead, and book appointments
          <span className="text-white font-semibold"> at 3am without you lifting a finger?</span>
        </p>
        
        {/* CTA Button */}
        <Button 
          size="lg" 
          className="h-14 sm:h-16 px-8 sm:px-10 text-lg sm:text-xl font-bold bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-lg shadow-purple-600/25 transition-all hover:scale-105 hover:shadow-purple-600/40"
          asChild
        >
          <a href="https://wa.me/573103956445?text=How%20does%20the%20AI%20booking%20agent%20work?" target="_blank" rel="noopener noreferrer">
            Show Me How
          </a>
        </Button>
        
        {/* Trust Signals */}
        <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 px-2">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-400 p-2 rounded-lg bg-white/5">
            <Zap className="h-4 w-4 text-purple-400 flex-shrink-0" />
            <span>Under 60 Seconds</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-400 p-2 rounded-lg bg-white/5">
            <Clock className="h-4 w-4 text-purple-400 flex-shrink-0" />
            <span>24/7 Booking</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-400 p-2 rounded-lg bg-white/5">
            <MessageSquare className="h-4 w-4 text-purple-400 flex-shrink-0" />
            <span>WhatsApp + Web</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-400 p-2 rounded-lg bg-white/5">
            <Bot className="h-4 w-4 text-purple-400 flex-shrink-0" />
            <span>No Setup Needed</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-400 p-2 rounded-lg bg-white/5 col-span-2 sm:col-span-1">
            <Globe className="h-4 w-4 text-purple-400 flex-shrink-0" />
            <span>English + Spanish</span>
          </div>
        </div>
      </div>
    </section>
  )
}
