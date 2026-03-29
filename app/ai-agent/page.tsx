"use client"

import { motion } from "framer-motion"
import { Bot, Clock, MessageSquare, Globe, Zap, Check, ChevronDown } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider, FaqAccordion, PricingCard } from "@/components/landing/layout"

const steps = [
  { n: "01", title: "You send us your business info", desc: "Services, FAQs, pricing, your calendar link. Takes 20 minutes." },
  { n: "02", title: "We train your AI agent", desc: "Custom-built for your business. Knows your services, speaks your language, follows your sales process." },
  { n: "03", title: "We connect it everywhere", desc: "WhatsApp, your website, Instagram DMs, Facebook. One agent, all channels." },
  { n: "04", title: "It works. You get notified", desc: "Every time a booking is made or a lead is qualified, you get a notification. No manual work." },
]

const capabilities = [
  { icon: MessageSquare, title: "Answers instantly", desc: "Responds in under 60 seconds, 24/7. No more 'sorry I missed your message'." },
  { icon: Bot, title: "Qualifies leads", desc: "Asks the right questions to filter time-wasters from real buyers." },
  { icon: Clock, title: "Books appointments", desc: "Syncs with your calendar and books slots automatically." },
  { icon: Globe, title: "English + Spanish", desc: "Serves every customer in their language without you lifting a finger." },
]

const faq = [
  { q: "Do I need to be technical to set this up?", a: "No. We handle everything — setup, training, and integration. You just answer a few questions about your business and we do the rest." },
  { q: "What if the AI says something wrong?", a: "We train it specifically on your business and run test scenarios before going live. You also get a dashboard to review conversations and we make adjustments at no cost." },
  { q: "Which platforms does it work on?", a: "WhatsApp, your website (chat widget), Instagram DMs, Facebook Messenger, and SMS. We'll set up the ones that matter most to you." },
  { q: "How long until it's live?", a: "48 hours after you send us your business information. Most clients are up and running by day 3." },
  { q: "Can I cancel anytime?", a: "Yes. No contracts, no cancellation fees. Month-to-month." },
  { q: "What if I already have a booking system?", a: "We connect the AI to whatever you're already using — Calendly, Acuity, Google Calendar, or custom systems." },
]

export default function AIAgentPage() {
  return (
    <LandingLayout
      accentColor="text-violet-400"
      ctaText="Get My AI Agent"
      ctaHref="https://wa.me/573103956445?text=I%20want%20the%20AI%20Booking%20Agent"
    >
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.12),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/25 bg-violet-500/8 text-violet-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Bot className="h-3.5 w-3.5" />
            AutoBook Pro — AI Booking Agent
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            How Many Leads Are<br />
            You Losing{" "}
            <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
              While You Sleep?
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Your competitors are booking jobs at 3am. Not because they work harder — because they have an
            <span className="text-white font-semibold"> AI that never sleeps</span>. You can too.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.a
              href="https://wa.me/573103956445?text=I%20want%20the%20AI%20Booking%20Agent"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-gradient-to-r from-violet-600 to-violet-500 text-white font-bold text-base hover:shadow-[0_0_40px_rgba(124,58,237,0.4)] transition-all duration-300"
            >
              Get My AI Agent — $497/mo
            </motion.a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {[
              { icon: Zap, label: "Live in 48 hours" },
              { icon: Clock, label: "24/7 availability" },
              { icon: MessageSquare, label: "WhatsApp + Web" },
              { icon: Globe, label: "EN + ES" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs text-gray-400">
                <item.icon className="h-3.5 w-3.5 text-violet-400 flex-shrink-0" />
                {item.label}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Problem */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              A Lead That Doesn&apos;t Get a Response<br />
              <span className="text-gray-500 italic font-light">in 5 Minutes</span> Goes to Your Competitor.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
              Studies show 78% of customers go with the first business that responds. If you&apos;re not responding instantly — every hour of every day — you&apos;re handing jobs to someone else.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="mt-12 grid sm:grid-cols-3 gap-4"
          >
            {[
              { stat: "78%", label: "Customers go with the first business that responds" },
              { stat: "5 min", label: "Is the window before a lead goes cold" },
              { stat: "0%", label: "Of your competitors sleep less than you" },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <div className="text-4xl font-black text-violet-400 mb-2">{item.stat}</div>
                <p className="text-sm text-gray-500">{item.label}</p>
              </div>
            ))}
          </motion.div>
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
              Live in{" "}
              <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
                48 Hours.
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
                className="flex gap-5 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-violet-500/30 transition-all duration-300 group"
              >
                <span className="text-2xl font-black text-violet-500/20 group-hover:text-violet-500/40 transition-colors flex-shrink-0">{step.n}</span>
                <div>
                  <h3 className="font-bold text-white mb-1.5">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
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
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              It Doesn&apos;t Just Chat.<br />
              <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">It Converts.</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.07 }}
                className="flex gap-4 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] group hover:border-violet-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-500/20 transition-colors">
                  <cap.icon className="h-5 w-5 text-violet-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{cap.title}</h3>
                  <p className="text-sm text-gray-500">{cap.desc}</p>
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
            <h2 className="text-4xl font-black text-white mb-4">One Price. Zero Confusion.</h2>
            <p className="text-gray-500 mb-12">One missed $500 job pays for your first month. How many are you missing?</p>
            <PricingCard
              badge="AI Booking Agent"
              price="$497"
              period="/mo"
              items={["AI agent built for your business","Trained on your services","Connected to your calendar","WhatsApp + website + social","English + Spanish","Appointment reminders","Lead qualification","24/7 availability","Monthly report","No contracts","Cancel anytime","Setup in 48 hours"]}
              ctaText="Get My AI Agent"
              ctaHref="https://wa.me/573103956445?text=I%20want%20the%20AI%20Booking%20Agent"
              accentClass="border-violet-500"
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
            Stop Losing Leads<br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">While You Sleep.</span>
          </h2>
          <p className="text-gray-500 text-lg mb-10">Your AI agent can be live in 48 hours. Message Javier to get started.</p>
          <motion.a
            href="https://wa.me/573103956445?text=I%20want%20the%20AI%20Booking%20Agent"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-violet-600 to-violet-500 text-white font-bold text-base hover:shadow-[0_0_50px_rgba(124,58,237,0.5)] transition-all duration-300"
          >
            Get My AI Agent — $497/mo
          </motion.a>
          <p className="mt-4 text-xs text-gray-600">No contracts · Cancel anytime · Live in 48 hours</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
