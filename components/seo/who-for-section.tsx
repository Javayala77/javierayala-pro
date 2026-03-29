import { Check } from "lucide-react"

const perfectFor = [
  "You have a Google Business Profile but don't manage it actively",
  "You've ignored reviews because you don't have time",
  "You got a bad review and didn't know what to do",
  "Your competitors rank higher on Google Maps than you",
  "You want more calls without paying for ads",
]

const industries = [
  "Plumbing", "HVAC", "Locksmith", "Remodeling", "Landscaping",
  "Restaurants", "Salons", "Clinics", "Cleaning", "Contractors",
  "Dentists", "Law Offices",
]

export function SeoWhoFor() {
  return (
    <section className="px-4 py-16 sm:py-24 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-10 sm:mb-12">
          Perfect For:
        </h2>
        
        {/* Perfect for list */}
        <div className="space-y-3 sm:space-y-4 mb-12 sm:mb-16 max-w-2xl mx-auto">
          {perfectFor.map((item, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 p-4 rounded-xl bg-[#0D1424] border border-blue-500/20"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <span className="text-base sm:text-lg text-white">{item}</span>
            </div>
          ))}
        </div>
        
        {/* Industries */}
        <div className="text-center">
          <h3 className="text-lg sm:text-xl text-gray-400 mb-5 sm:mb-6">Industries We Serve:</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {industries.map((industry, index) => (
              <span 
                key={index}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#0D1424] border border-gray-800 text-gray-300 text-xs sm:text-sm"
              >
                {industry}
              </span>
            ))}
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-medium">
              And more...
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
