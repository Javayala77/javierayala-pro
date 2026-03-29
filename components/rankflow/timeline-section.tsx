import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const timeline = [
  {
    period: "MONTH 1-2",
    title: "Foundation Building",
    items: [
      "Content indexed by Google",
      "GMB activity increasing",
      "Social presence established",
      "Rankings starting to move",
    ],
    color: "gray",
  },
  {
    period: "MONTH 3-4",
    title: "First Results",
    items: [
      "First keyword ranking improvements",
      "Organic traffic starting",
      "GMB views increasing",
      "Phone calls from organic search begin",
    ],
    color: "yellow",
  },
  {
    period: "MONTH 6",
    title: "Significant Growth",
    items: [
      "Significant ranking improvements",
      "Regular organic traffic",
      "Multiple page 1 rankings",
      "Free leads from Google every week",
    ],
    color: "green",
  },
  {
    period: "MONTH 12",
    title: "Local Authority",
    items: [
      "Established local authority",
      "Top rankings for main keywords",
      "Consistent free organic leads",
      "Content working 24/7 forever",
    ],
    color: "green",
  },
]

export function RankFlowTimeline() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 sm:mb-16 text-balance">
          What To Expect Month By Month:
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {timeline.map((item, index) => (
            <div 
              key={index}
              className={`p-6 rounded-2xl border ${
                item.color === "green" 
                  ? "bg-green-500/10 border-green-500/30" 
                  : item.color === "yellow"
                  ? "bg-yellow-500/10 border-yellow-500/30"
                  : "bg-[#0F1629] border-gray-800"
              }`}
            >
              <div className={`text-sm font-bold mb-2 ${
                item.color === "green" ? "text-green-500" : 
                item.color === "yellow" ? "text-yellow-500" : "text-gray-500"
              }`}>
                {item.period}
              </div>
              <h3 className="text-lg font-bold text-white mb-4">{item.title}</h3>
              <ul className="space-y-2">
                {item.items.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-sm text-gray-400 flex items-start gap-2">
                    <span className={
                      item.color === "green" ? "text-green-500" : 
                      item.color === "yellow" ? "text-yellow-500" : "text-gray-600"
                    }>•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Important Note */}
        <div className="mt-10 p-6 rounded-xl bg-green-500/10 border border-green-500/30 text-center">
          <p className="text-gray-300 leading-relaxed">
            <span className="text-white font-semibold">SEO takes time but lasts forever.</span>
            <br />
            Paid ads stop when you stop paying.
            <br />
            Organic rankings keep bringing free leads month after month.
          </p>
          <Button 
            size="lg" 
            className="mt-6 h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-bold bg-green-600 hover:bg-green-700 text-white rounded-xl"
            asChild
          >
            <a href="https://wa.me/573103956445?text=I%20want%20to%20start%20ranking%20on%20Google" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Start My SEO Journey
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
