import { HeroSection } from "@/components/hero-section"
import { SocialProofBar } from "@/components/social-proof-bar"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { AuditChecklistSection } from "@/components/audit-checklist-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { AIAdvantageSection } from "@/components/ai-advantage-section"
import { AboutSection } from "@/components/about-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata = {
  title: "AI-Powered Google Ads Management | Javier Ayala",
  description: "Stop wasting money on Google Ads. I use AI to find every dollar your campaigns are wasting — and fix it in 48 hours. Free audit for local service businesses.",
}

export default function GoogleAdsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <WhatsAppButton />
      <HeroSection />
      <SocialProofBar />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <AuditChecklistSection />
      <CaseStudiesSection />
      <AIAdvantageSection />
      <AboutSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
