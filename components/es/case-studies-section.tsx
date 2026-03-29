import { ArrowRight, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react"

const caseStudies = [
  {
    company: "Unclog Plumbing",
    industry: "Plomeria",
    problem: "Encontre 9 acciones de conversion duplicadas contando cada llamada hasta 5x. La agencia reporto 450 conversiones — la realidad fueron 90 llamadas reales.",
    solution: "Corregi el seguimiento, reconstrui la estructura de campanas, optimice Smart Bidding para llamadas telefonicas reales.",
    results: [
      { label: "Leads Reales Identificados", value: "-80%", context: "falsos positivos eliminados" },
      { label: "Costo Por Lead Real", value: "-47%", context: "despues de limpieza" },
      { label: "Llamadas de Calidad", value: "+62%", context: "en 30 dias" },
    ],
  },
  {
    company: "Precision Blinds Chicago",
    industry: "Persianas y Cortinas",
    problem: "Un solo grupo de anuncios apuntando a todo. Presupuesto disperso en cientos de palabras clave irrelevantes. Sin estrategia de landing page.",
    solution: "Construi 4 grupos de anuncios enfocados, cada uno con landing page dedicada. Presupuesto de $70/dia dividido estrategicamente por linea de producto e intencion de compra.",
    results: [
      { label: "Grupos de Anuncios", value: "4", context: "super enfocados" },
      { label: "Palabras Clave Irrelevantes", value: "Corte 73%", context: "ahorrando presupuesto" },
      { label: "Leads Calificados", value: "+89%", context: "en primer mes" },
    ],
  },
]

export function CaseStudiesSectionES() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Resultados Reales, Negocios Reales
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No acepto clientes a los que no puedo ayudar. Si tu cuenta esta saludable, te lo dire. 
            Si no lo esta, te mostrare exactamente que esta mal — antes de que me pagues un solo dolar.
          </p>
        </div>
        
        {/* Case Study Cards */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-2">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="rounded-2xl border border-border bg-card overflow-hidden"
            >
              {/* Header */}
              <div className="border-b border-border bg-muted/30 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{study.company}</h3>
                    <p className="text-sm text-muted-foreground">{study.industry}</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Problem */}
                <div>
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium text-destructive">
                    <AlertTriangle className="h-4 w-4" />
                    El Problema
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
                </div>
                
                {/* Solution */}
                <div>
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium text-primary">
                    <CheckCircle className="h-4 w-4" />
                    La Solucion
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                </div>
                
                {/* Results */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="text-center">
                      <p className="text-2xl font-bold text-primary">{result.value}</p>
                      <p className="text-xs text-muted-foreground">{result.context}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a 
            href="#audit-form" 
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            Mira lo que puedo encontrar en tu cuenta
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
