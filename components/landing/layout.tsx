"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

interface LandingLayoutProps {
  children: React.ReactNode
  accentColor?: string
  ctaText?: string
  homeHref?: string
}

export function LandingLayout({
  children,
  accentColor = "text-cyan-400",
  ctaText = "Get My Free AI Scan",
  homeHref = "/",
}: LandingLayoutProps) {
  const [scrolled, setScrolled] = useState(false)
  const [showSticky, setShowSticky] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      setShowSticky(window.scrollY > 600)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#060609] text-white overflow-x-hidden">
      {/* Nav */}
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#060609]/90 backdrop-blur-md border-b border-white/[0.05]" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href={homeHref}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
            <span className={`text-[11px] font-bold tracking-[0.2em] border px-2.5 py-1 rounded ${accentColor} border-current opacity-70`}>javierayala.pro</span>
          </Link>

          <motion.a
            href="#email-capture"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-500 text-white text-sm font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
          >
            {ctaText}
            <ArrowRight className="h-3.5 w-3.5" />
          </motion.a>
        </div>
      </motion.header>

      {/* Page content */}
      <div className="pt-16">{children}</div>

      {/* Sticky bottom CTA */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed bottom-6 inset-x-0 z-50 px-6 pointer-events-none"
          >
            <div className="max-w-sm mx-auto pointer-events-auto">
              <a
                href="#email-capture"
                className="flex items-center justify-center gap-2.5 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-bold text-base shadow-[0_8px_32px_rgba(6,182,212,0.4)] hover:shadow-[0_8px_40px_rgba(6,182,212,0.6)] transition-all duration-300 group"
              >
                {ctaText}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ── Shared section primitives ─────────────────────────────────────────────────

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-widest text-cyan-400 border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 rounded-full mb-4">
      {children}
    </span>
  )
}

export function SectionDivider() {
  return <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
}

interface FaqItem {
  q: string
  a: string
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-xl border border-white/[0.07] bg-white/[0.02] overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left"
          >
            <span className="text-sm font-semibold text-white pr-4">{item.q}</span>
            <span className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}>
              +
            </span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

interface PricingCardProps {
  badge: string
  price: string
  period?: string
  items: string[]
  ctaText: string
  ctaHref: string
  accentClass: string
  note?: string
  strikethrough?: { items: { label: string; price: string }[]; total: string }
}

export function PricingCard({
  badge,
  price,
  period = "/mo",
  items,
  ctaText,
  ctaHref,
  accentClass,
  note,
  strikethrough,
}: PricingCardProps) {
  return (
    <div className={`relative p-8 sm:p-10 rounded-3xl border-2 ${accentClass} bg-white/[0.02]`}>
      <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap ${accentClass.replace("border-", "bg-").split(" ")[0]} text-white`}>
        {badge}
      </div>

      {strikethrough && (
        <div className="mb-6 space-y-2">
          {strikethrough.items.map((s, i) => (
            <div key={i} className="flex justify-between text-sm">
              <span className="text-gray-500">{s.label}</span>
              <span className="text-gray-600 line-through">{s.price}</span>
            </div>
          ))}
          <div className="flex justify-between text-sm pt-2 border-t border-white/5">
            <span className="text-gray-500">Normally</span>
            <span className="text-gray-600 line-through">{strikethrough.total}</span>
          </div>
        </div>
      )}

      <div className="text-center mb-8">
        <span className="text-6xl font-black text-white">{price}</span>
        {period && <span className="text-2xl text-gray-500 font-bold">{period}</span>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            </div>
            <span className="text-sm text-gray-300">{item}</span>
          </div>
        ))}
      </div>

      <a
        href={ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-13 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-bold text-center hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300"
      >
        {ctaText}
      </a>

      {note && <p className="mt-4 text-xs text-gray-600 text-center">{note}</p>}
    </div>
  )
}
