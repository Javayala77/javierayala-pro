"use client"

import { motion } from "framer-motion"
import { Zap, Calendar, BarChart3, Globe, CheckCircle2, Users } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider } from "@/components/landing/layout"
import EmailCapture from "@/components/email-capture"

const deliverables = [
  { icon: Zap, title: "30 Publicaciones IA por Mes", desc: "Hooks, captions y hashtags escritos por IA entrenada en la voz de tu marca — estructurados para cada plataforma, listos para publicar." },
  { icon: Globe, title: "Instagram + Facebook + LinkedIn", desc: "Las tres plataformas cubiertas. Tu marca aparece de forma consistente en cada canal donde están tus clientes." },
  { icon: Calendar, title: "Programación en Horario Óptimo", desc: "Las publicaciones salen cuando tu audiencia está más activa. Sin adivinar. Sin programación manual. El sistema lo maneja automáticamente." },
  { icon: BarChart3, title: "Informe Mensual de Rendimiento", desc: "Ve exactamente qué publicaciones tuvieron más alcance, qué contenido genera engagement, y qué ajustamos el próximo mes." },
]

const results = [
  { name: "Metro Roofing Co.", result: "3 DMs entrantes en 60 días", timeframe: "solo de Instagram" },
  { name: "Bright Smiles Dental", result: "+280% alcance en perfil", timeframe: "en los primeros 45 días" },
  { name: "Peak Fitness Studio", result: "Clases completamente llenas", timeframe: "tras 90 días de automatización" },
]

export default function SocialMediaPageES() {
  return (
    <LandingLayout
      accentColor="text-violet-400"
      ctaText="Automatizar Mis Redes Sociales"
      ctaHref="#email-capture"
      homeHref="/es"
    >
      {/* HOOK */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.1),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/25 bg-violet-500/8 text-violet-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Users className="h-3.5 w-3.5" />
            Automatización de Redes Sociales
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            El Negocio con 500 Seguidores<br />Conseguía Más Clientes<br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
              Que el que Tenía 5,000.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            El número de seguidores no es el juego.{" "}
            <span className="text-white font-semibold">La consistencia sí. Y la IA acaba de hacer la consistencia sin esfuerzo para cualquier negocio.</span>
          </p>

          <motion.a
            href="#email-capture"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-violet-600 to-violet-500 text-white font-bold text-base hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Automatizar Mis Redes Sociales
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
              Programaba Publicaciones<br />
              <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">Para Docenas de Clientes. Manualmente.</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                En la agencia, gestionar redes sociales significaba una cosa: sentarse frente a una pantalla, redactar publicaciones cliente por cliente, una por una. Iniciar sesión, escribir el caption, elegir los hashtags, programarlo, pasar a la siguiente cuenta. Repetir. Cada semana.
              </p>
              <p>
                Teníamos clientes de todas las industrias — contratistas, dentistas, gimnasios, firmas legales. Y el patrón que veíamos en cada cuenta era idéntico. Los que publicaban todos los días consistentemente superaban a los que tenían audiencias más grandes. Siempre. El número de seguidores no significaba nada. La frecuencia lo era todo.
              </p>
              <p>
                Pero esto es lo que nadie dice: <span className="text-white font-semibold">mantener esa consistencia a escala es brutal.</span> La mayoría de los dueños de negocios empiezan fuerte — publicando todos los días en enero — y para marzo ya se han callado. La vida se complica. Las publicaciones se detienen. Y el algoritmo los entierra como si nunca hubieran existido.
              </p>
              <p className="text-white font-semibold text-xl">
                Todos saben que deberían publicar más. Nadie tiene el tiempo. Y esa brecha es exactamente donde los negocios pierden clientes frente a sus competidores todos los días.
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
            <div className="p-8 rounded-2xl border border-violet-500/20 bg-violet-500/[0.04] mb-10">
              <p className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-3">La Epifanía</p>
              <p className="text-white text-2xl font-bold leading-relaxed">
                &ldquo;¿Y si la IA pudiera escribir 30 publicaciones en el tiempo que le toma a un humano escribir una — y hacerlo mejor, porque nunca se cansa, se apresura, o se vuelve inconsistente?&rdquo;
              </p>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Empezamos a probar contenido generado por IA contra publicaciones escritas por humanos en cuentas reales de clientes. Los mismos negocios, las mismas audiencias. El contenido de IA — entrenado en la voz de cada marca — tuvo mejor rendimiento. No ligeramente. Significativamente. Porque estaba estructurado, era consistente y estaba optimizado para cada plataforma en lugar de ser apresurado un martes por la noche.
              </p>
              <p>
                Hook, caption, hashtags, horario de publicación — completamente automatizado. Un mes completo de contenido planificado, escrito y programado en una tarde. Múltiples plataformas manejadas simultáneamente. Voz de marca establecida desde el primer día.
              </p>
              <p>
                La primera prueba real vino de una empresa de techados que no había publicado en tres meses. Configuramos la automatización y en 60 días tenían tres DMs entrantes de Instagram pidiendo presupuestos. <span className="text-white font-semibold">No habían cambiado su servicio, sus precios, ni su sitio web. Solo su consistencia.</span>
              </p>
              <p className="text-white font-semibold text-xl">
                El algoritmo recompensa a las cuentas que aparecen todos los días. La IA es lo que finalmente hace eso posible para un dueño de negocio que tiene una empresa que manejar.
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
              <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">El Feed Nunca Se Silencia.</span>
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
                <div className="text-2xl font-black text-violet-400 mb-1">{r.result}</div>
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
              &ldquo;Antes me estresaba por las redes sociales cada semana. Ahora las publicaciones salen solas. Consistentemente. Y recibo DMs de personas que dicen que llevan semanas viendo mi contenido antes de contactarme.&rdquo;
            </p>
            <p className="text-violet-400 font-bold text-sm">— Sandra M., Estudio de Diseño de Interiores</p>
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
            <SectionLabel>El Sistema</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Todo lo que Necesitan Tus Redes Sociales —<br />
              <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">Corriendo sin que Tú lo Toques.</span>
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
                className="flex gap-4 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] group hover:border-violet-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-500/20 transition-colors">
                  <d.icon className="h-5 w-5 text-violet-400" />
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
            {["Español + Inglés", "Investigación de hashtags", "Voz de marca", "Calendario de contenido"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs text-gray-400">
                <CheckCircle2 className="h-3 w-3 text-violet-400 flex-shrink-0" />
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
          <p className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-3">Consultoría Gratuita de Redes Sociales</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
            Ve Exactamente Cómo Lucirían 30 Días de<br />Contenido Automatizado para Tu Negocio
          </h2>
          <p className="text-gray-400 mb-8">
            Ingresa tu correo y agendamos una llamada gratuita — auditamos tu presencia actual en redes y te mostramos exactamente lo que produciría el sistema.
          </p>
          <EmailCapture tag="newsletter" ctaText="Reservar Mi Consultoría Gratuita de Redes Sociales" accentClass="border-violet-500/30 focus:border-violet-500/60" btnClass="from-violet-600 to-violet-500" />
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
            Tu Competidor Está Publicando<br />Todos los Días Ahora Mismo.<br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">¿Y Tú?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Ingresa tu correo y auditamos tu presencia actual en redes gratis — y te mostramos exactamente lo que haría la automatización para tu negocio.
          </p>
          <a
            href="#email-capture"
            className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-violet-600 to-violet-500 text-white font-bold text-base hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] transition-all duration-300"
          >
            Automatizar Mis Redes Sociales
          </a>
          <p className="mt-4 text-xs text-gray-600">Sin contratos · 30 publicaciones/mes · ES + EN incluido</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
