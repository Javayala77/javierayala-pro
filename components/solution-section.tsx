import { Zap, Target, Eye } from "lucide-react"

const solutions = [
  {
    icon: Zap,
    title: "Speed",
    description: "What takes agencies a week, I do in an afternoon. AI audits your entire account instantly — every keyword, every conversion action, every wasted dollar.",
    highlight: "10x faster than traditional agencies",
  },
  {
    icon: Target,
    title: "Precision",
    description: "I don't guess. I use real data. Your actual search terms, your real conversion history, your true CPA — to build campaigns that actually work.",
    highlight: "Data-driven decisions, not hunches",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "You see everything I do, in real time. No black box. No confusing reports. Just clear results and honest conversation.",
    highlight: "Full visibility, always",
  },
]

export function SolutionSection() {
  return (
    <section className="border-y border-border/50 bg-card/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            What I Do <span className="text-primary">Differently</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The AI advantage means enterprise-level optimization at a fraction of the cost.
          </p>
        </div>
        
        {/* Solution Cards */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background p-8 transition-all hover:border-primary/50"
            >
              {/* Gradient accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-primary/50" />
              
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <solution.icon className="h-7 w-7 text-primary" />
              </div>
              
              <h3 className="mb-3 text-2xl font-bold text-foreground">
                {solution.title}
              </h3>
              
              <p className="mb-4 text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
              
              <p className="text-sm font-medium text-primary">
                {solution.highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
