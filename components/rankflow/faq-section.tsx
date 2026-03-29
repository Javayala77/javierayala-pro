"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How long until I see results?",
    answer: "Honest answer: SEO takes time. You'll start seeing movement in 2-3 months. Meaningful results in 4-6 months. But here's the thing — unlike ads, the results compound. Every month gets better. After 12 months, you have an asset that keeps bringing leads for free.",
  },
  {
    question: "Do I need a website?",
    answer: "Yes, we need somewhere to publish your blog posts. If you don't have a website, ask me about our FastLaunch Pro package — we can build you one in 48 hours and then start content immediately.",
  },
  {
    question: "Who writes the content?",
    answer: "AI writes the first draft. My team reviews, optimizes, and polishes it. Then it gets published and submitted to Google. You never touch it unless you want to.",
  },
  {
    question: "What if I don't like the content?",
    answer: "We send you a monthly content calendar before anything goes live. You can approve, edit, or request changes. Your brand, your voice, your final say.",
  },
  {
    question: "Can you guarantee I'll rank #1?",
    answer: "No. And if anyone promises you that, they're lying. What I CAN guarantee: we will publish consistent, quality content targeted to your keywords every single week. Google rewards consistency. The rankings will come.",
  },
  {
    question: "What if I've been burned by SEO agencies before?",
    answer: "I hear this all the time. Most agencies talk a lot and deliver nothing. We're different: you'll see exactly what gets published, when, and where. Monthly reports show ranking progress. No smoke and mirrors. If you're not happy, you can walk away anytime.",
  },
  {
    question: "How much does it cost?",
    answer: "Message me on WhatsApp and I'll share pricing based on your specific needs. No pressure, no sales pitch. Just a conversation to see if this is a fit.",
  },
]

export function RankFlowFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="px-4 py-16 sm:py-24 bg-gradient-to-b from-transparent via-green-500/5 to-transparent">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-4">
          Questions You Probably Have
        </h2>
        <p className="text-gray-400 text-center mb-10 sm:mb-12">
          The real ones, not the fluffy ones
        </p>
        
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-xl border border-gray-800 bg-[#0F1629] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-white pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-green-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`} 
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
