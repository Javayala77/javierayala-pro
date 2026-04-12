import { CheckCircle, Calendar, Monitor, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
export const metadata = {
  title: "Booking Confirmed | Javier Ayala - Google Ads Audit",
  description: "Your free Google Ads audit has been scheduled. Here's what to expect next.",
}

export default function ThankYouPage() {
  return (
    <>
      {/* Google Ads Conversion Tracking - Booking Completed */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {
              'send_to': 'AW-17952699649/rmx3CJzhoIscEIHqwfBC',
              'value': 1000.0,
              'currency': 'USD'
            });
          `
        }}
      />
      
      <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full text-center">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 ring-4 ring-primary/10">
            <CheckCircle className="h-10 w-10 text-primary" />
          </div>
        </div>

        {/* Main Message */}
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          You're All Set!
        </h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Your free Google Ads audit has been scheduled. Check your email for the calendar invite.
        </p>

        {/* What to Expect Card */}
        <div className="mb-8 rounded-2xl border border-border bg-card p-6 sm:p-8 text-left">
          <h2 className="mb-6 text-xl font-semibold text-foreground">
            What to Expect on Our Call
          </h2>
          
          <div className="space-y-5">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Monitor className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Be at Your Computer</p>
                <p className="text-sm text-muted-foreground">
                  You'll need to grant me access to your Google Ads account during the call so I can perform the audit.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Accept My Invite</p>
                <p className="text-sm text-muted-foreground">
                  During our call, I'll send you an access request. Simply accept it in your Google Ads dashboard.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Audit Delivered in 48 Hours</p>
                <p className="text-sm text-muted-foreground">
                  After the call, you'll receive your comprehensive audit report within 48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reminder Box */}
        <div className="mb-8 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
          <p className="text-sm text-amber-400 font-medium">
            Important: Make sure you have access to log into your Google Ads account during our scheduled call.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/">
              Back to Homepage
            </Link>
          </Button>
          <Button asChild size="lg">
            <a 
              href="https://wa.me/573103956445?text=Hi%20Javier,%20I%20just%20booked%20my%20free%20Google%20Ads%20audit!"
              target="_blank"
              rel="noopener noreferrer"
            >
              Message Me on WhatsApp
            </a>
          </Button>
        </div>

        {/* Footer Note */}
        <p className="mt-12 text-sm text-muted-foreground">
          Questions before our call? Reach out anytime via WhatsApp or email.
        </p>
      </div>
    </main>
    </>
  )
}
