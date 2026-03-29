"use client"

import { AlertTriangle, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SeoFinalCta() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-6 sm:mb-8">
          <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-red-400" />
          <span className="text-red-400 font-medium text-sm sm:text-base">Don&apos;t Wait</span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6 sm:mb-8 text-balance px-2">
          Curious How You Can
          <br className="hidden sm:block" />
          <span className="text-blue-400"> Rank Above Your Competitors?</span>
        </h2>
        
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
          Message me. I&apos;ll show you exactly what your competitors are doing — and how you can beat them.
        </p>
        
        <Button 
          size="lg" 
          className="h-14 sm:h-16 px-8 sm:px-10 text-lg sm:text-xl font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-600/25 transition-all hover:scale-105"
          asChild
        >
          <a href="https://wa.me/573103956445?text=Show%20me%20how%20to%20beat%20my%20competitors%20on%20Google%20Maps" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5 mr-2" />
            Ask Me How
          </a>
        </Button>
      </div>
    </section>
  )
}
