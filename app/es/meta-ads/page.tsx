"use client"

import { motion } from "framer-motion"
import { Target, Users, RefreshCw, BarChart2, CheckCircle2 } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider } from "@/components/landing/layout"
import EmailCapture from "@/components/email-capture"

const deliverables = [
  { icon: Target, title: "Anuncios en Facebook + Instagram", desc: "Construcción completa de campañas en ambas plataformas — creativos, copy, segmentación y lanzamiento. Una estrategia cohesiva que funciona en todo el ecosistema Meta." },
  { icon: Users, title: "Audiencias Personalizadas y Lookalikes", desc: "Construimos audiencias con datos reales de tus clientes, luego dejamos que la IA de Meta encuentre miles de personas que se comportan exactamente como tus mejores compradores." },
  { icon: RefreshCw, title: "Campañas de Retargeting", desc: "Campañas separadas para personas que ya visitaron tu sitio o interactuaron con tu contenido. Ya están tibios — nosotros los cerramos." },
  { icon: BarChart2, title: "Informe Mensual de Rendimiento", desc: "Cada mes ves exactamente qué campañas generaron leads, qué creatividad ganó, y cuál es el plan para los próximos 30 días." },
]

const results = [
  { name: "Empresa de Remodelación", result: "40+ leads/mes", timeframe: "de una sola campaña" },
  { name: "Firma de Consultoría Legal", result: "67% menos costo por lead", timeframe: "vs. publicaciones impulsadas" },
  { name: "Med Spa Local", result: "3.8x retorno en inversión", timeframe: "en los primeros 60 días" },
]

export default function MetaAdsPageES() {
  return (
    <LandingLayout
      accentColor="text-pink-400"
      ctaText="Hablemos de Mis Anuncios"
      ctaHref="#email-capture"
      homeHref="/es"
    >
      {/* HOOK */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(236,72,153,0.1),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.03)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-pink-500/25 bg-pink-500/8 text-pink-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Target className="h-3.5 w-3.5" />
            Gestión de Meta Ads
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            Vi un Negocio Gastar<br />
            <span className="bg-gradient-to-r from-pink-400 to-rose-300 bg-clip-text text-transparent">
              $3,000 Impulsando Publicaciones. Cero Clientes.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Hay una diferencia entre gastar dinero en Facebook y{" "}
            <span className="text-white font-semibold">ejecutar anuncios que realmente generan leads.</span>{" "}
            La mayoría de los negocios nunca lo aprenden — hasta que se les acaba el presupuesto.
          </p>

          <motion.a
            href="#email-capture"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-pink-600 to-pink-500 text-white font-bold text-base hover:shadow-[0_0_40px_rgba(236,72,153,0.4)] transition-all duration-300"
          >
            Reservar Mi Consultoría Gratuita de Meta Ads
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
              Cada Cliente Decía lo Mismo.<br />
              <span className="bg-gradient-to-r from-pink-400 to-rose-300 bg-clip-text text-transparent">&ldquo;Hacemos Anuncios en Facebook.&rdquo;</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                En la agencia, cada nuevo cliente contaba la misma historia. &ldquo;Hemos probado los anuncios de Facebook. No funcionan para nuestra industria.&rdquo; Luego les pedíamos ver su Ads Manager — y aparecía lo mismo siempre.
              </p>
              <p>
                No campañas. No conjuntos de anuncios. No segmentación. Solo un cementerio de publicaciones impulsadas. Quinientos aquí, mil allá. &ldquo;Impulsar publicación&rdquo; una y otra vez. Los números de alcance lucían impresionantes — doce mil personas, treinta mil personas. Las llamadas: cero.
              </p>
              <p>
                Un cliente había gastado casi tres mil en un solo trimestre impulsando sus mejores publicaciones orgánicas. Estaban orgullosos del alcance. Pensaban que funcionaba. Nadie les había dicho nunca <span className="text-white font-semibold">que las publicaciones impulsadas y los Meta Ads reales son cosas completamente diferentes.</span>
              </p>
              <p className="text-white font-semibold text-xl">
                Las publicaciones impulsadas no tienen segmentación, no tienen embudo, no tienen seguimiento de conversiones. Estás pagando por ojos que nunca van a comprar.
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
            <div className="p-8 rounded-2xl border border-pink-500/20 bg-pink-500/[0.04] mb-10">
              <p className="text-pink-400 text-xs font-bold uppercase tracking-widest mb-3">La Epifanía</p>
              <p className="text-white text-2xl font-bold leading-relaxed">
                &ldquo;Los Meta Ads reales no son una campaña. Son tres — cada una dirigida a un tipo completamente diferente de persona en un momento completamente diferente de su proceso de compra.&rdquo;
              </p>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Reconstruimos todo el enfoque desde cero. Audiencias frías — personas que nunca habían oído hablar del negocio, segmentadas por demografía, intereses y comportamientos. Retargeting — personas que ya habían visitado el sitio web o visto un video. Conversión — leads tibios que habían interactuado más de una vez. Tres campañas separadas, cada una con su propio creativo, su propio mensaje, su propio objetivo.
              </p>
              <p>
                Luego añadimos audiencias personalizadas construidas con la lista de clientes del propio negocio, y audiencias lookalike — la IA de Meta encontrando cientos de miles de personas nuevas que se comportan igual que sus mejores clientes actuales. Con optimización de pujas con IA y campañas de leads por WhatsApp encima de todo eso, la máquina completa empezó a funcionar junta.
              </p>
              <p className="text-white font-semibold text-xl">
                El mismo presupuesto. Un resultado completamente diferente. El cliente que no obtenía nada de sus publicaciones impulsadas comenzó a generar más de cuarenta leads reales por mes — con menos de la mitad del gasto.
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
              <span className="bg-gradient-to-r from-pink-400 to-rose-300 bg-clip-text text-transparent">El Embudo Está Bien Construido.</span>
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
                <div className="text-2xl font-black text-pink-400 mb-1">{r.result}</div>
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
              &ldquo;Llevábamos más de un año impulsando publicaciones y pensábamos que los anuncios simplemente no funcionaban para nosotros. En el primer mes de correr campañas reales, teníamos más leads de los que podíamos manejar.&rdquo;
            </p>
            <p className="text-pink-400 font-bold text-sm">— Sandra R., Dueña de Negocio de Remodelación</p>
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
              La Arquitectura Completa de Campañas —<br />
              <span className="bg-gradient-to-r from-pink-400 to-rose-300 bg-clip-text text-transparent">Construida, Gestionada y Optimizada para Ti.</span>
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
                className="flex gap-4 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] group hover:border-pink-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500/20 transition-colors">
                  <d.icon className="h-5 w-5 text-pink-400" />
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
            {["Optimización de pujas con IA", "Campañas de leads por WhatsApp", "Seguimiento de conversiones", "Pruebas A/B de creativos"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs text-gray-400">
                <CheckCircle2 className="h-3 w-3 text-pink-400 flex-shrink-0" />
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
          <p className="text-pink-400 text-xs font-bold uppercase tracking-widest mb-3">Análisis Gratuito de Competidores</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
            Ve Exactamente en Qué Están Gastando<br />Tus Competidores en Meta Ads Ahora Mismo
          </h2>
          <p className="text-gray-400 mb-8">
            Su copy, su segmentación y los huecos que están dejando abiertos. Reporte completo — gratis.
          </p>
          <EmailCapture tag="meta-ads" ctaText="Reservar Mi Consultoría Gratuita de Meta Ads" accentClass="border-pink-500/30 focus:border-pink-500/60" btnClass="from-pink-600 to-pink-500" />
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
            Cada Día que Impulsas Publicaciones<br />Es un Día que Estás Pagando<br />
            <span className="bg-gradient-to-r from-pink-400 to-rose-300 bg-clip-text text-transparent">para Ser Ignorado.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Ingresa tu correo y agendaremos una consultoría gratuita — te mostramos exactamente qué cambiaría una estructura real de campañas Meta para tu negocio.
          </p>
          <a
            href="#email-capture"
            className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-pink-600 to-pink-500 text-white font-bold text-base hover:shadow-[0_0_50px_rgba(236,72,153,0.5)] transition-all duration-300"
          >
            Reservar Mi Consultoría Gratuita de Meta Ads
          </a>
          <p className="mt-4 text-xs text-gray-600">Sin contratos · Facebook + Instagram · EN + ES</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
