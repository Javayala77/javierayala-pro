import { Metadata } from "next"
import { HomeHero } from "@/components/home/hero-section"
import { HomeServices } from "@/components/home/services-section"
import { HomeResults } from "@/components/home/results-section"
import { HomeApproach } from "@/components/home/approach-section"
import { HomeNewsletter } from "@/components/home/newsletter-section"
import { HomeAbout } from "@/components/home/about-section"
import { HomeContact } from "@/components/home/contact-section"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Javier Ayala | AI Marketing & Automation for Local Businesses",
  description: "I help local service businesses get more customers using AI-powered marketing, automation, and Google Ads. Serving businesses worldwide.",
  keywords: "AI marketing, Google Ads, local business marketing, automation, marketing expert",
  openGraph: {
    title: "Javier Ayala | AI Marketing & Automation Expert",
    description: "I help local service businesses get more customers using AI-powered marketing and automation.",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white overflow-x-hidden">
      <WhatsAppButton />
      <HomeHero />
      <HomeServices />
      <HomeResults />
      <HomeApproach />
      <HomeNewsletter />
      <HomeAbout />
      <HomeContact />
    </main>
  )
}
