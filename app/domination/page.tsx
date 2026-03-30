"use client"

import { motion } from "framer-motion"
import { Crown, Target, Search, MapPin, TrendingUp, BarChart3, CheckCircle2 } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider } from "@/components/landing/layout"
import EmailCapture from "@/components/email-capture"

const deliverables = [
  { icon: Target, title: "Google Ads Management", desc: "High-intent campaigns targeting buyers who are actively searching for your service right now. Leads from week one." },
  { icon: Search, title: "SEO & Content Automation", desc: "Weekly blog posts and location pages that compound your organic rankings month after month — traffic that costs nothing once it ranks." },
  { icon: MapPin, title: "Google Maps Domination", desc: "Full GMB optimization, daily posts, review generation, and citation building — everything needed to hold a top-3 Maps position." },
  { icon: TrendingUp, title: "One Unified Strategy", desc: "All three channels coordinated under a single targeting strategy. The same keywords, the same messaging, the same goal — domination." },
  { icon: BarChart3, title: "Monthly Performance Report", desc: "A clear view across all three channels: what spent, what ranked, what moved, and what&apos;s coming next month." },
  { icon: Crown, title: "Compound Market Dominance", desc: "When searchers see your ad, your Maps listing, and your organic result all at once, trust reaches 100% and competitors become invisible." },
]

const results = [
  { name: "Summit Contracting", result: "4x leads vs. ads alone", timeframe: "in 90 days" },
  { name: "Vanguard HVAC", result: "Cost per lead down 40%", timeframe: "by month 3" },
  { name: "Meridian Legal Group", result: "Owned page 1 entirely", timeframe: "for 12 target keywords" },
]

export default function DominationPage() {
  return (
    <LandingLayout
      accentColor="text-yellow-400"
      ctaText="Dominate My Market"
      ctaHref="https://wa.me/573103956445?text=I%20want%20the%20Local%20Domination%20Bundle"
    >
      {/* HOOK */}
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
            Local Domination Bundle
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            What Happens When One Business<br />Owns Google Ads, Google Maps,<br />
            <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
              AND Organic SEO at the Same Time?
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            In every market there&apos;s always one business that seems to be everywhere on Google.
            It&apos;s not luck.{" "}
            <span className="text-white font-semibold">It&apos;s a coordinated three-channel strategy — and it&apos;s available to you.</span>
          </p>

          <motion.a
            href="https://wa.me/573103956445?text=I%20want%20the%20Local%20Domination%20Bundle"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-bold text-base hover:shadow-[0_0_40px_rgba(234,179,8,0.4)] transition-all duration-300"
          >
            Dominate My Market
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
              There&apos;s Always One Business<br />
              <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">That Seems to Be Everywhere.</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Look at any competitive local market — plumbers, contractors, lawyers, dentists — and you&apos;ll find the same pattern. There&apos;s one business you simply can&apos;t avoid when you search for their service. Paid results at the very top. A Google Maps pin with hundreds of reviews. Organic results three spots below that.
              </p>
              <p>
                The first time someone searches, they see this business&apos;s ad. They keep scrolling and see the same business on the map. They scroll down to the organic results and there it is again. By the time they&apos;ve reached the bottom of the page, they&apos;ve seen this business three times and everyone else once.
              </p>
              <p className="text-white font-semibold text-xl">
                That&apos;s not luck. That&apos;s not a massive budget. That&apos;s a coordinated strategy where three channels all point to the same business at the same time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EPIPHANY BRIDGE — The Epiphany */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="p-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/[0.04] mb-10">
              <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-3">The Epiphany</p>
              <p className="text-white text-2xl font-bold leading-relaxed">
                &ldquo;When Google Ads, Google Maps, and SEO all point to the same business, it creates compound dominance. Trust reaches 100%. Click-through rate explodes. Conversion rates double because people feel they can&apos;t avoid you.&rdquo;
              </p>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Most businesses do one thing at a time. They run ads for a while, then stop when the leads slow down. Or they try SEO but don&apos;t touch their Maps listing. Or they optimize Google Maps but don&apos;t run any ads. They never connect all three — so they get partial visibility, partial results, and leave the majority of search traffic to the competitor who figured it out first.
              </p>
              <p>
                The key insight is that these channels don&apos;t just add to each other — they multiply each other. Your ads build brand familiarity that improves your organic click-through rate. Your organic content improves the Quality Score on your ads, lowering your cost per click. Your Maps ranking provides social proof that makes every other channel convert better.
              </p>
              <p>
                A contractor implemented all three channels under one coordinated strategy. 90 days later: four times the leads they were getting from ads alone. Cost per lead dropped 40% because organic and Maps traffic was free.
              </p>
              <p className="text-white font-semibold text-xl">
                When one business owns Google Ads, Google Maps, AND organic results simultaneously, the market effectively closes for everyone else. That business becomes the obvious choice.
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
              <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">You Own All Three Channels at Once.</span>
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
                <div className="text-2xl font-black text-yellow-400 mb-1">{r.result}</div>
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
              &ldquo;I used to run ads and wonder why my cost per lead kept climbing. Now that everything works together, I&apos;m getting more calls than ever and my ad spend is doing more. It&apos;s a completely different business.&rdquo;
            </p>
            <p className="text-yellow-400 font-bold text-sm">— Mike T., General Contractor</p>
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
            <SectionLabel>What&apos;s Included</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Three Channels. One Strategy.<br />
              <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">Total Market Dominance.</span>
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
                className="flex gap-4 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] group hover:border-yellow-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/20 transition-colors">
                  <d.icon className="h-5 w-5 text-yellow-400" />
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
            {["Single point of contact", "Coordinated targeting", "EN + ES included", "No contracts"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs text-gray-400">
                <CheckCircle2 className="h-3 w-3 text-yellow-400 flex-shrink-0" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="relative px-6 py-20 sm:py-24">
        <SectionDivider />
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-3">Free 90-Day Roadmap</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
            Get the Month-by-Month Plan<br />to Dominate Your Local Market
          </h2>
          <p className="text-gray-400 mb-8">
            Google Ads → WhatsApp → Meta → SEO. The exact sequence we use to take businesses from invisible to #1 in their market.
          </p>
          <EmailCapture tag="roadmap" ctaText="Send Me the Domination Roadmap" accentClass="border-yellow-500/30 focus:border-yellow-500/60" btnClass="from-yellow-500 to-amber-400" />
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
            Right Now, Someone in Your Market<br />Is Running All Three Channels.<br />
            <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">Is It You?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-3 max-w-xl mx-auto">
            Message us on WhatsApp. We&apos;ll audit your current Google presence across all three channels for free and show you exactly what full domination would look like in your market.
          </p>
          <p className="text-gray-600 text-sm mb-10">2 minutes. No obligation. Real answers.</p>
          <motion.a
            href="https://wa.me/573103956445?text=I%20want%20the%20Local%20Domination%20Bundle"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-bold text-base hover:shadow-[0_0_50px_rgba(234,179,8,0.5)] transition-all duration-300"
          >
            Dominate My Market
          </motion.a>
          <p className="mt-4 text-xs text-gray-600">No contracts · No setup fees · All three channels included</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
