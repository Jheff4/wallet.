import firstCard from "../assets/first.webp";
import thirdCard from "../assets/third.webp";
import fourthCard from "../assets/fourth.webp";
import fifthCard from "../assets/fifth.webp";
import sixthCard from "../assets/sixth.svg";
import seventhCard from "../assets/seventh.webp";
import sixthBg from "../assets/sixth-bg.webp";
import eighthCard from "../assets/eighth.webp";
import walletIcon from "../assets/razor.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Features() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Lives outside the context so cleanup can kill it: tweens created
    // later from a timeline callback aren't collected by gsap.context().
    let floatTween: gsap.core.Tween | null = null;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".feature-card");

      // Both .from() tweens below animate FROM a hidden state TO whatever the
      // cards already render as, and the float loop is continuous decorative
      // motion with no fixed end — so under reduced motion we skip building
      // the timeline entirely rather than forcing any state.
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=150",
          toggleActions: "play none none reverse",
        },
      });

      // Promote to their own layer for the reveal, then release so the
      // cards don't hold GPU memory for the rest of the page's life.
      gsap.set(cards, { willChange: "transform, opacity" });

      tl.from(cards, {
        y: 90,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: {
          each: 0.19,
        },
        // Block body, not a concise arrow: gsap.set() returns a Tween, and
        // gsap 3.14's Callback type requires void.
        onComplete: () => {
          gsap.set(cards, { willChange: "auto" });
        },
      });

      // Each wallet-card carries its own baked-in `transform: translate(x,y)`
      // for the stacked look, so an absolute `y` here would land every card
      // on the same value — making them travel different distances, and some
      // of them travel the wrong way. yPercent is relative to the card's own
      // height and composes on top of `y` instead of overwriting it, so all
      // five rise by an identical ~30px and `y` is left free for the float.
      tl.from(
        ".wallet-card",
        {
          yPercent: 33,
          opacity: 0,
          scale: 0.97,
          duration: 0.7,
          ease: "power3.out",
          stagger: {
            each: 0.08,
            from: "end",
          },
        },
        "-=0.4",
      );

      tl.add(() => {
        // Timeline callbacks re-fire every time the playhead crosses them,
        // and this ScrollTrigger reverses — without the guard, each scroll
        // past the section stacked another infinite tween on the same
        // elements, all fighting over the same property.
        if (floatTween) return;
        gsap.set(".wallet-card", { willChange: "transform" });
        floatTween = gsap.to(".wallet-card", {
          y: "+=6",
          duration: 3,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          stagger: {
            each: 0.4,
          },
        });
      });
    }, sectionRef);

    return () => {
      floatTween?.kill();
      ctx.revert();
    };
  }, []);

  const height = 440;

  const wrapper = "feature-card group [perspective:1000px]";

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
  `;

  const mediaWrapper = `
    absolute
    bottom-0
    right-0
    pointer-events-none
    select-none
  `;

  return (
    <div ref={sectionRef} className="w-full py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-2xs:gap-2">
        {/* 1 — NFTs */}
        <div className={wrapper}>
          <div style={{ height }} className={`bg-[#9B7BB0] ${baseCard}`}>
            <h3 className="text-[2.6rem] leading-[1.1] p-6 pt-6 font-semibold tracking-normal text-black">
              Collect, Trade <br />& Show off <br />
              NFTs
            </h3>

            <img
              src={firstCard}
              alt=""
              loading="lazy"
              decoding="async"
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
            <h3 className="text-[2.9rem] leading-[1.1] font-semibold tracking-wide text-black text-end mt-8">
              Connect to <br /> Multiple <br /> Dapps
            </h3>

            {/* STACKED WALLET CARDS */}
            <div className="absolute top-[17.5rem] left-2 w-[70%] h-[90px]">
              {/* CARD 5 */}
              <div
                className="wallet-card absolute inset-0 rounded-[22px]"
                style={{
                  background: "rgba(255,152,91,0.4)",
                  transform: "translate(75px,50px)",
                }}
              />

              {/* CARD 4 */}
              <div
                className="wallet-card absolute inset-0 rounded-[22px]"
                style={{
                  background: "#FF985B",
                  transform: "translate(55px,27px)",
                }}
              />

              {/* CARD 3 */}
              <div
                className="wallet-card absolute inset-0 rounded-[22px]"
                style={{
                  background: "#FFC4A0",
                  transform: "translate(35px,4px)",
                }}
              />

              {/* CARD 2 */}
              <div
                className="wallet-card absolute inset-0 rounded-[22px]"
                style={{
                  background: "#FFDFCB",
                  transform: "translate(14px,-24px)",
                }}
              />

              {/* CARD 1 — MAIN */}
              <div
                className="
                  wallet-card
                  absolute inset-0
                  bg-white
                  rounded-[22px]
                  flex items-center gap-4 max-xl:gap-2
                  px-5
                  max-md:px-4
                "
                style={{
                  transform: "translate(-3px,-50px)",
                }}
              >
                <img src={walletIcon} alt="Wallet" className="w-12 h-12" />

                <span
                  className="
                    text-[1.3rem]
                    font-semibold
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
            <h3 className="text-[3.8rem] leading-[1.1] font-semibold tracking-wide text-white my-auto z-20">
              All your <br /> assets <br className="max-md:hidden" /> are{" "}
              <br className="max-lg:hidden max-md:block" /> secured
            </h3>

            <img
              src={thirdCard}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-[18rem] lg:w-[70%] pointer-events-none select-none"
            />
          </div>
        </div>

        {/* 4 — Transactions */}
        <div className={wrapper}>
          <div
            style={{ height }}
            className={`bg-[#070723] ${baseCard} p-[0.7rem] pt-4`}
          >
            <h3 className="text-[3rem] xs:text-[2.8rem] sm:text-[3rem] md:text-[3.2rem] xl:text-[3.3rem] leading-[1.1] 2xl:leading-none font-semibold tracking-normal 2xl:tracking-wide text-white whitespace-nowrap relative sm:w-max sm:left-1/2 sm:-translate-x-1/2">
              10M+ <br className="xs:hidden sm:block" /> Transactions <br />{" "}
              since March, <br /> 2025
            </h3>

            <img
              src={fourthCard}
              alt=""
              loading="lazy"
              decoding="async"
              className={`${mediaWrapper} w-full -bottom-7 xs:-bottom-16 sm:-bottom-0 md:-bottom-14 lg:-bottom-8 xl:-bottom-0`}
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
                  font-semibold
                  tracking-wide
                  pointer-events-none
                  select-none
                  xl:whitespace-nowrap
                  translate-y-[13px]
                  xl:w-max
                  xl:left-1/2
                  xl:right-auto
                  xl:-translate-x-1/2
                "
                style={{
                  color: "#FFC000",

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
                200k+
                <br /> users world
                <br /> wide
              </h3>

              {/* MAIN TEXT */}
              <h3
                className="
                  relative
                  text-[3.2rem]
                  xl:text-[3.4rem]
                  leading-[1]
                  font-semibold
                  tracking-wide
                  text-white
                  xl:whitespace-nowrap
                  xl:w-max
                  xl:left-1/2
                  xl:-translate-x-1/2
                "
                style={{
                  textShadow: "0px 8px 0px #000000",
                }}
              >
                200k+
                <br /> users world
                <br /> wide
              </h3>
            </div>

            <h3
              className="
                text-[3.2rem]
                xl:text-[3.4rem]
                leading-[1]
                font-semibold
                tracking-wide
                translate-y-[13px]
                xl:whitespace-nowrap
                relative
                xl:w-max
                xl:left-1/2
                xl:-translate-x-1/2
              "
              style={{
                color: "#FFC000",

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
              200k+
              <br /> users world
              <br /> wide
              <br />
              200k+
              <br /> users world
            </h3>

            <img
              src={fifthCard}
              alt=""
              loading="lazy"
              decoding="async"
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
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <h3 className="text-[3.2rem] leading-[1] font-semibold tracking-wide text-white relative z-10 pt-6 w-max left-1/2 -translate-x-1/2">
              Seamless <br className="xs:hidden sm:block" /> and Secure <br />{" "}
              onboarding
            </h3>

            <img
              src={sixthCard}
              alt=""
              loading="lazy"
              decoding="async"
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
            <h3 className="text-[3.8rem] leading-[1.1] font-semibold tracking-wide mt-14 z-20 text-[#331642]">
              Swap <br className="lg:hidden" /> tokens <br /> in <br /> wallet
            </h3>

            <img
              src={seventhCard}
              alt=""
              loading="lazy"
              decoding="async"
              className={`${mediaWrapper} w-full h-full xs:w-[90%] xs:h-[120%] lg:w-full xl:h-full`}
            />
          </div>
        </div>

        {/* 8 — Mobile DeFi */}
        <div className={wrapper}>
          <div
            style={{ height }}
            className={`bg-[#9B7BB0] ${baseCard} px-2 pt-10 2xs:pt-8 xs:pt-4 xs:px-12 sm:px-4 sm:pt-7 lg:pt-8`}
          >
            <h3 className="text-[2.65rem] xl:text-[2.8rem] leading-[1] text-center font-semibold tracking-wide text-black relative w-max left-1/2 -translate-x-1/2">
              Decentralised <br /> finance on <br /> your mobile
            </h3>

            <img
              src={eighthCard}
              alt=""
              loading="lazy"
              decoding="async"
              className={`${mediaWrapper} w-[40%] 2xs:w-[37%] xs:w-[28%] sm:w-[39%] md:w-[35%] lg:w-[39%] absolute left-1/2 -translate-x-1/2`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
