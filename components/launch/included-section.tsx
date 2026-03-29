import { Globe, Target, BarChart3, Check } from "lucide-react"

const packages = [
  {
    icon: Globe,
    title: "Landing Page",
    features: [
      "Professional design",
      "Mobile optimized",
      "Click to call button",
      "Lead capture form",
      "Live in 24 hours",
    ],
  },
  {
    icon: Target,
    title: "Google Ads Campaign",
    features: [
      "Account setup",
      "Keywords researched",
      "Ads written",
      "Targeting configured",
      "Live in 48 hours",
    ],
  },
  {
    icon: BarChart3,
    title: "First Month Management",
    features: [
      "Daily monitoring",
      "Weekly optimization",
      "Performance report",
      "Scale recommendations",
      "You focus on customers",
    ],
  },
]

export function LaunchIncluded() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12 sm:mb-16">
          Everything You Get
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className="relative p-6 sm:p-8 rounded-2xl bg-[#12121a] border border-gray-800 hover:border-orange-500/50 transition-colors group"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-5 group-hover:bg-orange-500/20 transition-colors">
                <pkg.icon className="h-6 w-6 sm:h-7 sm:w-7 text-orange-500" />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-5">{pkg.title}</h3>
              
              <ul className="space-y-3">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
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
