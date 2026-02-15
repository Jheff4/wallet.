import firstCard from '../assets/first.svg'
import thirdCard from '../assets/third.svg'
import fourthCard from '../assets/fourth.svg'
import fifthCard from '../assets/fifth.svg'
import fifthBg from '../assets/fifth-bg.svg'
import sixthCard from '../assets/sixth.svg'
import seventhCard from '../assets/seventh.svg'
import sixthBg from '../assets/sixth-bg.svg'
import eighthCard from '../assets/eighth.svg'
import walletIcon from '../assets/razor.png'

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
                  flex items-center gap-4
                  px-5
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
                    whitespace-nowrap
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
            className={`bg-[#070723] ${baseCard} p-[0.7rem] pt-4`}
          >
            <h3 className="text-[3.47rem] leading-none font-bold tracking-wide text-white whitespace-nowrap">
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
            <div className="relative z-10">
              <h3
                className="
                  absolute
                  inset-0
                  text-[3.5rem]
                  leading-[1]
                  font-bold
                  tracking-wide
                  pointer-events-none
                  select-none
                "
                style={{
                  transform: 'translateY(13px)',
                  color: '#FFC000',

                  textShadow: `
                    /* cardinal */
                    1px  0   0 #000,
                    -1px  0   0 #000,
                    0    1px 0 #000,
                    0   -1px 0 #000,

                    /* diagonals (fills gaps) */
                    1px  1px 0 #000,
                    -1px -1px 0 #000,
                    1px -1px 0 #000,
                    -1px  1px 0 #000
                  `,
                }}
              >
                200k+<br /> users world<br /> wide
              </h3>

              {/* MAIN TEXT */}
              <h3
                className="
                  relative
                  text-[3.5rem]
                  leading-[1]
                  font-bold
                  tracking-wide
                  text-white
                "
                style={{
                  textShadow: '0px 8px 0px #000000',
                }}
              >
                200k+<br /> users world<br /> wide
              </h3>

            </div>

            <img
              src={fifthBg}
              className={`${mediaWrapper} mr-4`}
            />

            <img
              src={fifthCard}
              className="
                absolute
                bottom-0
                right-[-3px]
                w-[98%]
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

            <img
              src={seventhCard}
              className={`${mediaWrapper} w-full h-full`}
            />
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
