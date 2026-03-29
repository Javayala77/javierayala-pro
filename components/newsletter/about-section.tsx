"use client"

import { Button } from "@/components/ui/button"
import { Linkedin, ArrowRight } from "lucide-react"

export function NewsletterAbout() {
  return (
    <section className="px-4 py-20 sm:py-28 bg-zinc-900/30">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-zinc-800 flex items-center justify-center">
              <span className="text-6xl">JA</span>
            </div>
            <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-bold">
              Javier Ayala
            </div>
          </div>
          
          {/* Bio */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black mb-4">
              Who&apos;s Behind This?
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                I&apos;m Javier. I help local service businesses get more customers using AI and automation.
              </p>
              <p>
                I&apos;ve spent years figuring out what actually works for plumbers, HVAC companies, dentists, and other local businesses. Not theory. Not what works for tech startups. What works for real businesses with real customers.
              </p>
              <p>
                Every week, I share one thing I learned. Sometimes it&apos;s an AI tool. Sometimes it&apos;s a strategy. Sometimes it&apos;s a mistake I made so you don&apos;t have to.
              </p>
              <p className="text-white font-medium">
                It&apos;s free. It&apos;s useful. And it might just change how you think about marketing your business.
              </p>
            </div>
            
            <div className="mt-6 flex items-center gap-4">
              <Button 
                variant="outline"
                className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                asChild
              >
                <a href="https://www.linkedin.com/in/javier-ayala-056b82344" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
