import { RankFlowHero } from "@/components/rankflow/hero-section"
import { RankFlowStory } from "@/components/rankflow/story-section"
import { RankFlowProblem } from "@/components/rankflow/problem-section"
import { RankFlowBeforeAfter } from "@/components/rankflow/before-after-section"
import { RankFlowSolution } from "@/components/rankflow/solution-section"
import { RankFlowHowItWorks } from "@/components/rankflow/how-it-works-section"
import { RankFlowWhoFor } from "@/components/rankflow/who-for-section"
import { RankFlowSocialProof } from "@/components/rankflow/social-proof-section"
import { RankFlowFaq } from "@/components/rankflow/faq-section"
import { RankFlowFinalCta } from "@/components/rankflow/final-cta-section"
import { RankFlowWhatsAppButton } from "@/components/rankflow/whatsapp-button"
import { RankFlowStickyCta } from "@/components/rankflow/sticky-cta"

export const metadata = {
  title: "RankFlow Pro | Your Competitor Posts Content Every Week. You Don't.",
  description: "Stop being invisible on Google. We publish SEO blog posts, Google Business updates, and social content every week — automatically. While you run your business.",
}

export default function RankFlowPage() {
  return (
    <main className="min-h-screen bg-[#0A0F1E] text-white overflow-x-hidden">
      <RankFlowStickyCta />
      <RankFlowHero />
      <RankFlowStory />
      <RankFlowProblem />
      <RankFlowBeforeAfter />
      <RankFlowSolution />
      <RankFlowHowItWorks />
      <RankFlowWhoFor />
      <RankFlowSocialProof />
      <RankFlowFaq />
      <RankFlowFinalCta />
      <RankFlowWhatsAppButton />
    </main>
  )
}
