"use client"

import { useState } from "react"
import { Mail, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HomeNewsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <section id="newsletter" className="px-6 py-24 sm:py-32">
      <div className="max-w-4xl mx-auto">
        <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-gray-900 to-gray-900 border border-cyan-500/20 overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                <Mail className="h-6 w-6 text-cyan-400" />
              </div>
              <span className="text-cyan-400 font-semibold">The AI Marketing Letter</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black leading-tight mb-4">
              AI Marketing Secrets
              <br />
              <span className="text-cyan-400">Delivered Weekly</span>
            </h2>
            
            <p className="text-lg text-gray-400 mb-8 max-w-xl">
              Every week I share one AI marketing tactic, tool, or strategy that&apos;s actually working 
              for local businesses right now. No fluff. No theory. Just stuff you can use.
            </p>
            
            {isSubmitted ? (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">You&apos;re in!</div>
                  <div className="text-sm text-gray-400">Check your inbox for a welcome email.</div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 h-14 px-6 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
                <Button 
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="h-14 px-8 text-lg font-bold bg-cyan-500 hover:bg-cyan-600 text-black rounded-xl"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Subscribing...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Subscribe Free
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  )}
                </Button>
              </form>
            )}
            
            <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-500">
              <span>Free forever</span>
              <span>Unsubscribe anytime</span>
              <span>No spam, ever</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
