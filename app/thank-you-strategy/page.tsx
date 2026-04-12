import { CheckCircle, Lightbulb, Target, ArrowRight } from "lucide-react"
import Link from "next/link"
export const metadata = {
  title: "You're Booked | Javier Ayala — Free Strategy Call",
  description: "Your free marketing strategy call is confirmed. Here's what to expect.",
}

export default function ThankYouStrategyPage() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof gtag !== 'undefined') {
              gtag('event', 'conversion', {
                'send_to': 'AW-17952699649/rmx3CJzhoIscEIHqwfBC',
                'value': 500.0,
                'currency': 'USD'
              });
            }
          `
        }}
      />

      <main className="min-h-screen bg-[#060609] text-white flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center">

          {/* Success Icon */}
          <div className="mb-8 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/10 ring-4 ring-cyan-500/10">
              <CheckCircle className="h-10 w-10 text-cyan-400" />
            </div>
          </div>

          {/* Main Message */}
          <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">Call Confirmed</p>
          <h1 className="mb-4 text-4xl sm:text-5xl font-black leading-tight">
            You&apos;re Booked.
          </h1>
          <p className="mb-10 text-lg text-gray-400 max-w-lg mx-auto leading-relaxed">
            Check your email for the calendar invite. I&apos;ll review your business before the call so we can make the most of the 30 minutes.
          </p>

          {/* What to Expect */}
          <div className="mb-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 sm:p-8 text-left">
            <h2 className="mb-6 text-lg font-bold text-white">
              What We&apos;ll Cover on the Call
            </h2>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                  <Target className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-0.5">Your Current Marketing Situation</p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    I&apos;ll ask about what you&apos;re currently doing — ads, SEO, lead generation — and where the gaps are.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                  <Lightbulb className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-0.5">What Would Actually Move the Needle</p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    I&apos;ll tell you honestly what the highest-leverage thing to build is for your specific business and market.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                  <ArrowRight className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-0.5">A Clear Next Step</p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    You&apos;ll leave with a specific action plan — whether you work with me or not.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Prep note */}
          <div className="mb-8 rounded-xl border border-cyan-500/20 bg-cyan-500/[0.04] p-4">
            <p className="text-sm text-cyan-300 font-medium">
              To get the most out of the call — think about your top 1-2 goals for the next 90 days and what you&apos;ve already tried.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-white/10 text-white font-medium text-sm hover:bg-white/5 hover:border-white/20 transition-all duration-300"
            >
              Back to Homepage
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold text-sm hover:opacity-90 transition-all duration-300"
            >
              Read the Blog While You Wait <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-10 text-xs text-gray-700">
            Questions before the call? Email <a href="mailto:googleads@javierayala.pro" className="text-gray-500 hover:text-white transition-colors">googleads@javierayala.pro</a>
          </p>

        </div>
      </main>
    </>
  )
}
