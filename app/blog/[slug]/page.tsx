import { notFound } from "next/navigation"
import Link from "next/link"
import { getPostBySlug, getAllPosts } from "@/lib/blog"
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} | Javier Ayala`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const formatted = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  })

  return (
    <main className="min-h-screen bg-[#060609]">
      {/* Nav */}
      <div className="border-b border-white/[0.05] px-6 py-5">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold tracking-[0.2em] text-cyan-400/70 border border-cyan-500/30 px-2.5 py-1 rounded">javierayala.pro</span>
          </Link>
          <Link href="/blog" className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors">
            <ArrowLeft className="h-3.5 w-3.5" /> All posts
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="px-6 py-16">
        <div className="max-w-3xl mx-auto">

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-full">
              <Tag className="h-2.5 w-2.5" />{post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-600">
              <Calendar className="h-3 w-3" />{formatted}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-600">
              <Clock className="h-3 w-3" />{post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-lg text-gray-400 leading-relaxed mb-12 border-b border-white/[0.06] pb-12">
            {post.description}
          </p>

          {/* Content */}
          <div
            className="prose-blog"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author */}
          <div className="mt-16 pt-8 border-t border-white/[0.06] flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-white font-black text-lg flex-shrink-0">
              JA
            </div>
            <div>
              <div className="font-bold text-white text-sm">Javier Ayala</div>
              <div className="text-xs text-gray-500">AI Marketing Expert · 8+ years · $2M+ ad spend managed</div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <div className="px-6 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.04] text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Want This Done for Your Business?
            </h2>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              We handle everything in this article — automatically. Daily Google Business posts, weekly SEO content, review management. Message us and we&apos;ll show you what your market looks like right now.
            </p>
            <a
              href="https://wa.me/573103956445?text=I%20want%20more%20leads%20from%20Google"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold text-sm hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300"
            >
              Get My Free Google Ranking Check
            </a>
            <p className="mt-3 text-xs text-gray-600">No commitment · Replies in minutes</p>
          </div>
        </div>
      </div>
    </main>
  )
}
