import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Automatización de WhatsApp para Negocios | Bot 24/7 | Javier Ayala",
  description: "Responde cada lead en menos de 60 segundos, las 24 horas. Bot de WhatsApp con Cloud API que califica prospectos, reserva citas y hace seguimiento automático.",
  alternates: {
    canonical: "https://javierayala.pro/es/whatsapp",
  },
  openGraph: {
    title: "Tu Próximo Cliente Te Está Escribiendo Ahora Mismo. ¿Le Estás Respondiendo?",
    description: "Bot de WhatsApp con Cloud API oficial de Meta. Respuesta en 60 segundos, calificación automática y reserva de citas — las 24 horas, 7 días a la semana.",
    type: "website",
    url: "https://javierayala.pro/es/whatsapp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatización WhatsApp 24/7 | Javier Ayala",
    description: "Nunca pierdas otro lead por responder tarde. Bot que califica y reserva citas automáticamente.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
