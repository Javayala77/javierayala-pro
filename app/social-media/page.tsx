"use client"

import { motion } from "framer-motion"
import { Zap, Calendar, BarChart3, Globe, CheckCircle2, Users } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider } from "@/components/landing/layout"
import EmailCapture from "@/components/email-capture"

const deliverables = [
  { icon: Zap, title: "30 AI-Generated Posts per Month", desc: "Hooks, captions, and hashtags written by AI trained on your brand voice — structured for each platform, ready to publish." },
  { icon: Globe, title: "Instagram + Facebook + LinkedIn", desc: "All three platforms covered. Your brand shows up consistently across every channel your customers are scrolling through." },
  { icon: Calendar, title: "Optimal-Time Scheduling", desc: "Posts go out when your audience is most active. No guessing. No manual scheduling. The system handles it automatically." },
  { icon: BarChart3, title: "Monthly Performance Report", desc: "See exactly which posts got the most reach, what content is driving engagement, and what we're adjusting next month." },
]

const results = [
  { name: "Metro Roofing Co.", result: "3 inbound DMs in 60 days", timeframe: "from Instagram alone" },
  { name: "Bright Smiles Dental", result: "+280% profile reach", timeframe: "in the first 45 days" },
  { name: "Peak Fitness Studio", result: "Fully booked classes", timeframe: "after 90 days of automation" },
]

export default function SocialMediaPage() {
  return (
    <LandingLayout
      accentColor="text-violet-400"
      accentColor="text-violet-400"
      ctaText="Automate My Social Media"
      ctaHref="#email-capture"
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
            Social Media Automation
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            The Business With 500 Followers<br />Was Getting More Customers<br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
              Than the One With 5,000.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Follower count is not the game.{" "}
            <span className="text-white font-semibold">Consistency is. And AI just made consistency effortless for any business.</span>
          </p>

          <motion.a
            href="#email-capture"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-violet-600 to-violet-500 text-white font-bold text-base hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Automate My Social Media
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
              I Was Scheduling Posts<br />
              <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">For Dozens of Clients. Manually.</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                At the agency, social media management meant one thing: sitting in front of a screen, drafting posts client by client, one by one. Log in, write the caption, pick the hashtags, schedule it, move to the next account. Repeat. Every single week.
              </p>
              <p>
                We had clients across every industry — contractors, dentists, gyms, law firms. And the pattern we saw across every single account was identical. The ones who posted every day consistently outperformed the ones with bigger audiences. Every time. Follower count meant nothing. Frequency meant everything.
              </p>
              <p>
                But here is what nobody talks about: <span className="text-white font-semibold">maintaining that consistency at scale is brutal.</span> Most business owners start strong — posting every day in January — and by March they have gone silent. Life gets busy. The posts stop. And the algorithm buries them like they never existed.
              </p>
              <p className="text-white font-semibold text-xl">
                Everyone knows they should post more. Nobody has the time. And that gap is exactly where businesses lose customers to their competitors every single day.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EPIPHANY BRIDGE — The Moment */}
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
              <p className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-3">The Epiphany</p>
              <p className="text-white text-2xl font-bold leading-relaxed">
                &ldquo;What if AI could write 30 posts in the time it takes a human to write one — and do it better, because it never gets tired, rushed, or inconsistent?&rdquo;
              </p>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                We started testing AI-generated content against human-written posts across real client accounts. Same businesses, same audiences. The AI content — trained on each brand&apos;s voice — performed better. Not slightly. Significantly. Because it was structured, consistent, and optimized for each platform instead of being rushed out on a Tuesday night.
              </p>
              <p>
                Hook, caption, hashtags, posting time — fully automated. A full month of content planned, written, and scheduled in an afternoon. Multiple platforms handled simultaneously. Brand voice locked in from day one.
              </p>
              <p>
                The first real proof came from a roofing company that hadn&apos;t posted in three months. We set up the automation and within 60 days they had three inbound DMs from Instagram asking for quotes. <span className="text-white font-semibold">They had not changed their service, their prices, or their website. Just their consistency.</span>
              </p>
              <p className="text-white font-semibold text-xl">
                The algorithm rewards accounts that show up every day. AI is what finally makes that possible for a business owner who has a company to run.
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
              <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">The Feed Never Goes Quiet.</span>
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
                <div className="text-2xl font-black text-violet-400 mb-1">{r.result}</div>
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
              &ldquo;I used to stress about social media every single week. Now the posts just go out. Consistently. And I&apos;m getting DMs from people who say they&apos;ve been watching my content for weeks before reaching out.&rdquo;
            </p>
            <p className="text-violet-400 font-bold text-sm">— Sandra M., Interior Design Studio</p>
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
            <SectionLabel>The System</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Everything Your Social Media Needs —<br />
              <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">Running Without You Touching It.</span>
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
                className="flex gap-4 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] group hover:border-violet-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-500/20 transition-colors">
                  <d.icon className="h-5 w-5 text-violet-400" />
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
            {["English + Spanish", "Hashtag research", "Brand voice alignment", "Content calendar"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs text-gray-400">
                <CheckCircle2 className="h-3 w-3 text-violet-400 flex-shrink-0" />
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
          <p className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-3">Free Social Media Consultation</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
            See Exactly What 30 Days of<br />Automated Content Would Look Like for Your Business
          </h2>
          <p className="text-gray-400 mb-8">
            Enter your email and we&apos;ll book a free call — we&apos;ll audit your current social presence and show you exactly what the system would produce.
          </p>
          <EmailCapture tag="newsletter" ctaText="Book My Free Social Media Consultation" accentClass="border-violet-500/30 focus:border-violet-500/60" btnClass="from-violet-600 to-violet-500" />
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
            Your Competitor Is Posting<br />Every Day Right Now.<br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">Are You?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Enter your email and we&apos;ll audit your current social presence for free — and show you exactly what the automation would do for your business.
          </p>
          <a
            href="#email-capture"
            className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-violet-600 to-violet-500 text-white font-bold text-base hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] transition-all duration-300"
          >
            Automate My Social Media
          </a>
          <p className="mt-4 text-xs text-gray-600">No contracts · 30 posts/month · EN + ES included</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
