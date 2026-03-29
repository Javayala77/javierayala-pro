"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How is this different from a traditional agency?",
    answer: "Traditional agencies spread one account manager across 50+ clients. They use manual processes that take weeks. I use AI to analyze your entire account in minutes, not days. You get enterprise-level optimization at a fraction of the cost, with direct access to me — not a junior account manager reading from a script.",
  },
  {
    question: "Do I need to sign a contract?",
    answer: "No long-term contracts. Ever. You can cancel anytime with 30 days notice. I believe if I'm delivering results, you'll want to stay. If I'm not, you shouldn't be locked in. Simple as that.",
  },
  {
    question: "How long until I see results?",
    answer: "Most clients see improvements within the first 2-4 weeks. The initial audit and fixes often have immediate impact — especially if you have conversion tracking issues or obvious budget waste. Ongoing optimization compounds over time, with campaigns getting smarter every month.",
  },
  {
    question: "Will you have access to my Google Ads account?",
    answer: "Yes, I'll need viewer access to perform the audit, and manager access if we work together. You maintain full ownership and can revoke access anytime. I use the official Google Ads API — everything is secure and compliant with Google's policies.",
  },
  {
    question: "What if my ads are already running?",
    answer: "Perfect — that gives me real data to work with. I'll audit what's working, what's wasting money, and where opportunities exist. We'll make changes strategically without disrupting what's already performing. No starting from scratch unless necessary.",
  },
  {
    question: "I've been burned by agencies before. How do I know this is different?",
    answer: "I get it. That's why I offer a free audit first — no commitment, no credit card. You'll see exactly what I find and what I'd recommend before paying anything. I also don't take on clients I can't help. If your account is already well-optimized, I'll tell you.",
  },
  {
    question: "Do you only work with certain industries?",
    answer: "I specialize in local service businesses — plumbers, HVAC, roofers, dentists, cleaning services, garage door companies, locksmiths, and similar. These are industries where phone calls drive revenue and Google Ads can make a massive difference. If you're not in this category, we can still chat to see if it's a fit.",
  },
  {
    question: "What does 'AI-powered' actually mean?",
    answer: "I use AI tools (like Claude Code) connected to the Google Ads API to analyze your account programmatically. This means I can review thousands of keywords, search terms, and conversion actions in minutes instead of hours. The AI handles the data analysis — I handle the strategy and human decision-making.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know before getting started.
          </p>
        </div>
        
        {/* FAQ Accordion */}
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="rounded-xl border border-border bg-card px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="py-4 text-left text-base font-medium hover:no-underline [&[data-state=open]>svg]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
