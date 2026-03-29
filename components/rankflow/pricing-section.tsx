"use client"

import { Check, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const included = [
  "4 SEO blog posts/month",
  "Auto Google indexing",
  "4 GMB posts/month",
  "12 social posts/month",
  "English + Spanish content",
  "Keyword research included",
  "Monthly rankings report",
  "Schema markup",
  "Internal linking",
  "Content calendar",
  "No contracts",
  "Cancel anytime",
]

export function RankFlowPricing() {
  return (
    <section className="px-4 py-16 sm:py-24 bg-gradient-to-b from-transparent via-green-500/5 to-transparent">
      <div className="max-w-md sm:max-w-lg mx-auto text-center">
        <div className="relative p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-[#0F1629] border-2 border-green-500 shadow-2xl shadow-green-500/20">
          {/* Badge */}
          <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 rounded-full bg-green-600 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
            <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4" />
            COMPLETE SEO + CONTENT
          </div>
          
          {/* Price */}
          <div className="mb-6 sm:mb-8 mt-2">
            <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white">$497</span>
            <span className="text-2xl text-gray-400">/mo</span>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 sm:mb-8 text-left">
            {included.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-300">{item}</span>
              </div>
            ))}
          </div>
          
          {/* Value Prop */}
          <p className="text-sm text-gray-400 mb-6 italic">
            &ldquo;One new customer from organic search pays for 2+ months. After that it&apos;s pure profit.&rdquo;
          </p>
          
          {/* CTA */}
          <Button 
            size="lg" 
            className="w-full h-14 sm:h-16 text-lg sm:text-xl font-bold bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-lg shadow-green-600/25 transition-all hover:scale-[1.02]"
            asChild
          >
            <a href="https://wa.me/573103956445?text=I%20want%20RankFlow%20Pro%20-%20$497/mo" target="_blank" rel="noopener noreferrer">
              Start Ranking Higher Today
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
