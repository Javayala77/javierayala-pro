import { ArrowRight, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react"

const caseStudies = [
  {
    company: "Unclog Plumbing",
    industry: "Plumbing",
    problem: "Found 9 duplicate conversion actions counting every call up to 5x. Agency reported 450 conversions — reality was 90 actual calls.",
    solution: "Fixed tracking, rebuilt campaign structure, optimized Smart Bidding for real phone calls.",
    results: [
      { label: "Actual Leads Identified", value: "-80%", context: "false positives removed" },
      { label: "Cost Per Real Lead", value: "-47%", context: "after cleanup" },
      { label: "Quality Calls", value: "+62%", context: "in 30 days" },
    ],
  },
  {
    company: "Precision Blinds Chicago",
    industry: "Blinds & Shutters",
    problem: "Single ad group targeting everything. Budget spread thin across hundreds of irrelevant keywords. No landing page strategy.",
    solution: "Built 4 laser-focused ad groups, each with dedicated landing page. $70/day budget split strategically by product line and buyer intent.",
    results: [
      { label: "Ad Groups", value: "4", context: "laser-focused" },
      { label: "Irrelevant Keywords", value: "Cut 73%", context: "saving budget" },
      { label: "Qualified Leads", value: "+89%", context: "in first month" },
    ],
  },
]

export function CaseStudiesSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Real Results, Real Businesses
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            I don't take on clients I can't help. If your account is healthy, I'll tell you. 
            If it's not, I'll show you exactly what's wrong — before you pay me a single dollar.
          </p>
        </div>
        
        {/* Case Study Cards */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-2">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="rounded-2xl border border-border bg-card overflow-hidden"
            >
              {/* Header */}
              <div className="border-b border-border bg-muted/30 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{study.company}</h3>
                    <p className="text-sm text-muted-foreground">{study.industry}</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Problem */}
                <div>
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium text-destructive">
                    <AlertTriangle className="h-4 w-4" />
                    The Problem
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
                </div>
                
                {/* Solution */}
                <div>
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium text-primary">
                    <CheckCircle className="h-4 w-4" />
                    The Solution
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                </div>
                
                {/* Results */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="text-center">
                      <p className="text-2xl font-bold text-primary">{result.value}</p>
                      <p className="text-xs text-muted-foreground">{result.context}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a 
            href="#audit-form" 
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            See what I can find in your account
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
