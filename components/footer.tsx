"use client"

import { useState } from "react"
import { Linkedin, ArrowRight, Check } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus("loading")
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, tag: "newsletter" }),
      })
      setStatus(res.ok ? "done" : "error")
    } catch {
      setStatus("error")
    }
  }

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        {/* Newsletter strip */}
        <div className="mb-10 pb-10 border-b border-white/[0.06]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-shrink-0">
              <p className="text-sm font-bold text-white mb-0.5">The AI Marketing Letter</p>
              <p className="text-xs text-gray-500">1 tactic per week. What&apos;s working right now. Free.</p>
            </div>
            {status === "done" ? (
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                <Check className="h-4 w-4" /> You&apos;re in — check your inbox.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="h-10 px-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 text-sm transition-colors flex-1 sm:w-56 min-w-0"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="h-10 px-4 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold text-xs flex items-center gap-1.5 hover:opacity-90 transition-all disabled:opacity-60 whitespace-nowrap"
                >
                  {status === "loading" ? (
                    <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>Subscribe <ArrowRight className="h-3 w-3" /></>
                  )}
                </button>
              </form>
            )}
            {status === "error" && (
              <p className="text-xs text-red-400 sm:absolute">Something went wrong — try again.</p>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo/Name */}
          <div>
            <p className="text-lg font-bold text-foreground flex items-center gap-1.5">javierayala<span className="text-[10px] font-bold tracking-[0.2em] text-cyan-400/70 border border-cyan-500/30 px-1.5 py-0.5 rounded">.pro</span></p>
            <p className="text-sm text-muted-foreground">AI-Powered Google Ads Management</p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#audit-form" className="hover:text-foreground transition-colors">
              Free Audit
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/javier-ayala-056b82344"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Connect on LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Javier Ayala. All rights reserved.</p>
          <p className="mt-2">Serving local service businesses across the United States.</p>
        </div>
      </div>
    </footer>
  )
}
