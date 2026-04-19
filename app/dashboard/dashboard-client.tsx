"use client"

import { useEffect, useState } from "react"
import { TrendingUp, Eye, MousePointer, Target, Loader2, AlertTriangle, RefreshCw, Send, Search, CheckCircle, XCircle, Clock } from "lucide-react"

type Row = { keys: string[]; clicks: number; impressions: number; ctr: number; position: number }
type Overview = { clicks: number; impressions: number; ctr: number; position: number }
type Data = { overview: Overview; topQueries: Row[]; topPages: Row[] }


type Post = { slug: string; title: string; date: string; url: string }

type InspectResult = {
  url: string
  verdict: string
  coverageState: string
  lastCrawlTime: string | null
  crawledAs: string | null
  error?: string
}

type IndexStatus = "idle" | "loading" | "submitted" | "error"
type InspectStatus = "idle" | "loading" | "done" | "error"

function fmt(n: number, dec = 0) { return n.toLocaleString("en-US", { maximumFractionDigits: dec }) }
function pct(n: number) { return (n * 100).toFixed(1) + "%" }
function pos(n: number) { return n.toFixed(1) }
function shortUrl(url: string) { return url.replace("https://javierayala.pro", "") || "/" }

function VerdictBadge({ verdict }: { verdict: string }) {
  if (verdict === "PASS") return <span className="flex items-center gap-1 text-emerald-400 text-[10px] font-bold"><CheckCircle className="h-3 w-3" />Indexed</span>
  if (verdict === "FAIL") return <span className="flex items-center gap-1 text-red-400 text-[10px] font-bold"><XCircle className="h-3 w-3" />Not indexed</span>
  return <span className="flex items-center gap-1 text-gray-500 text-[10px]"><Clock className="h-3 w-3" />Unknown</span>
}

export default function SearchConsoleDashboard({ posts }: { posts: Post[] }) {
  const [data, setData] = useState<Data | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

const [indexStatus, setIndexStatus] = useState<Record<string, IndexStatus>>({})
  const [indexError, setIndexError] = useState<Record<string, string>>({})
  const [inspectStatus, setInspectStatus] = useState<Record<string, InspectStatus>>({})
  const [inspectData, setInspectData] = useState<Record<string, InspectResult>>({})

  async function requestIndex(url: string) {
    setIndexStatus((s) => ({ ...s, [url]: "loading" }))
    setIndexError((e) => { const n = { ...e }; delete n[url]; return n })
    try {
      const res = await fetch("/api/search-console/index", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ urls: [url] }),
      })
      const json = await res.json()
      const result = json.results?.[0]
      if (result?.status === "submitted") {
        setIndexStatus((s) => ({ ...s, [url]: "submitted" }))
      } else {
        setIndexStatus((s) => ({ ...s, [url]: "error" }))
        setIndexError((e) => ({ ...e, [url]: result?.error ?? "Failed" }))
      }
    } catch {
      setIndexStatus((s) => ({ ...s, [url]: "error" }))
      setIndexError((e) => ({ ...e, [url]: "Network error" }))
    }
  }

  async function requestIndexAll() {
    for (const post of posts) {
      await requestIndex(post.url)
    }
  }

  async function inspect(url: string) {
    setInspectStatus((s) => ({ ...s, [url]: "loading" }))
    try {
      const res = await fetch(`/api/search-console/index?url=${encodeURIComponent(url)}`)
      const json = await res.json()
      if (json.error) {
        setInspectStatus((s) => ({ ...s, [url]: "error" }))
        setInspectData((d) => ({ ...d, [url]: { url, verdict: "UNKNOWN", coverageState: json.error, lastCrawlTime: null, crawledAs: null, error: json.error } }))
      } else {
        setInspectStatus((s) => ({ ...s, [url]: "done" }))
        setInspectData((d) => ({ ...d, [url]: json }))
      }
    } catch {
      setInspectStatus((s) => ({ ...s, [url]: "error" }))
    }
  }

  async function load() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/search-console")
      if (!res.ok) {
        const e = await res.json()
        throw new Error(e.error ?? "Failed")
      }
      setData(await res.json())
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  async function inspectAll() {
    for (const post of posts) {
      await inspect(post.url)
    }
  }

  useEffect(() => {
    load()
    inspectAll()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className="min-h-screen bg-[#060609] text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-1">javierayala.pro</p>
            <h1 className="text-2xl font-black text-white">SEO Dashboard</h1>
            <p className="text-xs text-gray-600 mt-1">Last 28 days · Google Search Console</p>
          </div>
          <button
            onClick={load}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/[0.08] bg-white/[0.02] text-xs text-gray-400 hover:text-white hover:border-white/20 transition-all disabled:opacity-40"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <Loader2 className="h-8 w-8 text-cyan-400 animate-spin" />
            <p className="text-sm text-gray-500">Fetching Search Console data…</p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="p-6 rounded-2xl border border-red-500/20 bg-red-500/[0.05] flex items-start gap-4">
            <AlertTriangle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-white mb-1">Could not load data</p>
              <p className="text-sm text-gray-400">{error}</p>
              <p className="text-xs text-gray-600 mt-2">Make sure the service account has been added to Search Console with Full permission.</p>
            </div>
          </div>
        )}

        {/* Data */}
        {!loading && data && (
          <>
            {/* Overview cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Total Clicks", value: fmt(data.overview.clicks), icon: MousePointer, color: "text-cyan-400", bg: "bg-cyan-500/10" },
                { label: "Impressions", value: fmt(data.overview.impressions), icon: Eye, color: "text-sky-400", bg: "bg-sky-500/10" },
                { label: "Avg CTR", value: pct(data.overview.ctr), icon: TrendingUp, color: "text-emerald-400", bg: "bg-emerald-500/10" },
                { label: "Avg Position", value: pos(data.overview.position), icon: Target, color: "text-violet-400", bg: "bg-violet-500/10" },
              ].map((card) => (
                <div key={card.label} className="p-5 rounded-2xl border border-white/[0.07] bg-white/[0.02]">
                  <div className={`w-8 h-8 rounded-lg ${card.bg} flex items-center justify-center mb-3`}>
                    <card.icon className={`h-4 w-4 ${card.color}`} />
                  </div>
                  <div className="text-2xl font-black text-white">{card.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-600 mt-1">{card.label}</div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Top Queries */}
              <div className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02]">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-5">Top Queries</p>
                {data.topQueries.length === 0
                  ? <p className="text-sm text-gray-600">No data yet — Search Console data appears after ~48 hours.</p>
                  : (
                    <div className="space-y-3">
                      {data.topQueries.map((row, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <span className="text-[10px] text-gray-700 w-4 flex-shrink-0">{i + 1}</span>
                          <span className="text-xs text-gray-300 flex-1 truncate">{row.keys[0]}</span>
                          <div className="flex items-center gap-3 flex-shrink-0 text-[10px]">
                            <span className="text-cyan-400 font-bold w-8 text-right">{fmt(row.clicks)}</span>
                            <span className="text-gray-600 w-12 text-right">{fmt(row.impressions)}</span>
                            <span className="text-gray-500 w-10 text-right">#{pos(row.position)}</span>
                          </div>
                        </div>
                      ))}
                      <div className="flex items-center gap-3 pt-2 border-t border-white/[0.05]">
                        <span className="text-[10px] text-gray-700 w-4" />
                        <span className="text-[9px] text-gray-700 flex-1">Query</span>
                        <div className="flex items-center gap-3 text-[9px] text-gray-700">
                          <span className="w-8 text-right">Clicks</span>
                          <span className="w-12 text-right">Impr.</span>
                          <span className="w-10 text-right">Pos.</span>
                        </div>
                      </div>
                    </div>
                  )}
              </div>

              {/* Top Pages */}
              <div className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02]">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-5">Top Pages</p>
                {data.topPages.length === 0
                  ? <p className="text-sm text-gray-600">No data yet — Search Console data appears after ~48 hours.</p>
                  : (
                    <div className="space-y-3">
                      {data.topPages.map((row, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <span className="text-[10px] text-gray-700 w-4 flex-shrink-0">{i + 1}</span>
                          <span className="text-xs text-gray-300 flex-1 truncate">{shortUrl(row.keys[0])}</span>
                          <div className="flex items-center gap-3 flex-shrink-0 text-[10px]">
                            <span className="text-cyan-400 font-bold w-8 text-right">{fmt(row.clicks)}</span>
                            <span className="text-gray-600 w-12 text-right">{fmt(row.impressions)}</span>
                            <span className="text-gray-500 w-10 text-right">#{pos(row.position)}</span>
                          </div>
                        </div>
                      ))}
                      <div className="flex items-center gap-3 pt-2 border-t border-white/[0.05]">
                        <span className="text-[10px] text-gray-700 w-4" />
                        <span className="text-[9px] text-gray-700 flex-1">Page</span>
                        <div className="flex items-center gap-3 text-[9px] text-gray-700">
                          <span className="w-8 text-right">Clicks</span>
                          <span className="w-12 text-right">Impr.</span>
                          <span className="w-10 text-right">Pos.</span>
                        </div>
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </>
        )}

        {/* ── URL Indexing Panel ── */}
        {(() => {
          const indexed = posts.filter((p) => inspectData[p.url]?.verdict === "PASS")
          const notIndexed = posts.filter((p) => inspectData[p.url]?.verdict === "FAIL")
          const pending = posts.filter((p) => !inspectData[p.url] || (inspectData[p.url]?.verdict !== "PASS" && inspectData[p.url]?.verdict !== "FAIL"))
          const anyInspecting = posts.some((p) => inspectStatus[p.url] === "loading")

          // Sort: not-indexed first, then unknown/loading, then indexed
          const sorted = [
            ...notIndexed,
            ...pending,
            ...indexed,
          ]

          return (
            <div className="mt-8 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02]">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-1">URL Indexing</p>
                  <p className="text-xs text-gray-500">Auto-checked on load. Submit only for URLs not yet indexed.</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={inspectAll}
                    disabled={anyInspecting}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/[0.08] bg-white/[0.02] text-[10px] text-gray-400 hover:text-white hover:border-white/20 transition-all disabled:opacity-40"
                  >
                    {anyInspecting ? <Loader2 className="h-3 w-3 animate-spin" /> : <Search className="h-3 w-3" />}
                    Refresh Status
                  </button>
                  <button
                    onClick={requestIndexAll}
                    disabled={posts.some((p) => indexStatus[p.url] === "loading")}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-[10px] text-cyan-400 hover:bg-cyan-500/20 transition-all disabled:opacity-40"
                  >
                    <Send className="h-3 w-3" />
                    Submit All Not Indexed
                  </button>
                </div>
              </div>

              {/* Summary bar */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="p-3 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] text-center">
                  <div className="text-xl font-black text-emerald-400">{indexed.length}</div>
                  <div className="text-[9px] uppercase tracking-widest text-gray-600 mt-0.5">Indexed</div>
                </div>
                <div className="p-3 rounded-xl border border-red-500/20 bg-red-500/[0.04] text-center">
                  <div className="text-xl font-black text-red-400">{notIndexed.length}</div>
                  <div className="text-[9px] uppercase tracking-widest text-gray-600 mt-0.5">Not Indexed</div>
                </div>
                <div className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-center">
                  <div className="text-xl font-black text-gray-500">{pending.length}</div>
                  <div className="text-[9px] uppercase tracking-widest text-gray-600 mt-0.5">Checking…</div>
                </div>
              </div>

              {/* Note about resubmitting */}
              {notIndexed.length > 0 && (
                <div className="mb-4 px-4 py-3 rounded-xl border border-amber-500/20 bg-amber-500/[0.04] flex items-start gap-2">
                  <AlertTriangle className="h-3.5 w-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    <span className="text-white font-semibold">{notIndexed.length} URL{notIndexed.length > 1 ? "s" : ""} not yet indexed.</span>{" "}
                    Click Index to submit a crawl request. Google typically processes within 1–7 days — no need to resubmit unless a week has passed.
                  </p>
                </div>
              )}

              {indexed.length === posts.length && posts.length > 0 && (
                <div className="mb-4 px-4 py-3 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
                  <p className="text-[11px] text-emerald-400 font-semibold">All URLs are indexed. Nothing to submit.</p>
                </div>
              )}

              {/* URL list */}
              <div className="space-y-2">
                {sorted.map((post) => {
                  const iStatus = indexStatus[post.url] ?? "idle"
                  const inStatus = inspectStatus[post.url] ?? "idle"
                  const inData = inspectData[post.url]
                  const isIndexed = inData?.verdict === "PASS"

                  return (
                    <div
                      key={post.slug}
                      className={`p-4 rounded-xl border transition-all ${
                        isIndexed
                          ? "border-emerald-500/10 bg-emerald-500/[0.02]"
                          : inData?.verdict === "FAIL"
                          ? "border-red-500/10 bg-red-500/[0.02]"
                          : "border-white/[0.05] bg-white/[0.01]"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            {inStatus === "loading" ? (
                              <Loader2 className="h-3 w-3 text-gray-600 animate-spin flex-shrink-0" />
                            ) : inData ? (
                              <VerdictBadge verdict={inData.verdict} />
                            ) : (
                              <span className="flex items-center gap-1 text-gray-600 text-[10px]"><Clock className="h-3 w-3" />Checking…</span>
                            )}
                          </div>
                          <p className="text-xs text-white font-medium truncate">{post.title}</p>
                          <div className="flex flex-wrap items-center gap-x-3 mt-0.5">
                            <p className="text-[10px] text-gray-600">/blog/{post.slug}</p>
                            {inData?.coverageState && inData.verdict !== "PASS" && (
                              <span className="text-[10px] text-gray-600">{inData.coverageState}</span>
                            )}
                            {inData?.lastCrawlTime && (
                              <span className="text-[10px] text-gray-600">
                                Crawled {new Date(inData.lastCrawlTime).toLocaleDateString("en-US")}
                              </span>
                            )}
                          </div>
                          {iStatus === "submitted" && (
                            <p className="mt-1 text-[10px] text-cyan-400">Indexing request submitted — Google will crawl within 1–7 days.</p>
                          )}
                          {iStatus === "error" && indexError[post.url] && (
                            <p className="mt-1 text-[10px] text-red-400">{indexError[post.url]}</p>
                          )}
                          {inStatus === "error" && (
                            <p className="mt-1 text-[10px] text-red-400">{inspectData[post.url]?.error ?? "Inspection failed"}</p>
                          )}
                        </div>

                        {/* Index button — hidden if already indexed */}
                        {!isIndexed && (
                          <button
                            onClick={() => requestIndex(post.url)}
                            disabled={iStatus === "loading" || iStatus === "submitted"}
                            className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[10px] transition-all disabled:opacity-40 ${
                              iStatus === "submitted"
                                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                                : "border-cyan-500/30 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20"
                            }`}
                          >
                            {iStatus === "loading" ? (
                              <Loader2 className="h-3 w-3 animate-spin" />
                            ) : iStatus === "submitted" ? (
                              <CheckCircle className="h-3 w-3" />
                            ) : (
                              <Send className="h-3 w-3" />
                            )}
                            {iStatus === "submitted" ? "Queued" : "Index"}
                          </button>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })()}

      </div>
    </main>
  )
}
