"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative flex items-center justify-center min-h-screen">
      <Image src="/img/herobg.png" layout="fill" objectFit="cover" quality={100} alt="Hero background" priority />
      <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-blue-900/70"></div>

      <div className="relative px-4 mx-auto max-w-7xl z-10">
        <div
          className={`w-full mx-auto text-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-tight text-white md:text-6xl lg:text-7xl">
            Keep{" "}
            <span className="inline-block px-2 py-1 text-blue-900 bg-white rounded-lg transform -skew-x-12">
              your attention
            </span>{" "}
            on what matters
          </h1>
          <p className="mb-10 text-lg text-slate-200 md:text-xl lg:text-2xl max-w-3xl mx-auto">
            Focus on your business goals, and let us take care of your tech requirements with cutting-edge solutions.
          </p>
          <a
            href="#services"
            className="px-8 py-4 text-lg font-semibold text-blue-900 bg-white rounded-full hover:bg-blue-100 transition-colors duration-300 inline-block"
          >
            Explore Our Solutions
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}

export default HeroSection

