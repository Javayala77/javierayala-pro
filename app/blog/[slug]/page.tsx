import { notFound } from "next/navigation"
import Link from "next/link"
import { getPostBySlug, getAllPosts } from "@/lib/blog"
import { ArrowLeft, ArrowRight, Clock, Calendar, Tag } from "lucide-react"
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

  const allPosts = getAllPosts()
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 4)

  const formatted = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  })

  return (
    <main className="min-h-screen bg-[#060609]">
      {/* Nav */}
      <div className="border-b border-white/[0.05] px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold tracking-[0.2em] text-cyan-400/70 border border-cyan-500/30 px-2.5 py-1 rounded">javierayala.pro</span>
          </Link>
          <Link href="/blog" className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors">
            <ArrowLeft className="h-3.5 w-3.5" /> All posts
          </Link>
        </div>
      </div>

      {/* Layout */}
      <div className="px-6 py-14">
        <div className="max-w-7xl mx-auto flex gap-12 items-start">

          {/* Article */}
          <article className="flex-1 min-w-0">
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

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed mb-12 border-b border-white/[0.06] pb-12">
              {post.description}
            </p>

            <div className="prose-blog" dangerouslySetInnerHTML={{ __html: post.content }} />

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

            {/* CTA */}
            <div className="mt-12">
              <div className="p-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.04] text-center">
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
                  Want This Done for Your Business?
                </h2>
                <p className="text-gray-400 mb-6 max-w-lg mx-auto">
                  We handle everything automatically — Google Ads, Meta Ads, WhatsApp automation, SEO. Message us and we&apos;ll show you what&apos;s possible in your market.
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
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block w-72 flex-shrink-0 sticky top-8">

            {/* More Articles */}
            {related.length > 0 && (
              <div className="mb-8">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-4">More Articles</p>
                <div className="space-y-3">
                  {related.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="group flex flex-col p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all"
                    >
                      <span className="text-[9px] font-bold uppercase tracking-widest text-cyan-400 mb-1.5">{p.category}</span>
                      <span className="text-xs font-semibold text-gray-300 leading-snug group-hover:text-white transition-colors mb-2">{p.title}</span>
                      <span className="flex items-center gap-1 text-[10px] text-gray-600 group-hover:text-cyan-400 transition-colors">
                        <Clock className="h-2.5 w-2.5" />{p.readTime}
                      </span>
                    </Link>
                  ))}
                </div>
                <Link href="/blog" className="flex items-center gap-1 mt-4 text-xs text-cyan-400 hover:text-cyan-300 transition-colors">
                  View all posts <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            )}

            {/* Services */}
            <div className="mb-8">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-4">Services</p>
              <div className="space-y-2">
                {[
                  { label: "Google Ads", href: "/googleadsai", color: "text-cyan-400" },
                  { label: "Meta Ads", href: "/meta-ads", color: "text-pink-400" },
                  { label: "WhatsApp Bot", href: "/whatsapp", color: "text-green-400" },
                  { label: "SEO & Content", href: "/rankflow", color: "text-emerald-400" },
                  { label: "Google Maps", href: "/seo", color: "text-blue-400" },
                  { label: "AI Agent", href: "/ai-agent", color: "text-purple-400" },
                ].map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex items-center justify-between px-3 py-2 rounded-lg border border-white/[0.05] bg-white/[0.02] hover:border-white/[0.12] transition-all group"
                  >
                    <span className={`text-xs font-medium ${s.color}`}>{s.label}</span>
                    <ArrowRight className="h-3 w-3 text-gray-700 group-hover:text-gray-400 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/[0.04] text-center">
              <p className="text-xs font-bold text-white mb-1">Get more customers</p>
              <p className="text-[11px] text-gray-500 mb-3">Free Google ranking check — no commitment</p>
              <a
                href="https://wa.me/573103956445?text=I%20want%20more%20leads%20from%20Google"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-9 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold text-xs flex items-center justify-center hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
              >
                Message on WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
