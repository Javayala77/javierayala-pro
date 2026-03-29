"use client"

import { Crown, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DominationFinalCta() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-6 flex justify-center">
          <span className="text-5xl sm:text-6xl" role="img" aria-label="Crown">👑</span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6 text-balance">
          Ready To <span className="text-yellow-500">Own Your Market?</span>
        </h2>
        
        <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
          Stop competing. Start dominating. One system. One team. One invoice.
        </p>
        
        <Button 
          size="lg" 
          className="h-14 sm:h-16 px-8 sm:px-10 text-lg sm:text-xl font-bold bg-yellow-500 hover:bg-yellow-600 text-black rounded-xl shadow-lg shadow-yellow-500/25 transition-all hover:scale-105"
          asChild
        >
          <a href="https://wa.me/573103956445?text=I'm%20ready%20to%20dominate%20my%20market" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" />
            Let&apos;s Dominate — $1,594/mo
          </a>
        </Button>
        
        <p className="mt-6 text-sm text-gray-500">
          Or message me with any questions. I reply fast.
        </p>
      </div>
    </section>
  )
}
