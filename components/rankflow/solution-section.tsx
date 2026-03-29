import { FileText, MapPin, Share2, Star, Search, BarChart3, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const deliverables = [
  {
    icon: FileText,
    title: "SEO Blog Posts",
    description: "Every weekday, a new blog post goes live on your website. Targeted to keywords your customers actually search. Submitted to Google for indexing. Building your authority while you sleep.",
    frequency: "Daily (weekdays)",
  },
  {
    icon: MapPin,
    title: "Google Business Profile Posts",
    description: "Daily posts to your GMB profile keep you active in Google's eyes. Service updates. Project highlights. Offers. Google sees you're alive — and rewards you for it.",
    frequency: "Daily",
  },
  {
    icon: Share2,
    title: "Social Media Content",
    description: "3 posts per week to your social channels. English and Spanish. Consistent brand presence without you lifting a finger.",
    frequency: "3x per week",
  },
  {
    icon: Search,
    title: "Google Index Submissions",
    description: "We don't just publish — we tell Google to look. Every piece of content is submitted for indexing so it ranks faster.",
    frequency: "With every post",
  },
  {
    icon: Star,
    title: "Review Response",
    description: "Every Google review gets a professional, on-brand response. Good reviews get thanked. Bad reviews get handled carefully.",
    frequency: "As they come in",
  },
  {
    icon: BarChart3,
    title: "Monthly Ranking Report",
    description: "Every month you get a clear report: what's ranking, what's improving, what's coming next. No jargon. Just results.",
    frequency: "Monthly",
  },
]

export function RankFlowSolution() {
  return (
    <section className="px-4 py-16 sm:py-24 bg-gradient-to-b from-transparent via-green-500/5 to-transparent">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-4 text-balance">
          Here&apos;s What Happens When You Work With Us
        </h2>
        <p className="text-lg sm:text-xl text-gray-400 text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
          You go back to running your business. We make sure Google knows you exist.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {deliverables.map((item, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-[#0F1629] border border-gray-800 hover:border-green-500/30 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-green-500" />
                </div>
                <span className="text-xs text-green-500 font-bold uppercase tracking-wide">
                  {item.frequency}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-green-500/10 border border-green-500/30 text-center">
          <p className="text-lg sm:text-xl text-white font-semibold mb-2">
            All of this runs automatically. Every week. Without you doing anything.
          </p>
          <p className="text-gray-400">
            One setup. Content forever.
          </p>
        </div>
        
        <div className="mt-10 text-center">
          <Button 
            size="lg" 
            className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-bold bg-green-600 hover:bg-green-700 text-white rounded-xl"
            asChild
          >
            <a href="https://wa.me/573103956445?text=This%20sounds%20like%20exactly%20what%20I%20need" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              This Is What I Need
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
