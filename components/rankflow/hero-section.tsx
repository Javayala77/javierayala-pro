"use client"

import { TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RankFlowHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-24 sm:py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(22,163,74,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(22,163,74,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(22,163,74,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Brand Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10">
          <TrendingUp className="h-4 w-4 text-green-500" />
          <span className="text-green-500 font-bold tracking-wide text-sm">RANKFLOW PRO</span>
        </div>
        
        {/* Main Headline - Pain/Problem focused */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 text-balance">
          Your Competitor Posts Content Every Week.
          <br className="hidden sm:block" />
          <span className="text-green-500"> You Don&apos;t.</span>
          <br className="hidden sm:block" />
          <span className="text-white">Guess Who Google Ranks Higher?</span>
        </h1>
        
        {/* Subheadline - Empathy + Bridge */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed px-2">
          You&apos;re not invisible on Google because you&apos;re bad at what you do. 
          You&apos;re invisible because you don&apos;t have time to post content every single week. 
          <span className="text-white font-semibold"> What if someone did it for you?</span>
        </p>
        
        {/* CTA Button */}
        <Button 
          size="lg" 
          className="h-14 sm:h-16 px-8 sm:px-10 text-lg sm:text-xl font-bold bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-lg shadow-green-600/25 transition-all hover:scale-105 hover:shadow-green-600/40"
          asChild
        >
          <a href="https://wa.me/573103956445?text=Show%20me%20how%20RankFlow%20works" target="_blank" rel="noopener noreferrer">
            Show Me How It Works
          </a>
        </Button>
        
        {/* Micro-commitment text */}
        <p className="mt-4 text-sm text-gray-500">
          No sales pitch. Just a conversation.
        </p>
      </div>
    </section>
  )
}
