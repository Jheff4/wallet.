import firstCard from '../assets/first.svg'
import thirdCard from '../assets/third.svg'
import fourthCard from '../assets/fourth.svg'
import fifthCard from '../assets/fifth.svg'
import sixthCard from '../assets/sixth.svg'
import sixthBg from '../assets/sixth-bg.svg'
import eighthCard from '../assets/eighth.svg'

function Features() {
  const height = 440

  const wrapper = 'group [perspective:1000px]'

  const baseCard = `
    relative
    rounded-xl
    overflow-hidden
    p-6
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
    <div className="w-full py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        {/* 1 — NFTs */}
        <div className={wrapper}>
          <div
            style={{ height }}
            className={`bg-[#9B7BB0] ${baseCard}`}
          >
            <h3 className="text-[2.9rem] leading-[1.1] pt-2 font-bold tracking-wide text-black">
              Collect, Trade <br />& Show off <br />NFTs
            </h3>

            <img
              src={firstCard}
              className={`${mediaWrapper} w-[75%] absolute left-1/2 -translate-x-1/2`}
            />
          </div>
        </div>

        {/* 2 — Connect Dapps */}
        <div className={wrapper}>
          <div
            style={{ height }}
            className={`bg-[linear-gradient(180deg,#FF7827_0%,#D05A13_100%)] ${baseCard}`}
          >
            <h3 className="text-[2.9rem] leading-[1.1] font-bold tracking-wide text-black text-end mt-8 mr-2">
              Connect to <br /> Multiple <br /> Dapps
            </h3>

            {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[70%]">
              <div className="h-[70px] rounded-2xl bg-white/90 shadow-xl" />
              <div className="h-[70px] rounded-2xl bg-white/70 mt-[-40px] ml-6" />
              <div className="h-[70px] rounded-2xl bg-white/50 mt-[-40px] ml-12" />
            </div> */}
          </div>
        </div>

        {/* 3 — Secured Assets */}
        <div className={wrapper}>
          <div
            style={{ height }}
            className={`bg-[#331642] ${baseCard}`}
          >
            <h3 className="text-[3.8rem] leading-[1.1] font-bold tracking-wide text-white mt-16 z-20">
              All your <br /> assets <br /> are <br /> secured
            </h3>

            <img
              src={thirdCard}
              className={`${mediaWrapper} w-[70%] bottom-16 right-3`}
            />
          </div>
        </div>

        {/* 4 — Transactions */}
        <div className={wrapper}>
          <div
            style={{ height }}
            className={`bg-[#070723] ${baseCard} p-2 pt-4`}
          >
            <h3 className="text-[3.5rem] leading-none font-bold tracking-wide text-white">
              10M+ <br /> Transactions <br /> since March, <br /> 2025
            </h3>

            <img
              src={fourthCard}
              className={`${mediaWrapper} w-full`}
            />
          </div>
        </div>

        {/* 5 — Users */}
        <div className={wrapper}>
          <div
            style={{ height }}
            className={`bg-[#FFC000] ${baseCard} overflow-hidden`}
          >
            {/* BACKGROUND TEXT LAYERS */}
            <div className="absolute inset-0 pointer-events-none select-none">

              {/* Outline layer */}
              <div
                className="
                  absolute
                  -top-6
                  left-4
                  text-[7rem]
                  font-black
                  leading-[0.9]
                  text-transparent
                  [-webkit-text-stroke:2px_black]
                  opacity-70
                "
              >
                Wide <br />
                200k+ <br />
                users
                world <br />
                wide
              </div>

              {/* Deep faded layer */}
              <div
                className="
                  absolute
                  bottom-[-40px]
                  left-4
                  text-[7rem]
                  font-black
                  leading-[0.9]
                  text-transparent
                  [-webkit-text-stroke:2px_black]
                  opacity-30
                "
              >
                200k+ <br />
                users <br />
                world
              </div>
            </div>

            {/* FOREGROUND TEXT */}
            <h3
              className="
                relative
                z-10
                text-[2.8rem]
                leading-[1.05]
                font-black
                tracking-tight
                text-white
              "
              style={{
                textShadow: '0px 8px 0px #000000',
              }}
            >
              200k+<br /> users world<br /> wide
            </h3>
            
            {/* EMOJI IMAGE */}
            {/* <img
              src={fifthCard}
              className="
                absolute
                bottom-[-10px]
                right-[-10px]
                w-[95%]
                z-10
                pointer-events-none
                select-none
              "
            /> */}
          </div>
        </div>

        {/* 6 — Onboarding */}
        <div className={wrapper}>
          <div
            style={{ height }}
            className={`${baseCard}`}
          >
            {/* Background waves */}
            <img
              src={sixthBg}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <h3 className="text-[3.4rem] leading-[1] font-bold tracking-wide text-white relative z-10 pt-6">
              Seamless <br /> and Secure <br /> onboarding
            </h3>

            <img
              src={sixthCard}
              className={`${mediaWrapper} w-[62%] absolute left-1/2 -translate-x-1/2`}
            />
          </div>
        </div>

        {/* 7 — Swap */}
        <div className={wrapper}>
          <div
            style={{ height }}
            className={`bg-[#FFFFFF] ${baseCard}`}
          >
            <h3 className="text-[3.8rem] leading-[1.1] font-bold tracking-wide mt-14 z-20 text-[#331642]">
              Swap tokens <br /> in <br /> wallet
            </h3>

            {/* Abstract blob placeholders */}
            <div className="absolute bottom-0 right-0 w-[85%] h-[70%]">
              <div className="absolute w-[220px] h-[220px] bg-orange-400 rounded-full blur-2xl bottom-0 right-0 opacity-80" />
              <div className="absolute w-[160px] h-[160px] bg-red-400 rounded-full blur-2xl bottom-10 right-20 opacity-70" />
            </div>
          </div>
        </div>

        {/* 8 — Mobile DeFi */}
        <div className={wrapper}>
          <div
            style={{ height }}
            className={`bg-[#9B7BB0] ${baseCard}`}
          >
            <h3 className="text-[3rem] leading-[1] text-center font-bold tracking-wide text-black">
              Decentralised <br /> finance on <br /> your mobile
            </h3>

            <img
              src={eighthCard}
              className={`${mediaWrapper} w-[39%] absolute left-1/2 -translate-x-1/2`}
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Features
