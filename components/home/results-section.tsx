"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return
    let start: number
    const duration = 1800
    const animate = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isInView, target])

  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

const stats = [
  { value: 2, suffix: "M+", prefix: "$", label: "Ad spend managed", sub: "across 50+ businesses" },
  { value: 40, suffix: "%", prefix: "", label: "Avg. lead cost reduction", sub: "within the first 30 days" },
  { value: 3, suffix: "x", prefix: "", label: "Average ROI increase", sub: "in the first 90 days" },
  { value: 275, suffix: "%", prefix: "+", label: "Best lead growth result", sub: "Unclog Plumbing, FL" },
]

const caseStudies = [
  {
    company: "Unclog Plumbing",
    location: "Pembroke Pines, FL",
    service: "Google Ads + AI Agent",
    before: "40 leads/mo",
    after: "150+ leads/mo",
    metric: "+275%",
    color: "from-cyan-500/10 to-transparent border-cyan-500/20",
    metricColor: "text-cyan-400",
  },
  {
    company: "Precision Blinds",
    location: "Chicago, IL",
    service: "Google Ads Optimization",
    before: "$85 cost per lead",
    after: "$32 cost per lead",
    metric: "-62%",
    color: "from-violet-500/10 to-transparent border-violet-500/20",
    metricColor: "text-violet-400",
  },
  {
    company: "Elite HVAC Services",
    location: "Texas",
    service: "AI Booking Agent",
    before: "Manual bookings only",
    after: "47 jobs booked",
    metric: "47 jobs",
    color: "from-emerald-500/10 to-transparent border-emerald-500/20",
    metricColor: "text-emerald-400",
  },
]

export function HomeResults() {
  return (
    <section id="results" className="px-6 py-24 sm:py-32 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.04),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-cyan-400 border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 rounded-full mb-4">
            Proven Results
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white mb-4">
            Numbers That{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Don&apos;t Lie.
            </span>
          </h2>
          <p className="text-gray-500 text-lg">
            No vanity metrics. No brand awareness reports. Every number below is tied to a real business outcome.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
              className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] text-center"
            >
              <div className="text-4xl sm:text-5xl font-black text-white mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <div className="text-sm font-semibold text-gray-300 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-600">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-4"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-6">Client Case Studies</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
              className={`p-6 rounded-2xl border bg-gradient-to-br ${study.color} relative overflow-hidden`}
            >
              <div className={`text-5xl font-black mb-4 ${study.metricColor}`}>{study.metric}</div>
              <h3 className="text-base font-bold text-white mb-0.5">{study.company}</h3>
              <p className="text-xs text-gray-600 mb-4">{study.location} · {study.service}</p>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-600 uppercase tracking-wider w-12">Before</span>
                  <span className="text-xs text-gray-400 bg-white/5 px-2.5 py-1 rounded-full">{study.before}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-600 uppercase tracking-wider w-12">After</span>
                  <span className="text-xs text-white bg-white/10 px-2.5 py-1 rounded-full font-medium">{study.after}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
