import { Star } from "lucide-react"

const stats = [
  {
    label: "Years",
    value: "08",
    subtext: "Proven Track Record",
  },
  {
    label: "%",
    value: "98",
    subtext: "Customer Satisfaction",
  },
  {
    label: "Projects",
    value: "470+",
    subtext: "We Have Completed",
  },
  {
    label: "Mins",
    value: "3",
    subtext: "Average Answer Time",
  },
]

export default function Stats() {
  return (
    <section className="border-b border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <div className="w-full sm:w-auto">
            <div className="text-sm text-gray-400">REVIEWED ON</div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-white">Clutch</span>
              <div className="flex text-red-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
            <div className="text-sm text-gray-400">2K+ REVIEWS</div>
          </div>

          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-white">
                {stat.value} <span className="text-xl">{stat.label}</span>
              </div>
              <div className="text-sm text-gray-400">{stat.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

