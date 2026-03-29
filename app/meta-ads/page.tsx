"use client"

import { motion } from "framer-motion"
import { Target, TrendingUp, Users, Zap, Check, BarChart3 } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider, FaqAccordion, PricingCard } from "@/components/landing/layout"

const steps = [
  { n: "01", title: "Audience research & strategy", desc: "We map your ideal customer in detail — demographics, interests, behaviors, and the content that stops their scroll." },
  { n: "02", title: "Creative strategy & ad copy", desc: "We write hooks, headlines, and body copy engineered to convert. You supply visuals or we guide you on what to create." },
  { n: "03", title: "Campaign launch & structure", desc: "Awareness, retargeting, and conversion campaigns all structured correctly from day one. No guesswork." },
  { n: "04", title: "AI-powered optimization", desc: "Daily analysis of what's working. Budget shifts toward winners automatically. Dead ads killed fast." },
]

const included = [
  { icon: Target, title: "Facebook + Instagram", desc: "Both platforms managed under one strategy. Reach people wherever they spend time." },
  { icon: Target, title: "Precision targeting", desc: "Custom audiences, lookalikes, retargeting, interest stacking. We find your exact customer." },
  { icon: TrendingUp, title: "AI bid optimization", desc: "Smart bidding algorithms combined with daily human review. Best of both worlds." },
  { icon: BarChart3, title: "Monthly performance report", desc: "Clear reporting on reach, clicks, leads, cost per result. No vanity metrics." },
]

const faq = [
  { q: "Do I need to provide creative (images/videos)?", a: "We guide you on exactly what to create based on what converts in your industry. You take the photos/videos, we handle the rest. Or we can work with stock assets if needed." },
  { q: "How much should I spend on ads?", a: "We recommend a minimum of $500/mo in ad spend to get meaningful data. Most clients start at $500–$2,000/mo and scale from there." },
  { q: "Is the ad spend included in the $797?", a: "No. The $797/mo is our management fee. Ad spend goes directly to Meta and is controlled by you." },
  { q: "How fast will I see results?", a: "Meta Ads typically need 2–4 weeks to exit the learning phase. Most clients see lead flow by week 3. Results compound as we gather data." },
  { q: "Do you run WhatsApp lead generation through Meta?", a: "Yes. We can configure campaigns that open directly into WhatsApp conversations — highly effective for service businesses in Latin America and beyond." },
  { q: "Can I cancel anytime?", a: "Yes. No contracts, no cancellation fees. Month-to-month." },
]

export default function MetaAdsPage() {
  return (
    <LandingLayout
      accentColor="text-pink-400"
      ctaText="Start My Meta Ads"
      ctaHref="https://wa.me/573103956445?text=I%20want%20Meta%20Ads%20management"
    >
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(236,72,153,0.1),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.03)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-pink-500/25 bg-pink-500/8 text-pink-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Target className="h-3.5 w-3.5" />
            Meta Ads — Facebook & Instagram
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            Your Customers Are<br />
            Scrolling Right Now.<br />
            <span className="bg-gradient-to-r from-pink-400 to-rose-300 bg-clip-text text-transparent">
              Are You Showing Up?
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            3.2 billion people use Facebook and Instagram daily. With the right targeting and creative,
            <span className="text-white font-semibold"> your ideal customer sees your offer before they even know they need you.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.a
              href="https://wa.me/573103956445?text=I%20want%20Meta%20Ads%20management"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-gradient-to-r from-pink-600 to-rose-500 text-white font-bold text-base hover:shadow-[0_0_40px_rgba(236,72,153,0.4)] transition-all duration-300"
            >
              Start My Meta Ads — $797/mo
            </motion.a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {["Facebook + Instagram","AI optimization","Custom audiences","No contracts"].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs text-gray-400">
                <Check className="h-3 w-3 text-pink-400 flex-shrink-0" />
                {item}
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
              Boosting Posts Is Not<br />
              <span className="bg-gradient-to-r from-pink-400 to-rose-300 bg-clip-text text-transparent">Running Meta Ads.</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Most businesses waste their Meta budget on boosted posts with no strategy, no targeting, and no conversion tracking. That&apos;s not advertising — that&apos;s burning money. Real Meta Ads require structure, creative strategy, and constant optimization.
            </p>
          </motion.div>
          <div className="mt-12 grid sm:grid-cols-3 gap-4">
            {[
              { stat: "3.2B", label: "Daily active users across Facebook and Instagram" },
              { stat: "72%", label: "Of consumers say they discovered a product on Instagram" },
              { stat: "10x", label: "Better results with proper campaign structure vs. boosted posts" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <div className="text-4xl font-black text-pink-400 mb-2">{item.stat}</div>
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
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              From Zero to{" "}
              <span className="bg-gradient-to-r from-pink-400 to-rose-300 bg-clip-text text-transparent">Consistent Lead Flow.</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }} className="flex gap-5 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-pink-500/30 transition-all group">
                <span className="text-2xl font-black text-pink-500/20 group-hover:text-pink-500/40 transition-colors flex-shrink-0">{step.n}</span>
                <div>
                  <h3 className="font-bold text-white mb-1.5">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: EASE }} className="text-center mb-16">
            <SectionLabel>What&apos;s Included</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white">Full Management. Nothing Left to Chance.</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {included.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE, delay: i * 0.07 }} className="flex gap-4 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] group hover:border-pink-500/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500/20 transition-colors">
                  <item.icon className="h-5 w-5 text-pink-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-lg mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: EASE }}>
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="text-4xl font-black text-white mb-4">Flat Monthly Fee.</h2>
            <p className="text-gray-500 mb-12">No percentage of ad spend. No setup fee. Ad spend goes directly to Meta, controlled by you.</p>
            <PricingCard
              badge="Meta Ads Management"
              price="$797"
              period="/mo"
              items={["Facebook + Instagram","Campaign structure & setup","Audience research","Ad copy & creative strategy","Custom + lookalike audiences","Retargeting campaigns","AI bid optimization","A/B testing","Monthly performance report","WhatsApp lead campaigns","No contracts","Cancel anytime"]}
              ctaText="Start My Meta Ads"
              ctaHref="https://wa.me/573103956445?text=I%20want%20Meta%20Ads%20management"
              accentClass="border-pink-500"
              note="Ad spend billed separately directly to Meta. Minimum $500/mo recommended."
            />
          </motion.div>
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
            3.2 Billion Potential Customers.<br />
            <span className="bg-gradient-to-r from-pink-400 to-rose-300 bg-clip-text text-transparent">Let&apos;s Reach the Right Ones.</span>
          </h2>
          <p className="text-gray-500 text-lg mb-10">Stop boosting posts and start running real campaigns. Message Javier to get started.</p>
          <motion.a href="https://wa.me/573103956445?text=I%20want%20Meta%20Ads%20management" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-pink-600 to-rose-500 text-white font-bold text-base hover:shadow-[0_0_50px_rgba(236,72,153,0.5)] transition-all duration-300">
            Start My Meta Ads — $797/mo
          </motion.a>
          <p className="mt-4 text-xs text-gray-600">No contracts · No setup fee · Cancel anytime</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
