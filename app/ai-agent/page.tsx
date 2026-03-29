import { Metadata } from "next"
import { AIAgentHero } from "@/components/ai-agent/hero-section"
import { AIAgentProblem } from "@/components/ai-agent/problem-section"
import { AIAgentSolution } from "@/components/ai-agent/solution-section"
import { AIAgentHowItWorks } from "@/components/ai-agent/how-it-works-section"
import { AIAgentCapabilities } from "@/components/ai-agent/capabilities-section"
import { AIAgentPlatforms } from "@/components/ai-agent/platforms-section"
import { AIAgentResults } from "@/components/ai-agent/results-section"
import { AIAgentWhoFor } from "@/components/ai-agent/who-for-section"
import { AIAgentComparison } from "@/components/ai-agent/comparison-section"
import { AIAgentFaq } from "@/components/ai-agent/faq-section"
import { AIAgentFinalCta } from "@/components/ai-agent/final-cta-section"
import { AIAgentWhatsAppButton } from "@/components/ai-agent/whatsapp-button"
import { AIAgentStickyCta } from "@/components/ai-agent/sticky-cta"

export const metadata: Metadata = {
  title: "AutoBook Pro | AI Booking Agent That Never Sleeps",
  description: "What if your business could book appointments at 3am? Discover how local businesses are capturing leads 24/7 without hiring anyone.",
  keywords: "AI booking agent, appointment scheduling, 24/7 booking, WhatsApp automation",
  openGraph: {
    title: "How Many Leads Are You Losing While You Sleep?",
    description: "Discover the AI that books appointments 24/7 while you focus on what matters.",
    type: "website",
  },
}

export default function AIAgentPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white overflow-x-hidden">
      <AIAgentStickyCta />
      <AIAgentHero />
      <AIAgentProblem />
      <AIAgentSolution />
      <AIAgentHowItWorks />
      <AIAgentCapabilities />
      <AIAgentPlatforms />
      <AIAgentResults />
      <AIAgentWhoFor />
      <AIAgentComparison />
      <AIAgentFaq />
      <AIAgentFinalCta />
      <AIAgentWhatsAppButton />
    </main>
  )
}
