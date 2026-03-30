"use client"

import { motion } from "framer-motion"
import { Map, Megaphone, Globe, CheckCircle2, MessageCircle, ArrowRight } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider } from "@/components/landing/layout"
import EmailCapture from "@/components/email-capture"

const phases = [
  {
    icon: Megaphone,
    month: "Month 1",
    title: "Google Ads + WhatsApp Bot",
    desc: "Turn on traffic fast. Google Ads captures high-intent searches — people already looking for what you do. A WhatsApp automation qualifies every lead instantly, so no one falls through the cracks.",
    items: ["Search campaigns targeting buyers, not browsers", "Negative keyword list from day one", "WhatsApp auto-reply sequence built out", "Lead tracking so you know what's working"],
  },
  {
    icon: Globe,
    month: "Month 2",
    title: "Meta Ads + Retargeting",
    desc: "Now you build the audience. Meta Ads put your brand in front of people in your area before they need you. Retargeting brings back everyone who visited your site but didn't call.",
    items: ["Facebook + Instagram awareness campaigns", "Retargeting pixel installed and firing", "Lookalike audiences from your buyer list", "Cross-channel attribution set up"],
  },
  {
    icon: Map,
    month: "Month 3",
    title: "SEO + Google Maps Domination",
    desc: "Now you own the search results without paying per click. Weekly SEO content, daily Google Business Profile posts, and a review strategy that pushes you into the top 3 on Maps.",
    items: ["5 SEO blog posts per week, auto-published", "Daily Google Business Profile updates", "Review generation system activated", "Local keyword rankings tracked weekly"],
  },
]

const results = [
  { metric: "5 leads/month → 54 leads/month", context: "General contractor, 90 days", name: "Apex Build Group" },
  { metric: "Zero online presence → Top 3 Maps", context: "HVAC company, 11 weeks", name: "CoolZone HVAC" },
  { metric: "Cost per lead dropped 68%", context: "Plumbing contractor, month 2", name: "BlueLine Plumbing" },
]

const WA_HREF = "https://wa.me/573103956445?text=I%20want%20the%2090-day%20local%20domination%20roadmap"

export default function RoadmapPage() {
  return (
    <LandingLayout
      accentColor="text-violet-400"
      ctaText="Send Me the 90-Day Roadmap"
      ctaHref={WA_HREF}
    >
      {/* HOOK */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.1),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/25 bg-violet-500/8 text-violet-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Map className="h-3.5 w-3.5" />
            Free 90-Day Roadmap
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            The Exact 90-Day Plan That Takes<br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
              a Local Business From 5 Leads to 50.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Most local businesses fail at marketing because they try{" "}
            <span className="text-white font-semibold">random things in the wrong order</span>. This roadmap gives you a clear, sequenced, month-by-month plan — built for businesses that want to dominate their local market in 90 days.
          </p>

          <motion.a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-violet-600 to-violet-500 text-white font-bold text-base hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            <MessageCircle className="h-5 w-5" />
            Send Me the 90-Day Roadmap
          </motion.a>

          <p className="mt-4 text-xs text-gray-600">Free · Delivered instantly on WhatsApp · No strings attached</p>
        </motion.div>
      </section>

      {/* STORY — Epiphany Bridge Part 1 */}
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
              I Watched Great Contractors Fail<br />
              <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">Because Nobody Gave Them a System.</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Working in digital marketing, I saw a pattern repeat itself constantly. A contractor spends $3,000 on Google Ads in January, gets frustrated with the results, stops in March. Tries Facebook Ads in May. Pays for an SEO package in July. Stops that too.
              </p>
              <p>
                Each thing they tried had merit. Google Ads works. Meta Ads works. SEO works. The problem wasn&apos;t the channel — it was the sequence and the timing. They were turning on channels before they had the infrastructure to convert the traffic. Or running ads without retargeting. Or doing SEO without any paid traffic to accelerate it.
              </p>
              <p>
                Random tactics don&apos;t compound. A system does. And none of these businesses had ever been given a system.
              </p>
              <p className="text-white font-semibold text-xl">
                So I mapped out the order. The exact sequence of channels — when to turn each one on, what to set up first, what has to be in place before the next step even makes sense.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STORY — Epiphany */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="p-8 rounded-2xl border border-violet-500/20 bg-violet-500/[0.04] mb-10">
              <p className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-3">The Realization</p>
              <p className="text-white text-2xl font-bold leading-relaxed">
                &ldquo;Marketing isn&apos;t about doing everything. It&apos;s about doing the right things in the right order — and letting each month build on the last.&rdquo;
              </p>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                The breakthrough came when I stopped treating each channel as a separate campaign and started treating the 90 days as one connected system. Month 1 builds the revenue engine — fast-acting paid traffic with WhatsApp to convert it. Month 2 extends reach and recaptures lost visitors. Month 3 locks in free traffic that compounds forever.
              </p>
              <p>
                When we ran this sequence for a general contractor, he went from 5 leads a month to 54 — and by month 3, a third of those were coming in organically. He wasn&apos;t paying for every single one anymore.
              </p>
              <p className="text-white font-semibold text-xl">
                That&apos;s what a system looks like. Not random. Not one-off campaigns. A deliberate 90-day build that compounds.
              </p>
              <p>
                I&apos;m giving you the full roadmap for free — because a business that understands the system is a business I can actually help. And if you want to run this together, we can talk about that too.
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
              What 90 Days of System<br />
              <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">Looks Like in the Real World.</span>
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
                <div className="text-xl font-black text-violet-400 mb-2 leading-tight">{r.metric}</div>
                <div className="text-xs text-gray-500 mb-3">{r.context}</div>
                <div className="text-sm text-gray-400 font-medium">{r.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER — The 3-Phase Roadmap */}
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
            <SectionLabel>The Roadmap</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Three Months. Three Phases.<br />
              <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">One Complete System.</span>
            </h2>
            <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto">
              The roadmap shows exactly what to do each week — no guessing, no wasted months, no channels turned on at the wrong time.
            </p>
          </motion.div>

          <div className="space-y-4 mb-12">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] group hover:border-violet-500/30 transition-all"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex items-start gap-4 sm:w-1/3">
                    <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-500/20 transition-colors">
                      <phase.icon className="h-6 w-6 text-violet-400" />
                    </div>
                    <div>
                      <p className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-0.5">{phase.month}</p>
                      <h3 className="font-black text-white text-lg leading-tight">{phase.title}</h3>
                    </div>
                  </div>
                  <div className="sm:w-2/3">
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{phase.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {phase.items.map((item, j) => (
                        <div key={j} className="flex items-center gap-2 text-xs text-gray-500">
                          <CheckCircle2 className="h-3.5 w-3.5 text-violet-400 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {i < phases.length - 1 && (
                  <div className="flex justify-center mt-6">
                    <ArrowRight className="h-4 w-4 text-gray-700 rotate-90" />
                  </div>
                )}
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
            {["Week-by-week plan", "Delivered on WhatsApp", "Any service business", "Works from $1k/mo"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs text-gray-400">
                <CheckCircle2 className="h-3 w-3 text-violet-400 flex-shrink-0" />
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
            Stop Running Random Campaigns.<br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">Start Running a System.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Drop your email and we&apos;ll send the full 90-Day Roadmap — then walk you through your specific Month 1 plan on WhatsApp.
          </p>
          <div className="max-w-sm mx-auto mb-8">
            <EmailCapture tag="roadmap" ctaText="Send Me the 90-Day Roadmap" accentClass="border-violet-500/30 focus:border-violet-500/60" btnClass="from-violet-600 to-violet-500" />
          </div>
          <div className="flex items-center gap-3 justify-center">
            <div className="h-px w-16 bg-white/[0.06]" /><span className="text-xs text-gray-600">or</span><div className="h-px w-16 bg-white/[0.06]" />
          </div>
          <motion.a href={WA_HREF} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center justify-center gap-2 mt-4 h-12 px-8 rounded-full border border-violet-500/30 text-violet-400 font-bold text-sm hover:bg-violet-500/10 transition-all duration-300">
            <MessageCircle className="h-4 w-4" />Message on WhatsApp directly
          </motion.a>
          <p className="mt-4 text-xs text-gray-600">Free · Instant · No commitment</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
