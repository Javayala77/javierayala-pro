"use client"

import { motion } from "framer-motion"
import { TrendingUp, FileText, MapPin, Share2, CheckCircle2 } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider } from "@/components/landing/layout"
import EmailCapture from "@/components/email-capture"

const deliverables = [
  { icon: FileText, title: "5 Artículos SEO por Semana", desc: "Escritos por IA, optimizados para tu ciudad e industria, publicados automáticamente. Google los indexa sin que tú muevas un dedo." },
  { icon: MapPin, title: "Publicaciones Diarias en Google Business", desc: "Las mismas actualizaciones diarias de GMB que antes le tomaban horas a nuestra agencia — ahora hechas automáticamente, todos los días." },
  { icon: Share2, title: "Contenido Diario en Redes Sociales", desc: "Instagram, Facebook, LinkedIn — tu marca aparece de forma consistente mientras tú te enfocas en manejar tu negocio." },
  { icon: TrendingUp, title: "Informe Mensual de Posiciones", desc: "Ves exactamente dónde subiste en Google, qué palabras clave están escalando, y qué viene después." },
]

const results = [
  { name: "Elite Roofing Co.", result: "Top 3 en Google Maps", timeframe: "en 74 días" },
  { name: "Precision Plumbing", result: "+340% tráfico orgánico", timeframe: "en 90 días" },
  { name: "Coastal Legal Group", result: "12 llamadas entrantes/sem", timeframe: "solo de Google" },
]

export default function RankFlowPageES() {
  return (
    <LandingLayout
      accentColor="text-emerald-400"
      ctaText="Quiero Este Sistema"
      ctaHref="#email-capture"
      homeHref="/es"
    >
      {/* HOOK */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.1),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8">
            <TrendingUp className="h-3.5 w-3.5" />
            SEO y Automatización de Contenido
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            Antes Hacía Esto Manualmente.<br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Luego Todo Cambió.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Lo que descubrí dentro de una agencia de marketing cambió completamente cómo pienso sobre el posicionamiento en Google —
            y{" "}
            <span className="text-white font-semibold">no tiene nada que ver con trucos de SEO ni backlinks.</span>
          </p>

          <motion.a
            href="#email-capture"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-base hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-all duration-300"
          >
            Muéstrame el Sistema
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
              Hace Cuatro Años,<br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Hacía Todo Esto a Mano.</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Empecé en una agencia de marketing digital. ¿Mi trabajo? Actualizaciones del Perfil de Empresa de Google. Cada cliente, cada semana, manualmente. Iniciar sesión, escribir una publicación, subir una foto, publicar. Luego hacerlo de nuevo para el siguiente cliente. Y el siguiente.
              </p>
              <p>
                Toda la agencia funcionaba así. Cada pieza de contenido — escrita por humanos, programada por humanos, publicada por humanos. Horas y horas de trabajo que producían resultados decentes pero <span className="text-white font-semibold">nunca escalaban</span>.
              </p>
              <p>
                Y lo frustrante: sabíamos que la consistencia era la clave. Los clientes que actualizábamos diariamente se posicionaban mejor que los que actualizábamos semanalmente. Los que tenían blog semanal aplastaban a los que tenían blog mensual. Los datos eran innegables.
              </p>
              <p className="text-white font-semibold text-xl">
                El problema no era la estrategia. El problema era que hacerlo bien requería más horas de las que teníamos.
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
            <div className="p-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] mb-10">
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">La Epifanía</p>
              <p className="text-white text-2xl font-bold leading-relaxed">
                &ldquo;¿Y si la IA pudiera hacer cada una de estas tareas manuales — más rápido, más barato, y con una calidad que nuestros mejores escritores humanos no podían igualar a escala?&rdquo;
              </p>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Empezamos a probar. Primero las publicaciones de GMB — borradores de IA, revisión humana, publicación automatizada. La calidad del contenido era mejor. La consistencia era perfecta. Y tomaba <span className="text-white font-semibold">10 minutos en vez de 3 horas</span>.
              </p>
              <p>
                Luego automatizamos los artículos del blog. El contenido social. La investigación de palabras clave. Uno por uno, todo lo que antes requería un equipo de personas con café y hojas de cálculo se convirtió en un sistema que se ejecutaba solo.
              </p>
              <p>
                Los resultados no solo se mantuvieron igual — <span className="text-white font-semibold">mejoraron</span>. Porque ahora podíamos ser consistentes a un nivel que ningún equipo humano podría sostener. Publicaciones diarias de GMB. Cinco artículos SEO por semana. Contenido social diario. Todos. Los. Días. Sin falta.
              </p>
              <p className="text-white font-semibold text-xl">
                Clientes que llevaban años estancados en la página 2 empezaron a aparecer en el top 3 de Google Maps en 60 días. El tráfico orgánico se duplicó. Luego se triplicó. Y no habían cambiado nada en su negocio — solo su consistencia en línea.
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
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">El Sistema Corre para Tu Negocio.</span>
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
                <div className="text-2xl font-black text-emerald-400 mb-1">{r.result}</div>
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
              &ldquo;No creía que el SEO orgánico pudiera moverse tan rápido. En el segundo mes estaba recibiendo llamadas de personas que me encontraron en Google — personas a las que nunca hubiera llegado con anuncios.&rdquo;
            </p>
            <p className="text-emerald-400 font-bold text-sm">— Marcus T., Contratista HVAC</p>
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
              Todo lo que la Agencia Hacía Manualmente —<br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Ahora Corriendo Automáticamente para Ti.</span>
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
                className="flex gap-4 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] group hover:border-emerald-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                  <d.icon className="h-5 w-5 text-emerald-400" />
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
            {["Español + Inglés", "Schema markup", "Indexación automática", "Calendario de contenido"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs text-gray-400">
                <CheckCircle2 className="h-3 w-3 text-emerald-400 flex-shrink-0" />
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
          <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">Plan Gratuito de 90 Días</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
            El Sistema Exacto que Usamos para Posicionar<br />Negocios Locales en Google — Gratis
          </h2>
          <p className="text-gray-400 mb-8">
            Plan de contenido + SEO mes a mes. Ve la estrategia completa antes de comprometerte con algo.
          </p>
          <EmailCapture tag="seo" ctaText="Reservar Mi Consultoría Gratuita de SEO" accentClass="border-emerald-500/30 focus:border-emerald-500/60" btnClass="from-emerald-600 to-emerald-500" />
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
            Tu Competidor Está Logrando<br />Esto Ahora Mismo.<br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">¿Y Tú?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Ingresa tu correo y verificamos tus posiciones actuales en Google gratis — y te mostramos exactamente lo que el sistema haría para tu negocio.
          </p>
          <a
            href="#email-capture"
            className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-base hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] transition-all duration-300"
          >
            Reservar Mi Consultoría Gratuita de SEO
          </a>
          <p className="mt-4 text-xs text-gray-600">Sin contratos · Sin tarifa de configuración · ES + EN incluido</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
