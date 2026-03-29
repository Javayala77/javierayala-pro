import { Zap, Filter, Calendar, Bell, Globe, Moon } from "lucide-react"

const capabilities = [
  {
    icon: Zap,
    title: "Answers Instantly",
    description: "Responds to every inquiry in under 60 seconds. Day or night. Weekend or holiday.",
  },
  {
    icon: Filter,
    title: "Qualifies Leads",
    description: "Asks the right questions. Confirms service area. Screens for serious customers only.",
  },
  {
    icon: Calendar,
    title: "Books Appointments",
    description: "Checks your real availability. Offers time slots. Confirms bookings instantly.",
  },
  {
    icon: Bell,
    title: "Sends Reminders",
    description: "Automatic appointment reminders 24 hours and 1 hour before. Reduces no-shows dramatically.",
  },
  {
    icon: Globe,
    title: "Speaks Both Languages",
    description: "Fully bilingual. English and Spanish. Automatically detects and responds in the customer's language.",
  },
  {
    icon: Moon,
    title: "Never Sleeps",
    description: "2am on a Sunday? Your agent is working. You are sleeping. Both are winning.",
  },
]

export function AIAgentCapabilities() {
  return (
    <section className="px-4 py-16 sm:py-24 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-4 text-balance">
          Your Agent Does Everything{" "}
          <span className="text-purple-400">Except Show Up.</span>
        </h2>
        <p className="text-gray-400 text-center text-lg mb-10 sm:mb-14">
          That part is still on you.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {capabilities.map((cap, index) => (
            <div 
              key={index}
              className="p-5 sm:p-6 rounded-2xl bg-[#12121a] border border-gray-800 hover:border-purple-500/40 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                <cap.icon className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{cap.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
