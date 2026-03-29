"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function RankFlowFinalCta() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6 text-balance">
          Every Week You Wait,
          <br />
          <span className="text-green-500">Your Competitor Publishes Content You Don&apos;t.</span>
        </h2>
        
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed">
          In 12 months they&apos;ll have 48 blog posts ranking on Google.
        </p>
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed">
          You&apos;ll still be thinking about getting started.
        </p>
        <p className="text-lg sm:text-xl text-white font-semibold max-w-2xl mx-auto mb-8">
          The gap only gets harder to close.
        </p>
        
        <Button 
          size="lg" 
          className="h-14 sm:h-16 px-8 sm:px-12 text-lg sm:text-xl font-bold bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-lg shadow-green-600/25 transition-all hover:scale-105"
          asChild
        >
          <a href="https://wa.me/573103956445?text=I%20want%20to%20start%20ranking%20higher%20on%20Google" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" />
            Show Me How It Works
          </a>
        </Button>
        
        <p className="mt-4 text-sm text-gray-500">
          No commitment. No sales pitch. Just a conversation on WhatsApp.
        </p>
      </div>
    </section>
  )
}
