import { Star, Bell, TrendingUp, Check } from "lucide-react"

const solutions = [
  {
    icon: Star,
    title: "Every Review Answered",
    features: [
      "Positive reviews responded to within 24 hours automatically",
      "Professional responses that build trust with new customers",
      "Responses written in your business voice and tone",
      "English + Spanish responses",
    ],
  },
  {
    icon: Bell,
    title: "Bad Reviews Caught Instantly",
    features: [
      "Real-time alert the second a bad review is posted",
      "You get WhatsApp notification within minutes",
      "We draft a professional response",
      "You approve before it posts",
      "Crisis controlled before it spreads",
    ],
  },
  {
    icon: TrendingUp,
    title: "Profile Always Active",
    features: [
      "Weekly posts about your services",
      "Monthly photo updates",
      "Business info always accurate",
      "Q&A section managed",
      "Services and products updated",
      "Google sees you as active = ranks you higher",
    ],
  },
]

export function SeoSolution() {
  return (
    <section className="px-4 py-16 sm:py-24 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center leading-tight mb-4 text-balance">
          We Run Your Google Profile
          <br className="hidden sm:block" />
          <span className="text-blue-400"> Like A Full-Time Job.</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-400 text-center mb-12 sm:mb-16">
          You Just Answer The Phone.
        </p>
        
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-[#0D1424] border border-blue-500/20 hover:border-blue-500/40 transition-colors"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5">
                <solution.icon className="h-6 w-6 sm:h-7 sm:w-7 text-blue-400" />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-5">{solution.title}</h3>
              
              <ul className="space-y-3">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
