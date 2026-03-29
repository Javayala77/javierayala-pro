import { XCircle, AlertTriangle } from "lucide-react"

const problems = [
  {
    title: "Demasiadas Acciones de Conversion",
    description: "Smart Bidding se confunde cuando tienes 9 acciones contando cada llamada 5 veces. He visto cuentas donde una llamada registra 45 conversiones.",
  },
  {
    title: "Palabras Clave Incorrectas Activando Anuncios",
    description: "¿Tu anuncio de plomeria aparece para \"materiales de plomeria mayoreo\"? Eso es dinero tirado — literalmente. Sin intencion de contratar, sin oportunidad de convertir.",
  },
  {
    title: "Cero Palabras Clave Negativas",
    description: "Sin negativas, estas pagando por clics de personas buscando trabajo, tutoriales DIY y competidores. Presupuesto evaporandose en trafico irrelevante.",
  },
  {
    title: "Numero de Telefono en Titulares",
    description: "Esto viola la politica de Google y puede suspender tu cuenta. Sin embargo, las agencias lo hacen todo el tiempo — porque no saben mejor.",
  },
  {
    title: "Configurar y Olvidar",
    description: "Tu agencia configuro tu campana hace 18 meses y no la ha tocado desde entonces. El mercado cambio, los competidores se movieron, tus anuncios siguen igual.",
  },
  {
    title: "Pujando Por Todo",
    description: "¿Optimizando para visitas al sitio web en lugar de llamadas? Estas entrenando a Google para encontrar curiosos, no compradores listos para reservar.",
  },
]

export function ProblemSectionES() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/10 px-4 py-2 text-sm text-destructive">
            <AlertTriangle className="h-4 w-4" />
            <span>El Problema Oculto</span>
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            La Mayoria de las Agencias de Google Ads Estan Cometiendo Estos{" "}
            <span className="text-destructive">Errores Costosos</span> En Tu Cuenta
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            He auditado cientos de cuentas. Estos problemas aparecen en casi todas.
          </p>
        </div>
        
        {/* Problem Grid */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group rounded-xl border border-border/50 bg-card/50 p-6 transition-all hover:border-destructive/50 hover:bg-card"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                <XCircle className="h-5 w-5 text-destructive" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {problem.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Real Example Callout */}
        <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-primary/30 bg-primary/5 p-6 sm:p-8">
          <p className="text-center text-lg text-foreground">
            <span className="font-semibold text-primary">Ejemplo real:</span>{" "}
            Audite una empresa de plomeria con{" "}
            <span className="font-semibold">9 acciones de conversion duplicadas</span> contando cada llamada hasta 5 veces. 
            Su agencia reporto 450 conversiones el mes pasado. ¿Realidad?{" "}
            <span className="font-semibold">Aproximadamente 90 llamadas reales.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
