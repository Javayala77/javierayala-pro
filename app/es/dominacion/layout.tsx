import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dominación Local: Google Ads + Maps + SEO | Javier Ayala",
  description: "Un negocio que domina Google Ads, Google Maps y el SEO orgánico al mismo tiempo se vuelve la única opción en su mercado. Sesión de estrategia gratuita.",
  alternates: {
    canonical: "https://javierayala.pro/es/dominacion",
  },
  openGraph: {
    title: "¿Qué Pasa Cuando un Negocio Domina Google Ads, Maps y SEO al Mismo Tiempo?",
    description: "Estrategia coordinada de tres canales para negocios locales. Más leads, menor costo por lead, dominación total del mercado. Sesión gratuita.",
    type: "website",
    url: "https://javierayala.pro/es/dominacion",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dominación Local: 3 Canales, 1 Estrategia | Javier Ayala",
    description: "Google Ads + Google Maps + SEO coordinados bajo una sola estrategia. Domina tu mercado local.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
