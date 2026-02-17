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
            url(${coins}) 31% 100% / 80% no-repeat,
            url(${glare}) center 100% / contain no-repeat,
            #ED6D20
          `,
        }}
        className="w-full overflow-hidden rounded-lg pb-8 relative"
      >
        {/* LEFT HANDS */}
        <img
          src={secondhand}
          alt=""
          className="
            hidden xl:block
            absolute bottom-0 left-[6.5rem]
            w-[74px]
            pointer-events-none select-none
          "
        />

        <img
          src={fifthhand}
          alt=""
          className="
            hidden xl:block
            absolute bottom-0 left-[5.5rem]
            w-[340px]
            pointer-events-none select-none
          "
        />

        <img
          src={thirdhand}
          alt=""
          className="
            hidden xl:block
            absolute bottom-0 left-[7.5rem]
            w-[530px]
            pointer-events-none select-none
          "
        />

        {/* RIGHT HANDS */}
        <img
          src={firsthand}
          alt=""
          className="
            hidden xl:block
            absolute bottom-0 right-[6rem]
            w-[470px]
            pointer-events-none select-none
          "
        />

        <img
          src={sixthhand}
          alt=""
          className="
            hidden xl:block
            absolute bottom-0 right-[13rem]
            w-[72px]
            pointer-events-none select-none
          "
        />

        <img
          src={fourthhand}
          alt=""
          className="
            hidden xl:block
            absolute bottom-0 right-[6.5rem]
            w-[77px]
            pointer-events-none select-none
          "
        />

        {/* CONTENT */}
        <div className="w-full px-6">
          <div className="flex mt-16 gap-5 items-center flex-col">
            {/* MAIN TEXT */}
            <div
              className="
                text-[2.8rem] md:text-[3.8rem] lg:text-[4.5rem]
                leading-[1]
                tracking-wider
                font-bold
                text-center
                text-black
                flex flex-col gap-4
              "  
            >
              Join the Sharp <br /> Frenzy

              <span
                className="
                  text-lg md:text-xl lg:text-2xl
                  tracking-normal
                  leading-8 md:leading-10
                  font-medium
                  text-black
                "
              >
                Join the community of the Razor Sharp Defi
                <br />
                enthusiasts for all updates from the Razor Team
              </span>
            </div>

            {/* BUTTONS */}
            <div
              className="
                flex flex-col md:flex-row
                text-base
                gap-4 md:gap-6
                items-center
                font-medium
                text-white
                mb-10
                w-full md:w-auto
              "
            >
              <a
                href="https://chromewebstore.google.com/detail/razor-wallet/fdcnegogpncmfejlfnffnofpngdiejii"
                className="
                  flex
                  py-[1rem] px-8
                  gap-5
                  rounded-2xl
                  items-center
                  bg-[#180523]
                  w-full md:w-auto
                  justify-center
                "
              >
                <div>Follow us on X</div>
                <img className="w-8 h-8" src={x} alt="x" />
              </a>

              <a
                href="https://chromewebstore.google.com/detail/razor-wallet/fdcnegogpncmfejlfnffnofpngdiejii"
                className="
                  flex
                  py-[1rem] px-8
                  gap-5
                  rounded-2xl
                  items-center
                  bg-[#5A2873]
                  w-full md:w-auto
                  justify-center
                "
              >
                <div>Join our Discord</div>
                <img className="w-8 h-8" src={discord} alt="discord" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center justify-center text-white text-medium py-[2.1rem]">
        © 2025 RazorDAO. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
