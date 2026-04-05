"use client"

import { motion } from "framer-motion"
import { MessageCircle, Clock, Users, CalendarCheck, Globe, CheckCircle2 } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider } from "@/components/landing/layout"
import EmailCapture from "@/components/email-capture"

const deliverables = [
  { icon: Clock, title: "Respuesta Instantánea, 24/7", desc: "Cada mensaje recibe respuesta en menos de 60 segundos — a las 2am, los fines de semana, durante tu trabajo más ocupado. Ningún lead espera, ningún lead se va." },
  { icon: Users, title: "Calificación Inteligente de Leads", desc: "El bot hace tus preguntas de precalificación automáticamente, filtra a los que pierden el tiempo y solo te presenta a los compradores serios." },
  { icon: CalendarCheck, title: "Integración con Calendario y Reservas", desc: "Se conecta directamente a Google Calendar, Calendly o Acuity. Los prospectos reservan citas confirmadas sin que tú tengas que hablar con ellos primero." },
  { icon: MessageCircle, title: "Secuencias de Seguimiento Automatizadas", desc: "Los leads que no responden reciben recordatorios suaves en piloto automático. Nada se pierde mientras estás trabajando." },
  { icon: Globe, title: "Español + Inglés", desc: "El bot detecta el idioma en que escribe tu cliente y responde en consecuencia. Sin configuración adicional de tu parte." },
  { icon: MessageCircle, title: "Construido sobre WhatsApp Cloud API", desc: "La misma infraestructura que usa WhatsApp internamente. Cuenta de empresa verificada, palomita verde, sin límites de volumen." },
]

const results = [
  { name: "Contratista HVAC", result: "7 citas reservadas", timeframe: "primera semana, fuera de horario" },
  { name: "Agencia Inmobiliaria", result: "60% menos leads perdidos", timeframe: "en los primeros 30 días" },
  { name: "Firma de Consultoría Legal", result: "Tiempo de respuesta < 60 seg", timeframe: "las 24 horas" },
]

export default function WhatsAppPageES() {
  return (
    <LandingLayout
      accentColor="text-green-400"
      ctaText="Quiero Mi Bot de WhatsApp"
      ctaHref="#email-capture"
      homeHref="/es"
    >
      {/* HOOK */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.1),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-green-500/25 bg-green-500/8 text-green-400 text-xs font-bold uppercase tracking-widest mb-8">
            <MessageCircle className="h-3.5 w-3.5" />
            Automatización WhatsApp — Cloud API
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            Un Lead Llegó a las 2:17am.<br />El Negocio Respondió a las 9am.<br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              El Cliente Ya Había Contratado a Otro.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            WhatsApp tiene un 98% de tasa de apertura. Tus clientes ya están ahí. La única pregunta es si{" "}
            <span className="text-white font-semibold">alguien les responde en 60 segundos — o en 7 horas.</span>
          </p>

          <motion.a
            href="#email-capture"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-green-600 to-green-500 text-white font-bold text-base hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] transition-all duration-300"
          >
            Reservar Mi Consultoría Gratuita de Bot
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
              Gran Negocio. Respuesta Lenta.<br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">Cliente Perdido.</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Los negocios de servicios trabajan en horario de oficina. Los leads no. Seguía viendo el mismo patrón trabajando con negocios de servicios — un dueño con años de experiencia, excelentes reseñas, una reputación real en su mercado. Y una bandeja de WhatsApp llena de mensajes a los que aún no había llegado.
              </p>
              <p>
                Los mensajes no eran de personas explorando. Eran de personas listas para contratar. &ldquo;¿Cuánto costaría arreglar mi aire acondicionado?&rdquo; &ldquo;¿Tienen disponibilidad esta semana?&rdquo; &ldquo;Necesito a alguien hoy.&rdquo; Enviados a las 8pm. A medianoche. El sábado por la mañana. Mientras el dueño estaba en un trabajo, durmiendo, o simplemente viviendo su vida.
              </p>
              <p>
                Para cuando respondía — tres horas después, seis horas después — el cliente ya había encontrado a alguien más. No porque el competidor fuera mejor. Solo porque <span className="text-white font-semibold">respondió primero.</span>
              </p>
              <p className="text-white font-semibold text-xl">
                WhatsApp es el canal número uno que usan los clientes para preguntar sobre servicios. Tiene un 98% de tasa de apertura. Pero requiere respuestas instantáneas para convertir. Ningún equipo humano puede hacer eso las 24 horas.
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
            <div className="p-8 rounded-2xl border border-green-500/20 bg-green-500/[0.04] mb-10">
              <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-3">La Epifanía</p>
              <p className="text-white text-2xl font-bold leading-relaxed">
                &ldquo;WhatsApp Cloud API permite automatización completa — un bot que responde en menos de 60 segundos, hace preguntas de calificación, filtra a los que pierden el tiempo y reserva citas. Construido sobre la misma infraestructura que usa el propio WhatsApp.&rdquo;
              </p>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                La WhatsApp Cloud API no es un atajo de terceros ni una herramienta de área gris. Es la infraestructura oficial de negocios de Meta — la misma columna vertebral que impulsa al propio WhatsApp. Y permite construir un asistente completamente automatizado que vive dentro de tu número de WhatsApp existente.
              </p>
              <p>
                Llega un mensaje a las 2am. El bot responde en menos de un minuto. Hace las preguntas correctas — qué servicio necesitan, dónde están ubicados, cuándo quieren ser atendidos. Filtra a los buscadores de precio y el spam. Reserva citas confirmadas directamente en tu calendario. Y hace seguimiento automático a los leads que no convirtieron la primera vez.
              </p>
              <p className="text-white font-semibold text-xl">
                Un cliente de HVAC perdía más del sesenta por ciento de sus leads porque estaba en el techo cuando le escribían. El bot entró en funcionamiento un lunes. Para el viernes, tenía siete citas reservadas de mensajes que habían llegado fuera del horario laboral — leads que habría perdido completamente la semana anterior.
              </p>
              <p>
                Su negocio no cambió. Sus precios no cambiaron. Su disponibilidad no cambió. <span className="text-white font-semibold">Lo único que cambió fue que finalmente alguien estaba respondiendo.</span>
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
              Lo Que Pasa Cuando Cada Mensaje<br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">Recibe Respuesta en Menos de 60 Segundos.</span>
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
                <div className="text-2xl font-black text-green-400 mb-1">{r.result}</div>
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
              &ldquo;Perdía trabajos cada semana porque estaba ocupado cuando alguien me escribía. Ahora el bot lo maneja y yo solo me presento a las citas. Se pagó solo en la primera semana.&rdquo;
            </p>
            <p className="text-green-400 font-bold text-sm">— Carlos M., Contratista HVAC</p>
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
              Un Bot que Trabaja Mientras Tú Trabajas —<br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">Y Mientras Duermes.</span>
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
                className="flex gap-4 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] group hover:border-green-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                  <d.icon className="h-5 w-5 text-green-400" />
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
            {["WhatsApp Cloud API", "Calificación de leads", "ES + EN", "Respuesta 24/7"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs text-gray-400">
                <CheckCircle2 className="h-3 w-3 text-green-400 flex-shrink-0" />
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
          <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-3">Demo Gratuita en Vivo del Bot</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
            Mira Cómo un Bot Reserva un Trabajo<br />Mientras el Dueño Dormía
          </h2>
          <p className="text-gray-400 mb-8">
            Deja tu correo y configuramos una demo personalizada para tu negocio — verás exactamente lo que experimentarían tus clientes.
          </p>
          <EmailCapture tag="whatsapp-bot" ctaText="Reservar Mi Consultoría Gratuita de Bot" accentClass="border-green-500/30 focus:border-green-500/60" btnClass="from-green-600 to-green-500" />
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
            Tu Próximo Cliente Te Está Escribiendo<br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">Ahora Mismo. ¿Le Estás Respondiendo?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Ingresa tu correo y configuramos una demo gratuita mostrando exactamente cómo funcionaría el bot para tu negocio específico — qué dice, cómo califica, cómo reserva.
          </p>
          <a
            href="#email-capture"
            className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-green-600 to-green-500 text-white font-bold text-base hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] transition-all duration-300"
          >
            Reservar Mi Consultoría Gratuita de Bot
          </a>
          <p className="mt-4 text-xs text-gray-600">Sin contratos · WhatsApp Cloud API · ES + EN</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
