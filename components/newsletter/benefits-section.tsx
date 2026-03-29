import { Bot, TrendingUp, Clock, Target, Sparkles, MessageSquare } from "lucide-react"

const benefits = [
  {
    icon: Bot,
    title: "AI Tools That Actually Work",
    description: "I test every tool myself before sharing. No affiliate garbage. Just what I use with my own clients.",
  },
  {
    icon: TrendingUp,
    title: "Real Case Studies",
    description: "Every strategy comes with a real example from a local business. See the before, the after, and exactly how they did it.",
  },
  {
    icon: Clock,
    title: "5-Minute Reads",
    description: "You run a business. You don't have time for 20-page essays. Each issue is designed to read in 5 minutes or less.",
  },
  {
    icon: Target,
    title: "Local Business Focus",
    description: "Not generic marketing advice. Everything is specifically for plumbers, HVAC, dentists, lawyers, and service businesses.",
  },
  {
    icon: Sparkles,
    title: "Automation Secrets",
    description: "Learn how to make your business run while you sleep. AI booking agents, automated follow-ups, review management, and more.",
  },
  {
    icon: MessageSquare,
    title: "Direct Access To Me",
    description: "Reply to any email and I personally respond. No chatbots. No assistants. Just me.",
  },
]

export function NewsletterBenefits() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            What You Get Every Week
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            One email. One actionable strategy. Zero fluff.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
