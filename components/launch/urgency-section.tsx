"use client"

import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LaunchUrgency() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-6 sm:mb-8">
          <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
          <span className="text-red-400 font-medium text-sm sm:text-base">Don&apos;t Wait</span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6 sm:mb-8 text-balance px-2">
          Every Day You Wait Is A Day Your Competitor Gets{" "}
          <span className="text-orange-500">Your Customers</span>
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
          While you&apos;re figuring out websites and Google Ads — someone in your city is 
          already running ads for your exact service.
        </p>
        
        <p className="text-base sm:text-lg text-white font-semibold max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
          We launch you in 48 hours so you stop losing customers to competitors who got online first.
        </p>
        
        <Button 
          size="lg" 
          className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-bold bg-orange-500 hover:bg-orange-600 text-white rounded-xl shadow-lg shadow-orange-500/25 transition-all hover:scale-105"
          asChild
        >
          <a href="https://wa.me/573103956445?text=I'm%20ready%20to%20launch%20my%20business" target="_blank" rel="noopener noreferrer">
            I&apos;m Ready To Launch
          </a>
        </Button>
      </div>
    </section>
  )
}
