import { Phone, Mail, MapPin, Linkedin } from "lucide-react"

export function AboutSection() {
  return (
    <section className="border-y border-border/50 bg-card/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Photo placeholder */}
          <div className="relative mx-auto max-w-md lg:mx-0">
            <div className="aspect-square overflow-hidden rounded-2xl border border-border bg-muted">
              {/* Professional headshot placeholder */}
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-primary/20 text-6xl font-bold text-primary">
                    JA
                  </div>
                  <p className="text-sm text-muted-foreground">Javier Ayala</p>
                </div>
              </div>
            </div>
            
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -right-6 rounded-xl border border-border bg-background p-4 shadow-lg">
              <p className="text-2xl font-bold text-primary">100+</p>
              <p className="text-sm text-muted-foreground">Accounts Optimized</p>
            </div>
          </div>
          
          {/* Right: Content */}
          <div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              About Me
            </h2>
            
            <div className="mt-6 space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm Javier. I manage Google Ads for local service businesses across the US.
              </p>
              <p>
                I use AI tools that give me capabilities most agencies charge 10x more for. 
                While they're manually reviewing spreadsheets, I'm using code to analyze your 
                entire account in minutes.
              </p>
              <p>
                My clients get more calls, less waste, and someone who actually picks up the phone.
              </p>
              <p className="text-foreground font-medium">
                No corporate runaround. No junior account managers. Just direct access to the 
                person actually working on your campaigns.
              </p>
            </div>
            
            {/* Contact info */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Remote — Serving US Clients</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <span>Available for calls M-F, 9am-6pm CST</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>24-hour response guarantee</span>
              </div>
              <a 
                href="https://www.linkedin.com/in/javier-ayala-056b82344" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5 text-primary" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
