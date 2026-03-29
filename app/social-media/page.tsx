"use client"

import { motion } from "framer-motion"
import { Share2, MessageSquare, Users, Calendar, Sparkles, Check } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider, FaqAccordion, PricingCard } from "@/components/landing/layout"

const steps = [
  { n: "01", title: "Content strategy built for you", desc: "We research your audience, competitors, and industry trends to build a content plan that actually grows your following." },
  { n: "02", title: "AI creates 30 posts per month", desc: "Captions, hooks, hashtags — all written and structured for maximum reach on each platform." },
  { n: "03", title: "You approve (or we auto-publish)", desc: "Review everything via a simple dashboard, or let us publish automatically on the optimal schedule." },
  { n: "04", title: "We analyze and optimize monthly", desc: "What performed, what didn't, what to double down on. Every month we get sharper." },
]

const platforms = [
  { icon: Share2, name: "Instagram", desc: "Reels, carousels, stories — the full playbook." },
  { icon: MessageSquare, name: "Facebook", desc: "Posts, shares, and group content that builds community." },
  { icon: Users, name: "LinkedIn", desc: "Authority content that positions you as the go-to expert." },
  { icon: Sparkles, name: "TikTok / Threads", desc: "Short-form content for maximum organic reach. Optional add-on." },
]

const faq = [
  { q: "Do I need to create any content myself?", a: "No. We handle captions, hooks, hashtags, and scheduling. If you want to include personal photos or videos, that always performs better — but it's optional." },
  { q: "Which platforms are included?", a: "Instagram, Facebook, and LinkedIn are included. TikTok and Threads are available as add-ons." },
  { q: "What tool do you use to schedule?", a: "We use professional scheduling tools (Blotato, Buffer, or similar) to publish at optimal times for your audience timezone." },
  { q: "Is the content branded to my business?", a: "Yes. Everything is written for your voice, your offer, and your audience. We don't post generic content." },
  { q: "Can I review posts before they go live?", a: "Absolutely. You get a content calendar each month for approval. Or you can switch to auto-publish if you trust the process." },
  { q: "How is this different from hiring a social media manager?", a: "A full-time social media manager costs $3,000–$5,000/mo. We deliver the same volume of content, fully automated, for $397/mo." },
]

export default function SocialMediaPage() {
  return (
    <LandingLayout
      accentColor="text-violet-400"
      ctaText="Automate My Social Media"
      ctaHref="https://wa.me/573103956445?text=I%20want%20social%20media%20automation"
    >
      {/* Hero */}
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
            <Calendar className="h-3.5 w-3.5" />
            Social Media Automation — 30 Posts/Month
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            30 Posts a Month.<br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
              0 Hours of Your Time.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Consistent social media presence builds authority, drives organic traffic, and keeps you top of mind.
            <span className="text-white font-semibold"> We create and automate everything — you just show up to the results.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.a
              href="https://wa.me/573103956445?text=I%20want%20social%20media%20automation"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 text-white font-bold text-base hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] transition-all duration-300"
            >
              Automate My Social — $397/mo
            </motion.a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {["30 posts/month","3 platforms","AI-generated content","Scheduled & automated"].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs text-gray-400">
                <Check className="h-3 w-3 text-violet-400 flex-shrink-0" />
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
            <SectionLabel>The Reality</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              You Know You Should Post More.<br />
              <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">You Just Never Have Time.</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Social media rewards consistency above everything. Businesses that post daily get 6x more reach than those who post occasionally. The problem isn&apos;t knowing what to post — it&apos;s doing it every single day without fail.
            </p>
          </motion.div>
          <div className="mt-12 grid sm:grid-cols-3 gap-4">
            {[
              { stat: "6x", label: "More reach for businesses that post consistently vs. inconsistently" },
              { stat: "73%", label: "Of consumers say social media influences their purchase decisions" },
              { stat: "$397", label: "vs. $3,000–5,000/mo for a full-time social media manager" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <div className="text-4xl font-black text-violet-400 mb-2">{item.stat}</div>
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
              Created. Scheduled. Published.{" "}
              <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">Without You.</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }} className="flex gap-5 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-violet-500/30 transition-all group">
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

      {/* Platforms */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: EASE }} className="text-center mb-16">
            <SectionLabel>Platforms</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white">Everywhere Your Audience Is.</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {platforms.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE, delay: i * 0.07 }} className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] text-center group hover:border-violet-500/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-violet-500/20 transition-colors">
                  <p.icon className="h-6 w-6 text-violet-400" />
                </div>
                <h3 className="font-bold text-white mb-1">{p.name}</h3>
                <p className="text-xs text-gray-500">{p.desc}</p>
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
            <h2 className="text-4xl font-black text-white mb-4">Less Than a Day of a Social Media Manager.</h2>
            <p className="text-gray-500 mb-12">30 posts. 3 platforms. Fully managed. Every month.</p>
            <PricingCard
              badge="Social Media Automation"
              price="$397"
              period="/mo"
              items={["30 posts per month","Instagram, Facebook, LinkedIn","AI-generated captions & hooks","Hashtag research","Optimal-time scheduling","Content calendar","Monthly performance report","Brand voice alignment","English + Spanish","Approval workflow","No contracts","Cancel anytime"]}
              ctaText="Automate My Social Media"
              ctaHref="https://wa.me/573103956445?text=I%20want%20social%20media%20automation"
              accentClass="border-violet-500"
              note="TikTok + Threads available as add-on. Cancel anytime."
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
            Your Brand Needs to<br />Show Up Every Day.<br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">Now It Will.</span>
          </h2>
          <p className="text-gray-500 text-lg mb-10">30 posts per month, 3 platforms, fully automated. You focus on your business.</p>
          <motion.a href="https://wa.me/573103956445?text=I%20want%20social%20media%20automation" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 text-white font-bold text-base hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] transition-all duration-300">
            Automate My Social — $397/mo
          </motion.a>
          <p className="mt-4 text-xs text-gray-600">No contracts · Cancel anytime · Starts this week</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
