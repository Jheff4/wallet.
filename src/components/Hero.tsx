import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
// Rendered straight from the original vector art at each rung, not
// downscaled from one raster, so every size is sharp. The unsuffixed file is
// the 1600w rung and doubles as the no-srcset fallback.
import leftSpiral800 from '../assets/leftSpiral-800.webp'
import leftSpiral1200 from '../assets/leftSpiral-1200.webp'
import leftSpiral from '../assets/leftSpiral.webp'
import leftSpiral2000 from '../assets/leftSpiral-2000.webp'
import leftSpiral2900 from '../assets/leftSpiral-2900.webp'
import rightSpiral800 from '../assets/rightSpiral-800.webp'
import rightSpiral1200 from '../assets/rightSpiral-1200.webp'
import rightSpiral from '../assets/rightSpiral.webp'
import rightSpiral2000 from '../assets/rightSpiral-2000.webp'
import rightSpiral2900 from '../assets/rightSpiral-2900.webp'
import chromeLogo from '../assets/chrome.png'

gsap.registerPlugin(useGSAP)

function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null) 
  const buttonRef = useRef<HTMLAnchorElement>(null)
  
  const leftSpiralRef = useRef<HTMLImageElement>(null)
  const rightSpiralRef = useRef<HTMLImageElement>(null)

  useGSAP(() => {
    if (!contentRef.current || !containerRef.current) return

    const words = contentRef.current.querySelectorAll(".hero-word")

    // The container starts at opacity-0 via a static class (so there's no
    // flash of unstyled content before this effect runs); the entrance
    // timeline is what normally reveals it. Under reduced motion we skip the
    // timeline, so this jumps everything straight to its resting state.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(containerRef.current, { opacity: 1, xPercent: 0 })
      gsap.set([leftSpiralRef.current, rightSpiralRef.current], {
        clipPath: "inset(0% 0 0 0)",
        y: 0,
      })
      gsap.set(words, { x: 0, y: 0, scale: 1, opacity: 1 })
      return
    }

    const tl = gsap.timeline()

    // Gradient
    tl.fromTo(containerRef.current,
      { xPercent: -30, opacity: 1 },
      { 
        xPercent: 0,
        duration: 0.9,
        ease: "power3.out"
      }
    )

    // Spirals — clip-path is confirmed uninvolved in the WebKit seam: tested
    // both with and without it at the same 192px overlap, seam present
    // either way; only changing the overlap amount (see margin classes
    // below) changed the outcome. Restored to its original form.
    tl.fromTo(leftSpiralRef.current,
      { clipPath: 'inset(100% 0 0 0)', y: 40 },
      {
        clipPath: 'inset(0% 0 0 0)',
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      },
      "-=0.5"
    )

    tl.fromTo(rightSpiralRef.current,
      { clipPath: 'inset(0 0 100% 0)', y: -40 },
      {
        clipPath: 'inset(0 0 0% 0)',
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      },
      "-=0.4"
    )

    // WORD 1
    tl.fromTo(words[0],
      { x: -60, scale: 1.2, opacity: 0 },
      { x: 0, scale: 1, opacity: 1, duration: 0.35, ease: "power3.out" },
      "-=0.3"
    )

    // WORD 2
    tl.fromTo(words[1],
      { y: 20, scale: 1.15, opacity: 0 },
      { y: 0, scale: 1, opacity: 1, duration: 0.3, ease: "power3.out" },
      "-=0.15"
    )

    // WORD 3
    tl.fromTo(words[2],
      { x: 60, scale: 1.2, opacity: 0 },
      { x: 0, scale: 1, opacity: 1, duration: 0.35, ease: "power3.out" },
      "-=0.15"
    )

    // WORD 4
    tl.fromTo(words[3],
      { y: 25, scale: 1.15, opacity: 0 },
      { y: 0, scale: 1, opacity: 1, duration: 0.3, ease: "power3.out" },
      "-=0.1"
    )

  }, { scope: containerRef })

  const hoverTl = useRef<gsap.core.Timeline | null>(null)

  // Tapping on a touch device fires mouseenter, but mouseleave often never
  // follows — which would strand the button at 1.05 with the infinite pulse
  // still running, on the one device where you can't hover out of it. Only arm
  // the hover where a real pointer exists. Checked per call rather than once,
  // so plugging in a mouse or switching input mode is picked up.
  const canHover = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches

  const prefersReducedMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  // The pulse originally ran as a second tween fired at the same instant as
  // the hover tween — both wrote `scale` every frame with different eases, so
  // they fought, and the yoyo swung all the way back to 1 (unhovered size)
  // rather than breathing around the hover size. Chaining them on one
  // timeline means only ever one of them owns `scale` in a given frame.
  const handleMouseEnter = () => {
    if (!buttonRef.current || !canHover()) return

    hoverTl.current?.kill()
    hoverTl.current = gsap.timeline().to(buttonRef.current, {
      scale: 1.05,
      // Set once and held. Re-interpolating a 60px blur every frame for as
      // long as the cursor sits there is the one genuinely expensive thing
      // this button could do, so the breathing below is scale-only.
      boxShadow: "0 0 25px rgba(255,255,255,0.8), 0 0 60px rgba(255,255,255,0.4)",
      duration: 0.28,
      ease: "power3.out",
      overwrite: "auto"
    })

    // The breathing loop runs forever for as long as the button is hovered —
    // exactly the kind of continuous decorative motion prefers-reduced-motion
    // asks sites to drop. The one-off scale-up above stays either way.
    if (!prefersReducedMotion()) {
      hoverTl.current.to(buttonRef.current, {
        scale: 1.08,
        duration: 1.1,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      })
    }
  }

  const handleMouseLeave = () => {
    if (!buttonRef.current) return

    hoverTl.current?.kill()
    hoverTl.current = null

    gsap.to(buttonRef.current, {
      scale: 1,
      boxShadow: "0 0 0px rgba(255,255,255,0)",
      duration: 0.35,
      ease: "power3.out",
      overwrite: "auto"
    })
  }

  // The timeline is created on hover, so it isn't collected by useGSAP's
  // scope — unmounting mid-hover would otherwise leave it ticking.
  useGSAP(() => () => {
    hoverTl.current?.kill()
  })

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="w-full overflow-hidden rounded-lg pb-14 relative opacity-0"
        style={{
          background: `linear-gradient(180deg, #9B7BB0 0%, #581A81 100%)`
        }}
      >
        {/* SPIRAL LAYERS */}
        <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none">
            
            {/* Left Spiral */}
            <img
              ref={leftSpiralRef}
              src={leftSpiral}
              srcSet={`${leftSpiral800} 800w, ${leftSpiral1200} 1200w, ${leftSpiral} 1600w, ${leftSpiral2000} 2000w, ${leftSpiral2900} 2900w`}
              // Below sm the rendered width is a fixed multiple of the
              // viewport (w-160% of a card that is itself viewport-width), so
              // it tracks at a measured ~1.52vw across 320-639 — 153vw sits
              // just above that everywhere rather than approximating it per
              // band. Above sm the width comes off the card's height instead,
              // peaking at 682px at the breakpoint and easing to 566px.
              sizes="(max-width: 639px) 153vw, 682px"
              alt=""
              // max-w-none fixes a hard edge that sliced straight through the
              // artwork on mobile. Tailwind's preflight sets
              // img { max-width: 100% }, which clamped each spiral to its
              // container's width (388px at a 412px viewport) when its own
              // height called for 587px. object-cover was then handed a box
              // whose shape didn't match the image's, so it scaled the art to
              // fill and cropped ~99px off each side — and those crop edges
              // landed inside the visible card, cutting a swirl mid-shape.
              // Desktop was wide enough never to reach the clamp, which is
              // why it only ever showed on mobile. shrink-0 then stops flex
              // from squeezing the image straight back once the natural width
              // exceeds the line.
              //
              // The max-sm pair sizes the composition proportionally rather
              // than by fixed px. Below sm the card's height — and so each
              // image's width, which derives from it — jumps when the heading
              // drops to 2rem at 390px, so any fixed margin that composes
              // well in one band collapses the two spirals on top of each
              // other in the other. Width and margins both given in % resolve
              // against the card, so the composition holds at every width.
              //
              // 160%/-55% puts the swirl centres at 25%/75%, matching the
              // original mobile placement. The box width is what bounds that
              // spread: an image edge must stay outside the card or its crop
              // shows, which caps the centres at (100 - B/2)%..(B/2)% — so
              // 140% could only reach 30/70 and read as too close together.
              // 160% allows 20..80 and leaves headroom around 25/75.
              className="h-full w-auto object-cover max-w-none shrink-0 -mr-48 max-sm:w-[160%] max-sm:-mr-[55%]"
              style={{ clipPath: 'inset(100% 0 0 0)' }}
            />

            {/* Right Spiral */}
            <img
              ref={rightSpiralRef}
              src={rightSpiral}
              srcSet={`${rightSpiral800} 800w, ${rightSpiral1200} 1200w, ${rightSpiral} 1600w, ${rightSpiral2000} 2000w, ${rightSpiral2900} 2900w`}
              sizes="(max-width: 639px) 153vw, 682px"
              alt=""
              className="h-full w-auto object-cover max-w-none shrink-0 -ml-48 max-sm:w-[160%] max-sm:-ml-[55%]"
              style={{ clipPath: 'inset(0 0 100% 0)' }}
            />
        </div>

        {/* MAIN CONTENT */}
        <div className="text-white w-full relative z-10">
          <div ref={contentRef} className="flex mt-20 gap-10 items-center flex-col">
            
            <div
              className="
                text-[5.5rem] max-sm:text-[4rem] max-[390px]:text-[2rem] leading-[1.1] tracking-wide font-extrabold max-sm:font-bold text-center
                drop-shadow-[0px_0px_12px_rgba(89,28,129,0.35)]
              "
              style={{ textShadow: `0 0 0.5px #fff, 0 0 1px #fff` }}
            >
              <span className="hero-word inline-block">Your</span>{" "}
              <span className="hero-word inline-block">daily</span>{" "}
              <span className="hero-word inline-block">Web3</span>
              <br />
              <span className="hero-word inline-block">Companion</span>
            </div>

            <div className="flex flex-wrap text-base gap-6 items-center font-medium text-darkText mb-10">
              <a
                ref={buttonRef}
                href="https://chromewebstore.google.com/detail/razor-wallet/fdcnegogpncmfejlfnffnofpngdiejii"
                className="group relative flex py-[0.8rem] px-8 max-2xs:px-4 gap-2 rounded-2xl items-center bg-white cursor-pointer overflow-hidden will-change-transform"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                // Hybrid devices (touch laptops) satisfy (hover: hover), so a
                // tap can still start the pulse without a mouseleave to end it.
                onTouchEnd={handleMouseLeave}
                onTouchCancel={handleMouseLeave}
              >
                <img className="w-9 h-9 relative z-10" src={chromeLogo} alt="extension" />
                <div className="relative z-10">Download for Chrome</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero