"use client"

import { useEffect, useRef, useState } from "react"

type Props = {
  videoId: string
}

const YoutubeVid = ({ videoId }: Props) => {
  const [load, setLoad] = useState(false)
  const videoRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLoad(true)
        observer.disconnect()
      }
    })

    const currentVideoRef = videoRef.current

    if (currentVideoRef) {
      observer.observe(currentVideoRef)
    }

    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef)
      }
    }
  }, [])

  return (
    <div
      ref={videoRef}
      className="overflow-hidden rounded-2xl border border-white/10 bg-black"
    >
      {load ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="aspect-video h-auto w-full"
        />
      ) : (
        <div className="flex aspect-video items-center justify-center text-sm text-zinc-500">
          Loading...
        </div>
      )}
    </div>
  )
}

export default YoutubeVid
