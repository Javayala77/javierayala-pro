import { CheckCircle, Gift } from "lucide-react"

const auditItems = [
  {
    title: "Conversion Tracking Audit",
    description: "Are you tracking real leads or fake ones?",
  },
  {
    title: "Wasted Spend Analysis",
    description: "What keywords are burning your budget?",
  },
  {
    title: "Search Term Audit",
    description: "What are people actually searching to find you?",
  },
  {
    title: "Campaign Structure Review",
    description: "Is your account set up for success?",
  },
  {
    title: "Ad Copy Quality Score",
    description: "How compelling are your ads vs competitors?",
  },
  {
    title: "Competitor Analysis",
    description: "What are your competitors doing differently?",
  },
  {
    title: "Call Tracking Setup Check",
    description: "Are phone calls being tracked correctly?",
  },
  {
    title: "GMB + Location Asset Review",
    description: "Is your Google Business Profile optimized?",
  },
  {
    title: "Full Recommendations Report",
    description: "Actionable steps to improve performance",
  },
]

export function AuditChecklistSection() {
  return (
    <section id="audit-form" className="border-y border-border/50 bg-card/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Checklist */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
              <Gift className="h-4 w-4" />
              <span>Value: $500 — Yours Free</span>
            </div>
            
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Your Free Audit Includes
            </h2>
            
            <p className="mt-4 text-lg text-muted-foreground">
              A comprehensive analysis of your Google Ads account, delivered within 48 hours.
            </p>
            
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {auditItems.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Calendly Booking */}
          <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
            <h3 className="mb-2 text-2xl font-bold text-foreground">
              Schedule Your Free Audit
            </h3>
            <p className="mb-4 text-muted-foreground">
              Book a time and I'll walk you through the audit process live.
            </p>
            
            {/* Important notice */}
            <div className="mb-6 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
              <p className="text-sm font-semibold text-amber-400 mb-2">Important: Be at Your Computer</p>
              <p className="text-sm text-muted-foreground mb-3">
                During our call, I'll need you to grant me access to your Google Ads account so I can perform the audit.
              </p>
              <p className="text-sm font-medium text-foreground mb-2">What to Expect:</p>
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                <li>We'll meet via video call at your scheduled time</li>
                <li>I'll send you an access invite to your Google Ads account</li>
                <li><span className="text-primary font-medium">You'll accept my invite</span> while we're on the call</li>
                <li>Receive your full audit report within 48 hours</li>
              </ol>
            </div>
            
            {/* Calendly Widget */}
            <div className="rounded-lg overflow-hidden bg-background">
              <iframe
                src="https://calendly.com/javierayala-ads/free-google-ads-audit?hide_gdpr_banner=1&background_color=1a1a2e&text_color=ffffff&primary_color=4a9eff"
                width="100%"
                height="950"
                frameBorder="0"
                title="Schedule your free Google Ads audit"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
