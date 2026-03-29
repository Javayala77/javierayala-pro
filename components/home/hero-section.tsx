"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Linkedin, Mail, Zap, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
  { label: "Newsletter", href: "#newsletter" },
  { label: "Contact", href: "#contact" },
]

function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  
  useEffect(() => {
    if (!isVisible) return
    
    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isVisible, target, duration])
  
  return <div ref={ref}>{count}{suffix}</div>
}

function FloatingOrb({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <div 
      className={`absolute rounded-full blur-3xl opacity-20 animate-pulse ${className}`}
      style={{ animationDelay: `${delay}ms`, animationDuration: '4s' }}
    />
  )
}

export function HomeHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.1),transparent_50%)]" />
      
      {/* Floating Orbs */}
      <FloatingOrb className="w-96 h-96 bg-cyan-500 top-20 -left-48" delay={0} />
      <FloatingOrb className="w-80 h-80 bg-purple-500 top-40 right-0" delay={1000} />
      <FloatingOrb className="w-64 h-64 bg-cyan-400 bottom-20 left-1/3" delay={2000} />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />
      
      {/* Navigation */}
      <nav className="relative z-20 w-full px-6 py-6 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="relative">
            <span className="text-2xl font-black text-white">Javier Ayala</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
          </div>
          <span className="text-cyan-400 text-2xl animate-pulse">.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href}
              className="relative text-gray-400 hover:text-white transition-colors text-sm group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://www.linkedin.com/in/javierayala1/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative p-2 text-gray-400 hover:text-cyan-400 transition-colors group"
          >
            <Linkedin className="h-5 w-5" />
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 scale-0 group-hover:scale-100 transition-transform" />
          </a>
          <Button 
            size="sm" 
            className="relative bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-black font-semibold rounded-full px-5 overflow-hidden group"
            asChild
          >
            <a href="https://wa.me/573103956445" target="_blank" rel="noopener noreferrer">
              <span className="relative z-10">Let&apos;s Talk</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </Button>
        </div>
      </nav>
      
      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center px-6">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="text-cyan-400 text-sm font-medium">Available for new projects</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6">
              <span className="inline-block animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                I Help Local Businesses
              </span>
              <br />
              <span 
                className="inline-block bg-gradient-to-r from-cyan-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0"
                style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
              >
                Get More Customers
              </span>
              <br />
              <span className="inline-block animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                Using AI.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-xl mb-8 leading-relaxed animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
              Google Ads management, SEO automation, AI booking agents, and marketing systems 
              that work while you sleep. For service businesses that want to grow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
              <Button 
                size="lg" 
                className="group h-14 px-8 text-lg font-bold bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-black rounded-full overflow-hidden relative"
                asChild
              >
                <a href="#services">
                  <span className="relative z-10 flex items-center">
                    See How I Can Help
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="group h-14 px-8 text-lg font-medium border-gray-700 text-white hover:border-cyan-500/50 hover:bg-cyan-500/5 rounded-full transition-all duration-300"
                asChild
              >
                <a href="#newsletter">
                  <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Join Newsletter
                </a>
              </Button>
            </div>
          </div>
          
          {/* Right Column - Animated Stats */}
          <div className="hidden lg:grid grid-cols-2 gap-6">
            {[
              { value: 2, suffix: "M+", label: "Ad spend managed", prefix: "$" },
              { value: 50, suffix: "+", label: "Businesses helped", prefix: "" },
              { value: 8, suffix: "+", label: "Years in marketing", prefix: "" },
              { value: 24, suffix: "/7", label: "AI automation", prefix: "" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0"
                style={{ animationDelay: `${1.1 + index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-5xl font-black text-cyan-400 mb-2 flex items-baseline">
                    {stat.prefix}<AnimatedCounter target={stat.value} suffix={stat.suffix} duration={2000 + index * 200} />
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{stat.label}</p>
                </div>
                <Zap className="absolute top-4 right-4 h-5 w-5 text-cyan-500/30 group-hover:text-cyan-400 group-hover:scale-125 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-gray-500 text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="h-5 w-5 text-cyan-400" />
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
