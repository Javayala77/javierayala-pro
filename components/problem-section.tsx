import { XCircle, AlertTriangle } from "lucide-react"

const problems = [
  {
    title: "Too Many Conversion Actions",
    description: "Smart Bidding gets confused when you have 9 actions counting every call 5 times. I've seen accounts where one phone call registers as 45 conversions.",
  },
  {
    title: "Wrong Keywords Triggering Ads",
    description: "Your plumbing ad showing for \"plumbing supplies wholesale\"? That's money down the drain — literally. No intent to hire, no chance of converting.",
  },
  {
    title: "Zero Negative Keywords",
    description: "Without negatives, you're paying for clicks from people looking for jobs, DIY tutorials, and competitors. Budget evaporating on irrelevant traffic.",
  },
  {
    title: "Phone Number in Ad Headlines",
    description: "This violates Google's policy and can get your account suspended. Yet agencies do it all the time — because they don't know better.",
  },
  {
    title: "Set It and Forget It",
    description: "Your agency set up your campaign 18 months ago and hasn't touched it since. Market changed, competitors moved, your ads stayed the same.",
  },
  {
    title: "Bidding for Everything",
    description: "Optimizing for website visits instead of phone calls? You're training Google to find tire-kickers, not buyers ready to book.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/10 px-4 py-2 text-sm text-destructive">
            <AlertTriangle className="h-4 w-4" />
            <span>The Hidden Problem</span>
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Most Google Ads Agencies Are Making These{" "}
            <span className="text-destructive">Costly Mistakes</span> On Your Account
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            I've audited hundreds of accounts. These problems show up in almost every single one.
          </p>
        </div>
        
        {/* Problem Grid */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group rounded-xl border border-border/50 bg-card/50 p-6 transition-all hover:border-destructive/50 hover:bg-card"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                <XCircle className="h-5 w-5 text-destructive" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {problem.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Real Example Callout */}
        <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-primary/30 bg-primary/5 p-6 sm:p-8">
          <p className="text-center text-lg text-foreground">
            <span className="font-semibold text-primary">Real example:</span>{" "}
            I audited a plumbing company with{" "}
            <span className="font-semibold">9 duplicate conversion actions</span> counting each call up to 5 times. 
            Their agency reported 450 conversions last month. Reality?{" "}
            <span className="font-semibold">About 90 actual phone calls.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
