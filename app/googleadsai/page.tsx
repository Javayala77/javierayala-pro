"use client"

import { motion } from "framer-motion"
import { Target, TrendingUp, Zap, BarChart3, CheckCircle2, MessageCircle, Search } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider } from "@/components/landing/layout"

const deliverables = [
  { icon: Target, title: "Campaign Strategy & Setup", desc: "Tight ad groups, exact match keywords, and a structure that makes Google's algorithm work for you — not against you." },
  { icon: Search, title: "Keyword & Negative Keyword Management", desc: "Deep keyword research plus a growing negative keyword list that cuts irrelevant traffic from day one." },
  { icon: Zap, title: "AI Bid Optimization", desc: "Smart bidding powered by AI continuously adjusts bids by keyword, time of day, and device to maximize your return." },
  { icon: BarChart3, title: "Conversion Tracking & Monthly Report", desc: "You see exactly what each lead cost, which campaigns are profitable, and where we are scaling next." },
]

const results = [
  { name: "Home Services Client", result: "Cost per lead: $340 → $67", timeframe: "in the first month" },
  { name: "Legal Services Firm", result: "Calls tripled", timeframe: "after account rebuild" },
  { name: "HVAC Contractor", result: "5x more leads", timeframe: "same monthly budget" },
]

export default function GoogleAdsPage() {
  return (
    <LandingLayout
      accentColor="text-cyan-400"
      ctaText="Get My Free Google Ads Audit"
      ctaHref="https://wa.me/573103956445?text=I%20want%20a%20Google%20Ads%20audit"
    >
      {/* HOOK */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.1),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/8 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Target className="h-3.5 w-3.5" />
            AI-Powered Google Ads Management
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            Two Businesses. Same City.<br />Same Budget.<br />
            <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">
              One Gets Flooded With Calls. The Other Gets Nothing.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            The difference is not the budget.{" "}
            <span className="text-white font-semibold">It is the structure. And the right structure changes everything.</span>
          </p>

          <motion.a
            href="https://wa.me/573103956445?text=I%20want%20a%20Google%20Ads%20audit"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold text-base hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all duration-300"
          >
            Get My Free Google Ads Audit
          </motion.a>

          <p className="mt-4 text-xs text-gray-600">No commitment · Replies in minutes on WhatsApp</p>
        </motion.div>
      </section>

      {/* EPIPHANY BRIDGE — The Backstory */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <SectionLabel>The Story</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-10 leading-tight">
              I Took Over a Campaign<br />
              <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">That Was Bleeding Money.</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                At the agency, we inherited a Google Ads account from a client who had been running ads for six months. They were spending a significant budget every month and getting two or three leads to show for it. They thought Google Ads just did not work for their industry.
              </p>
              <p>
                I opened the account and understood immediately why it was failing. Broad match keywords everywhere — their ads were showing up for searches that had nothing to do with their service. No negative keyword list. No conversion tracking, so Google had no idea what a real customer looked like. A single campaign structure with every keyword crammed together, preventing the algorithm from optimizing anything.
              </p>
              <p>
                They were paying for clicks from people who would never buy. And because there was no conversion data, Google kept sending them more of the same.
              </p>
              <p className="text-white font-semibold text-xl">
                The problem was not Google Ads. The problem was that the account had been set up wrong once, nobody had ever fixed it, and every day it ran it punished them with worse results and higher costs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EPIPHANY BRIDGE — The Moment */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="p-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.04] mb-10">
              <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">The Epiphany</p>
              <p className="text-white text-2xl font-bold leading-relaxed">
                &ldquo;The right structure does not just reduce waste — it makes Google&apos;s own algorithm fight for you. Same budget. Completely different war.&rdquo;
              </p>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Exact match keywords, tight ad groups organized by service and intent, a negative keyword list that blocked irrelevant traffic, conversion tracking installed so Google could learn what a real customer looked like — and AI bid optimization layered on top to adjust spend in real time.
              </p>
              <p>
                We rebuilt the account from scratch. The same budget that had been producing a handful of low-quality leads was now running through a structure that Google could actually optimize. And Google rewarded the structure with better placements at lower costs.
              </p>
              <p>
                Month one after the rebuild: cost per lead dropped dramatically. Calls tripled. <span className="text-white font-semibold">The client had not changed their offer, their website, or their service. We had changed the structure — and the results changed completely.</span>
              </p>
              <p className="text-white font-semibold text-xl">
                Most businesses running Google Ads are in the same situation. They are not losing because the platform does not work. They are losing because bad structure makes the algorithm work against them — and nobody ever told them.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-center mb-16"
          >
            <SectionLabel>Real Results</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Here&apos;s What Happens When<br />
              <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">The Structure Is Right.</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {results.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] text-center"
              >
                <div className="text-2xl font-black text-cyan-400 mb-1">{r.result}</div>
                <div className="text-xs text-gray-500 mb-3">{r.timeframe}</div>
                <div className="text-sm text-gray-400 font-medium">{r.name}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="p-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] text-center max-w-2xl mx-auto"
          >
            <p className="text-gray-300 text-lg leading-relaxed italic mb-4">
              &ldquo;I thought Google Ads just did not work for my type of business. Then Javier rebuilt the account and my phone started ringing every day. I wish I had done this two years ago.&rdquo;
            </p>
            <p className="text-cyan-400 font-bold text-sm">— Carlos R., Plumbing & Drain Services</p>
          </motion.div>
        </div>
      </section>

      {/* OFFER — What They Get */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-center mb-16"
          >
            <SectionLabel>The System</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Everything Your Google Ads Account Needs —<br />
              <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">Built Right and Optimized Daily.</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {deliverables.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.07 }}
                className="flex gap-4 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] group hover:border-cyan-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                  <d.icon className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{d.title}</h3>
                  <p className="text-sm text-gray-500">{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto"
          >
            {["Ad copy A/B testing", "Remarketing", "Free audit included", "No contracts"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs text-gray-400">
                <CheckCircle2 className="h-3 w-3 text-cyan-400 flex-shrink-0" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-6 py-24 sm:py-32">
        <SectionDivider />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Your Competitors Are Getting<br />The Calls You Should Be Getting.<br />
            <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">Find Out Why.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-3 max-w-xl mx-auto">
            Message us on WhatsApp. We will audit your current Google Ads account for free and show you exactly where the budget is going and what we would do differently.
          </p>
          <p className="text-gray-600 text-sm mb-10">Free audit · No obligation · Real answers in 48 hours.</p>
          <motion.a
            href="https://wa.me/573103956445?text=I%20want%20a%20Google%20Ads%20audit"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold text-base hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all duration-300"
          >
            <MessageCircle className="h-5 w-5" />
            Get My Free Google Ads Audit
          </motion.a>
          <p className="mt-4 text-xs text-gray-600">No contracts · Works for new and existing accounts · EN + ES</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
