import { MessageSquare, Globe, Rocket, TrendingUp } from "lucide-react"

const timeline = [
  {
    time: "HOUR 1",
    icon: MessageSquare,
    title: "You Tell Us Your Business",
    description: "Service + City + Phone number",
  },
  {
    time: "HOUR 24",
    icon: Globe,
    title: "Your Landing Page Is Live",
    description: "Professional. Mobile. Fast.",
  },
  {
    time: "HOUR 48",
    icon: Rocket,
    title: "Your Google Ads Are Running",
    description: "People searching for you find you immediately",
  },
  {
    time: "DAY 30",
    icon: TrendingUp,
    title: "First Month Results Reviewed",
    description: "Scale what's working",
  },
]

export function LaunchSolution() {
  return (
    <section className="px-4 py-20 sm:py-28 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center leading-tight mb-4 text-balance">
          We Launch Everything In{" "}
          <span className="text-orange-500">48 Hours.</span>
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16">
          You Just Answer The Phone.
        </p>
        
        {/* Timeline - Simple Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timeline.map((step, index) => (
            <div 
              key={index}
              className="relative p-6 rounded-2xl bg-[#12121a] border border-orange-500/20 hover:border-orange-500/40 transition-colors"
            >
              {/* Step number */}
              <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold">
                {index + 1}
              </div>
              
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 mt-2">
                <step.icon className="h-6 w-6 text-orange-500" />
              </div>
              
              <span className="text-orange-500 font-black text-lg block mb-2">{step.time}</span>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
