"use client"

import { Star } from "lucide-react"

export function RankFlowSocialProof() {
  return (
    <section className="px-4 py-16 sm:py-24 bg-gradient-to-b from-transparent via-green-500/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-4 text-balance">
          What Business Owners Are Saying
        </h2>
        <p className="text-gray-400 text-center mb-12 sm:mb-16">
          Real results from real local businesses
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Placeholder testimonials */}
          {[
            {
              quote: "I used to get maybe one call a week from Google. Now I'm getting 3-4 a day. The blog posts are actually ranking.",
              name: "Coming Soon",
              business: "Plumbing Company, Miami",
              stars: 5,
            },
            {
              quote: "I tried doing SEO myself for two years. Nothing worked. Within 4 months of RankFlow, I'm on page one for three keywords.",
              name: "Coming Soon",
              business: "HVAC Service, Coral Gables",
              stars: 5,
            },
            {
              quote: "The best part is I don't have to think about it. Content goes out, rankings go up, phone rings. That's it.",
              name: "Coming Soon",
              business: "Landscaping, Doral",
              stars: 5,
            },
            {
              quote: "Finally a marketing service that actually delivers. No BS. Just results.",
              name: "Coming Soon",
              business: "Remodeling, Brickell",
              stars: 5,
            },
          ].map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-[#0F1629] border border-gray-800"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
              <div>
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.business}</p>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-sm text-gray-500 mt-8">
          * Testimonials coming soon as we onboard our first clients
        </p>
      </div>
    </section>
  )
}
