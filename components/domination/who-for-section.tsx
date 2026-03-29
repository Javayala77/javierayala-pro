import { Check, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const perfectFor = [
  "Spending $2K+ on ads but want organic leads too",
  "Tired of managing multiple vendors",
  "Ready to own your local market",
  "Want predictable monthly lead flow",
  "Serious about outranking competitors",
]

const industries = [
  "Plumbing", "HVAC", "Roofing", "Dental", "Legal",
  "Med Spa", "Landscaping", "Construction", "Auto Repair",
]

export function DominationWhoFor() {
  return (
    <section className="px-4 py-16 sm:py-24 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-10 sm:mb-12">
          This Is For You If...
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-12 max-w-2xl mx-auto">
          {perfectFor.map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-[#12121a] border border-yellow-500/20"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
              </div>
              <span className="text-sm sm:text-base text-white font-medium">{item}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <h3 className="text-lg sm:text-xl text-gray-400 mb-5 sm:mb-6">Industries We Dominate:</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
            {industries.map((industry, index) => (
              <span 
                key={index}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#12121a] border border-gray-800 text-gray-300 text-xs sm:text-sm"
              >
                {industry}
              </span>
            ))}
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-xs sm:text-sm font-medium">
              And more...
            </span>
          </div>
          
          <Button 
            size="lg" 
            className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-bold bg-yellow-500 hover:bg-yellow-600 text-black rounded-xl"
            asChild
          >
            <a href="https://wa.me/573103956445?text=The%20Domination%20Bundle%20sounds%20perfect%20for%20me" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              This Is Me - Let&apos;s Talk
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
