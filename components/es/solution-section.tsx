import { Zap, Target, Eye } from "lucide-react"

const solutions = [
  {
    icon: Zap,
    title: "Velocidad",
    description: "Lo que le toma a las agencias una semana, yo lo hago en una tarde. La IA audita toda tu cuenta instantaneamente — cada palabra clave, cada accion de conversion, cada dolar desperdiciado.",
    highlight: "10x mas rapido que agencias tradicionales",
  },
  {
    icon: Target,
    title: "Precision",
    description: "No adivino. Uso datos reales. Tus terminos de busqueda reales, tu historial de conversiones real, tu CPA verdadero — para construir campanas que realmente funcionan.",
    highlight: "Decisiones basadas en datos, no corazonadas",
  },
  {
    icon: Eye,
    title: "Transparencia",
    description: "Ves todo lo que hago, en tiempo real. Sin caja negra. Sin reportes confusos. Solo resultados claros y conversacion honesta.",
    highlight: "Visibilidad total, siempre",
  },
]

export function SolutionSectionES() {
  return (
    <section className="border-y border-border/50 bg-card/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Lo Que Hago <span className="text-primary">Diferente</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            La ventaja de la IA significa optimizacion a nivel empresarial a una fraccion del costo.
          </p>
        </div>
        
        {/* Solution Cards */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background p-8 transition-all hover:border-primary/50"
            >
              {/* Gradient accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-primary/50" />
              
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <solution.icon className="h-7 w-7 text-primary" />
              </div>
              
              <h3 className="mb-3 text-2xl font-bold text-foreground">
                {solution.title}
              </h3>
              
              <p className="mb-4 text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
              
              <p className="text-sm font-medium text-primary">
                {solution.highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
