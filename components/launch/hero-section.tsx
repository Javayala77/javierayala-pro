"use client"

import { Zap, Clock, CheckCircle, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LaunchHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-24 sm:py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,120,50,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,120,50,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,120,50,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Lightning Emoji as Brand Mark */}
        <div className="mb-6 flex justify-center">
          <span className="text-6xl sm:text-7xl" role="img" aria-label="Lightning bolt">⚡</span>
        </div>
        
        {/* Brand Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10">
          <Zap className="h-4 w-4 text-orange-500" />
          <span className="text-orange-500 font-bold tracking-wide text-sm">FASTLAUNCH PRO</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 text-balance">
          Your Business.
          <span className="text-orange-500"> Online.</span>
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          In <span className="text-orange-500">48 Hours.</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed px-2">
          We build your landing page, launch your Google Ads, and have your phone ringing — 
          <span className="text-white font-semibold"> all in 48 hours flat.</span>
        </p>
        
        {/* Price */}
        <div className="mb-8">
          <div className="inline-block">
            <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white">$800</span>
            <p className="text-gray-400 text-base sm:text-lg mt-2">One time. Everything included.</p>
          </div>
        </div>
        
        {/* CTA Button */}
        <Button 
          size="lg" 
          className="h-14 sm:h-16 px-8 sm:px-10 text-lg sm:text-xl font-bold bg-orange-500 hover:bg-orange-600 text-white rounded-xl shadow-lg shadow-orange-500/25 transition-all hover:scale-105 hover:shadow-orange-500/40"
          asChild
        >
          <a href="https://wa.me/573103956445?text=I%20want%20to%20launch%20my%20business" target="_blank" rel="noopener noreferrer">
            Launch My Business Now
          </a>
        </Button>
        
        {/* Trust Signals */}
        <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 sm:gap-6 px-2">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-gray-400">
            <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 flex-shrink-0" />
            <span>48 Hour Guarantee</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-gray-400">
            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 flex-shrink-0" />
            <span>No Experience Needed</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-gray-400">
            <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 flex-shrink-0" />
            <span>Everything Done For You</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-gray-400">
            <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 flex-shrink-0" />
            <span>Miami Specialist</span>
          </div>
        </div>
      </div>
    </section>
  )
}
