import { Metadata } from "next"
import { LaunchHero } from "@/components/launch/hero-section"
import { LaunchProblem } from "@/components/launch/problem-section"
import { LaunchSolution } from "@/components/launch/solution-section"
import { LaunchIncluded } from "@/components/launch/included-section"
import { LaunchWhoFor } from "@/components/launch/who-for-section"
import { LaunchUrgency } from "@/components/launch/urgency-section"
import { LaunchPricing } from "@/components/launch/pricing-section"
import { LaunchFaq } from "@/components/launch/faq-section"
import { LaunchFinalCta } from "@/components/launch/final-cta-section"
import { LaunchWhatsApp } from "@/components/launch/whatsapp-button"
import { LaunchStickyCta } from "@/components/launch/sticky-cta"

export const metadata: Metadata = {
  title: "FastLaunch Pro | Your Business Online in 48 Hours | Miami",
  description: "Complete business launch package for $800. Landing page + Google Ads + First month managed. Phone ringing in 48 hours. Miami specialists.",
  keywords: "business launch, Google Ads Miami, landing page Miami, new business marketing, get customers fast",
  openGraph: {
    title: "Your Business. Online. In 48 Hours. | FastLaunch Pro",
    description: "We build your landing page, launch your Google Ads, and have your phone ringing — all in 48 hours flat. $800 all-in.",
    type: "website",
  },
}

export default function LaunchPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <LaunchStickyCta />
      <LaunchHero />
      <LaunchProblem />
      <LaunchSolution />
      <LaunchIncluded />
      <LaunchWhoFor />
      <LaunchUrgency />
      <LaunchPricing />
      <LaunchFaq />
      <LaunchFinalCta />
      <LaunchWhatsApp />
    </main>
  )
}
