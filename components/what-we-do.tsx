export default function WhatWeDo() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-yellow-400">WHAT WE DO</div>
        <div className="mt-8 flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Simplifying IT <br />
              for a complex world.
            </h2>
          </div>
          <div className="flex-1">
            <div className="relative h-[300px] w-[300px] rotate-45 bg-[radial-gradient(circle,_white_2px,_transparent_2px)] bg-[length:20px_20px]"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

