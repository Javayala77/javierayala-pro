import { Bot, Users, Zap, Clock } from "lucide-react"

const comparisons = [
  {
    traditional: "1 persona manejando 50 cuentas manualmente",
    ai: "La IA maneja el analisis de datos, yo manejo la estrategia",
    icon: Users,
  },
  {
    traditional: "Reportes mensuales con datos desactualizados",
    ai: "Acceso API en tiempo real, cambios en minutos",
    icon: Clock,
  },
  {
    traditional: "\"Lo veremos la proxima semana\"",
    ai: "Problemas identificados y resueltos el mismo dia",
    icon: Zap,
  },
]

export function AIAdvantageSectionES() {
  return (
    <section className="border-y border-border/50 bg-card/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
              <Bot className="h-4 w-4" />
              <span>La Ventaja de la IA</span>
            </div>
            
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Por Que la IA Cambia Todo Para Tus Google Ads
            </h2>
            
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Las agencias tradicionales distribuyen a una persona entre mas de 50 cuentas. Yo uso IA para manejar 
              el trabajo pesado — analizando miles de puntos de datos en segundos — para poder enfocarme en 
              estrategia que realmente mueve la aguja.
            </p>
            
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              ¿El resultado? Optimizacion a nivel empresarial a una fraccion del costo. Ajustes en 
              tiempo real en lugar de revisiones mensuales. Y alguien que realmente contesta el telefono.
            </p>
            
            {/* Key benefits */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-lg border border-border bg-background p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">10x Mas Rapido</p>
                  <p className="text-sm text-muted-foreground">Que analisis manual</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-background p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Conectado por API</p>
                  <p className="text-sm text-muted-foreground">Acceso a datos en tiempo real</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Comparison */}
          <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
            <h3 className="mb-6 text-xl font-bold text-foreground">Agencia Tradicional vs. Impulsada por IA</h3>
            
            <div className="space-y-6">
              {comparisons.map((item, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-start gap-3 rounded-lg bg-destructive/5 p-4 border border-destructive/20">
                    <span className="mt-0.5 text-sm font-medium text-destructive">ANTES:</span>
                    <p className="text-sm text-muted-foreground">{item.traditional}</p>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg bg-primary/5 p-4 border border-primary/20">
                    <span className="mt-0.5 text-sm font-medium text-primary">AHORA:</span>
                    <p className="text-sm text-foreground">{item.ai}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
