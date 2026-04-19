"use client"

import { motion } from "framer-motion"
import { Search, XCircle, BarChart2, Target, Star, TrendingDown, CheckCircle2 } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider } from "@/components/landing/layout"
import EmailCapture from "@/components/email-capture"

const checklistItems = [
  { icon: Search, title: "Keyword Bleed", desc: "AI identifies which keywords are consuming budget on searches that will never convert — and exactly how much they're costing you." },
  { icon: XCircle, title: "Negative Keyword Gaps", desc: "We scan your search terms report to surface irrelevant queries your list hasn't caught yet." },
  { icon: BarChart2, title: "Conversion Signal Quality", desc: "Are phone calls tracked with the right duration threshold? Are form submissions clean? Bad signal means the AI is optimizing toward the wrong thing." },
  { icon: Target, title: "Smart Bidding Configuration", desc: "Wrong bid strategy for your conversion volume means the algorithm is flying blind. We check if your data supports what you're running." },
  { icon: Star, title: "Quality Score Drag", desc: "We find which keywords have low Quality Scores, what's causing them, and what it's costing you per click versus your competitors." },
  { icon: TrendingDown, title: "Structural Inefficiencies", desc: "Ad group structure, match type mix, campaign segmentation — the architecture problems that manual management consistently misses." },
]

const results = [
  { metric: "Cost per lead: $180 → $47", context: "HVAC company, 6 weeks", name: "Southwest Cooling Co." },
  { metric: "$2,200/mo in wasted spend stopped", context: "Plumbing contractor, immediate", name: "ProFlow Plumbing" },
  { metric: "3 calls/month → 22 calls/month", context: "Roofing company, 60 days", name: "Summit Roofing" },
]

export default function FreeAuditContent() {
  return (
    <LandingLayout
      accentColor="text-cyan-400"
      ctaText="Get My Free AI Scan"
      
    >
      {/* HOOK */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.1),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/8 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Search className="h-3.5 w-3.5" />
            Free Google Ads AI Scan
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            We Scan Your Account.<br />
            <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">
              You See Exactly What&apos;s Broken.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            We run an AI-powered scan on your active Google Ads account and show you{" "}
            <span className="text-white font-semibold">exactly where your budget is leaking</span>{" "}
            — and the precise fixes that will bring your cost per lead down fast.
          </p>

          <motion.a
            href="#email-capture"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold text-base hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all duration-300"
          >
            Get My Free AI Scan
          </motion.a>

          <p className="mt-4 text-xs text-gray-600">Free · 30 minutes · Active Google Ads account required</p>
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
              You&apos;ve Already Been Burned<br />
              <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">By Someone Who Didn&apos;t Know What They Were Doing.</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                You hired an agency. Or a freelancer. Or someone who said they knew Google Ads. They set up the campaigns, sent you a report every month, and the leads never came — or the cost per lead kept climbing with no explanation.
              </p>
              <p>
                The problem wasn&apos;t Google Ads. The problem was that whoever managed your account didn&apos;t understand how Google&apos;s AI actually works. They set it up like it was 2018 — manual bids, generic keywords, no conversion signal quality, no Smart Bidding — and the algorithm ran against you instead of for you.
              </p>
              <p>
                Google&apos;s platform rewards accounts that feed it clean data and correct structure. It punishes accounts that don&apos;t. Most agencies never tell you which one you have.
              </p>
              <p className="text-white font-semibold text-xl">
                The AI Scan shows you exactly which one you have — and exactly what it&apos;s costing you.
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
            <div className="p-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.04] mb-10">
              <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">The Reality</p>
              <p className="text-white text-2xl font-bold leading-relaxed">
                &ldquo;The budget isn&apos;t the problem. Where it&apos;s going is the problem.&rdquo;
              </p>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                After scanning over 40 active Google Ads accounts, the same pattern shows up every time. The accounts that are bleeding money aren&apos;t doing it because of bad luck or a competitive market. They&apos;re doing it because of structural problems the algorithm is exploiting — and no one on the agency side bothered to fix.
              </p>
              <p>
                A roofing contractor went from $180 per lead to $47 — not by increasing budget, but by stopping the bleed. A plumbing company recovered $2,200 a month on day one. An HVAC company tripled call volume without touching their spend.
              </p>
              <p className="text-white font-semibold text-xl">
                None of that required a bigger budget. It required knowing exactly where to look.
              </p>
              <p>
                The AI Scan is free because once you see what&apos;s actually happening in your account, the next step is obvious.
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
              What Happens After<br />
              <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">The AI Scan.</span>
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
                <div className="text-xl font-black text-cyan-400 mb-2 leading-tight">{r.metric}</div>
                <div className="text-xs text-gray-500 mb-3">{r.context}</div>
                <div className="text-sm text-gray-400 font-medium">{r.name}</div>
              </motion.div>
            ))}
          </div>
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
            <SectionLabel>What the AI Scan Covers</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Six Layers. One Session.<br />
              <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">Every Leak Found.</span>
            </h2>
            <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto">
              We run the scan live on your account — you see the data, the problems, and the exact priority order to fix them.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {checklistItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.07 }}
                className="flex gap-4 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] group hover:border-cyan-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                  <item.icon className="h-5 w-5 text-cyan-400" />
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
            {["Active account required", "30-minute session", "AI-powered analysis", "No fluff — just data"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs text-gray-400">
                <CheckCircle2 className="h-3 w-3 text-cyan-400 flex-shrink-0" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="email-capture" className="relative px-6 py-24 sm:py-32">
        <SectionDivider />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Every Day You Wait,<br />
            <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">The Budget Keeps Burning.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Book your free Google Ads AI Scan — we run it live on your account and show you exactly where the money is going and what to fix first.
          </p>
          <div className="max-w-sm mx-auto">
            <EmailCapture
              tag="google-ads-audit"
              ctaText="Get My Free AI Scan"
              accentClass="border-cyan-500/30 focus:border-cyan-500/60"
              btnClass="from-cyan-600 to-cyan-500"
            />
          </div>
          <p className="mt-6 text-xs text-gray-600">Free · Active Google Ads account required · US-based businesses only</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
