import { Star, Shield, Settings, BarChart3, Check } from "lucide-react"

const categories = [
  {
    icon: Star,
    title: "Review Management",
    features: [
      "All reviews monitored daily",
      "Positive reviews responded to within 24 hours",
      "Responses in English + Spanish",
      "Professional business tone",
      "Builds trust with new customers",
    ],
  },
  {
    icon: Shield,
    title: "Bad Review Protection",
    features: [
      "Real-time WhatsApp alert",
      "Response drafted immediately",
      "You approve before posting",
      "Professional damage control",
      "Flag fake reviews for removal",
    ],
  },
  {
    icon: Settings,
    title: "Profile Optimization",
    features: [
      "Weekly posts (4 per month)",
      "Monthly photo updates",
      "Business hours always current",
      "Services list optimized",
      "Q&A managed and answered",
      "Products/menu updated",
    ],
  },
  {
    icon: BarChart3,
    title: "Reporting",
    features: [
      "Monthly insights report",
      "Views, calls, directions tracked",
      "Competitor profile comparison",
      "Ranking improvement tracked",
      "Recommendations each month",
    ],
  },
]

export function SeoIncluded() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 sm:mb-16">
          Everything That&apos;s <span className="text-blue-400">Included</span>
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-[#0D1424] border border-gray-800 hover:border-blue-500/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5">
                <category.icon className="h-6 w-6 text-blue-400" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">{category.title}</h3>
              
              <ul className="space-y-2.5">
                {category.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-sm">{feature}</span>
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
