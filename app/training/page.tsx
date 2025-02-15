"use client"
import { TrainingData } from "@/lib/data/dummy-data"
import TrainingCard from "./training-card"
import CTA from "@/components/common/call-to-action"

const TrainingPage = () => {
  return (
    <>
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl text-gray-900">
            Training solutions that suit your Org needs
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
            Browse a list of training opportunities below and let us know the one you need
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {TrainingData.map((training) => (
              <TrainingCard key={training.id} training={training} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}

export default TrainingPage

