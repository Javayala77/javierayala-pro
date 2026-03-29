import { Search, Target, MapPin, Check, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const stack = [
  {
    icon: Search,
    color: "green",
    title: "SEO + Content",
    subtitle: "Long-term organic growth",
    features: [
      "4 blog posts per month",
      "12 GMB posts per month",
      "Keyword optimization",
      "Local citations",
      "Monthly reporting",
    ],
  },
  {
    icon: Target,
    color: "blue",
    title: "Google Ads Management",
    subtitle: "Instant visibility",
    features: [
      "Campaign setup & optimization",
      "Keyword research",
      "Ad copywriting",
      "Conversion tracking",
      "Weekly optimization",
    ],
  },
  {
    icon: MapPin,
    color: "red",
    title: "GMB Management",
    subtitle: "Maps domination",
    features: [
      "Profile optimization",
      "Review management",
      "Photo updates",
      "Q&A monitoring",
      "Local pack tracking",
    ],
  },
]

const colorClasses = {
  green: {
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    text: "text-green-500",
    iconBg: "bg-green-500/20",
  },
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-500",
    iconBg: "bg-blue-500/20",
  },
  red: {
    bg: "bg-red-500/10",
    border: "border-red-500/30",
    text: "text-red-500",
    iconBg: "bg-red-500/20",
  },
}

export function DominationStack() {
  return (
    <section className="px-4 py-16 sm:py-24 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            The Complete <span className="text-yellow-500">Domination Stack</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Three powerful services working together as one system
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10">
          {stack.map((item, index) => {
            const colors = colorClasses[item.color as keyof typeof colorClasses]
            return (
              <div 
                key={index}
                className={`relative p-6 sm:p-8 rounded-2xl bg-[#12121a] border ${colors.border} hover:border-opacity-60 transition-colors`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${colors.iconBg} flex items-center justify-center mb-5`}>
                  <item.icon className={`h-6 w-6 sm:h-7 sm:w-7 ${colors.text}`} />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{item.title}</h3>
                <p className={`text-sm ${colors.text} mb-5`}>{item.subtitle}</p>
                
                <ul className="space-y-3">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className={`h-5 w-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-bold bg-yellow-500 hover:bg-yellow-600 text-black rounded-xl"
            asChild
          >
            <a href="https://wa.me/573103956445?text=Tell%20me%20more%20about%20the%20Domination%20Bundle" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Get The Full Stack
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
