"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do you post fake reviews?",
    answer: "Absolutely not. We manage and respond to real reviews only. We never generate fake reviews.",
  },
  {
    question: "What if I get a bad review?",
    answer: "You get a WhatsApp alert within minutes. We draft a professional response. You approve it. We post it. Crisis handled.",
  },
  {
    question: "Do I need to give you my Google password?",
    answer: "No. You give us manager access to your Google Business Profile. Safe and secure.",
  },
  {
    question: "What languages do you respond in?",
    answer: "English and Spanish. Perfect for Miami businesses.",
  },
  {
    question: "How long does setup take?",
    answer: "24 hours from signup to full monitoring active.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. No contracts. No fees. Cancel with 30 days notice.",
  },
]

export function SeoFaq() {
  return (
    <section className="px-4 py-16 sm:py-24 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-10 sm:mb-12">
          Frequently Asked <span className="text-blue-400">Questions</span>
        </h2>
        
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-800 rounded-xl px-5 sm:px-6 bg-[#0D1424] data-[state=open]:border-blue-500/30"
            >
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-white hover:text-blue-400 hover:no-underline py-4 sm:py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 text-sm sm:text-base pb-4 sm:pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
