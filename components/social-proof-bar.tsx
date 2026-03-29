import { Wrench, Wind, Blinds, Home, Stethoscope, Sparkles, DoorOpen, KeyRound } from "lucide-react"

const industries = [
  { name: "Plumbing", icon: Wrench },
  { name: "HVAC", icon: Wind },
  { name: "Blinds & Shutters", icon: Blinds },
  { name: "Roofing", icon: Home },
  { name: "Dental", icon: Stethoscope },
  { name: "Cleaning", icon: Sparkles },
  { name: "Garage Doors", icon: DoorOpen },
  { name: "Locksmiths", icon: KeyRound },
]

export function SocialProofBar() {
  return (
    <section className="border-y border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Trusted by Local Service Businesses Across the US
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12">
          {industries.map((industry) => (
            <div 
              key={industry.name}
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <industry.icon className="h-5 w-5" />
              <span className="text-sm font-medium">{industry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
