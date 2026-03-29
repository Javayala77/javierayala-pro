import { CheckCircle, Gift } from "lucide-react"

const auditItems = [
  {
    title: "Auditoria de Seguimiento de Conversiones",
    description: "¿Estas rastreando leads reales o falsos?",
  },
  {
    title: "Analisis de Gasto Desperdiciado",
    description: "¿Que palabras clave estan quemando tu presupuesto?",
  },
  {
    title: "Auditoria de Terminos de Busqueda",
    description: "¿Que estan buscando realmente las personas para encontrarte?",
  },
  {
    title: "Revision de Estructura de Campanas",
    description: "¿Tu cuenta esta configurada para el exito?",
  },
  {
    title: "Puntuacion de Calidad de Anuncios",
    description: "¿Que tan convincentes son tus anuncios vs competidores?",
  },
  {
    title: "Analisis de Competencia",
    description: "¿Que estan haciendo diferente tus competidores?",
  },
  {
    title: "Verificacion de Seguimiento de Llamadas",
    description: "¿Las llamadas telefonicas se estan rastreando correctamente?",
  },
  {
    title: "Revision de GMB + Activos de Ubicacion",
    description: "¿Tu Perfil de Google Business esta optimizado?",
  },
  {
    title: "Reporte Completo de Recomendaciones",
    description: "Pasos accionables para mejorar el rendimiento",
  },
]

export function AuditChecklistSectionES() {
  return (
    <section id="audit-form" className="border-y border-border/50 bg-card/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Checklist */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
              <Gift className="h-4 w-4" />
              <span>Valor: $500 — Tuyo Gratis</span>
            </div>
            
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Lo Que Incluye Tu Auditoria Gratis
            </h2>
            
            <p className="mt-4 text-lg text-muted-foreground">
              Un analisis completo de tu cuenta de Google Ads, entregado en 48 horas.
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
              Agenda Tu Auditoria Gratis
            </h3>
            <p className="mb-4 text-muted-foreground">
              Reserva un horario y te guiare por el proceso de auditoria en vivo.
            </p>
            
            {/* Important notice */}
            <div className="mb-6 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
              <p className="text-sm font-semibold text-amber-400 mb-2">Importante: Estate en Tu Computadora</p>
              <p className="text-sm text-muted-foreground mb-3">
                Durante nuestra llamada, necesitare que me des acceso a tu cuenta de Google Ads para poder realizar la auditoria.
              </p>
              <p className="text-sm font-medium text-foreground mb-2">Que Esperar:</p>
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                <li>Nos reuniremos por videollamada a tu hora programada</li>
                <li>Te enviare una invitacion de acceso a tu cuenta de Google Ads</li>
                <li><span className="text-primary font-medium">Aceptaras mi invitacion</span> mientras estamos en la llamada</li>
                <li>Recibe tu reporte completo de auditoria en 48 horas</li>
              </ol>
            </div>
            
            {/* Calendly Widget */}
            <div className="rounded-lg overflow-hidden bg-background">
              <iframe
                src="https://calendly.com/javierayala-ads/free-google-ads-audit?hide_gdpr_banner=1&background_color=1a1a2e&text_color=ffffff&primary_color=4a9eff"
                width="100%"
                height="950"
                frameBorder="0"
                title="Agenda tu auditoria gratis de Google Ads"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
