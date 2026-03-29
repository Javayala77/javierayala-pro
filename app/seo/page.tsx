"use client"

import { motion } from "framer-motion"
import { MapPin, Star, Shield, MessageSquare, Check } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider, FaqAccordion, PricingCard } from "@/components/landing/layout"

const steps = [
  { n: "01", title: "We audit your Google Business Profile", desc: "Find every gap in your profile that's costing you rankings and fix them in the first week." },
  { n: "02", title: "Weekly optimization & posting", desc: "4 GMB posts per month, keyword-rich descriptions, categories and attributes all dialed in." },
  { n: "03", title: "Review management on autopilot", desc: "Automated responses to new reviews. Bad review alerts sent directly to you. Never miss one again." },
  { n: "04", title: "Climb the local pack", desc: "With consistent signals and optimized content, your ranking in the local 3-pack improves month over month." },
]

const features = [
  { icon: Star, title: "Review automation", desc: "Respond to every review automatically, in the right tone, in English and Spanish." },
  { icon: MapPin, title: "GMB optimization", desc: "Full profile optimization: categories, services, photos, Q&A, attributes." },
  { icon: MessageSquare, title: "Weekly posts", desc: "4 keyword-optimized posts per month keeping your profile fresh and active." },
  { icon: Shield, title: "Reputation monitoring", desc: "Instant alerts when new reviews come in. You always know what customers are saying." },
]

const faq = [
  { q: "How fast will I see results?", a: "Most clients see ranking improvements within 30-60 days with consistent optimization and posting." },
  { q: "Do I need to respond to every review myself?", a: "No. We handle responses automatically. You only need to get involved for complex issues that need a personal touch." },
  { q: "What if I have bad reviews already?", a: "We create a strategy to generate more positive reviews which dilutes the impact of bad ones. We can also help you respond professionally to existing negative reviews." },
  { q: "How many locations do you cover?", a: "The $297/mo rate covers one location. Additional locations are $197/mo each." },
  { q: "Do I need access to my Google Business Profile?", a: "Yes, you'll add us as a manager. We never need ownership — you stay in full control." },
  { q: "Can I cancel anytime?", a: "Yes. No contracts, no cancellation fees." },
]

export default function SeoPage() {
  return (
    <LandingLayout
      accentColor="text-blue-400"
      ctaText="Dominate Google Maps"
      ctaHref="https://wa.me/573103956445?text=I%20want%20MapRank%20Pro"
    >
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/8 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
            <MapPin className="h-3.5 w-3.5" />
            MapRank Pro — Google Maps Domination
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            Why Are Your Competitors<br />
            <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">
              Always Above You
            </span><br />
            on Google Maps?
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            The businesses at the top of the local pack get 70% of all clicks. If you&apos;re not in the top 3,{" "}
            <span className="text-white font-semibold">you&apos;re essentially invisible.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.a
              href="https://wa.me/573103956445?text=I%20want%20MapRank%20Pro"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-base hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-300"
            >
              Dominate Google Maps — $297/mo
            </motion.a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {["Weekly GMB posts","Review automation","Profile optimization","EN + ES"].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs text-gray-400">
                <Check className="h-3 w-3 text-blue-400 flex-shrink-0" />
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
              Google Maps Is the #1 Source<br />of Calls for Local Businesses.
              <br /><span className="text-gray-500 italic font-light">Are You Making the Most of It?</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">An unoptimized Google Business Profile is like having a store with no sign. You exist, but nobody finds you.</p>
          </motion.div>
          <div className="mt-12 grid sm:grid-cols-3 gap-4">
            {[
              { stat: "70%", label: "Of local search clicks go to the top 3 results in Google Maps" },
              { stat: "#1", label: "Google Business Profile is the top local ranking factor" },
              { stat: "3x", label: "More calls for businesses with optimized and active profiles" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <div className="text-4xl font-black text-blue-400 mb-2">{item.stat}</div>
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
              From Invisible to <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">Top 3</span>.
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }} className="flex gap-5 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-blue-500/30 transition-all group">
                <span className="text-2xl font-black text-blue-500/20 group-hover:text-blue-500/40 transition-colors flex-shrink-0">{step.n}</span>
                <div>
                  <h3 className="font-bold text-white mb-1.5">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: EASE }} className="text-center mb-16">
            <SectionLabel>What&apos;s Included</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white">Everything Done For You.</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE, delay: i * 0.07 }} className="flex gap-4 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] group hover:border-blue-500/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                  <f.icon className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{f.title}</h3>
                  <p className="text-sm text-gray-500">{f.desc}</p>
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
            <h2 className="text-4xl font-black text-white mb-4">One Location. One Price.</h2>
            <p className="text-gray-500 mb-12">Most businesses lose more than $297/mo ignoring their Google presence.</p>
            <PricingCard
              badge="MapRank Pro"
              price="$297"
              period="/mo"
              items={["Full GMB audit","Profile optimization","4 posts/month","Review monitoring","Automated responses","Bad review alerts","Monthly report","English + Spanish","No contracts","Cancel anytime"]}
              ctaText="Dominate Google Maps"
              ctaHref="https://wa.me/573103956445?text=I%20want%20MapRank%20Pro"
              accentClass="border-blue-500"
              note="Additional locations: $197/mo each."
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
            Your Competitors Are<br />
            <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">Stealing Your Customers</span><br />on Google Maps.
          </h2>
          <p className="text-gray-500 text-lg mb-10">Every day in position 4+ is revenue you&apos;re giving away. Let&apos;s fix that.</p>
          <motion.a href="https://wa.me/573103956445?text=I%20want%20MapRank%20Pro" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-base hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] transition-all duration-300">
            Dominate Google Maps — $297/mo
          </motion.a>
          <p className="mt-4 text-xs text-gray-600">No contracts · Cancel anytime · Results in 30-60 days</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
