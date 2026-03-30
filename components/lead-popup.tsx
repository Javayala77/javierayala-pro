"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { X } from "lucide-react"
import EmailCapture from "@/components/email-capture"

const STORAGE_KEY = "lead_popup_dismissed"
const DELAY_MS = 15000

type Offer = {
  badge: string
  headline: string
  sub: string
  tag: string
  accentColor: string
  accentClass: string
  btnClass: string
  glow: string
  successText: string
}

const OFFERS: Record<string, Offer> = {
  audit: {
    badge: "Free Google Ads Audit",
    headline: "Find Out Exactly Where Your Google Ads Budget Is Being Wasted",
    sub: "Enter your email and we'll book a free audit — we'll show you exactly where money is leaking and what we'd do differently.",
    tag: "google-ads-audit",
    accentColor: "text-cyan-400",
    accentClass: "border-cyan-500/30 focus:border-cyan-500/60",
    btnClass: "from-cyan-600 to-cyan-500",
    glow: "from-cyan-600 to-cyan-500",
    successText: "Check your inbox — we'll send you a link to book your free audit.",
  },
  whatsapp: {
    badge: "Free Bot Consultation",
    headline: "Book a Free Demo — See Exactly How a Bot Would Work for Your Business",
    sub: "Enter your email and we'll set up a demo customized to your business — what it says, how it qualifies, how it books.",
    tag: "whatsapp-bot",
    accentColor: "text-green-400",
    accentClass: "border-green-500/30 focus:border-green-500/60",
    btnClass: "from-green-600 to-green-500",
    glow: "from-green-600 to-green-500",
    successText: "Check your inbox — we'll send you a link to schedule your free demo.",
  },
  seo: {
    badge: "Free SEO Consultation",
    headline: "Book a Free Call — We'll Check Your Google Maps Ranking and Show You the Path to Top 3",
    sub: "Enter your email and we'll review where you currently rank and map out exactly what it takes to reach the top 3.",
    tag: "seo",
    accentColor: "text-violet-400",
    accentClass: "border-violet-500/30 focus:border-violet-500/60",
    btnClass: "from-violet-600 to-violet-500",
    glow: "from-violet-600 to-violet-500",
    successText: "Check your inbox — we'll send you a link to book your free SEO call.",
  },
  meta: {
    badge: "Free Meta Ads Consultation",
    headline: "Book a Free Call — We'll Show You What a Real Meta Ads Campaign Would Change for Your Business",
    sub: "Enter your email and we'll review your current setup and show you exactly how to get real leads from Facebook and Instagram.",
    tag: "meta-ads",
    accentColor: "text-pink-400",
    accentClass: "border-pink-500/30 focus:border-pink-500/60",
    btnClass: "from-pink-600 to-pink-500",
    glow: "from-pink-600 to-pink-500",
    successText: "Check your inbox — we'll send you a link to book your free Meta Ads call.",
  },
}

function getOffer(pathname: string): Offer {
  const p = pathname.toLowerCase()
  if (p.includes("google-ads") || p.includes("googleads") || p.includes("free-audit") || p.includes("lawyers") || p.includes("doctors") || p.includes("quality-score") || p.includes("electricians") || p.includes("mistakes")) return OFFERS.audit
  if (p.includes("whatsapp") || p.includes("whatsapp-demo") || p.includes("follow-up") || p.includes("booking") || p.includes("ai-agent")) return OFFERS.whatsapp
  if (p.includes("seo") || p.includes("rankflow") || p.includes("maps") || p.includes("roadmap") || p.includes("reviews") || p.includes("plumber") || p.includes("hvac") || p.includes("domination")) return OFFERS.seo
  if (p.includes("meta-ads") || p.includes("facebook") || p.includes("instagram") || p.includes("competitor") || p.includes("retargeting") || p.includes("roofing")) return OFFERS.meta
  return OFFERS.audit // default
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
          <span className={`inline-block text-[10px] font-bold uppercase tracking-widest ${offer.accentColor} bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 rounded-full mb-5`}>
            {offer.badge}
          </span>

          <h2 className="text-xl font-black text-white leading-tight mb-3">
            {offer.headline}
          </h2>

          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            {offer.sub}
          </p>

          <EmailCapture
            tag={offer.tag}
            ctaText="Book My Free Consultation"
            successText={offer.successText}
            accentClass={offer.accentClass}
            btnClass={offer.btnClass}
          />

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
