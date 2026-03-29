"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Can I start with just one service?",
    answer: "Yes! Each service is available individually. But the bundle is where the magic happens - all channels working together amplifies your results and saves you $200/mo.",
  },
  {
    question: "What's my ad spend on top of this?",
    answer: "Ad spend is separate and goes directly to Google. Most clients invest $1,500-5,000/mo in ads. We help you determine the right budget for your market.",
  },
  {
    question: "How quickly will I see results?",
    answer: "Google Ads: calls within days. GMB optimization: 2-4 weeks. SEO: 3-6 months for rankings. The bundle accelerates everything because channels support each other.",
  },
  {
    question: "Do I need all three services?",
    answer: "Depends on your goals. If you want to truly dominate your local market and build long-term assets while getting immediate leads, yes. The bundle is designed for serious businesses.",
  },
  {
    question: "What's the contract?",
    answer: "Month-to-month. We earn your business every month. Most clients stay because results speak for themselves.",
  },
]

export function DominationFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  
  return (
    <section className="px-4 py-16 sm:py-24 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-10 sm:mb-12">
          Questions?
        </h2>
        
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-xl border border-gray-800 bg-[#12121a] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
              >
                <span className="text-base sm:text-lg font-semibold text-white pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-yellow-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
