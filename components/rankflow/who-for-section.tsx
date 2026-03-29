"use client"

import { Check, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const thisIsForYou = [
  "You're great at what you do but invisible on Google",
  "You know you should be posting content but never have time",
  "You're tired of paying for every single lead",
  "You want organic traffic that compounds over time",
  "You're ready to invest in long-term growth",
]

const thisIsNotForYou = [
  "You want overnight results (SEO takes 3-6 months)",
  "You're not willing to trust someone with your content",
  "You expect to rank #1 in 30 days (no one can promise that)",
]

const industries = [
  "Plumbers", "HVAC", "Roofers", "Contractors", "Landscapers", 
  "Cleaning Services", "Electricians", "Pool Service", "Pest Control",
  "Locksmiths", "Movers", "Painters", "Remodelers", "Handymen",
]

export function RankFlowWhoFor() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-12 sm:mb-16 text-balance">
          Is This For You? Let&apos;s Be Honest.
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {/* This IS for you */}
          <div className="p-6 sm:p-8 rounded-2xl bg-green-500/10 border border-green-500/30">
            <h3 className="text-lg font-bold text-green-500 mb-6">This is for you if...</h3>
            <ul className="space-y-4">
              {thisIsForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* This is NOT for you */}
          <div className="p-6 sm:p-8 rounded-2xl bg-red-500/5 border border-red-500/20">
            <h3 className="text-lg font-bold text-red-500 mb-6">This is NOT for you if...</h3>
            <ul className="space-y-4">
              {thisIsNotForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-500">
              I&apos;d rather tell you now than waste your time.
            </p>
          </div>
        </div>
        
        {/* Industries */}
        <div className="text-center">
          <h3 className="text-lg text-gray-400 mb-5">Works especially well for:</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {industries.map((industry, index) => (
              <span 
                key={index}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#0F1629] border border-gray-800 text-gray-300 text-xs sm:text-sm"
              >
                {industry}
              </span>
            ))}
          </div>
          
          <Button 
            size="lg" 
            className="mt-10 h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-bold bg-green-600 hover:bg-green-700 text-white rounded-xl"
            asChild
          >
            <a href="https://wa.me/573103956445?text=I%20think%20RankFlow%20is%20right%20for%20me" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Let&apos;s Talk About My Business
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
