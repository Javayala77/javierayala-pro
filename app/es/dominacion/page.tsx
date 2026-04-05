"use client"

import { motion } from "framer-motion"
import { Crown, Target, Search, MapPin, TrendingUp, BarChart3, CheckCircle2 } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider } from "@/components/landing/layout"
import EmailCapture from "@/components/email-capture"

const deliverables = [
  { icon: Target, title: "Gestión de Google Ads", desc: "Campañas de alta intención dirigidas a compradores que están buscando activamente tu servicio ahora mismo. Leads desde la primera semana." },
  { icon: Search, title: "SEO y Automatización de Contenido", desc: "Artículos de blog y páginas de ubicación semanales que acumulan tus posiciones orgánicas mes a mes — tráfico que no cuesta nada una vez que posiciona." },
  { icon: MapPin, title: "Dominación de Google Maps", desc: "Optimización completa de Google Business, publicaciones diarias, generación de reseñas y construcción de citas — todo lo necesario para mantener una posición en el Top 3." },
  { icon: TrendingUp, title: "Una Estrategia Unificada", desc: "Los tres canales coordinados bajo una sola estrategia de segmentación. Las mismas palabras clave, el mismo mensaje, el mismo objetivo — dominación." },
  { icon: BarChart3, title: "Informe Mensual de Rendimiento", desc: "Una vista clara de los tres canales: qué se gastó, qué posicionó, qué se movió, y qué viene el próximo mes." },
  { icon: Crown, title: "Dominancia de Mercado Compuesta", desc: "Cuando los buscadores ven tu anuncio, tu ficha de Maps y tu resultado orgánico al mismo tiempo, la confianza llega al 100% y los competidores se vuelven invisibles." },
]

const results = [
  { name: "Summit Contracting", result: "4x más leads vs. solo anuncios", timeframe: "en 90 días" },
  { name: "Vanguard HVAC", result: "Costo por lead bajó 40%", timeframe: "al tercer mes" },
  { name: "Meridian Legal Group", result: "Dominó la página 1 completa", timeframe: "en 12 palabras clave clave" },
]

export default function DominacionPageES() {
  return (
    <LandingLayout
      accentColor="text-yellow-400"
      ctaText="Dominar Mi Mercado"
      ctaHref="#email-capture"
      homeHref="/es"
    >
      {/* HOOK */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.08),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(234,179,8,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.025)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-yellow-500/25 bg-yellow-500/8 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Crown className="h-3.5 w-3.5" />
            Paquete de Dominación Local
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            ¿Qué Pasa Cuando un Negocio<br />Domina Google Ads, Google Maps<br />
            <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
              Y el SEO Orgánico al Mismo Tiempo?
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            En cada mercado siempre hay un negocio que parece estar en todas partes en Google.
            No es suerte.{" "}
            <span className="text-white font-semibold">Es una estrategia coordinada de tres canales — y está disponible para ti.</span>
          </p>

          <motion.a
            href="#email-capture"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-bold text-base hover:shadow-[0_0_40px_rgba(234,179,8,0.4)] transition-all duration-300"
          >
            Reservar Mi Sesión de Estrategia Gratuita
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
              Siempre Hay un Negocio<br />
              <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">Que Parece Estar en Todas Partes.</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Mira cualquier mercado local competitivo — plomeros, contratistas, abogados, dentistas — y encontrarás el mismo patrón. Hay un negocio que simplemente no puedes evitar cuando buscas su servicio. Resultados pagados en la parte superior. Un pin en Google Maps con cientos de reseñas. Resultados orgánicos tres posiciones más abajo.
              </p>
              <p>
                La primera vez que alguien busca, ve el anuncio de este negocio. Sigue bajando y ve el mismo negocio en el mapa. Baja hasta los resultados orgánicos y ahí está de nuevo. Para cuando ha llegado al final de la página, ha visto este negocio tres veces y a todos los demás solo una vez.
              </p>
              <p className="text-white font-semibold text-xl">
                Eso no es suerte. No es un presupuesto enorme. Es una estrategia coordinada donde tres canales apuntan al mismo negocio al mismo tiempo.
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
            <div className="p-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/[0.04] mb-10">
              <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-3">La Epifanía</p>
              <p className="text-white text-2xl font-bold leading-relaxed">
                &ldquo;Cuando Google Ads, Google Maps y el SEO apuntan al mismo negocio, se crea una dominancia compuesta. La confianza llega al 100%. La tasa de clics explota. Las conversiones se duplican porque la gente siente que no puede evitarte.&rdquo;
              </p>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                La mayoría de los negocios hace una cosa a la vez. Corren anuncios por un tiempo, luego paran cuando los leads bajan. O intentan SEO pero no tocan su perfil de Maps. O optimizan Google Maps pero no corren ningún anuncio. Nunca conectan los tres — así que obtienen visibilidad parcial, resultados parciales, y dejan la mayoría del tráfico de búsqueda al competidor que lo descubrió primero.
              </p>
              <p>
                La clave es que estos canales no solo se suman entre sí — se multiplican. Tus anuncios construyen familiaridad de marca que mejora tu tasa de clics orgánica. Tu contenido orgánico mejora el Quality Score de tus anuncios, bajando tu costo por clic. Tu posición en Maps proporciona prueba social que hace que todos los demás canales conviertan mejor.
              </p>
              <p>
                Un contratista implementó los tres canales bajo una estrategia coordinada. 90 días después: cuatro veces los leads que obtenía solo con anuncios. El costo por lead bajó 40% porque el tráfico orgánico y de Maps era gratuito.
              </p>
              <p className="text-white font-semibold text-xl">
                Cuando un negocio posee Google Ads, Google Maps Y los resultados orgánicos simultáneamente, el mercado efectivamente se cierra para todos los demás. Ese negocio se convierte en la elección obvia.
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
              <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">Dominas los Tres Canales a la Vez.</span>
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
                <div className="text-2xl font-black text-yellow-400 mb-1">{r.result}</div>
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
              &ldquo;Antes corría anuncios y me preguntaba por qué el costo por lead seguía subiendo. Ahora que todo trabaja junto, recibo más llamadas que nunca y mi presupuesto en anuncios rinde más. Es un negocio completamente diferente.&rdquo;
            </p>
            <p className="text-yellow-400 font-bold text-sm">— Mike T., Contratista General</p>
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
              Tres Canales. Una Estrategia.<br />
              <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">Dominación Total del Mercado.</span>
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
                className="flex gap-4 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] group hover:border-yellow-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/20 transition-colors">
                  <d.icon className="h-5 w-5 text-yellow-400" />
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
            {["Un solo punto de contacto", "Segmentación coordinada", "ES + EN incluido", "Sin contratos"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs text-gray-400">
                <CheckCircle2 className="h-3 w-3 text-yellow-400 flex-shrink-0" />
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
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-3">Plan Gratuito de 90 Días</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
            Obtén el Plan Mes a Mes<br />para Dominar Tu Mercado Local
          </h2>
          <p className="text-gray-400 mb-8">
            Google Ads → WhatsApp → Meta → SEO. La secuencia exacta que usamos para llevar negocios de invisibles al #1 en su mercado.
          </p>
          <EmailCapture tag="newsletter" ctaText="Reservar Mi Sesión de Estrategia Gratuita" accentClass="border-yellow-500/30 focus:border-yellow-500/60" btnClass="from-yellow-500 to-amber-400" />
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
            Ahora Mismo, Alguien en Tu Mercado<br />Está Corriendo los Tres Canales.<br />
            <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">¿Eres Tú?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Ingresa tu correo y te mostramos exactamente cómo luciría la dominación total en tu mercado — sesión de estrategia gratuita, sin compromiso.
          </p>
          <a
            href="#email-capture"
            className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-bold text-base hover:shadow-[0_0_50px_rgba(234,179,8,0.5)] transition-all duration-300"
          >
            Reservar Mi Sesión de Estrategia Gratuita
          </a>
          <p className="mt-4 text-xs text-gray-600">Sin contratos · Sin tarifa de configuración · Los tres canales incluidos</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
