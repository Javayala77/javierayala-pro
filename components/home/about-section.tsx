"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const timeline = [
  {
    year: "2016",
    title: "Started in traditional agencies",
    description: "Managing campaigns for local businesses. Realized most 'strategy' was just guesswork in a fancy deck.",
  },
  {
    year: "2019",
    title: "Went deep on paid acquisition",
    description: "Managed $2M+ in Google Ads spend. Learned exactly what moves the needle — and what's just noise.",
  },
  {
    year: "2022",
    title: "Discovered the AI edge",
    description: "Started integrating AI into every layer. Lead qualification, content, ad optimization. Results doubled.",
  },
  {
    year: "2024",
    title: "Full AI-powered systems",
    description: "Rebuilt everything around AI — ads, automation, content, lead qualification. Clients get more customers without working more hours.",
  },
]

const credentials = [
  { value: "$2M+", label: "Ad Spend Managed" },
  { value: "50+", label: "Businesses Helped" },
  { value: "8+", label: "Years Experience" },
  { value: "3.2x", label: "Avg. ROI in 90 Days" },
]

export function HomeAbout() {
  return (
    <section id="about" className="px-6 py-24 sm:py-32 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Story */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-cyan-400 border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 rounded-full mb-6">
              About Javier
            </span>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight text-white mb-6">
              I Get Businesses<br />
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                More Customers.
              </span>
            </h2>

            <div className="space-y-4 text-gray-500 leading-relaxed text-sm sm:text-base">
              <p>
                I spent years inside agencies watching smart people waste client budgets on tactics that felt good in presentations but didn&apos;t move a single needle.
              </p>
              <p>
                That frustration became my obsession: <span className="text-white font-medium">build systems that actually work</span>. Not based on opinions — based on data, automation, and the fundamental psychology of why people buy.
              </p>
              <p>
                When AI went mainstream, I didn&apos;t just adopt it — I rebuilt everything around it. Today I run AI-powered acquisition systems that generate leads 24/7, qualify prospects automatically, and optimize themselves while my clients sleep.
              </p>
              <p className="text-white font-medium">
                My goal is simple: more calls, more jobs, more revenue. Everything else is noise.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/573103956445"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group"
              >
                Talk to me directly
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right — Timeline + Credentials */}
          <div className="space-y-6">
            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: EASE }}
              className="grid grid-cols-2 gap-3"
            >
              {credentials.map((c, i) => (
                <div key={i} className="p-4 rounded-xl border border-white/[0.07] bg-white/[0.02] text-center">
                  <div className="text-2xl font-black text-white mb-1">{c.value}</div>
                  <div className="text-xs text-gray-600 uppercase tracking-wide">{c.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02]"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-6">The Journey</p>
              <div className="space-y-0">
                {timeline.map((item, i) => (
                  <div key={i} className="relative flex gap-4 pb-6 last:pb-0">
                    {/* Line */}
                    {i < timeline.length - 1 && (
                      <div className="absolute left-[27px] top-8 bottom-0 w-px bg-white/[0.06]" />
                    )}
                    {/* Dot */}
                    <div className="w-[14px] h-[14px] rounded-full border-2 border-cyan-500/50 bg-cyan-500/10 flex-shrink-0 mt-1.5 ml-[21px]" />
                    <div>
                      <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">{item.year}</span>
                      <h4 className="text-sm font-bold text-white mt-0.5 mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
