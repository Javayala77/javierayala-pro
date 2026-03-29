import { CreditCard, Settings, CalendarDays, BarChart3 } from "lucide-react"

const steps = [
  {
    time: "TODAY",
    icon: CreditCard,
    title: "You Sign Up",
    description: "Start at $297/mo. We connect to your Google Business Profile.",
  },
  {
    time: "24 HOURS",
    icon: Settings,
    title: "Profile Optimized",
    description: "Review monitoring active. Automated responses configured. Bad review alerts set up.",
  },
  {
    time: "EVERY WEEK",
    icon: CalendarDays,
    title: "Active Management",
    description: "New post published. Reviews monitored daily. Insights report sent to you.",
  },
  {
    time: "EVERY MONTH",
    icon: BarChart3,
    title: "Performance Report",
    description: "Full report. Rankings tracked. Competitor comparison. Growth recommendations.",
  },
]

export function SeoHowItWorks() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center leading-tight mb-4 text-balance">
          Set Up In <span className="text-blue-400">24 Hours.</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-400 text-center mb-12 sm:mb-16">
          Running Forever After.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative p-6 rounded-2xl bg-[#0D1424] border border-blue-500/20 hover:border-blue-500/40 transition-colors"
            >
              {/* Step number */}
              <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold">
                {index + 1}
              </div>
              
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 mt-2">
                <step.icon className="h-6 w-6 text-blue-400" />
              </div>
              
              <span className="text-blue-400 font-black text-lg block mb-2">{step.time}</span>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
