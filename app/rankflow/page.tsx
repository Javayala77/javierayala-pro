"use client"

import { motion } from "framer-motion"
import { TrendingUp, FileText, MapPin, Share2, CheckCircle2 } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider } from "@/components/landing/layout"
import EmailCapture from "@/components/email-capture"

const deliverables = [
  { icon: FileText, title: "5 SEO Blog Posts per Week", desc: "Written by AI, optimized for your city and industry, auto-published. Google indexes them without you lifting a finger." },
  { icon: MapPin, title: "Daily Google Business Posts", desc: "The same daily GMB updates that used to take our agency hours — now done automatically, every single day." },
  { icon: Share2, title: "Daily Social Content", desc: "Instagram, Facebook, LinkedIn — your brand shows up consistently while you focus on running your business." },
  { icon: TrendingUp, title: "Monthly Rankings Report", desc: "You see exactly where you moved on Google, which keywords are climbing, and what's coming next." },
]

const results = [
  { name: "Elite Roofing Co.", result: "Top 3 on Google Maps", timeframe: "in 74 days" },
  { name: "Precision Plumbing", result: "+340% organic traffic", timeframe: "in 90 days" },
  { name: "Coastal Legal Group", result: "12 inbound calls/week", timeframe: "from Google alone" },
]

export default function RankFlowPage() {
  return (
    <LandingLayout
      accentColor="text-emerald-400"
      ctaText="I Want This System"
      ctaHref="https://wa.me/573103956445?text=I%20want%20to%20rank%20higher%20on%20Google"
    >
      {/* HOOK */}
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
            SEO & Content Automation
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            I Used to Do This Manually.<br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Then Everything Changed.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            What I discovered inside a marketing agency completely changed how I think about Google rankings —
            and{" "}
            <span className="text-white font-semibold">it has nothing to do with SEO tricks or backlinks.</span>
          </p>

          <motion.a
            href="#email-capture"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-base hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-all duration-300"
          >
            Show Me the System
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
              Four Years Ago,<br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">I Was Doing This By Hand.</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I started at a digital marketing agency. My job? Google Business Profile updates. Every client, every week, manually. Log in, write a post, upload a photo, hit publish. Then do it again for the next client. And the next.
              </p>
              <p>
                The entire agency ran this way. Every piece of content — written by humans, scheduled by humans, published by humans. Hours and hours of work that produced decent results but <span className="text-white font-semibold">never scaled</span>.
              </p>
              <p>
                And here&apos;s the frustrating part: we knew consistency was the key. The clients we updated daily ranked higher than the ones we updated weekly. The ones we blogged for every week crushed the ones we blogged for once a month. The data was undeniable.
              </p>
              <p className="text-white font-semibold text-xl">
                The problem wasn&apos;t the strategy. The problem was that doing it right took more hours than we had.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EPIPHANY BRIDGE — The Moment */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="p-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] mb-10">
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">The Epiphany</p>
              <p className="text-white text-2xl font-bold leading-relaxed">
                &ldquo;What if AI could do every single one of these manual tasks — faster, cheaper, and at a quality our best human writers couldn&apos;t match at scale?&rdquo;
              </p>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                We started testing. First the GMB posts — AI drafts, human review, automated publishing. The content quality was better. The consistency was perfect. And it took <span className="text-white font-semibold">10 minutes instead of 3 hours</span>.
              </p>
              <p>
                Then we automated the blog posts. The social content. The keyword research. One by one, everything that used to require a team of people running on coffee and spreadsheets became a system that ran itself.
              </p>
              <p>
                The results didn&apos;t just stay the same — <span className="text-white font-semibold">they got better</span>. Because now we could be consistent at a level no human team could sustain. Daily GMB posts. Five SEO blogs a week. Daily social content. Every. Single. Day. Without fail.
              </p>
              <p className="text-white font-semibold text-xl">
                Clients who had been stuck on page 2 for years started hitting the top 3 on Google Maps within 60 days. Organic traffic doubled. Then tripled. And they hadn&apos;t changed anything about their business — just their online consistency.
              </p>
              <p>
                That&apos;s when I realized: <span className="text-white font-semibold">this isn&apos;t a marketing advantage anymore. It&apos;s the minimum requirement to compete online in 2025.</span> And most businesses still don&apos;t have it.
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
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">The System Runs for Your Business.</span>
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
                <div className="text-2xl font-black text-emerald-400 mb-1">{r.result}</div>
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
              &ldquo;I didn&apos;t believe organic SEO could move this fast. By month two I was getting calls from people who found me on Google — people I never would have reached with ads.&rdquo;
            </p>
            <p className="text-emerald-400 font-bold text-sm">— Marcus T., HVAC Contractor</p>
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
            <SectionLabel>The System</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Everything the Agency Did Manually —<br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Now Running Automatically for You.</span>
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto"
          >
            {["English + Spanish","Schema markup","Auto Google indexing","Content calendar"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs text-gray-400">
                <CheckCircle2 className="h-3 w-3 text-emerald-400 flex-shrink-0" />
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
          <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">Free 90-Day Roadmap</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
            The Exact System We Use to Rank<br />Local Businesses on Google — Free
          </h2>
          <p className="text-gray-400 mb-8">
            Month-by-month content + SEO plan. See the full strategy before you commit to anything.
          </p>
          <EmailCapture tag="seo" ctaText="Book My Free SEO Consultation" accentClass="border-emerald-500/30 focus:border-emerald-500/60" btnClass="from-emerald-600 to-emerald-500" />
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
            Your Competitor Is Getting<br />This Done Right Now.<br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">What About You?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Enter your email and we&apos;ll check your current Google rankings for free and show you exactly what the system would do for your business.
          </p>
          <a
            href="#email-capture"
            className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-base hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] transition-all duration-300"
          >
            Book My Free SEO Consultation
          </a>
          <p className="mt-4 text-xs text-gray-600">No contracts · No setup fees · EN + ES included</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
