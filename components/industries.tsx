import Image from "next/image"
import { Building2, Truck, Heart, Building, Briefcase, Users } from "lucide-react"

const industries = [
  {
    icon: Building2,
    title: "Industry & Manufacturing",
  },
  {
    icon: Truck,
    title: "Transportation & Logistics",
  },
  {
    icon: Heart,
    title: "Healthcare",
  },
  {
    icon: Building,
    title: "Banks & Insurance",
  },
  {
    icon: Briefcase,
    title: "Consulting Providers",
  },
  {
    icon: Users,
    title: "Non-Profit",
  },
]

export default function Industries() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="relative mb-16 overflow-hidden rounded-lg">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FQ3p8WyB6m5CVq6obeSukZwgKcu8j9.png"
            alt="Person working"
            width={1200}
            height={600}
            className="w-full object-cover"
          />
          <div className="absolute bottom-4 right-4">
            <Image
              src="https://placeholder.pics/svg/120x120/FFFFFF/333333/clutch"
              alt="Clutch Badge"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="text-yellow-400">HOW WE DO</div>
        <h2 className="mt-4 text-4xl font-bold text-white">
          Solving IT challenges in every <br />
          industry, every day.
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {industries.map((industry) => (
            <div key={industry.title} className="group text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-white/20">
                <industry.icon className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-medium text-white">{industry.title}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="text-red-500 hover:text-red-400">
            View All Industries
          </a>
        </div>
      </div>
    </section>
  )
}

