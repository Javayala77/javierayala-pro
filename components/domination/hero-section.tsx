"use client"

import { Crown, Search, Target, MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DominationHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-24 sm:py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(234,179,8,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Crown Emoji as Brand Mark */}
        <div className="mb-6 flex justify-center">
          <span className="text-6xl sm:text-7xl" role="img" aria-label="Crown">👑</span>
        </div>
        
        {/* Brand Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10">
          <Crown className="h-4 w-4 text-yellow-500" />
          <span className="text-yellow-500 font-bold tracking-wide text-sm">LOCAL DOMINATION BUNDLE</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 text-balance">
          Own Your City.
          <br />
          <span className="text-yellow-500">Every Channel. Every Search.</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed px-2">
          The complete local marketing system that puts you everywhere your customers are looking — 
          <span className="text-white font-semibold"> Google Ads, SEO, and Maps. All managed for you.</span>
        </p>
        
        {/* 3 Pillars */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#12121a] border border-gray-800">
            <Search className="h-5 w-5 text-green-500" />
            <span className="text-sm sm:text-base text-gray-300">SEO + Content</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#12121a] border border-gray-800">
            <Target className="h-5 w-5 text-blue-500" />
            <span className="text-sm sm:text-base text-gray-300">Google Ads</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#12121a] border border-gray-800">
            <MapPin className="h-5 w-5 text-red-500" />
            <span className="text-sm sm:text-base text-gray-300">GMB Management</span>
          </div>
        </div>
        
        {/* CTA Button */}
        <Button 
          size="lg" 
          className="h-14 sm:h-16 px-8 sm:px-10 text-lg sm:text-xl font-bold bg-yellow-500 hover:bg-yellow-600 text-black rounded-xl shadow-lg shadow-yellow-500/25 transition-all hover:scale-105 hover:shadow-yellow-500/40"
          asChild
        >
          <a href="https://wa.me/573103956445?text=I%20want%20the%20Local%20Domination%20Bundle" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" />
            Dominate My Market
          </a>
        </Button>
        
        {/* Trust Signal */}
        <p className="mt-6 text-sm text-gray-500">
          Everything done for you. One monthly price. Zero headaches.
        </p>
      </div>
    </section>
  )
}
