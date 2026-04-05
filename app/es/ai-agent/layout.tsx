import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Agente IA de Reservas para Negocios de Servicios | Javier Ayala",
  description: "Un agente de inteligencia artificial entrenado en tu negocio que responde leads en 60 segundos, califica prospectos y reserva citas — en WhatsApp, tu sitio web y redes sociales.",
  alternates: {
    canonical: "https://javierayala.pro/es/ai-agent",
  },
  openGraph: {
    title: "¿Qué Pasa con los Leads que Llegan Cuando Estás Ocupado Trabajando?",
    description: "Agente IA que responde en 60 segundos, califica leads, maneja objeciones y reserva citas. Funciona en WhatsApp, sitio web e Instagram simultáneamente.",
    type: "website",
    url: "https://javierayala.pro/es/ai-agent",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agente IA de Reservas | Javier Ayala",
    description: "El 78% de los clientes contratan al primer negocio que responde. Tu agente IA responde en 60 segundos, siempre.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
