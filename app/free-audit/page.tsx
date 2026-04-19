import type { Metadata } from "next"
import FreeAuditContent from "./content"

export const metadata: Metadata = {
  title: "Free Google Ads AI Scan | Javier Ayala",
  description: "We run an AI-powered scan on your Google Ads account and show you exactly where your budget is leaking — and what to fix first. Free, 30 minutes, no commitment.",
  keywords: "Google Ads AI scan, Google Ads analysis, Google Ads optimization, Google Ads cost per lead, Google Ads AI management",
  openGraph: {
    title: "Free Google Ads AI Scan | Javier Ayala",
    description: "We run an AI-powered scan on your Google Ads account and show you exactly where your budget is leaking — and what to fix first.",
    type: "website",
  },
}

export default function FreeAuditPage() {
  return <FreeAuditContent />
}
