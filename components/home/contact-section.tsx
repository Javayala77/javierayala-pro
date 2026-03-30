"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import EmailCapture from "@/components/email-capture"

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const steps = [
  { step: "01", title: "Enter your email below", desc: "Tell me about your business and what you want to achieve." },
  { step: "02", title: "Free strategy call", desc: "We talk for 30 minutes. I audit your current marketing and map out exactly what to build." },
  { step: "03", title: "I build. You grow.", desc: "You focus on delivering your service. I build the system that brings you customers." },
]

export function HomeContact() {
  return (
    <section id="contact" className="px-6 py-24 sm:py-32 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-cyan-400 border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 rounded-full mb-6">
              Let&apos;s Build
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white mb-6">
              Ready to Stop<br />
              Leaving Money<br />
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                on the Table?
              </span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 max-w-md">
              Every day without a proper acquisition system is revenue you&apos;re giving to your competition. Let&apos;s fix that.
            </p>

            <EmailCapture
              tag="newsletter"
              ctaText="Book My Free Strategy Call"
              successText="Check your inbox — we'll send you a link to book your free call."
              accentClass="border-cyan-500/30 focus:border-cyan-500/60"
              btnClass="from-cyan-600 to-cyan-500"
            />

            <p className="mt-4 text-xs text-gray-700 text-center">
              Or message directly on{" "}
              <a
                href="https://wa.me/573103956445?text=Hi%20Javier,%20I%20want%20to%20learn%20more%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <MessageCircle className="h-3 w-3" /> WhatsApp
              </a>
            </p>
          </motion.div>

          {/* Right — What happens next */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-6">What happens next</p>
            <div className="space-y-4">
              {steps.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.2 + i * 0.1 }}
                  className="flex gap-5 p-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] transition-colors group"
                >
                  <span className="text-2xl font-black text-white/10 group-hover:text-white/20 transition-colors flex-shrink-0 leading-none mt-0.5">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold tracking-[0.2em] text-cyan-400/70 border border-cyan-500/30 px-2.5 py-1 rounded">javierayala.pro</span>
          </div>
          <p className="text-xs text-gray-700 uppercase tracking-widest">Google Ads · Meta Ads · SEO · AI Automation</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/javierayala1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://wa.me/573103956445"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="#newsletter"
              className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
            >
              Newsletter
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
