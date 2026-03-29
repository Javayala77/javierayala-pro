"use client"

import { motion } from "framer-motion"
import { Target, TrendingUp, Zap, BarChart3, Check } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider, FaqAccordion } from "@/components/landing/layout"

const steps = [
  { n: "01", title: "Free AI Audit — 48 Hours", desc: "We analyze your current campaigns with AI and identify every dollar being wasted. No fluff, just numbers." },
  { n: "02", title: "Strategy & Restructure", desc: "We rebuild your account architecture, keywords, and targeting based on the audit findings." },
  { n: "03", title: "AI-Powered Optimization", desc: "Smart bidding combined with our proprietary AI scripts to optimize bids, placements, and budget allocation daily." },
  { n: "04", title: "Monthly Reviews & Scaling", desc: "Every month we review performance, test new angles, and scale what's working." },
]

const plans = [
  {
    name: "Starter",
    price: "$497",
    desc: "For $500–$1,500/mo ad spend",
    items: ["Campaign setup & restructure","Keyword optimization","Monthly performance report","Negative keyword management","Ad copy A/B testing","Basic conversion tracking"],
  },
  {
    name: "Growth",
    price: "$997",
    desc: "For $1,500–$5,000/mo ad spend",
    items: ["Everything in Starter","AI bidding optimization","Weekly performance reviews","Advanced audience targeting","Landing page recommendations","Priority support"],
    featured: true,
  },
  {
    name: "Scale",
    price: "$1,497",
    desc: "For $5,000+/mo ad spend",
    items: ["Everything in Growth","Daily AI optimization","Dedicated strategy calls","Multi-campaign management","Competitor analysis","Custom reporting dashboard"],
  },
]

const faq = [
  { q: "What does the free audit include?", a: "A full AI-powered analysis of your current campaigns: wasted spend, quality scores, keyword gaps, audience issues, landing page alignment. You get a detailed report with exactly what to fix." },
  { q: "Do I need to have existing campaigns?", a: "No. We can build from scratch or optimize existing campaigns. Both are covered." },
  { q: "How quickly do results show?", a: "Most clients see cost-per-lead improvements within 2-3 weeks. Significant results by month 2." },
  { q: "What's included in management?", a: "Daily bid optimization, weekly keyword reviews, A/B testing, negative keyword management, audience optimization, and a monthly performance review call." },
  { q: "Do you work with any industry?", a: "We specialize in local service businesses — plumbing, HVAC, roofing, legal, medical, home services. Industries with high-value customers where paid search ROI is proven." },
  { q: "Is there a contract?", a: "No. Month-to-month. Most clients stay 12+ months because the ROI is clear." },
]

export default function GoogleAdsPage() {
  return (
    <LandingLayout
      accentColor="text-cyan-400"
      ctaText="Get My Free Audit"
      ctaHref="https://wa.me/573103956445?text=I%20want%20a%20free%20Google%20Ads%20audit"
    >
      {/* Hero */}
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
            Your Google Ads Are<br />
            <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">
              Wasting Money.
            </span><br />
            I&apos;ll Fix That in 48 Hours.
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Most Google Ads accounts waste 40-60% of their budget on the wrong keywords, the wrong audiences, and the wrong bids.
            <span className="text-white font-semibold"> I use AI to find every wasted dollar and fix it fast.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.a
              href="https://wa.me/573103956445?text=I%20want%20a%20free%20Google%20Ads%20audit"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-bold text-base hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all duration-300"
            >
              Get My Free Audit — 48 Hours
            </motion.a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {[
              { icon: Zap, label: "Results in week 1" },
              { icon: BarChart3, label: "AI optimization" },
              { icon: TrendingUp, label: "Avg. -40% cost/lead" },
              { icon: Check, label: "No contracts" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs text-gray-400">
                <item.icon className="h-3.5 w-3.5 text-cyan-400 flex-shrink-0" />
                {item.label}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Problem */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: EASE }}>
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Most Google Ads Agencies{" "}
              <span className="text-gray-500 italic font-light">Set It and Forget It.</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">You&apos;re paying for management but nobody&apos;s actually managing. AI finds the waste that humans miss — and fixes it before you burn another dollar.</p>
          </motion.div>
          <div className="mt-12 grid sm:grid-cols-3 gap-4">
            {[
              { stat: "40-60%", label: "Of most ad budgets is wasted on irrelevant clicks" },
              { stat: "2-3 wks", label: "To see significant improvements after proper optimization" },
              { stat: "$2M+", label: "In ad spend managed and optimized by Javier" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <div className="text-4xl font-black text-cyan-400 mb-2">{item.stat}</div>
                <p className="text-sm text-gray-500">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: EASE }} className="text-center mb-16">
            <SectionLabel>The Process</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              From Wasted Budget to{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">Profitable Campaigns.</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }} className="flex gap-5 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-cyan-500/30 transition-all group">
                <span className="text-2xl font-black text-cyan-500/20 group-hover:text-cyan-500/40 transition-colors flex-shrink-0">{step.n}</span>
                <div>
                  <h3 className="font-bold text-white mb-1.5">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: EASE }}>
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="text-4xl font-black text-white mb-4">Choose Your Plan.</h2>
            <p className="text-gray-500 mb-12">Flat monthly fee. No percentage of ad spend. No hidden charges.</p>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-4">
            {plans.map((plan, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                className={`p-6 rounded-2xl border ${plan.featured ? "border-cyan-500 bg-cyan-500/5" : "border-white/[0.07] bg-white/[0.02]"} relative`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyan-500 text-black text-xs font-bold whitespace-nowrap">Most Popular</div>
                )}
                <h3 className="font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-xs text-gray-600 mb-4">{plan.desc}</p>
                <div className="text-4xl font-black text-white mb-6">{plan.price}<span className="text-lg text-gray-500">/mo</span></div>
                <ul className="space-y-2 mb-6">
                  {plan.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-3.5 h-3.5 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-1 h-1 rounded-full bg-cyan-400" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/573103956445?text=I%20want%20Google%20Ads%20management" target="_blank" rel="noopener noreferrer"
                  className={`block w-full py-3 rounded-xl font-bold text-sm text-center transition-all duration-300 ${plan.featured ? "bg-gradient-to-r from-cyan-500 to-cyan-400 text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]" : "border border-white/10 text-white hover:bg-white/5"}`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: EASE }} className="text-center mb-12">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-4xl font-black text-white">Common Questions</h2>
          </motion.div>
          <FaqAccordion items={faq} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-6 py-24 sm:py-32">
        <SectionDivider />
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: EASE }} className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Your Competitors Are Getting<br />
            <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">The Calls You Should Be Getting.</span>
          </h2>
          <p className="text-gray-500 text-lg mb-10">Find out exactly where your budget is going. Free audit in 48 hours.</p>
          <motion.a href="https://wa.me/573103956445?text=I%20want%20a%20free%20Google%20Ads%20audit" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-bold text-base hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all duration-300">
            Get My Free Audit
          </motion.a>
          <p className="mt-4 text-xs text-gray-600">Free · No commitment · 48-hour turnaround</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
