"use client"

import { motion } from "framer-motion"
import { TrendingUp, FileText, MapPin, Share2, Check } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider, FaqAccordion, PricingCard } from "@/components/landing/layout"

const steps = [
  { n: "01", title: "Keyword research done for you", desc: "We find exactly what your customers are searching and build a content map around it." },
  { n: "02", title: "5 SEO blog posts published weekly", desc: "Written by AI, optimized by us, published to your site. Google indexes them automatically." },
  { n: "03", title: "Google Business + social updated daily", desc: "Daily GMB posts and daily social content. Your profiles stay fresh, active, and ahead of competitors." },
  { n: "04", title: "Rankings climb. You get more calls.", desc: "Month over month your organic presence compounds. More visibility, more inbound leads." },
]

const deliverables = [
  { icon: FileText, title: "4 SEO Blog Posts", desc: "Monthly, keyword-optimized, auto-indexed by Google." },
  { icon: MapPin, title: "4 GMB Posts", desc: "Google Business Profile stays active and optimized weekly." },
  { icon: Share2, title: "12 Social Posts", desc: "Facebook, Instagram, LinkedIn — covered automatically." },
  { icon: TrendingUp, title: "Monthly Rankings Report", desc: "Track exactly which keywords are moving and by how much." },
]

const faq = [
  { q: "Who writes the content?", a: "We use AI combined with our SEO expertise to create content that reads naturally and ranks well. Every post is reviewed before publishing." },
  { q: "How long until I see results?", a: "Most clients see movement in rankings within 60-90 days. Organic SEO compounds — the longer you're in, the stronger your results." },
  { q: "Do I need to review each post?", a: "Optional. We can send you drafts for approval, or you can trust us to publish automatically. Your choice." },
  { q: "What if I already have a blog?", a: "We publish to your existing site. We work with WordPress, Webflow, Wix, Squarespace, and most other platforms." },
  { q: "Is the content in English and Spanish?", a: "Yes. Every piece is available in both languages at no extra cost." },
  { q: "Can I cancel anytime?", a: "Yes. No contracts, no penalties. Month-to-month." },
]

export default function RankFlowPage() {
  return (
    <LandingLayout
      accentColor="text-emerald-400"
      ctaText="Start Ranking Higher"
      ctaHref="https://wa.me/573103956445?text=I%20want%20RankFlow%20Pro"
    >
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.1),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8">
            <TrendingUp className="h-3.5 w-3.5" />
            RankFlow Pro — SEO & Content Automation
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            Your Competitor Posts<br />Content Every Week.<br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              You Don&apos;t.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Google ranks businesses that publish consistently. You don&apos;t have time to write every week.{" "}
            <span className="text-white font-semibold">We do it for you — automatically.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.a
              href="https://wa.me/573103956445?text=I%20want%20RankFlow%20Pro"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-base hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-all duration-300"
            >
              Start Ranking Higher — $497/mo
            </motion.a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {["5 blogs/week","Daily GMB posts","Daily social content","EN + ES content"].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs text-gray-400">
                <Check className="h-3 w-3 text-emerald-400 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Problem */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-center mb-16"
          >
            <SectionLabel>The Reality</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Google Doesn&apos;t Rank the{" "}
              <span className="text-gray-500 italic font-light">Best</span> Business.<br />
              It Ranks the{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Most Consistent</span> One.
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Your competitor isn&apos;t smarter than you. They just have a system that publishes content every single week without fail. You can have the same.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { stat: "3x", label: "More organic traffic for businesses that blog consistently vs. those that don't" },
              { stat: "90 days", label: "Average time to see significant ranking improvements with our system" },
              { stat: "0", label: "Hours you need to spend — we handle everything from writing to publishing" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center"
              >
                <div className="text-4xl font-black text-emerald-400 mb-2">{item.stat}</div>
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
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-center mb-16"
          >
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Set It Once.{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Rank Forever.
              </span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
                className="flex gap-5 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-emerald-500/30 transition-all duration-300 group"
              >
                <span className="text-2xl font-black text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors flex-shrink-0">{step.n}</span>
                <div>
                  <h3 className="font-bold text-white mb-1.5">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
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
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">Every Month. Without Fail.</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {deliverables.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.07 }}
                className="flex gap-4 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] group hover:border-emerald-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                  <d.icon className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{d.title}</h3>
                  <p className="text-sm text-gray-500">{d.desc}</p>
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
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="text-4xl font-black text-white mb-4">Simple. Flat Rate.</h2>
            <p className="text-gray-500 mb-12">One new customer from organic search pays for 2+ months. After that it&apos;s pure profit.</p>
            <PricingCard
              badge="RankFlow Pro"
              price="$497"
              period="/mo"
              items={["5 SEO blog posts/week","Auto Google indexing","Daily GMB posts","Daily social content","English + Spanish content","Keyword research included","Monthly rankings report","Schema markup","Internal linking","Content calendar","No contracts","Cancel anytime"]}
              ctaText="Start Ranking Higher"
              ctaHref="https://wa.me/573103956445?text=I%20want%20RankFlow%20Pro"
              accentClass="border-emerald-500"
              note="No setup fees. Cancel anytime."
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-center mb-12"
          >
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-4xl font-black text-white">Common Questions</h2>
          </motion.div>
          <FaqAccordion items={faq} />
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
            Your Competitors Are<br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Ranking Above You Right Now.</span>
          </h2>
          <p className="text-gray-500 text-lg mb-10">Every week you wait is another week they pull further ahead. Start compounding your rankings today.</p>
          <motion.a
            href="https://wa.me/573103956445?text=I%20want%20RankFlow%20Pro"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-base hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] transition-all duration-300"
          >
            Start Ranking Higher — $497/mo
          </motion.a>
          <p className="mt-4 text-xs text-gray-600">No contracts · Cancel anytime · EN + ES included</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
