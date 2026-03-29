"use client"

import { MapPin, Star, Bell, Calendar, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SeoHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-24 sm:py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(24,71,237,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(24,71,237,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(24,71,237,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Map Pin Emoji as Brand Mark */}
        <div className="mb-6 flex justify-center">
          <span className="text-6xl sm:text-7xl" role="img" aria-label="Map pin">📍</span>
        </div>
        
        {/* Brand Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10">
          <MapPin className="h-4 w-4 text-blue-400" />
          <span className="text-blue-400 font-bold tracking-wide text-sm">MAPRANK PRO</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 text-balance">
          Why Are Your Competitors
          <br className="hidden sm:block" />
          <span className="text-blue-400"> Always Above You</span> On Google Maps?
        </h1>
        
        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed px-2">
          It&apos;s not luck. They have a system.
          <br />
          <span className="text-white font-semibold">Want to know what they&apos;re doing that you&apos;re not?</span>
        </p>
        
        {/* CTA Button */}
        <Button 
          size="lg" 
          className="h-14 sm:h-16 px-8 sm:px-10 text-lg sm:text-xl font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-600/25 transition-all hover:scale-105 hover:shadow-blue-600/40"
          asChild
        >
          <a href="https://wa.me/573103956445?text=Why%20are%20my%20competitors%20above%20me%20on%20Google%20Maps?" target="_blank" rel="noopener noreferrer">
            Show Me The Secret
          </a>
        </Button>
        
        {/* Trust Signals */}
        <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 sm:gap-6 px-2">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-gray-400">
            <Star className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 flex-shrink-0" />
            <span>Automated Review Responses</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-gray-400">
            <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 flex-shrink-0" />
            <span>Bad Review Alerts in Minutes</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-gray-400">
            <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 flex-shrink-0" />
            <span>Weekly GMB Posts Included</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-gray-400">
            <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 flex-shrink-0" />
            <span>Miami Local Specialists</span>
          </div>
        </div>
      </div>
    </section>
  )
}
