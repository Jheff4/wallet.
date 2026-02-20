import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function Gateway() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const pillars = [
    80, 68, 56, 44, 32, 20,
    20, 32, 44, 56, 68, 80,
  ]

  useEffect(() => {
  const ctx = gsap.context(() => {
    const el = containerRef.current
    if (!el) return

    const heading = el.querySelector(".gateway-heading")
    if (!heading) return

    // Wrap only text nodes safely
    const wrapWords = (node: ChildNode) => {
      if (node.nodeType === 3) { // TEXT NODE
        const words = node.textContent?.split(" ") || []
        const frag = document.createDocumentFragment()

        words.forEach((word) => {
          if (!word) return
          const span = document.createElement("span")
          span.className = "gateway-word inline-block"
          span.textContent = word
          frag.appendChild(span)
          frag.appendChild(document.createTextNode(" "))
        })

        node.replaceWith(frag)
      }
    }

    heading.childNodes.forEach(wrapWords)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top bottom-=250",
        toggleActions: "play none none reverse",
      },
    })

    // Pillars animation
    tl.from(".pillar", {
      opacity: 0,
      y: 60,
      scaleY: 0.85,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.06,
    })

    // Width settle
    .fromTo(
      ".pillars-row",
      { scaleX: 1.06 },
      {
        scaleX: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.6"
    )

    // Words animate
    .from(
      ".gateway-word",
      {
        x: 80,
        opacity: 0,
        duration: 0.4,
        ease: "power3.out",
        stagger: 0.08,
      },
      "-=0.5"
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

        <div
          className="pillars-row h-[600px] flex items-end gap-4"
          style={{ width: "max(100%, calc(12 * 80px + 11 * 16px))" }}
        >
          {pillars.map((height, i) => (
            <div
              key={i}
              className="pillar rounded-sm"
              style={{
                flex: "1 0 80px",
                height: `${height}%`,
                background:
                  "linear-gradient(180deg, rgba(255, 216, 0, 0) 0%, rgba(254, 194, 24, 0.485577) 62.02%, #FDAB32 100%)",
              }}
            />
          ))}
        </div>
      </div>

      <div
        className="
          gateway-heading
          relative z-10
          -translate-y-1/4
          text-[5.5rem]
          leading-[1.4]
          tracking-wide
          font-black
          text-center
          max-lg:text-[5rem]
          max-sm:text-[3.5rem]
        "
      >
        Your <span> </span> Gateway<span> </span> <br className="md:hidden" />into<span> </span> <br className="max-md:hidden" /> the<span> </span> <br className="md:hidden" /> Blockchain
      </div>
    </div>
  )
}

export default Gateway
