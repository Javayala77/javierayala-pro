"use client"

import { motion } from "framer-motion"
import { TrendingUp, FileText, MapPin, Share2, CheckCircle2 } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider } from "@/components/landing/layout"

const deliverables = [
  { icon: FileText, title: "5 SEO Blog Posts per Week", desc: "Written by AI, optimized by our team, auto-published to your site. Google finds them without you doing a thing." },
  { icon: MapPin, title: "Daily Google Business Posts", desc: "Your Google profile stays active every single day — the #1 signal Google uses to rank local businesses." },
  { icon: Share2, title: "Daily Social Content", desc: "Instagram, Facebook, LinkedIn — posting consistently so your brand stays visible while you're working." },
  { icon: TrendingUp, title: "Monthly Rankings Report", desc: "You see exactly which keywords moved, how much, and what's coming next." },
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
      ctaText="I Want More Customers"
      ctaHref="https://wa.me/573103956445?text=I%20want%20to%20rank%20higher%20on%20Google"
    >
      {/* HOOK — Hero */}
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
            There&apos;s a Reason Your Competitor<br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Shows Up First on Google.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            It&apos;s not because they&apos;re better than you.{" "}
            <span className="text-white font-semibold">It&apos;s because they show up every single day — and you don&apos;t.</span>{" "}
            Keep reading. This changes today.
          </p>

          <motion.a
            href="https://wa.me/573103956445?text=I%20want%20to%20rank%20higher%20on%20Google"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-base hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-all duration-300"
          >
            Show Me How It Works
          </motion.a>

          <p className="mt-4 text-xs text-gray-600">No commitment · Takes 2 minutes · We reply on WhatsApp</p>
        </motion.div>
      </section>

      {/* STORY — Problem Agitation */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <SectionLabel>The Real Problem</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-10 leading-tight">
              Google Doesn&apos;t Rank the Best Business.<br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">It Ranks the Most Consistent One.</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                You&apos;re good at what you do. You have happy clients. You&apos;ve built something real. But when someone in your city types your service into Google — <span className="text-white font-semibold">your competitor shows up. Not you.</span>
              </p>
              <p>
                It&apos;s not because they have a better business. It&apos;s because they&apos;re publishing content every week — blog posts, Google Business updates, social posts — while you&apos;re busy actually running your business.
              </p>
              <p>
                Google sees their name constantly. It sees yours occasionally. And it ranks accordingly.
              </p>
              <p className="text-white font-semibold text-xl">
                Every week you don&apos;t publish, your competitor pulls further ahead. And here&apos;s what nobody tells you: the gap compounds.
              </p>
              <p>
                Businesses that publish consistently for 90 days see 3x more organic traffic than those who don&apos;t. Not because the algorithm changed. Because consistency is the algorithm.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STORY — The Turn */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <SectionLabel>The Solution</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-10 leading-tight">
              What If You Could Publish Every Day<br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Without Writing a Single Word?</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                That&apos;s exactly what we built. An AI-powered content system that publishes for you — blog posts, Google Business updates, social content — every single day, fully automated.
              </p>
              <p>
                We handle the keyword research. We write the content. We optimize it for your city and your industry. We publish it. You get a monthly report showing exactly where you moved on Google.
              </p>
              <p className="text-white font-semibold text-xl">
                You don&apos;t write anything. You don&apos;t schedule anything. You just start ranking.
              </p>
              <p>
                And here&apos;s the part that most people don&apos;t expect: it&apos;s not just blogs. We update your Google Business Profile daily — the single most underused local SEO signal there is. Most of your competitors aren&apos;t doing it. That alone puts you ahead.
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
              This Is What Happens When<br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">You Stop Being Invisible.</span>
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
            className="p-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] text-center max-w-2xl mx-auto"
          >
            <p className="text-gray-300 text-lg leading-relaxed italic mb-4">
              &ldquo;I didn&apos;t believe SEO could work this fast. By month two I was getting calls from people who found me on Google — people I never would have reached with ads alone.&rdquo;
            </p>
            <p className="text-emerald-400 font-bold text-sm">— Marcus T., HVAC Contractor</p>
          </motion.div>
        </div>
      </section>

      {/* OFFER — What You Get */}
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
              Everything Done For You.<br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Every Single Day.</span>
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
            Your Competitor Is Publishing<br />Right Now.<br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Are You?</span>
          </h2>
          <p className="text-gray-500 text-lg mb-4 max-w-xl mx-auto">
            Send us a message on WhatsApp. We&apos;ll show you exactly where you stand on Google right now — and what it would take to get you to the top.
          </p>
          <p className="text-gray-600 text-sm mb-10">Takes 2 minutes. No obligation.</p>
          <motion.a
            href="https://wa.me/573103956445?text=I%20want%20to%20rank%20higher%20on%20Google"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-base hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] transition-all duration-300"
          >
            I Want More Customers from Google
          </motion.a>
          <p className="mt-4 text-xs text-gray-600">No contracts · No setup fees · EN + ES included</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
