"use client"

import Link from "next/link"
import { ArrowUpRight, Target, Search, Bot, Rocket, MapPin, Zap } from "lucide-react"
import { motion } from "framer-motion"

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const services = [
  {
    number: "01",
    icon: Target,
    title: "Google Ads Management",
    tag: "Paid Acquisition",
    description: "AI-powered campaign optimization that turns ad spend into predictable, profitable customer acquisition. No wasted budget.",
    href: "/googleadsai",
    accent: "hover:border-cyan-500/40 group-hover:bg-cyan-500/[0.03]",
    iconBg: "bg-cyan-500/10 text-cyan-400",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    number: "02",
    icon: Search,
    title: "SEO & Content Automation",
    tag: "Organic Growth",
    description: "Weekly AI-generated blog posts, optimized content and automated submissions that compound your rankings month after month.",
    href: "/rankflow",
    accent: "hover:border-emerald-500/40 group-hover:bg-emerald-500/[0.03]",
    iconBg: "bg-emerald-500/10 text-emerald-400",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    number: "03",
    icon: MapPin,
    title: "Google Maps Domination",
    tag: "Local SEO",
    description: "Optimize your Google Business Profile, automate review responses, and rank in the top 3 local pack within 90 days.",
    href: "/seo",
    accent: "hover:border-blue-500/40 group-hover:bg-blue-500/[0.03]",
    iconBg: "bg-blue-500/10 text-blue-400",
    tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    number: "04",
    icon: Bot,
    title: "AI Booking Agents",
    tag: "Automation",
    description: "AI that answers leads 24/7, qualifies them, and books appointments while you sleep. Never miss another customer again.",
    href: "/ai-agent",
    accent: "hover:border-violet-500/40 group-hover:bg-violet-500/[0.03]",
    iconBg: "bg-violet-500/10 text-violet-400",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    number: "05",
    icon: Rocket,
    title: "48-Hour Business Launch",
    tag: "Fast Track",
    description: "Landing page + Google Ads live in 48 hours. For new businesses that need customers immediately. No delays.",
    href: "/launch",
    accent: "hover:border-orange-500/40 group-hover:bg-orange-500/[0.03]",
    iconBg: "bg-orange-500/10 text-orange-400",
    tagColor: "text-orange-400 bg-orange-500/10 border-orange-500/20",
  },
  {
    number: "06",
    icon: Zap,
    title: "Local Domination Bundle",
    tag: "Full System",
    description: "The complete system: SEO + Google Ads + GMB + AI Agent. Everything working together to dominate your local market.",
    href: "/domination",
    accent: "hover:border-yellow-500/40 group-hover:bg-yellow-500/[0.03]",
    iconBg: "bg-yellow-500/10 text-yellow-400",
    tagColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  },
]

export function HomeServices() {
  return (
    <section id="services" className="px-6 py-24 sm:py-32 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16"
        >
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-cyan-400 border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 rounded-full mb-4">
              Frameworks & Services
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white">
              Every Tool You Need<br />
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                To Own Your Market.
              </span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-xs text-sm leading-relaxed sm:text-right">
            Not one-off tactics. Complete systems built to compound over time and run without you.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.07 }}
            >
              <Link
                href={service.href}
                className={`group relative flex flex-col h-full p-7 rounded-2xl border border-white/[0.07] bg-white/[0.02] transition-all duration-300 overflow-hidden ${service.accent}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${service.iconBg} transition-transform group-hover:scale-110 duration-300`}>
                    <service.icon className="h-5 w-5" />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${service.tagColor}`}>
                    {service.tag}
                  </span>
                </div>

                <span className="text-[80px] font-black leading-none text-white/[0.025] absolute right-4 top-2 select-none pointer-events-none">
                  {service.number}
                </span>

                <h3 className="text-lg font-bold text-white mb-3 leading-snug">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors flex-1">
                  {service.description}
                </p>

                <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors font-medium uppercase tracking-wider">
                    Explore Framework
                  </span>
                  <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all duration-300">
                    <ArrowUpRight className="h-3.5 w-3.5 text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
