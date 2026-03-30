"use client"

import { motion } from "framer-motion"
import { MessageCircle, Clock, Users, CalendarCheck, Globe, CheckCircle2 } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider } from "@/components/landing/layout"
import EmailCapture from "@/components/email-capture"

const deliverables = [
  { icon: Clock, title: "Instant Response, 24/7", desc: "Every message gets answered in under 60 seconds — at 2am, on weekends, during your busiest job. No lead waits, no lead leaves." },
  { icon: Users, title: "Smart Lead Qualification", desc: "The bot asks your pre-screening questions automatically, filters time-wasters, and only surfaces serious buyers to you." },
  { icon: CalendarCheck, title: "Calendar Integration & Booking", desc: "Connects directly to Google Calendar, Calendly, or Acuity. Prospects book confirmed appointments without ever talking to you first." },
  { icon: MessageCircle, title: "Automated Follow-Up Sequences", desc: "Leads who don't respond get gentle nudges on autopilot. Nothing falls through the cracks while you're on the job." },
  { icon: Globe, title: "English + Spanish", desc: "The bot detects the language your customer writes in and responds accordingly. No setup needed from you." },
  { icon: MessageCircle, title: "Built on WhatsApp Cloud API", desc: "The same infrastructure WhatsApp uses internally. Verified business account, green checkmark, no limitations on volume." },
]

const results = [
  { name: "HVAC Contractor", result: "7 booked appointments", timeframe: "first week, outside business hours" },
  { name: "Real Estate Agency", result: "60% fewer missed leads", timeframe: "in the first 30 days" },
  { name: "Legal Consultation Firm", result: "Under 60 sec reply time", timeframe: "around the clock" },
]

export default function WhatsAppPage() {
  return (
    <LandingLayout
      accentColor="text-green-400"
      ctaText="Get My WhatsApp Bot"
      ctaHref="https://wa.me/573103956445?text=I%20want%20a%20WhatsApp%20chatbot"
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
            WhatsApp Automation — Cloud API
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            A Lead Came In at 2:17am.<br />The Business Replied at 9am.<br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              The Customer Had Already Booked Someone Else.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            WhatsApp has a 98% open rate. Your customers are already there. The only question is whether{" "}
            <span className="text-white font-semibold">someone answers them in 60 seconds — or in 7 hours.</span>
          </p>

          <motion.a
            href="#email-capture"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-green-600 to-green-500 text-white font-bold text-base hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] transition-all duration-300"
          >
            Book My Free Bot Consultation
          </motion.a>

          <p className="mt-4 text-xs text-gray-600">Free · No obligation · Takes 30 seconds</p>
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
              Great Business. Slow Reply.<br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">Gone Customer.</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Service businesses run during business hours. Leads don&apos;t. I kept seeing the same pattern over and over while working with service businesses — an owner with years of experience, great reviews, a real reputation in their market. And a WhatsApp inbox full of messages they hadn&apos;t gotten to yet.
              </p>
              <p>
                The messages weren&apos;t from people browsing. They were from people ready to hire. &ldquo;How much would it cost to fix my AC?&rdquo; &ldquo;Do you have availability this week?&rdquo; &ldquo;I need someone today.&rdquo; Sent at 8pm. At midnight. On Saturday morning. While the owner was on a job, or asleep, or simply living their life.
              </p>
              <p>
                By the time they replied — three hours later, six hours later — the customer had already found someone else. Not because the competitor was better. Just because <span className="text-white font-semibold">they answered first.</span>
              </p>
              <p className="text-white font-semibold text-xl">
                WhatsApp is the number one channel customers use to ask about services. It has a 98% open rate. But it requires instant replies to convert. No human team can do that 24/7.
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
            <div className="p-8 rounded-2xl border border-green-500/20 bg-green-500/[0.04] mb-10">
              <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-3">The Epiphany</p>
              <p className="text-white text-2xl font-bold leading-relaxed">
                &ldquo;WhatsApp Cloud API allows full automation — a bot that responds in under 60 seconds, asks qualifying questions, filters time-wasters, and books appointments. Built on the same infrastructure WhatsApp itself uses.&rdquo;
              </p>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                The WhatsApp Cloud API isn&apos;t a third-party workaround or a gray-area tool. It&apos;s Meta&apos;s official business infrastructure — the same backbone that powers WhatsApp itself. And it allows you to build a fully automated assistant that lives inside your existing WhatsApp number.
              </p>
              <p>
                A message comes in at 2am. The bot responds in under a minute. It asks the right questions — what service they need, where they&apos;re located, when they want to be seen. It filters out the price-shoppers and spam. It books confirmed appointments directly into your calendar. And it follows up automatically with leads who didn&apos;t convert the first time.
              </p>
              <p className="text-white font-semibold text-xl">
                One HVAC client was missing more than sixty percent of his leads because he was on the roof when they messaged. The bot went live on a Monday. By Friday, he had seven booked appointments from messages that had come in outside business hours — leads he would have lost completely the week before.
              </p>
              <p>
                His business didn&apos;t change. His pricing didn&apos;t change. His availability didn&apos;t change. <span className="text-white font-semibold">The only thing that changed was that someone was finally answering.</span>
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
              What Happens When Every Message<br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">Gets Answered in Under 60 Seconds.</span>
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
              &ldquo;I used to lose jobs every week just because I was busy when someone messaged. Now the bot handles it and I just show up to the appointments. It paid for itself in the first week.&rdquo;
            </p>
            <p className="text-green-400 font-bold text-sm">— Carlos M., HVAC Contractor</p>
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
            <SectionLabel>What You Get</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              A Bot That Works While You Work —<br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">And While You Sleep.</span>
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
                className="flex gap-4 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] group hover:border-green-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                  <d.icon className="h-5 w-5 text-green-400" />
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
            {["WhatsApp Cloud API", "Lead qualification", "EN + ES", "24/7 response"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs text-gray-400">
                <CheckCircle2 className="h-3 w-3 text-green-400 flex-shrink-0" />
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
          <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-3">Free Live Bot Demo</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
            Watch a Bot Book a $4,000 Job<br />While the Owner Was Sleeping
          </h2>
          <p className="text-gray-400 mb-8">
            Drop your email and we&apos;ll set up a custom demo for your business — you&apos;ll see exactly what your customers would experience.
          </p>
          <EmailCapture tag="whatsapp-bot" ctaText="Book My Free Bot Consultation" accentClass="border-green-500/30 focus:border-green-500/60" btnClass="from-green-600 to-green-500" />
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
            Your Next Customer Is Messaging You<br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">Right Now. Are You Answering?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Enter your email and we&apos;ll set up a free demo showing exactly how the bot would work for your specific business — what it says, how it qualifies, how it books.
          </p>
          <a
            href="#email-capture"
            className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-green-600 to-green-500 text-white font-bold text-base hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] transition-all duration-300"
          >
            Book My Free Bot Consultation
          </a>
          <p className="mt-4 text-xs text-gray-600">No contracts · WhatsApp Cloud API · EN + ES</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
