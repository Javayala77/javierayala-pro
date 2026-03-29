import { PhoneMissed, Clock, MessageSquare } from "lucide-react"

const painPoints = [
  {
    icon: PhoneMissed,
    title: "Missed Calls",
    description: "Someone needs a plumber at 9pm. They call you. No answer. They call your competitor. That competitor just got your customer. Forever.",
  },
  {
    icon: Clock,
    title: "Slow Response",
    description: "Studies show 78% of customers hire the business that responds first. If you respond tomorrow morning to a lead from last night — they already hired someone else.",
  },
  {
    icon: MessageSquare,
    title: "Time Wasted",
    description: "You spend hours every week answering the same questions: 'What's your price?' 'Are you available Thursday?' 'Do you serve my area?' Your time is worth more than this.",
  },
]

export function AIAgentProblem() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center leading-tight mb-10 sm:mb-14 text-balance px-2">
          You&apos;re Losing Customers{" "}
          <span className="text-purple-400">Every Single Night.</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="p-5 sm:p-6 rounded-2xl bg-red-500/5 border border-red-500/20"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                <point.icon className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
