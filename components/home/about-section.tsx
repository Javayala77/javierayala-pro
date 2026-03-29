import { MapPin, Briefcase, Zap } from "lucide-react"

export function HomeAbout() {
  return (
    <section id="about" className="px-6 py-24 sm:py-32 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4 block">About Me</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6">
              From Marketing Agency
              <br />
              <span className="text-cyan-400">To AI Specialist</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                I started in traditional marketing agencies, managing campaigns for businesses of all sizes. 
                But I kept seeing the same problem: most marketing &quot;strategies&quot; were just guesswork 
                dressed up in fancy reports.
              </p>
              <p>
                When AI tools started getting good, I saw an opportunity to fix that. To build marketing 
                systems that actually optimize themselves. That respond to leads at 3am. That write content 
                consistently without you lifting a finger.
              </p>
              <p>
                Now I focus exclusively on local service businesses — because that&apos;s where I can make the 
                biggest impact. Plumbers, contractors, clinics, agencies. People who are great at their craft 
                but don&apos;t have time to become marketing experts.
              </p>
              <p className="text-white font-medium">
                My job is to build the marketing system that brings you customers. Your job is to serve them.
              </p>
            </div>
          </div>
          
          {/* Right - Info Cards */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Working Worldwide</div>
                  <div className="text-sm text-gray-400">Remote-first, results-focused</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                I understand the local service business landscape — the seasonality, the competition, 
                the customer psychology. It&apos;s different from e-commerce or SaaS, and I specialize in it.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">8+ Years Experience</div>
                  <div className="text-sm text-gray-400">Google Ads, SEO, Marketing Automation</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                I&apos;ve managed over $2M in ad spend and helped 50+ businesses build profitable 
                customer acquisition systems.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">AI-First Approach</div>
                  <div className="text-sm text-gray-400">Always learning, always optimizing</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                I test every new AI tool that comes out. If it can help my clients get better results, 
                I integrate it into their systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
