"use client"

import { motion } from "framer-motion"
import { MessageCircle, Zap, Clock, Globe, Users, Check } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider, FaqAccordion, PricingCard } from "@/components/landing/layout"

const steps = [
  { n: "01", title: "WhatsApp Business API setup", desc: "We connect your number to the WhatsApp Cloud API. Verified business account, green checkmark, no limitations." },
  { n: "02", title: "Bot built for your business", desc: "Custom conversation flows trained on your services, pricing, FAQs, and sales process. Speaks your language." },
  { n: "03", title: "Lead qualification automated", desc: "The bot asks the right questions, filters time-wasters, and only escalates serious buyers to you." },
  { n: "04", title: "Goes live. Works 24/7.", desc: "Instantly responds to every message. Books appointments. Follows up. You get notified when human action is needed." },
]

const capabilities = [
  { icon: Clock, title: "Instant response, 24/7", desc: "No more 'I'll reply tomorrow'. Every lead gets a response in under 60 seconds, any time of day." },
  { icon: Users, title: "Smart lead qualification", desc: "Asks your pre-screening questions automatically. Only warm, qualified leads reach you." },
  { icon: MessageCircle, title: "Automated follow-up sequences", desc: "Prospects who don't respond get gentle nudges on autopilot. No more leads falling through the cracks." },
  { icon: Globe, title: "English + Spanish", desc: "Serves customers in both languages automatically based on how they write to you." },
  { icon: Zap, title: "Meta Ads integration", desc: "Run Click-to-WhatsApp ads that open directly in a chat. Highest-converting format for service businesses." },
  { icon: Check, title: "No extra app needed", desc: "Customers chat on WhatsApp — the app they already use. Zero friction for them." },
]

const faq = [
  { q: "Do I need a new phone number?", a: "No. We can use your existing WhatsApp Business number. We'll migrate it to the API so the bot can respond automatically while you keep the same number." },
  { q: "What's the difference between WhatsApp Business and WhatsApp Cloud API?", a: "WhatsApp Business (the free app) can only be used manually. The WhatsApp Cloud API (what we use) allows automation — bots, auto-replies, flows, and integrations. Much more powerful." },
  { q: "Will it sound robotic?", a: "No. We write the conversation flows to match your tone and brand. Most customers don't realize they're talking to a bot — and many don't care because they get answered instantly." },
  { q: "Can it book appointments directly?", a: "Yes. We integrate it with your calendar (Google Calendar, Calendly, Acuity, etc.) to book confirmed appointments automatically." },
  { q: "What industries does this work best for?", a: "Any service business with inbound inquiries: HVAC, plumbing, legal, medical, real estate, coaching, agencies. If people message you asking about prices or availability, the bot pays for itself immediately." },
  { q: "Is there a setup fee?", a: "No. The $397/mo covers everything — setup, training, launch, and ongoing management." },
]

export default function WhatsAppPage() {
  return (
    <LandingLayout
      accentColor="text-green-400"
      ctaText="Get My WhatsApp Bot"
      ctaHref="https://wa.me/573103956445?text=I%20want%20a%20WhatsApp%20chatbot"
    >
      {/* Hero */}
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
            WhatsApp Chatbot — Cloud API Automation
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            Turn Every WhatsApp<br />Message Into a<br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              Booked Appointment.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            WhatsApp is where your customers already are. A bot built on the WhatsApp Cloud API responds instantly, qualifies leads, and books appointments —
            <span className="text-white font-semibold"> without you touching your phone.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.a
              href="https://wa.me/573103956445?text=I%20want%20a%20WhatsApp%20chatbot"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold text-base hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] transition-all duration-300"
            >
              Get My WhatsApp Bot — $397/mo
            </motion.a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {["WhatsApp Cloud API","24/7 auto-response","Lead qualification","EN + ES"].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs text-gray-400">
                <Check className="h-3 w-3 text-green-400 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Problem */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: EASE }}>
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              You&apos;re Losing Customers<br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">Between the Message and the Reply.</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              WhatsApp is the first channel customers go to. But when you&apos;re busy working, those messages wait. By the time you reply, they&apos;ve already booked with someone else.
            </p>
          </motion.div>
          <div className="mt-12 grid sm:grid-cols-3 gap-4">
            {[
              { stat: "2B+", label: "WhatsApp active users worldwide — the most used messaging app on the planet" },
              { stat: "98%", label: "Of WhatsApp messages are opened — vs. 20% for email" },
              { stat: "60 sec", label: "Is all the time you have to respond before a lead goes to your competitor" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <div className="text-4xl font-black text-green-400 mb-2">{item.stat}</div>
                <p className="text-sm text-gray-500">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: EASE }} className="text-center mb-16">
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Built on WhatsApp Cloud API.{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">Runs 24/7.</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }} className="flex gap-5 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-green-500/30 transition-all group">
                <span className="text-2xl font-black text-green-500/20 group-hover:text-green-500/40 transition-colors flex-shrink-0">{step.n}</span>
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
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: EASE }} className="text-center mb-16">
            <SectionLabel>What It Does</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white">More Than a Chatbot.<br /><span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">A Sales Machine.</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE, delay: i * 0.06 }} className="flex gap-4 p-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] group hover:border-green-500/30 transition-all">
                <div className="w-9 h-9 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                  <cap.icon className="h-4 w-4 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">{cap.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{cap.desc}</p>
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
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: EASE }}>
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="text-4xl font-black text-white mb-4">Everything Included.</h2>
            <p className="text-gray-500 mb-12">No setup fee. No extra charges. One missed job pays for 6+ months of the bot.</p>
            <PricingCard
              badge="WhatsApp Bot"
              price="$397"
              period="/mo"
              items={["WhatsApp Cloud API setup","Custom bot built for your business","Lead qualification flows","Calendar integration","Automated follow-up sequences","English + Spanish","Click-to-WhatsApp ads compatible","Monthly optimization","No setup fee","No contracts","Cancel anytime","Live in 48 hours"]}
              ctaText="Get My WhatsApp Bot"
              ctaHref="https://wa.me/573103956445?text=I%20want%20a%20WhatsApp%20chatbot"
              accentClass="border-green-500"
              note="No setup fees. Cancel anytime."
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: EASE }} className="text-center mb-12">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-4xl font-black text-white">Common Questions</h2>
          </motion.div>
          <FaqAccordion items={faq} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-6 py-24 sm:py-32">
        <SectionDivider />
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: EASE }} className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Your Next Customer<br />Is Messaging You<br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">Right Now.</span>
          </h2>
          <p className="text-gray-500 text-lg mb-10">Are they getting an instant response — or finding someone who does?</p>
          <motion.a href="https://wa.me/573103956445?text=I%20want%20a%20WhatsApp%20chatbot" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold text-base hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] transition-all duration-300">
            Get My WhatsApp Bot — $397/mo
          </motion.a>
          <p className="mt-4 text-xs text-gray-600">No setup fee · No contracts · Live in 48 hours</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
