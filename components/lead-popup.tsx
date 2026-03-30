"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { X, ArrowRight } from "lucide-react"

const STORAGE_KEY = "lead_popup_dismissed"
const DELAY_MS = 15000

type Offer = {
  badge: string
  headline: string
  sub: string
  cta: string
  href: string
  accent: string
  glow: string
}

const OFFERS: Record<string, Offer> = {
  audit: {
    badge: "Free Google Ads Audit Checklist",
    headline: "Find Out Exactly Where Your Google Ads Budget Is Being Wasted",
    sub: "A 15-minute checklist that reveals the 6 mistakes draining most local business ad accounts — and how to fix them today.",
    cta: "Send Me the Free Checklist",
    href: "https://wa.me/573103956445?text=I%20want%20my%20free%20Google%20Ads%20audit%20checklist",
    accent: "text-cyan-400",
    glow: "from-cyan-600 to-cyan-500",
  },
  whatsapp: {
    badge: "Free Live Bot Demo",
    headline: "Watch a Bot Book a $4,000 Job While the Owner Was Sleeping",
    sub: "Message us right now and experience exactly what your customers would — a bot that qualifies, books, and follows up in 60 seconds.",
    cta: "Show Me the Demo",
    href: "https://wa.me/573103956445?text=I%20want%20to%20see%20the%20WhatsApp%20bot%20demo",
    accent: "text-green-400",
    glow: "from-green-600 to-green-500",
  },
  roadmap: {
    badge: "Free 90-Day Roadmap",
    headline: "The Exact Plan That Takes a Local Business From 5 Leads to 50",
    sub: "Month-by-month: Google Ads → WhatsApp → Meta Ads → SEO. Stop running random campaigns. Start running a system.",
    cta: "Send Me the Roadmap",
    href: "https://wa.me/573103956445?text=I%20want%20the%2090-day%20local%20domination%20roadmap",
    accent: "text-violet-400",
    glow: "from-violet-600 to-violet-500",
  },
  competitor: {
    badge: "Free Competitor Analysis",
    headline: "See Exactly What Your Competitors Are Spending on Google Ads Right Now",
    sub: "Their keywords, their estimated budget, their ad copy — and the gaps they're leaving open for you to take.",
    cta: "Spy on My Competitors — Free",
    href: "https://wa.me/573103956445?text=I%20want%20a%20free%20competitor%20analysis",
    accent: "text-orange-400",
    glow: "from-orange-600 to-orange-500",
  },
  response: {
    badge: "Free Lead Response Audit",
    headline: "I Messaged 47 Local Businesses as a Fake Lead. Only 3 Responded Correctly.",
    sub: "We'll secretly test your lead response and send you a full report — response time, quality score, follow-up sequence, and exactly what to fix.",
    cta: "Audit My Lead Response — Free",
    href: "https://wa.me/573103956445?text=I%20want%20a%20free%20lead%20response%20audit",
    accent: "text-pink-400",
    glow: "from-pink-600 to-pink-500",
  },
}

function getOffer(pathname: string): Offer {
  const p = pathname.toLowerCase()
  if (p.includes("google-ads") || p.includes("googleads") || p.includes("free-audit") || p.includes("lawyers") || p.includes("doctors") || p.includes("quality-score") || p.includes("electricians") || p.includes("mistakes")) return OFFERS.audit
  if (p.includes("whatsapp") || p.includes("whatsapp-demo") || p.includes("click-to-whatsapp") || p.includes("follow-up") || p.includes("booking")) return OFFERS.whatsapp
  if (p.includes("seo") || p.includes("rankflow") || p.includes("maps") || p.includes("roadmap") || p.includes("google-maps") || p.includes("reviews") || p.includes("plumber") || p.includes("hvac") || p.includes("domination")) return OFFERS.roadmap
  if (p.includes("meta-ads") || p.includes("facebook") || p.includes("instagram") || p.includes("competitor") || p.includes("retargeting") || p.includes("roofing") || p.includes("roofer")) return OFFERS.competitor
  return OFFERS.competitor // default — highest curiosity
}

export default function LeadPopup() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const offer = getOffer(pathname)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (sessionStorage.getItem(STORAGE_KEY)) return
    const timer = setTimeout(() => setVisible(true), DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, "1")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center px-4"
      style={{ background: "rgba(6,6,9,0.85)", backdropFilter: "blur(6px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) dismiss() }}
    >
      <div className="relative w-full max-w-md rounded-2xl border border-white/[0.08] bg-[#0d0d14] shadow-2xl overflow-hidden">
        <div className={`h-[2px] w-full bg-gradient-to-r ${offer.glow}`} />

        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-gray-600 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="px-8 py-8">
          <span className={`inline-block text-[10px] font-bold uppercase tracking-widest ${offer.accent} bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 rounded-full mb-5`}>
            {offer.badge}
          </span>

          <h2 className="text-xl font-black text-white leading-tight mb-3">
            {offer.headline}
          </h2>

          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            {offer.sub}
          </p>

          <a
            href={offer.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            className={`flex items-center justify-center gap-2 w-full h-12 rounded-full bg-gradient-to-r ${offer.glow} text-white font-bold text-sm hover:opacity-90 hover:shadow-lg transition-all duration-300`}
          >
            {offer.cta} <ArrowRight className="h-4 w-4" />
          </a>

          <button
            onClick={dismiss}
            className="mt-4 w-full text-center text-xs text-gray-600 hover:text-gray-400 transition-colors"
          >
            No thanks, I&apos;m good on leads
          </button>
        </div>
      </div>
    </div>
  )
}
