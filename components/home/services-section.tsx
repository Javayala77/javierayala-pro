"use client"

import Link from "next/link"
import { ArrowUpRight, Target, Search, Bot, Rocket, MapPin, Zap } from "lucide-react"

const services = [
  {
    icon: Target,
    title: "Google Ads Management",
    description: "AI-powered campaign optimization that turns your ad spend into predictable, profitable customer acquisition.",
    href: "/googleadsai",
    color: "cyan",
  },
  {
    icon: Search,
    title: "SEO & Content Automation",
    description: "Weekly blog posts, optimized content, and automated submissions that compound your organic rankings month after month.",
    href: "/rankflow",
    color: "green",
  },
  {
    icon: MapPin,
    title: "Google Maps Domination",
    description: "Optimize your Google Business Profile, automate review responses, and rank higher in the local pack.",
    href: "/seo",
    color: "blue",
  },
  {
    icon: Bot,
    title: "AI Booking Agents",
    description: "AI that answers leads 24/7, qualifies them, and books appointments while you sleep. Never miss another customer.",
    href: "/ai-agent",
    color: "purple",
  },
  {
    icon: Rocket,
    title: "48-Hour Business Launch",
    description: "Landing page + Google Ads live in 48 hours. For new businesses that need customers immediately.",
    href: "/launch",
    color: "orange",
  },
  {
    icon: Zap,
    title: "Local Domination Bundle",
    description: "The complete system: SEO + Google Ads + GMB. Everything working together to dominate your local market.",
    href: "/domination",
    color: "yellow",
  },
]

const colorMap = {
  cyan: "group-hover:text-cyan-400 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10",
  green: "group-hover:text-green-400 group-hover:border-green-500/50 group-hover:bg-green-500/10",
  blue: "group-hover:text-blue-400 group-hover:border-blue-500/50 group-hover:bg-blue-500/10",
  purple: "group-hover:text-purple-400 group-hover:border-purple-500/50 group-hover:bg-purple-500/10",
  orange: "group-hover:text-orange-400 group-hover:border-orange-500/50 group-hover:bg-orange-500/10",
  yellow: "group-hover:text-yellow-400 group-hover:border-yellow-500/50 group-hover:bg-yellow-500/10",
}

const iconColorMap = {
  cyan: "text-cyan-400",
  green: "text-green-400",
  blue: "text-blue-400",
  purple: "text-purple-400",
  orange: "text-orange-400",
  yellow: "text-yellow-400",
}

export function HomeServices() {
  return (
    <section id="services" className="px-6 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Services</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6">
            Everything You Need To
            <br />
            <span className="text-cyan-400">Dominate Your Market</span>
          </h2>
          <p className="text-lg text-gray-400">
            I build complete marketing systems. Not one-off tactics. Every service works together 
            to bring you more customers, more consistently.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className={`group relative p-8 rounded-2xl border border-gray-800 bg-gray-900/50 hover:bg-gray-900 transition-all duration-300 ${colorMap[service.color as keyof typeof colorMap]}`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center mb-6 transition-colors ${iconColorMap[service.color as keyof typeof iconColorMap]}`}>
                <service.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="h-5 w-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
