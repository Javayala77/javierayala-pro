"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Check, ArrowRight, Zap, Target, Bot } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider } from "@/components/landing/layout"

const topics = [
  { icon: Bot, title: "AI Automation Tactics", desc: "Real automations I run for clients — WhatsApp bots, lead qualification flows, content pipelines." },
  { icon: Target, title: "Paid Ads Breakdowns", desc: "Behind-the-scenes of campaigns: what's working, what failed, and why." },
  { icon: Zap, title: "Framework Releases", desc: "My proprietary frameworks before they become paid products." },
  { icon: Sparkles, title: "Tool Reviews", desc: "Honest takes on every AI and marketing tool I test — no affiliate bias." },
]

export default function NewsletterPage() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle")

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return
    setStatus("loading")
    await new Promise((r) => setTimeout(r, 1000))
    setStatus("done")
  }

  return (
    <LandingLayout
      accentColor="text-cyan-400"
      ctaText="Subscribe Free"
      ctaHref="#subscribe"
    >
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.1),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/8 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Sparkles className="h-3.5 w-3.5" />
            The AI Marketing Letter — Free Weekly
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            The AI Marketing Tactics<br />
            Your Competitors{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Don&apos;t Know Yet.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Every week, one AI marketing insight that&apos;s producing real results for real businesses. No fluff, no theory.
          </p>

          <AnimatePresence mode="wait">
            {status === "done" ? (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/5">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Check className="h-4 w-4 text-emerald-400" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-white">You&apos;re in.</div>
                  <div className="text-sm text-gray-400">First issue lands this week.</div>
                </div>
              </motion.div>
            ) : (
              <motion.form key="form" id="subscribe" onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 h-14 px-5 rounded-full bg-white/[0.05] border border-white/[0.1] text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 text-sm transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="h-14 px-7 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-bold text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all disabled:opacity-70 whitespace-nowrap"
                >
                  {status === "loading" ? (
                    <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  ) : (
                    <><span>Subscribe Free</span><ArrowRight className="h-4 w-4" /></>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          <p className="mt-4 text-xs text-gray-600">Free forever · No spam · Unsubscribe anytime</p>
        </motion.div>
      </section>

      {/* What you get */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: EASE }} className="text-center mb-16">
            <SectionLabel>What&apos;s Inside</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              One Insight. Every Week.<br />
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Actually Actionable.</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {topics.map((topic, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE, delay: i * 0.07 }} className="flex gap-4 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] group hover:border-cyan-500/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                  <topic.icon className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{topic.title}</h3>
                  <p className="text-sm text-gray-500">{topic.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Javier */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: EASE }}>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-white font-black text-xl mx-auto mb-6">JA</div>
            <SectionLabel>The Author</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">Written by Javier Ayala.</h2>
            <p className="text-gray-500 leading-relaxed">
              8+ years in marketing. $2M+ in ad spend managed. 50+ businesses helped grow. I write this newsletter because I was tired of seeing smart business owners get burned by tactics that look good in a deck but don&apos;t move a single needle. Everything I share here is something I&apos;ve tested, broken, and made work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-6 py-24 sm:py-32">
        <SectionDivider />
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: EASE }} className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Join Free.<br />
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Stay Ahead.</span>
          </h2>
          <form id="subscribe-bottom" onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required className="flex-1 h-14 px-5 rounded-full bg-white/[0.05] border border-white/[0.1] text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 text-sm transition-colors" />
            <button type="submit" disabled={status === "loading" || status === "done"} className="h-14 px-7 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-bold text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all disabled:opacity-70 whitespace-nowrap">
              {status === "done" ? <><Check className="h-4 w-4" /> Subscribed</> : <><span>Subscribe Free</span><ArrowRight className="h-4 w-4" /></>}
            </button>
          </form>
          <p className="mt-4 text-xs text-gray-600">Free forever · No spam · Unsubscribe anytime</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
