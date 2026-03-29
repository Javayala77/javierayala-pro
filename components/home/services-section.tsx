"use client"

import Link from "next/link"
import { ArrowUpRight, Target, Search, Bot, MapPin, Zap, MessageCircle, Calendar } from "lucide-react"
import { motion } from "framer-motion"

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const services = [
  {
    number: "01",
    icon: Target,
    title: "Google Ads Management",
    tag: "Paid Search",
    description: "AI-optimized campaigns that turn ad spend into predictable, profitable customer acquisition. Free audit in 48 hours.",
    href: "/googleadsai",
    accent: "hover:border-cyan-500/40 group-hover:bg-cyan-500/[0.03]",
    iconBg: "bg-cyan-500/10 text-cyan-400",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    number: "02",
    icon: Target,
    title: "Meta Ads",
    tag: "Paid Social",
    description: "Facebook + Instagram campaigns with precision targeting. Stop boosting posts — run real ads that generate real leads.",
    href: "/meta-ads",
    accent: "hover:border-pink-500/40 group-hover:bg-pink-500/[0.03]",
    iconBg: "bg-pink-500/10 text-pink-400",
    tagColor: "text-pink-400 bg-pink-500/10 border-pink-500/20",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "WhatsApp Chatbot",
    tag: "Automation",
    description: "WhatsApp Cloud API bot that responds instantly 24/7, qualifies leads, and books appointments while you work.",
    href: "/whatsapp",
    accent: "hover:border-green-500/40 group-hover:bg-green-500/[0.03]",
    iconBg: "bg-green-500/10 text-green-400",
    tagColor: "text-green-400 bg-green-500/10 border-green-500/20",
  },
  {
    number: "04",
    icon: Calendar,
    title: "Social Media Automation",
    tag: "Content",
    description: "30 AI-created posts per month across Instagram, Facebook, and LinkedIn. Scheduled, published, and tracked automatically.",
    href: "/social-media",
    accent: "hover:border-violet-500/40 group-hover:bg-violet-500/[0.03]",
    iconBg: "bg-violet-500/10 text-violet-400",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    number: "05",
    icon: Search,
    title: "SEO & Content Automation",
    tag: "Organic Growth",
    description: "Weekly AI-generated blog posts, GMB updates, and automated indexing that compounds your rankings month after month.",
    href: "/rankflow",
    accent: "hover:border-emerald-500/40 group-hover:bg-emerald-500/[0.03]",
    iconBg: "bg-emerald-500/10 text-emerald-400",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    number: "06",
    icon: MapPin,
    title: "Google Maps Domination",
    tag: "Local SEO",
    description: "Full GMB optimization, review automation, and weekly posts. Rank in the top 3 local pack within 90 days.",
    href: "/seo",
    accent: "hover:border-blue-500/40 group-hover:bg-blue-500/[0.03]",
    iconBg: "bg-blue-500/10 text-blue-400",
    tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    number: "07",
    icon: Bot,
    title: "AI Booking Agent",
    tag: "AI Agent",
    description: "AI that answers leads across WhatsApp, your website, and social — qualifying and booking appointments 24/7.",
    href: "/ai-agent",
    accent: "hover:border-purple-500/40 group-hover:bg-purple-500/[0.03]",
    iconBg: "bg-purple-500/10 text-purple-400",
    tagColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  },
  {
    number: "08",
    icon: Zap,
    title: "Local Domination Bundle",
    tag: "Full System",
    description: "Google Ads + SEO + Google Maps — all three running under one unified strategy. Save $200/mo vs. buying separately.",
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
              Every Channel.<br />
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                One Expert.
              </span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-xs text-sm leading-relaxed sm:text-right">
            Google, Meta, WhatsApp, SEO, Social — all managed under one AI-powered strategy.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.05 }}
            >
              <Link
                href={service.href}
                className={`group relative flex flex-col h-full p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] transition-all duration-300 overflow-hidden ${service.accent}`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${service.iconBg} transition-transform group-hover:scale-110 duration-300`}>
                    <service.icon className="h-4.5 w-4.5 h-[18px] w-[18px]" />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full border ${service.tagColor}`}>
                    {service.tag}
                  </span>
                </div>

                <span className="text-[72px] font-black leading-none text-white/[0.025] absolute right-3 top-2 select-none pointer-events-none">
                  {service.number}
                </span>

                <h3 className="text-base font-bold text-white mb-2 leading-snug">{service.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors flex-1">
                  {service.description}
                </p>

                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] text-gray-600 group-hover:text-gray-400 transition-colors font-medium uppercase tracking-wider">
                    Explore
                  </span>
                  <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all duration-300">
                    <ArrowUpRight className="h-3 w-3 text-gray-500 group-hover:text-white transition-colors" />
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
