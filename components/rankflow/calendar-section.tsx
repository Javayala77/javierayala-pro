import { FileText, MapPin, Share2, Search, Check } from "lucide-react"

const weeks = [
  { week: 1 },
  { week: 2 },
  { week: 3 },
  { week: 4 },
]

const monthlyTotals = [
  { icon: FileText, label: "4 blog posts published", color: "green" },
  { icon: MapPin, label: "4 GMB posts published", color: "green" },
  { icon: Share2, label: "12 social posts published", color: "green" },
  { icon: Search, label: "16 Google index requests", color: "green" },
]

export function RankFlowCalendar() {
  return (
    <section className="px-4 py-16 sm:py-24 bg-gradient-to-b from-transparent via-green-500/5 to-transparent">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 sm:mb-16 text-balance">
          Every Month We Publish:
        </h2>
        
        {/* Weekly Calendar Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {weeks.map((w) => (
            <div 
              key={w.week}
              className="p-5 rounded-xl bg-[#0F1629] border border-gray-800"
            >
              <div className="text-green-500 font-bold text-sm mb-4">WEEK {w.week}</div>
              <ul className="space-y-2.5">
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <FileText className="h-4 w-4 text-green-500" />
                  Blog Post (SEO targeted)
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <MapPin className="h-4 w-4 text-blue-500" />
                  GMB Post
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <Share2 className="h-4 w-4 text-purple-500" />
                  3 Social Posts
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <Search className="h-4 w-4 text-yellow-500" />
                  Google Index Request
                </li>
              </ul>
            </div>
          ))}
        </div>
        
        {/* Monthly Totals */}
        <div className="p-6 sm:p-8 rounded-2xl bg-green-500/10 border border-green-500/30">
          <h3 className="text-lg font-bold text-white text-center mb-6">MONTHLY TOTAL</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {monthlyTotals.map((total, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm sm:text-base text-white">{total.label}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-6">+ 1 ranking report sent</p>
        </div>
        
        {/* 12 Month Projection */}
        <div className="mt-8 p-6 rounded-xl bg-[#0F1629] border border-gray-800 text-center">
          <p className="text-gray-400 mb-2">After 12 months:</p>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-2xl font-black text-green-500">48</span>
              <p className="text-gray-400">SEO blog posts working for you</p>
            </div>
            <div>
              <span className="text-2xl font-black text-blue-500">48</span>
              <p className="text-gray-400">GMB posts showing activity</p>
            </div>
            <div>
              <span className="text-2xl font-black text-purple-500">144</span>
              <p className="text-gray-400">social posts building brand</p>
            </div>
          </div>
          <p className="mt-4 text-lg font-semibold text-white">= Organic traffic machine</p>
        </div>
      </div>
    </section>
  )
}
