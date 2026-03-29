"use client"

import { X, Check, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RankFlowBeforeAfter() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-12 sm:mb-16 text-balance">
          Two Futures. Same Business. Your Choice.
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* BEFORE - Without RankFlow */}
          <div className="p-6 sm:p-8 rounded-2xl bg-red-500/5 border border-red-500/20">
            <div className="text-red-500 font-bold text-sm uppercase tracking-wide mb-6">
              Without Consistent Content
            </div>
            
            <ul className="space-y-4">
              {[
                "Your website sits there collecting dust",
                "Google thinks you're inactive (or dead)",
                "Competitors outrank you for YOUR keywords",
                "You pay for every single lead through ads",
                "Customers who would love you never find you",
                "Every month the gap gets harder to close",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 pt-6 border-t border-red-500/20">
              <p className="text-sm text-gray-500 italic">
                &ldquo;I know I should be doing something about this... I just don&apos;t have the time.&rdquo;
              </p>
            </div>
          </div>
          
          {/* AFTER - With RankFlow */}
          <div className="p-6 sm:p-8 rounded-2xl bg-green-500/10 border border-green-500/30">
            <div className="text-green-500 font-bold text-sm uppercase tracking-wide mb-6">
              6 Months From Now
            </div>
            
            <ul className="space-y-4">
              {[
                "48+ blog posts ranking on Google for you",
                "Phone rings from organic search (free leads)",
                "Customers find YOU before your competitors",
                "Your website works 24/7 while you sleep",
                "You're the obvious choice in your area",
                "Every month it gets easier, not harder",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 pt-6 border-t border-green-500/30">
              <p className="text-sm text-green-400 italic">
                &ldquo;I can&apos;t believe I waited this long. The leads just keep coming.&rdquo;
              </p>
            </div>
          </div>
        </div>
        
        {/* Future Pacing */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#0F1629] border border-gray-800 text-center">
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4">
            Imagine this: It&apos;s 6 months from now. Your phone rings. It&apos;s a customer who found you on Google. 
            They searched for exactly what you do. They saw your blog post. They clicked. They called.
          </p>
          <p className="text-lg sm:text-xl text-white font-semibold">
            That lead cost you nothing. And it keeps happening. Every week.
          </p>
        </div>
        
        <div className="mt-10 text-center">
          <Button 
            size="lg" 
            className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-bold bg-green-600 hover:bg-green-700 text-white rounded-xl"
            asChild
          >
            <a href="https://wa.me/573103956445?text=I%20want%20the%20second%20future" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              I Want That Future
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
