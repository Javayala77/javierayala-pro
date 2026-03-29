"use client"

import { MessageCircle } from "lucide-react"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function AIAgentWhatsAppButton() {
  const trackWhatsAppClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17952699649/AwiCCNmymIscEIHqwfBC',
        'value': 0,
        'currency': 'USD'
      })
    }
  }

  return (
    <a
      href="https://wa.me/573103956445?text=I%20want%20the%20AI%20Booking%20Agent"
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#0A0A0F]"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" />
    </a>
  )
}
