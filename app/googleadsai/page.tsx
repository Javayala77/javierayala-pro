import type { Metadata } from "next"
import GoogleAdsContent from "./content"

export const metadata: Metadata = {
  title: "Google Ads AI System for Local Businesses | Javier Ayala",
  description: "Most local businesses waste 40–60% of their Google Ads budget on 6 structural mistakes. I built an AI-powered system that fixes them — and turns wasted spend into booked jobs.",
  keywords: "Google Ads management, AI Google Ads, Google Ads local business, Google Ads for contractors, Google Ads optimization",
  openGraph: {
    title: "Google Ads AI System for Local Businesses | Javier Ayala",
    description: "Most local businesses waste 40–60% of their Google Ads budget on 6 structural mistakes. I built an AI-powered system that fixes them — and turns wasted spend into booked jobs.",
    type: "website",
  },
}

export default function GoogleAdsPage() {
  return <GoogleAdsContent />
}
