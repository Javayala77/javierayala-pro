import { Check } from "lucide-react"

const perfectFor = [
  "Just registered your LLC",
  "Opening your doors soon",
  "Have a service but no customers",
  "Tired of waiting to get started",
  "Want customers THIS WEEK",
]

const industries = [
  "Plumbing", "HVAC", "Locksmith", "Remodeling", "Landscaping",
  "Cleaning", "Moving", "Construction", "Roofing", "Electrical",
]

export function LaunchWhoFor() {
  return (
    <section className="px-4 py-16 sm:py-24 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-10 sm:mb-12">
          Perfect For:
        </h2>
        
        {/* Perfect for list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-12 sm:mb-16 max-w-2xl mx-auto">
          {perfectFor.map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-[#12121a] border border-orange-500/20"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <span className="text-base sm:text-lg text-white font-medium">{item}</span>
            </div>
          ))}
        </div>
        
        {/* Industries */}
        <div className="text-center">
          <h3 className="text-lg sm:text-xl text-gray-400 mb-5 sm:mb-6">Industries We Launch:</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {industries.map((industry, index) => (
              <span 
                key={index}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#12121a] border border-gray-800 text-gray-300 text-xs sm:text-sm"
              >
                {industry}
              </span>
            ))}
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-medium">
              And more...
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
