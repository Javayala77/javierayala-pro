"use client"

import { motion } from "framer-motion"
import { Rocket, Globe, Target, Clock, Check } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider, FaqAccordion } from "@/components/landing/layout"

const included = [
  { icon: Globe, title: "Landing Page Built", desc: "Conversion-optimized page designed specifically to turn visitors into calls and leads." },
  { icon: Target, title: "Google Ads Launched", desc: "Campaigns set up, targeted, and live — reaching customers searching for your service right now." },
  { icon: Clock, title: "First Month Managed", desc: "Full hands-on management your first month. Optimization, A/B testing, performance reviews." },
  { icon: Rocket, title: "48-Hour Delivery", desc: "Not days. Not weeks. Your business is live and generating leads within 48 hours." },
]

const steps = [
  { n: "01", title: "You tell us about your business", desc: "Services, target area, what customers say when they call. 20-minute onboarding call." },
  { n: "02", title: "We build your landing page", desc: "Conversion-focused, mobile-first, fast. Built and live within 24 hours." },
  { n: "03", title: "We launch your Google Ads", desc: "Keywords, targeting, ad copy, extensions — all set up and live within 48 hours." },
  { n: "04", title: "Your phone starts ringing", desc: "We monitor performance daily and optimize in real time so you get the most from every dollar." },
]

const faq = [
  { q: "What exactly do I get for $800?", a: "Landing page built + Google Ads campaign launched + first month of management. Everything you need to start getting customers, all in one package." },
  { q: "What happens after the first month?", a: "You can continue with ongoing Google Ads management for $1,000/mo, or walk away with everything we built. No lock-in." },
  { q: "Do I need to have anything ready?", a: "Just your business name, services, phone number, and service area. We handle design, copy, and setup." },
  { q: "What kind of businesses does this work for?", a: "Any local service business — plumbing, HVAC, roofing, landscaping, cleaning, dental, legal, etc." },
  { q: "Is 48 hours really possible?", a: "Yes. We have a proven process. Landing page day 1, Google Ads live day 2. Some clients get their first call before we even finish optimizing." },
  { q: "What if it's not working after the first month?", a: "We do a full review, identify the issue, and give you an honest recommendation — whether that's continuing, pivoting strategy, or stopping." },
]

export default function LaunchPage() {
  return (
    <LandingLayout
      accentColor="text-orange-400"
      ctaText="Launch in 48 Hours"
      ctaHref="https://wa.me/573103956445?text=I%20want%20the%2048-Hour%20Launch"
    >
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.1),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.03)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/25 bg-orange-500/8 text-orange-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Rocket className="h-3.5 w-3.5" />
            FastLaunch Pro — Business Live in 48 Hours
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            Your Business. Online.<br />
            Customers Calling.<br />
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              In 48 Hours Flat.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Landing page. Google Ads. First month managed.{" "}
            <span className="text-white font-semibold">Everything your new business needs to start generating customers — all in one $800 package.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.a
              href="https://wa.me/573103956445?text=I%20want%20the%2048-Hour%20Launch"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-base hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] transition-all duration-300"
            >
              Launch My Business — $800
            </motion.a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {["Landing page built","Google Ads live","First month managed","48-hour delivery"].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs text-gray-400">
                <Check className="h-3 w-3 text-orange-400 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* What's included */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: EASE }} className="text-center mb-16">
            <SectionLabel>What&apos;s Included</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Everything. <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">All In.</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {included.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE, delay: i * 0.07 }} className="flex gap-4 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] group hover:border-orange-500/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                  <item.icon className="h-5 w-5 text-orange-400" />
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

      {/* How it works */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: EASE }} className="text-center mb-16">
            <SectionLabel>The Process</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">Hour by Hour.</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }} className="flex gap-5 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-orange-500/30 transition-all group">
                <span className="text-2xl font-black text-orange-500/20 group-hover:text-orange-500/40 transition-colors flex-shrink-0">{step.n}</span>
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
        <div className="max-w-lg mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: EASE }}>
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="text-4xl font-black text-white mb-4">One Price. All In.</h2>
            <p className="text-gray-500 mb-12">No hidden fees. No monthly contracts after month 1.</p>
            <div className="relative p-8 sm:p-10 rounded-3xl border-2 border-orange-500 bg-white/[0.02]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-orange-500 text-white text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                Complete Package
              </div>
              <div className="text-center mb-8">
                <span className="text-7xl font-black text-white">$800</span>
                <p className="text-gray-500 mt-2 text-sm">One-time investment</p>
              </div>
              <div className="grid grid-cols-2 gap-2.5 mb-8">
                {["Landing page built","Google Ads launched","First month managed","48-hour delivery","No hidden fees","No monthly contracts after"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    </div>
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <a href="https://wa.me/573103956445?text=I%20want%20the%2048-Hour%20Launch" target="_blank" rel="noopener noreferrer" className="block w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-center hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-300">
                Launch My Business — $800
              </a>
              <p className="mt-4 text-xs text-gray-600 text-center">After month 1: continue for $1,000/mo or walk away. Your choice.</p>
            </div>
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
            Every Day You Wait Is a Day<br />
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">Your Competitors Get Ahead.</span>
          </h2>
          <p className="text-gray-500 text-lg mb-10">You could have a live business, an active Google Ads campaign, and your first leads in 48 hours.</p>
          <motion.a href="https://wa.me/573103956445?text=I%20want%20the%2048-Hour%20Launch" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-base hover:shadow-[0_0_50px_rgba(249,115,22,0.5)] transition-all duration-300">
            Launch My Business — $800
          </motion.a>
          <p className="mt-4 text-xs text-gray-600">No contracts · No risk · Live in 48 hours</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
