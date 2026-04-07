"use client"

import { motion } from "framer-motion"
import { Target, TrendingUp, Zap, BarChart3, CheckCircle2, Search } from "lucide-react"
import { LandingLayout, EASE, SectionLabel, SectionDivider } from "@/components/landing/layout"
import EmailCapture from "@/components/email-capture"

const deliverables = [
  { icon: Target, title: "Estrategia y Configuración de Campañas", desc: "Grupos de anuncios precisos, palabras clave de coincidencia exacta y una estructura que hace que el algoritmo de Google trabaje a tu favor." },
  { icon: Search, title: "Gestión de Palabras Clave y Negativas", desc: "Investigación profunda de palabras clave más una lista creciente de negativos que elimina el tráfico irrelevante desde el primer día." },
  { icon: Zap, title: "Optimización de Pujas con IA", desc: "Las pujas inteligentes impulsadas por IA ajustan continuamente por palabra clave, hora del día y dispositivo para maximizar tu retorno." },
  { icon: BarChart3, title: "Seguimiento de Conversiones e Informe Mensual", desc: "Ves exactamente cuánto costó cada cliente potencial, qué campañas son rentables y dónde escalamos a continuación." },
]

const results = [
  { name: "Cliente de Servicios para el Hogar", result: "Costo por lead: $340 → $67", timeframe: "en el primer mes" },
  { name: "Firma de Servicios Legales", result: "Llamadas triplicadas", timeframe: "tras reconstruir la cuenta" },
  { name: "Contratista de HVAC", result: "5x más clientes potenciales", timeframe: "con el mismo presupuesto" },
]

export default function GoogleAdsPageES() {
  return (
    <LandingLayout
      accentColor="text-cyan-400"
      ctaText="Obtener Mi Auditoría Gratuita"
      ctaHref="#email-capture"
      homeHref="/es"
    >
      {/* HOOK */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.1),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/8 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Target className="h-3.5 w-3.5" />
            Google Ads con Inteligencia Artificial
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight mb-6">
            Dos Negocios. La Misma Ciudad.<br />El Mismo Presupuesto.<br />
            <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">
              Uno Recibe Llamadas. El Otro No Recibe Nada.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            La diferencia no es el presupuesto.{" "}
            <span className="text-white font-semibold">Es la estructura. Y la estructura correcta lo cambia todo.</span>
          </p>

          <motion.a
            href="#email-capture"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold text-base hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all duration-300"
          >
            Obtener Mi Auditoría Gratuita de Google Ads
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
              Tomé el Control de una Campaña<br />
              <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">Que Estaba Desangrando Dinero.</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                En la agencia, heredamos una cuenta de Google Ads de un cliente que llevaba seis meses publicando anuncios. Gastaban un presupuesto significativo cada mes y tenían dos o tres clientes potenciales para mostrarlo. Pensaban que Google Ads simplemente no funcionaba para su industria.
              </p>
              <p>
                Abrí la cuenta y entendí inmediatamente por qué estaba fallando. Palabras clave en concordancia amplia por todas partes — sus anuncios aparecían para búsquedas que no tenían nada que ver con su servicio. Sin lista de palabras clave negativas. Sin seguimiento de conversiones, así que Google no sabía cómo era un cliente real.
              </p>
              <p>
                Estaban pagando por clics de personas que nunca comprarían. Y como no había datos de conversión, Google seguía enviándoles más de lo mismo.
              </p>
              <p className="text-white font-semibold text-xl">
                El problema no era Google Ads. El problema era que la cuenta había sido configurada mal y nadie la había arreglado jamás.
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
            <div className="p-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.04] mb-10">
              <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">La Epifanía</p>
              <p className="text-white text-2xl font-bold leading-relaxed">
                &ldquo;La estructura correcta no solo reduce el desperdicio — hace que el propio algoritmo de Google pelee por ti. El mismo presupuesto. Una guerra completamente diferente.&rdquo;
              </p>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Palabras clave de coincidencia exacta, grupos de anuncios ajustados organizados por servicio e intención, una lista de palabras clave negativas que bloqueaba el tráfico irrelevante, seguimiento de conversiones instalado para que Google pudiera aprender cómo era un cliente real.
              </p>
              <p>
                Reconstruimos la cuenta desde cero. El mismo presupuesto que había estado produciendo unos pocos clientes potenciales de baja calidad ahora corría a través de una estructura que Google podía optimizar de verdad.
              </p>
              <p className="text-white font-semibold text-xl">
                La mayoría de los negocios que publican Google Ads están en la misma situación. No están perdiendo porque la plataforma no funciona. Están perdiendo porque una mala estructura hace que el algoritmo trabaje en su contra.
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
              <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">La Estructura Es Correcta.</span>
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
                <div className="text-2xl font-black text-cyan-400 mb-1">{r.result}</div>
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
              &ldquo;Pensaba que Google Ads simplemente no funcionaba para mi tipo de negocio. Entonces Javier reconstruyó la cuenta y mi teléfono comenzó a sonar todos los días. Ojalá lo hubiera hecho hace dos años.&rdquo;
            </p>
            <p className="text-cyan-400 font-bold text-sm">— Carlos R., Servicios de Plomería y Drenaje</p>
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
              Todo lo que Tu Cuenta de Google Ads Necesita —<br />
              <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">Construido Bien y Optimizado Diariamente.</span>
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
                className="flex gap-4 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] group hover:border-cyan-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                  <d.icon className="h-5 w-5 text-cyan-400" />
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
            {["Pruebas A/B de anuncios", "Remarketing", "Auditoría gratuita incluida", "Sin contratos"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs text-gray-400">
                <CheckCircle2 className="h-3 w-3 text-cyan-400 flex-shrink-0" />
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
          <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">Auditoría Gratuita de Google Ads</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
            Descubre Exactamente Dónde<br />Se Está Desperdiciando Tu Presupuesto
          </h2>
          <p className="text-gray-400 mb-8">
            Una revisión gratuita de 30 minutos que revela los errores que drenan la mayoría de las cuentas de Google Ads locales.
          </p>
          <EmailCapture tag="google-ads-audit-es" ctaText="Obtener Mi Auditoría Gratuita de Google Ads" accentClass="border-cyan-500/30 focus:border-cyan-500/60" btnClass="from-cyan-600 to-cyan-500" />
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
            Tus Competidores Están Recibiendo<br />Las Llamadas Que Deberías Estar Recibiendo Tú.<br />
            <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">Descubre Por Qué.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Ingresa tu correo y agendaremos una auditoría gratuita de tu cuenta de Google Ads — verás exactamente a dónde va el presupuesto y qué haríamos diferente.
          </p>
          <a
            href="#email-capture"
            className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold text-base hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all duration-300"
          >
            Obtener Mi Auditoría Gratuita de Google Ads
          </a>
          <p className="mt-4 text-xs text-gray-600">Sin contratos · Funciona para cuentas nuevas y existentes · EN + ES</p>
        </motion.div>
      </section>
    </LandingLayout>
  )
}
