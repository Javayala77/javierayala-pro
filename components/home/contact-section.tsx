import { MessageCircle, Linkedin, Mail, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HomeContact() {
  return (
    <section id="contact" className="px-6 py-24 sm:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Let&apos;s Talk</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6">
          Ready To Get More
          <br />
          <span className="text-cyan-400">Customers?</span>
        </h2>
        <p className="text-lg text-gray-400 mb-12 max-w-xl mx-auto">
          Message me on WhatsApp. Tell me about your business and what you&apos;re trying to achieve. 
          I&apos;ll tell you exactly how I can help — or if I&apos;m not the right fit.
        </p>
        
        {/* Primary CTA */}
        <Button 
          size="lg" 
          className="h-16 px-10 text-xl font-bold bg-cyan-500 hover:bg-cyan-600 text-black rounded-full mb-12"
          asChild
        >
          <a href="https://wa.me/573103956445?text=Hi%20Javier,%20I%20want%20to%20learn%20more%20about%20your%20services" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-3 h-6 w-6" />
            Message Me On WhatsApp
          </a>
        </Button>
        
        {/* Alternative Contact */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="https://www.linkedin.com/in/javierayala1/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            Connect on LinkedIn
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a 
            href="mailto:contact@javierayala.com"
            className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <Mail className="h-5 w-5" />
            contact@javierayala.com
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        
        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-white">Javier Ayala</span>
              <span className="text-cyan-400 text-xl">.</span>
            </div>
            <div>
              AI Marketing & Automation Specialist
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
