"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Does it sound like a robot?",
    answer: "No. It sounds like a friendly professional team member. We train it to match your business voice and personality.",
  },
  {
    question: "What if a customer asks something the agent doesn't know?",
    answer: "The agent smoothly transfers to you for complex questions. It handles 80% automatically.",
  },
  {
    question: "How does it connect to my calendar?",
    answer: "We connect to Google Calendar or Calendly. It sees your real availability and books accordingly.",
  },
  {
    question: "Can I see all the conversations?",
    answer: "Yes. Full dashboard showing every conversation, booking, and lead — updated in real time.",
  },
  {
    question: "What if I need to change my services or prices?",
    answer: "We update the agent within 24 hours. Included in your plan.",
  },
  {
    question: "Does it work with my existing WhatsApp number?",
    answer: "Yes. We connect to your existing WhatsApp Business account. No new number needed.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. No contracts. 30 days notice to cancel.",
  },
]

export function AIAgentFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="px-4 py-16 sm:py-24 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-10 sm:mb-12">
          Questions? Answers.
        </h2>
        
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-xl border border-gray-800 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 py-4 flex items-center justify-between text-left bg-[#12121a] hover:bg-[#16161f] transition-colors"
              >
                <span className="font-medium text-white text-sm sm:text-base pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-purple-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 py-4 bg-[#0A0A0F] border-t border-gray-800">
                  <p className="text-gray-400 text-sm sm:text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
