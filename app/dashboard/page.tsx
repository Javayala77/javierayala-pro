import type { Metadata } from "next"
import SearchConsoleDashboard from "./dashboard-client"
import { getAllPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "SEO Dashboard | javierayala.pro",
  robots: "noindex, nofollow",
}

const BASE = "https://javierayala.pro"

export default function DashboardPage() {
  const posts = getAllPosts().map((p) => ({
    slug: p.slug,
    title: p.title,
    date: p.date,
    url: `${BASE}/blog/${p.slug}`,
  }))
  return <SearchConsoleDashboard posts={posts} />
}
