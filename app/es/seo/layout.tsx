import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SEO Local y Google Maps para Negocios de Servicios | Javier Ayala",
  description: "Llega al Top 3 de Google Maps en 90 días. Optimización completa de Google Business, publicaciones diarias, generación de reseñas y construcción de autoridad local.",
  alternates: {
    canonical: "https://javierayala.pro/es/seo",
  },
  openGraph: {
    title: "Solo Hay 3 Lugares en Google Maps. Así es Como Aseguras Que Uno Sea el Tuyo.",
    description: "El Local Pack recibe el 70% de todos los clics en búsquedas locales. Sistema probado para llegar al Top 3 en 90 días — sin contratos.",
    type: "website",
    url: "https://javierayala.pro/es/seo",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Local Google Maps | Javier Ayala",
    description: "Llega al Top 3 de Google Maps en 90 días. Más llamadas, más clientes, sin pagar por clic.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
