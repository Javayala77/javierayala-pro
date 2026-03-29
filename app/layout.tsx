import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Javier Ayala | AI-Powered Google Ads Management for Local Service Businesses',
  description: 'Stop wasting money on Google Ads. I use AI to find every dollar your campaigns are wasting — and fix it in 48 hours. Free audit for plumbers, HVAC, roofers, dentists & more.',
  keywords: 'Google Ads management, AI advertising, local service business ads, PPC management, Google Ads audit, plumber marketing, HVAC advertising',
  openGraph: {
    title: 'Your Google Ads Are Wasting Money. I\'ll Fix That in 48 Hours.',
    description: 'AI-powered Google Ads management for local service businesses. More calls, less waste, real results.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Powered Google Ads Management | Javier Ayala',
    description: 'Stop wasting money on Google Ads. Free audit reveals exactly where your budget is going.',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=3" sizes="any" />
        <link rel="icon" href="/logo.png?v=3" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/logo.png?v=3" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17952699649" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17952699649');
            `
          }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
