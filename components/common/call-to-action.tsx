"use client"

import { useState, useEffect } from "react"
import RequestForm from "./request-form"

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl tracking-tight font-extrabold text-gray-900 text-center">
            Let&apos;s embrace innovation, enhance efficiency, and drive success together
          </h2>
          <p className="mb-10 font-light text-gray-600 text-lg sm:text-xl text-center max-w-3xl mx-auto">
            inOgital offers a comprehensive suite of services designed to empower educational institutions, NPOs, and
            SMEs with cutting-edge technology solutions. Contact us today and let&apos;s transform your
            organization&apos;s tech landscape!
          </p>
          <div className="flex justify-center">
            <RequestForm />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

export default CTA

