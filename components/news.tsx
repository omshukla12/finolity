import Image from "next/image"

const news = [
  {
    image: "university",
    source: "ABP NEWS",
    date: "January 24, 2024",
    title: "Empowering Universities: Finolity's...",
  },
  {
    image: "computer",
    source: "NDTVProfit",
    date: "October 25, 2024",
    title: "Finolity Becomes Authorized Corel...",
  },
  {
    image: "adobe",
    source: "Economictimes",
    date: "December 1, 2024",
    title: "Finolity Achieves Certified Adobe...",
  },
  {
    image: "server",
    source: "The Straits Times",
    date: "November",
    title: "Finolity Launches New...",
  },
]

export default function News() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-4">
          <h3 className="inline-block text-red-500 after:mt-2 after:block after:h-0.5 after:w-full after:bg-red-500">
            About Finolity Consultancy Services
          </h3>
        </div>

        <h2 className="mb-12 text-4xl font-bold text-white">Latest News</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {news.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-lg bg-[#111] transition-transform hover:-translate-y-2"
            >
              <div className="relative aspect-video">
                <Image
                  src={`https://placeholder.pics/svg/400x250/DDDDDD/666666/${item.image}`}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 text-sm text-gray-400">
                  {item.source} | {item.date}
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

