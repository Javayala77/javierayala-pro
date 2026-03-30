"use client"

import { motion } from "framer-motion"
import { Search, DollarSign, FileText, Target, BarChart3, CheckCircle2 } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider } from "@/components/landing/layout"
import EmailCapture from "@/components/email-capture"

const reportItems = [
  { icon: Search, title: "Top 3 Competitor Keywords", desc: "The exact search terms your competitors are bidding on — including long-tail keywords driving their cheapest leads." },
  { icon: DollarSign, title: "Estimated Monthly Ad Spend", desc: "We surface their approximate monthly Google Ads budget so you know exactly who you're up against and what they're investing." },
  { icon: FileText, title: "Their Actual Ad Copy", desc: "The headlines and descriptions they're running right now — what angles they're using, what promises they're making." },
  { icon: Target, title: "Keyword Gaps They're Missing", desc: "High-intent keywords with real search volume that none of your top competitors are targeting. This is where you win." },
  { icon: BarChart3, title: "Your Opportunity Score", desc: "A clear assessment of where you can enter the market cheaper, rank faster, and capture leads your competitors are leaving behind." },
]

const results = [
  { name: "Bright Home Cleaning", result: "Cost per lead dropped 60%", timeframe: "in 30 days" },
  { name: "Summit Law Group", result: "Found 14 untapped keywords", timeframe: "competitors ignored" },
  { name: "Atlas Roofing", result: "Outranked 2 competitors", timeframe: "in under 45 days" },
]

export default function CompetitorSpyPage() {
  return (
    <LandingLayout
      accentColor="text-orange-400"
      ctaText="Spy on My Competitors — Free"
      ctaHref="https://wa.me/573103956445?text=I%20want%20a%20free%20competitor%20analysis"
    >
      {/* HOOK */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,146,60,0.1),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.03)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/25 bg-orange-500/8 text-orange-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Search className="h-3.5 w-3.5" />
            Free Competitor Analysis Report
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            See Exactly What Your Competitors<br />
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Are Spending on Google Ads Right Now.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Your top 3 competitors are running Google Ads right now. We can see their keywords, their estimated spend, their ad copy, and the gaps they&apos;re leaving open.{" "}
            <span className="text-white font-semibold">This is the intelligence that changes campaigns overnight.</span>
          </p>

          <motion.a
            href="https://wa.me/573103956445?text=I%20want%20a%20free%20competitor%20analysis"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold text-base hover:shadow-[0_0_40px_rgba(251,146,60,0.4)] transition-all duration-300"
          >
            Spy on My Competitors — Free
          </motion.a>

          <p className="mt-4 text-xs text-gray-600">No commitment · Report delivered via WhatsApp · Free</p>
        </motion.div>
      </section>

      {/* STORY — The Problem */}
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
              I Was Managing a Campaign Blind.<br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">Then I Found the Intelligence Layer.</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                A few years ago I was managing a Google Ads account for a local law firm. We were spending $4,000 a month. The cost per lead was painful. We kept tweaking bids, adjusting ad copy, testing landing pages — the usual playbook.
              </p>
              <p>
                The results moved, but never enough. We were flying blind. We knew what <span className="text-white font-semibold">our</span> campaign was doing — we had no idea what the competition was doing. And in Google Ads, that matters enormously.
              </p>
              <p>
                Then a colleague showed me a tool that changed everything. You type in a competitor&apos;s domain and it surfaces their estimated keyword spend, the exact terms they&apos;re bidding on, and the ad copy running right now.
              </p>
              <p className="text-white font-semibold text-xl">
                I had been optimizing in a vacuum. The real opportunity was hiding in the data I didn&apos;t know existed.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STORY — The Epiphany */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="p-8 rounded-2xl border border-orange-500/20 bg-orange-500/[0.04] mb-10">
              <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">The Epiphany</p>
              <p className="text-white text-2xl font-bold leading-relaxed">
                &ldquo;Our biggest competitor was spending $8,000 a month on 3 keywords — and all three had cheaper alternatives with half the competition.&rdquo;
              </p>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                The data was right there. The competitor everyone was afraid of was dumping their entire budget into three broad, expensive keywords. They were paying top dollar for the most contested real estate.
              </p>
              <p>
                Meanwhile, there were 14 related keywords — specific, high-intent, cheaper — that none of the top three competitors were running. Not one bid on any of them.
              </p>
              <p>
                We shifted strategy overnight. Pulled back on the expensive terms, moved budget into the untapped keywords. <span className="text-white font-semibold">Cost per lead dropped 60% in 30 days.</span> Lead volume stayed the same. Quality went up.
              </p>
              <p>
                The campaign didn&apos;t get better because we worked harder. It got better because we finally had the intelligence to make the right moves. <span className="text-white font-semibold">That same intelligence is what I pull together in every free competitor report I deliver.</span>
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
              What Happens When You Know<br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">What Your Competitors Are Doing.</span>
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
                <div className="text-2xl font-black text-orange-400 mb-1">{r.result}</div>
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
              &ldquo;I had no idea my competitors were spending that much — or that they were ignoring the keywords my customers actually search. That report alone was worth more than months of guessing.&rdquo;
            </p>
            <p className="text-orange-400 font-bold text-sm">— David R., Home Services Business Owner</p>
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
            <SectionLabel>The Free Report</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Everything We Pull on Your<br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">Top 3 Competitors — No Charge.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
              Message us on WhatsApp with your business name and city. We research your competitors and send you a full intelligence report — usually within 24 hours.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {reportItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.07 }}
                className="flex gap-4 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] group hover:border-orange-500/30 transition-all"
              >
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto"
          >
            {["Delivered via WhatsApp", "Any local business", "3 competitors covered", "Actionable gaps only"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs text-gray-400">
                <CheckCircle2 className="h-3 w-3 text-orange-400 flex-shrink-0" />
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
            Your Competitors Can See You.<br />Can You See Them?<br />
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">Find Out — Free.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Drop your email and we&apos;ll send the competitor report — or message WhatsApp directly with your business name and city.
          </p>
          <div className="max-w-sm mx-auto mb-8">
            <EmailCapture tag="competitor-spy" ctaText="Spy on My Competitors — Free" accentClass="border-orange-500/30 focus:border-orange-500/60" btnClass="from-orange-600 to-orange-500" />
          </div>
          <div className="flex items-center gap-3 justify-center">
            <div className="h-px w-16 bg-white/[0.06]" /><span className="text-xs text-gray-600">or</span><div className="h-px w-16 bg-white/[0.06]" />
          </div>
          <motion.a href="https://wa.me/573103956445?text=I%20want%20a%20free%20competitor%20analysis" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center justify-center gap-2 mt-4 h-12 px-8 rounded-full border border-orange-500/30 text-orange-400 font-bold text-sm hover:bg-orange-500/10 transition-all duration-300">
            Message on WhatsApp directly
          </motion.a>
          <p className="mt-4 text-xs text-gray-600">No ads account needed · Free · Takes 30 seconds to request</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
