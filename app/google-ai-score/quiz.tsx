"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Loader2, ChevronRight, AlertTriangle, TrendingUp, Zap } from "lucide-react"

const questions = [
  {
    id: 1,
    question: "Are you using Smart Bidding — Target CPA or Target ROAS?",
    hint: "Manual CPC means you're competing with Google's AI instead of using it.",
    yes: 18,
    no: 0,
  },
  {
    id: 2,
    question: "Do you have a negative keyword list with at least 50 terms?",
    hint: "Without it, Google shows your ads for searches that will never convert — and charges you for every click.",
    yes: 18,
    no: 0,
  },
  {
    id: 3,
    question: "Are your ad groups structured by search intent — not just by service?",
    hint: "\"Emergency plumber\" and \"cheap plumber\" are the same service but completely different buyers.",
    yes: 16,
    no: 0,
  },
  {
    id: 4,
    question: "Do you have conversion tracking set up for BOTH phone calls and form fills?",
    hint: "If Google can't see your conversions, its AI has nothing to optimize toward.",
    yes: 18,
    no: 0,
  },
  {
    id: 5,
    question: "Have you run A/B tests on your ad copy in the last 90 days?",
    hint: "Ads that haven't been tested in 90 days are paying more per click for lower quality scores.",
    yes: 16,
    no: 0,
  },
  {
    id: 6,
    question: "Do you know your exact cost per lead from Google Ads this month?",
    hint: "If you can't measure it, you can't optimize it — and the AI can't either.",
    yes: 14,
    no: 0,
  },
]

function getResult(score: number) {
  if (score <= 30) return {
    label: "Critical",
    color: "text-red-400",
    borderColor: "border-red-500/30",
    bgColor: "bg-red-500/[0.06]",
    glowColor: "rgba(239,68,68,0.15)",
    icon: AlertTriangle,
    iconColor: "text-red-400",
    headline: "Your account is almost certainly bleeding money.",
    body: "Google's AI is working against you right now. The structural gaps we found mean you're paying 2–4x more per lead than you should be — and most of it is fixable within 30 days.",
    urgency: "Every day this runs, you're overpaying.",
  }
  if (score <= 60) return {
    label: "Needs Work",
    color: "text-amber-400",
    borderColor: "border-amber-500/30",
    bgColor: "bg-amber-500/[0.06]",
    glowColor: "rgba(251,191,36,0.12)",
    icon: AlertTriangle,
    iconColor: "text-amber-400",
    headline: "You have the right idea but the AI isn't fully on your side yet.",
    body: "The foundation is there, but the gaps in your setup are limiting what Google's algorithm can do. You're leaving a significant portion of your budget's potential on the table.",
    urgency: "A few structural fixes and the AI flips to your advantage.",
  }
  if (score <= 82) return {
    label: "Getting Closer",
    color: "text-sky-400",
    borderColor: "border-sky-500/30",
    bgColor: "bg-sky-500/[0.06]",
    glowColor: "rgba(14,165,233,0.12)",
    icon: TrendingUp,
    iconColor: "text-sky-400",
    headline: "You're close — but close means you're still leaving money on the table.",
    body: "Your account is better than most. But the remaining gaps are exactly where Google's AI creates a compounding advantage. Fixing them now is the difference between good results and dominant results.",
    urgency: "The last 20% of optimization delivers the first 80% of scale.",
  }
  return {
    label: "Strong Foundation",
    color: "text-emerald-400",
    borderColor: "border-emerald-500/30",
    bgColor: "bg-emerald-500/[0.06]",
    glowColor: "rgba(52,211,153,0.12)",
    icon: Zap,
    iconColor: "text-emerald-400",
    headline: "Solid setup — now let's see how far we can scale it.",
    body: "You've got the right structure. This is where most accounts plateau because the fundamentals are good but the AI optimization layer hasn't been fully activated. There's real upside here.",
    urgency: "Strong foundation + AI optimization = compounding growth.",
  }
}

type Step = "intro" | "quiz" | "score" | "capture" | "done"

export default function GoogleAIScoreQuiz() {
  const [step, setStep] = useState<Step>("intro")
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<boolean[]>([])
  const [score, setScore] = useState(0)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [business, setBusiness] = useState("")
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "done" | "error">("idle")

  function handleAnswer(yes: boolean) {
    const pts = yes ? questions[current].yes : 0
    const newAnswers = [...answers, yes]
    const newScore = score + pts
    setAnswers(newAnswers)
    setScore(newScore)

    if (current + 1 < questions.length) {
      setCurrent(current + 1)
    } else {
      setStep("score")
    }
  }

  async function handleCapture(e: React.FormEvent) {
    e.preventDefault()
    setSubmitStatus("loading")
    const result = getResult(score)
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          tag: "google-ai-score",
          fields: { business_type: business, ai_score: score, ai_score_label: result.label },
        }),
      })
      setSubmitStatus(res.ok ? "done" : "error")
      if (res.ok) setStep("done")
    } catch {
      setSubmitStatus("error")
    }
  }

  const result = getResult(score)
  const progress = ((current + 1) / questions.length) * 100

  // ── INTRO ──────────────────────────────────────────────────────────────────
  if (step === "intro") return (
    <main className="min-h-screen bg-[#060609] flex items-center justify-center px-6 py-16 relative overflow-hidden">
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse,rgba(6,182,212,0.09),transparent_65%)] pointer-events-none" />

      <div className="relative z-10 max-w-2xl w-full text-center">
        <Link href="/" className="inline-block mb-10 text-[11px] font-bold tracking-[0.2em] text-cyan-400/60 border border-cyan-500/20 px-3 py-1 rounded">
          javierayala.pro
        </Link>

        <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-5">Free Diagnostic · 60 Seconds</p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-white mb-6">
          Is Your Business Built<br />
          <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">
            for Google&apos;s AI?
          </span>
        </h1>

        <p className="text-lg text-gray-400 leading-relaxed mb-4 max-w-xl mx-auto">
          Google&apos;s entire ad platform runs on AI now. Smart Bidding, Quality Score, Ad Rank — all machine learning. Most accounts are still set up the old way.
        </p>
        <p className="text-lg text-white font-semibold mb-10 max-w-xl mx-auto">
          Answer 6 questions and find out exactly where your account stands — in 60 seconds.
        </p>

        <div className="grid grid-cols-3 gap-3 mb-10 max-w-lg mx-auto">
          {[
            { label: "Questions", value: "6" },
            { label: "Time", value: "60 sec" },
            { label: "Cost", value: "Free" },
          ].map((s) => (
            <div key={s.label} className="p-4 rounded-xl border border-white/[0.07] bg-white/[0.02]">
              <div className="text-2xl font-black text-white">{s.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-600 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setStep("quiz")}
          className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold text-base hover:shadow-[0_0_40px_rgba(6,182,212,0.35)] transition-all duration-300"
        >
          Get My Google AI Score <ArrowRight className="h-5 w-5" />
        </button>

        <p className="mt-5 text-xs text-gray-600">No account access required. No pitch. Just your score.</p>
      </div>
    </main>
  )

  // ── QUIZ ──────────────────────────────────────────────────────────────────
  if (step === "quiz") {
    const q = questions[current]
    return (
      <main className="min-h-screen bg-[#060609] flex items-center justify-center px-6 py-16 relative overflow-hidden">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse,rgba(6,182,212,0.07),transparent_65%)] pointer-events-none" />

        <div className="relative z-10 max-w-xl w-full">
          {/* Progress */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-gray-600 font-medium">Question {current + 1} of {questions.length}</span>
              <span className="text-xs text-cyan-400 font-bold">{Math.round(progress)}%</span>
            </div>
            <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-sky-400 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question card */}
          <div className="p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] mb-6">
            <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-4">
              Pillar {current + 1} — {["AI Bidding", "Traffic Quality", "Account Structure", "Conversion Tracking", "Ad Copy Testing", "Performance Visibility"][current]}
            </p>
            <h2 className="text-xl sm:text-2xl font-black text-white leading-tight mb-6">
              {q.question}
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed border-l-2 border-cyan-500/30 pl-4">
              {q.hint}
            </p>
          </div>

          {/* Answer buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleAnswer(true)}
              className="group h-16 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] hover:border-emerald-500/50 hover:bg-emerald-500/[0.10] transition-all duration-200 font-bold text-emerald-400 text-lg flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="h-5 w-5" /> Yes
            </button>
            <button
              onClick={() => handleAnswer(false)}
              className="group h-16 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-red-500/30 hover:bg-red-500/[0.04] transition-all duration-200 font-bold text-gray-400 hover:text-red-400 text-lg"
            >
              No
            </button>
          </div>
        </div>
      </main>
    )
  }

  // ── SCORE REVEAL ──────────────────────────────────────────────────────────
  if (step === "score") {
    const ResultIcon = result.icon
    const yesCount = answers.filter(Boolean).length
    return (
      <main className="min-h-screen bg-[#060609] flex items-center justify-center px-6 py-16 relative overflow-hidden">
        <div
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none"
          style={{ background: `radial-gradient(ellipse, ${result.glowColor}, transparent 65%)` }}
        />

        <div className="relative z-10 max-w-2xl w-full">
          {/* Score display */}
          <div className="text-center mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Your Google AI Score</p>

            <div className="relative inline-flex items-center justify-center mb-4">
              <svg className="w-40 h-40 -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                <circle
                  cx="60" cy="60" r="52" fill="none"
                  stroke="url(#scoreGrad)" strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${(score / 100) * 327} 327`}
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-black text-white">{score}</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">/ 100</span>
              </div>
            </div>

            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${result.borderColor} ${result.bgColor} mb-2`}>
              <ResultIcon className={`h-3.5 w-3.5 ${result.iconColor}`} />
              <span className={`text-xs font-bold uppercase tracking-widest ${result.color}`}>{result.label}</span>
            </div>

            <p className="text-xs text-gray-600 mt-2">{yesCount} of 6 pillars active</p>
          </div>

          {/* Diagnosis */}
          <div className={`p-6 rounded-2xl border ${result.borderColor} ${result.bgColor} mb-6`}>
            <h2 className="text-xl font-black text-white mb-3">{result.headline}</h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-3">{result.body}</p>
            <p className={`text-sm font-semibold ${result.color}`}>{result.urgency}</p>
          </div>

          {/* Pillar breakdown */}
          <div className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] mb-8">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-4">Your 6 Pillars</p>
            <div className="space-y-2.5">
              {questions.map((q, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center ${answers[i] ? "bg-emerald-500/20 border border-emerald-500/40" : "bg-red-500/10 border border-red-500/20"}`}>
                    {answers[i]
                      ? <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                      : <span className="text-red-400 text-[10px] font-black">✕</span>
                    }
                  </div>
                  <span className="text-xs text-gray-400 leading-snug">{["AI Bidding", "Negative Keywords", "Intent Structure", "Conversion Tracking", "Ad Copy Testing", "Cost Visibility"][i]}</span>
                  <span className={`ml-auto text-[10px] font-bold ${answers[i] ? "text-emerald-400" : "text-red-400"}`}>
                    {answers[i] ? `+${q.yes}` : "0"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="p-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.04] text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">Get Your Full Fix Roadmap</p>
            <h3 className="text-xl font-black text-white mb-2">
              {score <= 60 ? "See exactly what to fix — and in what order." : "See where the real scale opportunity is."}
            </h3>
            <p className="text-sm text-gray-500 mb-5">
              Enter your email and we&apos;ll send you a personalized breakdown of each pillar plus the exact steps to improve your score.
            </p>
            <button
              onClick={() => setStep("capture")}
              className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold text-sm hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all"
            >
              Send Me My Roadmap <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-3 text-[10px] text-gray-600">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </main>
    )
  }

  // ── EMAIL CAPTURE ─────────────────────────────────────────────────────────
  if (step === "capture") {
    const ResultIcon = result.icon
    return (
      <main className="min-h-screen bg-[#060609] flex items-center justify-center px-6 py-16 relative overflow-hidden">
        <div
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none"
          style={{ background: `radial-gradient(ellipse, ${result.glowColor}, transparent 65%)` }}
        />

        <div className="relative z-10 max-w-md w-full">
          <div className="text-center mb-8">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${result.borderColor} ${result.bgColor} mb-4`}>
              <ResultIcon className={`h-3.5 w-3.5 ${result.iconColor}`} />
              <span className={`text-xs font-bold ${result.color}`}>Your Score: {score}/100 · {result.label}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3 leading-tight">
              Where should we send<br />your fix roadmap?
            </h2>
            <p className="text-sm text-gray-500">
              You&apos;ll get a personalized breakdown of your {6 - answers.filter(Boolean).length} gaps and the exact sequence to close them.
            </p>
          </div>

          <form onSubmit={handleCapture} className="space-y-3">
            <input
              type="text"
              placeholder="First name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full h-12 px-4 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-12 px-4 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
            <input
              type="text"
              placeholder="Your business type (e.g. HVAC, Roofing, Law Firm)"
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              className="w-full h-12 px-4 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
            {submitStatus === "error" && (
              <p className="text-xs text-red-400">Something went wrong. Try again.</p>
            )}
            <button
              type="submit"
              disabled={submitStatus === "loading"}
              className="w-full h-13 py-3.5 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all disabled:opacity-60"
            >
              {submitStatus === "loading"
                ? <Loader2 className="h-4 w-4 animate-spin" />
                : <><ChevronRight className="h-4 w-4" /> Send My Fix Roadmap</>
              }
            </button>
            <p className="text-center text-[10px] text-gray-600">No spam · Unsubscribe anytime · Takes 10 seconds</p>
          </form>
        </div>
      </main>
    )
  }

  // ── DONE ──────────────────────────────────────────────────────────────────
  return (
    <main className="min-h-screen bg-[#060609] flex items-center justify-center px-6 py-16">
      <div className="max-w-lg w-full text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="h-8 w-8 text-emerald-400" />
        </div>
        <h1 className="text-3xl font-black text-white mb-3">Your roadmap is on its way.</h1>
        <p className="text-gray-400 mb-2">Check your inbox — you&apos;ll have your personalized Google AI fix plan within a few minutes.</p>
        <p className="text-sm text-cyan-400 mb-10">Score: {score}/100 · {result.label}</p>

        <div className="p-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] mb-8 text-left">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-3">While you wait</p>
          <p className="text-sm text-gray-400 leading-relaxed">
            If you want to see the exact system behind the score — how AI bidding, account structure, and tracking work together to compound your results — we can walk through it on a free 30-minute call.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/googleadsai"
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full border border-white/[0.1] text-white text-sm font-medium hover:bg-white/[0.04] transition-all"
          >
            See the System
          </Link>
          <Link
            href="/free-audit"
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold text-sm hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all"
          >
            Book a Free Strategy Call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  )
}
