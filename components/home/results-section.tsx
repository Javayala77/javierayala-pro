import { TrendingUp, DollarSign, Phone, Star } from "lucide-react"

const results = [
  {
    icon: DollarSign,
    metric: "40%",
    label: "Average reduction in cost per lead",
    description: "My clients typically see their cost per lead drop within the first 30 days of AI optimization.",
  },
  {
    icon: TrendingUp,
    metric: "3x",
    label: "Increase in qualified leads",
    description: "Better targeting + AI qualification = more of the right customers reaching out.",
  },
  {
    icon: Phone,
    metric: "24/7",
    label: "Lead response time",
    description: "AI agents respond instantly to every inquiry. No more lost leads at 2am.",
  },
  {
    icon: Star,
    metric: "#1",
    label: "Google Maps ranking",
    description: "Consistent optimization compounds. Most clients hit the top 3 within 90 days.",
  },
]

const caseStudies = [
  {
    business: "Unclog Plumbing",
    location: "Pembroke Pines, FL",
    result: "Increased monthly leads from 40 to 150+",
    metric: "+275%",
  },
  {
    business: "Precision Blinds",
    location: "Chicago, IL",
    result: "Cut cost per lead from $85 to $32",
    metric: "-62%",
  },
  {
    business: "Elite HVAC Services",
    location: "Texas",
    result: "Booked 47 jobs in first month of AI agent",
    metric: "47 jobs",
  },
]

export function HomeResults() {
  return (
    <section id="results" className="px-6 py-24 sm:py-32 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Results</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6">
            Real Numbers.
            <br />
            <span className="text-cyan-400">Real Businesses.</span>
          </h2>
          <p className="text-lg text-gray-400">
            I don&apos;t do &quot;brand awareness.&quot; Everything I build is designed to generate 
            measurable results you can track to your bottom line.
          </p>
        </div>
        
        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {results.map((result, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                <result.icon className="h-5 w-5 text-cyan-400" />
              </div>
              <div className="text-4xl font-black text-white mb-2">{result.metric}</div>
              <div className="text-sm font-semibold text-white mb-2">{result.label}</div>
              <p className="text-sm text-gray-400">{result.description}</p>
            </div>
          ))}
        </div>
        
        {/* Case Studies */}
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl border border-gray-800 bg-gray-900/30"
            >
              <div className="text-3xl font-black text-cyan-400 mb-4">{study.metric}</div>
              <h3 className="text-lg font-bold text-white mb-1">{study.business}</h3>
              <p className="text-sm text-gray-500 mb-3">{study.location}</p>
              <p className="text-gray-400">{study.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
