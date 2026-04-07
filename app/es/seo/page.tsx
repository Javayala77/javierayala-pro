"use client"

import { motion } from "framer-motion"
import { MapPin, Star, Building2, Phone, BarChart3, CheckCircle2 } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider } from "@/components/landing/layout"
import EmailCapture from "@/components/email-capture"

const deliverables = [
  { icon: Building2, title: "Optimización Completa de Google Business", desc: "Cada sección de tu Perfil de Empresa de Google configurada para señalar autoridad — categorías, servicios, atributos, preguntas y respuestas, y más." },
  { icon: MapPin, title: "Publicaciones Diarias y Actualización de Fotos", desc: "Google recompensa la actividad. Publicamos actualizaciones diarias y fotos frescas en tu perfil, manteniendo el algoritmo activo todos los días." },
  { icon: Star, title: "Generación y Gestión de Reseñas", desc: "Campañas automatizadas que convierten a clientes felices en reseñas de 5 estrellas — y un sistema de respuesta que maneja cada reseña profesionalmente." },
  { icon: Phone, title: "Construcción de Citas Locales", desc: "Tu nombre, dirección y teléfono listados de forma consistente en todos los directorios importantes que Google usa para verificar autoridad local." },
  { icon: BarChart3, title: "Optimización de Palabras Clave Locales", desc: "Investigación de los términos exactos que buscan tus clientes locales — y optimización de cada parte de tu perfil alrededor de esos términos." },
  { icon: CheckCircle2, title: "Informe Mensual de Posiciones", desc: "Una vista clara de dónde estás en el Local Pack, qué palabras clave subieron, y las acciones exactas tomadas ese mes para seguir escalando." },
]

const results = [
  { name: "Metro Plomería", result: "Posición 4 → Posición 2", timeframe: "en 90 días" },
  { name: "Bright HVAC Services", result: "Llamadas: 8/sem → 31/sem", timeframe: "solo de Maps" },
  { name: "Premier Roofing Group", result: "Top 3 en Google Maps", timeframe: "en 74 días" },
]

export default function SeoPageES() {
  return (
    <LandingLayout
      accentColor="text-blue-400"
      ctaText="Entrar al Top 3 de Google Maps"
      ctaHref="#email-capture"
      homeHref="/es"
    >
      {/* HOOK */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/8 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
            <MapPin className="h-3.5 w-3.5" />
            SEO Local en Google Maps
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            Solo Hay 3 Lugares<br />en Google Maps.{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Así es Como Aseguras Que Uno Sea el Tuyo.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            El Local Pack recibe el 70% de todos los clics en búsquedas locales. La mayoría de los negocios nunca lo piensan —
            creen que el SEO significa su sitio web.{" "}
            <span className="text-white font-semibold">Mientras tanto, alguien más se lleva todas las llamadas.</span>
          </p>

          <motion.a
            href="#email-capture"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-base hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-300"
          >
            Entrar al Top 3 de Google Maps
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
              La Mayoría de los Negocios Piensan que &ldquo;SEO&rdquo; Significa<br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Su Sitio Web. No es Así.</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Cuando la mayoría de los dueños de negocios locales escuchan &ldquo;SEO,&rdquo; piensan en su sitio web. Invierten en rediseños, nuevo contenido, quizás un blog. Luego se preguntan por qué el teléfono sigue sin sonar.
              </p>
              <p>
                Lo que están ignorando: cuando alguien busca un plomero, un techador o un dentista cerca de ellos, no se desplazan más allá del mapa. Ven tres negocios anclados en la parte superior — el Local Pack — y llaman a uno de esos tres. Todo lo que está debajo del mapa casi no recibe atención.
              </p>
              <p>
                El Local Pack de Google Maps captura <span className="text-white font-semibold">el 70% de todos los clics</span> en búsquedas locales. El negocio en la posición 1 del mapa recibe más llamadas que los siguientes cinco resultados orgánicos juntos.
              </p>
              <p className="text-white font-semibold text-xl">
                La mayoría de los negocios configuran su Perfil de Empresa de Google una vez y lo olvidan por completo. Mientras tanto, alguien más está silenciosamente reclamando los tres lugares — y tomando cada llamada que podría haber sido tuya.
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
            <div className="p-8 rounded-2xl border border-blue-500/20 bg-blue-500/[0.04] mb-10">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">La Epifanía</p>
              <p className="text-white text-2xl font-bold leading-relaxed">
                &ldquo;Google Business es un algoritmo vivo. Recompensa a los negocios que lo tratan como una red social — publicaciones diarias, fotos frescas, responder a reseñas, actualizar servicios.&rdquo;
              </p>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Entrar al top 3 no es magia. Pero requiere acción diaria que la mayoría de los dueños de negocios simplemente no tienen tiempo de hacer: nuevas publicaciones, subida de fotos, respuestas a reseñas, datos de NAP consistentes en cientos de directorios, actualizaciones de palabras clave locales.
              </p>
              <p>
                ¿Los negocios que están en el Local Pack? Están haciendo todo esto todos los días — o tienen un sistema haciéndolo por ellos. No hay otra explicación. Google Maps recompensa la consistencia por encima de todo.
              </p>
              <p>
                Suma una estrategia de velocidad de reseñas — generando nuevas reseñas de 5 estrellas a un ritmo natural y constante — y construcción de citas locales para asegurar la información de tu negocio en toda la web, y el algoritmo no tiene más remedio que presentar tu negocio antes que los competidores que no hacen nada.
              </p>
              <p className="text-white font-semibold text-xl">
                Posicionarse en el top 3 en 90 días no es una promesa. Es un proceso. Y es completamente repetible.
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
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">El Algoritmo Trabaja para Ti.</span>
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
                <div className="text-2xl font-black text-blue-400 mb-1">{r.result}</div>
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
              &ldquo;Estuve estancado en la posición 4 durante dos años. Pensé que eso era todo lo que podría lograr. 90 días después mi teléfono no para. El proceso es exactamente lo que dijeron que sería.&rdquo;
            </p>
            <p className="text-blue-400 font-bold text-sm">— David R., Plomero Licenciado</p>
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
              Todo lo Necesario para Reclamar<br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Tu Lugar en el Local Pack.</span>
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
                className="flex gap-4 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] group hover:border-blue-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                  <d.icon className="h-5 w-5 text-blue-400" />
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
            {["Análisis de competidores", "Auditoría NAP", "Plan de 90 días", "Soporte ES + EN"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs text-gray-400">
                <CheckCircle2 className="h-3 w-3 text-blue-400 flex-shrink-0" />
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
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Plan Gratuito de 90 Días</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
            El Plan que Lleva un Negocio Local<br />de 5 Leads a 50
          </h2>
          <p className="text-gray-400 mb-8">
            Sistema mes a mes: Google Maps → Google Ads → WhatsApp → Meta. Deja de adivinar, comienza con un sistema probado.
          </p>
          <EmailCapture tag="seo-es" ctaText="Reservar Mi Consultoría Gratuita de SEO" accentClass="border-blue-500/30 focus:border-blue-500/60" btnClass="from-blue-600 to-blue-500" />
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
            Alguien en Tu Mercado<br />Va a Quedarse con Ese Lugar.<br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Deberías Ser Tú.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Ingresa tu correo y verificamos dónde apareces actualmente en Google Maps — gratis — y te mostramos exactamente qué se necesita para llegar al top 3.
          </p>
          <a
            href="#email-capture"
            className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-base hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] transition-all duration-300"
          >
            Reservar Mi Consultoría Gratuita de SEO
          </a>
          <p className="mt-4 text-xs text-gray-600">Sin contratos · Sin tarifa de configuración · ES + EN incluido</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
