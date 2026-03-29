"use client"

import { useState, useEffect } from "react"
import { Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LaunchStickyCta() {
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
      className={`fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-sm border-b border-gray-800 py-2.5 px-4 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <Zap className="h-4 w-4 text-orange-500 flex-shrink-0" />
          <span className="font-bold text-white text-sm truncate">FastLaunch Pro</span>
          <span className="text-gray-400 text-sm hidden lg:inline">— Online in 48 Hours</span>
        </div>
        
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="text-xl font-black text-white hidden sm:inline">$800</span>
          <Button 
            size="sm" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg text-sm h-9 px-4"
            asChild
          >
            <a href="https://wa.me/573103956445?text=Launch%20My%20Business" target="_blank" rel="noopener noreferrer">
              Launch Now
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
