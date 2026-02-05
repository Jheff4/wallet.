import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import chromeLogo from '../assets/chrome.png'

gsap.registerPlugin(useGSAP)

function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null) 
  const buttonRef = useRef<HTMLAnchorElement>(null)

  useGSAP(() => {
    if (!contentRef.current || !containerRef.current) return

    const tl = gsap.timeline()
    const contentElements = contentRef.current.children

    // 1. Background: Long, pronounced fade-in from left
    tl.fromTo(containerRef.current, 
      { 
        x: -200,      // Large distance to make the movement obvious
        opacity: 0,   // Starts completely invisible
      },
      { 
        x: 0, 
        opacity: 1, 
        duration: 1.8, // Slow duration allows the eye to register the fade
        ease: 'power3.out' 
      }
    )

    // 2. Text & Button: "Thrown at screen" effect
    tl.from(contentElements, {
      y: 50,             // Comes from below
      scale: 0.3,        // Starts TINY (creates the explosive zoom feel)
      opacity: 0,
      duration: 1,       
      stagger: 0.15,
      // '3' is a high overshoot value = sharp snap/wobble
      ease: 'back.out(3)', 
      clearProps: 'all' 
    }, "-=1.2") // Starts while background is still moving

  }, { scope: containerRef })

  // GSAP Hover Scale (The physical button size)
  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, { scale: 1.05, duration: 0.2 })
  }
  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, { scale: 1, duration: 0.2 })
  }

  return (
    <div className="w-full pb-10">
      <div
        ref={containerRef}
        style={{
          background: `
            url(/heroBg.png),
            linear-gradient(180deg, #9B7BB0 0%, #581A81 100%)
          `,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain, cover',
          backgroundPosition: 'center, center',
          opacity: 0 
        }}
        className="w-full overflow-hidden rounded-lg pb-10"
      >
        <div className="text-white w-full">
          <div ref={contentRef} className="flex mt-20 gap-10 items-center flex-col">
            
            <div
              className="
                text-[5.5rem]
                leading-[1.1]
                tracking-wide
                font-black
                text-center
                drop-shadow-[0px_0px_12px_rgba(89,28,129,0.35)]
              "
              style={{ textShadow: `0 0 0.5px #fff, 0 0 1px #fff` }}
            >
              Your daily Web3
            </div>

            <div
              className="
                text-[5.5rem]
                leading-[1.1]
                tracking-wide
                font-black
                text-center
                drop-shadow-[0px_0px_12px_rgba(89,28,129,0.35)]
              "
              style={{ textShadow: `0 0 0.5px #fff, 0 0 1px #fff` }}
            >
               Companion
            </div>

            <div className="flex flex-wrap text-base gap-6 items-center font-bold text-darkText mb-10">
              {/* Added 'group' and 'relative overflow-hidden' for the shine effect */}
              <a
                ref={buttonRef}
                href="https://chromewebstore.google.com/detail/razor-wallet/fdcnegogpncmfejlfnffnofpngdiejii"
                className="
                  group relative flex py-[0.8rem] px-8 gap-2 rounded-2xl items-center bg-white cursor-pointer overflow-hidden
                "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* The Shine Effect Layer */}
                <div 
                  className="
                    absolute top-0 left-0 w-full h-full 
                    bg-gradient-to-r from-transparent via-white/60 to-transparent 
                    -translate-x-[100%] skew-x-12 
                    transition-transform duration-700 ease-in-out
                    group-hover:translate-x-[200%]
                    pointer-events-none
                  "
                />

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
