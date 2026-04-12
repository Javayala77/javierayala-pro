import type { Metadata } from "next"
import SearchConsoleDashboard from "./dashboard-client"

export const metadata: Metadata = {
  title: "SEO Dashboard | javierayala.pro",
  robots: "noindex, nofollow",
}

export default function DashboardPage() {
  return <SearchConsoleDashboard />
}
