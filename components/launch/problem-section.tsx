import { X } from "lucide-react"

const painPoints = [
  "Spending weeks trying to build a website yourself",
  "No idea how Google Ads works",
  "Watching competitors get all the calls while you wait",
]

export function LaunchProblem() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-10 sm:mb-12 text-balance px-2">
          Most New Businesses Wait{" "}
          <span className="text-orange-500">Months</span> To Get Their First Customer Online.
        </h2>
        
        <div className="space-y-4 sm:space-y-5 max-w-xl mx-auto">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-red-500/5 border border-red-500/20 text-left"
            >
              <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
              </div>
              <p className="text-base sm:text-lg text-gray-300">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
