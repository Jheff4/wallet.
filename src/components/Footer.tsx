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

function Footer() {
  return (
    <footer>
      <div
        style={{
          background: `
            url(${glare}),
            #ED6D20
          `,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
        className="w-full overflow-hidden rounded-lg pb-8 relative"
      >
        {/* COINS OVERLAY */}
        <img
          src={coins}
          alt=""
          className="
            pointer-events-none
            select-none
            absolute
            inset-0
            w-[80%]
            left-[46%]
            top-[5.5rem]
            -translate-x-1/2
          "
        />

        {/* LEFT HANDS */}
        <img
          src={secondhand}
          alt=""
          className="
            absolute
            bottom-0
            left-[6.5rem]
            w-[74px]
            pointer-events-none
            select-none
          "
        />

        <img
          src={fifthhand}
          alt=""
          className="
            absolute
            bottom-0
            left-[5.5rem]
            w-[340px]
            pointer-events-none
            select-none
          "
        />

        <img
          src={thirdhand}
          alt=""
          className="
            absolute
            bottom-0
            left-[7.5rem]
            w-[530px]
            pointer-events-none
            select-none
          "
        />

        {/* RIGHT HANDS */}
        <img
          src={firsthand}
          alt=""
          className="
            absolute
            bottom-0
            right-[6rem]
            w-[470px]
            pointer-events-none
            select-none
          "
        />

        <img
          src={sixthhand}
          alt=""
          className="
            absolute
            bottom-0
            right-[13rem]
            w-[72px]
            pointer-events-none
            select-none
          "
        />

        <img
          src={fourthhand}
          alt=""
          className="
            absolute
            bottom-0
            right-[6.5rem]
            w-[77px]
            select-none
          "
        />

        {/* CONTENT */}
        <div className="w-full">
          <div className={`flex mt-16 gap-5 items-center flex-col`}>
            <div
              className="
                text-[4.5rem]
                leading-[1]
                tracking-wide
                font-bold
                text-center
                drop-shadow-[0px_0px_12px_rgba(89,28,129,0.35)]
                flex
                flex-col
                gap-4
              "
            >
              Join the Sharp <br /> Frenzy
              <span className="text-2xl tracking-normal leading-10 font-medium">
                Join the community of the Razor Sharp Defi
                <br />
                enthusiasts for all updates from the Razor Team
              </span>
            </div>

            <div className="flex flex-wrap text-base gap-6 items-center font-medium text-white mb-10">
              <a
                href="https://chromewebstore.google.com/detail/razor-wallet/fdcnegogpncmfejlfnffnofpngdiejii"
                className="flex py-[1rem] px-8 gap-5 rounded-2xl items-center bg-[#180523]"
              >
                <div>Follow us on X</div>
                <img className="w-8 h-8" src={x} alt="x" />
              </a>

              <a
                href="https://chromewebstore.google.com/detail/razor-wallet/fdcnegogpncmfejlfnffnofpngdiejii"
                className="flex py-[1rem] px-8 gap-5 rounded-2xl items-center bg-[#5A2873]"
              >
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
