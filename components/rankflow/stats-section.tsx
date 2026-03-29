const stats = [
  {
    value: "68%",
    description: "Of online experiences begin with a search engine",
  },
  {
    value: "46%",
    description: "Of all Google searches are looking for local information",
  },
  {
    value: "97%",
    description: "Of people learn more about a local business online",
  },
  {
    value: "$0",
    description: "Cost per click for organic Google traffic",
  },
]

export function RankFlowStats() {
  return (
    <section className="px-4 py-16 sm:py-24 bg-gradient-to-b from-transparent via-green-500/5 to-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-[#0F1629] border border-gray-800 text-center"
            >
              <div className="text-4xl sm:text-5xl font-black text-green-500 mb-3">
                {stat.value}
              </div>
              <p className="text-sm text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
