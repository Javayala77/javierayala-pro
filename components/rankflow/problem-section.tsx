"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RankFlowProblem() {
  return (
    <section className="px-4 py-16 sm:py-24 bg-gradient-to-b from-transparent via-red-500/5 to-transparent">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-10 sm:mb-12 text-balance">
          The Real Reason You&apos;re Invisible On Google
        </h2>
        
        <div className="space-y-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
          <p>
            Let me paint a picture you probably know too well:
          </p>
          
          <p>
            Someone in your city searches <span className="text-white font-semibold">&ldquo;best plumber near me&rdquo;</span> or 
            <span className="text-white font-semibold"> &ldquo;roof repair Miami&rdquo;</span> or whatever service you offer.
          </p>
          
          <p>
            They see three businesses at the top of Google. They call one. Maybe two.
          </p>
          
          <p className="text-white font-semibold">
            You&apos;re not one of them.
          </p>
          
          <p>
            So they never even know you exist. That customer — who lives five minutes away, 
            who would have loved your work, who would have referred you to their neighbors — 
            just became your competitor&apos;s customer.
          </p>
          
          <p>
            And here&apos;s the painful part:
          </p>
          
          <div className="my-8 p-6 sm:p-8 rounded-2xl bg-red-500/10 border border-red-500/30">
            <p className="text-xl sm:text-2xl text-white font-bold leading-relaxed text-center">
              This is happening right now. Today. While you read this.
            </p>
          </div>
          
          <p>
            You&apos;re not losing customers because you&apos;re bad at what you do. 
            You&apos;ve got the skills. The experience. The reviews.
          </p>
          
          <p>
            You&apos;re losing customers because <span className="text-white font-semibold">Google doesn&apos;t know you&apos;re there.</span>
          </p>
          
          <p>
            And Google rewards one thing above all else: <span className="text-green-500 font-semibold">consistency.</span>
          </p>
          
          <p>
            The business that posts content every week? Google sees them as &ldquo;active.&rdquo; Relevant. Alive.
          </p>
          
          <p>
            The business that hasn&apos;t updated their website in six months? Google sees them as... nothing.
          </p>
        </div>
        
        <div className="mt-10 text-center">
          <Button 
            size="lg" 
            className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-bold bg-green-600 hover:bg-green-700 text-white rounded-xl"
            asChild
          >
            <a href="https://wa.me/573103956445?text=I%20want%20to%20stop%20being%20invisible%20on%20Google" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              I Want To Fix This
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
