import { Bot, Link, Rocket, Calendar } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: Bot,
    title: "We Build Your Agent",
    description: "We train your AI agent on:",
    points: ["Your services and prices", "Your service area", "Your availability", "Your business personality", "English + Spanish"],
  },
  {
    number: "2",
    icon: Link,
    title: "Connect Everything",
    description: "Agent connects to:",
    points: ["Your WhatsApp Business", "Your website chat widget", "Your Google Business Profile", "Your calendar (Google/Calendly)"],
  },
  {
    number: "3",
    icon: Rocket,
    title: "Agent Goes Live",
    description: "Within 48 hours your agent is:",
    points: ["Answering every inquiry", "Qualifying every lead", "Booking appointments", "Sending confirmations", "Sending reminders"],
  },
  {
    number: "4",
    icon: Calendar,
    title: "You Just Show Up",
    description: "Every morning you wake up to:",
    points: ["New appointments booked", "Leads qualified", "Calendar filled", "Zero missed opportunities"],
  },
]

export function AIAgentHowItWorks() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-4 text-balance">
          Set Up Once.{" "}
          <span className="text-purple-400">Books Forever.</span>
        </h2>
        <p className="text-gray-400 text-center text-lg mb-10 sm:mb-14">
          We handle everything. You just answer the door.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative p-5 sm:p-6 rounded-2xl bg-[#12121a] border border-purple-500/20 hover:border-purple-500/40 transition-colors"
            >
              {/* Step number */}
              <div className="absolute -top-3 left-5 px-3 py-1 rounded-full bg-purple-600 text-white text-xs font-bold">
                Step {step.number}
              </div>
              
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 mt-2">
                <step.icon className="h-6 w-6 text-purple-400" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{step.description}</p>
              
              <ul className="space-y-1.5">
                {step.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                    {point}
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
