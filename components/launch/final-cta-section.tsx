"use client"

import { Rocket, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LaunchFinalCta() {
  return (
    <section className="px-4 py-20 sm:py-28 bg-gradient-to-t from-orange-500/10 to-transparent">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-500 mb-8 shadow-lg shadow-orange-500/30">
          <Rocket className="h-10 w-10 text-white" />
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6 text-balance">
          Ready To Launch Your Business In{" "}
          <span className="text-orange-500">48 Hours?</span>
        </h2>
        
        <p className="text-xl text-gray-400 mb-10">
          Tell us your service and city.
          <br />
          <span className="text-white font-semibold">We handle everything else.</span>
        </p>
        
        {/* WhatsApp CTA */}
        <Button 
          size="lg" 
          className="h-16 px-10 text-xl font-bold bg-orange-500 hover:bg-orange-600 text-white rounded-xl shadow-lg shadow-orange-500/25 transition-all hover:scale-105 gap-3"
          asChild
        >
          <a href="https://wa.me/573103956445?text=I%20want%20to%20launch%20my%20business%20in%2048%20hours" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-6 w-6" />
            Message Us On WhatsApp
          </a>
        </Button>
        
        <p className="mt-6 text-sm text-gray-500">
          We'll respond within 1 hour during business hours
        </p>
      </div>
    </section>
  )
}
