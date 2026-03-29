import { Button } from "@/components/ui/button"
import { ArrowRight, Clock } from "lucide-react"

export function FinalCTASection() {
  return (
    <section className="border-t border-border/50 bg-gradient-to-b from-background to-card/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Main Headline */}
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Your Competitors Are Getting The Calls{" "}
            <span className="text-primary">You Should Be Getting.</span>
          </h2>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Every day you wait is another day of wasted ad spend. Let's find out exactly 
            where your money is going — and fix it.
          </p>
          
          {/* CTA */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <Button 
              size="lg" 
              className="h-14 px-8 text-lg font-semibold"
              asChild
            >
              <a href="#audit-form" className="flex items-center gap-2">
                Book My Free Audit — Takes 2 Minutes
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>I personally review every account. You'll hear from me within 24 hours.</span>
            </div>
          </div>
          
          {/* Social proof reminder */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">$2.4M+</span>
              <span>Ad spend managed</span>
            </div>
            <div className="hidden h-4 w-px bg-border sm:block" />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">100+</span>
              <span>Accounts optimized</span>
            </div>
            <div className="hidden h-4 w-px bg-border sm:block" />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">48hr</span>
              <span>Audit turnaround</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
