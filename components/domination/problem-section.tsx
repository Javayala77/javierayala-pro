import { X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const problems = [
  {
    title: "Scattered Marketing",
    description: "You're paying multiple agencies or trying to DIY different channels. Nothing works together.",
  },
  {
    title: "Inconsistent Results",
    description: "Some months good, some months nothing. No predictable flow of new customers.",
  },
  {
    title: "Competitors Winning",
    description: "They show up everywhere — ads, maps, search results. You're invisible.",
  },
]

export function DominationProblem() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-10 sm:mb-12 text-balance px-2">
          Doing Marketing <span className="text-yellow-500">Piece By Piece</span> Is Killing Your Growth
        </h2>
        
        <div className="space-y-4 sm:space-y-5 max-w-2xl mx-auto mb-10">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-red-500/5 border border-red-500/20 text-left"
            >
              <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5">
                <X className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{problem.title}</h3>
                <p className="text-sm sm:text-base text-gray-400">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <Button 
          size="lg" 
          className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-bold bg-yellow-500 hover:bg-yellow-600 text-black rounded-xl"
          asChild
        >
          <a href="https://wa.me/573103956445?text=I%20need%20a%20complete%20marketing%20system" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" />
            Fix My Marketing
          </a>
        </Button>
      </div>
    </section>
  )
}
