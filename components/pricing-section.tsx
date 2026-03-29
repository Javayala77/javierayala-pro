import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    description: "Perfect for $500-$1,500/mo ad spend",
    price: "497",
    features: [
      "Full account audit & setup",
      "Conversion tracking fix",
      "Keyword optimization",
      "Bi-weekly optimization",
      "Monthly performance report",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    description: "Perfect for $1,500-$5,000/mo ad spend",
    price: "997",
    features: [
      "Everything in Starter, plus:",
      "Weekly optimization",
      "A/B ad copy testing",
      "Landing page recommendations",
      "Competitor monitoring",
      "Priority phone support",
      "Weekly strategy calls",
    ],
    cta: "Most Popular",
    popular: true,
  },
  {
    name: "Scale",
    description: "Perfect for $5,000+/mo ad spend",
    price: "1,497",
    features: [
      "Everything in Growth, plus:",
      "Daily optimization",
      "Multi-campaign management",
      "Advanced bid strategies",
      "Custom reporting dashboard",
      "Direct access to me",
      "Same-day response guarantee",
    ],
    cta: "Let's Talk",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            I don't charge for busy work. I charge for results.
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl border ${
                plan.popular 
                  ? 'border-primary bg-card shadow-lg shadow-primary/10' 
                  : 'border-border bg-card'
              } p-6 sm:p-8`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
              </div>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${plan.popular ? '' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
                variant={plan.popular ? "default" : "secondary"}
                asChild
              >
                <a href="#audit-form">{plan.cta}</a>
              </Button>
            </div>
          ))}
        </div>
        
        {/* Trust Guarantee */}
        <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-primary/30 bg-primary/5 p-6 text-center">
          <p className="text-lg font-medium text-foreground">
            No long-term contracts. Cancel anytime.
          </p>
          <p className="mt-2 text-muted-foreground">
            Results or I don't deserve your money. Start with a free audit — 
            if I can't help, I'll tell you.
          </p>
        </div>
      </div>
    </section>
  )
}
