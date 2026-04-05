import type { Metadata } from "next"
import { HeroSectionES } from "@/components/es/hero-section"
import { SocialProofBarES } from "@/components/es/social-proof-bar"
import { ProblemSectionES } from "@/components/es/problem-section"
import { SolutionSectionES } from "@/components/es/solution-section"
import { HowItWorksSectionES } from "@/components/es/how-it-works-section"
import { AuditChecklistSectionES } from "@/components/es/audit-checklist-section"
import { CaseStudiesSectionES } from "@/components/es/case-studies-section"
import { AIAdvantageSectionES } from "@/components/es/ai-advantage-section"
import { AboutSectionES } from "@/components/es/about-section"
import { FAQSectionES } from "@/components/es/faq-section"
import { FinalCTASectionES } from "@/components/es/final-cta-section"
import { FooterES } from "@/components/es/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  alternates: {
    canonical: "https://javierayala.pro/es",
    languages: {
      "en": "https://javierayala.pro/",
      "es": "https://javierayala.pro/es",
    },
  },
  title: 'Javier Ayala | Gestion de Google Ads con IA para Negocios de Servicios Locales',
  description: 'Deja de desperdiciar dinero en Google Ads. Uso IA para encontrar cada dolar que tus campanas estan desperdiciando — y lo arreglo en 48 horas. Auditoria gratis para plomeros, HVAC, techadores, dentistas y mas.',
  keywords: 'gestion Google Ads, publicidad con IA, anuncios para negocios locales, gestion PPC, auditoria Google Ads, marketing para plomeros, publicidad HVAC',
  openGraph: {
    title: 'Tus Google Ads Estan Desperdiciando Dinero. Lo Arreglo en 48 Horas.',
    description: 'Gestion de Google Ads impulsada por IA para negocios de servicios locales. Mas llamadas, menos desperdicio, resultados reales.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gestion de Google Ads con IA | Javier Ayala',
    description: 'Deja de desperdiciar dinero en Google Ads. La auditoria gratis revela exactamente a donde esta yendo tu presupuesto.',
  },
}

export default function LandingPageES() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <WhatsAppButton />
      <HeroSectionES />
      <SocialProofBarES />
      <ProblemSectionES />
      <SolutionSectionES />
      <HowItWorksSectionES />
      <AuditChecklistSectionES />
      <CaseStudiesSectionES />
      <AIAdvantageSectionES />
      <AboutSectionES />
      <FAQSectionES />
      <FinalCTASectionES />
      <FooterES />
    </main>
  )
}
