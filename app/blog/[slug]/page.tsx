import { notFound } from "next/navigation"
import Link from "next/link"
import { getPostBySlug, getAllPosts } from "@/lib/blog"
import { ArrowLeft, ArrowRight, Clock, Calendar, Tag } from "lucide-react"
import type { Metadata } from "next"
import EmailCapture from "@/components/email-capture"

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

            {/* Inline Email Capture */}
            <div className="my-12 p-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.04]">
              <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-2">Free Weekly Insights</p>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight">
                Get 1 AI Marketing Tactic Every Week — Free
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Behind-the-scenes of real campaigns. No fluff. Just what&apos;s producing results right now.
              </p>
              <EmailCapture
                tag="newsletter"
                ctaText="Send Me the Tactics"
                accentClass="border-cyan-500/30 focus:border-cyan-500/60"
                btnClass="from-cyan-600 to-cyan-500"
              />
            </div>

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
              <div className="p-8 rounded-2xl border border-violet-500/20 bg-violet-500/[0.04]">
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 text-center">
                  Want a Free 1-on-1 Strategy Call?
                </h2>
                <p className="text-gray-400 mb-6 text-center max-w-lg mx-auto">
                  Enter your email and we&apos;ll send you a link to book a free 30-minute call — we&apos;ll audit your current marketing and map out exactly what to build.
                </p>
                <EmailCapture
                  tag="newsletter"
                  ctaText="Book My Free Strategy Call"
                  accentClass="border-violet-500/30 focus:border-violet-500/60"
                  btnClass="from-violet-600 to-violet-500"
                />
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

            {/* Contextual Lead Magnet */}
            {(() => {
              const s = post.slug
              const cat = post.category.toLowerCase()
              let badge = "Free Meta Ads Consultation"
              let headline = "Book a Free 1-on-1 Meta Ads Strategy Call"
              let sub = "We'll look at your current setup and tell you exactly what a real campaign structure would change."
              let tag = "meta-ads"
              let cta = "Book My Free Consultation"
              let accent = "border-pink-500/20 bg-pink-500/[0.04]"
              let accentClass = "border-pink-500/30 focus:border-pink-500/60"
              let btnClass = "from-pink-600 to-pink-500"

              if (cat.includes("google") || s.includes("google-ads") || s.includes("lawyers") || s.includes("doctors") || s.includes("electrician")) {
                badge = "Free Google Ads Audit"; headline = "Book a Free Google Ads Audit"; sub = "We'll review your account and show you exactly where budget is leaking."; tag = "google-ads-audit"; cta = "Book My Free Audit"; accent = "border-cyan-500/20 bg-cyan-500/[0.04]"; accentClass = "border-cyan-500/30 focus:border-cyan-500/60"; btnClass = "from-cyan-600 to-cyan-500"
              } else if (cat.includes("automation") || s.includes("whatsapp") || s.includes("follow-up") || s.includes("booking")) {
                badge = "Free Bot Consultation"; headline = "Book a Free WhatsApp Bot Demo"; sub = "We'll show you exactly how the bot would work for your specific business."; tag = "whatsapp-bot"; cta = "Book My Free Demo"; accent = "border-green-500/20 bg-green-500/[0.04]"; accentClass = "border-green-500/30 focus:border-green-500/60"; btnClass = "from-green-600 to-green-500"
              } else if (cat.includes("seo") || s.includes("maps") || s.includes("reviews") || s.includes("plumber") || s.includes("hvac")) {
                badge = "Free SEO Consultation"; headline = "Book a Free Local SEO Strategy Call"; sub = "We'll check your Google Maps ranking and show you exactly what it takes to reach the top 3."; tag = "seo"; cta = "Book My Free SEO Call"; accent = "border-blue-500/20 bg-blue-500/[0.04]"; accentClass = "border-blue-500/30 focus:border-blue-500/60"; btnClass = "from-blue-600 to-blue-500"
              }

              return (
                <div className={`p-4 rounded-xl border ${accent}`}>
                  <span className="inline-block text-[9px] font-bold uppercase tracking-widest text-gray-500 mb-2">{badge}</span>
                  <p className="text-xs font-bold text-white mb-1 leading-snug">{headline}</p>
                  <p className="text-[11px] text-gray-500 mb-3 leading-relaxed">{sub}</p>
                  <EmailCapture tag={tag} ctaText={cta} accentClass={accentClass} btnClass={btnClass} />
                </div>
              )
            })()}
          </aside>
        </div>
      </div>
    </main>
  )
}
