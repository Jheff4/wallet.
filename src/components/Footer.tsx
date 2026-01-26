import x from '../assets/x.svg'
import discord from '../assets/discord.svg'
import glare from '../assets/glare.svg'

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
        className="w-full overflow-hidden rounded-lg pb-8"
      >
        <div className="w-full">
          <div
            className={`flex mt-20 gap-10 items-center flex-col`}
          >
            <div
              className="
                text-[4.5rem]
                leading-[1.1]
                tracking-wide
                font-black
                text-center
                drop-shadow-[0px_0px_12px_rgba(89,28,129,0.35)]
                flex
                flex-col
                gap-4
              "
            >
              Join the Sharp <br/>Frenzy
              <span className="text-2xl font-medium">Join the community of the Razor Sharp Defi<br /> enthusiasts for all updates from the Razor Team</span>
            </div>

            <div className="flex flex-wrap text-base gap-6 items-center font-medium text-white mb-10">
              <a
                href="https://chromewebstore.google.com/detail/razor-wallet/fdcnegogpncmfejlfnffnofpngdiejii"
                className="flex py-[0.8rem] px-8 gap-4 rounded-2xl items-center bg-[#180523]"
              >
                <div>Follow us on X</div>
                <img className="w-8 h-8" src={x} alt="x" />
              </a>
              <a
                href="https://chromewebstore.google.com/detail/razor-wallet/fdcnegogpncmfejlfnffnofpngdiejii"
                className="flex py-[0.8rem] px-8 gap-4 rounded-2xl items-center bg-[#5A2873]"
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
