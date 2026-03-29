"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿En que se diferencia esto de una agencia tradicional?",
    answer: "Las agencias tradicionales distribuyen a un gerente de cuenta entre mas de 50 clientes. Usan procesos manuales que toman semanas. Yo uso IA para analizar toda tu cuenta en minutos, no dias. Obtienes optimizacion a nivel empresarial a una fraccion del costo, con acceso directo a mi — no a un gerente de cuenta junior leyendo de un guion.",
  },
  {
    question: "¿Necesito firmar un contrato?",
    answer: "Sin contratos a largo plazo. Nunca. Puedes cancelar en cualquier momento con 30 dias de aviso. Creo que si estoy entregando resultados, querras quedarte. Si no, no deberias estar atrapado. Asi de simple.",
  },
  {
    question: "¿Cuanto tiempo hasta que vea resultados?",
    answer: "La mayoria de los clientes ven mejoras dentro de las primeras 2-4 semanas. La auditoria inicial y las correcciones a menudo tienen impacto inmediato — especialmente si tienes problemas de seguimiento de conversiones o desperdicio obvio de presupuesto. La optimizacion continua se acumula con el tiempo, con campanas que se vuelven mas inteligentes cada mes.",
  },
  {
    question: "¿Tendras acceso a mi cuenta de Google Ads?",
    answer: "Si, necesitare acceso de visualizacion para realizar la auditoria, y acceso de administrador si trabajamos juntos. Tu mantienes la propiedad total y puedes revocar el acceso en cualquier momento. Uso la API oficial de Google Ads — todo es seguro y cumple con las politicas de Google.",
  },
  {
    question: "¿Que pasa si mis anuncios ya estan corriendo?",
    answer: "Perfecto — eso me da datos reales con los que trabajar. Auditare que esta funcionando, que esta desperdiciando dinero, y donde existen oportunidades. Haremos cambios estrategicamente sin interrumpir lo que ya esta rindiendo. Sin empezar desde cero a menos que sea necesario.",
  },
  {
    question: "Me han decepcionado agencias antes. ¿Como se que esto es diferente?",
    answer: "Lo entiendo. Por eso ofrezco una auditoria gratis primero — sin compromiso, sin tarjeta de credito. Veras exactamente lo que encuentro y lo que recomendaria antes de pagar nada. Tampoco acepto clientes a los que no puedo ayudar. Si tu cuenta ya esta bien optimizada, te lo dire.",
  },
  {
    question: "¿Solo trabajas con ciertas industrias?",
    answer: "Me especializo en negocios de servicios locales — plomeros, HVAC, techadores, dentistas, servicios de limpieza, empresas de puertas de garaje, cerrajeros, y similares. Estas son industrias donde las llamadas telefonicas generan ingresos y Google Ads puede hacer una diferencia masiva. Si no estas en esta categoria, aun podemos hablar para ver si encaja.",
  },
  {
    question: "¿Que significa realmente 'impulsado por IA'?",
    answer: "Uso herramientas de IA (como Claude Code) conectadas a la API de Google Ads para analizar tu cuenta programaticamente. Esto significa que puedo revisar miles de palabras clave, terminos de busqueda y acciones de conversion en minutos en lugar de horas. La IA maneja el analisis de datos — yo manejo la estrategia y la toma de decisiones humana.",
  },
]

export function FAQSectionES() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Todo lo que necesitas saber antes de comenzar.
          </p>
        </div>
        
        {/* FAQ Accordion */}
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="rounded-xl border border-border bg-card px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="py-4 text-left text-base font-medium hover:no-underline [&[data-state=open]>svg]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
