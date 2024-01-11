import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const CarouselCard = () => {
  return (
    <Link
    className="flex flex-col  "
    href={`https://inogital.com`}
  >
    <div className="max-w-md max-h-40 rounded-md  overflow-hidden ">
      <Image
        src='/img/chefy-logo.png'
        alt={""}
        width={300}
        height={300}
        className={cn(
          " w-auto object-cover transition-all hover:scale-105 aspect-square"
        )}
      />
    </div>
   
      <h3 className="font-semibold text-center"> Chefy</h3>
      
  
   
  </Link>
  )
}

export default CarouselCard