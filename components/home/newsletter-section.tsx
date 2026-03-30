"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Check, Sparkles } from "lucide-react"

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const perks = [
  "1 AI marketing tactic per week — proven, not theoretical",
  "Behind-the-scenes of my client campaigns",
  "New frameworks before they're public",
  "Tools I actually use, with honest reviews",
]

export function HomeNewsletter() {
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

  return (
    <section id="newsletter" className="px-6 py-24 sm:py-32 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative rounded-3xl border border-white/[0.08] bg-white/[0.02] overflow-hidden p-8 sm:p-12 lg:p-16"
        >
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[100px] pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles className="h-3 w-3" />
                The AI Marketing Letter
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
                Get the Tactics<br />
                <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  Before Everyone Else.
                </span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Every week — one AI marketing insight that&apos;s actually working right now. No fluff, no theory. Just what&apos;s producing results for real businesses.
              </p>

              <ul className="space-y-3">
                {perks.map((perk, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-cyan-400" />
                    </div>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — Form */}
            <div>
              <AnimatePresence mode="wait">
                {status === "done" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="p-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                      <Check className="h-6 w-6 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">You&apos;re in.</h3>
                    <p className="text-gray-400 text-sm">Check your inbox — first issue lands this week.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] space-y-4"
                  >
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="First name"
                        className="w-full h-12 px-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        required
                        className="w-full h-12 px-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 text-sm transition-colors"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-xs text-red-400">Something went wrong. Try again.</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-bold text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 disabled:opacity-70"
                    >
                      {status === "loading" ? (
                        <>
                          <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          Subscribing...
                        </>
                      ) : (
                        <>
                          Join Free — Weekly Insights
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-gray-600 text-center">
                      Free forever · No spam · Unsubscribe anytime
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
