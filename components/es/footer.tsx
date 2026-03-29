import { Linkedin } from "lucide-react"

export function FooterES() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo/Name */}
          <div>
            <p className="text-lg font-bold text-foreground flex items-center gap-1.5">javierayala<span className="text-[10px] font-bold tracking-[0.2em] text-cyan-400/70 border border-cyan-500/30 px-1.5 py-0.5 rounded">.pro</span></p>
            <p className="text-sm text-muted-foreground">Gestion de Google Ads Impulsada por IA</p>
          </div>
          
          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#audit-form" className="hover:text-foreground transition-colors">
              Auditoria Gratis
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Politica de Privacidad
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terminos
            </a>
          </div>
          
          {/* Social */}
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/javier-ayala-056b82344" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Conecta en LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Javier Ayala. Todos los derechos reservados.</p>
          <p className="mt-2">Sirviendo negocios de servicios locales en Estados Unidos.</p>
        </div>
      </div>
    </footer>
  )
}
