import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import { ArrowRight, Clock, Tag } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog — AI Marketing & Local SEO | Javier Ayala",
  description: "Practical AI marketing tactics, Google Ads breakdowns, local SEO strategies, and automation guides for contractors, roofers, doctors, and lawyers.",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-[#060609]">
      {/* Nav */}
      <div className="border-b border-white/[0.05] px-6 py-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold tracking-[0.2em] text-cyan-400/70 border border-cyan-500/30 px-2.5 py-1 rounded">javierayala.pro</span>
          </Link>
          <Link href="/" className="text-xs text-gray-500 hover:text-white transition-colors">← Back to home</Link>
        </div>
      </div>

      {/* Hero */}
      <div className="relative px-6 pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.07),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-cyan-400 border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 rounded-full mb-5">
            The Blog
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            AI Marketing Tactics<br />That Actually Work.
          </h1>
          <p className="text-gray-500 text-lg max-w-xl">
            No theory. No fluff. Real strategies for contractors, roofers, doctors, and lawyers who want more customers from Google.
          </p>
        </div>
      </div>

      {/* Posts */}
      <div className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full">
                    <Tag className="h-2.5 w-2.5" />
                    {post.category}
                  </span>
                </div>

                <h2 className="text-base font-bold text-white leading-snug mb-3 group-hover:text-cyan-50 transition-colors flex-1">
                  {post.title}
                </h2>

                <p className="text-xs text-gray-500 leading-relaxed mb-5 line-clamp-3">
                  {post.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/[0.05]">
                  <div className="flex items-center gap-1.5 text-[10px] text-gray-600">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-cyan-400 group-hover:gap-2 transition-all">
                    Read <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
