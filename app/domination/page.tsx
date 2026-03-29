import { DominationHero } from "@/components/domination/hero-section"
import { DominationProblem } from "@/components/domination/problem-section"
import { DominationStack } from "@/components/domination/stack-section"
import { DominationResults } from "@/components/domination/results-section"
import { DominationWhoFor } from "@/components/domination/who-for-section"
import { DominationPricing } from "@/components/domination/pricing-section"
import { DominationFaq } from "@/components/domination/faq-section"
import { DominationFinalCta } from "@/components/domination/final-cta-section"
import { DominationWhatsAppButton } from "@/components/domination/whatsapp-button"
import { DominationStickyCta } from "@/components/domination/sticky-cta"

export const metadata = {
  title: "Local Domination Bundle | SEO + Google Ads + GMB | $1,594/mo",
  description: "The complete local marketing system. SEO content, Google Ads management, and GMB optimization - all managed for you. Save $200/mo with the bundle.",
}

export default function DominationPage() {
  return (
    <main className="min-h-screen bg-[#0A0A12] text-white overflow-x-hidden">
      <DominationStickyCta />
      <DominationHero />
      <DominationProblem />
      <DominationStack />
      <DominationResults />
      <DominationWhoFor />
      <DominationPricing />
      <DominationFaq />
      <DominationFinalCta />
      <DominationWhatsAppButton />
    </main>
  )
}
