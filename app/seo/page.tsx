"use client"

import { motion } from "framer-motion"
import { MapPin, Star, Building2, Phone, BarChart3, CheckCircle2 } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider } from "@/components/landing/layout"
import EmailCapture from "@/components/email-capture"

const deliverables = [
  { icon: Building2, title: "Full GMB Optimization", desc: "Every section of your Google Business Profile configured to signal authority — categories, services, attributes, Q&A, and more." },
  { icon: MapPin, title: "Daily Posts & Photo Updates", desc: "Google rewards activity. We post daily updates and fresh photos to your profile, keeping the algorithm engaged every single day." },
  { icon: Star, title: "Review Generation & Management", desc: "Automated campaigns that turn happy customers into 5-star reviews — and a response system that handles every review professionally." },
  { icon: Phone, title: "Local Citation Building", desc: "Your business name, address, and phone number listed consistently across every major directory Google uses to verify local authority." },
  { icon: BarChart3, title: "Local Keyword Optimization", desc: "Research into the exact search terms your local customers type — and optimization of every part of your profile around those terms." },
  { icon: CheckCircle2, title: "Monthly Rankings Report", desc: "A clear view of where you stand in the Local Pack, which keywords moved, and the exact actions taken that month to keep climbing." },
]

const results = [
  { name: "Metro Plumbing Co.", result: "Position 4 → Position 2", timeframe: "in 90 days" },
  { name: "Bright HVAC Services", result: "Calls: 8/wk → 31/wk", timeframe: "from Maps alone" },
  { name: "Premier Roofing Group", result: "Top 3 on Google Maps", timeframe: "in 74 days" },
]

export default function SeoPage() {
  return (
    <LandingLayout
      accentColor="text-blue-400"
      ctaText="Get Into the Top 3 on Google Maps"
      ctaHref="https://wa.me/573103956445?text=I%20want%20to%20rank%20on%20Google%20Maps"
    >
      {/* HOOK */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/8 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
            <MapPin className="h-3.5 w-3.5" />
            Google Maps Local SEO
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            There Are Only 3 Spots<br />on Google Maps.{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Here&apos;s How to Make Sure One of Them Is Yours.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            The Local Pack gets 70% of all clicks for local searches. Most businesses never think about it —
            they think SEO means their website.{" "}
            <span className="text-white font-semibold">Meanwhile, someone else is taking all the calls.</span>
          </p>

          <motion.a
            href="#email-capture"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-base hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-300"
          >
            Get Into the Top 3 on Google Maps
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
              Most Businesses Think &ldquo;SEO&rdquo; Means<br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Their Website. It Doesn&apos;t.</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                When most local business owners hear &ldquo;SEO,&rdquo; they think about their website. They invest in redesigns, new copy, maybe a blog. Then they wonder why the phone still isn&apos;t ringing.
              </p>
              <p>
                What they&apos;re missing: when someone searches for a plumber, a roofer, or a dentist near them, they don&apos;t scroll past the map. They see three businesses pinned at the top — the Local Pack — and they call one of those three. Everything below the map barely gets noticed.
              </p>
              <p>
                The Google Maps Local Pack captures <span className="text-white font-semibold">70% of all clicks</span> for local searches. The business in position 1 on the map gets more calls than the next five organic results combined.
              </p>
              <p className="text-white font-semibold text-xl">
                Most businesses set up their Google Business Profile once and completely forget about it. Meanwhile, someone else is quietly claiming all three spots — and taking every call that could have been theirs.
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
            <div className="p-8 rounded-2xl border border-blue-500/20 bg-blue-500/[0.04] mb-10">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">The Epiphany</p>
              <p className="text-white text-2xl font-bold leading-relaxed">
                &ldquo;Google Business is a living algorithm. It rewards businesses that treat it like a social media platform — daily posts, fresh photos, responding to reviews, updating services.&rdquo;
              </p>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Getting into the top 3 isn&apos;t magic. But it requires daily action that most business owners simply don&apos;t have time for: new posts, photo uploads, review responses, consistent NAP data across hundreds of directories, local keyword updates.
              </p>
              <p>
                The businesses sitting in the Local Pack? They&apos;re either doing all of this every single day — or they have a system doing it for them. There is no other explanation. Google Maps rewards consistency above everything else.
              </p>
              <p>
                Layer in a review velocity strategy — generating new 5-star reviews at a natural, steady pace — and local citation building to lock down your business information across the web, and the algorithm has no choice but to surface your business ahead of competitors who are doing nothing.
              </p>
              <p className="text-white font-semibold text-xl">
                Ranking in the top 3 within 90 days isn&apos;t a promise. It&apos;s a process. And it&apos;s completely repeatable.
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
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">The Algorithm Works for You.</span>
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
                <div className="text-2xl font-black text-blue-400 mb-1">{r.result}</div>
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
              &ldquo;I was stuck at position 4 for two years. I thought that was just where I was going to stay. 90 days later my phone doesn&apos;t stop. The process is exactly what they said it would be.&rdquo;
            </p>
            <p className="text-blue-400 font-bold text-sm">— David R., Licensed Plumber</p>
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
              Everything Required to Own<br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Your Spot in the Local Pack.</span>
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
                className="flex gap-4 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] group hover:border-blue-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                  <d.icon className="h-5 w-5 text-blue-400" />
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
            {["Competitor analysis", "NAP consistency audit", "90-day roadmap", "EN + ES support"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs text-gray-400">
                <CheckCircle2 className="h-3 w-3 text-blue-400 flex-shrink-0" />
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
          <p className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-3">Free 90-Day Roadmap</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
            The Plan That Takes a Local Business<br />From 5 Leads to 50
          </h2>
          <p className="text-gray-400 mb-8">
            Month-by-month system: Google Maps → Google Ads → WhatsApp → Meta. Stop guessing, start with a proven system.
          </p>
          <EmailCapture tag="seo" ctaText="Book My Free SEO Consultation" accentClass="border-blue-500/30 focus:border-blue-500/60" btnClass="from-blue-600 to-blue-500" />
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
            Someone in Your Market<br />Is Going to Own That Spot.<br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">It Should Be You.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Enter your email and we&apos;ll check where you currently rank on Google Maps — free — and show you exactly what it takes to reach the top 3.
          </p>
          <a
            href="#email-capture"
            className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-base hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] transition-all duration-300"
          >
            Book My Free SEO Consultation
          </a>
          <p className="mt-4 text-xs text-gray-600">No contracts · No setup fees · EN + ES included</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
