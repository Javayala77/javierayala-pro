"use client"

import { motion } from "framer-motion"
import { Cpu, Target, BookOpen, TrendingUp, ArrowRight } from "lucide-react"

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const steps = [
  {
    number: "01",
    icon: BookOpen,
    title: "Story-Driven Funnels",
    description: "People don't buy products — they buy transformations. I build funnels rooted in your story, your client's pain, and the bridge between the two. Every touchpoint is engineered to convert.",
    accent: "border-l-cyan-500",
  },
  {
    number: "02",
    icon: Cpu,
    title: "AI-Powered Execution",
    description: "I deploy AI at every layer — ad optimization, lead qualification, content creation, follow-up sequences. Not as a gimmick. Because it genuinely outperforms manual execution at scale.",
    accent: "border-l-violet-500",
  },
  {
    number: "03",
    icon: Target,
    title: "Proprietary Frameworks",
    description: "Everything I build follows proven frameworks I've developed over 8 years. The AI Acquisition System™. The StoryFunnel Framework™. Tested, refined, and battle-proven across 50+ businesses.",
    accent: "border-l-emerald-500",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Systems That Compound",
    description: "I don't do one-off campaigns. I build marketing infrastructure that gets stronger every month — organic rankings that climb, audiences that grow, automations that never sleep.",
    accent: "border-l-orange-500",
  },
]

export function HomeApproach() {
  return (
    <section className="px-6 py-24 sm:py-32 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">

          {/* Left — sticky intro */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-cyan-400 border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 rounded-full mb-6">
                The Method
              </span>
              <h2 className="text-4xl sm:text-5xl font-black leading-tight text-white mb-6">
                How I Build Systems<br />
                <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  That Print Revenue.
                </span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Most marketers run campaigns. I engineer growth infrastructure. There&apos;s a fundamental difference in how I think about your business.
              </p>

              {/* Author card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/[0.07] bg-white/[0.02]">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-white font-black text-lg flex-shrink-0">
                  JA
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Javier Ayala</div>
                  <div className="text-xs text-gray-500">AI Marketing Expert · 8+ Years</div>
                </div>
                <a
                  href="https://wa.me/573103956445"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Work with me <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right — steps */}
          <div className="space-y-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                className={`group p-7 rounded-2xl border border-white/[0.07] bg-white/[0.02] border-l-2 ${step.accent} hover:bg-white/[0.04] transition-all duration-300`}
              >
                <div className="flex items-start gap-5">
                  <div>
                    <span className="text-[11px] font-black text-gray-700 uppercase tracking-widest">{step.number}</span>
                    <div className="flex items-center gap-3 mt-2 mb-3">
                      <step.icon className="h-4 w-4 text-gray-500 group-hover:text-white transition-colors" />
                      <h3 className="text-base font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
