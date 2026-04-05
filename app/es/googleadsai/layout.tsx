import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Google Ads con IA para Negocios Locales | Javier Ayala",
  description: "Deja de desperdiciar dinero en Google Ads. Uso IA para encontrar cada dólar que tus campañas están desperdiciando — y lo arreglo en 48 horas. Auditoría gratis.",
  alternates: {
    canonical: "https://javierayala.pro/es/googleadsai",
  },
  openGraph: {
    title: "Tus Google Ads Están Desperdiciando Dinero. Lo Arreglo en 48 Horas.",
    description: "Gestión de Google Ads con IA para negocios de servicios locales. Más llamadas, menos desperdicio, resultados reales. Auditoría gratuita.",
    type: "website",
    url: "https://javierayala.pro/es/googleadsai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads con IA | Javier Ayala",
    description: "Deja de desperdiciar dinero en Google Ads. La auditoría gratis revela exactamente a dónde va tu presupuesto.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
