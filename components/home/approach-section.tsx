import { Cpu, Target, Repeat, TrendingUp } from "lucide-react"

const pillars = [
  {
    number: "01",
    icon: Cpu,
    title: "AI-Powered Everything",
    description: "I use AI for ad optimization, content creation, lead qualification, and 24/7 customer response. Not as a gimmick — because it actually works better.",
  },
  {
    number: "02",
    icon: Target,
    title: "Local Business Focus",
    description: "I only work with service businesses. Plumbers, contractors, clinics, agencies. I understand your customers, your market, and what actually moves the needle.",
  },
  {
    number: "03",
    icon: Repeat,
    title: "Systems, Not Tactics",
    description: "I don't do one-off campaigns. I build complete marketing systems that compound over time and work even when you're not paying attention.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Results-Obsessed",
    description: "Every dollar should be tracked to a result. If I can't prove it's working, I fix it or stop doing it. No vanity metrics. No BS reports.",
  },
]

export function HomeApproach() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Intro */}
          <div className="lg:sticky lg:top-24">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4 block">My Approach</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6">
              Why Businesses
              <br />
              <span className="text-cyan-400">Choose To Work</span>
              <br />
              With Me
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              I&apos;ve spent 8+ years learning what actually works for local service businesses. 
              Not theory. Not what works for e-commerce or SaaS. What works for <em>you</em>.
            </p>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/50 border border-gray-800">
              <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold text-lg flex-shrink-0">
                JA
              </div>
              <div>
                <div className="font-semibold text-white">Javier Ayala</div>
                <div className="text-sm text-gray-400">AI Marketing Specialist</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Pillars */}
          <div className="space-y-8">
            {pillars.map((pillar) => (
              <div 
                key={pillar.number}
                className="group p-8 rounded-2xl border border-gray-800 bg-gray-900/30 hover:bg-gray-900/50 hover:border-cyan-500/30 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="text-5xl font-black text-gray-800 group-hover:text-cyan-500/30 transition-colors">
                    {pillar.number}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                        <pillar.icon className="h-5 w-5 text-cyan-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
