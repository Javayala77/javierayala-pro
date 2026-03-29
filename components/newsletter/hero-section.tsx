"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, ArrowRight, CheckCircle, Zap } from "lucide-react"

export function NewsletterHero() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsSubmitting(true)
    // Simulate API call - replace with your email service
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10">
          <Zap className="h-4 w-4 text-blue-400" />
          <span className="text-blue-400 font-medium text-sm">Free Weekly Newsletter</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] mb-6 text-balance">
          AI Marketing Secrets
          <br />
          <span className="text-blue-400">For Local Businesses</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-zinc-400 max-w-xl mx-auto mb-8 leading-relaxed">
          Every week I share one AI strategy that helped a real local business get more customers. 
          No theory. No fluff. Just what works.
        </p>
        
        {/* Email Form */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full h-14 pl-12 pr-4 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="h-14 px-6 text-base font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all hover:scale-[1.02] disabled:opacity-50"
              >
                {isSubmitting ? (
                  "Joining..."
                ) : (
                  <>
                    Join Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </div>
          </form>
        ) : (
          <div className="max-w-md mx-auto mb-8 p-6 rounded-xl bg-green-500/10 border border-green-500/30">
            <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">You&apos;re In!</h3>
            <p className="text-zinc-400">Check your inbox. Your first AI strategy is on the way.</p>
          </div>
        )}
        
        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Free forever</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>No spam, ever</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Unsubscribe anytime</span>
          </div>
        </div>
      </div>
    </section>
  )
}
