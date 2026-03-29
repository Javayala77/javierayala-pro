"use client"

import { Plus, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const bundleItems = [
  { service: "SEO + Content", price: "$497/mo" },
  { service: "Google Ads Management", price: "$1,000/mo" },
  { service: "GMB Management", price: "$297/mo" },
]

export function RankFlowBundle() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 sm:mb-10">
          The Complete Local Domination Bundle
        </h2>
        
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0F1629] border border-gray-800 mb-6">
          <div className="space-y-4 mb-6">
            {bundleItems.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">{item.service}</span>
                  <span className="text-gray-400">{item.price}</span>
                </div>
                {index < bundleItems.length - 1 && (
                  <div className="flex justify-center my-2">
                    <Plus className="h-4 w-4 text-gray-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-gray-500 line-through text-lg">$1,794/mo</span>
              <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-sm font-bold">SAVE $200</span>
            </div>
            <div className="text-4xl sm:text-5xl font-black text-white mb-4">
              $1,594<span className="text-xl text-gray-400">/mo</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-400 mb-6 max-w-md mx-auto">
          Organic rankings bring free leads. Google Ads capture buyers today. GMB converts Map searchers.
          <br />
          <span className="text-white font-semibold">Together = total Miami domination.</span>
        </p>
        
        <Button 
          size="lg" 
          className="h-14 px-8 text-lg font-bold bg-green-600 hover:bg-green-700 text-white rounded-xl"
          asChild
        >
          <a href="https://wa.me/573103956445?text=I%20want%20the%20Local%20Domination%20Bundle" target="_blank" rel="noopener noreferrer">
            Get The Bundle
          </a>
        </Button>
      </div>
    </section>
  )
}
