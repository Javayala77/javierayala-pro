"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Mail, ArrowRight } from "lucide-react"

const faqs = [
  {
    question: "How often will you email me?",
    answer: "Once a week. Every Tuesday morning. That's it. No daily spam, no random promotions. Just one useful email per week.",
  },
  {
    question: "Is this actually free?",
    answer: "Yes. 100% free. I make my money helping businesses implement these strategies. The newsletter is how I share what I know.",
  },
  {
    question: "What if I'm not tech-savvy?",
    answer: "Perfect. I write for busy business owners, not tech nerds. Everything is explained simply. If I can't explain it in plain English, I don't include it.",
  },
  {
    question: "Can I unsubscribe?",
    answer: "Of course. Every email has an unsubscribe link at the bottom. One click and you're out. No hard feelings.",
  },
  {
    question: "Will you sell my email?",
    answer: "Never. Your email stays with me. I don't sell data, I don't share lists, I don't do any of that sketchy stuff.",
  },
]

export function NewsletterFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [email, setEmail] = useState("")

  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-black text-center mb-12">
          Questions? I Got Answers.
        </h2>
        
        <div className="space-y-3 mb-16">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-xl bg-zinc-900/50 border border-zinc-800 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-white">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-zinc-400 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-zinc-400 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Final CTA */}
        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
          <h3 className="text-xl sm:text-2xl font-black mb-3">
            Ready to Level Up Your Marketing?
          </h3>
          <p className="text-zinc-400 mb-6">
            Join 500+ business owners who get smarter about AI every week.
          </p>
          
          <form className="max-w-sm mx-auto flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="w-full h-12 pl-12 pr-4 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>
            <Button 
              type="submit"
              className="h-12 px-6 font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
            >
              Join Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
