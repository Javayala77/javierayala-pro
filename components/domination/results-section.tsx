const stats = [
  { value: "3x", label: "More Visibility", description: "Across all channels" },
  { value: "40%", label: "Lower Cost Per Lead", description: "Channels working together" },
  { value: "24/7", label: "Always On", description: "Ads + Organic + Maps" },
  { value: "1", label: "Monthly Invoice", description: "Everything included" },
]

export function DominationResults() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4">
            What Happens When <span className="text-yellow-500">Everything Works Together</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="p-5 sm:p-6 rounded-2xl bg-[#12121a] border border-yellow-500/20 text-center"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-yellow-500 mb-2">
                {stat.value}
              </div>
              <div className="text-base sm:text-lg font-bold text-white mb-1">{stat.label}</div>
              <div className="text-xs sm:text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
