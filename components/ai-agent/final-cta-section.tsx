"use client"

import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

export function AIAgentFinalCta() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6 text-balance">
          Curious What Your Business Could Do
          <br className="hidden sm:block" />
          <span className="text-purple-400"> If It Never Slept?</span>
        </h2>
        
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          Message me. I&apos;ll show you exactly how the AI agent works and answer any questions.
        </p>
        
        <Button 
          size="lg" 
          className="h-14 sm:h-16 px-8 sm:px-12 text-lg sm:text-xl font-bold bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-lg shadow-purple-600/25 transition-all hover:scale-105"
          asChild
        >
          <a href="https://wa.me/573103956445?text=Show%20me%20how%20the%20AI%20agent%20works" target="_blank" rel="noopener noreferrer">
            Ask Me Anything
          </a>
        </Button>
      </div>
    </section>
  )
}
