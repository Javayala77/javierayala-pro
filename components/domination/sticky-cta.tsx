"use client"

import { useState, useEffect } from "react"
import { Crown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DominationStickyCta() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 bg-[#0a0a12]/95 backdrop-blur-sm border-b border-gray-800 py-2.5 px-4 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <Crown className="h-4 w-4 text-yellow-500 flex-shrink-0" />
          <span className="font-bold text-white text-sm truncate">Local Domination</span>
          <span className="text-gray-400 text-sm hidden lg:inline">— Own Your Market</span>
        </div>
        
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="text-xl font-black text-white hidden sm:inline">$1,594<span className="text-sm text-gray-400">/mo</span></span>
          <Button 
            size="sm" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg text-sm h-9 px-4"
            asChild
          >
            <a href="https://wa.me/573103956445?text=Local%20Domination%20Bundle" target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
