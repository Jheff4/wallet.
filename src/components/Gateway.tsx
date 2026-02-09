import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function Gateway() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const pillars = [
    80,
    68,
    56,
    44,
    32,
    20,
    20,
    32,
    44,
    56,
    68,
    80,
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pillar",
        {
          opacity: 0,
          scaleY: 0.7,
          scaleX: 0.9,
          y: 80,
          filter: "blur(4px)",
        },
        {
          opacity: 0.9,
          scaleY: 1,
          scaleX: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.06,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "top 40%",
            scrub: false,
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative bg-[#111111] rounded-lg mt-5 py-[9.2rem] text-white overflow-hidden"
    >
      {/* Background Pillars Layer */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
        
        {/* Fixed height wrapper so % heights work */}
        <div className="h-[600px] flex items-end gap-4 w-full">
          {pillars.map((height, i) => (
            <div
              key={i}
              className="pillar w-full rounded-sm"
              style={{
                height: `${height}%`,
                background:
                  "linear-gradient(180deg, rgba(255, 216, 0, 0) 0%, rgba(254, 194, 24, 0.485577) 62.02%, #FDAB32 100%)",
                opacity: 0, // start hidden (GSAP animates in)
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div
        className="
          relative z-10
          -translate-y-1/4
          text-[5.5rem]
          leading-[1.4]
          tracking-wide
          font-black
          text-center
        "
      >
        Your Gateway into <br /> the Blockchain
      </div>
    </div>
  )
}

export default Gateway
