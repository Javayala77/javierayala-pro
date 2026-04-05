import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Automatización de Redes Sociales con IA | Instagram, Facebook, LinkedIn | Javier Ayala",
  description: "30 publicaciones al mes generadas por IA y programadas automáticamente en Instagram, Facebook y LinkedIn. Tu marca aparece todos los días sin que tú lo toques.",
  alternates: {
    canonical: "https://javierayala.pro/es/social-media",
  },
  openGraph: {
    title: "Tu Competidor Está Publicando Todos los Días Ahora Mismo. ¿Y Tú?",
    description: "30 publicaciones al mes en Instagram, Facebook y LinkedIn — creadas por IA, programadas automáticamente, en la voz de tu marca. Sin contratos.",
    type: "website",
    url: "https://javierayala.pro/es/social-media",
  },
  twitter: {
    card: "summary_large_image",
    title: "Redes Sociales Automáticas con IA | Javier Ayala",
    description: "30 publicaciones al mes en Instagram, Facebook y LinkedIn. Automatizado, consistente, en tu voz de marca.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
