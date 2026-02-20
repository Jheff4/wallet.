import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import leftSpiral from '../assets/leftSpiral.svg'
import rightSpiral from '../assets/rightSpiral.svg'
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

    const tl = gsap.timeline()
    const words = contentRef.current.querySelectorAll(".hero-word")

    // Gradient
    tl.fromTo(containerRef.current,
      { xPercent: -30, opacity: 1 },
      { 
        xPercent: 0,
        duration: 0.9,
        ease: "power3.out"
      }
    )

    // Spirals
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

  const pulseTween = useRef<gsap.core.Tween | null>(null)

  const handleMouseEnter = () => {
    if (!buttonRef.current) return

    // Base hover scale + glow
    gsap.to(buttonRef.current, {
      scale: 1.06,
      boxShadow: "0 0 25px rgba(255,255,255,0.8), 0 0 60px rgba(255,255,255,0.4)",
      duration: 0.25,
      ease: "power3.out"
    })

    // Subtle breathing pulse
    pulseTween.current = gsap.to(buttonRef.current, {
      scale: 1.09,
      duration: 1.2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    })
  }

  const handleMouseLeave = () => {
    if (!buttonRef.current) return

    // Kill pulse loop
    pulseTween.current?.kill()

    // Return to normal
    gsap.to(buttonRef.current, {
      scale: 1,
      boxShadow: "0 0 0px rgba(255,255,255,0)",
      duration: 0.25,
      ease: "power3.out"
    })
  }

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
              alt=""
              className="h-full w-auto object-cover -mr-48 max-sm:-mr-0" 
              style={{ clipPath: 'inset(100% 0 0 0)' }} 
            />
            
            {/* Right Spiral */}
            <img 
              ref={rightSpiralRef}
              src={rightSpiral} 
              alt=""
              className="h-full w-auto object-cover -ml-48 " 
              style={{ clipPath: 'inset(0 0 100% 0)' }} 
            />
        </div>

        {/* MAIN CONTENT */}
        <div className="text-white w-full relative z-10">
          <div ref={contentRef} className="flex mt-20 gap-10 items-center flex-col">
            
            <div
              className="
                text-[5.5rem] max-sm:text-[4rem] max-[390px]:text-[2rem] leading-[1.1] tracking-wide font-black text-center
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

            <div className="flex flex-wrap text-base gap-6 items-center font-bold text-darkText mb-10">
              <a
                ref={buttonRef}
                href="https://chromewebstore.google.com/detail/razor-wallet/fdcnegogpncmfejlfnffnofpngdiejii"
                className="group relative flex py-[0.8rem] px-8 max-2xs:px-4 gap-2 rounded-2xl items-center bg-white cursor-pointer overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
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