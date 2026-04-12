"use client"

import Link from "next/link"
import { ArrowUpRight, Target, Search, Zap, BarChart3, RefreshCw } from "lucide-react"
import { motion } from "framer-motion"

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const components = [
  {
    number: "01",
    icon: Target,
    title: "Campaign Strategy & Setup",
    tag: "Foundation",
    description: "Tight ad groups, exact match architecture, and account structure that makes Google's algorithm work for you — not against you. Most accounts are set up wrong. We fix that first.",
    accent: "hover:border-cyan-500/40 group-hover:bg-cyan-500/[0.03]",
    iconBg: "bg-cyan-500/10 text-cyan-400",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    number: "02",
    icon: Search,
    title: "Keyword & Negative Keyword Management",
    tag: "Traffic Control",
    description: "Deep keyword research plus a continuously growing negative keyword list. We cut irrelevant clicks from day one and protect your budget from the search terms that never convert.",
    accent: "hover:border-sky-500/40 group-hover:bg-sky-500/[0.03]",
    iconBg: "bg-sky-500/10 text-sky-400",
    tagColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
  },
  {
    number: "03",
    icon: Zap,
    title: "AI Bid Optimization",
    tag: "AI Engine",
    description: "Smart bidding powered by machine learning adjusts bids in real time — by keyword, device, time of day, and audience segment. Your competitors are still setting manual bids. You're not.",
    accent: "hover:border-violet-500/40 group-hover:bg-violet-500/[0.03]",
    iconBg: "bg-violet-500/10 text-violet-400",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Conversion Tracking & Monthly Report",
    tag: "Visibility",
    description: "You see exactly what each lead cost, which campaigns are profitable, and where we scale next. No more guessing. Every dollar is tracked back to a phone call or form submission.",
    accent: "hover:border-emerald-500/40 group-hover:bg-emerald-500/[0.03]",
    iconBg: "bg-emerald-500/10 text-emerald-400",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    number: "05",
    icon: RefreshCw,
    title: "Ad Copy A/B Testing + Remarketing",
    tag: "Compounding Edge",
    description: "Continuous split testing across headlines and descriptions — so your ads get sharper every month. Paired with remarketing that recaptures visitors who clicked but didn't call.",
    accent: "hover:border-amber-500/40 group-hover:bg-amber-500/[0.03]",
    iconBg: "bg-amber-500/10 text-amber-400",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
]

export function HomeServices() {
  return (
    <section id="services" className="px-6 py-24 sm:py-32 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16"
        >
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-cyan-400 border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 rounded-full mb-4">
              The System
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white">
              Five Layers.<br />
              <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">
                One AI System.
              </span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-xs text-sm leading-relaxed sm:text-right">
            Every component works together. Remove one and the whole system weakens. Run all five and it compounds every month.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {components.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.07 }}
            >
              <div
                className={`group relative flex flex-col h-full p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] transition-all duration-300 overflow-hidden ${item.accent}`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.iconBg} transition-transform group-hover:scale-110 duration-300`}>
                    <item.icon className="h-[18px] w-[18px]" />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full border ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>

                <span className="text-[72px] font-black leading-none text-white/[0.025] absolute right-3 top-2 select-none pointer-events-none">
                  {item.number}
                </span>

                <h3 className="text-base font-bold text-white mb-2 leading-snug">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors flex-1">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.35 }}
          >
            <Link
              href="/free-audit"
              className="group relative flex flex-col h-full p-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.04] hover:border-cyan-500/40 hover:bg-cyan-500/[0.07] transition-all duration-300 overflow-hidden"
            >
              <div className="flex-1 flex flex-col justify-center items-center text-center gap-4 py-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Get Started</p>
                <h3 className="text-xl font-black text-white leading-snug">Is Your Google Ads Account Broken?</h3>
                <p className="text-xs text-gray-500 leading-relaxed max-w-[200px]">
                  Find out in 48 hours. Free audit — no pitch, no obligation.
                </p>
                <div className="flex items-center gap-2 mt-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold text-xs group-hover:shadow-[0_0_30px_rgba(6,182,212,0.35)] transition-shadow">
                  Get My Free Audit
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
