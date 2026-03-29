const stats = [
  {
    value: "2.7x",
    label: "More calls from optimized Google Business Profiles",
  },
  {
    value: "70%",
    label: "Of customers check Google reviews before calling a local business",
  },
  {
    value: "45%",
    label: "Of local searches result in a store visit or call same day",
  },
]

export function SeoResults() {
  return (
    <section className="px-4 py-16 sm:py-24 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-12 sm:mb-16 text-balance">
          What Happens When Your Profile Is <span className="text-blue-400">Active:</span>
        </h2>
        
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-[#0D1424] border border-blue-500/20"
            >
              <span className="text-5xl sm:text-6xl md:text-7xl font-black text-blue-400 block mb-4">
                {stat.value}
              </span>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
