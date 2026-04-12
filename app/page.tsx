import { Metadata } from "next"
import { HomeHero } from "@/components/home/hero-section"
import { HomeServices } from "@/components/home/services-section"
import { HomeResults } from "@/components/home/results-section"
import { HomeApproach } from "@/components/home/approach-section"
import { HomeNewsletter } from "@/components/home/newsletter-section"
import { HomeAbout } from "@/components/home/about-section"
import { HomeContact } from "@/components/home/contact-section"
export const metadata: Metadata = {
  title: "Javier Ayala | Google Ads AI System for Local Businesses",
  description: "I built an AI-powered Google Ads system that cuts cost per lead and floods local service businesses with calls. Free audit in 48 hours.",
  keywords: "Google Ads management, AI Google Ads, Google Ads for contractors, Google Ads local businesses, reduce cost per lead",
  openGraph: {
    title: "Javier Ayala | Google Ads AI System",
    description: "Stop bleeding budget on broken Google Ads. I built an AI-powered system that actually works for local service businesses.",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white overflow-x-hidden">
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
