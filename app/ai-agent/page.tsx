"use client"

import { motion } from "framer-motion"
import { Bot, MessageSquare, Globe, Zap, CalendarCheck, CheckCircle2, Users } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider } from "@/components/landing/layout"
import EmailCapture from "@/components/email-capture"

const deliverables = [
  { icon: Bot, title: "AI Agent Built for Your Business", desc: "Trained on your services, FAQs, pricing, and sales process. It answers exactly the way you would — every time." },
  { icon: MessageSquare, title: "WhatsApp + Website + Social", desc: "One agent deployed across every channel where your leads reach out. No message left unanswered." },
  { icon: Users, title: "Lead Qualification Flows", desc: "Asks your qualification questions automatically — filters time-wasters and surfaces real buyers before they ever reach you." },
  { icon: CalendarCheck, title: "Calendar Booking", desc: "Books appointments directly into your calendar. No back-and-forth, no missed calls, no manual scheduling." },
  { icon: Zap, title: "Follow-Up Sequences", desc: "Leads that don&apos;t book immediately get followed up automatically — so you capture deals that would have slipped through." },
  { icon: Globe, title: "24/7 Operation in EN + ES", desc: "Your agent never sleeps, never has a bad day, and can handle ten conversations simultaneously — in both English and Spanish." },
]

const results = [
  { name: "Apex Legal Group", result: "15 hrs/wk saved", timeframe: "on intake calls" },
  { name: "Clearwater Roofing", result: "0 missed leads", timeframe: "after hours or weekends" },
  { name: "Summit Home Services", result: "3x booked calls", timeframe: "in first 30 days" },
]

export default function AIAgentPage() {
  return (
    <LandingLayout
      accentColor="text-purple-400"
      ctaText="Build My AI Agent"
      ctaHref="https://wa.me/573103956445?text=I%20want%20an%20AI%20booking%20agent"
    >
      {/* HOOK */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.1),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/25 bg-purple-500/8 text-purple-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Bot className="h-3.5 w-3.5" />
            AI Booking Agent
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            What Happens to the Leads<br />That Come In{" "}
            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">
              When You&apos;re Busy Working?
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            The best leads — the ones ready to book — often reach out at the worst times: during a job, after hours, on weekends.
            If they don&apos;t get a response fast,{" "}
            <span className="text-white font-semibold">they call the next business on the list.</span>
          </p>

          <motion.a
            href="https://wa.me/573103956445?text=I%20want%20an%20AI%20booking%20agent"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold text-base hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-300"
          >
            Build My AI Agent
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
              Service Businesses Have<br />
              <span className="bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">a Timing Problem.</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Here&apos;s the brutal reality of running a service business: the moment a potential customer decides they need help is rarely a convenient moment for you. You&apos;re on a job. It&apos;s 9pm. It&apos;s Saturday. You&apos;re dealing with a crew issue.
              </p>
              <p>
                And that lead — the person who was ready to book right now — waited 20 minutes for a reply. Then they refreshed their search results and called the next business, who picked up immediately.
              </p>
              <p>
                This isn&apos;t a hypothetical. It&apos;s happening to your business every week. Studies consistently show that <span className="text-white font-semibold">78% of customers go with the first business that responds</span>. Speed is the entire game.
              </p>
              <p className="text-white font-semibold text-xl">
                Hiring someone to answer leads around the clock is expensive — and even then, humans miss messages, have bad days, and can&apos;t handle ten conversations at once. There had to be a better way.
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
            <div className="p-8 rounded-2xl border border-purple-500/20 bg-purple-500/[0.04] mb-10">
              <p className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-3">The Epiphany</p>
              <p className="text-white text-2xl font-bold leading-relaxed">
                &ldquo;An AI agent trained on your business can respond to any lead in under 60 seconds — qualify them, handle objections, book the appointment, and escalate to you only when a human is actually needed.&rdquo;
              </p>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                It&apos;s not a chatbot that says &ldquo;Thanks for reaching out, someone will be in touch.&rdquo; It&apos;s an agent that knows your services, your service area, your pricing range, your availability — and can carry an actual sales conversation from first message to booked appointment without you ever getting involved.
              </p>
              <p>
                It works on WhatsApp, your website, Instagram DMs, and Facebook Messenger simultaneously. When ten leads message you at 11pm on a Friday, all ten get a response within 60 seconds. All ten get qualified. The ones who are a fit get a booking link. The rest get nurtured until they&apos;re ready.
              </p>
              <p>
                A legal firm was spending 3 hours a day on initial intake calls. Seventy percent of callers weren&apos;t even qualified. Their AI agent now handles the entire intake process — asks about case type, timeline, and urgency. Only qualified prospects ever reach the attorney.
              </p>
              <p className="text-white font-semibold text-xl">
                They saved 15 hours a week. Their attorneys spend that time on billable work instead of screening calls.
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
              <span className="bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">Every Lead Gets a Response in 60 Seconds.</span>
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
                <div className="text-2xl font-black text-purple-400 mb-1">{r.result}</div>
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
              &ldquo;I used to dread Mondays because I&apos;d have a pile of messages I missed over the weekend. Now every message gets handled while I&apos;m focused on the job. I haven&apos;t lost a weekend lead since we turned it on.&rdquo;
            </p>
            <p className="text-purple-400 font-bold text-sm">— Carlos M., Residential Contractor</p>
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
              A Complete AI Agent That Works<br />
              <span className="bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">So You Don&apos;t Have To.</span>
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
                className="flex gap-4 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] group hover:border-purple-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 transition-colors">
                  <d.icon className="h-5 w-5 text-purple-400" />
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
            {["Live in 48 hours", "Monthly optimization", "No setup fees", "No contracts"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs text-gray-400">
                <CheckCircle2 className="h-3 w-3 text-purple-400 flex-shrink-0" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="relative px-6 py-20 sm:py-24">
        <SectionDivider />
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-3">Free Bot Demo</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
            See Exactly How an AI Agent<br />Would Handle Your Next Lead
          </h2>
          <p className="text-gray-400 mb-8">
            Drop your email and we&apos;ll show you a live demo customized to your business — what it says, how it qualifies, and how it books.
          </p>
          <EmailCapture tag="whatsapp-demo" ctaText="Show Me the AI Agent Demo" accentClass="border-purple-500/30 focus:border-purple-500/60" btnClass="from-purple-600 to-purple-500" />
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
            The Next Lead That Comes In<br />While You&apos;re on the Job —<br />
            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">Will It Get a Response?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-3 max-w-xl mx-auto">
            Message us on WhatsApp. We&apos;ll map out exactly how an AI agent would work for your specific business and show you what it would have captured last week.
          </p>
          <p className="text-gray-600 text-sm mb-10">2 minutes. No obligation. Real answers.</p>
          <motion.a
            href="https://wa.me/573103956445?text=I%20want%20an%20AI%20booking%20agent"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold text-base hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] transition-all duration-300"
          >
            Build My AI Agent
          </motion.a>
          <p className="mt-4 text-xs text-gray-600">No contracts · Live in 48 hours · EN + ES included</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
