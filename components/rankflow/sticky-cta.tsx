"use client"

import { useState, useEffect } from "react"
import { TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RankFlowStickyCta() {
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
      className={`fixed top-0 left-0 right-0 z-50 bg-[#0A0F1E]/95 backdrop-blur-sm border-b border-gray-800 py-2.5 px-4 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <TrendingUp className="h-4 w-4 text-green-500 flex-shrink-0" />
          <span className="font-bold text-white text-sm truncate">RankFlow Pro</span>
          <span className="text-gray-400 text-sm hidden lg:inline">— Content That Ranks You Higher</span>
        </div>
        
        <div className="flex items-center gap-3 flex-shrink-0">
          <Button 
            size="sm" 
            className="bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg text-sm h-9 px-4"
            asChild
          >
            <a href="https://wa.me/573103956445?text=Show%20me%20how%20RankFlow%20works" target="_blank" rel="noopener noreferrer">
              Show Me How
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
