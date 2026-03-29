"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do I need any technical knowledge?",
    answer: "Zero. You tell us your service and city. We handle everything.",
  },
  {
    question: "What if I already have a website?",
    answer: "We build a dedicated landing page optimized specifically for ads. Different from a regular website — designed to convert clicks into calls.",
  },
  {
    question: "How do I pay for the Google Ads?",
    answer: "You set a daily budget directly with Google. We recommend $10-30/day to start. That's separate from our $800 fee.",
  },
  {
    question: "What happens after month 1?",
    answer: "We show you your results and recommend next steps. Continue for $1,000/mo or stop. Your choice. No pressure.",
  },
  {
    question: "What cities do you serve?",
    answer: "Currently launching businesses in Miami and surrounding areas. We know this market inside and out.",
  },
]

export function LaunchFaq() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12">
          Questions?
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="rounded-xl border border-gray-800 bg-[#12121a] px-6 data-[state=open]:border-orange-500/50"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-orange-400 hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 pb-5 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
