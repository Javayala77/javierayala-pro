import { Bot, Users, Zap, Clock } from "lucide-react"

const comparisons = [
  {
    traditional: "1 person managing 50 accounts manually",
    ai: "AI handles data analysis, I handle strategy",
    icon: Users,
  },
  {
    traditional: "Monthly reports with outdated data",
    ai: "Real-time API access, changes in minutes",
    icon: Clock,
  },
  {
    traditional: "\"We'll get to it next week\"",
    ai: "Issues identified and fixed same day",
    icon: Zap,
  },
]

export function AIAdvantageSection() {
  return (
    <section className="border-y border-border/50 bg-card/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
              <Bot className="h-4 w-4" />
              <span>The AI Advantage</span>
            </div>
            
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why AI Changes Everything For Your Google Ads
            </h2>
            
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Traditional agencies spread one person across 50+ accounts. I use AI to handle the 
              heavy lifting — analyzing thousands of data points in seconds — so I can focus on 
              strategy that actually moves the needle.
            </p>
            
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              The result? Enterprise-level optimization at a fraction of the cost. Real-time 
              adjustments instead of monthly check-ins. And someone who actually picks up the phone.
            </p>
            
            {/* Key benefits */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-lg border border-border bg-background p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">10x Faster</p>
                  <p className="text-sm text-muted-foreground">Than manual analysis</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-background p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">API Connected</p>
                  <p className="text-sm text-muted-foreground">Real-time data access</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Comparison */}
          <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
            <h3 className="mb-6 text-xl font-bold text-foreground">Traditional Agency vs. AI-Powered</h3>
            
            <div className="space-y-6">
              {comparisons.map((item, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-start gap-3 rounded-lg bg-destructive/5 p-4 border border-destructive/20">
                    <span className="mt-0.5 text-sm font-medium text-destructive">OLD:</span>
                    <p className="text-sm text-muted-foreground">{item.traditional}</p>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg bg-primary/5 p-4 border border-primary/20">
                    <span className="mt-0.5 text-sm font-medium text-primary">NEW:</span>
                    <p className="text-sm text-foreground">{item.ai}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
