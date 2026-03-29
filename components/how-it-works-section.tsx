import { Search, Wrench, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Free Audit",
    timeframe: "48 hours",
    description: "I connect to your Google Ads account and run a full AI-powered audit. I find every problem, every waste, every missed opportunity. Free.",
    details: [
      "Complete account access review",
      "Conversion tracking analysis",
      "Wasted spend identification",
      "Competitor landscape scan",
    ],
  },
  {
    number: "02",
    icon: Wrench,
    title: "Fix & Build",
    timeframe: "First week",
    description: "I fix your conversion tracking, clean up your keywords, and build campaigns structured to generate calls. Not vanity metrics. Real leads.",
    details: [
      "Conversion action cleanup",
      "Keyword restructuring",
      "Negative keyword implementation",
      "Campaign architecture redesign",
    ],
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Optimize Weekly",
    timeframe: "Ongoing",
    description: "Every week I analyze performance, add negatives, adjust bids, test new ads. Your campaigns get smarter every month.",
    details: [
      "Weekly performance reviews",
      "Continuous bid optimization",
      "A/B testing ad copy",
      "Search term monitoring",
    ],
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A simple, transparent process. No surprises, no hidden fees, no corporate runaround.
          </p>
        </div>
        
        {/* Steps */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line (hidden on mobile, shown on lg) */}
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-16 hidden h-px w-8 bg-gradient-to-r from-primary to-primary/30 lg:block" style={{ transform: 'translateX(100%)' }} />
                )}
                
                <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                  {/* Step number and icon */}
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-4xl font-bold text-primary/30">{step.number}</span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  
                  {/* Title and timeframe */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                    <span className="text-sm font-medium text-primary">{step.timeframe}</span>
                  </div>
                  
                  {/* Description */}
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Details list */}
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
