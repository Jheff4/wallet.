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
    let starInterval: number

    const ctx = gsap.context(() => {
      const el = containerRef.current
      if (!el) return

      const heading = el.querySelector(".gateway-heading")
      if (!heading) return

      // Wrap heading words safely
      const wrapWords = (node: ChildNode) => {
        if (node.nodeType === 3) {
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

      // Pillars entrance
      tl.from(".pillar", {
        opacity: 0,
        y: 60,
        scaleY: 0.85,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.06,
      })
      .fromTo(
        ".pillars-row",
        { scaleX: 1.06 },
        { scaleX: 1, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      )
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

      // SHOOTING STAR SYSTEM

      const createStar = () => {
        const rect = el.getBoundingClientRect()

        const star = document.createElement("div")
        star.style.position = "absolute"
        star.style.width = "180px"
        star.style.height = "2px"
        star.style.background =
          "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,215,100,0.8) 40%, rgba(255,215,100,0.2) 70%, transparent 100%)"
        star.style.pointerEvents = "none"
        star.style.zIndex = "20"
        star.style.opacity = "0"

        // Random start position
        const startX = Math.random() * rect.width
        const startY = Math.random() * rect.height * 0.6

        // Random end position
        const endX = Math.random() * rect.width
        const endY = Math.random() * rect.height

        star.style.left = `${startX}px`
        star.style.top = `${startY}px`

        el.appendChild(star)

        const angle =
          (Math.atan2(endY - startY, endX - startX) * 180) / Math.PI

        gsap.set(star, { rotate: angle })

        gsap.timeline({
          onComplete: () => {
            star.remove()
          },
        })
          .to(star, {
            opacity: 1,
            duration: 0.1,
          })
          .to(star, {
            x: endX - startX,
            y: endY - startY,
            duration: 1.2,
            ease: "power2.out",
          })
          .to(
            star,
            {
              opacity: 0,
              duration: 0.3,
            },
            "-=0.3"
          )
      }

      // Launch star occasionally
      tl.add(() => {
        starInterval = window.setInterval(() => {
          createStar()
        }, 8000)
      })
    }, containerRef)

    return () => {
      if (starInterval) clearInterval(starInterval)
      ctx.revert()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative bg-[#111111] rounded-lg mt-5 py-[9.2rem] text-white overflow-hidden"
    >
      {/* Background Pillars */}
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
        Your <span> </span> Gateway<span> </span>
        <br className="md:hidden" />
        into<span> </span>
        <br className="max-md:hidden" />
        the<span> </span>
        <br className="md:hidden" />
        Blockchain
      </div>
    </div>
  )
}

export default Gateway