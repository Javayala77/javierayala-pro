"use client"

import { motion } from "framer-motion"
import { MessageCircle, Zap, UserCheck, CalendarCheck, Bell, ArrowUpRight, CheckCircle2 } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider } from "@/components/landing/layout"
import EmailCapture from "@/components/email-capture"

const demoFeatures = [
  { icon: Zap, title: "Instant Response", desc: "The bot replies in under 60 seconds — any time of day, any day of the week. No human required." },
  { icon: UserCheck, title: "Smart Qualification", desc: "It asks the right questions to qualify the lead before you ever get involved. You only hear from serious buyers." },
  { icon: CalendarCheck, title: "Booking Link Delivered", desc: "Qualified leads get a direct booking link in the conversation. They book while the iron is hot." },
  { icon: ArrowUpRight, title: "Follow-Up Sequence", desc: "If they don't book, the bot follows up automatically at 1 hour, 24 hours, and 72 hours." },
  { icon: Bell, title: "Escalation to Human", desc: "When a lead needs a real person, the bot flags it and notifies you instantly — with full conversation context." },
]

const results = [
  { name: "Garcia Plumbing", result: "11 after-hours bookings", timeframe: "in the first month" },
  { name: "Apex HVAC", result: "3 jobs booked overnight", timeframe: "while owner slept" },
  { name: "Ridgeline Electrical", result: "$6,200 job closed", timeframe: "from a single bot reply" },
]

export default function WhatsAppDemoPage() {
  return (
    <LandingLayout
      accentColor="text-green-400"
      ctaText="Show Me the Demo"
      ctaHref="https://wa.me/573103956445?text=I%20want%20to%20see%20the%20WhatsApp%20bot%20demo"
    >
      {/* HOOK */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.1),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-green-500/25 bg-green-500/8 text-green-400 text-xs font-bold uppercase tracking-widest mb-8">
            <MessageCircle className="h-3.5 w-3.5" />
            Free Live Bot Demo
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            Watch a Bot Book a $4,000 Job<br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              While the Owner Was Sleeping.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            It&apos;s 2am. A homeowner has an emergency. He messages 3 businesses. One bot responds in 40 seconds, qualifies him, and sends a booking link.{" "}
            <span className="text-white font-semibold">The other two reply at 8am. The first business got the job.</span>
          </p>

          <motion.a
            href="https://wa.me/573103956445?text=I%20want%20to%20see%20the%20WhatsApp%20bot%20demo"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-green-600 to-green-500 text-white font-bold text-base hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] transition-all duration-300"
          >
            <MessageCircle className="h-4 w-4" />
            Show Me the Demo
          </motion.a>

          <p className="mt-4 text-xs text-gray-600">Free · No commitment · Experience it live on WhatsApp</p>
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
              Carlos Had a Thriving HVAC Business.<br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">He Was Still Losing Jobs Every Night.</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Carlos ran a solid HVAC operation. Good reviews. Fair prices. A team he trusted. But every Monday morning, he&apos;d check his messages and find the same pattern: 3, sometimes 5 WhatsApp inquiries from the weekend — all already cold.
              </p>
              <p>
                &ldquo;Sorry, we went with someone else.&rdquo; That was the message waiting for him. Not because Carlos was slow. Because after-hours, <span className="text-white font-semibold">he was invisible</span>. The customer had a broken AC at 11pm. They messaged three businesses. Whoever replied first won.
              </p>
              <p>
                Carlos was never first. He was asleep.
              </p>
              <p className="text-white font-semibold text-xl">
                He wasn&apos;t losing to a better HVAC company. He was losing to whoever had a faster phone.
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
            <div className="p-8 rounded-2xl border border-green-500/20 bg-green-500/[0.04] mb-10">
              <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-3">The Epiphany</p>
              <p className="text-white text-2xl font-bold leading-relaxed">
                &ldquo;It&apos;s not about being available. It&apos;s about automating availability.&rdquo;
              </p>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                We installed a WhatsApp bot for Carlos on a Wednesday. It was set up to respond instantly, ask three qualification questions, and send a booking link to anyone who said yes.
              </p>
              <p>
                Thursday night, a homeowner messaged at 1:47am. The bot replied in 38 seconds. Asked if the AC was completely down or just not cooling. Asked the square footage. Sent a booking link.
              </p>
              <p>
                The homeowner booked a 7am appointment. Then fell asleep.
              </p>
              <p>
                Carlos woke up Friday morning to a booked job he never knew about — and two more from the same night. <span className="text-white font-semibold">$4,200 in revenue from 8 hours of sleep.</span>
              </p>
              <p>
                The bot didn&apos;t replace Carlos. It made sure Carlos was always &ldquo;available&rdquo; — even when he wasn&apos;t. <span className="text-white font-semibold">That&apos;s not a technology advantage anymore. That&apos;s the minimum cost of competing for after-hours leads.</span>
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
              What Happens the First Month<br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">When the Bot Goes Live.</span>
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
                <div className="text-2xl font-black text-green-400 mb-1">{r.result}</div>
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
              &ldquo;I almost didn&apos;t believe the notification when I woke up. Three booked jobs. Overnight. The bot handled everything — I just showed up to work.&rdquo;
            </p>
            <p className="text-green-400 font-bold text-sm">— Carlos M., HVAC Contractor</p>
          </motion.div>
        </div>
      </section>

      {/* OFFER — The Demo */}
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
            <SectionLabel>The Demo</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Message This Number Right Now<br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">and Experience It Yourself.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
              You&apos;ll talk to a live demo bot. It will qualify you as a lead, walk you through the conversation flow, and show you the booking sequence — exactly what your customers would experience.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {demoFeatures.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.07 }}
                className="flex gap-4 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] group hover:border-green-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                  <f.icon className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{f.title}</h3>
                  <p className="text-sm text-gray-500">{f.desc}</p>
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
            {["Works 24/7", "Zero setup for demo", "Bilingual ready", "No app needed"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs text-gray-400">
                <CheckCircle2 className="h-3 w-3 text-green-400 flex-shrink-0" />
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
            Right Now, a Lead Is Messaging<br />Your Competitor&apos;s Bot.<br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">Where&apos;s Yours?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Drop your email and we&apos;ll set up a custom demo for your business — or message WhatsApp to experience the live bot right now.
          </p>
          <div className="max-w-sm mx-auto mb-8">
            <EmailCapture tag="whatsapp-demo" ctaText="Show Me the Demo" accentClass="border-green-500/30 focus:border-green-500/60" btnClass="from-green-600 to-green-500" />
          </div>
          <div className="flex items-center gap-3 justify-center">
            <div className="h-px w-16 bg-white/[0.06]" /><span className="text-xs text-gray-600">or</span><div className="h-px w-16 bg-white/[0.06]" />
          </div>
          <motion.a href="https://wa.me/573103956445?text=I%20want%20to%20see%20the%20WhatsApp%20bot%20demo" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center justify-center gap-2 mt-4 h-12 px-8 rounded-full border border-green-500/30 text-green-400 font-bold text-sm hover:bg-green-500/10 transition-all duration-300">
            <MessageCircle className="h-4 w-4" />Message on WhatsApp directly
          </motion.a>
          <p className="mt-4 text-xs text-gray-600">Free · No obligation · Experience the bot live</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
