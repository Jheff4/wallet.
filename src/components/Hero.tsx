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
    const contentElements = contentRef.current.children
    
    // Animation Settings
    const unravelSpeed = 1.2 
    const unravelEase = 'power3.out' 

    // 1. Base Background Reveal
    tl.fromTo(containerRef.current, 
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: 'power2.out' }
    )

    // 2. Left Spiral (Unravels Bottom -> Top)
    // Starts 0.8s before background finishes (Feels immediate)
    tl.fromTo(leftSpiralRef.current,
      { 
        clipPath: 'inset(100% 0 0 0)', 
        y: 50 
      }, 
      { 
        clipPath: 'inset(0% 0 0 0)',   
        y: 0,
        duration: unravelSpeed, 
        ease: unravelEase 
      },
      "-=0.8" 
    )

    // 3. Right Spiral (Unravels Top -> Bottom)
    // Starts when Left is halfway done
    tl.fromTo(rightSpiralRef.current,
      { 
        clipPath: 'inset(0 0 100% 0)', 
        y: -50 
      }, 
      { 
        clipPath: 'inset(0 0 0% 0)', 
        y: 0,
        duration: unravelSpeed, 
        ease: unravelEase 
      },
      `-=${unravelSpeed / 1.8}` 
    )

    // 4. Content Entry
    tl.from(contentElements, {
      y: 30,
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'back.out(2)', 
      clearProps: 'all' 
    }, "-=0.5") 

  }, { scope: containerRef })

  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, { scale: 1.05, duration: 0.2 })
  }
  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, { scale: 1, duration: 0.2 })
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
        {/* --- SPIRAL LAYERS --- */}
        <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none">
            
            {/* Left Spiral */}
            <img 
              ref={leftSpiralRef}
              src={leftSpiral} 
              alt="" 
              // Increased negative margin to -mr-48 for more overlap
              className="h-full w-auto object-cover -mr-48" 
              style={{ clipPath: 'inset(100% 0 0 0)' }} 
            />
            
            {/* Right Spiral */}
            <img 
              ref={rightSpiralRef}
              src={rightSpiral} 
              alt="" 
              // Increased negative margin to -ml-48 for more overlap
              className="h-full w-auto object-cover -ml-48" 
              style={{ clipPath: 'inset(0 0 100% 0)' }} 
            />
        </div>

        {/* --- MAIN CONTENT --- */}
        <div className="text-white w-full relative z-10">
          <div ref={contentRef} className="flex mt-20 gap-10 items-center flex-col">
            
            <div
              className="
                text-[5.5rem] leading-[1.1] tracking-wide font-black text-center
                drop-shadow-[0px_0px_12px_rgba(89,28,129,0.35)]
              "
              style={{ textShadow: `0 0 0.5px #fff, 0 0 1px #fff` }}
            >
              Your daily Web3 <br />Companion
            </div>

            <div className="flex flex-wrap text-base gap-6 items-center font-bold text-darkText mb-10">
              <a
                ref={buttonRef}
                href="https://chromewebstore.google.com/detail/razor-wallet/fdcnegogpncmfejlfnffnofpngdiejii"
                className="group relative flex py-[0.8rem] px-8 gap-2 rounded-2xl items-center bg-white cursor-pointer overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div 
                  className="
                    absolute top-0 left-0 w-full h-full 
                    bg-gradient-to-r from-transparent via-white/60 to-transparent 
                    -translate-x-[100%] skew-x-12 
                    transition-transform duration-700 ease-in-out
                    group-hover:translate-x-[200%] pointer-events-none
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