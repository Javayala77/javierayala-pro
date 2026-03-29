"use client"

import { motion } from "framer-motion"
import { Crown, Target, Search, MapPin, Zap } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider, FaqAccordion, PricingCard } from "@/components/landing/layout"

const stack = [
  { icon: Target, title: "Google Ads Management", price: "$1,000/mo", desc: "AI-optimized campaigns that bring high-intent customers to your door." },
  { icon: Search, title: "SEO & Content Automation", price: "$497/mo", desc: "Weekly blog posts and content that compounds your organic rankings over time." },
  { icon: MapPin, title: "Google Maps Domination", price: "$297/mo", desc: "Full GMB optimization, review management, and weekly posts keeping you in the top 3." },
]

const faq = [
  { q: "Why bundle instead of buying separately?", a: "When all three channels work together under one strategy, they amplify each other. Your SEO content feeds your Ads relevance. Your Ads build brand awareness that boosts your organic CTR. The combined effect is far greater than 3 separate campaigns." },
  { q: "Do I get all three services from day one?", a: "Yes. We onboard all three simultaneously so everything launches together and compounds from week one." },
  { q: "Is there a contract?", a: "No. Month-to-month. But fair warning — most clients stay because the results keep compounding." },
  { q: "Who is this for?", a: "Established local service businesses ready to dominate their market. Not for brand new businesses — for the one that wants to be #1 in their area." },
  { q: "What markets do you work in?", a: "We work with businesses worldwide. Local service businesses in any city, any country." },
  { q: "How long until I see results?", a: "Google Ads generates leads in week 1. SEO and Maps compound over 60-90 days. By month 3 you should have a full system firing on all cylinders." },
]

export default function DominationPage() {
  return (
    <LandingLayout
      accentColor="text-yellow-400"
      ctaText="Dominate My Market"
      ctaHref="https://wa.me/573103956445?text=I%20want%20the%20Local%20Domination%20Bundle"
    >
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.08),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(234,179,8,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.025)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-yellow-500/25 bg-yellow-500/8 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Crown className="h-3.5 w-3.5" />
            Local Domination Bundle — The Full System
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            Don&apos;t Just Compete.<br />
            <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
              Dominate.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Google Ads + SEO + Google Maps — all three running together under one strategy.
            <span className="text-white font-semibold"> The complete system that makes you impossible to ignore.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.a
              href="https://wa.me/573103956445?text=I%20want%20the%20Local%20Domination%20Bundle"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-bold text-base hover:shadow-[0_0_40px_rgba(234,179,8,0.4)] transition-all duration-300"
            >
              Dominate My Market — $1,594/mo
            </motion.a>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/5">
            <Zap className="h-4 w-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-semibold">Save $200/mo vs. buying separately</span>
          </div>
        </motion.div>
      </section>

      {/* What's in the bundle */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: EASE }} className="text-center mb-16">
            <SectionLabel>The Bundle</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Three Channels. <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">One Strategy.</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">Each channel amplifies the others. That&apos;s the power of the bundle.</p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {stack.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }} className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-yellow-500/30 transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                    <item.icon className="h-5 w-5 text-yellow-400" />
                  </div>
                  <span className="text-xs text-gray-600 line-through">{item.price}</span>
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }} className="p-6 rounded-2xl border border-yellow-500/30 bg-yellow-500/5 text-center">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <span className="text-gray-500">Normally: <span className="line-through">$1,794/mo</span></span>
              <span className="text-gray-600">→</span>
              <span className="text-2xl font-black text-white">$1,594/mo</span>
              <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-bold">Save $200/mo</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why the bundle works */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: EASE }}>
            <SectionLabel>The Strategy</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Why All Three Together<br />
              <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">Outperforms Each One Alone.</span>
            </h2>
          </motion.div>
          <div className="mt-12 grid sm:grid-cols-3 gap-4">
            {[
              { stat: "Ads", label: "Instant traffic while SEO builds. Pay for top placement from day one." },
              { stat: "SEO", label: "Compounds monthly. Reduces your cost per lead as organic traffic grows." },
              { stat: "Maps", label: "Captures high-intent local searches. Customers ready to call right now." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <div className="text-2xl font-black text-yellow-400 mb-3">{item.stat}</div>
                <p className="text-sm text-gray-500">{item.label}</p>
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
            <h2 className="text-4xl font-black text-white mb-4">The Complete Bundle.</h2>
            <p className="text-gray-500 mb-12">Everything working together, managed by one expert. No coordination headaches.</p>
            <PricingCard
              badge="Save $200/mo"
              price="$1,594"
              period="/mo"
              items={["Google Ads management","SEO + content automation","Google Maps optimization","Unified strategy","Single point of contact","Monthly strategy calls","Priority support","Quarterly reviews","No contracts","Cancel anytime"]}
              ctaText="Dominate My Market"
              ctaHref="https://wa.me/573103956445?text=I%20want%20the%20Local%20Domination%20Bundle"
              accentClass="border-yellow-500"
              strikethrough={{ items: [{ label: "Google Ads", price: "$1,000/mo" }, { label: "SEO + Content", price: "$497/mo" }, { label: "Google Maps", price: "$297/mo" }], total: "$1,794/mo" }}
              note="Month-to-month. Cancel anytime."
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
            Ready to Be<br />
            <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">Impossible to Ignore?</span>
          </h2>
          <p className="text-gray-500 text-lg mb-10">One strategy, three channels, one expert managing everything. Let&apos;s build your market domination system.</p>
          <motion.a href="https://wa.me/573103956445?text=I%20want%20the%20Local%20Domination%20Bundle" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-bold text-base hover:shadow-[0_0_50px_rgba(234,179,8,0.5)] transition-all duration-300">
            Dominate My Market — $1,594/mo
          </motion.a>
          <p className="mt-4 text-xs text-gray-600">No contracts · Save $200/mo · Cancel anytime</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
