const stats = [
  {
    value: "78%",
    label: "Of customers hire the business that responds first",
  },
  {
    value: "3x",
    label: "More bookings from after-hours leads with instant response",
  },
  {
    value: "40%",
    label: "Reduction in no-shows with automated reminders",
  },
  {
    value: "24/7",
    label: "Your business is now always open for bookings",
  },
]

export function AIAgentResults() {
  return (
    <section className="px-4 py-16 sm:py-24 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-10 sm:mb-14 text-balance">
          What Happens When You{" "}
          <span className="text-purple-400">Never Miss A Lead:</span>
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="p-5 sm:p-6 rounded-2xl bg-[#12121a] border border-purple-500/20 text-center"
            >
              <p className="text-4xl sm:text-5xl font-black text-purple-400 mb-2">{stat.value}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
