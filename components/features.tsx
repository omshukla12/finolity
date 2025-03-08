import Image from "next/image"

const features = [
  {
    icon: "dollar",
    title: "Cost-effectiveness",
    description: "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
  },
  {
    icon: "lightbulb",
    title: "Innovative Technology",
    description:
      "We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition.",
  },
  {
    icon: "book",
    title: "Industry Expertise",
    description:
      "We specialize in serving specific industries, such as healthcare, finance, or manufacturing, and offer tailored solutions that meet your unique needs.",
  },
  {
    icon: "arrow",
    title: "Scalability",
    description:
      "Our solutions are scalable and can grow with your business, ensuring that you get the most value out of your investment.",
  },
]

export default function Features() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="group">
              <div className="mb-6">
                <Image
                  src={`https://placeholder.pics/svg/80x80/FFFFFF/FF3333/${feature.icon}`}
                  alt={feature.title}
                  width={80}
                  height={80}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

