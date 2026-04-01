import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import LeadPopup from '@/components/lead-popup'
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
        {/* Structured Data — Organization + Person + WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://javierayala.pro/#person",
                  "name": "Javier Ayala",
                  "url": "https://javierayala.pro",
                  "jobTitle": "AI Marketing Expert",
                  "description": "AI marketing specialist with 8+ years experience and $2M+ in ad spend managed. Specializes in Google Ads, Meta Ads, WhatsApp automation, and local SEO for service businesses.",
                  "knowsAbout": ["Google Ads", "Meta Ads", "WhatsApp Automation", "Local SEO", "AI Marketing", "PPC Management", "Google Maps SEO"],
                  "email": "googleads@javierayala.pro",
                  "sameAs": []
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://javierayala.pro/#organization",
                  "name": "Javier Ayala — AI Marketing",
                  "url": "https://javierayala.pro",
                  "logo": "https://javierayala.pro/logo.png",
                  "founder": { "@id": "https://javierayala.pro/#person" },
                  "description": "AI-powered marketing for local service businesses. Google Ads, Meta Ads, WhatsApp automation, and local SEO that generates leads — not just traffic.",
                  "areaServed": "US",
                  "serviceType": ["Google Ads Management", "Meta Ads Management", "WhatsApp Automation", "Local SEO", "Google Maps Optimization", "AI Marketing"],
                  "email": "googleads@javierayala.pro",
                  "priceRange": "$$"
                },
                {
                  "@type": "WebSite",
                  "@id": "https://javierayala.pro/#website",
                  "url": "https://javierayala.pro",
                  "name": "Javier Ayala | AI Marketing",
                  "publisher": { "@id": "https://javierayala.pro/#organization" },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://javierayala.pro/blog?q={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  }
                }
              ]
            })
          }}
        />
        {/* Meta Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1291283423194390');
              fbq('track', 'PageView');
            `
          }}
        />
        <noscript>
          <img height="1" width="1" style={{display:'none'}}
            src="https://www.facebook.com/tr?id=1291283423194390&ev=PageView&noscript=1"
          />
        </noscript>
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
        <LeadPopup />
        <Analytics />
      </body>
    </html>
  )
}
