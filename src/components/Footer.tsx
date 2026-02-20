import x from '../assets/x.svg'
import discord from '../assets/discord.svg'
import glare from '../assets/glare.svg'
import coins from '../assets/coins.svg'
import firsthand from '../assets/first-hand.svg'
import secondhand from '../assets/second-hand.svg'
import thirdhand from '../assets/third-hand.svg'
import fourthhand from '../assets/fourth-hand.svg'
import fifthhand from '../assets/fifth-hand.svg'
import sixthhand from '../assets/sixth-hand.svg'
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function Footer() {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=80",
          toggleActions: "play none none reverse",
        }
      })

      // INITIAL STATES
      gsap.set(sectionRef.current, {
        scale: 0.8,
        transformOrigin: "center bottom"
      })

      gsap.set(".footer-headline", { opacity: 0, y: 60 })
      gsap.set(".footer-subtext", { opacity: 0, y: 40 })
      gsap.set(".footer-btn-x", { opacity: 0, y: 40 })
      gsap.set(".footer-btn-discord", { opacity: 0, y: 30 })

      // Hands scale from bottom
      gsap.set(".hand-1, .hand-2, .hand-3, .hand-4, .hand-6", {
        scale: 0.7,
        opacity: 0,
        transformOrigin: "bottom center"
      })

      gsap.set(".hand-5", {
        scale: 0.4,
        opacity: 0,
        transformOrigin: "bottom center"
      })

      gsap.set(".glare", {
        rotate: -8,
        transformOrigin: "bottom center"
      })

      tl

      // SECTION SCALE IN
      .to(sectionRef.current, {
        scale: 1,
        duration: 1.2,
        ease: "power4.out"
      })

      // GLARE SWEEP RIGHT
      .to(".glare", {
        rotate: 12,
        duration: 2.2,
        ease: "sine.inOut"
      }, "-=1")

      // HEADLINE + HAND 1
      .to(".footer-headline", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=1.6")

      .to(".hand-1", {
        scale: 1.08,
        opacity: 1,
        duration: 0.35,
        ease: "power4.out"
      }, "<")

      .to(".hand-1", {
        scale: 1,
        duration: 0.35,
        ease: "power2.out"
      })

      // SUBTEXT + HAND 2
      .to(".footer-subtext", {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out"
      }, "-=1.2")

      .to(".hand-2", {
        scale: 1.05,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out"
      }, "<")

      .to(".hand-2", {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      })

      // BUTTON X + HAND 3
      .to(".footer-btn-x", {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out"
      }, "-=1")

      .to(".hand-3", {
        scale: 1.1,
        opacity: 1,
        duration: 0.35,
        ease: "power4.out"
      }, "<")

      .to(".hand-3", {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      })

      // BUTTON DISCORD + HAND 4 + HAND 5
      .to(".footer-btn-discord", {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out"
      })

      .to(".hand-4", {
        scale: 1.05,
        opacity: 1,
        duration: 0.4,
        ease: "power3.out"
      }, "<")

      .to(".hand-4", {
        scale: 1,
        duration: 0.25,
        ease: "power2.out"
      })

      .to(".hand-5", {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "back.out(2)"
      }, "<")

      // HAND 6
      .to(".hand-6", {
        scale: 1.05,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      })

      .to(".hand-6", {
        scale: 1,
        duration: 0.25,
        ease: "power2.out"
      })

      // GLARE SWEEP BACK LEFT
      .to(".glare", {
        rotate: -5,
        duration: 1.2,
        ease: "sine.inOut"
      })

      // FINAL SMALL RIGHT SETTLE
      .to(".glare", {
        rotate: 4,
        duration: 0.8,
        ease: "sine.out"
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={sectionRef}>
      <div
        style={{
          background: `
            url(${coins}) 31% 100% / 80% no-repeat,
            #ED6D20
          `,
        }}
        className="w-full overflow-hidden rounded-lg pb-8 relative"
      >

        {/* GLARE (now animatable) */}
        <img
          src={glare}
          alt=""
          className="glare absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] pointer-events-none select-none"
        />

        {/* LEFT HANDS */}
        <img src={secondhand} alt="" className="hand-2 hidden xl:block absolute bottom-0 left-[6.5rem] w-[74px] pointer-events-none select-none" />
        <img src={fifthhand} alt="" className="hand-5 hidden xl:block absolute bottom-0 left-[5.5rem] w-[340px] pointer-events-none select-none" />
        <img src={thirdhand} alt="" className="hand-3 hidden xl:block absolute bottom-0 left-[7.5rem] w-[530px] pointer-events-none select-none" />

        {/* RIGHT HANDS */}
        <img src={firsthand} alt="" className="hand-1 hidden xl:block absolute bottom-0 right-[6rem] w-[470px] pointer-events-none select-none" />
        <img src={sixthhand} alt="" className="hand-6 hidden xl:block absolute bottom-0 right-[13rem] w-[72px] pointer-events-none select-none" />
        <img src={fourthhand} alt="" className="hand-4 hidden xl:block absolute bottom-0 right-[6.5rem] w-[77px] pointer-events-none select-none" />

        {/* CONTENT */}
        <div className="w-full px-6">
          <div className="footer-headline flex mt-16 gap-5 items-center flex-col">

            <div className="text-[2.8rem] md:text-[3.8rem] lg:text-[4.5rem] leading-[1] tracking-wider font-bold text-center text-black flex flex-col gap-4">
              Join the Sharp <br /> Frenzy

              <span className="footer-subtext text-lg md:text-xl lg:text-2xl tracking-normal leading-8 md:leading-10 font-medium text-black">
                Join the community of the Razor Sharp Defi
                <br />
                enthusiasts for all updates from the Razor Team
              </span>
            </div>

            <div className="flex flex-col md:flex-row text-base gap-4 md:gap-6 items-center font-medium text-white mb-10 w-full md:w-auto">

              <a href="#" className="footer-btn-x flex py-[1rem] px-8 gap-5 rounded-2xl items-center bg-[#180523] w-full md:w-auto justify-center">
                <div>Follow us on X</div>
                <img className="w-8 h-8" src={x} alt="x" />
              </a>

              <a href="#" className="footer-btn-discord flex py-[1rem] px-8 gap-5 rounded-2xl items-center bg-[#5A2873] w-full md:w-auto justify-center">
                <div>Join our Discord</div>
                <img className="w-8 h-8" src={discord} alt="discord" />
              </a>

            </div>
          </div>
        </div>
      </div>

      <div className="text-center justify-center text-white text-medium py-[2.1rem]">
        © 2025 RazorDAO. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
