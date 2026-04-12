"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronDown, Sparkles, TrendingUp, Zap, Brain, Check } from "lucide-react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

const proofItems = [
  { icon: TrendingUp, value: "$2M+", label: "Ad Spend Managed" },
  { icon: Zap, value: "50+", label: "Businesses Scaled" },
  { icon: Brain, value: "8+", label: "Years in Marketing" },
  { icon: Sparkles, value: "24/7", label: "AI Systems Running" },
]


function MagneticButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

function HeroEmailForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return
    setStatus("loading")
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, tag: "newsletter" }),
      })
      setStatus(res.ok ? "done" : "error")
    } catch {
      setStatus("error")
    }
  }

  if (status === "done") {
    return (
      <div className="flex items-center gap-3 h-14">
        <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
          <Check className="h-4 w-4 text-emerald-400" />
        </div>
        <div>
          <p className="text-white font-semibold text-sm">You&apos;re in — check your inbox.</p>
          <p className="text-gray-500 text-xs">First issue lands this week.</p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-lg">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="First name"
          className="h-12 px-4 rounded-full bg-white/[0.05] border border-white/[0.1] text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 text-sm transition-colors w-full sm:w-32 sm:flex-shrink-0"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="h-12 px-4 rounded-full bg-white/[0.05] border border-white/[0.1] text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 text-sm transition-colors w-full sm:flex-1 sm:min-w-0"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="h-12 w-full sm:w-auto px-7 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-bold text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_40px_rgba(6,182,212,0.35)] transition-all duration-300 disabled:opacity-70"
      >
        {status === "loading" ? (
          <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
        ) : (
          <>Get Free Weekly Tactics <ArrowRight className="h-4 w-4" /></>
        )}
      </button>
    </form>
  )
}

export function HomeHero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-300, 300], [4, -4])
  const rotateY = useTransform(mouseX, [-300, 300], [-4, 4])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2)
      mouseY.set(e.clientY - window.innerHeight / 2)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#060609]">

      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-20%] left-[30%] w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[100px]" />
        <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] rounded-full bg-sky-500/[0.08] blur-[90px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.04)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-20 w-full px-6 py-6 flex items-center justify-between max-w-7xl mx-auto"
      >
        <Link href="/" className="flex items-center group">
          <span className="text-[11px] font-bold tracking-[0.2em] text-cyan-400/70 border border-cyan-500/30 px-2.5 py-1 rounded">javierayala.pro</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.06 }}
              className="relative text-gray-400 hover:text-white transition-colors text-sm group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-cyan-400 to-violet-400 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.a
            href="https://www.linkedin.com/in/javierayala1/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-gray-500 hover:text-cyan-400 transition-colors"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </motion.a>
          <MagneticButton>
            <motion.a
              href="#newsletter"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-black text-sm font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-shadow"
            >
              Get Free Tactics
              <ArrowRight className="h-3.5 w-3.5" />
            </motion.a>
          </MagneticButton>
        </div>
      </motion.nav>

      {/* Hero Body */}
      <div className="relative z-10 flex-1 flex items-center px-6 pb-16">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-8 flex items-center gap-3 flex-wrap">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/[0.08] backdrop-blur-sm text-cyan-400 text-xs font-semibold uppercase tracking-widest">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400" />
                </span>
                AI Marketing Expert
              </span>
              <span className="text-gray-600 text-xs hidden sm:block">·</span>
              <span className="text-gray-500 text-xs hidden sm:block">AI-Powered Google Ads for Local Service Businesses</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[82px] font-black leading-[1.02] tracking-tight mb-6"
            >
              <span className="text-white">I Don&apos;t Run Ads.</span>
              <br />
              <span className="text-white">I Build </span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
                  AI Systems
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-cyan-400 to-violet-400"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8, ease: EASE }}
                />
              </span>
              <br />
              <span className="text-white">That </span>
              <span className="text-gray-400 italic font-light">Print </span>
              <span className="text-white">Customers.</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-500 max-w-2xl mb-10 leading-relaxed"
            >
              Most Google Ads agencies run the same broken playbook.{" "}
              <span className="text-white font-medium">I built a different system</span> — one where AI handles bids, structure, and optimization 24/7, so contractors, roofers, doctors, and lawyers{" "}
              <span className="text-white font-medium">stop bleeding budget and start getting calls.</span>
            </motion.p>

            {/* CTAs — inline email capture */}
            <motion.div variants={itemVariants} className="mb-16">
              <HeroEmailForm />
              <p className="mt-3 text-xs text-gray-600 flex items-center gap-4">
                <span>Free · No spam · Unsubscribe anytime</span>
                <a href="#services" className="text-gray-500 hover:text-white transition-colors underline underline-offset-2">See my services →</a>
              </p>
            </motion.div>

            {/* Social proof bar */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6 sm:gap-8 items-center"
            >
              {proofItems.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-2.5 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:border-cyan-500/40 group-hover:bg-cyan-500/[0.08] transition-all">
                    <item.icon className="h-4 w-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-white">{item.value}</div>
                    <div className="text-[10px] text-gray-600 uppercase tracking-wide leading-none mt-0.5">{item.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Floating results card — large screens */}
          <motion.div
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.9, ease: EASE }}
            className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2 w-[340px]"
          >
            <div className="relative p-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.08] to-violet-500/[0.08] pointer-events-none" />
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

              <div className="relative">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Live Results</span>
                  <span className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Active Clients
                  </span>
                </div>

                {[
                  { name: "Unclog Plumbing", metric: "+275%", detail: "Leads in 60 days", color: "text-emerald-400" },
                  { name: "Precision Blinds", metric: "-62%", detail: "Cost per lead", color: "text-cyan-400" },
                  { name: "Elite HVAC", metric: "47 jobs", detail: "First month AI agent", color: "text-violet-400" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + i * 0.15 }}
                    className="flex items-center justify-between py-3 border-b border-white/5 last:border-0"
                  >
                    <div>
                      <div className="text-sm font-semibold text-white">{item.name}</div>
                      <div className="text-[11px] text-gray-600">{item.detail}</div>
                    </div>
                    <span className={`text-lg font-black ${item.color}`}>{item.metric}</span>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                  className="mt-5 p-3 rounded-xl bg-cyan-500/[0.08] border border-cyan-500/15"
                >
                  <div className="text-[11px] text-gray-400 mb-1">Average client result</div>
                  <div className="text-2xl font-black text-white">3.2x ROI</div>
                  <div className="text-[11px] text-cyan-400">in the first 90 days</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-cyan-400/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
