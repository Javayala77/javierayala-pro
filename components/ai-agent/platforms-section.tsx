import { MessageCircle, Globe, Facebook, MapPin, Smartphone, Check } from "lucide-react"

const platforms = [
  {
    icon: MessageCircle,
    name: "WhatsApp",
    description: "Most used messaging in Miami",
    color: "text-green-400",
  },
  {
    icon: Globe,
    name: "Website Chat Widget",
    description: "Captures visitors immediately",
    color: "text-purple-400",
  },
  {
    icon: Facebook,
    name: "Facebook Messenger",
    description: "Social media inquiries handled",
    color: "text-blue-400",
  },
  {
    icon: MapPin,
    name: "Google Business Profile",
    description: "Messages from Maps answered",
    color: "text-red-400",
  },
  {
    icon: Smartphone,
    name: "SMS Text Messages",
    description: "Traditional text inquiries handled",
    color: "text-cyan-400",
  },
]

export function AIAgentPlatforms() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-4 text-balance">
          Works Everywhere{" "}
          <span className="text-purple-400">Your Customers Contact You.</span>
        </h2>
        <p className="text-gray-400 text-center text-lg mb-10 sm:mb-14">
          One agent. All platforms.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {platforms.map((platform, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-4 rounded-xl bg-[#12121a] border border-gray-800"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                <platform.icon className={`h-6 w-6 ${platform.color}`} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <h3 className="font-bold text-white truncate">{platform.name}</h3>
                </div>
                <p className="text-gray-500 text-sm">{platform.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
