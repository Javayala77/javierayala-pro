"use client"

import { motion } from "framer-motion"
import { Target, Users, RefreshCw, BarChart2, CheckCircle2 } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider } from "@/components/landing/layout"
import EmailCapture from "@/components/email-capture"

const deliverables = [
  { icon: Target, title: "Facebook + Instagram Ads", desc: "Full campaign build across both platforms — creatives, copy, targeting, and launch. One cohesive strategy that works across the entire Meta ecosystem." },
  { icon: Users, title: "Custom Audiences & Lookalikes", desc: "We build audiences from your real customer data, then let Meta's AI find thousands of people who behave exactly like your best buyers." },
  { icon: RefreshCw, title: "Retargeting Campaigns", desc: "Separate campaigns for people who already visited your site or engaged with your content. They're warm — we close them." },
  { icon: BarChart2, title: "Monthly Performance Report", desc: "Every month you see exactly which campaigns generated leads, which creative won, and what the plan is for the next 30 days." },
]

const results = [
  { name: "Home Remodeling Co.", result: "40+ leads/month", timeframe: "from a single campaign" },
  { name: "Legal Consultation Firm", result: "67% lower cost per lead", timeframe: "vs. boosted posts" },
  { name: "Local Med Spa", result: "3.8x return on ad spend", timeframe: "in the first 60 days" },
]

export default function MetaAdsPage() {
  return (
    <LandingLayout
      accentColor="text-pink-400"
      ctaText="Let's Talk About My Ads"
      ctaHref="https://wa.me/573103956445?text=I%20want%20Meta%20Ads%20management"
    >
      {/* HOOK */}
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
            Meta Ads Management
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            I Watched a Business Spend<br />
            <span className="bg-gradient-to-r from-pink-400 to-rose-300 bg-clip-text text-transparent">
              $3,000 Boosting Posts. They Got Zero Customers.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            There&apos;s a difference between spending money on Facebook and{" "}
            <span className="text-white font-semibold">running ads that actually generate leads.</span>{" "}
            Most businesses never learn it — until they run out of budget.
          </p>

          <motion.a
            href="https://wa.me/573103956445?text=I%20want%20Meta%20Ads%20management"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-pink-600 to-pink-500 text-white font-bold text-base hover:shadow-[0_0_40px_rgba(236,72,153,0.4)] transition-all duration-300"
          >
            Let&apos;s Talk About My Ads
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
              Every Client Said the Same Thing.<br />
              <span className="bg-gradient-to-r from-pink-400 to-rose-300 bg-clip-text text-transparent">&ldquo;We Run Facebook Ads.&rdquo;</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Working at the agency, every new client would tell us the same story. &ldquo;We&apos;ve tried Facebook ads. They don&apos;t work for our industry.&rdquo; Then we&apos;d ask to see their Ads Manager — and the same thing appeared every time.
              </p>
              <p>
                Not campaigns. Not ad sets. Not targeting. Just a graveyard of boosted posts. Five hundred here, a thousand there. &ldquo;Boost Post&rdquo; over and over. The reach numbers looked impressive — twelve thousand people, thirty thousand people. The calls: zero.
              </p>
              <p>
                One client had spent nearly three thousand over a single quarter boosting their best-performing organic posts. They were proud of the reach. They thought it was working. No one had ever told them <span className="text-white font-semibold">that boosted posts and real Meta Ads are completely different things.</span>
              </p>
              <p className="text-white font-semibold text-xl">
                Boosted posts have no targeting, no funnel, no conversion tracking. You&apos;re paying for eyeballs that will never buy.
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
            <div className="p-8 rounded-2xl border border-pink-500/20 bg-pink-500/[0.04] mb-10">
              <p className="text-pink-400 text-xs font-bold uppercase tracking-widest mb-3">The Epiphany</p>
              <p className="text-white text-2xl font-bold leading-relaxed">
                &ldquo;Real Meta Ads aren&apos;t one campaign. They&apos;re three — each targeting a completely different type of person at a completely different moment in their buying journey.&rdquo;
              </p>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                We rebuilt the entire approach from scratch. Cold audiences — people who had never heard of the business, targeted by demographics, interests, and behaviors. Retargeting — people who had already visited the website or watched a video. Conversion — warm leads who had engaged more than once. Three separate campaigns, each with its own creative, its own message, its own goal.
              </p>
              <p>
                Then we layered in custom audiences built from the client&apos;s own customer list, and lookalike audiences — Meta&apos;s AI finding hundreds of thousands of new people who behave just like their best existing customers. Add AI bid optimization and WhatsApp lead campaigns on top of that, and the whole machine started working together.
              </p>
              <p className="text-white font-semibold text-xl">
                Same budget. Completely different result. The client who had been getting nothing from boosted posts started generating over forty real leads per month — from less than half the spend.
              </p>
              <p>
                The difference wasn&apos;t the amount of money. It was the architecture. <span className="text-white font-semibold">Meta&apos;s platform is extraordinarily powerful — but only if you build it right.</span> Boosting posts is just paying to be ignored at scale.
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
              What Happens When the<br />
              <span className="bg-gradient-to-r from-pink-400 to-rose-300 bg-clip-text text-transparent">Funnel Is Built the Right Way.</span>
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
                <div className="text-2xl font-black text-pink-400 mb-1">{r.result}</div>
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
              &ldquo;We had been boosting posts for over a year and thought ads just didn&apos;t work for us. Within the first month of running real campaigns, we had more leads than we could handle.&rdquo;
            </p>
            <p className="text-pink-400 font-bold text-sm">— Sandra R., Home Remodeling Business Owner</p>
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
            <SectionLabel>What You Get</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              The Full Campaign Architecture —<br />
              <span className="bg-gradient-to-r from-pink-400 to-rose-300 bg-clip-text text-transparent">Built, Managed, and Optimized for You.</span>
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
                className="flex gap-4 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] group hover:border-pink-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500/20 transition-colors">
                  <d.icon className="h-5 w-5 text-pink-400" />
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
            {["AI bid optimization", "WhatsApp lead campaigns", "Conversion tracking", "A/B creative testing"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs text-gray-400">
                <CheckCircle2 className="h-3 w-3 text-pink-400 flex-shrink-0" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Email Capture */}
      <section id="email-capture" className="relative px-6 py-20 sm:py-24">
        <SectionDivider />
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">Free Competitor Analysis</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
            See Exactly What Your Competitors<br />Are Spending on Meta Ads Right Now
          </h2>
          <p className="text-gray-400 mb-8">
            Their ad copy, their targeting, and the gaps they&apos;re leaving open. Full report — free.
          </p>
          <EmailCapture tag="competitor-spy" ctaText="Get My Free Competitor Report" accentClass="border-orange-500/30 focus:border-orange-500/60" btnClass="from-orange-600 to-orange-500" />
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
            Every Day You Boost Posts<br />Is a Day You&apos;re Paying<br />
            <span className="bg-gradient-to-r from-pink-400 to-rose-300 bg-clip-text text-transparent">to Be Ignored.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-3 max-w-xl mx-auto">
            Message us on WhatsApp. We&apos;ll look at your current ads setup for free and tell you exactly what a real campaign structure would change for your business.
          </p>
          <p className="text-gray-600 text-sm mb-10">2 minutes. No obligation. Honest answers.</p>
          <motion.a
            href="https://wa.me/573103956445?text=I%20want%20Meta%20Ads%20management"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-pink-600 to-pink-500 text-white font-bold text-base hover:shadow-[0_0_50px_rgba(236,72,153,0.5)] transition-all duration-300"
          >
            Let&apos;s Talk About My Ads
          </motion.a>
          <p className="mt-4 text-xs text-gray-600">No contracts · Facebook + Instagram · EN + ES</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
