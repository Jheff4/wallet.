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
    let starInterval = 0
    // Stars only begin once the entrance timeline has played through.
    let starsUnlocked = false
    let onVisibility: (() => void) | null = null

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

      // The pillars/heading .from() tweens below animate FROM a hidden state
      // TO whatever the elements already render as — so skipping them leaves
      // everything at its natural, fully-visible resting state; nothing needs
      // forcing. The shooting-star shower is skipped outright: it's continuous
      // decorative motion with no fixed end, exactly what this preference
      // asks sites to drop.
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return
      }

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
      //
      // Meteors read as a bright point dragging a tapered streak, not as a
      // star polygon. Everything below is built from gradients rather than
      // filters so a moving star doesn't force a filter repaint each frame.

      const rand = gsap.utils.random

      const createStar = () => {
        const rect = el.getBoundingClientRect()

        // A shower radiates along a shared axis; jitter keeps each pass from
        // looking like the same sprite replayed.
        const angle = rand(20, 38)
        const rad = (angle * Math.PI) / 180
        const distance = rand(360, 640)
        const scale = rand(0.55, 1.15)
        const duration = rand(0.75, 1.2)
        const tailLength = rand(90, 190) * scale

        // Start off the left/top edges too, so stars enter frame mid-flight
        // instead of all being born inside it.
        const startX = rand(-120, rect.width * 0.8)
        const startY = rand(-60, rect.height * 0.5)

        const wrapper = document.createElement("div")
        wrapper.style.position = "absolute"
        wrapper.style.pointerEvents = "none"
        wrapper.style.zIndex = "20"
        wrapper.style.left = `${startX}px`
        wrapper.style.top = `${startY}px`
        wrapper.style.willChange = "transform, opacity"

        // TAIL — triangle tapering to a point behind the head, brightest
        // where it meets the head.
        const tail = document.createElement("div")
        tail.style.position = "absolute"
        tail.style.width = `${tailLength}px`
        tail.style.height = `${3 * scale}px`
        tail.style.left = `${-tailLength}px`
        tail.style.top = `${-1.5 * scale}px`
        tail.style.background =
          "linear-gradient(90deg," +
          " rgba(255,214,102,0) 0%," +
          " rgba(255,214,102,0.28) 55%," +
          " rgba(255,241,194,0.95) 100%)"
        tail.style.clipPath = "polygon(0 50%, 100% 0, 100% 100%)"
        tail.style.transformOrigin = "100% 50%"

        // HEAD — white core fading out through warm gold. One radial
        // gradient gives core + halo in a single paint.
        const head = document.createElement("div")
        const headSize = 16 * scale
        head.style.position = "absolute"
        head.style.width = `${headSize}px`
        head.style.height = `${headSize}px`
        head.style.left = `${-headSize / 2}px`
        head.style.top = `${-headSize / 2}px`
        head.style.borderRadius = "50%"
        head.style.background =
          "radial-gradient(circle," +
          " #ffffff 0%," +
          " rgba(255,245,214,0.95) 16%," +
          " rgba(255,214,102,0.5) 38%," +
          " rgba(255,214,102,0) 70%)"

        wrapper.appendChild(tail)
        wrapper.appendChild(head)
        el.appendChild(wrapper)

        gsap.set(wrapper, { rotation: angle, opacity: 0, force3D: true })
        gsap.set(tail, { scaleX: 0.15 })

        gsap
          .timeline({
            onComplete: () => wrapper.remove(),
          })
          // Linear travel — a meteor holds its speed, it doesn't ease out.
          .to(
            wrapper,
            {
              x: Math.cos(rad) * distance,
              y: Math.sin(rad) * distance,
              duration,
              ease: "none",
            },
            0
          )
          .to(wrapper, { opacity: 1, duration: duration * 0.15 }, 0)
          // Trail draws out behind the head, then burns back down as it dims.
          .to(
            tail,
            { scaleX: 1, duration: duration * 0.45, ease: "power2.out" },
            0
          )
          .to(
            tail,
            { scaleX: 0.45, duration: duration * 0.4, ease: "power1.in" },
            duration * 0.6
          )
          .to(
            wrapper,
            { opacity: 0, duration: duration * 0.35, ease: "power2.in" },
            duration * 0.65
          )
      }

      // Only spawn stars while the section is actually on screen and the
      // tab is visible. A hidden tab pauses GSAP's ticker, so each star's
      // onComplete would never fire and the wrappers would pile up in the
      // DOM forever.
      const setStarsRunning = (on: boolean) => {
        if (on) {
          if (starInterval) return
          starInterval = window.setInterval(createStar, 2800)
        } else {
          if (!starInterval) return
          clearInterval(starInterval)
          starInterval = 0
        }
      }

      const shouldRun = () =>
        starsUnlocked && !document.hidden && ScrollTrigger.isInViewport(el)

      ScrollTrigger.create({
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        onToggle: () => setStarsRunning(shouldRun()),
      })

      onVisibility = () => setStarsRunning(shouldRun())
      document.addEventListener("visibilitychange", onVisibility)

      tl.add(() => {
        starsUnlocked = true
        setStarsRunning(shouldRun())
      })
    }, containerRef)

    return () => {
      if (starInterval) clearInterval(starInterval)
      if (onVisibility) document.removeEventListener("visibilitychange", onVisibility)
      ctx.revert()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative bg-[#111111] rounded-lg mt-5 py-[9.2rem] text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {/* The row is deliberately wider than a phone (12 x 80px pillars that
            can't shrink, plus gaps — never below ~1136px) so it crops in from
            both sides like a background image. Centring it with
            justify-content: center relied on the browser treating that
            overflow as "unsafe" and spilling it both ways; Safari on iOS
            aligns an overflowing flex item to the start instead, so the crop
            landed on pillars 0-3 (80/68/56/44, a descending staircase)
            rather than the symmetric 32/20/20/32 middle. Blink centres it, so
            this only ever showed on hardware.

            left-1/2 + -translate-x-1/2 centres identically in both engines.
            It sits on this wrapper rather than on .pillars-row because GSAP
            animates that element's scaleX and would overwrite the centring
            transform. Same approach as the footer hands stage. */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[600px]"
          style={{ width: "max(100%, calc(12 * 80px + 11 * 16px))" }}
        >
          <div className="pillars-row h-full w-full flex items-end gap-4">
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
      </div>

      <div
        className="
          gateway-heading
          relative z-10
          -translate-y-1/4
          text-[5.5rem]
          leading-[1.4]
          tracking-wide
          font-extrabold
          max-sm:font-bold
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