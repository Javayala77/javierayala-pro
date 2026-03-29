import { Linkedin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo/Name */}
          <div>
            <p className="text-lg font-bold text-foreground">Javier Ayala</p>
            <p className="text-sm text-muted-foreground">AI-Powered Google Ads Management</p>
          </div>
          
          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#audit-form" className="hover:text-foreground transition-colors">
              Free Audit
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
          
          {/* Social */}
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/javier-ayala-056b82344" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Connect on LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Javier Ayala. All rights reserved.</p>
          <p className="mt-2">Serving local service businesses across the United States.</p>
        </div>
      </div>
    </footer>
  )
}
