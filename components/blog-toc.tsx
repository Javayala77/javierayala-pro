"use client"

import { useEffect, useState } from "react"

type Heading = { id: string; text: string }

export default function BlogTOC({ headings }: { headings: Heading[] }) {
  const [active, setActive] = useState<string>("")

  useEffect(() => {
    if (headings.length === 0) return
    const observers: IntersectionObserver[] = []

    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: "-20% 0px -70% 0px" }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav className="w-full">
      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-4">In This Article</p>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-0 bottom-0 w-px bg-white/[0.06]" />

        <div className="space-y-1">
          {headings.map(({ id, text }, i) => {
            const isActive = active === id
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
                  setActive(id)
                }}
                className="group flex items-start gap-3 py-1.5 pl-0 relative"
              >
                {/* Dot */}
                <div className={`relative z-10 mt-[5px] w-3.5 h-3.5 rounded-full flex-shrink-0 border transition-all duration-300 ${
                  isActive
                    ? "bg-cyan-500 border-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.5)]"
                    : "bg-[#060609] border-white/[0.12] group-hover:border-cyan-500/40"
                }`}>
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-cyan-400/30 animate-ping" />
                  )}
                </div>
                {/* Text */}
                <span className={`text-xs leading-snug transition-colors duration-200 ${
                  isActive ? "text-cyan-400 font-semibold" : "text-gray-500 group-hover:text-gray-300"
                }`}>
                  {text}
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
