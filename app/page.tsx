import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Stats from "@/components/stats"
import WhatWeDo from "@/components/what-we-do"
import Features from "@/components/features"
import Solutions from "@/components/solutions"
import Industries from "@/components/industries"
import News from "@/components/news"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Stats />
      <WhatWeDo />
      <Features />
      <Solutions />
      <Industries />
      <News />
      <Footer />
    </main>
  )
}

