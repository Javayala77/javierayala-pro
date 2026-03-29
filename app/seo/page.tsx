import { Metadata } from "next"
import { SeoHero } from "@/components/seo/hero-section"
import { SeoProblem } from "@/components/seo/problem-section"
import { SeoSolution } from "@/components/seo/solution-section"
import { SeoHowItWorks } from "@/components/seo/how-it-works-section"
import { SeoResults } from "@/components/seo/results-section"
import { SeoIncluded } from "@/components/seo/included-section"
import { SeoWhoFor } from "@/components/seo/who-for-section"
import { SeoFaq } from "@/components/seo/faq-section"
import { SeoFinalCta } from "@/components/seo/final-cta-section"
import { SeoWhatsAppButton } from "@/components/seo/whatsapp-button"
import { SeoStickyCta } from "@/components/seo/sticky-cta"

export const metadata: Metadata = {
  title: "MapRank Pro | Get Found First on Google Maps",
  description: "Why are your competitors showing up before you on Google Maps? Discover the secret to dominating the local pack.",
  keywords: "Google Business Profile management, Google Maps optimization, review management, local SEO",
  openGraph: {
    title: "Why Are Your Competitors Always Above You On Google Maps?",
    description: "Discover how local businesses are dominating Google Maps and getting more calls than ever.",
    type: "website",
  },
}

export default function SeoLandingPage() {
  return (
    <main className="min-h-screen bg-[#0A0F1E] text-white overflow-x-hidden">
      <SeoStickyCta />
      <SeoHero />
      <SeoProblem />
      <SeoSolution />
      <SeoHowItWorks />
      <SeoResults />
      <SeoIncluded />
      <SeoWhoFor />
      <SeoFaq />
      <SeoFinalCta />
      <SeoWhatsAppButton />
    </main>
  )
}
