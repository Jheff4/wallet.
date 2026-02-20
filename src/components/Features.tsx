import firstCard from '../assets/first.svg'
import thirdCard from '../assets/third.svg'
import fourthCard from '../assets/fourth.svg'
import fifthCard from '../assets/fifth.svg'
import sixthCard from '../assets/sixth.svg'
import seventhCard from '../assets/seventh.svg'
import sixthBg from '../assets/sixth-bg.svg'
import eighthCard from '../assets/eighth.svg'
import walletIcon from '../assets/razor.png'
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function Features() {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".feature-card")

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=200",
          toggleActions: "play none none reverse",
        },
      })

      tl.from(cards, {
        y: 90,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: {
          each: 0.19,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const height = 440

  const wrapper = 'feature-card group [perspective:1000px]'

  const baseCard = `
    relative
    rounded-lg
    overflow-hidden
    flex
    flex-col
    justify-between
    transition-transform
    duration-500
    group-hover:rotate-x-2
    group-hover:-rotate-y-2
  `

  const mediaWrapper = `
    absolute
    bottom-0
    right-0
    pointer-events-none
    select-none
  `

  return (
    <div ref={sectionRef} className="w-full py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

        {/* 1 — NFTs */}
        <div className={wrapper}>
          <div
            style={{ height }}
            className={`bg-[#9B7BB0] ${baseCard}`}
          >
            <h3 className="text-[2.9rem] leading-[1.1] p-6 pt-6 font-bold tracking-wide text-black">
              Collect, Trade <br />& Show off <br />NFTs
            </h3>

            <img
              src={firstCard}
              className={`${mediaWrapper} w-[18rem] absolute left-1/2 -translate-x-1/2 -bottom-8 xl:-bottom-0`}
            />
          </div>
        </div>

        {/* 2 — Connect Dapps */}
        <div className={wrapper}>
          <div
            style={{ height }}
            className={`bg-[linear-gradient(180deg,#FF7827_0%,#D05A13_100%)] ${baseCard} p-6 max-md:p-4`}
          >
            <h3 className="text-[2.9rem] leading-[1.1] font-bold tracking-wide text-black text-end mt-8 mr-2">
              Connect to <br /> Multiple <br /> Dapps
            </h3>

            {/* STACKED WALLET CARDS */}
            <div className="absolute top-[17.5rem] left-2 w-[70%] h-[90px]">

              {/* CARD 5 */}
              <div
                className="absolute inset-0 rounded-[22px]"
                style={{
                  background: 'rgba(255,152,91,0.4)',
                  transform: 'translate(75px,50px)',
                }}
              />

              {/* CARD 4 */}
              <div
                className="absolute inset-0 rounded-[22px]"
                style={{
                  background: '#FF985B',
                  transform: 'translate(55px,27px)',
                }}
              />

              {/* CARD 3 */}
              <div
                className="absolute inset-0 rounded-[22px]"
                style={{
                  background: '#FFC4A0',
                  transform: 'translate(35px,4px)',
                }}
              />

              {/* CARD 2 */}
              <div
                className="absolute inset-0 rounded-[22px]"
                style={{
                  background: '#FFDFCB',
                  transform: 'translate(14px,-24px)',
                }}
              />

              {/* CARD 1 — MAIN */}
              <div
                className="
                  absolute inset-0
                  bg-white
                  rounded-[22px]
                  flex items-center gap-4 max-xl:gap-2
                  px-5
                  max-md:px-4
                "
                style={{
                  transform: 'translate(-3px,-50px)',
                }}
              >
                <img src={walletIcon} alt="Wallet" className="w-12 h-12" />

                <span
                  className="
                    text-[1.3rem]
                    font-bold
                    text-[#2B2533]
                    leading-[1.1]
                  "
                >
                  Connect wallet
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* 3 — Secured Assets */}
        <div className={wrapper}>
          <div
            style={{ height }}
            className={`bg-[#331642] ${baseCard} p-6 max-md:p-4`}
          >
            <h3 className="text-[3.8rem] leading-[1.1] font-bold tracking-wide text-white mt-16 z-20">
              All your <br /> assets <br className='max-md:hidden'/> are <br className="max-lg:hidden max-md:block"/> secured
            </h3>

            <img
              src={thirdCard}
              className={`${mediaWrapper} w-[18rem] lg:w-[70%] bottom-16 right-3`}
            />
          </div>
        </div>

        {/* 4 — Transactions */}
        <div className={wrapper}>
          <div
            style={{ height }}
            className={`bg-[#070723] ${baseCard} p-[0.7rem] pt-4`}
          >
            <h3 className="text-[2.7rem] xs:text-[2.8rem] sm:text-[3rem] md:text-[3.2rem] xl:text-[3.5rem] leading-none font-bold tracking-wide text-white whitespace-nowrap">
              10M+ <br className="xs:hidden sm:block"/> Transactions <br /> since March, <br /> 2025
            </h3>

            <img
              src={fourthCard}
              className={`${mediaWrapper} w-full bottom-0 xs:-bottom-16 sm:-bottom-0 md:-bottom-14 lg:-bottom-8 xl:-bottom-0`}
            />
          </div>
        </div>

        {/* 5 — Users */}
        <div className={wrapper}>
          <div
            style={{ height }}
            className={`bg-[#FFC000] ${baseCard} overflow-hidden px-3 py-3 2xs:px-6 xl:py-6`}
          >
            <div className="relative z-10">
              <h3
                className="
                  absolute
                  inset-0
                  text-[3.2rem]
                  xl:text-[3.4rem]
                  leading-[1]
                  font-bold
                  tracking-wide
                  pointer-events-none
                  select-none
                  xl:whitespace-nowrap
                "
                style={{
                  transform: 'translateY(13px)',
                  color: '#FFC000',

                  textShadow: `
                    /* cardinal */
                    1px  0   0 #000000,
                    -1px  0   0 #000000,
                    0    1px 0 #000000,
                    0   -1px 0 #000000,

                    /* diagonals (fills gaps) */
                    1px  1px 0 #000000,
                    -1px -1px 0 #000000,
                    1px -1px 0 #000000,
                    -1px  1px 0 #000000
                  `,
                }}
              >
                200k+<br /> users world<br /> wide
              </h3>

              {/* MAIN TEXT */}
              <h3
                className="
                  relative
                  text-[3.2rem]
                  xl:text-[3.4rem]
                  leading-[1]
                  font-bold
                  tracking-wide
                  text-white
                  xl:whitespace-nowrap
                "
                style={{
                  textShadow: '0px 8px 0px #000000',
                }}
              >
                200k+<br /> users world<br /> wide
              </h3>
            </div>

            <h3
              className="
                text-[3.2rem]
                xl:text-[3.4rem]
                leading-[1]
                font-bold
                tracking-wide
                translate-y-11
                xl:translate-y-3.5
                xl:whitespace-nowrap
              "
              style={{
                transform: 'translateY(13px)',
                color: '#FFC000',

                textShadow: `
                  /* cardinal */
                  1px  0   0 #000000,
                  -1px  0   0 #000000,
                  0    1px 0 #000000,
                  0   -1px 0 #000000,

                  /* diagonals (fills gaps) */
                  1px  1px 0 #000000,
                  -1px -1px 0 #000000,
                  1px -1px 0 #000000,
                  -1px  1px 0 #000000
                `,
              }}
            >
              200k+<br /> users world<br /> wide
              <br />
              200k+<br /> users world
            </h3>

            <img
              src={fifthCard}
              className="
                absolute
                left-1/2 
                -translate-x-1/2
                bottom-0
                right-[-3px]
                xs:right-0
                w-[98%]
                2xs:w-[90%]
                xs:w-[68%]
                sm:w-[98%]
                md:w-[80%]
                lg:w-[98%]
                align-items-center
                pointer-events-none
                select-none
              "
            />
          </div>
        </div>

        {/* 6 — Onboarding */}
        <div className={wrapper}>
          <div
            style={{ height }}
            className={`${baseCard} px-3 pt-6 xs:pt-4 xs:px-6 lg:px-6 lg:pt-6`}
          >
            {/* Background waves */}
            <img
              src={sixthBg}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <h3 className="text-[3.2rem] leading-[1] font-bold tracking-wide text-white relative z-10 pt-6">
              Seamless <br className="xs:hidden sm:block" /> and Secure <br /> onboarding
            </h3>

            <img
              src={sixthCard}
              className={`${mediaWrapper} w-[62%] xs:w-[58%] absolute left-1/2 -translate-x-1/2`}
            />
          </div>
        </div>

        {/* 7 — Swap */}
        <div className={wrapper}>
          <div
            style={{ height }}
            className={`bg-[#FFFFFF] ${baseCard} px-6 pt-6 xs:pt-4 xs:px-12 sm:px-6 lg:pt-6`}
          >
            <h3 className="text-[3.8rem] leading-[1.1] font-bold tracking-wide mt-14 z-20 text-[#331642]">
              Swap <br className="lg:hidden" /> tokens <br /> in <br /> wallet
            </h3>

            <img
              src={seventhCard}
              className={`${mediaWrapper} w-full h-full xs:w-[90%] xs:h-[120%] lg:w-full`}
            />
          </div>
        </div>

        {/* 8 — Mobile DeFi */}
        <div className={wrapper}>
          <div
            style={{ height }}
            className={`bg-[#9B7BB0] ${baseCard} px-2 pt-10 2xs:pt-8 xs:pt-4 xs:px-12 sm:px-4 sm:pt-7 lg:pt-8`}
          >
            <h3 className="text-[2.65rem] xl:text-[2.8rem] leading-[1] text-center font-bold tracking-wide text-black">
              Decentralised <br /> finance on <br /> your mobile
            </h3>

            <img
              src={eighthCard}
              className={`${mediaWrapper} w-[40%] 2xs:w-[37%] xs:w-[28%] sm:w-[39%] md:w-[35%] lg:w-[39%] absolute left-1/2 -translate-x-1/2`}
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Features
