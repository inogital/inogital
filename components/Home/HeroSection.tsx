


const HeroSection = () => {
  return (
   
<section className="h-[70vh] flex items-center justify-center  bg-[url('/img/herobg.png')] bg-no-repeat bg-cover bg-blend-saturation ">
    <div className="px-12 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-center md:w-11/12 xl:w-9/12 ">
            <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-slate-200 md:text-6xl md:tracking-tight">
                <span>Keep </span> <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-slate-100 to-red-500 lg:inline">your attention </span> <span>...</span>
            </h1>
            <p className="px-0 mb-8 text-lg  text-slate-200 md:text-xl lg:px-24">
            on your other business matters, and let us take care of your I.T requirements.
            </p>
            
        </div>
       
    </div>
</section>
  )
}

export default HeroSection