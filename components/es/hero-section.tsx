"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Zap, TrendingUp, DollarSign, Bot } from "lucide-react"

const headlines = [
  {
    main: "Tus Google Ads Estan Desperdiciando Dinero.",
    highlight: "Lo Arreglo en 48 Horas.",
  },
  {
    main: "Mas Llamadas. Menos Desperdicio.",
    highlight: "Google Ads Gestionado por IA + Un Especialista Real.",
  },
  {
    main: "Uso IA Para Encontrar Cada Dolar",
    highlight: "Que Tus Google Ads Estan Desperdiciando — Gratis.",
  },
]

export function HeroSectionES() {
  const [currentHeadline] = useState(0)
  
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(255,255,255,0.02)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,255,255,0.02)_1px,_transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        {/* Logo */}
        <div className="mb-10 flex justify-center">
          <Image
            src="/logo.png?v=2"
            alt="Google Ads AI Expert - Javier Ayala"
            width={200}
            height={140}
            className="h-auto w-auto max-h-28 sm:max-h-32"
            priority
            unoptimized
          />
        </div>
        
        {/* AI Badge */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
            <Bot className="h-4 w-4" />
            <span>Impulsado por IA + Google Ads API</span>
          </div>
        </div>
        
        {/* Main Headline */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance font-sans text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            {headlines[currentHeadline].main}{" "}
            <span className="text-primary">{headlines[currentHeadline].highlight}</span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            ¿Cansado de agencias que toman tu dinero y no entregan nada? Uso automatizacion con IA para auditar, 
            corregir y optimizar tus campanas de Google Ads — en minutos, no semanas. 
            Resultados reales para negocios de servicios locales.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button 
              size="lg" 
              className="h-14 px-8 text-lg font-semibold"
              asChild
            >
              <a href="#audit-form">
                Obtener Tu Auditoria Gratis de Google Ads
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              Sin tarjeta de credito. Sin compromiso. Sin trucos.
            </p>
          </div>
        </div>
        
        {/* Trust Signals */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          <TrustSignal 
            icon={<DollarSign className="h-5 w-5" />}
            value="$2.4M+"
            label="Gasto Publicitario Gestionado"
          />
          <TrustSignal 
            icon={<TrendingUp className="h-5 w-5" />}
            value="47%"
            label="Aumento Prom. en Llamadas"
          />
          <TrustSignal 
            icon={<Zap className="h-5 w-5" />}
            value="48hrs"
            label="Tiempo de Auditoria"
          />
          <TrustSignal 
            icon={<Bot className="h-5 w-5" />}
            value="100+"
            label="Cuentas Optimizadas"
          />
        </div>
      </div>
    </section>
  )
}

function TrustSignal({ 
  icon, 
  value, 
  label 
}: { 
  icon: React.ReactNode
  value: string
  label: string 
}) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-lg border border-border/50 bg-card/50 p-4 backdrop-blur-sm">
      <div className="flex items-center gap-2 text-primary">
        {icon}
        <span className="text-2xl font-bold text-foreground sm:text-3xl">{value}</span>
      </div>
      <span className="text-center text-sm text-muted-foreground">{label}</span>
    </div>
  )
}
