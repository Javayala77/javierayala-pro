"use client"

import { motion } from "framer-motion"
import { ClipboardCheck, Clock, MessageSquare, RotateCcw, HelpCircle, CalendarCheck, CheckCircle2 } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider } from "@/components/landing/layout"
import EmailCapture from "@/components/email-capture"

const scoringCriteria = [
  {
    icon: Clock,
    label: "Response Time",
    grades: [
      { grade: "A", desc: "Under 5 min" },
      { grade: "B", desc: "5–30 min" },
      { grade: "C", desc: "30–60 min" },
      { grade: "F", desc: "1+ hours" },
    ],
  },
  {
    icon: MessageSquare,
    label: "Response Quality",
    grades: [{ grade: "", desc: "Is it personal, professional, and helpful — or a copy-paste template?" }],
  },
  {
    icon: RotateCcw,
    label: "Follow-Up Sequence",
    grades: [{ grade: "", desc: "Did you follow up after no reply? How many times? What did you say?" }],
  },
  {
    icon: HelpCircle,
    label: "Qualification Questions",
    grades: [{ grade: "", desc: "Did you ask the right questions to qualify the lead, or just send a price?" }],
  },
  {
    icon: CalendarCheck,
    label: "Booking Rate",
    grades: [{ grade: "", desc: "Did the conversation move toward a call, visit, or booked job?" }],
  },
]

const results = [
  { name: "Greenfield Landscaping", result: "Response time: 4 min avg", timeframe: "Booked rate 3× in 30 days" },
  { name: "Summit HVAC", result: "Follow-up sequence added", timeframe: "Recovered 11 dead leads in week 1" },
  { name: "ProClean Services", result: "Score went from 41 to 89", timeframe: "Revenue up 28% in 60 days" },
]

const auditIncludes = [
  "We message your business as a real lead (you won't know when)",
  "We record your exact response time to the minute",
  "We evaluate the quality and tone of your first message",
  "We test your follow-up sequence over 5 business days",
  "We send you a full written report with a score out of 100",
  "We tell you exactly what to fix and how",
]

export default function ResponseAuditPage() {
  return (
    <LandingLayout
      accentColor="text-pink-400"
      ctaText="Audit My Lead Response — Free"
      ctaHref="https://wa.me/573103956445?text=I%20want%20a%20free%20lead%20response%20audit"
    >
      {/* HOOK */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(236,72,153,0.1),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.03)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-pink-500/25 bg-pink-500/8 text-pink-400 text-xs font-bold uppercase tracking-widest mb-8">
            <ClipboardCheck className="h-3.5 w-3.5" />
            Free Lead Response Audit
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            I Messaged 47 Local Businesses as a Fake Lead.<br />
            <span className="bg-gradient-to-r from-pink-400 to-rose-300 bg-clip-text text-transparent">
              Only 3 Responded Correctly.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            The other 44 either took hours to reply, gave a generic response, or never followed up. They were all running ads. They were all paying for leads.{" "}
            <span className="text-white font-semibold">They were all losing them.</span>
          </p>

          <motion.a
            href="https://wa.me/573103956445?text=I%20want%20a%20free%20lead%20response%20audit"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-pink-600 to-pink-500 text-white font-bold text-base hover:shadow-[0_0_40px_rgba(236,72,153,0.4)] transition-all duration-300"
          >
            Audit My Lead Response — Free
          </motion.a>

          <p className="mt-4 text-xs text-gray-600">No commitment · Replies in minutes on WhatsApp</p>
        </motion.div>
      </section>

      {/* STORY — The Experiment */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <SectionLabel>The Experiment</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-10 leading-tight">
              I Decided to Find Out What Really Happens<br />
              <span className="bg-gradient-to-r from-pink-400 to-rose-300 bg-clip-text text-transparent">When a Lead Messages Your Business.</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I messaged 47 service businesses — contractors, HVAC companies, plumbers, and roofers — posing as a homeowner with a real job. I used a different number each time. I asked genuine questions. I acted like a real lead ready to book.
              </p>
              <p>
                Then I recorded everything. Response time to the minute. The exact wording of the first reply. Whether they followed up when I went quiet. Whether they asked a single qualifying question.
              </p>
              <p>
                The results were shocking.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-10">
                {[
                  { stat: "78%", label: "Responded in over an hour" },
                  { stat: "31%", label: "Never followed up after message 1" },
                  { stat: "6%", label: "Had any qualification system" },
                  { stat: "3", label: "Out of 47 handled it right" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: EASE, delay: i * 0.07 }}
                    className="p-5 rounded-2xl border border-pink-500/20 bg-pink-500/[0.04] text-center"
                  >
                    <div className="text-3xl font-black text-pink-400 mb-1">{item.stat}</div>
                    <div className="text-xs text-gray-500">{item.label}</div>
                  </motion.div>
                ))}
              </div>

              <p>
                The businesses running the most ads weren&apos;t the best at converting them. The ones spending $3,000 a month on Google Ads were losing leads to the competitor who responded in 60 seconds.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EPIPHANY */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="p-8 rounded-2xl border border-pink-500/20 bg-pink-500/[0.04] mb-10">
              <p className="text-pink-400 text-xs font-bold uppercase tracking-widest mb-3">The Epiphany</p>
              <p className="text-white text-2xl font-bold leading-relaxed">
                &ldquo;Marketing spend means nothing if your lead response is broken. You can have the best Google Ads in the city and still lose every job to the competitor who responds in 60 seconds.&rdquo;
              </p>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Most business owners believe their lead problem is a traffic problem. They need more leads coming in. So they spend more on ads, more on SEO, more on social media.
              </p>
              <p>
                But the leak isn&apos;t at the top of the funnel. <span className="text-white font-semibold">It&apos;s at the moment of first contact.</span> A lead who doesn&apos;t get a fast, personal, professional response doesn&apos;t wait for you. They send the same message to your competitor and book with whoever responds first.
              </p>
              <p className="text-white font-semibold text-xl">
                Fixing your lead response doesn&apos;t cost more money. It makes the money you&apos;re already spending actually work.
              </p>
              <p>
                But here&apos;s the problem: most business owners have no idea how bad their own response process is. Because they&apos;ve never seen it from the lead&apos;s perspective. That&apos;s exactly what this audit does.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OFFER — What the Audit Includes */}
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
            <SectionLabel>The Free Audit</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Here&apos;s Exactly What<br />
              <span className="bg-gradient-to-r from-pink-400 to-rose-300 bg-clip-text text-transparent">Javier Does for Your Business.</span>
            </h2>
            <p className="mt-6 text-gray-500 text-base max-w-xl mx-auto">
              I personally message your business as a real lead. You won&apos;t know when. Takes 5 business days. You get a full written report.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-3 mb-16 max-w-3xl mx-auto">
            {auditIncludes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.07 }}
                className="flex items-start gap-3 p-4 rounded-xl border border-white/[0.07] bg-white/[0.02]"
              >
                <CheckCircle2 className="h-4 w-4 text-pink-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* Scoring Criteria */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-center mb-10"
          >
            <SectionLabel>Scoring Criteria</SectionLabel>
            <h3 className="text-3xl sm:text-4xl font-black text-white">
              Your Score Is Out of 100.<br />
              <span className="bg-gradient-to-r from-pink-400 to-rose-300 bg-clip-text text-transparent">Here&apos;s How It&apos;s Calculated.</span>
            </h3>
          </motion.div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {scoringCriteria.map((criterion, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: EASE, delay: i * 0.07 }}
                className="flex gap-4 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] group hover:border-pink-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500/20 transition-colors">
                  <criterion.icon className="h-5 w-5 text-pink-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white mb-2">{criterion.label}</h4>
                  {criterion.grades.length > 1 ? (
                    <div className="flex flex-wrap gap-2">
                      {criterion.grades.map((g, j) => (
                        <span
                          key={j}
                          className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-gray-400"
                        >
                          <span className="text-pink-400 font-bold">{g.grade}:</span>
                          {g.desc}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">{criterion.grades[0].desc}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
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
            <SectionLabel>What Happened After</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              3 Businesses That Fixed<br />
              <span className="bg-gradient-to-r from-pink-400 to-rose-300 bg-clip-text text-transparent">Their Lead Response Process.</span>
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
                <div className="text-xl font-black text-pink-400 mb-1">{r.result}</div>
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
              &ldquo;I scored a 38 on the audit. I was embarrassed. But Javier told me exactly what to fix, and within a week my response process was completely different. Best free thing I&apos;ve ever gotten.&rdquo;
            </p>
            <p className="text-pink-400 font-bold text-sm">— Derek M., Roofing Contractor</p>
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
            You&apos;re Paying for Leads<br />You&apos;re Not Closing.<br />
            <span className="bg-gradient-to-r from-pink-400 to-rose-300 bg-clip-text text-transparent">Let&apos;s Find Out Why.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Drop your email to register — Javier will personally run your audit and send a full report within 5 business days.
          </p>
          <div className="max-w-sm mx-auto mb-8">
            <EmailCapture tag="response-audit" ctaText="Audit My Lead Response — Free" accentClass="border-pink-500/30 focus:border-pink-500/60" btnClass="from-pink-600 to-pink-500" />
          </div>
          <div className="flex items-center gap-3 justify-center">
            <div className="h-px w-16 bg-white/[0.06]" /><span className="text-xs text-gray-600">or</span><div className="h-px w-16 bg-white/[0.06]" />
          </div>
          <motion.a href="https://wa.me/573103956445?text=I%20want%20a%20free%20lead%20response%20audit" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2 mt-4 h-12 px-8 rounded-full border border-pink-500/30 text-pink-400 font-bold text-sm hover:bg-pink-500/10 transition-all duration-300">
            Message on WhatsApp directly
          </motion.a>
          <p className="mt-4 text-xs text-gray-600">Takes 5 business days · Full report included · No catch</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
