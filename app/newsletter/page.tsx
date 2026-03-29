import { Metadata } from "next"
import { NewsletterHero } from "@/components/newsletter/hero-section"
import { NewsletterBenefits } from "@/components/newsletter/benefits-section"
import { NewsletterSocialProof } from "@/components/newsletter/social-proof-section"
import { NewsletterAbout } from "@/components/newsletter/about-section"
import { NewsletterFaq } from "@/components/newsletter/faq-section"

export const metadata: Metadata = {
  title: "The AI Advantage | Weekly AI Marketing Insights for Local Businesses",
  description: "Join 500+ local business owners getting weekly AI marketing strategies, automation tips, and real case studies. Free. No fluff. Just results.",
  openGraph: {
    title: "The AI Advantage Newsletter",
    description: "Weekly AI marketing insights that actually work for local businesses.",
    type: "website",
  },
}

export default function NewsletterPage() {
  return (
    <main className="min-h-screen bg-[#09090B] text-white overflow-x-hidden">
      <NewsletterHero />
      <NewsletterSocialProof />
      <NewsletterBenefits />
      <NewsletterAbout />
      <NewsletterFaq />
    </main>
  )
}
