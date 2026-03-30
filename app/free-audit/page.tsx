"use client"

import { motion } from "framer-motion"
import { Search, XCircle, BarChart2, Target, Star, TrendingDown, CheckCircle2, MessageCircle } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider } from "@/components/landing/layout"
import EmailCapture from "@/components/email-capture"

const checklistItems = [
  { icon: Search, title: "Keyword Structure", desc: "Are you bidding on the right terms — or paying for traffic that will never convert?" },
  { icon: XCircle, title: "Negative Keywords", desc: "The single fastest way to stop bleeding budget. Most accounts have zero negative keywords." },
  { icon: BarChart2, title: "Conversion Tracking", desc: "If you can't measure a lead, you can't optimize for one. We check if your tracking is actually firing." },
  { icon: Target, title: "Bid Strategy", desc: "Manual CPC vs. Target CPA vs. Maximize Conversions — wrong choice here wastes thousands." },
  { icon: Star, title: "Quality Score", desc: "Low Quality Scores mean you're paying more per click than your competitors for the same position." },
  { icon: TrendingDown, title: "Ad Copy", desc: "Are your ads speaking to intent — or just listing features nobody cares about?" },
]

const results = [
  { metric: "Cost per lead: $180 → $47", context: "HVAC company, 6 weeks", name: "Southwest Cooling Co." },
  { metric: "$2,200/mo in wasted spend stopped", context: "Plumbing contractor, immediate", name: "ProFlow Plumbing" },
  { metric: "3 calls/month → 22 calls/month", context: "Roofing company, 60 days", name: "Summit Roofing" },
]

const WA_HREF = "https://wa.me/573103956445?text=I%20want%20my%20free%20Google%20Ads%20audit%20checklist"

export default function FreeAuditPage() {
  return (
    <LandingLayout
      accentColor="text-cyan-400"
      ctaText="Send Me the Free Checklist"
      ctaHref={WA_HREF}
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
            Free Google Ads Audit Checklist
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            Your Google Ads Are<br />
            <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">
              Bleeding Money Right Now.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Most local businesses waste{" "}
            <span className="text-white font-semibold">40–60% of their Google Ads budget</span>{" "}
            on 6 specific mistakes. This checklist shows you exactly which ones you&apos;re making — and how to fix them today.
          </p>

          <motion.a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold text-base hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all duration-300"
          >
            <MessageCircle className="h-5 w-5" />
            Send Me the Free Checklist
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
              I Used to Watch Good Businesses<br />
              <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">Throw Money Into a Black Hole.</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                When I worked at a digital marketing agency, I managed Google Ads for dozens of local businesses. Contractors, service companies, medical clinics. Most of them were spending $2,000–$8,000 a month on ads.
              </p>
              <p>
                And almost every single account had the same problems. Broad match keywords eating up 60% of the budget. Zero negative keywords. Conversion tracking not firing. A bidding strategy optimizing for the wrong thing. Ads written to impress the owner — not to get a click from someone with a problem.
              </p>
              <p>
                The frustrating part? These weren&apos;t obscure issues. They were the same six mistakes, account after account. And the business owners had no idea — because Google&apos;s dashboard makes everything look fine while the money quietly disappears.
              </p>
              <p className="text-white font-semibold text-xl">
                So I built a checklist. Fifteen minutes to diagnose any Google Ads account. Every time I ran it, I found money being wasted. Every single time.
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
              <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">The Realization</p>
              <p className="text-white text-2xl font-bold leading-relaxed">
                &ldquo;A business doesn&apos;t need a bigger ads budget. It needs to stop wasting the budget it already has.&rdquo;
              </p>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                After running this checklist on over 40 accounts, a pattern emerged. Fix these six things — in the right order — and cost per lead drops. Fast. Not over months. Within weeks.
              </p>
              <p>
                One roofing contractor went from $180 per lead to $47. Not because we spent more. Because we stopped paying for traffic that was never going to call. A plumbing company saved $2,200 a month on day one just by adding the right negative keywords.
              </p>
              <p className="text-white font-semibold text-xl">
                The checklist didn&apos;t require a bigger budget. It just required knowing where to look.
              </p>
              <p>
                I&apos;m giving it away free — because once you see what&apos;s happening in your account, you&apos;ll know exactly what needs to change. And if you want help fixing it, we can talk about that on WhatsApp too.
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
              What Happens After Running<br />
              <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">The 15-Minute Audit.</span>
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
            <SectionLabel>What You Get</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Six Areas. Fifteen Minutes.<br />
              <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">Every Wasted Dollar Found.</span>
            </h2>
            <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto">
              The checklist walks through each section of your account step by step. You don&apos;t need to be an expert — you just need to follow the questions.
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
            {["Delivered on WhatsApp", "15-minute audit", "Works any budget", "No login required"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs text-gray-400">
                <CheckCircle2 className="h-3 w-3 text-cyan-400 flex-shrink-0" />
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
            Every Day You Wait,<br />
            <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">The Budget Keeps Burning.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Drop your email and we&apos;ll send the checklist — then message us on WhatsApp to run it together on your account tonight.
          </p>
          <div className="max-w-sm mx-auto mb-8">
            <EmailCapture
              tag="google-ads-checklist"
              ctaText="Send Me the Free Checklist"
              accentClass="border-cyan-500/30 focus:border-cyan-500/60"
              btnClass="from-cyan-600 to-cyan-500"
            />
          </div>
          <div className="flex items-center gap-3 justify-center">
            <div className="h-px w-16 bg-white/[0.06]" />
            <span className="text-xs text-gray-600">or</span>
            <div className="h-px w-16 bg-white/[0.06]" />
          </div>
          <motion.a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 mt-4 h-12 px-8 rounded-full border border-cyan-500/30 text-cyan-400 font-bold text-sm hover:bg-cyan-500/10 transition-all duration-300"
          >
            <MessageCircle className="h-4 w-4" />
            Message on WhatsApp directly
          </motion.a>
          <p className="mt-4 text-xs text-gray-600">Free · Instant · No commitment</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
