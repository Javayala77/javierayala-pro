import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SEO Automático con IA: Blog, Google Business y Redes Sociales | Javier Ayala",
  description: "5 artículos SEO por semana, publicaciones diarias en Google Business y contenido diario en redes sociales — todo generado y publicado automáticamente por IA.",
  alternates: {
    canonical: "https://javierayala.pro/es/rankflow",
  },
  openGraph: {
    title: "Todo lo que la Agencia Hacía Manualmente — Ahora Corriendo Automáticamente para Ti.",
    description: "Consistencia diaria en Google Business, blog y redes sociales con IA. Los negocios que aparecen en el Top 3 publican todos los días — ahora tú también puedes.",
    type: "website",
    url: "https://javierayala.pro/es/rankflow",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO y Contenido Automático con IA | Javier Ayala",
    description: "5 artículos SEO por semana + publicaciones diarias en Google Business + redes sociales. Todo automatizado.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
