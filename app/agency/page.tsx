import type { Metadata } from "next"
import AgencyContent from "./content"

export const metadata: Metadata = {
  title: "Agency Google Ads AI Masterclass | Javier Ayala",
  description: "Free masterclass for agency owners: how to run an AI-level scan across your entire MCC and fix the structural problems draining every client's budget. Stay till the end and we scan your full portfolio live.",
  keywords: "Google Ads agency MCC, Google Ads AI for agencies, Google Ads optimization at scale, MCC audit, agency Google Ads masterclass",
  openGraph: {
    title: "Agency Google Ads AI Masterclass | Javier Ayala",
    description: "Free masterclass for agency owners. Stay till the end and we scan your entire MCC live — every client account, every structural problem, found.",
    type: "website",
  },
}

export default function AgencyPage() {
  return <AgencyContent />
}
