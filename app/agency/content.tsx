"use client"

import { motion } from "framer-motion"
import { Users, BarChart3, Zap, Eye, TrendingUp, Shield, CheckCircle2, Calendar } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider } from "@/components/landing/layout"
import EmailCapture from "@/components/email-capture"

const whatYouLearn = [
  {
    icon: Eye,
    title: "The 6-Layer Diagnostic Framework",
    desc: "The exact checklist we run on every account — keyword bleed, negative gaps, conversion signal quality, bid strategy fit, Quality Score drag, and structural inefficiencies. You leave with a repeatable process.",
  },
  {
    icon: BarChart3,
    title: "How to Spot Waste Across Your Entire Portfolio",
    desc: "Most agencies check accounts one at a time. We'll show you how to identify the same 6 structural problems across 10, 20, or 50 accounts in a single session — and which ones to fix first for the fastest client wins.",
  },
  {
    icon: Zap,
    title: "The AI Bid Layer Most Agencies Skip",
    desc: "Smart Bidding works when you feed it clean data and the right structure. We'll show you exactly what that setup looks like — and why most agency-managed accounts are actively fighting the algorithm.",
  },
  {
    icon: TrendingUp,
    title: "How to Turn This Into a Client Retention System",
    desc: "When you can walk into a client call with an AI-generated structural report and a clear fix priority list, you stop being a vendor and start being indispensable. We'll show you how to position and present this.",
  },
  {
    icon: Shield,
    title: "Conversion Signal Quality at Scale",
    desc: "Bad tracking means the algorithm is learning from the wrong signals — across all your accounts. We'll cover how to audit and standardize conversion quality so Google's AI works for your clients, not against them.",
  },
  {
    icon: Users,
    title: "Live Q&A — Bring Your Worst Account",
    desc: "We'll spend time live on real accounts. If you have a client that's bleeding money and you can't figure out why, bring it. We'll diagnose it together in real time.",
  },
]

const whoThisIsFor = [
  "You run a Google Ads agency or manage 5+ client accounts under an MCC",
  "Your clients are spending real money but results have plateaued or declined",
  "You've inherited bad account structures and don't have a systematic way to fix them",
  "You want to differentiate from every other agency promising 'results'",
  "You're tired of monthly reports that can't explain why CPL keeps climbing",
]

const results = [
  { metric: "$2,200/mo in waste found", context: "Single account, first session", name: "ProFlow Plumbing" },
  { metric: "Cost per lead: $180 → $47", context: "HVAC company, 6 weeks", name: "Southwest Cooling Co." },
  { metric: "3 calls → 22 calls/month", context: "Roofing company, 60 days", name: "Summit Roofing" },
]

export default function AgencyContent() {
  return (
    <LandingLayout
      accentColor="text-violet-400"
      ctaText="Reserve My Spot"
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
            <Users className="h-3.5 w-3.5" />
            Free Masterclass for Agency Owners
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            Your Clients&apos; Accounts Are Bleeding.<br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
              You&apos;re Just Not Seeing It.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join the free Google Ads AI Masterclass built for agency owners —{" "}
            <span className="text-white font-semibold">and if you stay till the end, we&apos;ll run a full AI scan across your entire MCC live.</span>{" "}
            Every client account. Every structural problem. Found.
          </p>

          <motion.a
            href="#email-capture"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-violet-600 to-violet-500 text-white font-bold text-base hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Reserve My Spot
          </motion.a>

          <p className="mt-4 text-xs text-gray-600">Free · Live session · MCC access required to claim the bonus scan</p>
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
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-10 leading-tight">
              You&apos;re Managing the Accounts.<br />
              <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">But You&apos;re Not Managing the Algorithm.</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                You have the accounts. You have the MCC. You send monthly reports. But somewhere between the dashboards and the client calls, the same question keeps showing up: <span className="text-white font-semibold">why is the cost per lead still climbing?</span>
              </p>
              <p>
                The answer is almost never the budget. It&apos;s almost never the market. It&apos;s the structure — and it&apos;s the same 6 structural problems showing up across 80% of the accounts we scan. Keyword bleed on broad match. No negative keyword hygiene. Conversion tracking that&apos;s feeding the algorithm garbage. Smart Bidding running on accounts that don&apos;t have the conversion volume to support it.
              </p>
              <p>
                These aren&apos;t beginner mistakes. They&apos;re systematic problems that build up over time, invisible in standard reporting, and they compound. Every day the account runs with bad structure, Google&apos;s AI gets better at optimizing for the wrong outcome.
              </p>
              <p className="text-white font-semibold text-xl">
                The agencies that are winning right now have an AI layer over their entire portfolio that catches these problems before clients notice. Most agencies don&apos;t — and they&apos;re losing clients they should be keeping.
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
            <div className="p-8 rounded-2xl border border-violet-500/20 bg-violet-500/[0.04] mb-10">
              <p className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-3">The Shift</p>
              <p className="text-white text-2xl font-bold leading-relaxed">
                &ldquo;The agency that can walk into a client call with an AI-generated structural report has already won the conversation. The client never knew what they were missing.&rdquo;
              </p>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                After scanning over 40 active Google Ads accounts across different verticals, the pattern is consistent. The accounts performing well aren&apos;t the ones with the biggest budgets or the most experience — they&apos;re the ones running clean structure and feeding the algorithm correct conversion signals.
              </p>
              <p>
                What changed everything was being able to run this diagnostic at MCC level. Instead of auditing accounts one by one — which takes hours and misses systemic problems — an AI scan across the entire portfolio finds the same 6 failure patterns in minutes, ranked by how much each one is costing the client.
              </p>
              <p>
                The agency that can deliver this becomes impossible to replace.{" "}
                <span className="text-white font-semibold">You&apos;re not sending a traffic report. You&apos;re showing clients exactly where their money went and exactly what you fixed — with data.</span>
              </p>
              <p>
                That&apos;s what this masterclass teaches. And if you stay till the end, we&apos;ll run it live on your MCC so you see exactly what it surfaces in your own accounts.
              </p>
            </div>
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
            <SectionLabel>What You&apos;ll Learn</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              The Google Ads AI Blueprint<br />
              <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">For Agencies Managing at Scale.</span>
            </h2>
            <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto">
              A live session covering the exact framework we use to diagnose and fix account structure across an entire client portfolio.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 mb-16">
            {whatYouLearn.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.07 }}
                className="flex gap-4 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] group hover:border-violet-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-500/20 transition-colors">
                  <item.icon className="h-5 w-5 text-violet-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* BONUS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="relative p-8 sm:p-10 rounded-3xl border-2 border-violet-500/40 bg-violet-500/[0.04] text-center"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-violet-600 text-white text-xs font-bold uppercase tracking-widest whitespace-nowrap">
              Bonus — Stay Till the End
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-2 mb-4 leading-tight">
              Free MCC-Level AI Scan.<br />Live. On Your Actual Accounts.
            </h3>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-6">
              Attendees who stay for the full session get a live AI scan run across their entire MCC — every client account analyzed for the 6 structural failure patterns, ranked by cost impact. You walk away knowing exactly where to start and what to fix.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto">
              {["MCC access required", "All client accounts included", "Priority fix list delivered"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs text-gray-400">
                  <CheckCircle2 className="h-3 w-3 text-violet-400 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <SectionLabel>Who This Is For</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-10 leading-tight">
              This Is for Agencies That<br />
              <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">Already Know Google Ads.</span>
            </h2>

            <div className="space-y-3 mb-10">
              {whoThisIsFor.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: EASE, delay: i * 0.07 }}
                  className="flex items-start gap-3 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]"
                >
                  <CheckCircle2 className="h-4 w-4 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.01]">
              <p className="text-sm text-gray-500">
                <span className="text-white font-semibold">This is not for beginners.</span> If you&apos;re just getting started with Google Ads, this session will be over your head — and that&apos;s intentional. This is built for experienced operators who want to add an AI layer to what they already know works.
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
            <SectionLabel>What the AI Scan Finds</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Results From Accounts<br />
              <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">That Were &ldquo;Working Fine.&rdquo;</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-4">
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

      {/* REGISTER */}
      <section id="email-capture" className="relative px-6 py-24 sm:py-32">
        <SectionDivider />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-violet-500/25 bg-violet-500/8 text-violet-400 text-xs font-bold uppercase tracking-widest">
            <Calendar className="h-3.5 w-3.5" />
            Reserve Your Spot
          </div>

          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Your Clients Are Paying for Results.<br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">Give Them AI-Level Ones.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Register for the free Google Ads AI Masterclass for agency owners. Stay till the end and we scan your entire MCC — every account, every problem, live.
          </p>
          <div className="max-w-sm mx-auto">
            <EmailCapture
              tag="agency-masterclass"
              ctaText="Reserve My Spot"
              successText="You're registered. We'll send you the session details within 24 hours."
              accentClass="border-violet-500/30 focus:border-violet-500/60"
              btnClass="from-violet-600 to-violet-500"
            />
          </div>
          <p className="mt-6 text-xs text-gray-600">Free · Live session · MCC access required for the bonus scan</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
