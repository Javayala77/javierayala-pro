import { Users, Mail, Star } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Business Owners",
  },
  {
    icon: Mail,
    value: "52",
    label: "Weekly Issues",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Average Rating",
  },
]

export function NewsletterSocialProof() {
  return (
    <section className="px-4 py-16 border-y border-zinc-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="h-6 w-6 text-blue-400 mx-auto mb-3" />
              <div className="text-2xl sm:text-3xl font-black text-white">{stat.value}</div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
