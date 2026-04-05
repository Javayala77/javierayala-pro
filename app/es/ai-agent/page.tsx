"use client"

import { motion } from "framer-motion"
import { Bot, MessageSquare, Globe, Zap, CalendarCheck, CheckCircle2, Users } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider } from "@/components/landing/layout"
import EmailCapture from "@/components/email-capture"

const deliverables = [
  { icon: Bot, title: "Agente IA Entrenado para Tu Negocio", desc: "Entrenado con tus servicios, preguntas frecuentes, precios y proceso de ventas. Responde exactamente como lo harías tú — siempre." },
  { icon: MessageSquare, title: "WhatsApp + Sitio Web + Redes Sociales", desc: "Un agente desplegado en todos los canales donde tus leads se comunican. Ningún mensaje sin respuesta." },
  { icon: Users, title: "Flujos de Calificación de Leads", desc: "Hace tus preguntas de calificación automáticamente — filtra a los que pierden el tiempo y presenta a los compradores reales antes de que lleguen a ti." },
  { icon: CalendarCheck, title: "Reserva de Citas", desc: "Reserva citas directamente en tu calendario. Sin ir y venir, sin llamadas perdidas, sin programación manual." },
  { icon: Zap, title: "Secuencias de Seguimiento", desc: "Los leads que no reservan de inmediato reciben seguimiento automático — para que captures los tratos que de otro modo se habrían escapado." },
  { icon: Globe, title: "Operación 24/7 en ES + EN", desc: "Tu agente nunca duerme, nunca tiene un mal día, y puede manejar diez conversaciones simultáneamente — en español e inglés." },
]

const results = [
  { name: "Apex Legal Group", result: "15 hrs/semana ahorradas", timeframe: "en llamadas de admisión" },
  { name: "Clearwater Roofing", result: "0 leads perdidos", timeframe: "fuera de horario o fines de semana" },
  { name: "Summit Home Services", result: "3x llamadas reservadas", timeframe: "en los primeros 30 días" },
]

export default function AIAgentPageES() {
  return (
    <LandingLayout
      accentColor="text-purple-400"
      ctaText="Crear Mi Agente IA"
      ctaHref="#email-capture"
      homeHref="/es"
    >
      {/* HOOK */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.1),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/25 bg-purple-500/8 text-purple-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Bot className="h-3.5 w-3.5" />
            Agente IA de Reservas
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            ¿Qué Pasa con los Leads que Llegan{" "}
            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">
              Cuando Estás Ocupado Trabajando?
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Los mejores leads — los que están listos para reservar — suelen llegar en los peores momentos: durante un trabajo, fuera de horario, los fines de semana.
            Si no reciben respuesta rápido,{" "}
            <span className="text-white font-semibold">llaman al siguiente negocio de la lista.</span>
          </p>

          <motion.a
            href="#email-capture"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold text-base hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-300"
          >
            Reservar Mi Demo Gratuita de Agente IA
          </motion.a>

          <p className="mt-4 text-xs text-gray-600">Gratis · Sin compromiso · Toma 30 segundos</p>
        </motion.div>
      </section>

      {/* EPIPHANY BRIDGE — La Historia */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <SectionLabel>La Historia</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-10 leading-tight">
              Los Negocios de Servicios Tienen<br />
              <span className="bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">un Problema de Tiempo.</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Esta es la dura realidad de manejar un negocio de servicios: el momento en que un cliente potencial decide que necesita ayuda rara vez es un momento conveniente para ti. Estás en un trabajo. Son las 9pm. Es sábado. Estás lidiando con un problema del equipo.
              </p>
              <p>
                Y ese lead — la persona que estaba lista para reservar ahora mismo — esperó 20 minutos por una respuesta. Luego actualizó sus resultados de búsqueda y llamó al siguiente negocio, que respondió de inmediato.
              </p>
              <p>
                Esto no es hipotético. Le está pasando a tu negocio cada semana. Los estudios muestran consistentemente que <span className="text-white font-semibold">el 78% de los clientes contratan al primer negocio que responde</span>. La velocidad es todo el juego.
              </p>
              <p className="text-white font-semibold text-xl">
                Contratar a alguien para responder leads las 24 horas es costoso — e incluso así, los humanos pierden mensajes, tienen malos días, y no pueden manejar diez conversaciones a la vez. Tenía que haber una mejor manera.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EPIPHANY */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="p-8 rounded-2xl border border-purple-500/20 bg-purple-500/[0.04] mb-10">
              <p className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-3">La Epifanía</p>
              <p className="text-white text-2xl font-bold leading-relaxed">
                &ldquo;Un agente IA entrenado en tu negocio puede responder a cualquier lead en menos de 60 segundos — calificarlos, manejar objeciones, reservar la cita, y escalar a ti solo cuando realmente se necesita un humano.&rdquo;
              </p>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                No es un chatbot que dice &ldquo;Gracias por contactarnos, alguien se pondrá en contacto contigo.&rdquo; Es un agente que conoce tus servicios, tu área de servicio, tu rango de precios, tu disponibilidad — y puede llevar una conversación de ventas real desde el primer mensaje hasta una cita reservada sin que tú te involucres nunca.
              </p>
              <p>
                Funciona en WhatsApp, tu sitio web, DMs de Instagram y Facebook Messenger simultáneamente. Cuando diez leads te escriben a las 11pm un viernes, los diez reciben respuesta en menos de 60 segundos. Los diez son calificados. Los que son adecuados reciben un enlace de reserva. Los demás son nutridos hasta que estén listos.
              </p>
              <p>
                Una firma legal pasaba 3 horas al día en llamadas iniciales de admisión. El setenta por ciento de los que llamaban ni siquiera estaban calificados. Su agente IA ahora maneja todo el proceso de admisión — pregunta sobre el tipo de caso, el cronograma y la urgencia. Solo los prospectos calificados llegan al abogado.
              </p>
              <p className="text-white font-semibold text-xl">
                Ahorraron 15 horas a la semana. Sus abogados usan ese tiempo en trabajo facturable en lugar de filtrar llamadas.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-center mb-16"
          >
            <SectionLabel>Resultados Reales</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Lo Que Pasa Cuando<br />
              <span className="bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">Cada Lead Recibe Respuesta en 60 Segundos.</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {results.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] text-center"
              >
                <div className="text-2xl font-black text-purple-400 mb-1">{r.result}</div>
                <div className="text-xs text-gray-500 mb-3">{r.timeframe}</div>
                <div className="text-sm text-gray-400 font-medium">{r.name}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="p-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] text-center max-w-2xl mx-auto"
          >
            <p className="text-gray-300 text-lg leading-relaxed italic mb-4">
              &ldquo;Antes temía los lunes porque tenía un montón de mensajes que había perdido el fin de semana. Ahora cada mensaje se maneja mientras estoy enfocado en el trabajo. No he perdido un lead de fin de semana desde que lo activamos.&rdquo;
            </p>
            <p className="text-purple-400 font-bold text-sm">— Carlos M., Contratista Residencial</p>
          </motion.div>
        </div>
      </section>

      {/* OFFER */}
      <section className="relative px-6 py-20 sm:py-28">
        <SectionDivider />
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-center mb-16"
          >
            <SectionLabel>Lo Que Incluye</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Un Agente IA Completo que Trabaja<br />
              <span className="bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">Para que Tú No Tengas Que Hacerlo.</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {deliverables.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.07 }}
                className="flex gap-4 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] group hover:border-purple-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 transition-colors">
                  <d.icon className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{d.title}</h3>
                  <p className="text-sm text-gray-500">{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto"
          >
            {["Activo en 48 horas", "Optimización mensual", "Sin tarifa de configuración", "Sin contratos"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs text-gray-400">
                <CheckCircle2 className="h-3 w-3 text-purple-400 flex-shrink-0" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Email Capture */}
      <section id="email-capture" className="relative px-6 py-20 sm:py-24">
        <SectionDivider />
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-3">Demo Gratuita del Bot</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
            Ve Exactamente Cómo un Agente IA<br />Manejaría Tu Próximo Lead
          </h2>
          <p className="text-gray-400 mb-8">
            Deja tu correo y te mostramos una demo en vivo personalizada para tu negocio — lo que dice, cómo califica y cómo reserva.
          </p>
          <EmailCapture tag="ai-agent" ctaText="Reservar Mi Demo Gratuita de Agente IA" accentClass="border-purple-500/30 focus:border-purple-500/60" btnClass="from-purple-600 to-purple-500" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-6 py-24 sm:py-32">
        <SectionDivider />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
            El Próximo Lead que Llegue<br />Mientras Estás en el Trabajo —<br />
            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">¿Recibirá Respuesta?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Ingresa tu correo y trazamos exactamente cómo funcionaría un agente IA para tu negocio específico — consultoría gratuita, sin compromiso.
          </p>
          <a
            href="#email-capture"
            className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold text-base hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] transition-all duration-300"
          >
            Reservar Mi Demo Gratuita de Agente IA
          </a>
          <p className="mt-4 text-xs text-gray-600">Sin contratos · Activo en 48 horas · ES + EN incluido</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
