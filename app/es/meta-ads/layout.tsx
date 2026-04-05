import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Meta Ads para Negocios Locales | Facebook e Instagram | Javier Ayala",
  description: "Deja de impulsar publicaciones y empieza a generar leads reales. Gestión profesional de Meta Ads con IA para Facebook e Instagram. Consultoría gratuita.",
  alternates: {
    canonical: "https://javierayala.pro/es/meta-ads",
  },
  openGraph: {
    title: "Meta Ads Reales vs. Publicaciones Impulsadas — La Diferencia Que Vale Miles de Dólares.",
    description: "Audiencias personalizadas, retargeting y campañas completas de Facebook e Instagram para negocios de servicios locales. Más leads, menor costo.",
    type: "website",
    url: "https://javierayala.pro/es/meta-ads",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Ads con IA | Javier Ayala",
    description: "Deja de impulsar publicaciones. La consultoría gratuita te muestra cómo generar leads reales con Facebook e Instagram.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
