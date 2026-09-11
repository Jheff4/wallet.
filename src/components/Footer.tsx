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
          start: "top bottom-=120",
          toggleActions: "play none none reverse",
        }
      })

      // INITIAL STATES
      gsap.set(sectionRef.current, {
        scale: 0.9,
        transformOrigin: "center bottom"
      })

      gsap.set(".footer-headline", { opacity: 0, y: 50 })
      gsap.set(".footer-subtext", { opacity: 0, y: 30 })
      gsap.set(".footer-btn-x", { opacity: 0, y: 30 })
      gsap.set(".footer-btn-discord", { opacity: 0, y: 30 })

      gsap.set(".hand-1, .hand-2, .hand-3, .hand-4, .hand-6", {
        scale: 0.75,
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
        duration: 0.7,
        ease: "power3.out"
      })

      // HEADLINE + HAND 1
      // Absolute 0.4, not "-=1": the glare sweep used to sit between these two
      // and this offset resolved against its end. The glare now runs on its own
      // timeline (below), so the position is pinned to keep the original timing.
      .to(".footer-headline", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out"
      }, 0.4)

      .to(".hand-1", {
        scale: 1.1,
        opacity: 1,
        duration: 0.2,
        ease: "power4.out"
      }, "<")

      .to(".hand-1", {
        scale: 1,
        duration: 0.2,
        ease: "power2.out"
      })

      // SUBTEXT + HAND 2
      .to(".footer-subtext", {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out"
      }, "-=0.4")

      .to(".hand-2", {
        scale: 1.06,
        opacity: 1,
        duration: 0.25,
        ease: "power3.out"
      }, "<")

      .to(".hand-2", {
        scale: 1,
        duration: 0.2,
        ease: "power2.out"
      })

      // X BUTTON + HAND 3
      .to(".footer-btn-x", {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power3.out"
      }, "-=0.3")

      .to(".hand-3", {
        scale: 1.12,
        opacity: 1,
        duration: 0.2,
        ease: "power4.out"
      }, "<")

      .to(".hand-3", {
        scale: 1,
        duration: 0.18,
        ease: "power2.out"
      })

      // DISCORD + HAND 4 + HAND 5
      .to(".footer-btn-discord", {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out"
      }, "-=0.3")

      .to(".hand-4", {
        scale: 1.08,
        opacity: 1,
        duration: 0.18,
        ease: "power3.out"
      }, "<")

      .to(".hand-4", {
        scale: 1,
        duration: 0.18,
        ease: "power2.out"
      })

      .to(".hand-5", {
        scale: 1,
        opacity: 1,
        duration: 0.2,
        ease: "back.out(2)"
      }, "<")

      // HAND 6
      .to(".hand-6", {
        scale: 1.06,
        opacity: 1,
        duration: 0.25,
        ease: "power2.out"
      }, "-=0.15")

      .to(".hand-6", {
        scale: 1,
        duration: 0.18,
        ease: "power2.out"
      })

      // GLARE — its own timeline, nested into the main one at 0.2 so it swings
      // continuously while the hands and buttons enter. Chained inline it would
      // sweep once, then sit frozen until every other tween had finished.
      //
      // A damped pendulum: each overshoot is about half the last and each pass
      // is quicker, so the energy visibly drains, and it lands square at 0 —
      // no permanent tilt at rest.
      const glareTl = gsap
        .timeline()
        .to(".glare", { rotate: 12, duration: 1.2, ease: "sine.inOut" })
        .to(".glare", { rotate: -6, duration: 0.55, ease: "sine.inOut" })
        .to(".glare", { rotate: 3.5, duration: 0.45, ease: "sine.inOut" })
        .to(".glare", { rotate: -1.5, duration: 0.36, ease: "sine.inOut" })
        .to(".glare", { rotate: 0, duration: 0.28, ease: "sine.out" })

      tl.add(glareTl, 0.2)
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Tapping fires mouseenter but often no mouseleave, which would leave the
  // button parked at y:-4 with no way to reset it on a device that can't
  // hover out. Only arm the lift where a real pointer exists.
  const canHover = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches

  // These buttons are positioned by the entrance timeline, which writes an
  // inline transform — so a Tailwind hover:scale class would be overridden.
  // overwrite:"auto" retires only the conflicting properties, leaving the
  // entrance opacity tween alone if you hover while it's still running.
  const handleBtnEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!canHover()) return

    gsap.to(e.currentTarget, {
      y: -4,
      scale: 1.02,
      duration: 0.28,
      ease: "power3.out",
      overwrite: "auto"
    })
  }

  // Left ungated, and also wired to touchend/touchcancel: whatever armed the
  // lift, this must always be able to put it back.
  const handleBtnLeave = (
    e:
      | React.MouseEvent<HTMLAnchorElement>
      | React.TouchEvent<HTMLAnchorElement>
  ) => {
    gsap.to(e.currentTarget, {
      y: 0,
      scale: 1,
      duration: 0.35,
      ease: "power3.out",
      overwrite: "auto"
    })
  }

  return (
    <footer ref={sectionRef}>
      <div
        className="w-full overflow-hidden rounded-lg pb-8 relative bg-[#ED6D20]"
      >
        <img
          src={glare}
          alt=""
          loading="lazy"
          decoding="async"
          className="glare absolute bottom-0 left-1/2 -translate-x-1/2 w-[300%] max-w-none md:w-[85%] md:max-w-full pointer-events-none select-none"
        />

        <img
          src={coins}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute bottom-0 left-[6.5%] w-[80%] pointer-events-none select-none"
        />

        {/* The hands are one fixed composition, not six independently
            edge-anchored images. This stage never narrows below the desktop
            card width (1262px at the xl breakpoint), stays centred, and is
            cropped by the card's overflow-hidden — so it crops in from both
            sides like a background-image rather than the hands marching
            inward as the card shrinks. At desktop the stage equals the card,
            so nothing there changes. */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full min-w-[1262px] pointer-events-none">
          {/* LEFT HANDS */}
          <img src={secondhand} alt="" loading="lazy" decoding="async" className="hand-2 absolute bottom-0 left-[6.5rem] w-[74px] max-w-none pointer-events-none select-none" />
          <img src={fifthhand} alt="" loading="lazy" decoding="async" className="hand-5 absolute bottom-0 left-[5.5rem] w-[340px] max-w-none pointer-events-none select-none" />
          <img src={thirdhand} alt="" loading="lazy" decoding="async" className="hand-3 absolute bottom-0 left-[7.5rem] w-[530px] max-w-none pointer-events-none select-none" />

          {/* RIGHT HANDS */}
          <img src={firsthand} alt="" loading="lazy" decoding="async" className="hand-1 absolute bottom-0 right-[6rem] w-[470px] max-w-none pointer-events-none select-none" />
          <img src={sixthhand} alt="" loading="lazy" decoding="async" className="hand-6 absolute bottom-0 right-[13rem] w-[72px] max-w-none pointer-events-none select-none" />
          <img src={fourthhand} alt="" loading="lazy" decoding="async" className="hand-4 absolute bottom-0 right-[6.5rem] w-[77px] max-w-none pointer-events-none select-none" />
        </div>

        {/* CONTENT */}
        <div className="w-full px-6">
          <div className="footer-headline flex mt-16 gap-5 items-center flex-col">

            <div className="text-[2.8rem] md:text-[3.8rem] lg:text-[4.5rem] leading-[1] tracking-wider font-black text-center text-black flex flex-col gap-4">
              Join the Sharp <br /> Frenzy
              <span className="footer-subtext text-lg md:text-xl lg:text-2xl tracking-normal leading-8 md:leading-10 font-normal text-black">
                Join the community of the Razor Sharp Defi
                <br />
                enthusiasts for all updates from the Razor Team
              </span>
            </div>

            <div className="flex flex-col md:flex-row text-base gap-4 md:gap-6 items-center font-medium text-white mb-10 w-full md:w-auto">

              <a
                href="#"
                onMouseEnter={handleBtnEnter}
                onMouseLeave={handleBtnLeave}
                onTouchEnd={handleBtnLeave}
                onTouchCancel={handleBtnLeave}
                className="footer-btn-x flex py-[1rem] px-8 gap-5 rounded-2xl items-center bg-[#180523] w-full md:w-auto justify-center will-change-transform"
              >
                <div>Follow us on X</div>
                <img className="w-8 h-8" src={x} alt="x" loading="lazy" decoding="async" />
              </a>

              <a
                href="#"
                onMouseEnter={handleBtnEnter}
                onMouseLeave={handleBtnLeave}
                onTouchEnd={handleBtnLeave}
                onTouchCancel={handleBtnLeave}
                className="footer-btn-discord flex py-[1rem] px-8 gap-5 rounded-2xl items-center bg-[#5A2873] w-full md:w-auto justify-center will-change-transform"
              >
                <div>Join our Discord</div>
                <img className="w-8 h-8" src={discord} alt="discord" loading="lazy" decoding="async" />
              </a>

            </div>
          </div>
        </div>
      </div>

      <div className="text-center justify-center text-white text-medium py-[2.1rem]">
        © 2026 RazorDAO. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
