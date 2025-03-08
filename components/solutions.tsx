import { Network, Users2, Shield, Code2, Smartphone, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"

const solutions = [
  {
    icon: Network,
    title: "Managed Services",
    description:
      "Free up your internal resources to focus on the business by letting us handle day to day support services, management, and monitoring of your IT.",
  },
  {
    icon: Users2,
    title: "IT Consulting & Advisory",
    description:
      "The right technology, implemented properly, appropriately managed and monitored, can lead to significant gains in growth",
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description:
      "Our experts can identify vulnerabilities, assess risks, and implement robust security measures to safeguard your systems and data.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Our web development services can help you establish an impactful online presence and reach your target audience effectively.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "We can help you create a customized mobile app that aligns with your brand and goals, with expertise in various mobile platforms.",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description:
      "With our expertise in cloud technologies, we can help you find the right cloud solutions that meet your business needs and goals.",
  },
]

export default function Solutions() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="text-yellow-400">HOW WE DO</div>
          <h2 className="mt-4 text-4xl font-bold text-white">Solutions</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group rounded-lg bg-[#111] p-8 transition-transform hover:-translate-y-2"
            >
              <solution.icon className="mb-6 h-8 w-8 text-red-500" />
              <h3 className="mb-4 text-xl font-semibold text-white">{solution.title}</h3>
              <p className="mb-6 text-gray-400">{solution.description}</p>
              <a href="#" className="text-red-500 hover:text-red-400">
                Learn more
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-black text-white hover:bg-gray-900">
            View All Solutions
          </Button>
        </div>
      </div>
    </section>
  )
}

