import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="border-b border-white/10 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="flex-1 text-center md:text-left">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
              We manage your IT, <br />
              so you can manage <br />
              your business.
            </h1>
            <p className="mb-8 text-xl text-gray-300">
              Take charge of your business continuity with innovative IT solutions
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Button size="lg" className="bg-red-600 text-white hover:bg-red-700">
                Schedule a Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Services
              </Button>
            </div>
          </div>
          <div className="relative flex-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6r8QB0MwG0XNtBYEuyJv9Thm7sE9DY.png"
                alt="IT Team"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-blue-500/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

