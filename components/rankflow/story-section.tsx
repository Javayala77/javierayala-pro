"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RankFlowStory() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto">
        {/* Story opener */}
        <p className="text-green-500 font-semibold text-sm uppercase tracking-wide mb-6 text-center">
          The Moment Everything Changed
        </p>
        
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
            I used to think that if you were good at what you do, customers would find you.
          </p>
          
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
            I was wrong.
          </p>
          
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
            A few years ago, I was helping a plumber in Miami. Great guy. 20 years experience. 
            Five-star reviews. The kind of tradesman you&apos;d trust with your home. But when someone 
            searched <span className="text-white font-semibold">&ldquo;best plumber near me&rdquo;</span> on Google... 
            he was nowhere to be found.
          </p>
          
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
            His competitor — a guy with half the experience and worse reviews — was ranking #1.
          </p>
          
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
            Why?
          </p>
          
          <p className="text-lg sm:text-xl text-white leading-relaxed mb-6 font-semibold">
            Because that competitor posted a blog every week. He updated his Google Business Profile. 
            He showed Google he was &ldquo;active&rdquo; — and Google rewarded him with free traffic.
          </p>
          
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
            That&apos;s when I had my aha moment:
          </p>
          
          <div className="my-8 p-6 sm:p-8 rounded-2xl bg-green-500/10 border border-green-500/30">
            <p className="text-xl sm:text-2xl text-white font-bold leading-relaxed text-center">
              &ldquo;Google doesn&apos;t rank the best business. Google ranks the most consistent business.&rdquo;
            </p>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
            The problem isn&apos;t that local business owners are bad at marketing. 
            The problem is they&apos;re <span className="text-white font-semibold">too busy running their business</span> to 
            post content every single week.
          </p>
          
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
            So I built a system that does it for them.
          </p>
          
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
            Every week, content goes out. Blog posts. Google updates. Social media. All of it. 
            Automatically. While they&apos;re out doing what they do best — serving customers.
          </p>
        </div>
        
        <div className="text-center mt-10">
          <Button 
            size="lg" 
            className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-bold bg-green-600 hover:bg-green-700 text-white rounded-xl"
            asChild
          >
            <a href="https://wa.me/573103956445?text=I%20want%20to%20learn%20more%20about%20RankFlow" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Show Me How It Works
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
