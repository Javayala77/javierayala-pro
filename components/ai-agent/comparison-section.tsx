import { Check, X } from "lucide-react"

const comparisons = [
  { feature: "Cost", receptionist: "$3,000/mo", agent: "$497/mo" },
  { feature: "Hours", receptionist: "9am-5pm", agent: "24/7" },
  { feature: "Languages", receptionist: "1", agent: "2" },
  { feature: "Response time", receptionist: "Minutes", agent: "Seconds" },
  { feature: "Sick days", receptionist: "Yes", agent: "Never" },
  { feature: "Consistency", receptionist: "Variable", agent: "Perfect" },
  { feature: "Setup time", receptionist: "Weeks", agent: "48 hours" },
]

export function AIAgentComparison() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-4 text-balance">
          AI Agent vs Hiring{" "}
          <span className="text-purple-400">A Receptionist</span>
        </h2>
        <p className="text-gray-400 text-center text-lg mb-10 sm:mb-12">
          Same job. 6x cheaper. Never calls in sick.
        </p>
        
        {/* Comparison Table */}
        <div className="rounded-2xl overflow-hidden border border-gray-800">
          {/* Header */}
          <div className="grid grid-cols-3 bg-[#12121a]">
            <div className="p-3 sm:p-4 text-gray-500 text-sm font-medium"></div>
            <div className="p-3 sm:p-4 text-center border-l border-gray-800">
              <span className="text-red-400 font-bold text-sm sm:text-base">Receptionist</span>
            </div>
            <div className="p-3 sm:p-4 text-center border-l border-gray-800 bg-purple-500/10">
              <span className="text-purple-400 font-bold text-sm sm:text-base">AI Agent</span>
            </div>
          </div>
          
          {/* Rows */}
          {comparisons.map((row, index) => (
            <div 
              key={index}
              className={`grid grid-cols-3 ${index % 2 === 0 ? "bg-[#0A0A0F]" : "bg-[#12121a]"}`}
            >
              <div className="p-3 sm:p-4 text-gray-400 text-sm font-medium">
                {row.feature}
              </div>
              <div className="p-3 sm:p-4 text-center border-l border-gray-800 text-gray-400 text-sm flex items-center justify-center gap-1">
                {row.receptionist === "Yes" ? (
                  <X className="h-4 w-4 text-red-400" />
                ) : (
                  row.receptionist
                )}
              </div>
              <div className="p-3 sm:p-4 text-center border-l border-gray-800 bg-purple-500/5 text-white text-sm font-medium flex items-center justify-center gap-1">
                {row.agent === "Never" || row.agent === "Perfect" ? (
                  <>
                    <Check className="h-4 w-4 text-green-400" />
                    {row.agent}
                  </>
                ) : (
                  row.agent
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
