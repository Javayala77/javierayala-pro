import { MessageSquareOff, AlertTriangle, Ghost } from "lucide-react"

const painPoints = [
  {
    icon: MessageSquareOff,
    title: "Reviews Ignored",
    description: "Customers leave reviews and nobody responds. Google sees this. Your ranking drops. Customers go to competitors who respond within minutes.",
  },
  {
    icon: AlertTriangle,
    title: "Bad Reviews Unnoticed",
    description: "A 1-star review sits on your profile for weeks before you see it. By then 50 potential customers already chose someone else.",
  },
  {
    icon: Ghost,
    title: "Dead Profile",
    description: "No posts. No updates. No photos. Google rewards active profiles with higher rankings. Your inactive profile = invisible.",
  },
]

export function SeoProblem() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-10 sm:mb-14 text-balance px-2">
          Most Local Businesses Are{" "}
          <span className="text-blue-400">Invisible</span> On Google Maps
          <br className="hidden sm:block" />
          — And Don&apos;t Even Know It.
        </h2>
        
        <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20 text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                <point.icon className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{point.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
