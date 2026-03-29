import { MessageSquare, Settings, Rocket, Coffee } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: MessageSquare,
    title: "We Talk",
    description: "Quick conversation on WhatsApp. Tell me about your business, your services, your city. Takes 10 minutes.",
  },
  {
    number: "2",
    icon: Settings,
    title: "We Build Your System",
    description: "We create your content strategy, keyword plan, and publishing schedule. Everything tailored to YOUR business.",
  },
  {
    number: "3",
    icon: Rocket,
    title: "Content Starts Publishing",
    description: "Blog posts. GMB updates. Social content. All going live automatically. Submitted to Google every time.",
  },
  {
    number: "4",
    icon: Coffee,
    title: "You Focus On Customers",
    description: "While we handle your online presence, you do what you do best. Every month, rankings improve.",
  },
]

export function RankFlowHowItWorks() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-4 text-balance">
          Dead Simple. Here&apos;s How It Works.
        </h2>
        <p className="text-lg text-gray-400 text-center mb-12 sm:mb-16">
          No tech skills needed. No complicated setup.
        </p>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-500/50 via-green-500/30 to-green-500/10" />
          
          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative md:flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } ${index !== 0 ? "md:mt-8" : ""}`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className={`inline-block p-6 rounded-2xl bg-[#0F1629] border border-gray-800 ${
                    index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                  } max-w-md`}>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
                
                {/* Number Circle */}
                <div className="hidden md:flex relative z-10 w-14 h-14 rounded-full bg-green-600 items-center justify-center shadow-lg shadow-green-600/30">
                  <span className="text-white font-black text-xl">{step.number}</span>
                </div>
                
                {/* Mobile number */}
                <div className="md:hidden flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                    <span className="text-white font-bold">{step.number}</span>
                  </div>
                  <step.icon className="h-5 w-5 text-green-500" />
                </div>
                
                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
