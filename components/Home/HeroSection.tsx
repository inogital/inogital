import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiOutlineLightBulb } from 'react-icons/hi'

const HeroSection = () => {
  return (
   
<section className="pt-24 bg-white">
    <div className="px-12 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-slate-900 md:text-6xl md:tracking-tight">
                <span>Keep </span> <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-slate-400 to-red-500 lg:inline">your attention </span> <span>...</span>
            </h1>
            <p className="px-0 mb-8 text-lg text-slate-600 md:text-xl lg:px-24">
            on your other business matters, and let us take care of your I.T requirements.
            </p>
            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                
                <Link href="/about" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-slate-100 rounded-2xl sm:w-auto sm:mb-0">
                    Learn More
                   <HiOutlineLightBulb className='ml-2 ' />
                </Link>
            </div>
        </div>
        <div className="w-full mx-auto my-20 text-center md:w-10/12">
            <div className="relative z-0 w-full mt-8">
                <div className="relative overflow-hidden shadow-2xl">
                    <div className="flex items-center flex-none px-4 bg-slate-400 rounded-b-none h-11 rounded-xl">
                        <div className="flex space-x-1.5">
                            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                        </div>
                    </div>
                    <Image src='/img/hero.png' width={2000} height={1136} alt='hero_img' />
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default HeroSection